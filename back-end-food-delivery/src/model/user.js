import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {type: String, required: true},
    phoneNumber: {
      type: String,
      required: true,
      min: 8,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
  },
  {timestamps: true}
);

export const userModel = mongoose.model("User", userSchema);
