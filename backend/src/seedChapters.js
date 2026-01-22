import mongoose from "mongoose";
import dotenv from "dotenv";

import Chapter from "./models/Chapter.js";
import Verse from "./models/Verse.js";

import chapters from "../data/chapters.js";

// verses (make sure all these files exist)
import chapter1Verses from "../data/verses/chapter1.js";
import chapter2Verses from "../data/verses/chapter2.js";
import chapter3Verses from "../data/verses/chapter3.js";
import chapter4Verses from "../data/verses/chapter4.js";
import chapter5Verses from "../data/verses/chapter5.js";
import chapter6Verses from "../data/verses/chapter6.js";
import chapter7Verses from "../data/verses/chapter7.js";
import chapter8Verses from "../data/verses/chapter8.js";
import chapter9Verses from "../data/verses/chapter9.js";
import chapter10Verses from "../data/verses/chapter10.js";
import chapter11Verses from "../data/verses/chapter11.js";
import chapter12Verses from "../data/verses/chapter12.js";
import chapter13Verses from "../data/verses/chapter13.js";
import chapter14Verses from "../data/verses/chapter14.js";
import chapter15Verses from "../data/verses/chapter15.js";
import chapter16Verses from "../data/verses/chapter16.js";
import chapter17Verses from "../data/verses/chapter17.js";
import chapter18Verses from "../data/verses/chapter18.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // -------- SEED CHAPTERS --------
    await Chapter.deleteMany();
    await Chapter.insertMany(chapters);
    console.log("✅ Chapters seeded");

    // -------- SEED VERSES --------
    await Verse.deleteMany();

    const allVerses = [
      ...chapter1Verses,
      ...chapter2Verses,
      ...chapter3Verses,
      ...chapter4Verses,
      ...chapter5Verses,
      ...chapter6Verses,
      ...chapter7Verses,
      ...chapter8Verses,
      ...chapter9Verses,
      ...chapter10Verses,
      ...chapter11Verses,
      ...chapter12Verses,
      ...chapter13Verses,
      ...chapter14Verses,
      ...chapter15Verses,
      ...chapter16Verses,
      ...chapter17Verses,
      ...chapter18Verses
    ];

    await Verse.insertMany(allVerses);
    console.log(`✅ ${allVerses.length} verses seeded`);

    process.exit();
  } catch (error) {
    console.error("❌ Database seeding failed");
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();
