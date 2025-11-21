import React from 'react';
import ProductPage from './ProductPage';
import childShirt from '../Assets/childshirt.jpg';


const Childdress = () => {
  const product = {
    id: 12,
    name: "Child Shirt",
    img: childShirt,
    price: "₹749",
  };
const thumbnails = [childShirt, childShirt, childShirt, childShirt];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={childShirt}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Child Shirt"
      rating="3.6"
      reviews="Based on 20 ratings"
      price="₹749"
      discount="40% Off"
      sizes={sizes}
    />
  );
};

export default Childdress;