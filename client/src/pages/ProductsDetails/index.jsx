import React, { useEffect } from 'react';
import HeaderImageLayout from '../../common/HeaderImageLayout';

const ProductsDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ProductsDetailsPage">
      <HeaderImageLayout _namePage=" our Products " />
    </div>
  );
};

export default ProductsDetailsPage;
