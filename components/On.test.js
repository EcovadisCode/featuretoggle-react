import React from 'react';
import { shallow } from 'enzyme';

import { On } from './On';

let defaultProps = {};

describe('FeatureToggle/On', () => {
  beforeEach(() => {
    defaultProps = {
      featureToggleEnabled: true,
    };
  });

  it('displays children when on', () => {
    const wrapper = shallow(
      <On
        {...defaultProps}
      >
        <span>test</span>
      </On>,
    );

    expect(wrapper.find('span')
      .length)
      .toEqual(1);
  });

  it('doesnt display children when off', () => {
    defaultProps.featureToggleEnabled = false;

    const wrapper = shallow(
      <On
        {...defaultProps}
      >
        <span>test</span>
      </On>,
    );

    expect(wrapper.find('span')
      .length)
      .toEqual(0);
  });
});
