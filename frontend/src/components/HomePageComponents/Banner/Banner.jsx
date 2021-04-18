import { Col, Row } from 'antd';
import React from 'react';
import BannerItem from './BannerItem/BannerItem';
import './_Banner.scss';
const ListBanner = [
  {
    id: 1,
    src:
      'https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-43.jpg',
    route: '/1',
    text: 'new arrivals',
    fontSize: '3rem',
  },
  {
    id: 2,
    src:
      'https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-43.jpg',
    route: '/2',
    text: 'Woman collection',
    fontSize: '2rem',
  },
  {
    id: 3,
    src:
      'https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-30.jpg',
    route: '/3',
    text: 'man collection',
  },
  {
    id: 4,
    src:
      'https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/4-11.jpg',
    route: '/4',
    text: 'Free Shipping On All Orders',
    fontSize: '2.8rem',
  },
];
const Banner = () => {
  return (
    <div className="banner">
      <Row>
        <Col xs={24} lg={12} span="12">
          <BannerItem
            route={ListBanner[0].route}
            src={ListBanner[0].src}
            text={ListBanner[0].text}
            fontSize={ListBanner[0].fontSize}
          />
        </Col>
        <Col xs={24} lg={12} span="12">
          <Row>
            <Col lg={12} span="12">
              <BannerItem
                route={ListBanner[1].route}
                src={ListBanner[1].src}
                text={ListBanner[1].text}
              />
            </Col>
            <Col lg={12} span="12">
              <BannerItem
                route={ListBanner[2].route}
                src={ListBanner[2].src}
                text={ListBanner[2].text}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={24} span="24">
              <BannerItem
                route={ListBanner[3].route}
                src={ListBanner[3].src}
                text={ListBanner[3].text}
                fontSize={ListBanner[3].fontSize}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
