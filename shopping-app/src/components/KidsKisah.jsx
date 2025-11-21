import React from 'react';
import ProductPage from './ProductPage';
import kisah from '../Assets/Kisah.jpeg';
import kisah1 from '../Assets/kisah1.jpeg';
import kisah2 from '../Assets/kisah2.jpeg';
import kisah3 from '../Assets/kisah3.jpeg';

const KidsKisah = () => {
  const product = {
    id: 11,
    name: "Kids Kisah Outfit",
    img: kisah,
    price: "₹1,499"
  };

  const thumbnails = [kisah, kisah1, kisah2, kisah3];
  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];

  return (
    <ProductPage
      product={product}
      mainImage={kisah}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Kids Kisah Outfit"
      rating="3.4"
      reviews="Based on 25 ratings"
      price="₹1,499"
      discount="35% Off"
      sizes={sizes}
    />
  );
};

export default KidsKisah;
