import React, { useState } from "react";
import api from "./services/api";
 
export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/products", formData);
      alert(res.data.message);
      setFormData({ name: "", price: "", description: "", image: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };
 
  return (
    <div style={{ padding: 20 }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: 300 }}>
        <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <button type="submit" style={{ marginTop: 10 }}>Add Product</button>
      </form>
    </div>
  );
}
 
 