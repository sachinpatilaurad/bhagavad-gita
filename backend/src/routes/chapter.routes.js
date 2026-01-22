import express from "express";
import {
  getAllChapters,
  getChapterByNumber
} from "../controllers/chapter.controller.js";

const router = express.Router();

router.get("/", getAllChapters);
router.get("/:chapterNumber", getChapterByNumber);

export default router;
