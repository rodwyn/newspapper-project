import AppBarLink from './AppBarLink.jsx';
import {Menu} from '../../data/Menu.jsx';
import React from 'react';

const AppBarMenu = () => {
  const menuItems = Menu.map((item, index) => {
    return (
      <AppBarLink item={ item } key={ index } />
    );
  });

  return (
    <ul className="app-bar-menu">
      { menuItems }
    </ul>
  );
};

export default AppBarMenu;
