import React from 'react';
import { Col, Row } from 'antd';
import DividerShort from '../../../common/DividerShort';
import TitleSection from '../../../common/TitleSection';
import Countdown from './Countdown';
import Room from './Room';
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
      <div className="rooms">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} lg={24} xl={8}>
            <Countdown />
          </Col>
          <Col xs={24} sm={24} lg={24} xl={16}>
            <div className="rooms">
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Room />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Room />
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
