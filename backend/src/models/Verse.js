import mongoose from "mongoose";

const verseSchema = new mongoose.Schema(
  {
    chapterNumber: {
      type: Number,
      required: true
    },
    verseNumber: {
      type: Number,
      required: true
    },
    textSanskrit: {
      type: String,
      required: true
    },
    transliteration: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// prevent duplicates
verseSchema.index(
  { chapterNumber: 1, verseNumber: 1 },
  { unique: true }
);

export default mongoose.model("Verse", verseSchema);
