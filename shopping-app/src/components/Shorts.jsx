import React from 'react';
import ProductPage from './ProductPage';
import shorts from '../Assets/shorts.jpg';

const Shorts = () => {
  const product = {
    id: 4,
    name: "Mast & Harbour Men Cotton Shorts",
    price: "₹199.99",
    img: shorts
  };

  const thumbnails = [shorts, shorts, shorts, shorts];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={shorts}
      thumbnails={thumbnails}
      tag="Hot Deal"
      title="Mast & Harbour Men Cotton Shorts"
      rating="4.5"
      reviews="Based on 95 ratings"
      price="₹199.99"
      discount="₹349"
      sizes={sizes}
    />
  );
};

export default Shorts;
