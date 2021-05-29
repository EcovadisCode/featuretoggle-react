import React, {
  Fragment,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { FeatureToggleContext } from './FeatureToggleWrapper';

const isDebug = process.env.REACT_APP_DEBUG_FEATURE_TOGGLE === 'true';


export const FeatureToggle = ({
  children,
  feature,
  reload
}) => {
  const {
    state,
    dispatch,
    provider,
    updateHandler,
  } = useContext(FeatureToggleContext);

  useEffect(() => {
    if ((!state.isLoaded && !state.isLoading) || reload) {
      if (isDebug) {
        console.warn(`Fetching toggle state initiated by "${feature ? feature : 'empty tag'}"`); // eslint-disable-line
      }
      dispatch(startFetchingFeatureToggle());
      provider.init(updateHandler);
    }
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
  reload: PropTypes.bool,
};

FeatureToggle.defaultProps = {
  children: null,
  feature: null,
  reload: false,
};
