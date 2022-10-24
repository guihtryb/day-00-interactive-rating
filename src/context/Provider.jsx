import PropTypes from 'prop-types';
import React from 'react';
import AppContext from './Context';

function Provider({ children }) {
  return (
    <AppContext.Provider value="">
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
