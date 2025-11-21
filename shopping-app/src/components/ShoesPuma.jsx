import React from 'react';
import ProductPage from './ProductPage';
import shoespuma from '../Assets/shoespuma.jpeg';
import shoespuma1 from '../Assets/shoespuma1.jpeg';
import shoespuma2 from '../Assets/shoespuma2.jpeg';
import shoespuma3 from '../Assets/shoespuma3.jpeg';

const ShoesPuma = () => {
  const product = {
    id: 13,
    name: "Puma Shoes",
    img: shoespuma,
    price: "₹2,500"
  };

  const thumbnails = [shoespuma, shoespuma1, shoespuma2, shoespuma3];
  const sizes = ['6', '7', '8', '9', '10'];

  return (
    <ProductPage
      product={product}
      mainImage={shoespuma}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Puma Shoes"
      rating="4.2"
      reviews="Based on 150 ratings"
      price="₹2,500"
      discount="20% Off"
      sizes={sizes}
    />
  );
};

export default ShoesPuma;
