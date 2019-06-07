import PropTypes from 'prop-types';
import React from 'react';

const AppBarLink = ({item}) => {
  const {
    label,
    link
  } = item;

  return (
    <li>
      <a href={ link }>{ label }</a>
    </li>
  );
};

AppBarLink.propTypes = { item: PropTypes.object.isRequired };

export default AppBarLink;
