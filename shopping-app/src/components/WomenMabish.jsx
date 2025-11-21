import React from 'react';
import ProductPage from './ProductPage';
import mabish from '../Assets/Mabish.webp';
import mabish1 from '../Assets/mabish1.jpeg';
import mabish2 from '../Assets/mabish2.jpeg';
import mabish3 from '../Assets/mabish3.jpeg';

const WomenMabish = () => {
  const product = {
    id: 4,
    name: "Women Mabish Dress",
    img: mabish,
    price: "₹1,976"
  };

  const thumbnails = [mabish, mabish1, mabish2, mabish3];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={mabish}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Women Mabish Dress"
      rating="3.8"
      reviews="Based on 63 ratings"
      price="₹1,976"
      discount="65% Off"
      sizes={sizes}
    />
  );
};

export default WomenMabish;
