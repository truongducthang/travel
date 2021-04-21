import { Col, Row } from 'antd';
import React from 'react';
import BannerItem from './BannerItem/BannerItem';
const ListBanner = [
  {
    id: 1,
    src:
      'https://res.cloudinary.com/dulich/image/upload/v1619010583/travel/parallax-5-filter_qgozfc.jpg',
    route: '/1',
    title: 'Discover Cities ',
    text: 'LAST MINUTE',
  },
  {
    id: 2,
    src:
      'https://res.cloudinary.com/dulich/image/upload/v1619010607/travel/parallax-6-filter_vyhysu.jpg',
    route: '/2',
    title: 'Discover Nature',
    text: 'PROMOTIONS ',
  },
];
const Banner = () => {
  return (
    <div className="banner" style={{ padding: '4rem 0' }}>
      <Row>
        {ListBanner.map((banner, index) => (
          <Col key={banner.id} xs={24} lg={12} span="12">
            <BannerItem banner={banner} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Banner;
