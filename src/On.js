import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const On = ({ children, featureToggleEnabled }) => (
  <Fragment>
    {featureToggleEnabled && children}
  </Fragment>
);

On.propTypes = {
  children: PropTypes.node,
  featureToggleEnabled: PropTypes.bool,
};

On.defaultProps = {
  children: null,
  featureToggleEnabled: false,
};
