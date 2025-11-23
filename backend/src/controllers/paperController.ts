import { Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import prisma from "../config/database";
import { AppError } from "../middleware/errorHandler";
import { AuthRequest } from "../middleware/auth";
import { sendPaperSubmissionConfirmation } from "../utils/email";

/**
 * Create new paper submission
 */
export const createPaper = async (
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

    const {
      submissionType,
      language,
      titleKo,
      titleEn,
      abstractKo,
      abstractEn,
      keywords,
      researchField,
      hasFunding,
      fundingInfo,
      authors,
    } = req.body;

    const paper = await prisma.paper.create({
      data: {
        submissionType,
        language,
        titleKo,
        titleEn,
        abstractKo,
        abstractEn,
        keywords,
        researchField,
        hasFunding,
        fundingInfo,
        authorId: req.user!.id,
        status: "DRAFT",
      },
    });

    // Add authors
    if (authors && Array.isArray(authors)) {
      await prisma.paperAuthor.createMany({
        data: authors.map((author: any, index: number) => ({
          paperId: paper.id,
          userId: author.userId,
          nameKo: author.nameKo,
          nameEn: author.nameEn,
          affiliationKo: author.affiliationKo,
          affiliationEn: author.affiliationEn,
          email: author.email,
          orcid: author.orcid,
          authorType: author.authorType,
          authorOrder: index + 1,
          isCorresponding: author.isCorresponding || false,
        })),
      });
    }

    res.status(201).json({
      message: "Paper created successfully",
      paper: {
        id: paper.id,
        titleKo: paper.titleKo,
        status: paper.status,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Submit paper for review
 */
export const submitPaper = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const paper = await prisma.paper.findUnique({
      where: { id },
      include: {
        author: true,
        files: true,
      },
    });

    if (!paper) {
      throw new AppError(404, "Paper not found");
    }

    if (paper.authorId !== req.user!.id) {
      throw new AppError(403, "Unauthorized");
    }

    if (paper.status !== "DRAFT") {
      throw new AppError(400, "Paper has already been submitted");
    }

    // Check if manuscript file exists
    const hasManuscript = paper.files.some((f) => f.fileType === "MANUSCRIPT");
    if (!hasManuscript) {
      throw new AppError(400, "Manuscript file is required");
    }

    await prisma.paper.update({
      where: { id },
      data: {
        status: "SUBMITTED",
        submittedAt: new Date(),
      },
    });

    // Send confirmation email
    await sendPaperSubmissionConfirmation(
      paper.author.email,
      paper.titleKo,
      paper.id
    );

    res.json({ message: "Paper submitted successfully" });
  } catch (error) {
    next(error);
  }
};

/**
 * Get user's papers
 */
export const getUserPapers = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { status } = req.query;

    const where: any = {
      authorId: req.user!.id,
    };

    if (status) {
      where.status = status;
    }

    const papers = await prisma.paper.findMany({
      where,
      include: {
        paperAuthors: true,
        files: {
          where: {
            fileType: "MANUSCRIPT",
          },
          orderBy: {
            version: "desc",
          },
          take: 1,
        },
        reviews: {
          select: {
            status: true,
            decision: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({ papers });
  } catch (error) {
    next(error);
  }
};

/**
 * Get paper details
 */
export const getPaper = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const paper = await prisma.paper.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            nameKo: true,
            nameEn: true,
            email: true,
          },
        },
        paperAuthors: {
          orderBy: {
            authorOrder: "asc",
          },
        },
        files: {
          orderBy: {
            uploadedAt: "desc",
          },
        },
        reviews: {
          include: {
            reviewer: {
              select: {
                nameKo: true,
                nameEn: true,
              },
            },
            scores: true,
          },
        },
      },
    });

    if (!paper) {
      throw new AppError(404, "Paper not found");
    }

    // Check access permission
    const isAuthor = paper.authorId === req.user!.id;
    const isReviewer = paper.reviews.some((r) => r.reviewerId === req.user!.id);
    const isEditor = req.user!.roles.includes("EDITOR") || req.user!.roles.includes("ADMIN");

    if (!isAuthor && !isReviewer && !isEditor) {
      throw new AppError(403, "Unauthorized");
    }

    res.json({ paper });
  } catch (error) {
    next(error);
  }
};

/**
 * Update paper (draft only)
 */
export const updatePaper = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const {
      titleKo,
      titleEn,
      abstractKo,
      abstractEn,
      keywords,
      researchField,
      hasFunding,
      fundingInfo,
    } = req.body;

    const paper = await prisma.paper.findUnique({
      where: { id },
    });

    if (!paper) {
      throw new AppError(404, "Paper not found");
    }

    if (paper.authorId !== req.user!.id) {
      throw new AppError(403, "Unauthorized");
    }

    if (paper.status !== "DRAFT") {
      throw new AppError(400, "Cannot update submitted paper");
    }

    const updatedPaper = await prisma.paper.update({
      where: { id },
      data: {
        titleKo,
        titleEn,
        abstractKo,
        abstractEn,
        keywords,
        researchField,
        hasFunding,
        fundingInfo,
      },
    });

    res.json({
      message: "Paper updated successfully",
      paper: updatedPaper,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete paper (draft only)
 */
export const deletePaper = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const paper = await prisma.paper.findUnique({
      where: { id },
    });

    if (!paper) {
      throw new AppError(404, "Paper not found");
    }

    if (paper.authorId !== req.user!.id) {
      throw new AppError(403, "Unauthorized");
    }

    if (paper.status !== "DRAFT") {
      throw new AppError(400, "Cannot delete submitted paper");
    }

    await prisma.paper.delete({
      where: { id },
    });

    res.json({ message: "Paper deleted successfully" });
  } catch (error) {
    next(error);
  }
};

/**
 * Upload paper file
 */
export const uploadPaperFile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { fileType } = req.body;

    if (!req.file) {
      throw new AppError(400, "No file uploaded");
    }

    const paper = await prisma.paper.findUnique({
      where: { id },
    });

    if (!paper) {
      throw new AppError(404, "Paper not found");
    }

    if (paper.authorId !== req.user!.id) {
      throw new AppError(403, "Unauthorized");
    }

    // Get latest version number
    const latestFile = await prisma.paperFile.findFirst({
      where: {
        paperId: id,
        fileType: fileType || "MANUSCRIPT",
      },
      orderBy: {
        version: "desc",
      },
    });

    const version = latestFile ? latestFile.version + 1 : 1;

    const paperFile = await prisma.paperFile.create({
      data: {
        paperId: id,
        fileType: fileType || "MANUSCRIPT",
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileSize: req.file.size,
        mimeType: req.file.mimetype,
        version,
      },
    });

    res.status(201).json({
      message: "File uploaded successfully",
      file: paperFile,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all papers (admin/editor)
 */
export const getAllPapers = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { status, page = "1", limit = "20" } = req.query;

    const where: any = {};
    if (status) {
      where.status = status;
    }

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skip = (pageNum - 1) * limitNum;

    const [papers, total] = await Promise.all([
      prisma.paper.findMany({
        where,
        include: {
          author: {
            select: {
              nameKo: true,
              nameEn: true,
              email: true,
            },
          },
          paperAuthors: {
            where: {
              authorType: "FIRST_AUTHOR",
            },
          },
          reviews: {
            select: {
              status: true,
              decision: true,
            },
          },
        },
        orderBy: {
          submittedAt: "desc",
        },
        skip,
        take: limitNum,
      }),
      prisma.paper.count({ where }),
    ]);

    res.json({
      papers,
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
