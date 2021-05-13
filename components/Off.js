import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Off = ({ children, featureToggleEnabled }) => (
  <Fragment>
    {!featureToggleEnabled && children}
  </Fragment>
);

Off.propTypes = {
  children: PropTypes.node,
  featureToggleEnabled: PropTypes.bool,
};

Off.defaultProps = {
  children: null,
  featureToggleEnabled: false,
};
