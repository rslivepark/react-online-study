import React, { useEffect, useState } from 'react';
import { FaRegUser, FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../redux/reducers/authenticateReducer';

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuList = [
    '여성',
    '남성',
    '신생아/유아',
    '아동',
    'divided',
    'H&M Home',
    'sale',
    '지속가능성',
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authenticate } = useSelector((state) => state.auth);

  const goToLogin = () => {
    navigate('/login');
  };
  const goToLogout = () => {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
      // dispatch({ type: 'LOGOUT' });
      dispatch(authActions.logout());
      navigate('/');
    }
  };
  const goToMain = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
      e.target.value = '';
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className='top-area'>
        <div className='search-area'>
          <GiHamburgerMenu
            className='mobile-menu'
            onClick={() => setMenuVisible(true)}
          />
          <FaSearch className='search-icon' />
          <input type='text' onKeyPress={(e) => handleSearch(e)} />
        </div>
        <div className='login-area'>
          {authenticate ? (
            <div className='login-button' onClick={() => goToLogout()}>
              <FaRegUser className='user-icon' />
              <div>로그아웃</div>
            </div>
          ) : (
            <div className='login-button' onClick={() => goToLogin()}>
              <FaRegUser className='user-icon' />
              <div>로그인</div>
            </div>
          )}
        </div>
      </div>

      <div className='nav-section'>
        <img
          width={100}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1418px-H%26M-Logo.svg.png'
          alt='logo'
          onClick={goToMain}
          className='main-logo'
        />
      </div>
      <div
        className='menu-area'
        style={{ visibility: menuVisible ? 'visible' : 'hidden' }}
      >
        <button className='closebtn' onClick={() => setMenuVisible(false)}>
          ×
        </button>
        <div className='menu-list'>
          {menuList.map((menu) => (
            <li key={menu} className='menu-button'>
              {menu}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
