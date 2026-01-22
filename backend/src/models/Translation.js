import mongoose from "mongoose";

const translationSchema = new mongoose.Schema(
  {
    chapterNumber: {
      type: Number,
      required: true
    },
    verseNumber: {
      type: Number,
      required: true
    },
    language: {
      type: String,
      enum: ["hi", "en"],
      required: true
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: "Bhagavad Gita"
    }
  },
  { timestamps: true }
);

// prevent duplicate translations
translationSchema.index(
  { chapterNumber: 1, verseNumber: 1, language: 1 },
  { unique: true }
);

export default mongoose.model("Translation", translationSchema);
