import React from 'react';
import ProductPage from './ProductPage';
import westernwear from '../Assets/westernwear.jpg';

const Westernwear = () => {
  const product = {
    id: 1,
    name: "Women Floral Print Top",
    img: westernwear,
    price: "₹399.99"
  };

  const thumbnails = [westernwear, westernwear, westernwear, westernwear];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={westernwear}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Women Floral Print Top"
      rating="3.6"
      reviews="Based on 25 ratings"
      price="₹399.99"
      discount="28% Off"
      sizes={sizes}
    />
  );
};

export default Westernwear;
