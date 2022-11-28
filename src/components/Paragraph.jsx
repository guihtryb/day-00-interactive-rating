import PropTypes from 'prop-types';
import React from 'react';

export default function Paragraph({ content, isRatingCard }) {
  return (
    <p className={isRatingCard ? '' : 'center'}>{content}</p>
  );
}

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
  isRatingCard: PropTypes.bool,
};

Paragraph.defaultProps = {
  isRatingCard: false,
};
