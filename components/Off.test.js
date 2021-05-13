import React from 'react';
import { shallow } from 'enzyme';

import { Off } from './Off';

let defaultProps = {};

describe('FeatureToggle/Off', () => {
  beforeEach(() => {
    defaultProps = {
      featureToggleEnabled: false,
    };
  });

  it('displays children when off', () => {
    const wrapper = shallow(
      <Off
        {...defaultProps}
      >
        <span>test</span>
      </Off>,
    );

    expect(wrapper.find('span')
      .length)
      .toEqual(1);
  });

  it('doesnt display children when on', () => {
    defaultProps.featureToggleEnabled = true;

    const wrapper = shallow(
      <Off
        {...defaultProps}
      >
        <span>test</span>
      </Off>,
    );

    expect(wrapper.find('span')
      .length)
      .toEqual(0);
  });
});
