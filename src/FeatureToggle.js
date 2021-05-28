import React, { Fragment, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  startFetchingFeatureToggle,
  updateFeatureToggle,
} from './actions';
import { featureToggleReducer, initialState } from './reducer';

const isDebug = process.env.REACT_APP_DEBUG_FEATURE_TOGGLE === 'true';


export const FeatureToggle = ({
  children,
  feature,
  provider,
  reload
}) => {
  const [state, dispatch] = useReducer(featureToggleReducer, initialState);
  const updateHandler = (featureToggle) => dispatch(updateFeatureToggle(featureToggle));


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
  provider: PropTypes.shape({
    init: PropTypes.func,
  }).isRequired,
  reload: PropTypes.bool,
};

FeatureToggle.defaultProps = {
  children: null,
  feature: null,
  reload: false,
};
