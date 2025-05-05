import mongoose, {Schema} from "mongoose";

const foodOrderItems = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  food: {type: Schema.Types.ObjectId, required: true, ref: "Food"},
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    foodOrderItems: {
      type: [foodOrderItems],
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Canceled", "Delivered"],
      default: "Pending",
    },
  },
  {timestamps: true}
);

export const orderModel = mongoose.model("Order", orderSchema);
