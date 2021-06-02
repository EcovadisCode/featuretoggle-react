import React, { Fragment } from 'react';

export const Off = ({ children, featureToggleEnabled }) => (
  <Fragment>
    {!featureToggleEnabled && children}
  </Fragment>
);
