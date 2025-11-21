import React from 'react';
import ProductPage from './ProductPage';
import aj from '../Assets/AjDezines.jpeg';
import Aj1 from '../Assets/Aj1.jpeg';
import Aj2 from '../Assets/Aj2.jpeg';
import Aj3 from '../Assets/Aj3.jpeg';

const KidsAj = () => {
  const product = {
    id: 8,
    name: "Kids Aj Dezines Outfit",
    img: aj,
    price: "₹1,800"
  };

  const thumbnails = [aj, Aj1, Aj2, Aj3];
  const sizes = ['1', '2', '3', '4', '5'];

  return (
    <ProductPage
      product={product}
      mainImage={aj}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Aj Dezines Outfit"
      rating="3.9"
      reviews="Based on 1541 ratings"
      price="₹1,800"
      discount="50% Off"
      sizes={sizes}
    />
  );
};

export default KidsAj;
