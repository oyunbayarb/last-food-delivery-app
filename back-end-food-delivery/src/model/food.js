import mongoose, {Schema} from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {type: Number, required: true},
    image: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "category",
    },
  },
  {timestamps: true}
);

export const foodModel = mongoose.model("Food", foodSchema);
