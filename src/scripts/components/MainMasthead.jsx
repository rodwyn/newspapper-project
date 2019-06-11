import React from 'react';
import TrendingTopic from './TrendingTopic.jsx';

const MainMasthead = () => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  return (
    <section className="masthead">
      <img
        alt="Market Logo"
        className="masthead-image"
        src="images/masthead-logo.png" />
      <section className="masthead-info">
        <span>
          <time>
            {new Date().toLocaleDateString('en-EU', options)}
          </time>
        </span>
        <span>
          25°C
        </span>
      </section>
      <TrendingTopic />
    </section>
  );
};

export default MainMasthead;
