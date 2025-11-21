import React, { useEffect, useState } from "react";
import api from "./services/api";
 
export default function ProductList() {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
 
  return (
    <div style={{ padding: 20 }}>
      <h1>🛍️ Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ddd", padding: 10, width: 200 }}>
            <img src={p.image} alt={p.name} width="100%" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}