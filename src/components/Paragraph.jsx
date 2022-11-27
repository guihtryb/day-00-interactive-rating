import PropTypes from 'prop-types';
import React from 'react';

export default function Paragraph({ content }) {
  return (
    <p>{content}</p>
  );
}

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
};
