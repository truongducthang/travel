import { Col, Row } from 'antd';
import React from 'react';
import PackageBox from '../../../common/PackageBox';
import TitleSection from '../../../common/TitleSection';
const RelateProducts = () => {
  return (
    <div className="RelateProducts" style={{ marginTop: '5rem' }}>
      <TitleSection
        title="Hot Vacation"
        title_ul="Packages"
        colorUnderline="#3fd0d4"
        suggest="DEAL HOT, ĐẶT NGAY KẺO LỠ!"
        colorSuggest="#ff4136"
      />
      <div style={{ marginTop: '3rem' }}>
        <Row gutter={[24, 24]}>
          {new Array(8).fill(null).map((item, index) => (
            <Col
              key={index}
              className="gutter-row"
              span={4}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={6}
              xxl={6}
            >
              <PackageBox size="small" />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RelateProducts;
