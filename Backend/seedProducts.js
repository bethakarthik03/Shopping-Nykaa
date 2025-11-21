import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";
 
dotenv.config();
connectDB();
 
const products = [
  {
    name: "Nike Air Force 1",
    price: 4999,
    description: "Classic all-white sneakers for daily wear.",
    image: "https://via.placeholder.com/200x200.png?text=Nike+Air+Force+1",
  },
  {
    name: "Adidas Ultraboost",
    price: 8999,
    description: "High-performance running shoes.",
    image: "https://via.placeholder.com/200x200.png?text=Adidas+Ultraboost",
  },
  {
    name: "Puma RS-X",
    price: 6499,
    description: "Retro sneakers with bold style.",
    image: "https://via.placeholder.com/200x200.png?text=Puma+RS-X",
  },
  {
    name: "Converse Chuck Taylor",
    price: 2999,
    description: "Timeless classic canvas shoes.",
    image: "https://via.placeholder.com/200x200.png?text=Converse+All+Star",
  },
  {
    name: "Reebok Classic Leather",
    price: 3799,
    description: "Retro look with premium leather finish.",
    image: "https://via.placeholder.com/200x200.png?text=Reebok+Classic",
  },
];
 
const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};
 
seedProducts();