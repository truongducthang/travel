import React from 'react';
import './_Footer.scss';
import Newsletter from './Newsletter';
import FooterInfo from './FooterInfo';
const Footer = () => {
  return (
    <div className="footer">
      <Newsletter />
      <FooterInfo />
    </div>
  );
};

export default Footer;
