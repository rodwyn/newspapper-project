import AppBarMenu from './components/AppBarMenu.jsx';
import BreakingAlert from './components/BreakingAlert.jsx';
import CollectionVertical from './components/CollectionVertical.jsx';
import MainMasthead from './components/MainMasthead.jsx';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <BreakingAlert />
        <AppBarMenu />
        <MainMasthead />
        <div className="container-gap">
          <div className="col-9">holi</div>
          <div className="col-3">
            <CollectionVertical />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
