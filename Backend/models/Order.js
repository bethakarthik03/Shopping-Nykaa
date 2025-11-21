// models/Order.js
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true }, // Changed from ObjectId
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    size: String,
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [orderItemSchema],
    total: { type: Number, required: true },
    shippingDetails: {
      name: String,
      address: String,
      phone: String,
    },
    payment: {
      method: { type: String, default: "razorpay" },
      paymentId: { type: String, default: null },
      paid: { type: Boolean, default: false },
      paidAt: { type: Date, default: null },
    },
    status: { type: String, default: "created" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);