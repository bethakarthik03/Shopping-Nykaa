import React from 'react';
import ProductPage from './ProductPage';
import dress from '../Assets/dress.jpg';


const Dress = () => {
  const product = {
    id: 5,
    name: "Women Maxi Dress",
    img: dress,
    price: "₹599.99"
  };

  const thumbnails = [dress, dress, dress, dress];
  const sizes = ['Free Size'];
  

  return (
    <ProductPage
      product={product}
      mainImage={dress}
      thumbnails={thumbnails}
      tag="New Arrival"
      title="Women Maxi Dress"
      rating="4.2"
      reviews="Based on 85 ratings"
      price="₹599.99"
      discount="40% Off"
      sizes={sizes}
    />
  );
};

export default Dress;
