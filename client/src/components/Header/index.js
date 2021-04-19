import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../Assets/The-Rudolf-Name-for-Website.png';
import Btn from '../Btn';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import './Header.scss';
import DropDownMenu from '../DropDownMenu';
import { useUser } from '../../hooks/useFetchData';

const Header = () => {
  const history = useHistory();
  const [user, logout] = useUser();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    history.push('/');
  };

  const userName = user && user.userInfo.name.split(' ')[0];

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="The Rudolf Logo" />
      <div className="header__btn-wrapper">
        <p className="header__username">{userName}</p>
        {user && (
          <div onClick={handleLogout} className="header__button">
            <ExitToAppRoundedIcon fontSize="large" />
            <span>LOG OUT</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
