import React from 'react';
import ProductPage from './ProductPage';
import footheels from '../Assets/footheels.jpg';

const Formalwear = () => {
  const product = {
    id: 1,
    name: "High Heels",
    img: footheels,
    price: "₹999.99"
  };

  const thumbnails = [footheels, footheels, footheels, footheels];
  const sizes = ['6', '7', '8', '9', '10'];

  return (
    <ProductPage
      product={product}
      mainImage={footheels}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="High Heels"
      rating="4.2"
      reviews="Based on 50 ratings"
      price="₹999.99"
      discount="20% Off"
      sizes={sizes}
    />
  );
};

export default Formalwear;

