import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const [ratingValue, setRatingValue] = React.useState(0);
  const [rated, setRated] = React.useState(false);

  const value = React.useMemo(() => ({
    ratingValue,
    setRatingValue,
    rated,
    setRated,
  }));

  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
