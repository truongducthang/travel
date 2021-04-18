import React from 'react';
import Banner from '../../common/Banner/Banner';
import CarouselCpn from '../../common/Carousel/Carousel';
import './_Home.scss';
import Products from '../../components/HomePageComponents/Products';
const HomePage = () => {
  return (
    <div className="HomePage">
      <CarouselCpn />
      <div className="container">
        <Banner />
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
