import React from 'react';
import './_PackageBox.scss';
import { BsFillHeartFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { Tag } from 'antd';
import ButtonUI from '../ButtonUI';
import { useHistory } from 'react-router-dom';

const PackageBox = (props) => {
  let history = useHistory();
  function handlePushRoute() {
    history.push(
      `/packages/${props.nameHomestay ? props.nameHomestay : 'nameHomestay'}`
    );
  }
  return (
    <div className="package-box">
      <div className="package-box__top">
        <div style={{ overflow: 'hidden' }}>
          <img
            className="package-box__img"
            src={
              props.url_img ||
              'https://res.cloudinary.com/dulich/image/upload/v1619010674/travel/package-01-1024x640_jq41lp.jpg'
            }
            alt="img"
          />
        </div>
        <div className="package-box__icon">
          <BsFillHeartFill />
        </div>
      </div>
      <div className="package-box__content">
        <div className="package-box__title">
          <h3 onClick={handlePushRoute} className="package-box__name">
            {props.room_name || 'Berlin'}
          </h3>
          <h5 onClick={handlePushRoute} className="package-box__destination">
            <span className="package-box__destination--icon">
              <GoLocation />
            </span>
            {props.destination || 'Europe'}
          </h5>
        </div>
        <div className="package-box__description">
          <div className="package-box__description--top">
            <div className="package-box__category">
              <div>Cultural</div>
              <div>
                <span>RELax</span>
                <Tag style={{ fontSize: '1rem' }} color="#f76570">
                  + 1
                </Tag>
              </div>
            </div>
            <h3 onClick={handlePushRoute} className="package-box__price">
              <span className="package-box__price--old">1000</span>
              700 <span>$</span>
            </h3>
          </div>
          <div className="package-box__description--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
            efficitur ante. Donec dapibus dictum scelerisque.
          </div>
        </div>
        <ButtonUI
          href={`/packages/${
            props.nameHomestay ? props.nameHomestay : 'nameHomestay'
          }`}
          text="Details"
          color="#fff"
          bg="#f76570"
        />
      </div>
    </div>
  );
};

export default PackageBox;
