import express from "express";
import { getProducts, createProduct, getProductById } from "../controllers/productController.js";
import auth from "../middleware/auth.js";
const router = express.Router();
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", auth, createProduct);
export default router;
 