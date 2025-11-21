import React from 'react';
import ProductPage from './ProductPage';
import puma from '../Assets/puma.jpeg';
import puma1 from '../Assets/puma1.jpeg';
import puma2 from '../Assets/puma2.jpeg';
import puma3 from '../Assets/puma3.jpeg';

const Puma = () => {
  const product = {
    id: 2,
    name: "Smashic Unisex White Sneakers",
    img: puma,
    price: "₹1,800"
  };

  const thumbnails = [puma, puma1, puma2, puma3];
  const sizes = ['30', '32', '34', '36', '38'];

  return (
    <ProductPage
      product={product}
      mainImage={puma}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Smashic Unisex White Sneakers"
      rating="3.9"
      reviews="Based on 1541 ratings"
      price="₹1,800"
      discount="50% Off"
      sizes={sizes}
    />
  );
};

export default Puma;
