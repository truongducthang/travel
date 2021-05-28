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
      `/homestays/${props.nameHomestay ? props.nameHomestay : 'tên-homestay'}`
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
      <div
        className="package-box__content"
        style={{ padding: `${props.size === 'small' && '1.5rem'}` }}
      >
        <div
          className="package-box__title"
          style={{ marginBottom: `${props.size === 'small' && '1rem'}` }}
        >
          <h3
            onClick={handlePushRoute}
            className="package-box__name"
            style={{ fontSize: `${props.size === 'small' && '1.6rem'}` }}
          >
            {props.room_name || 'NB Tràng An Homestay'}
          </h3>
          <h5
            onClick={handlePushRoute}
            className="package-box__destination"
            style={{ fontSize: `${props.size === 'small' && '1.4rem'}` }}
          >
            <span className="package-box__destination--icon">
              <GoLocation />
            </span>
            {props.destination || 'Ninh Binh'}
          </h5>
        </div>
        <div className="package-box__description">
          <div className="package-box__description--top">
            <div className="package-box__category">
              <div
                style={{ fontSize: `${props.size === 'small' && '1.2rem'}` }}
              >
                Cultural
              </div>
              <div
                style={{ fontSize: `${props.size === 'small' && '1.2rem'}` }}
              >
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
          <div
            className="package-box__description--text"
            style={{
              padding: `${props.size === 'small' && '1rem 0'}`,
              fontSize: `${props.size === 'small' && '1.3rem'}`,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <ButtonUI
          href={`/homestays/${
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
