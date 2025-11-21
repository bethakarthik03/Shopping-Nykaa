import React from 'react';
import ProductPage from './ProductPage';
import perfume from '../Assets/perfume.jpg';

const Perfume = () => {
  const product = {
    id: 1,
    name: "Floral Perfume",
    img: perfume,
    price: "₹799.99"
  };

  const thumbnails = [perfume, perfume, perfume, perfume];
  const sizes = ['30ml', '50ml', '100ml'];

  return (
    <ProductPage
      product={product}
      mainImage={perfume}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Floral Perfume"
      rating="4.8"
      reviews="Based on 200 ratings"
      price="₹799.99"
      discount="15% Off"
      sizes={sizes}
    />
  );
};

export default Perfume;
