import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { PROVIDERS, SELECTED_PROVIDER } from 'containers/FeatureToggle/consts';
import { ClientProvider } from './ClientProvider';

const isDebug = process.env.REACT_APP_DEBUG_FEATURE_TOGGLE === 'true';

export class FeatureToggle extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const provider = ClientProvider(PROVIDERS[this.props.selectedProvider]);

    this.initProvider(provider);
  }

  initProvider(provider) {
    const {
      feature,
      isLoaded,
      isLoading,
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
  reload: PropTypes.bool,
  selectedProvider: PropTypes.string,
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
  selectedProvider: SELECTED_PROVIDER,
  startFetchingFeatureToggle: () => {},
  updateFeatureToggle: () => {},
};
