import { Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import prisma from "../config/database";
import { AppError } from "../middleware/errorHandler";
import { AuthRequest } from "../middleware/auth";

/**
 * Get all notices
 */
export const getNotices = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { category, page = "1", limit = "20" } = req.query;

    const where: any = {};
    if (category) {
      where.category = category;
    }

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const [notices, total] = await Promise.all([
      prisma.notice.findMany({
        where,
        include: {
          author: {
            select: {
              nameKo: true,
              nameEn: true,
            },
          },
        },
        orderBy: [{ isPinned: "desc" }, { publishedAt: "desc" }],
        skip,
        take: limitNum,
      }),
      prisma.notice.count({ where }),
    ]);

    res.json({
      notices,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get notice by ID
 */
export const getNotice = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const notice = await prisma.notice.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            nameKo: true,
            nameEn: true,
          },
        },
      },
    });

    if (!notice) {
      throw new AppError(404, "Notice not found");
    }

    // Increment views
    await prisma.notice.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    res.json({ notice });
  } catch (error) {
    next(error);
  }
};

/**
 * Create notice (admin/editor only)
 */
export const createNotice = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    const { category, title, content, isPinned } = req.body;

    const notice = await prisma.notice.create({
      data: {
        category,
        title,
        content,
        isPinned: isPinned || false,
        authorId: req.user!.id,
      },
    });

    res.status(201).json({
      message: "Notice created successfully",
      notice,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update notice (admin/editor only)
 */
export const updateNotice = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { category, title, content, isPinned } = req.body;

    const notice = await prisma.notice.findUnique({
      where: { id },
    });

    if (!notice) {
      throw new AppError(404, "Notice not found");
    }

    const updatedNotice = await prisma.notice.update({
      where: { id },
      data: {
        category,
        title,
        content,
        isPinned,
      },
    });

    res.json({
      message: "Notice updated successfully",
      notice: updatedNotice,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete notice (admin/editor only)
 */
export const deleteNotice = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const notice = await prisma.notice.findUnique({
      where: { id },
    });

    if (!notice) {
      throw new AppError(404, "Notice not found");
    }

    await prisma.notice.delete({
      where: { id },
    });

    res.json({ message: "Notice deleted successfully" });
  } catch (error) {
    next(error);
  }
};
