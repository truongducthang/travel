import { Col, Row } from 'antd';
import React from 'react';
import TitleSection from '../../../common/TitleSection';
import ProductItemBox from '../../../pages/Products/ProductItemBox';
const RelateProducts = () => {
  return (
    <div className="RelateProducts" style={{ marginTop: '5rem' }}>
      <TitleSection
        title="Relate"
        title_ul="Products"
        colorUnderline="#3fd0d4"
        suggest="DEAL HOT, MUA NGAY KẺO LỠ!"
        colorSuggest="#ff4136"
      />
      <div style={{ marginTop: '3rem' }}>
        <Row gutter={[24, 24]}>
          {new Array(4).fill(null).map((item, index) => (
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
              <ProductItemBox />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RelateProducts;
