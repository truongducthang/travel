import React, { useEffect } from 'react';
import HeaderImageLayout from '../../common/HeaderImageLayout';
import OverView from '../../components/DestinationsDetailsComponents/OverView';
import RelateProducts from '../../components/DestinationsDetailsComponents/RelateProducts';
const DestinationsDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="DestinationsDetailsPage">
      <HeaderImageLayout _namePage="our Destinations" />
      <div
        className="destination"
        style={{
          maxWidth: '1192px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
        }}
      >
        <OverView />
        <RelateProducts />
      </div>
    </div>
  );
};

export default DestinationsDetailsPage;
