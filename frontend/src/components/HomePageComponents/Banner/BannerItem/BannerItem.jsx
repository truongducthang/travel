import { Link } from 'react-router-dom';
import React from 'react';
import './_BannerItem.scss';
const BannerItem = (props) => {
  return (
    <div className="banner_item">
      <Link to={props.route} className="banner_item__link">
        <img className="banner_item__img" src={props.src} alt={props.text} />
        <div className="banner_item__content">
          <div
            style={props.fontSize && { fontSize: props.fontSize }}
            className="banner_item__text"
          >
            {props.text}
          </div>
          <Link to={props.route} className="banner_item__button">
            shop now
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default BannerItem;
