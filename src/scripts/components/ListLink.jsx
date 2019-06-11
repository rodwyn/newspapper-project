import PropTypes from 'prop-types';
import React from 'react';

const ListLink = ({ item }) => {
  const {
    label,
    link
  } = item;

  return (
    <li>
      <a href={ link }>{label}</a>
    </li>
  );
};

ListLink.propTypes = { item: PropTypes.object.isRequired };

export default ListLink;
