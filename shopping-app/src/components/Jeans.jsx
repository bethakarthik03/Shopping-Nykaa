import React from 'react';
import ProductPage from './ProductPage';
import jeans from '../Assets/jeans.jpg';

const Jeans = () => {
  const product = {
    id: 1,
    name: "Mast & Harbour Men Slim Fit Jeans",
    price: "₹949.99",
    img: jeans
  };

  const thumbnails = [jeans, jeans, jeans, jeans];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <ProductPage
      product={product}
      mainImage={jeans}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Mast & Harbour Men Slim Fit Jeans"
      rating="3.6"
      reviews="Based on 25 ratings"
      price="₹949.99"
      discount="28% Off"
      sizes={sizes}
    />
  );
};

export default Jeans;
