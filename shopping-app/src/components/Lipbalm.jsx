import React from 'react';
import ProductPage from './ProductPage';
import lipbalm from '../Assets/lipbalm.jpg';

const Lipbalm = () => {
  const product = {
    id: 1,
    name: "Hydrating Lip Balm",
    img: lipbalm,
    price: "₹149.99"
  };

  const thumbnails = [lipbalm, lipbalm, lipbalm, lipbalm];
  const sizes = ['4g', '8g', '12g'];

  return (
    <ProductPage
      product={product}
      mainImage={lipbalm}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Hydrating Lip Balm"
      rating="4.5"
      reviews="Based on 100 ratings"
      price="₹149.99"
      discount="20% Off"
      sizes={sizes}
    />
  );
};

export default Lipbalm;
