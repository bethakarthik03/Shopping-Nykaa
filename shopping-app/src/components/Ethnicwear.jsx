import React from 'react';
import ProductPage from './ProductPage';
import ethnicwear from '../Assets/ethnicwear.jpg';

const Ethnicwear = () => {
  const product = {
    id: 1,
    name: "Women Embroidered Kurti",
    img: ethnicwear,
    price: "₹499.99"
  };

  const thumbnails = [ethnicwear, ethnicwear, ethnicwear, ethnicwear];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={ethnicwear}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Women Embroidered Kurti"
      rating="3.6"
      reviews="Based on 25 ratings"
      price="₹499.99"
      discount="28% Off"
      sizes={sizes}
    />
  );
};

export default Ethnicwear;
