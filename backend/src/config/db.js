import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("DEBUG: Checking environment variables...");
    console.log("Keys in process.env:", Object.keys(process.env).join(", "));
    console.log("MONGO_URI Type:", typeof process.env.MONGO_URI);
    
    // Fallback to MONGODB_URI if MONGO_URI is missing
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

    if (!uri) {
        throw new Error("MONGO_URI or MONGODB_URI is undefined in environment variables.");
    }

    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
