import React from 'react';
import ProductPage from './ProductPage';
import styli from '../Assets/stylimendark.jpeg';
import thumb1 from '../Assets/thumb1.jpeg';
import thumb2 from '../Assets/thumb2.jpeg';
import thumb3 from '../Assets/thumb3.jpeg';

const Styli = () => {
  const product = {
    id: 1,
    name: "Men Dark Blue Ballon Fit Dark Wash Denim",
    img: styli,
    price: "₹1,440"
  };

  const thumbnails = [styli, thumb1, thumb2, thumb3];
  const sizes = ['30', '32', '34', '36', '38'];

  return (
    <ProductPage
      product={product}
      mainImage={styli}
      thumbnails={thumbnails}
      tag="BestSeller"
      title="Men Dark Blue Ballon Fit Dark Wash Denim"
      rating="3.6"
      reviews="Based on 25 ratings"
      price="₹1,440"
      discount="28% Off"
      sizes={sizes}
    />
  );
};

export default Styli;
