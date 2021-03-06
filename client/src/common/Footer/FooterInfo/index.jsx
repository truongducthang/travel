import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import React from 'react';
import './_FooterInfo.scss';
const ListItemMenu = [
  { id: 1, text: 'Blog', url: '' },
  { id: 2, text: 'FAQs', url: '' },
  { id: 3, text: 'Contact us', url: '' },
];
const ListSocialIcon = [
  {
    id: 1,
    name: 'twitter',
    icon: TwitterOutlined,
    bg: '#3b5898',
    route: 'https://www.facebook.com/tra1809',
  },
  {
    id: 2,
    name: 'facebook',
    icon: FacebookOutlined,
    bg: '#03b0ee',
    route: 'https://www.facebook.com/tra1809',
  },
  {
    id: 3,
    name: 'linkedin',
    icon: LinkedinOutlined,
    bg: '#bd091c',
    route: 'https://www.facebook.com/tra1809',
  },
  {
    id: 4,
    name: 'instagram',
    icon: InstagramOutlined,
    bg: '#1871bc',
    route: 'https://www.facebook.com/tra1809',
  },
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
            <a href={item.route} target="_blank" rel="noopener noreferrer">
              <item.icon
                style={{
                  backgroundColor: item.bg,
                  color: '#fff',
                  padding: '1.2rem',
                  borderRadius: '.5rem',
                }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterInfo;
