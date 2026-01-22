import express from "express";
import cors from "cors";
import chapterRoutes from "./routes/chapter.routes.js";
import verseRoutes from "./routes/verse.routes.js";
import translationRoutes from "./routes/translation.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/chapters", chapterRoutes);

// add below chapter routes
app.use("/api/verses", verseRoutes);

app.use("/api/translations", translationRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Bhagavad Gita API running 🚩");
});

export default app;
