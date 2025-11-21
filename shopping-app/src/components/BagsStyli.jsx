import React from 'react';
import ProductPage from './ProductPage';
import bagstyli from '../Assets/bagsstyli.jpeg';
import bagstyli1 from '../Assets/bagsstyli1.jpeg';
import bagstyli2 from '../Assets/Bagsstyli2.jpeg';
import bagstyli3 from '../Assets/bagsstyli3.jpeg';

const BagsStyli = () => {
  const product = {
    id: 10,
    name: "Styli Bag",
    img: bagstyli,
    price: "₹1,332"
  };

  const thumbnails = [bagstyli, bagstyli1, bagstyli2, bagstyli3];
  const sizes = []; // No sizes for bags

  return (
    <ProductPage
      product={product}
      mainImage={bagstyli}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Styli Bag"
      rating="4.0"
      reviews="Based on 150 ratings"
      price="₹1,332"
      discount="30% Off"
      sizes={sizes}
    />
  );
};

export default BagsStyli;
