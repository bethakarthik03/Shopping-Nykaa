import React from 'react';
import ProductPage from './ProductPage';
import tshirt from '../Assets/tshirt.jpg';

const Tshirts = () => {
  const product = {
    id: 2,
    name: "Mast & Harbour Men Cotton T-Shirt",
    price: "₹249.99",
    img: tshirt,
  };

  const thumbnails = [tshirt, tshirt, tshirt, tshirt];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={tshirt}
      thumbnails={thumbnails}
      tag="Trending"
      title="Mast & Harbour Men Cotton T-Shirt"
      rating="4.3"
      reviews="Based on 132 ratings"
      price="₹249.99"
      discount="₹399"
      sizes={sizes}
    />
  );
};

export default Tshirts;
