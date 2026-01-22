import mongoose from "mongoose";
import dotenv from "dotenv";
import Translation from "./models/Translation.js";

// Hindi
import chapter1Hindi from "../data/translations/hi/chapter1.js";

// English
import chapter1English from "../data/translations/en/chapter1.js";

dotenv.config();

const seedTranslations = async () => {
  try {
    console.log("⏳ Starting translation seeding...");

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // delete old hi + en translations
    const result = await Translation.deleteMany({
      language: { $in: ["hi", "en"] }
    });
    console.log(`🧹 Deleted ${result.deletedCount} old translations`);

    const allTranslations = [
      ...chapter1Hindi,
      ...chapter1English
    ];

    await Translation.insertMany(allTranslations);

    console.log(`✅ ${allTranslations.length} translations seeded`);
    process.exit();
  } catch (error) {
    console.error("❌ Translation seeding failed");
    console.error(error);
    process.exit(1);
  }
};

seedTranslations();
