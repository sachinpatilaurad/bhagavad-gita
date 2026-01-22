import Verse from "../models/Verse.js";
import Translation from "../models/Translation.js";

// GET all verses of a chapter
export const getVersesByChapter = async (req, res) => {
  try {
    const { chapterNumber } = req.params;

    const verses = await Verse.find({ chapterNumber })
      .sort({ verseNumber: 1 });

    if (!verses.length) {
      return res.status(404).json({ message: "No verses found" });
    }

    res.status(200).json(verses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch verses" });
  }
};

// GET single verse
export const getVerse = async (req, res) => {
  try {
    const { chapterNumber, verseNumber } = req.params;

    const verse = await Verse.findOne({
      chapterNumber,
      verseNumber
    });

    if (!verse) {
      return res.status(404).json({ message: "Verse not found" });
    }

    res.status(200).json(verse);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch verse" });
  }
};

// ✅ GET verse with Sanskrit + Hindi + English
export const getFullVerse = async (req, res) => {
  try {
    const { chapterNumber, verseNumber } = req.params;

    const verse = await Verse.findOne({
      chapterNumber,
      verseNumber
    });

    if (!verse) {
      return res.status(404).json({ message: "Verse not found" });
    }

    const translations = await Translation.find({
      chapterNumber,
      verseNumber,
      language: { $in: ["hi", "en"] }
    });

    const response = {
      chapterNumber,
      verseNumber,
      sanskrit: {
        text: verse.textSanskrit,
        transliteration: verse.transliteration
      },
      translations: {}
    };

    translations.forEach(t => {
      response.translations[t.language] = t.text;
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch full verse" });
  }
};
