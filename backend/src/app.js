import express from "express";
import cors from "cors";
import chapterRoutes from "./routes/chapter.routes.js";
import verseRoutes from "./routes/verse.routes.js";
import translationRoutes from "./routes/translation.routes.js";
import authRoutes from "./routes/auth.routes.js";
import aiRoutes from "./routes/ai.routes.js";

import connectDB from "./config/db.js";
import initDailyWisdomJob from "./jobs/dailyWisdomJob.js";

const app = express();

// Connect to Database
connectDB();
// Initialize Cron Jobs
initDailyWisdomJob();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/chapters", chapterRoutes);

// add below chapter routes
app.use("/api/verses", verseRoutes);

import subscriberRoutes from "./routes/subscriber.routes.js";

app.use("/api/translations", translationRoutes);
app.use("/api/auth", authRoutes); 
app.use("/api/ai", aiRoutes);
app.use("/api/subscribers", subscriberRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Bhagavad Gita API running 🚩");
});

export default app;
