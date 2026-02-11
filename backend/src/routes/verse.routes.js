import express from "express";
import {
  getVersesByChapter,
  getVerse,
  getFullVerse,
  getRandomVerse
} from "../controllers/verse.controller.js";

const router = express.Router();


// ⚠️ "full" MUST come first
router.get("/full/:chapterNumber/:verseNumber", getFullVerse);
router.get("/random", getRandomVerse); 
router.get("/:chapterNumber/:verseNumber", getVerse);
router.get("/:chapterNumber", getVersesByChapter);

export default router;
