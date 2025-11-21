// controllers/orderController.js
import Order from "../models/Order.js";
import mongoose from "mongoose";

export const createOrder = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { items, total, shippingDetails, payment } = req.body;

    console.log("Received order data:", { userId, items, total, shippingDetails, payment });

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "items are required" });
    }

    if (typeof total !== "number") {
      return res.status(400).json({ message: "total must be a number" });
    }

    if (
      !shippingDetails ||
      !shippingDetails.name ||
      !shippingDetails.address ||
      !shippingDetails.phone
    ) {
      return res
        .status(400)
        .json({ message: "shippingDetails (name, address, phone) are required" });
    }

    // Convert productId strings to ObjectIds
    const processedItems = items.map(item => ({
      ...item,
      productId: mongoose.Types.ObjectId.isValid(item.productId) ? mongoose.Types.ObjectId(item.productId) : item.productId
    }));

    const order = new Order({
      user: userId,
      items: processedItems,
      total,
      shippingDetails,
      payment: payment || { paid: false },
      status: payment?.paid ? "paid" : "created",
    });

    console.log("Saving order...");
    const savedOrder = await order.save();
    console.log("Order saved successfully:", savedOrder._id);

    return res.json({ message: "Order created", order: savedOrder });
  } catch (err) {
    console.error("Error saving order:", err);
    return res.status(500).json({ message: err.message });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const userId = req.user?.id;
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
    return res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    return res.status(500).json({ message: err.message });
  }
};

export const markOrderPaid = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;
    const { paymentId, paid } = req.body;

    const order = await Order.findOne({ _id: id, user: userId });
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.payment = {
      ...(order.payment || {}),
      paymentId: paymentId || order.payment?.paymentId,
      paid: paid !== undefined ? paid : true,
      paidAt: new Date(),
    };
    order.status = "paid";

    await order.save();

    return res.json({ message: "Order marked as paid", order });
  } catch (err) {
    console.error("Error marking order as paid:", err);
    return res.status(500).json({ message: err.message });
  }
};
