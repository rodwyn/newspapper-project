import ListLink from './ListLink.jsx';
import React from 'react';
import { Trending } from '../../data/Topics.jsx';

const TrendingTopic = () => {
  const renderTopics = Trending.map((item, index) => {
    return (
      <ListLink item={ item } key={ index } />
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
