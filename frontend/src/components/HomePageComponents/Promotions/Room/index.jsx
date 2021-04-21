import React from 'react';
import './_Room.scss';
import { BsFillHeartFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { Tag } from 'antd';
import ButtonUI from '../../../../common/ButtonUI';
const Room = (props) => {
  return (
    <div className="room">
      <div className="room__top">
        <img
          className="room__img"
          src={
            props.url_img ||
            'https://res.cloudinary.com/dulich/image/upload/v1619010674/travel/package-01-1024x640_jq41lp.jpg'
          }
          alt="img"
        />
        <div className="room__icon">
          <BsFillHeartFill />
        </div>
      </div>
      <div className="room__content">
        <div className="room__title">
          <h3 className="room__name">{props.room_name || 'Berlin'}</h3>
          <h5 className="room__destination">
            <span className="room__destination--icon">
              <GoLocation />
            </span>
            {props.destination || 'Europe'}
          </h5>
        </div>
        <div className="room__description">
          <div className="room__description--top">
            <div className="room__category">
              <div>Cultural</div>
              <div>
                <span>RELax</span>
                <Tag style={{ fontSize: '1rem' }} color="#f76570">
                  + 1
                </Tag>
              </div>
            </div>
            <h3 className="room__price">
              <span className="room__price--old">1000</span>
              700 <span>$</span>
            </h3>
          </div>
          <div className="room__description--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
            efficitur ante. Donec dapibus dictum scelerisque.
          </div>
        </div>
        <ButtonUI color="#fff" bg="#f76570" />
      </div>
    </div>
  );
};

export default Room;
