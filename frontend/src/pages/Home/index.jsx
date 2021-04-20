import React from 'react';
import Banner from '../../components/HomePageComponents/Banner/Banner';
import CarouselCpn from '../../components/HomePageComponents/Carousel/Carousel';
import './_Home.scss';
// import Products from '../../components/HomePageComponents/Products';
import Destinations from '../../components/HomePageComponents/Destinations';
const HomePage = () => {
  return (
    <div className="HomePage">
      <CarouselCpn />
      <div className="container">
        <Destinations />
        <Banner />
        {/* <Products /> */}
      </div>
    </div>
  );
};

export default HomePage;
