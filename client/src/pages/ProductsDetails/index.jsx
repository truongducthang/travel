import { Col, Row, Image, Rate, Tag, Tabs, List, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderImageLayout from '../../common/HeaderImageLayout';
import ButtonUI from '../../common/ButtonUI';
import './_ProductsDetails.scss';
const { TabPane } = Tabs;
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const ProductsDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [quantity, setQuantity] = useState(0);
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="ProductsDetailsPage">
      <HeaderImageLayout hideFilter={true} title_ul="Hang Múa Homestay" />
      <div
        style={{
          maxWidth: '1192px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={10} lg={10} span={10}>
            <Image
              width="100%"
              src="https://dulichkhampha24.com/wp-content/uploads/2019/12/hang-mua-ninh-binh.jpg"
            />
          </Col>
          <Col xs={24} sm={24} md={16} lg={14} span={14}>
            <div className="description">
              <h1>Hang Mua </h1>
              <Rate disabled defaultValue={4} />
              <div className="price">
                <div className="price__amount">
                  <span className="price__currencySymbol">$</span>
                  1,000.00
                </div>
                <div className="price__amount">
                  <span className="price__currencySymbol">$</span>
                  1,000.00
                </div>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum voluptatum tempora, deleniti praesentium nam quisquam
                  veritatis. Eius optio qui quo quae, adipisci maxime, officiis
                  nisi dolor, aspernatur quia officia odit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum voluptatum tempora, deleniti praesentium nam quisquam
                  veritatis. Eius optio qui quo quae, adipisci maxime, officiis
                  nisi dolor, aspernatur quia officia odit.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="quantity">
                  <div
                    className="quantity__decrease quantity__key"
                    onClick={() =>
                      quantity > 0 &&
                      setQuantity((prevQuantity) => prevQuantity - 1)
                    }
                  >
                    -
                  </div>
                  <input
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text"
                    value={quantity < 1000 ? quantity : 999}
                    defaultValue={quantity}
                  />
                  <div
                    className="quantity__increase quantity__key"
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity + 1)
                    }
                  >
                    +
                  </div>
                </div>
                <ButtonUI bg="#1bbc9b" color="#fff" text="ADD TO CART" />
              </div>
              <div class="product_meta">
                <div class="posted_in">
                  <span>Category:</span>
                  <Tag color="magenta">magenta</Tag>
                  <Tag color="red">red</Tag>
                  <Tag color="volcano">volcano</Tag>
                </div>
                <div class="tagged_as">
                  <span>Tag:</span>
                  <Tag color="blue">blue</Tag>
                  <Tag color="geekblue">geekblue</Tag>
                  <Tag color="purple">purple</Tag>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Description" key="1">
            <div className="tabPane tab1">
              <div className="tab__title">Description</div>
              <div className="tab1__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere odio temporibus eligendi. Quibusdam nam aliquid itaque
                  tenetur unde necessitatibus, temporibus fugit blanditiis
                  quisquam accusamus quod adipisci? Iusto aliquid ipsum ex?
                </p>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Additional information" key="2">
            <div className="tabPane tab2">
              <div className="tab__title">Additional information</div>
            </div>
          </TabPane>
          <TabPane tab="Reviews (2)" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
