import React from 'react';
import { Col, Row } from 'antd';
import DividerShort from '../../../common/DividerShort';
import TitleSection from '../../../common/TitleSection';
import Countdown from './Countdown';
import PackageBox from '../../../common/PackageBox';
const Promotions = () => {
  return (
    <div
      className="promotions"
      style={{ padding: '2rem 0 5rem', maxWidth: '1192px', margin: '0 auto' }}
    >
      <TitleSection
        title="TOP "
        title_ul="PROMOTIONS"
        suggest="BEST TRAVEL PACKAGES AVAILABLE "
      />
      <DividerShort m="0 0 3rem " />
      <div className="packages">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} lg={24} xl={8}>
            <Countdown />
          </Col>
          <Col xs={24} sm={24} lg={24} xl={16}>
            <div className="packages">
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <PackageBox nameHomestay="Tên-homestay" />
                </Col>
                <Col xs={24} sm={999} md={12} lg={12} xl={12}>
                  <PackageBox
                    nameHomestay="Tên-homestay"
                    url_img="https://res.cloudinary.com/dulich/image/upload/v1619011326/travel/package-02-1024x640_mjf4ka.jpg"
                    destination="asia"
                    room_name="Hong kong"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Promotions;
