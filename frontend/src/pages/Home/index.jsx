import React from 'react';
import Banner from '../../components/HomePageComponents/Banner/Banner';
import CarouselCpn from '../../components/HomePageComponents/Carousel/Carousel';
import './_Home.scss';
// import Products from '../../components/HomePageComponents/Products';
import Destinations from '../../components/HomePageComponents/Destinations';
import Promotions from '../../components/HomePageComponents/Promotions';
const HomePage = () => {
  return (
    <div className="HomePage">
      <CarouselCpn />
      <div className="container">
        <Destinations />
        <Banner />
        <Promotions />
        {/* <Products /> */}
      </div>
    </div>
  );
};

export default HomePage;
