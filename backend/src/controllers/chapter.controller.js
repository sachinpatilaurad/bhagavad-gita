import Chapter from "../models/Chapter.js";

// GET all chapters
export const getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find().sort({ chapterNumber: 1 });
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch chapters" });
  }
};

// GET single chapter by number
export const getChapterByNumber = async (req, res) => {
  try {
    const { chapterNumber } = req.params;

    const chapter = await Chapter.findOne({ chapterNumber });

    if (!chapter) {
      return res.status(404).json({ message: "Chapter not found" });
    }

    res.status(200).json(chapter);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch chapter" });
  }
};
