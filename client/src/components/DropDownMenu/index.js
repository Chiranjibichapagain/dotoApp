import React from 'react';

import './DropDownMenu.scss';

const DropDownMenu = ({ text, handleClick }) => {
  return (
    <div onClick={handleClick} className="dropdown">
      {text}
    </div>
  );
};

export default DropDownMenu;
