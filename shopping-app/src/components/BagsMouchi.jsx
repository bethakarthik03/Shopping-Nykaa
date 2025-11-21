import React from 'react';
import ProductPage from './ProductPage';
import mouchi from '../Assets/bagsmouchi.jpeg'; // Assuming this is the image for Mouchi, adjust if needed
import mouchi1 from '../Assets/bagsmouchi1.jpeg';
import mouchi2 from '../Assets/bagsmouchi2.jpeg';
import mouchi3 from '../Assets/bagsmouchi3.jpeg';

const BagsMouchi = () => {
  const product = {
    id: 9,
    name: "Mouchi Bag",
    img: mouchi,
    price: "₹3,894"
  };

  const thumbnails = [mouchi, mouchi1, mouchi2, mouchi3];
  const sizes = []; // No sizes for bags

  return (
    <ProductPage
      product={product}
      mainImage={mouchi}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Mouchi Bag"
      rating="4.2"
      reviews="Based on 200 ratings"
      price="₹3,894"
      discount="50% Off"
      sizes={sizes}
    />
  );
};

export default BagsMouchi;
