import React from 'react';
import ProductPage from './ProductPage';
import footwearwomens from '../Assets/footwearwomens.jpg';

const Footwearwomen = () => {
  const product = {
    id: 1,
    name: "Women's Footwear",
    img: footwearwomens,
    price: "₹499.99"
  };

  const thumbnails = [footwearwomens, footwearwomens, footwearwomens, footwearwomens];
  const sizes = ['5', '6', '7', '8', '9', '10'];

  return (
    <ProductPage
      product={product}
      mainImage={footwearwomens}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Women's Footwear"
      rating="4.3"
      reviews="Based on 250 ratings"
      price="₹499.99"
      discount="20% Off"
      sizes={sizes}
    />
  );
};

export default Footwearwomen;
