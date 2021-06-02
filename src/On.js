import React, { Fragment } from 'react';

export const On = ({ children, featureToggleEnabled }) => (
  <Fragment>
    {featureToggleEnabled && children}
  </Fragment>
);
