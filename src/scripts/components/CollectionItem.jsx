import PropTypes from 'prop-types';
import React from 'react';

const CollectionItem = ({item}) => {
  const {
    content,
    link,
    timestamp
  } = item;

  return (
    <li>
      <a href={ link }>{ content }</a>
      <span>{ timestamp }</span>
    </li>
  );
};

CollectionItem.propTypes = { item: PropTypes.object.isRequired };

export default CollectionItem;
