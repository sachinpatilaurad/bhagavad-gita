import Translation from "../models/Translation.js";

// GET translation by chapter, verse, language
export const getTranslation = async (req, res) => {
  try {
    const { chapterNumber, verseNumber } = req.params;
    const { lang } = req.query;

    if (!lang) {
      return res.status(400).json({ message: "Language query param is required" });
    }

    const translation = await Translation.findOne({
      chapterNumber,
      verseNumber,
      language: lang
    });

    if (!translation) {
      return res.status(404).json({ message: "Translation not found" });
    }

    res.status(200).json(translation);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch translation" });
  }
};
