import PropTypes from 'prop-types';
import React from 'react';
import AppContext from '../context/Context';
import iconStar from '../images/icon-star.svg';

export default function Decoration({ isRatingCard }) {
  const { rating } = React.useContext(AppContext);

  return (
    <div className="decoration-container">
      {
      isRatingCard ? <img src={iconStar} alt="star" /> : (
        <p>
          You Selected
          {' '}
          {rating}
          {' '}
          out of 5
        </p>
      )
      }
    </div>
  );
}

Decoration.propTypes = {
  isRatingCard: PropTypes.bool.isRequired,
};
