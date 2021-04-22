import React from 'react';
import { Col, Row } from 'antd';
import './_FormFilters.scss';
import { Select } from 'antd';

const { Option } = Select;
const FormFilters = () => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  return (
    <div className="form-filters">
      <Row gutter={[24, 24]}>
        <Col span={8} xs={8} sm={8} md={8}>
          <div className="form-filters__col">
            <div className="form-filters__title">Select Your Destination :</div>
            <Select
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
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
            ,
          </div>
        </Col>
        <Col span={8} xs={8} sm={8} md={8}>
          <div className="form-filters__col">
            <div className="form-filters__title">Select Your Date :</div>
          </div>
        </Col>
        <Col span={8} xs={8} sm={8} md={8}>
          <div className="form-filters__col">
            <div className="form-filters__title">Max Price :</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FormFilters;
