import React from 'react';
import './_FooterInfo.scss';
import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
const ListItemMenu = [
  { id: 1, text: 'Blog', url: '' },
  { id: 1, text: 'FAQs', url: '' },
  { id: 1, text: 'Contact us', url: '' },
];
const ListSocialIcon = [
  { id: 1, name: 'twitter', icon: TwitterOutlined, bg: '#3b5898' },
  { id: 2, name: 'facebook', icon: FacebookOutlined, bg: '#03b0ee' },
  { id: 3, name: 'linkedin', icon: LinkedinOutlined, bg: '#bd091c' },
  { id: 4, name: 'instagram', icon: InstagramOutlined, bg: '#1871bc' },
];
const FooterInfo = () => {
  return (
    <div className="footer_info">
      <div className="footer_menu">
        {ListItemMenu.map((item) => (
          <div key={item.id} className="footer_menu__item">
            {item.text}
          </div>
        ))}
      </div>
      <div className="social_icons">
        {ListSocialIcon.map((item) => (
          <div key={item.id} className="social_icons__icon">
            <item.icon
              style={{
                backgroundColor: item.bg,
                color: '#fff',
                padding: '1.2rem',
                borderRadius: '.5rem',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterInfo;
