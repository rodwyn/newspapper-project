import AppBarMenu from './components/AppBarMenu.jsx';
import MainMashead from './components/MainMasthead.jsx';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBarMenu />
        <MainMashead />
        <h1>Holi crayoli</h1>
      </div>
    );
  }
}

export default App;
