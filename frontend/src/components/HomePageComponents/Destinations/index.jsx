import { Col, Row } from 'antd';
import React from 'react';
import DividerShort from '../../../common/DividerShort';
import './_Destinations.scss';
const Destinations = () => {
  return (
    <div className="destinations">
      <div className="destinations__title">
        <h1>
          OUR <span>DESTINATIONS</span>
        </h1>
        <h3>CHOOSE YOUR NEXT DESTINATION</h3>
        <DividerShort />
        <div className="travel_destinations">
          <Row gutter={[24, 24]}>
            {new Array(6).fill(null).map((item, index) => (
              <Col
                key={index}
                className="gutter-row"
                span={4}
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
                xxl={6}
              >
                <div className="travel_destination">
                  <img
                    className="travel_destination__img"
                    alt="example"
                    src="http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/04/destination-9.jpg"
                  />
                  <div className="travel_destination__tag">
                    <div className="travel_destination__tag__text">
                      OCEANCIA
                    </div>
                  </div>
                  <div className="travel_destination__description">
                    <h3>Da Nang</h3>
                    <h6>3 Packages</h6>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
