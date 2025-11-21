import React from 'react';
import ProductPage from './ProductPage';
import casual from '../Assets/casual.jpg';

const Casualwear = () => {
  const product = {
    id: 3,
    name: "Mast & Harbour Men Cotton Striped Casual Shirt",
    price: "₹299.99",
    img: casual,
  };

  const thumbnails = [casual, casual, casual, casual];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={casual}
      thumbnails={thumbnails}
      tag="New Arrival"
      title="Mast & Harbour Men Cotton Striped Casual Shirt"
      rating="4.4"
      reviews="Based on 120 ratings"
      price="₹299.99"
      discount="₹499"
      sizes={sizes}
    />
  );
};

export default Casualwear;
