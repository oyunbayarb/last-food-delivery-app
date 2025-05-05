import mongoose from "mongoose";
import {MONGO_URI} from "./env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connect to db success");
  } catch (error) {
    console.log(error);
  }
};
