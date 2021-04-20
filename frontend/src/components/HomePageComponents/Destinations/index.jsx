import { Col, Row } from 'antd';
import React from 'react';
import DividerShort from '../../../common/DividerShort';
import TitleSection from '../../../common/TitleSection';
import TravelDestinationBox from './TravelDestinationBox';
import './_Destinations.scss';
const ListTravelDestinations = [
  {
    id: 1,
    name: 'A',
    packages: [
      { id: 1, name: 'Berlin' },
      { id: 2, name: 'Amsterdam' },
      { id: 3, name: 'Tuscany' },
      { id: 4, name: 'Berlin' },
      { id: 5, name: 'Amsterdam' },
      { id: 6, name: 'Tuscany' },
    ],
    destination: 'Europe',
    url_img:
      'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/04/destination-9.jpg',
  },
  {
    id: 2,
    name: 'B',
    packages: [{ id: 1, name: 'Phuket' }],
    destination: 'thailandia',
    url_img:
      'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/11/destination-5-720x720.jpg',
  },
  {
    id: 3,
    name: 'C',
    packages: [{ id: 1, name: 'Hongkong' }],
    destination: 'asia',
    url_img:
      'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/03/destination-8.jpg',
  },
  {
    id: 4,
    name: 'D',
    packages: [],
    destination: 'italy',
    url_img:
      'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/03/destination-10.jpg',
  },
  {
    id: 5,
    name: 'E',
    packages: [{ id: 1, name: 'Test' }],
    destination: 'netherlands',
    url_img:
      'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/03/destination-11.jpg',
  },
  {
    id: 6,
    name: 'F',
    packages: [],
    destination: 'united states',
    url_img:
      'http://www.nicdarkthemes.com/themes/travel/wp/demo/love-travel/wp-content/uploads/sites/3/2018/03/destination-1-1-720x720.jpg',
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
