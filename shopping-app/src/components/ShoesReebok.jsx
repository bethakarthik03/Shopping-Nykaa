import React from 'react';
import ProductPage from './ProductPage';
import shoesreebok from '../Assets/shoesreebok.jpeg';
import shoesreebok1 from '../Assets/shoesreebok1.jpeg';
import shoesreebok2 from '../Assets/shoesreebok2.jpeg';
import shoesreebok3 from '../Assets/shoesreebok3.jpeg';

const ShoesReebok = () => {
  const product = {
    id: 15,
    name: "Reebok Shoes",
    img: shoesreebok,
    price: "₹2,200"
  };

  const thumbnails = [shoesreebok, shoesreebok1, shoesreebok2, shoesreebok3];
  const sizes = ['6', '7', '8', '9', '10'];

  return (
    <ProductPage
      product={product}
      mainImage={shoesreebok}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Reebok Shoes"
      rating="4.1"
      reviews="Based on 120 ratings"
      price="₹2,200"
      discount="15% Off"
      sizes={sizes}
    />
  );
};

export default ShoesReebok;
