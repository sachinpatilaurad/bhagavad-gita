import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // Optional because Google users don't need a password
    },
    googleId: {
      type: String,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);