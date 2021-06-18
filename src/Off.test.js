import React from 'react';
import { shallow } from 'enzyme';
import { Off } from './Off';

describe('Off', () => {
  it('should not display child when toggle on', () => {
    const wrapper = shallow(
      <Off featureToggleEnabled>
        <span>Toggle OFF</span>
      </Off>
    );

    expect(wrapper
      .find('span').length)
      .toEqual(0);
  });

  it('should display child when toggle off', () => {
    const wrapper = shallow(
      <Off featureToggleEnabled={false}>
        <span>Toggle OFF</span>
      </Off>
    );

    expect(wrapper
      .find('span')
      .length)
      .toEqual(1);

    expect(wrapper
      .find('span')
      .text())
      .toEqual('Toggle OFF');
  });
});
