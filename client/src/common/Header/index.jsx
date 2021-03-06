import { Col, Row, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BiShoppingBag, BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import NavbarItem from '../../common/NavbarItem';
import UserProfile from './UserProfile';
import './_Header.scss';
const logo = {
  light:
    'https://demo.uix.store/sober/wp-content/themes/sober/images/logo-light.svg',
  dark: 'https://demo.uix.store/sober/wp-content/themes/sober/images/logo.svg',
};
const ListItemNavbar = [
  { id: 1, text: 'Trang chủ', route: '/' },
  { id: 2, text: 'Homestays', route: '/homestays' },
  { id: 3, text: 'Điểm đến du lịch', route: '/destinations' },
  { id: 4, text: 'Hot', route: '/rooms' },
  { id: 5, text: 'Tin tức', route: '/news' },
  { id: 6, text: 'Liên hệ', route: '/contact' },
];
const ListItemIcon = [
  { id: 1, text: 'Search', icon: BsSearch },
  { id: 2, text: 'User', icon: BiUser },
  { id: 3, text: 'Favourite', icon: AiOutlineStar },
  { id: 4, text: 'Cart', icon: BiShoppingBag },
];

const Header = () => {
  let history = useHistory();
  const [isActive, setIsActive] = useState(1);
  //show info
  const [visibleUserProfile, setVisibleUserProfile] = useState(false);
  const showUserProfile = () => {
    setVisibleUserProfile(true);
  };
  const onCloseUserProfile = () => {
    setVisibleUserProfile(false);
  };
  const handleClickIcon = (id) => {
    if (id === 2) {
      showUserProfile();
    }
    if (id === 4) {
      history.push('/cart');
    }
  };

  //end show info
  //detect scroll
  const [scrollDir, setScrollDir] = useState('scrolling down');
  const [scrollingUp, setScrollingUp] = useState(true);
  const [top, setTop] = useState(true);
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
      setScrollingUp(scrollY > lastScrollY ? false : true);

      //When ScrollY = 0 =>
      setTop(scrollY === 0 ? true : false);
      //end ScrollY = 0
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    console.log(scrollDir);
    // console.log(object);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);
  //end detect scroll
  return (
    <div
      className={`header ${!scrollingUp ? 'none' : ''} ${!top ? 'top' : ''}`}
      onMouseEnter={() => setTop(false)}
      onMouseLeave={() => setTop(true)}
    >
      <Row style={{ flex: 1 }}>
        <Col xs={6} sm={6} md={6} lg={10} span={10}>
          <div className="toggle_menu">
            <HiOutlineMenu
              color={`${!top ? '#000' : '#fff'}`}
              fontSize="2rem"
            />
          </div>
          <div className="navbarMain">
            <ul className="navbar">
              {ListItemNavbar.map((item) => (
                <div
                  key={item.id}
                  className="navbar__item"
                  onClick={() => setIsActive(item.id)}
                >
                  <NavbarItem isActive={isActive} item={item} />
                </div>
              ))}
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4} span={4}>
          <div className="logo">
            <img
              src={top ? logo.light : logo.dark}
              alt="logo"
              width={200}
              height={25}
            />
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={10} span={10}>
          <ul className="navbar_icon">
            {ListItemIcon.map((item) => (
              <li key={item.id} className="navbar_icon__item">
                <Tooltip key={item.id} placement="bottom" title={item.text}>
                  <item.icon
                    onClick={() => handleClickIcon(item.id)}
                    fontSize="2rem"
                  />
                </Tooltip>
              </li>
            ))}
            <UserProfile
              onCloseUserProfile={onCloseUserProfile}
              visibleUserProfile={visibleUserProfile}
              id="987612345"
              name="Trà Nguyễn"
              email="example@gmail.com"
              phone_number="09xxxxxxxx"
            />
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
