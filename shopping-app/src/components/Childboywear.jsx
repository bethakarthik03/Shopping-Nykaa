import React from 'react';
import ProductPage from './ProductPage';
import childboy from '../Assets/childboy.jpg';


const ChildBoyWear = () => {
  const product = {
    id: 11,
    name: "Child Boy Wear",
    img: childboy,
    price: "₹1,299",
  };

  const thumbnails = [childboy, childboy, childboy, childboy];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={childboy}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Child Boy Wear"
      rating="3.8"
      reviews="Based on 28 ratings"
      price="₹1,299"
      discount="50% Off"
      sizes={sizes}
    />
  );
};

export default ChildBoyWear;