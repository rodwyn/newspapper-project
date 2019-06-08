import React from 'react';
import TrendingTopic from './TrendingTopic.jsx';

class MainMastead extends React.Component {
  render() {
    return (
      <section className="masthead">
        <img
          alt="Market Logo"
          className="masthead-image"
          src="images/masthead-logo.png" />
        <section className="masthead-info">
          <span>
            <time>
              {new Date().toDateString()}
            </time>
          </span>
          <span>
            25°C
          </span>
        </section>
        <TrendingTopic />
      </section>
    );
  }
}

export default MainMastead;
