import PropTypes from 'prop-types';
import React from 'react';
import AppContext from './Context';

function Provider({ children }) {
  const [rating, setRating] = React.useState(0);

  const contextValue = React.useMemo(() => ({
    rating,
    setRating,
  }));

  return (
    <AppContext.Provider value={contextValue}>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
