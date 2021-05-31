import React, {
  createContext,
  Fragment,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';

import {
  updateFeatureToggle,
} from './actions';
import { featureToggleReducer, initialState } from './reducer';

const FeatureToggleContext = createContext();

export const FeatureToggleWrapper = ({
  children,
  provider,
}) => {
  const [state, dispatch] = useReducer(featureToggleReducer, initialState);
  const updateHandler = (featureToggle) => dispatch(updateFeatureToggle(featureToggle));

  return (
    <FeatureToggleContext.Provider value={{
      state,
      provider,
      updateHandler,
    }}>
      {children}
    </FeatureToggleContext.Provider>
  );
};

FeatureToggleWrapper.propTypes = {
  children: PropTypes.node,
  provider: PropTypes.shape({
    init: PropTypes.func,
  }).isRequired,
};

FeatureToggleWrapper.defaultProps = {
  children: null,
};


export const FeatureToggle = ({
  children,
  feature,
}) => {
  const {
    state,
    provider,
    updateHandler,
  } = useContext(FeatureToggleContext);

  useEffect(() => {
    provider.init(updateHandler);
  }, []);

  if (!feature) {
    return null;
  }

  const featureToggleEnabled = state.features[feature];

  const toggledChildren = React.Children.map(children, child => React.cloneElement(child, {
    featureToggleEnabled,
  }));

  return (
    <Fragment>
      {toggledChildren}
    </Fragment>
  );
};

FeatureToggle.propTypes = {
  children: PropTypes.node,
  feature: PropTypes.string,
};

FeatureToggle.defaultProps = {
  children: null,
  feature: null,
};
