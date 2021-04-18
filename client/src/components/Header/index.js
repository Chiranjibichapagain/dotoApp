import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../Assets/The-Rudolf-Name-for-Website.png';
import Btn from '../Btn';
import PersonIcon from '@material-ui/icons/Person';
import './Header.scss';
import DropDownMenu from '../DropDownMenu';
import { useUser } from '../../hooks/useFetchData';

const Header = () => {
  const history = useHistory();
  const [user, logout] = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    history.push('/');
  };

  const userName = user && user.userInfo.name.split(' ')[0];

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="The Rudolf Logo" />
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="header__icon-wrapper"
      >
        {user && <PersonIcon fontSize="inherit" />}
        <p className="header__username">{userName}</p>
      </div>
      <div className="header__btn-wrapper">
        <p className="header__username">{userName}</p>
        {user && <Btn handleClick={handleLogout} text="Log Out" />}
      </div>
      <div
        className={
          isDropdownOpen
            ? 'header__dropdown header__dropdown--open'
            : 'header__dropdown'
        }
      >
        <DropDownMenu text="Log Out" handleClick={handleLogout} />
      </div>
    </div>
  );
};

export default Header;
