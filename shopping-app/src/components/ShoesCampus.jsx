import React from 'react';
import ProductPage from './ProductPage';
import shoescampus from '../Assets/shoescampus.jpeg';
import shoescampus1 from '../Assets/shoescampus1.jpeg';
import shoescampus2 from '../Assets/shoescampus2.jpeg';
import shoescampus3 from '../Assets/shoescampus3.jpeg';

const ShoesCampus = () => {
  const product = {
    id: 12,
    name: "Campus Shoes",
    img: shoescampus,
    price: "₹1,500"
  };

  const thumbnails = [shoescampus, shoescampus1, shoescampus2, shoescampus3];
  const sizes = ['6', '7', '8', '9', '10'];

  return (
    <ProductPage
      product={product}
      mainImage={shoescampus}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Campus Shoes"
      rating="4.0"
      reviews="Based on 200 ratings"
      price="₹1,500"
      discount="30% Off"
      sizes={sizes}
    />
  );
};

export default ShoesCampus;
