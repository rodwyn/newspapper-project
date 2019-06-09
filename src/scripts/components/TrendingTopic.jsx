import AppBarLink from './AppBarLink.jsx';
import React from 'react';
import { Trending } from '../../data/Topics.jsx';

const TrendingTopic = () => {
  const renderTopics = Trending.map((item, index) => {
    return (
      <AppBarLink item={ item } key={ index } />
    );
  });

  return (
    <section className="trending-topic">
      <span>
        TRENDING TOPICS:
      </span>
      <ul>
        {renderTopics}
      </ul>
    </section>
  );
};

export default TrendingTopic;
