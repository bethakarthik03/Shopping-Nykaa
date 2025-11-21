import React from 'react';
import ProductPage from './ProductPage';
import campus from '../Assets/campussutra.jpeg';
import campus1 from '../Assets/campus1.jpeg';
import campus2 from '../Assets/campus2.jpeg';
import campus3 from '../Assets/campus3.jpeg';

const Campus = () => {
  const product = {
    id: 7,
    name: "Men Black Solid Casual Shirt",
    img: campus,
    price: "₹608"
  };
  const thumbnails = [campus, campus1, campus2, campus3];
  const sizes = ['30', '32', '34', '36', '38'];
  return (
    <ProductPage
      product={product}
      mainImage={campus}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Men Black Solid Casual Shirt"
      rating="3.4"
      reviews="Based on 25 ratings"
      price="₹608"
      discount="35% Off"
      sizes={sizes}
    />
  );
};

export default Campus;
