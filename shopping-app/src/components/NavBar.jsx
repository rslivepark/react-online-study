import React from 'react';
import { FaRegUser, FaSearch } from 'react-icons/fa';

export default function NavBar() {
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
  return (
    <div>
      <div className='top-area'>
        <div className='search-area'>
          <FaSearch className='search-icon' />
          <input type='text' />
        </div>
        <div className='login-area'>
          <div className='login-button'>
            <FaRegUser className='user-icon' />
            <div>로그인</div>
          </div>
        </div>
      </div>
      <div className='nav-section'>
        <img
          width={100}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1418px-H%26M-Logo.svg.png'
          alt='logo'
        />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
