import React from 'react';
import ProductPage from './ProductPage';
import stylum from '../Assets/stylum.webp';
import stylum1 from '../Assets/stylum1.jpeg';
import stylum2 from '../Assets/stylum2.jpeg';
import stylum3 from '../Assets/stylum3.jpeg';

const WomenStylum = () => {
  const product = {
    id: 3,
    name: "Women Slim Fit Multi Striped Full Sleeves Cutaway Collar Casual Shirt - White",
    img: stylum,
    price: "₹1,334"
  };

  const thumbnails = [stylum, stylum1, stylum2, stylum3];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={stylum}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Women Slim Fit Multi Striped Full Sleeves Cutaway Collar Casual Shirt - White"
      rating="3.8"
      reviews="Based on 63 ratings"
      price="₹1,334"
      discount="65% Off"
      sizes={sizes}
    />
   
  );
  
  
};

export default WomenStylum;

