import { Col, Pagination, Row } from 'antd';
import React, { useEffect } from 'react';
import HeaderImageLayout from '../../common/HeaderImageLayout';
import TravelDestinationBox from '../../components/HomePageComponents/Destinations/TravelDestinationBox';

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
  {
    id: 7,
    name: 'G',
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
    id: 8,
    name: 'I',
    packages: [{ id: 1, name: 'Hongkong' }],
    destination: 'asia',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010431/travel/destination-8_uscfys.jpg',
  },
  {
    id: 9,
    name: 'H',
    packages: [{ id: 1, name: 'Phuket' }],
    destination: 'thailandia',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010370/travel/destination-5-720x720_x7pt3z.jpg',
  },
  {
    id: 10,
    name: 'K',
    packages: [],
    destination: 'italy',
    url_img:
      'https://res.cloudinary.com/dulich/image/upload/v1619010456/travel/destination-10_ejqdta.jpg',
  },
];
const DestinationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onChangePagination = (pageNumber, pageSize) => {
    console.log('Page: ', pageNumber);
    console.log('pageSize: ', pageSize);
  };
  return (
    <div className="DestinationsPage">
      <HeaderImageLayout _namePage="our destinations" />
      <div
        className="list-destinations"
        style={{
          maxWidth: '1192px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
        }}
      >
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

export default DestinationsPage;
