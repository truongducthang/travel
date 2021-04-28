import { Col, DatePicker, InputNumber, Row, Select, Slider } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import './_FormFilters.scss';
import { Checkbox } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;
const FormFilters = () => {
  const [price, setPrice] = useState({ min: 0, max: 999 });
  function onChangeDestination(value) {
    console.log(`selected ${value}`);
  }

  function onBlurDestination() {
    console.log('blur');
  }

  function onFocusDestination() {
    console.log('focus');
  }

  function onSearchDestination(val) {
    console.log('search:', val);
  }
  function onChangeDate(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  function onChangeMinPrice(value) {
    console.log('changed min : ', value);
    setPrice((prevPrice) => {
      return { ...prevPrice, min: value };
    });
  }
  function onChangeMaxPrice(value) {
    console.log('changed max : ', value);
    setPrice((prevPrice) => {
      return { ...prevPrice, max: value };
    });
  }
  function onChangePrice(value) {
    console.log('onChange: ', value);
    setPrice((prevPrice) => {
      return { ...prevPrice, min: value[0], max: value[1] };
    });
  }
  function onChangeCheckOnlyPromotions(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  function disabledDate(current) {
    return current && current < moment().startOf('day');
  }
  return (
    <div className="form-filters">
      <Row gutter={[24, 24]}>
        <Col span={8} xs={24} sm={24} md={24} lg={8}>
          <div className="form-filters__col">
            <div className="form-filters__title">Select Your Destination :</div>
            <Select
              className="form-filters__input"
              onChange={onChangeDestination}
              onFocus={onFocusDestination}
              onBlur={onBlurDestination}
              onSearch={onSearchDestination}
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select "
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              <Option value="1">Not Identified</Option>
              <Option value="2">Closed</Option>
              <Option value="3">Communicated</Option>
              <Option value="4">Identified</Option>
              <Option value="5">Resolved</Option>
              <Option value="6">Cancelled</Option>
            </Select>
          </div>
        </Col>
        <Col span={8} xs={24} sm={24} md={24} lg={8}>
          <div className="form-filters__col">
            <div className="form-filters__title">{`Check-in & Check-out Date :`}</div>
            <RangePicker
              disabledDate={disabledDate}
              placeholder={['Check-in date', 'Check-out date']}
              className="form-filters__input"
              ranges={{
                Today: [moment(), moment()],
                'This Month': [
                  moment().startOf('month'),
                  moment().endOf('month'),
                ],
              }}
              onChange={onChangeDate}
            />
          </div>
        </Col>
        <Col span={8} xs={24} sm={24} md={24} lg={8}>
          <div className="form-filters__col">
            <div style={{ display: 'flex' }}>
              <div
                className="form-filters__title"
                style={{ marginBottom: '0' }}
              >
                Price :
              </div>
              <div className="form-filters__input-price-wrap">
                <InputNumber
                  className="form-filters__input-price"
                  value={price.min}
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  min={0}
                  max={999}
                  onChange={onChangeMinPrice}
                />
                <span> - </span>
                <InputNumber
                  className="form-filters__input-price"
                  value={price.max}
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  onChange={onChangeMaxPrice}
                  min={0}
                  max={999}
                />
              </div>
            </div>
            <Slider
              range
              value={[price.min, price.max]}
              onChange={onChangePrice}
              min={0}
              max={999}
              style={{ margin: '1rem .5rem 1.5rem' }}
            />
            <Checkbox onChange={onChangeCheckOnlyPromotions}>
              <label className="form-filters__label">See only promotions</label>
            </Checkbox>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FormFilters;
