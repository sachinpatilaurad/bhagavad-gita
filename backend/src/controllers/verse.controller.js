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

// verseController.js
export const getRandomVerse = async (req, res) => {
  try {
    console.log("Random verse request received..."); // Log to see if route is hit
    
    // Check if Verse model is correctly imported
    const randomVerse = await Verse.aggregate([{ $sample: { size: 1 } }]);
    
    if (!randomVerse || randomVerse.length === 0) {
      return res.status(404).json({ message: "No verses found in database" });
    }

    console.log("Found verse:", randomVerse[0].verseNumber);
    res.status(200).json(randomVerse[0]);
  } catch (error) {
    console.error("Aggregation Error:", error); // This will show the real error in terminal
    res.status(500).json({ message: "Error fetching shloka", error: error.message });
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
