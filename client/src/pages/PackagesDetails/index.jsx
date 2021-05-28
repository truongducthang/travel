import {
  Col,
  DatePicker,
  InputNumber,
  Row,
  Select,
  Slider,
  Input,
  Form,
  Button,
} from 'antd';
import React, { useEffect } from 'react';
import moment from 'moment';
import HeaderImageLayout from '../../common/HeaderImageLayout';
import './_PackagesDetails.scss';
const { RangePicker } = DatePicker;
const { Option } = Select;
const PackagesDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //form
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  function onChangeDate(dates, dateStrings) {
    console.log(dates);
    // console.log('From: ', dates[0], ', to: ', dates[1]);
    // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  function disabledDate(current) {
    return current && current < moment().startOf('day');
  }
  function handleChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  //end form
  return (
    <div className="PackagesDetailsPage">
      <HeaderImageLayout
        hideFilter={true}
        // src="https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg"
        title_ul="Package Details"
      />
      <div
        className="homestay"
        style={{
          maxWidth: '1192px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={16} lg={16} span={16}></Col>
          <Col xs={24} sm={24} md={8} lg={8} span={8}>
            <Form
              layout="vertical"
              className="form-contact"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <h2 className="form-contact__title">Đặt phòng</h2>
              <div className="form-contact__content">
                <Form.Item
                  label="Họ tên"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  label={`Check-in & Check-out Date :`}
                >
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
                </Form.Item>
                <Form.Item>
                  <Select
                    onChange={handleChangeSelect}
                    showSearch
                    placeholder="Search to Select"
                    defaultValue={2}
                  >
                    {new Array(30).fill(null).map((item, index) => (
                      <Option value={index + 1}>{index + 1} adults</Option>
                    ))}
                  </Select>
                </Form.Item>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Form.Item style={{ width: '49%' }}>
                    <Select
                      onChange={handleChangeSelect}
                      showSearch
                      placeholder="Search to Select"
                      defaultValue={0}
                    >
                      {new Array(30).fill(null).map((item, index) => (
                        <Option value={index}>
                          {index !== 0 ? `${index} children` : 'No children'}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item style={{ width: '49%' }}>
                    <Select
                      onChange={handleChangeSelect}
                      showSearch
                      placeholder="Search to Select"
                      defaultValue={1}
                    >
                      {new Array(30).fill(null).map((item, index) => (
                        <Option value={index + 1}>{index + 1} room</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PackagesDetailsPage;
