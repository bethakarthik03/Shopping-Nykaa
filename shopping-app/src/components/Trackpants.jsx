import React from 'react';
import ProductPage from './ProductPage';
import trackpants from '../Assets/trackpants.jpg';

const Trackpants = () => {
  const product = {
    id: 1,
    name: "Mast & Harbour Men Track Pants",
    img: trackpants,
    price: "₹349.99"
  };

  const thumbnails = [trackpants, trackpants, trackpants, trackpants];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <ProductPage
      product={product}
      mainImage={trackpants}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Mast & Harbour Men Track Pants"
      rating="3.6"
      reviews="Based on 25 ratings"
      price="₹349.99"
      discount="28% Off"
      sizes={sizes}
    />
  );
};

export default Trackpants;
