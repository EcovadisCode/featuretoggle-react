import React, {
  createContext,
  Fragment,
  useEffect,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';

import {
  startFetchingFeatureToggle,
  updateFeatureToggle,
} from './actions';
import { featureToggleReducer, initialState } from './reducer';

export const FeatureToggleContext = createContext();

export const FeatureToggleWrapper = ({
  children,
  provider,
}) => {
  const [state, dispatch] = useReducer(featureToggleReducer, initialState);
  const updateHandler = (featureToggle) => dispatch(updateFeatureToggle(featureToggle));

  return (
    <FeatureToggleContext.Provider value={{
      state,
      dispatch,
      provider,
      updateHandler,
    }}>
      {console.log({
        children, state, dispatch, provider, updateHandler
      })}
      {/* {children} */}
    </FeatureToggleContext.Provider>
  );
};

FeatureToggle.propTypes = {
  children: PropTypes.node,
  provider: PropTypes.shape({
    init: PropTypes.func,
  }).isRequired,
};

FeatureToggle.defaultProps = {
  children: null,
};

