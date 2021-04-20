import React from 'react';
import './_Carousel.scss';
import { Carousel } from 'antd';
import ButtonUI from '../../../common/ButtonUI';

const ListItemSlider = [
  {
    id: 1,
    src: 'https://cartoonize-online.com/gallery/photos/f/0/3/183213.jpg',
    title: 'Bay mải mê không lo về giá!',
  },
  {
    id: 2,
    src: 'https://cartoonize-online.com/gallery/photos/f/7/6/367703.jpg',
    title: 'Du lịch trong nước mải mê ',
  },
  {
    id: 3,
    src:
      'https://media.vrbo.com/lodging/47000000/46270000/46268700/46268692/49216ce8.c10.jpg',
    title: 'Những chuyến đi đầy màu sắc',
  },
];
const CarouselCpn = () => {
  return (
    <Carousel autoplay className="carousel" effect="fade">
      {ListItemSlider.map((item) => (
        <div key={item.id} className="carousel__slider">
          <div>
            <div className="carousel__img_wrap">
              <img src={item.src} alt={`Slide ${item.id}`} />
            </div>
            <div className="carousel__content">
              <div className="carousel__content_main">
                <h1 className="carousel__title">{item.title} </h1>
                <div className="carousel__description">Discover now Latest</div>
                <div>
                  <ButtonUI text="Buy now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCpn;
