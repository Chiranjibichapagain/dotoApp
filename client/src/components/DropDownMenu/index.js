import React from 'react';

import './DropDownMenu.scss';

const DropDownMenu = ({ text, handleClick }) => {
  console.log('text--', text);
  return (
    <div onClick={handleClick} className="dropdown">
      {text}
    </div>
  );
};

export default DropDownMenu;
