import React from 'react';
import ProductPage from './ProductPage';
import bitiya from '../Assets/bitiyabhama.jpeg';
import bitiya1 from '../Assets/bitiya1.jpeg';
import bitiya2 from '../Assets/bitiya2.jpeg';
import bitiya3 from '../Assets/bitiya3.jpeg';

const KidsBitiya = () => {
  const product = {
    id: 10,
    name: "Kids Bitiya Bhama Outfit",
    img: bitiya,
    price: "₹1,350"
  };

  const thumbnails = [bitiya, bitiya1, bitiya2, bitiya3];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={bitiya}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Bitiya Bhama Outfit"
      rating="3.8"
      reviews="Based on 63 ratings"
      price="₹1,350"
      discount="65% Off"
      sizes={sizes}
    />
  );
};

export default KidsBitiya;
