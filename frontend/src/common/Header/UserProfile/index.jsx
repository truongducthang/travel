import { Button, Col, Drawer, Form, Input, Row, Radio } from 'antd';
import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
//upload avatar
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
//end upload avatar
const UserProfile = (props) => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return (
    <Drawer
      title="Profile"
      width={720}
      onClose={props.onCloseUserProfile}
      visible={props.visibleUserProfile}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={props.onCloseUserProfile} style={{ marginRight: 8 }}>
            Hủy
          </Button>
          <Button onClick={props.onCloseUserProfile} type="primary">
            Lưu
          </Button>
        </div>
      }
    >
      <div style={{ textAlign: 'center' }}>
        {fileList ? (
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
            src={fileList[0] ? fileList[0].thumbUrl : ''}
          />
        ) : (
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        )}

        <h3>{props.name}</h3>
      </div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <label htmlFor="id">Id người dùng</label>
            <Input id="id" defaultValue={props.id} disabled />
          </Col>
          <Col span={12}>
            <label htmlFor="name">Tên</label>
            <Input id="name" defaultValue={props.name} />
          </Col>
          <Col span={12}>
            <label htmlFor="gender">Giới tính</label>
            <div>
              <Radio.Group name="gender" defaultValue={2}>
                <Radio value={1}>Nam</Radio>
                <Radio value={2}>Nữ</Radio>
              </Radio.Group>
            </div>
          </Col>
          <Col span={12}>
            <label htmlFor="Email">Email</label>
            <Input id="Email" defaultValue={props.email} disabled />
          </Col>
          <Col span={12}>
            <label htmlFor="phone_number">Số điện thoại</label>
            <Input id="phone_number" defaultValue={props.phone_number} />
          </Col>
          <Col span={24}>
            <label htmlFor="avatar">Ảnh đại diện</label>
            <ImgCrop id="avatar" rotate>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default UserProfile;
