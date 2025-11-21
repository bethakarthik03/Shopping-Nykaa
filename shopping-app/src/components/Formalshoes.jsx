import React from 'react';
import ProductPage from './ProductPage';
import formalshoes from '../Assets/fromalshoes.jpg';

const Formalshoes = () => {
  const product = {
    id: 1,
    name: "Formal Shoes",
    img: formalshoes,
    price: "₹799.99"
  };

  const thumbnails = [formalshoes, formalshoes, formalshoes, formalshoes];
  const sizes = ['6', '7', '8', '9', '10', '11'];

  return (
    <ProductPage
      product={product}
      mainImage={formalshoes}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Formal Shoes"
      rating="4.5"
      reviews="Based on 300 ratings"
      price="₹799.99"
      discount="25% Off"
      sizes={sizes}
    />
  );
};

export default Formalshoes;
