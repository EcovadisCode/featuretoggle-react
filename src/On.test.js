import React from 'react';
import { shallow } from 'enzyme';
import { On } from './On';

describe('On', () => {
  it('should display child when toggle on', () => {
    const wrapper = shallow(
      <On featureToggleEnabled>
        <span>Toggle ON</span>
      </On>
    );

    expect(wrapper
      .find('span')
      .length)
      .toEqual(1);

    expect(wrapper
      .find('span')
      .text())
      .toEqual('Toggle ON');
  });

  it('should not display child when toggle off', () => {
    const wrapper = shallow(
      <On featureToggleEnabled={false}>
        <span>Toggle ON</span>
      </On>
    );

    expect(wrapper
      .find('span').length)
      .toEqual(0);
  });
});
