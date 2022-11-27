import PropTypes from 'prop-types';
import React from 'react';
import AppContext from '../context/Context';
import iconStar from '../images/icon-star.svg';
import illustrationThankU from '../images/illustration-thank-you.svg';

export default function Decoration({ isRatingCard }) {
  const { rating } = React.useContext(AppContext);

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
        {rating}
        {' '}
        out of 5
      </p>
    </div>
  );
}

Decoration.propTypes = {
  isRatingCard: PropTypes.bool.isRequired,
};
