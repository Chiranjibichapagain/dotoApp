import React, { useState } from 'react';
import logo from '../../Assets/The-Rudolf-Name-for-Website.png';
import Btn from '../Btn';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import './Header.scss';
import DropDownMenu from '../DropDownMenu';

const Header = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
    console.log('logged in');
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(false);
    console.log('logged out');
  };

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="The Rudolf Logo" />
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="header__icon-wrapper"
      >
        {isUserLoggedIn ? (
          <PersonIcon fontSize="inherit" />
        ) : (
          <MenuIcon fontSize="inherit" />
        )}
      </div>
      <div className="header__btn-wrapper">
        <Btn
          handleClick={isUserLoggedIn ? handleLogout : handleLogin}
          text={isUserLoggedIn ? 'Log Out' : 'Log In'}
        />
      </div>
      <div
        className={
          isDropdownOpen
            ? 'header__dropdown header__dropdown--open'
            : 'header__dropdown'
        }
      >
        <DropDownMenu
          text={isUserLoggedIn ? 'Log Out' : 'Log In'}
          handleClick={isUserLoggedIn ? handleLogout : handleLogin}
        />
      </div>
    </div>
  );
};

export default Header;
