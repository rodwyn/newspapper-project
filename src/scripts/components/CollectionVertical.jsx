import { BreakingNews } from '../../data/BreakingNews.jsx';
import CollectionItem from './CollectionItem.jsx';
import React from 'react';

const CollectionVertical = () => {
  const collectionItems = BreakingNews.map((item, index) => {
    return (
      <CollectionItem item={ item } key={ index } />
    );
  });

  return (
    <ul className="collection-vertical">
      { collectionItems }
    </ul>
  );
};

export default CollectionVertical;
