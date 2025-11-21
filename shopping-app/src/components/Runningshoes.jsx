import React from 'react';
import ProductPage from './ProductPage';
import runningshoes from '../Assets/runningshoes.jpg';

const Runningshoes = () => {
  const product = {
    id: 1,
    name: "Running Shoes",
    img: runningshoes,
    price: "₹1,800.00"
  };

  const thumbnails = [runningshoes, runningshoes, runningshoes, runningshoes];
  const sizes = ['6', '7', '8', '9', '10', '11'];

  return (
    <ProductPage
      product={product}
      mainImage={runningshoes}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Running Shoes"
      rating="4.4"
      reviews="Based on 220 ratings"
      price="₹599.99"
      discount="25% Off"
      sizes={sizes}
    />
  );
};

export default Runningshoes;
