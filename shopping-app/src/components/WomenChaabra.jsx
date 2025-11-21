import React from 'react';
import ProductPage from './ProductPage';
import chaabra from '../Assets/chaabra.webp';
import chaabra1 from '../Assets/chaabra1.jpeg';
import chaabra2 from '../Assets/chaabra2.jpeg';
import chaabra3 from '../Assets/chaabra3.jpeg';

const WomenChaabra = () => {
  const product = {
    id: 8,
    name: "Women Chaabra Dress",
    img: chaabra,
    price: "₹3,920"
  };

  const thumbnails = [chaabra, chaabra1, chaabra2, chaabra3];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <ProductPage
      product={product}
      mainImage={chaabra}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Women Chaabra Dress"
      rating="3.4"
      reviews="Based on 25 ratings"
      price="₹3,920"
      discount="75% Off"
      sizes={sizes}
    />
  );
};

export default WomenChaabra;
