// controllers/productController.js
import mongoose from "mongoose";
import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    return res.status(500).json({ message: "Error fetching products" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    console.log("Received product data:", { name, price, description, image });

    if (!name || price == null) {
      return res
        .status(400)
        .json({ message: "name and price are required" });
    }

    const product = new Product({ name, price, description, image });

    console.log("Saving product...");
    const savedProduct = await product.save();
    console.log("Product saved successfully:", savedProduct._id);

    return res.json({ message: "Product created", product: savedProduct });
  } catch (err) {
    console.error("Error saving product:", err);
    return res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    return res.status(500).json({ message: err.message });
  }
};
