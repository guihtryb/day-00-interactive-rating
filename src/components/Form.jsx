import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import RateValueInput from './RateValueInput';

export default function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="rating-container">
        {
          [1, 2, 3, 4, 5].map((option) => (<RateValueInput key={option} value={option} />))
        }
      </div>
      <Button />
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
