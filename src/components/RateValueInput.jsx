import PropTypes from 'prop-types';
import React from 'react';
import Context from '../context/Context';

export default function RateValueInput({ value }) {
  const { setRatingValue, ratingValue } = React.useContext(Context);

  const handleChange = () => {
    setRatingValue(value);
  };

  return (
    <label htmlFor={`rate-${value}`} className={`rating-value ${ratingValue === value ? 'selected' : ''}`}>
      <input type="radio" id={`rate-${value}`} name="rating" value={value} onChange={handleChange} />
      {value}
    </label>
  );
}

RateValueInput.propTypes = {
  value: PropTypes.number.isRequired,
};
