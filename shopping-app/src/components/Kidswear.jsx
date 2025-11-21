import React from 'react';
import ProductPage from './ProductPage';
import kidsWear from '../Assets/kidswear.jpg';


const KidsWear = () => {
  const product = {
    id: 13,
    name: "Kids Wear",
    img: kidsWear,
    price: "₹1,199",
  };

  const thumbnails = [kidsWear, kidsWear, kidsWear, kidsWear];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={kidsWear}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Wear"
      rating="3.9"
      reviews="Based on 35 ratings"
      price="₹1,199"
      discount="48% Off"
      sizes={sizes}
    />
  );
};

export default KidsWear;
