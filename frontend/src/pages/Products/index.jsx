import { Col, Pagination, Row } from 'antd';
import React, { useEffect } from 'react';
import HeaderImageLayout from '../../common/HeaderImageLayout';
import ProductItemBox from './ProductItemBox';
const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onChangePagination = (pageNumber, pageSize) => {
    console.log('Page: ', pageNumber);
    console.log('pageSize: ', pageSize);
  };
  return (
    <div className="ProductsPage">
      <HeaderImageLayout _namePage="our products" />
      <div
        className="list-products"
        style={{
          maxWidth: '1192px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
        }}
      >
        <Row gutter={[24, 24]}>
          {new Array(10).fill(null).map((item, index) => (
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
        <Pagination
          style={{ marginTop: '5rem', textAlign: 'center' }}
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChangePagination}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
