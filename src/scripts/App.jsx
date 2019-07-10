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
          <div className="col-9">
            <div className="container-gap">
              <div className="icon-content col-12">
                <div className="icon">
                  <i className="icofont-celsius" />
                </div>
                <div className="icon">
                  <i className="icofont-clouds" />
                </div>
                <div className="icon">
                  <i className="icofont-celsius" />
                </div>
                <div className="icon">
                  <i className="icofont-fahrenheit" />
                </div>
                <div className="icon">
                  <i className="icofont-full-sunny" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-check" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-clip" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-cart" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-clock" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-close" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-love" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-message" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-messaging" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-music" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-play" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-rate-blank" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-rating" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-remove" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-user" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-weather" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-zoom-in" />
                </div>

                <div className="icon">
                  <i className="icofont-ui-zoom-out" />
                </div>

                <div className="icon">
                  <i className="icofont-facebook" />
                </div>

                <div className="icon">
                  <i className="icofont-google-plus" />
                </div>

                <div className="icon">
                  <i className="icofont-google-map" />
                </div>

                <div className="icon">
                  <i className="icofont-instagram" />
                </div>

                <div className="icon">
                  <i className="icofont-tinder" />
                </div>

                <div className="icon">
                  <i className="icofont-twitter" />
                </div>

                <div className="icon">
                  <i className="icofont-youtube" />
                </div>

                <div className="icon">
                  <i className="icofont-address-book" />
                </div>

                <div className="icon">
                  <i className="icofont-at" />
                </div>

                <div className="icon">
                  <i className="icofont-audio" />
                </div>

                <div className="icon">
                  <i className="icofont-book-mark" />
                </div>

                <div className="icon">
                  <i className="icofont-camera" />
                </div>

                <div className="icon">
                  <i className="icofont-check-alt" />
                </div>

                <div className="icon">
                  <i className="icofont-check-circled" />
                </div>

                <div className="icon">
                  <i className="icofont-check" />
                </div>

                <div className="icon">
                  <i className="icofont-checked" />
                </div>

                <div className="icon">
                  <i className="icofont-clip" />
                </div>

                <div className="icon">
                  <i className="icofont-clock-time" />
                </div>

                <div className="icon">
                  <i className="icofont-close-circled" />
                </div>

                <div className="icon">
                  <i className="icofont-close-line" />
                </div>

                <div className="icon">
                  <i className="icofont-close" />
                </div>

                <div className="icon">
                  <i className="icofont-computer" />
                </div>

                <div className="icon">
                  <i className="icofont-exclamation" />
                </div>

                <div className="icon">
                  <i className="icofont-exclamation-tringle" />
                </div>

                <div className="icon">
                  <i className="icofont-eye-alt" />
                </div>

                <div className="icon">
                  <i className="icofont-home" />
                </div>

                <div className="icon">
                  <i className="icofont-info-circle" />
                </div>

                <div className="icon">
                  <i className="icofont-image" />
                </div>

                <div className="icon">
                  <i className="icofont-lock" />
                </div>

                <div className="icon">
                  <i className="icofont-minus-circle" />
                </div>

                <div className="icon">
                  <i className="icofont-minus" />
                </div>

                <div className="icon">
                  <i className="icofont-navigation-menu" />
                </div>

                <div className="icon">
                  <i className="icofont-notification" />
                </div>

                <div className="icon">
                  <i className="icofont-plus-circle" />
                </div>

                <div className="icon">
                  <i className="icofont-plus" />
                </div>

                <div className="icon">
                  <i className="icofont-question-circle" />
                </div>

                <div className="icon">
                  <i className="icofont-question" />
                </div>

                <div className="icon">
                  <i className="icofont-share" />
                </div>

                <div className="icon">
                  <i className="icofont-thumbs-up" />
                </div>

                <div className="icon">
                  <i className="icofont-verification-check" />
                </div>

                <div className="icon">
                  <i className="icofont-warning-alt" />
                </div>

                <div className="icon">
                  <i className="icofont-world" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <CollectionVertical />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
