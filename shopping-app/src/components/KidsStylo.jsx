import React from 'react';
import ProductPage from './ProductPage';
import stylo from '../Assets/Stylobug.jpeg';
import stylo1 from '../Assets/stylo1.jpeg';
import stylo2 from '../Assets/stylo2.jpeg';
import stylo3 from '../Assets/stylo3.jpeg';

const KidsStylo = () => {
  const product = {
    id: 9,
    name: "Kids Stylo Outfit",
    img: stylo,
    price: "₹1,440",
  };

  const thumbnails = [stylo, stylo1, stylo2, stylo3];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={stylo}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Stylo Outfit"
      rating="3.4"
      reviews="Based on 25 ratings"
      price="₹1,440"
      discount="55% Off"
      sizes={sizes}
    />
  );
};

export default KidsStylo;