import React from 'react';
import HeaderImageLayout from '../../common/HeaderImageLayout';
import PackageBox from '../../common/PackageBox';
import { Col, Row } from 'antd';
const PackagesPage = () => {
  return (
    <div className="PackagesPage">
      <HeaderImageLayout />
      <div
        className="list-product"
        style={{
          maxWidth: '1192px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
        }}
      >
        <Row gutter={[24, 24]}>
          {new Array(5).fill(null).map((item, index) => (
            <Col
              key={index}
              className="gutter-row"
              span={4}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
              xxl={8}
            >
              <PackageBox />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PackagesPage;
