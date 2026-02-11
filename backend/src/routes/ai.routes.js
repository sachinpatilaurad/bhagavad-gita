import express from "express";
import { chatWithGita } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/chat", chatWithGita);

export default router;
