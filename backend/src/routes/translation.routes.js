import express from "express";
import { getTranslation } from "../controllers/translation.controller.js";

const router = express.Router();

router.get("/:chapterNumber/:verseNumber", getTranslation);

export default router;
