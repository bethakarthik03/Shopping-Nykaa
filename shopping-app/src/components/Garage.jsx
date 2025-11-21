import React from 'react';
import ProductPage from './ProductPage';
import garage from '../Assets/gargego.jpeg';
import garage1 from '../Assets/garage1.jpeg';
import garage2 from '../Assets/garage2.jpeg';
import garage3 from '../Assets/garage3.jpeg';

const Garage = () => {
  const product = {
    id: 6,
    name: "Men Garage Shirt",
    img: garage,
    price: "₹753"
  };

  const thumbnails = [garage, garage1, garage2, garage3];
  const sizes = ['30', '32', '34', '36', '38'];

  return (
    <ProductPage
      product={product}
      mainImage={garage}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Men Garage Shirt"
      rating="3.8"
      reviews="Based on 63 ratings"
      price="₹753"
      discount="65% Off"
      sizes={sizes}
    />
  );
};

export default Garage;
