import { Rate } from 'antd';
import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import CurrencyFormatting from '../../../helpers/CurrencyFormatting';
import './_ProductItemBox.scss';

const ProductItemBox = (props) => {
  return (
    <div className="product-item">
      <div>
        <img
          className="product-item__img"
          src={
            props.src ||
            'https://res.cloudinary.com/dulich/image/upload/v1619634382/travel/cover_xzbsxx.jpg'
          }
          alt="product item"
        />
      </div>
      <div className="product-item__content">
        <div>
          <p className="product-item__location">
            <GoLocation style={{ position: 'relative', top: '1px' }} />
            <span> New York, NY, USA</span>
          </p>
          <h4 className="product-item__title">
            Paramount Ranch Guided Horseback Tour
          </h4>
          <div className="product-item__review">
            <Rate
              style={{ fontSize: '1.6rem' }}
              className="product-item__rating"
              allowHalf
              defaultValue={4.5}
            />
            <span className="review">2189 Reviews</span>
          </div>
        </div>
        <div className="product-item__footer">
          <AiFillThunderbolt
            style={{ position: 'relative', top: '3px' }}
            color="#FF4136"
          />
          <span style={{ marginLeft: '.5rem', marginRight: '1rem' }}>from</span>
          <span className="product-item__price">
            {CurrencyFormatting(1250111)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItemBox;
