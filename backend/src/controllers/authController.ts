import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import prisma from "../config/database";
import { hashPassword, comparePassword, generateRandomToken } from "../utils/password";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";
import { sendVerificationEmail, sendPasswordResetEmail } from "../utils/email";
import { AppError } from "../middleware/errorHandler";
import { AuthRequest } from "../middleware/auth";

/**
 * Register new user
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const {
      email,
      password,
      nameKo,
      nameEn,
      affiliationKo,
      affiliationEn,
      position,
      phone,
      address,
      orcid,
      memberType,
    } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new AppError(400, "Email already registered");
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Generate email verification token
    const emailVerifyToken = generateRandomToken();

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        nameKo,
        nameEn,
        affiliationKo,
        affiliationEn,
        position,
        phone,
        address,
        orcid,
        memberType: memberType || "REGULAR",
        emailVerifyToken,
        roles: ["MEMBER"],
      },
    });

    // Send verification email
    await sendVerificationEmail(email, emailVerifyToken);

    res.status(201).json({
      message: "Registration successful. Please check your email to verify your account.",
      userId: user.id,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Login user
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError(401, "Invalid email or password");
    }

    // Check password
    const isPasswordValid = await comparePassword(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new AppError(401, "Invalid email or password");
    }

    // Check email verification
    if (!user.emailVerified) {
      throw new AppError(403, "Please verify your email before logging in");
    }

    // Generate tokens
    const accessToken = generateAccessToken({
      id: user.id,
      email: user.email,
      roles: user.roles,
    });

    const refreshToken = generateRefreshToken({
      id: user.id,
      email: user.email,
      roles: user.roles,
    });

    res.json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        nameKo: user.nameKo,
        nameEn: user.nameEn,
        roles: user.roles,
        memberType: user.memberType,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Verify email
 */
export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { token } = req.body;

    const user = await prisma.user.findFirst({
      where: { emailVerifyToken: token },
    });

    if (!user) {
      throw new AppError(400, "Invalid or expired verification token");
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        emailVerifyToken: null,
      },
    });

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    next(error);
  }
};

/**
 * Request password reset
 */
export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Don't reveal if email exists
      res.json({ message: "If email exists, password reset link has been sent" });
      return;
    }

    const resetToken = generateRandomToken();
    const resetExpiry = new Date(Date.now() + 3600000); // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpiry: resetExpiry,
      },
    });

    await sendPasswordResetEmail(email, resetToken);

    res.json({ message: "If email exists, password reset link has been sent" });
  } catch (error) {
    next(error);
  }
};

/**
 * Reset password
 */
export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { token, newPassword } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new AppError(400, "Invalid or expired reset token");
    }

    const passwordHash = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        resetPasswordToken: null,
        resetPasswordExpiry: null,
      },
    });

    res.json({ message: "Password reset successful" });
  } catch (error) {
    next(error);
  }
};

/**
 * Get current user profile
 */
export const getProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        email: true,
        nameKo: true,
        nameEn: true,
        affiliationKo: true,
        affiliationEn: true,
        position: true,
        phone: true,
        address: true,
        orcid: true,
        memberType: true,
        membershipExpiry: true,
        roles: true,
        isReviewer: true,
        isEditor: true,
        emailVerified: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * Update user profile
 */
export const updateProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      nameKo,
      nameEn,
      affiliationKo,
      affiliationEn,
      position,
      phone,
      address,
      orcid,
    } = req.body;

    const user = await prisma.user.update({
      where: { id: req.user!.id },
      data: {
        nameKo,
        nameEn,
        affiliationKo,
        affiliationEn,
        position,
        phone,
        address,
        orcid,
      },
      select: {
        id: true,
        email: true,
        nameKo: true,
        nameEn: true,
        affiliationKo: true,
        affiliationEn: true,
        position: true,
        phone: true,
        address: true,
        orcid: true,
      },
    });

    res.json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Change password
 */
export const changePassword = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
    });

    if (!user) {
      throw new AppError(404, "User not found");
    }

    const isPasswordValid = await comparePassword(currentPassword, user.passwordHash);

    if (!isPasswordValid) {
      throw new AppError(401, "Current password is incorrect");
    }

    const passwordHash = await hashPassword(newPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash },
    });

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    next(error);
  }
};
