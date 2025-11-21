import React from 'react';
import ProductPage from './ProductPage';
import zouk from '../Assets/bagszouk.jpeg'; // Assuming this is the image for Zouk, adjust if needed
import zouk1 from '../Assets/bagszouk1.jpeg';
import zouk2 from '../Assets/bagszouk2.jpeg';
import zouk3 from '../Assets/bagszouk3.jpeg';

const BagsZouk = () => {
  const product = {
    id: 12,
    name: "Zouk Bag",
    img: zouk,
    price: "₹4,000"
  };

  const thumbnails = [zouk, zouk1, zouk2, zouk3];
  

  return (
    <ProductPage
      product={product}
      mainImage={zouk}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Zouk Bag"
      rating="4.3"
      reviews="Based on 220 ratings"
      price="₹4,000"
      discount="65% Off"
      
    />
  );
};

export default BagsZouk;
