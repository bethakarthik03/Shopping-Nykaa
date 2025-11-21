import React from 'react';
import ProductPage from './ProductPage';
import shoesredtape from '../Assets/shoesredtape.jpeg';
import shoesredtape1 from '../Assets/shoesredtape1.jpg';
import shoesredtape2 from '../Assets/shoesredtape2.jpeg';
import shoesredtape3 from '../Assets/shoesredtape3.jpeg';

const ShoesRedTape = () => {
  const product = {
    id: 14,
    name: "Red Tape Shoes",
    img: shoesredtape,
    price: "₹1,800"
  };

  const thumbnails = [shoesredtape, shoesredtape1, shoesredtape2, shoesredtape3];
  const sizes = ['6', '7', '8', '9', '10'];

  return (
    <ProductPage
      product={product}
      mainImage={shoesredtape}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Red Tape Shoes"
      rating="3.8"
      reviews="Based on 100 ratings"
      price="₹1,800"
      discount="25% Off"
      sizes={sizes}
    />
  );
};

export default ShoesRedTape;
