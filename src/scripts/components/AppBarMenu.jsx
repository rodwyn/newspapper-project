import AppBarLink from './AppBarLink.jsx';
import React from 'react';

class AppBarMenu extends React.Component {
  render() {
    return (
      <ul className="app-bar-menu">
        <AppBarLink />
        <AppBarLink />
        <AppBarLink />
      </ul>
    );
  }
}

export default AppBarMenu;
