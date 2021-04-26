import React from 'react';
import './_ProductItemBox.scss';
const ProductItemBox = () => {
  return (
    <div className="product-item">
      {/* <img
        className="product-item__img"
        src="https://fakeimg.pl/720x720/"
        alt="product item"
      /> */}
      <div className="card">
        <div className="card-head">
          <img
            src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png"
            alt="logo"
            className="card-logo"
          />
          <img
            src="https://s5.postimg.cc/j9r8yf9gn/sws1.png"
            alt="Shoe"
            className="product-img"
          />
          <div className="product-detail">
            <h2>Hartbeespoort</h2> Support and Nike Zoom Air come together for a
            more supportive feel with high-speed responsiveness
          </div>
          <span className="back-text">FAS</span>
        </div>
        <div className="card-body">
          <div className="product-desc">
            <span className="product-title">
              Hartbee<b>spoort</b>
              <span className="badge">New</span>
            </span>
            <span className="product-caption">Basket Ball Collection</span>
            <span className="product-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star grey" />
            </span>
          </div>
          <div className="product-properties">
            <span className="product-size">
              <h4>Size</h4>
              <ul className="ul-size">
                <li>
                  <a href="#">7</a>
                </li>
                <li>
                  <a href="#">8</a>
                </li>
                <li>
                  <a href="#">9</a>
                </li>
                <li>
                  <a href="#" className="active">
                    10
                  </a>
                </li>
                <li>
                  <a href="#">11</a>
                </li>
              </ul>
            </span>
            <span className="product-color">
              <h4>Colour</h4>
              <ul className="ul-color">
                <li>
                  <a href="#" className="orange active" />
                </li>
                <li>
                  <a href="#" className="green" />
                </li>
                <li>
                  <a href="#" className="yellow" />
                </li>
              </ul>
            </span>
            <span className="product-price">
              USD<b>23,453</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemBox;
