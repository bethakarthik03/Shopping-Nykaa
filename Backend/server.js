// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Simple health check route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/orders", orderRoutes);

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.error("❌ Error starting server:", err);
  } else {
    console.log(`🚀 Server running on port ${PORT}`);
  }
});
