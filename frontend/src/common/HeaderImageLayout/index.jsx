import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, message } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import FormFilters from '../FormFilters';
import TitleSection from '../TitleSection';
import './_HeaderImageLayout.scss';

const HeaderImageLayout = () => {
  const onClickFiltersPrice = ({ key }) => {
    message.info(`Click on item price  ${key}`);
  };
  const menuPrice = (
    <Menu onClick={onClickFiltersPrice}>
      <Menu.Item key="1">All</Menu.Item>
      <Menu.Item key="2">LOWEST PRICE</Menu.Item>
      <Menu.Item key="3">HIGHEST PRICE</Menu.Item>
    </Menu>
  );

  const onClickFiltersName = ({ key }) => {
    message.info(`Click on item name ${key}`);
  };
  const menuName = (
    <Menu onClick={onClickFiltersName}>
      <Menu.Item key="1">All</Menu.Item>
      <Menu.Item key="2">DESC</Menu.Item>
      <Menu.Item key="3">ASC</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="HeaderImageLayout">
        <div className="HeaderImageLayout__content">
          <div className="HeaderImageLayout__title">
            <TitleSection
              color="#fff"
              fontWeight="700"
              fontSize="3.4rem"
              colorUnderline="#e27557"
              hideSuggest={true}
              title="Search your"
              title_ul="Holiday"
            />
          </div>
          <div className="FormFilters__top">
            <FormFilters />
          </div>
          <div className="HeaderImageLayout__filters-wrap">
            <Dropdown overlay={menuPrice}>
              <Link
                to=""
                className="ant-dropdown-link HeaderImageLayout__filters HeaderImageLayout__filtersPrice "
                onClick={(e) => e.preventDefault()}
              >
                Price <DownOutlined />
              </Link>
            </Dropdown>
            <Dropdown overlay={menuName}>
              <Link
                to=""
                className="ant-dropdown-link  HeaderImageLayout__filters HeaderImageLayout__filtersName"
                onClick={(e) => e.preventDefault()}
              >
                Name <DownOutlined />
              </Link>
            </Dropdown>
          </div>
        </div>
      </div>
      {/* screen >= lg - none  */}
      <div className="FormFilters__bottom">
        <FormFilters />
      </div>
      {/* end- screen lg   */}
      <style jsx="true">
        {`
          .FormFilters__top {
            padding: 4rem 0;
          }
          .FormFilters__bottom {
            display: none;
          }
          @media screen and (max-width: 991.98px) {
            .FormFilters__top {
              display: none;
            }
            .FormFilters__bottom {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeaderImageLayout;