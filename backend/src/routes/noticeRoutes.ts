import { Router } from "express";
import { body } from "express-validator";
import * as noticeController from "../controllers/noticeController";
import { authenticate, authorize, optionalAuth } from "../middleware/auth";

const router = Router();

/**
 * @route   GET /api/notices
 * @desc    Get all notices
 * @access  Public
 */
router.get("/", optionalAuth, noticeController.getNotices);

/**
 * @route   GET /api/notices/:id
 * @desc    Get notice by ID
 * @access  Public
 */
router.get("/:id", optionalAuth, noticeController.getNotice);

/**
 * @route   POST /api/notices
 * @desc    Create notice
 * @access  Private (Editor/Admin)
 */
router.post(
  "/",
  [
    authenticate,
    authorize("EDITOR", "ADMIN"),
    body("category")
      .isIn(["GENERAL", "SUBMISSION", "CONFERENCE", "ANNOUNCEMENT"])
      .withMessage("Invalid category"),
    body("title").notEmpty().withMessage("Title is required"),
    body("content").notEmpty().withMessage("Content is required"),
  ],
  noticeController.createNotice
);

/**
 * @route   PUT /api/notices/:id
 * @desc    Update notice
 * @access  Private (Editor/Admin)
 */
router.put(
  "/:id",
  authenticate,
  authorize("EDITOR", "ADMIN"),
  noticeController.updateNotice
);

/**
 * @route   DELETE /api/notices/:id
 * @desc    Delete notice
 * @access  Private (Editor/Admin)
 */
router.delete(
  "/:id",
  authenticate,
  authorize("EDITOR", "ADMIN"),
  noticeController.deleteNotice
);

export default router;
