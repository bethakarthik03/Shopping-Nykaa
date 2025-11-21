import React from 'react';
import ProductPage from './ProductPage';
import sareewear from '../Assets/sareewear.jpg';


const Sareewear = () => {
  const product = {
    id: 6,
    name: "Women Silk Saree",
    img: sareewear,
    price: "₹799.99"
  };

  const thumbnails = [sareewear, sareewear, sareewear, sareewear];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={sareewear}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Women Silk Saree"
      rating="4.5"
      reviews="Based on 102 ratings"
      price="₹799.99"
      discount="35% Off"
      sizes={sizes}
    />
  );
};

export default Sareewear;
