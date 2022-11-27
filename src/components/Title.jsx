import PropTypes from 'prop-types';
import React from 'react';

export default function Title({ title }) {
  return (
    <h1 className="title">{ title }</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
