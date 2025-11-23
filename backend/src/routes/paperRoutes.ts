import { Router } from "express";
import { body } from "express-validator";
import * as paperController from "../controllers/paperController";
import { authenticate, authorize } from "../middleware/auth";
import { upload, handleUploadError } from "../middleware/upload";

const router = Router();

/**
 * @route   POST /api/papers
 * @desc    Create new paper
 * @access  Private
 */
router.post(
  "/",
  [
    authenticate,
    body("submissionType").isIn(["REGULAR", "URGENT"]).withMessage("Invalid submission type"),
    body("language").isIn(["KOREAN", "ENGLISH"]).withMessage("Invalid language"),
    body("titleKo").notEmpty().withMessage("Korean title is required"),
    body("titleEn").notEmpty().withMessage("English title is required"),
    body("abstractKo").notEmpty().withMessage("Korean abstract is required"),
    body("abstractEn").notEmpty().withMessage("English abstract is required"),
    body("keywords").isArray({ min: 1 }).withMessage("At least one keyword is required"),
    body("researchField").notEmpty().withMessage("Research field is required"),
  ],
  paperController.createPaper
);

/**
 * @route   GET /api/papers
 * @desc    Get user's papers
 * @access  Private
 */
router.get("/", authenticate, paperController.getUserPapers);

/**
 * @route   GET /api/papers/all
 * @desc    Get all papers (admin/editor)
 * @access  Private (Editor/Admin)
 */
router.get(
  "/all",
  authenticate,
  authorize("EDITOR", "ADMIN"),
  paperController.getAllPapers
);

/**
 * @route   GET /api/papers/:id
 * @desc    Get paper details
 * @access  Private
 */
router.get("/:id", authenticate, paperController.getPaper);

/**
 * @route   PUT /api/papers/:id
 * @desc    Update paper
 * @access  Private
 */
router.put("/:id", authenticate, paperController.updatePaper);

/**
 * @route   DELETE /api/papers/:id
 * @desc    Delete paper
 * @access  Private
 */
router.delete("/:id", authenticate, paperController.deletePaper);

/**
 * @route   POST /api/papers/:id/submit
 * @desc    Submit paper for review
 * @access  Private
 */
router.post("/:id/submit", authenticate, paperController.submitPaper);

/**
 * @route   POST /api/papers/:id/files
 * @desc    Upload paper file
 * @access  Private
 */
router.post(
  "/:id/files",
  authenticate,
  upload.single("file"),
  handleUploadError,
  paperController.uploadPaperFile
);

export default router;
