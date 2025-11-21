// routes/orderRoutes.js
import express from "express";
import auth from "../middleware/auth.js";
import {
  createOrder,
  getMyOrders,
  markOrderPaid,
} from "../controllers/orderController.js";

const router = express.Router();

// All these routes require authentication
router.use(auth);

router.post("/", createOrder);
router.get("/mine", getMyOrders);
router.put("/:id/pay", markOrderPaid);

export default router;
