import PropTypes from 'prop-types';
import React from 'react';

export default function RateValue({ value }) {
  return (
    <label htmlFor={`rate-${value}`}>
      <input type="radio" id={`rate-${value}`} name="rating" value={value} />
      {value}
    </label>
  );
}

RateValue.propTypes = {
  value: PropTypes.number.isRequired,
};
