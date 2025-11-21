import React from 'react';
import ProductPage from './ProductPage';
import shampoo from '../Assets/shampoo.jpg';

const Shampoo = () => {
  const product = {
    id: 1,
    name: "Herbal Shampoo",
    img: shampoo,
    price: "₹349.99"
  };

  const thumbnails = [shampoo, shampoo, shampoo, shampoo];
  const sizes = ['200ml', '400ml', '600ml'];

  return (
    <ProductPage
      product={product}
      mainImage={shampoo}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Herbal Shampoo"
      rating="4.6"
      reviews="Based on 150 ratings"
      price="₹349.99"
      discount="25% Off"
      sizes={sizes}
    />
  );
};

export default Shampoo;
