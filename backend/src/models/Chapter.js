import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema(
  {
    chapterNumber: {
      type: Number,
      required: true,
      unique: true
    },
    nameEnglish: {
      type: String,
      required: true
    },
    nameHindi: {
      type: String,
      required: true
    },
    nameSanskrit: {
      type: String,
      required: true
    },
    versesCount: {
      type: Number,
      required: true
    },
    summaryEnglish: String,
    summaryHindi: String
  },
  { timestamps: true }
);

export default mongoose.model("Chapter", chapterSchema);
