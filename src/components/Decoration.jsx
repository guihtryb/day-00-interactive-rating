import PropTypes from 'prop-types';
import React from 'react';
import Context from '../context/Context';
import iconStar from '../images/icon-star.svg';
import illustrationThankU from '../images/illustration-thank-you.svg';

export default function Decoration({ isRatingCard }) {
  const { ratingValue } = React.useContext(Context);

  return isRatingCard ? (
    <img
      className="decoration"
      src={iconStar}
      alt="smartphone"
    />
  ) : (
    <div>
      <img src={illustrationThankU} alt="star" />
      <p className="decoration">
        You Selected
        {' '}
        {ratingValue}
        {' '}
        out of 5
      </p>
    </div>
  );
}

Decoration.propTypes = {
  isRatingCard: PropTypes.bool.isRequired,
};
