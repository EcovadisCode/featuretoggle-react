import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

const isDebug = process.env.REACT_APP_DEBUG_FEATURE_TOGGLE === 'true';

export class FeatureToggle extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.initProvider();
  }

  initProvider() {
    const {
      feature,
      isLoaded,
      isLoading,
      provider,
      reload,
      startFetchingFeatureToggle,
    } = this.props;

    if ((!isLoaded && !isLoading) || reload) {
      if (isDebug) {
        console.warn(`Fetching toggle state initiated by "${feature ? feature : 'empty tag'}"`); // eslint-disable-line
      }
      startFetchingFeatureToggle();
      provider.init(this.handleChange);
    }
  }

  handleChange(featureToggle) {
    this.props.updateFeatureToggle(featureToggle);
  }

  render() {
    const { children, feature } = this.props;

    if (!feature) {
      return null;
    }

    const featureToggleEnabled = this.props.featureToggle[feature];

    const toggledChildren = React.Children.map(children, child => React.cloneElement(child, {
      featureToggleEnabled,
    }));

    return (
      <Fragment>
        {toggledChildren}
      </Fragment>
    );
  }
}

FeatureToggle.propTypes = {
  children: PropTypes.node,
  feature: PropTypes.string,
  featureToggle: PropTypes.object, // eslint-disable-line
  isLoaded: PropTypes.bool,
  isLoading: PropTypes.bool,
  provider: PropTypes.shape({
    init: PropTypes.func,
  }).isRequired,
  reload: PropTypes.bool,
  startFetchingFeatureToggle: PropTypes.func,
  updateFeatureToggle: PropTypes.func,
};

FeatureToggle.defaultProps = {
  children: null,
  feature: null,
  featureToggle: {},
  isLoaded: false,
  isLoading: false,
  reload: false,
  startFetchingFeatureToggle: () => {},
  updateFeatureToggle: () => {},
};
