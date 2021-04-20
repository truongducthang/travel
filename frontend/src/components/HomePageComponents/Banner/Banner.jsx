import { Col, Row } from 'antd';
import React from 'react';
import BannerItem from './BannerItem/BannerItem';
const ListBanner = [
  {
    id: 1,
    src:
      'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-5-filter.jpg?id=1584',
    route: '/1',
    title: 'Discover Cities ',
    text: 'LAST MINUTE',
  },
  {
    id: 2,
    src:
      'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/parallax-6-filter.jpg?id=1585',
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
