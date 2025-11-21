import React from 'react';
import ProductPage from './ProductPage';
import sunscreen from '../Assets/sunscreen.jpg';

const Sunscreen = () => {
  const product = {
    id: 1,
    name: "SPF 50 Sunscreen",
    img: sunscreen,
    price: "₹299.99"
  };

  const thumbnails = [sunscreen, sunscreen, sunscreen, sunscreen];
  const sizes = ['50ml', '100ml', '200ml'];

  return (
    <ProductPage
      product={product}
      mainImage={sunscreen}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="SPF 50 Sunscreen"
      rating="4.7"
      reviews="Based on 180 ratings"
      price="₹299.99"
      discount="30% Off"
      sizes={sizes}
    />
  );
};

export default Sunscreen;
