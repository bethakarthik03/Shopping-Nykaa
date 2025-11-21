import React from 'react';
import ProductPage from './ProductPage';
import tommy from '../Assets/bagstommy.jpeg'; // Assuming this is the image for Tommy, adjust if needed
import tommy1 from '../Assets/bagstommy1.jpeg';
import tommy2 from '../Assets/bagstommy2.jpeg';
import tommy3 from '../Assets/bagstommy3.jpeg';

const BagsTommy = () => {
  const product = {
    id: 11,
    name: "Tommy Bag",
    img: tommy,
    price: "₹4,200"
  };

  const thumbnails = [tommy, tommy1, tommy2, tommy3];
  const sizes = []; // No sizes for bags

  return (
    <ProductPage
      product={product}
      mainImage={tommy}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Tommy Bag"
      rating="4.1"
      reviews="Based on 180 ratings"
      price="₹4,200"
      discount="25% Off"
      sizes={sizes}
    />
  );
};

export default BagsTommy;
