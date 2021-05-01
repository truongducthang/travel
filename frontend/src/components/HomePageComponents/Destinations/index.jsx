import { Col, Row } from 'antd';
import React from 'react';
import DividerShort from '../../../common/DividerShort';
import TitleSection from '../../../common/TitleSection';
import TravelDestinationBox from '../../../common/TravelDestinationBox';
import './_Destinations.scss';
const ListTravelDestinations = [
  {
    id: 1,
    name: 'A',
    packages: [
      { id: 1, name: 'Tràng An' },
      { id: 2, name: 'Amsterdam' },
      { id: 3, name: 'Tuscany' },
      { id: 4, name: 'Berlin' },
      { id: 5, name: 'Amsterdam' },
      { id: 6, name: 'Tuscany' },
    ],
    destination: 'Ninh Binh',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010324/travel/destination-9_iqcx0p.jpg',
  },
  {
    id: 2,
    name: 'B',
    packages: [{ id: 1, name: 'Phuket' }],
    destination: 'thailandia',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010370/travel/destination-5-720x720_x7pt3z.jpg',
  },
  {
    id: 3,
    name: 'C',
    packages: [{ id: 1, name: 'Hongkong' }],
    destination: 'asia',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010431/travel/destination-8_uscfys.jpg',
  },
  {
    id: 4,
    name: 'D',
    packages: [],
    destination: 'italy',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010456/travel/destination-10_ejqdta.jpg',
  },
  {
    id: 5,
    name: 'E',
    packages: [{ id: 1, name: 'Test' }],
    destination: 'netherlands',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010475/travel/destination-11_ewvbau.jpg',
  },
  {
    id: 6,
    name: 'F',
    packages: [],
    destination: 'united states',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010499/travel/destination-1-1-720x720_ezdfeh.jpg',
  },
];
const Destinations = () => {
  return (
    <div className="destinations">
      <TitleSection
        title="our"
        title_ul="DESTINATIONS"
        suggest="CHOOSE YOUR NEXT DESTINATION"
      />
      <DividerShort />
      <div className="travel_destinations">
        <Row gutter={[24, 24]}>
          {ListTravelDestinations.map((TravelDestination) => (
            <Col
              key={TravelDestination.id}
              className="gutter-row"
              span={4}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
              xxl={8}
            >
              <TravelDestinationBox TravelDestination={TravelDestination} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Destinations;
