import React from 'react';
import { mount } from 'enzyme';
import {
  FeatureToggleWrapper,
  FeatureToggle,
} from './FeatureToggle';
import { On } from './On';

const flags = {
  feature1: true,
  feature2: false,
};

const handler = jest.fn();

const provider = {
  init: () => handler(flags),
};

describe('FeatureToggle', () => {
  it('calls provider.init on mount', () => {
    mount(
      <FeatureToggleWrapper provider={provider}>
        <FeatureToggle feature="feature1" />
      </FeatureToggleWrapper>
    );

    expect(handler)
      .toHaveBeenCalledWith({ feature1: true, feature2: false });
  });

  it('returns children when a feature is defined', () => {
    const wrapper = mount(
      <FeatureToggleWrapper provider={provider}>
        <FeatureToggle feature="feature1">
          <On />
        </FeatureToggle>
      </FeatureToggleWrapper>
    );

    expect(wrapper
      .find(On).length)
      .toEqual(1);
  });

  it('returns empty when no feature defined', () => {
    const wrapper = mount(
      <FeatureToggleWrapper provider={provider}>
        <FeatureToggle>
          <On />
        </FeatureToggle>
      </FeatureToggleWrapper>
    );

    expect(wrapper
      .find(On).length)
      .toEqual(0);
  });

  it('passes featureToggleEnabled to child', () => {
    const nonMockedProvider = {
      init: (nonMockedhandler) => nonMockedhandler(flags),
    };
    const wrapper = mount(
      <FeatureToggleWrapper provider={nonMockedProvider}>
        <FeatureToggle feature="feature1">
          <On />
        </FeatureToggle>
      </FeatureToggleWrapper>
    );

    expect(wrapper
      .find(On)
      .props())
      .toEqual({ featureToggleEnabled: true });
  });
});
