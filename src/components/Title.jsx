import PropTypes from 'prop-types';
import React from 'react';

export default function Title({ title, isRatingCard }) {
  return (
    <h1 className={`title ${isRatingCard ? '' : 'center'}`}>{ title }</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  isRatingCard: PropTypes.bool,
};

Title.defaultProps = {
  isRatingCard: false,
};
