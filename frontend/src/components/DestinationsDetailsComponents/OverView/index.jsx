import { Col, Row } from 'antd';
import React, { useState } from 'react';
const OverView = () => {
  const [loadContent, setLoadContent] = useState(false);
  return (
    <div className="overview">
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <h3 className="overview__title">Over View</h3>
          <div
            className="overview__content"
            style={{ fontSize: '1.5rem', color: '#505050' }}
          >
            1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque dolores sunt dignissimos sed laboriosam cupiditate eius
            ullam, vero qui, optio veniam repudiandae voluptatibus! Provident
            ullam modi est culpa, accusamus animi.
          </div>
          {!loadContent && (
            <div
              onClick={() => setLoadContent(!loadContent)}
              style={{
                color: '#5191FA',
                fontSize: '1.4rem',
                marginTop: '1.5rem',
                cursor: 'pointer',
              }}
            >
              Load more
            </div>
          )}
          {loadContent && (
            <div
              className="overview__content--sub"
              style={{ fontSize: '1.5rem', color: '#505050' }}
            >
              2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dolores sunt dignissimos sed laboriosam cupiditate eius
              ullam, vero qui, optio veniam repudiandae voluptatibus! Provident
              ullam modi est culpa, accusamus animi.
            </div>
          )}
        </Col>
        <Col span={8}>
          <div className="overview__img-wrap">
            <img
              style={{ width: '100%' }}
              src="https://cartoonize-online.com/gallery/photos/f/7/6/367703.jpg"
              alt="th"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OverView;
