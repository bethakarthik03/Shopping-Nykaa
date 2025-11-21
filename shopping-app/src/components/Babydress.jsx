import React from 'react';
import ProductPage from './ProductPage';
import babyDress from '../Assets/babydress.jpg';


const BabyDress = () => {
  const product = {
    id: 10,
    name: "Baby Dress",
    img: babyDress,
    price: "₹999",
  };

  const thumbnails = [babyDress, babyDress, babyDress, babyDress];
  const sizes = ['0-6M', '6-12M', '12-18M', '18-24M'];

  return (
    <ProductPage
      product={product}
      mainImage={babyDress}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Baby Dress"
      rating="4.2"
      reviews="Based on 30 ratings"
      price="₹999"
      discount="45% Off"
      sizes={sizes}
    />
  );
};

export default BabyDress;