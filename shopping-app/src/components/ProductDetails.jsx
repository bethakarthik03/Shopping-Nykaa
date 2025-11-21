import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../api/productApi";
import ProductPage from "./ProductPage";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(id);
        setProduct(data);
      } catch (err) {
        console.log("Error fetching product", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (!product) return <h1>Product Not Found</h1>;

  return (
    <ProductPage
      product={product}
      mainImage={product.image}
      thumbnails={[product.image]}
      title={product.name}
      price={`₹${product.price}`}
      discount=""
      tag="Popular"
      rating="4.5"
      reviews="1,234 reviews"
      sizes={["S", "M", "L", "XL"]}
    />
  );
};

export default ProductDetails;
