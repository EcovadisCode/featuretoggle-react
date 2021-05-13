import React from 'react';
import { shallow } from 'enzyme';
import { MockClient } from 'components/FeatureToggle/clients/MockClient';

import { FeatureToggle } from './FeatureToggle';

let defaultProps = {};
const startFetchingFeatureToggle = jest.fn();
const updateFeatureToggle = jest.fn();

describe('FeatureToggle', () => {
  beforeEach(() => {
    defaultProps = {
      feature: 'test',
      featureToggle: {
        test: true,
      },
      isLoaded: true,
      isLoading: false,
      reload: false,
      selectedProvider: 'MOCK_CLIENT',
      startFetchingFeatureToggle,
      updateFeatureToggle,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('initProvider not called when loaded', () => {
    jest.spyOn(MockClient, 'init');
    shallow(
      <FeatureToggle
        {...defaultProps}
      />,
    );

    expect(startFetchingFeatureToggle)
      .not
      .toHaveBeenCalled();

    expect(MockClient.init)
      .not
      .toHaveBeenCalled();
  });

  it('initProvider not called when loading', () => {
    defaultProps.isLoaded = false;
    defaultProps.isLoading = true;

    jest.spyOn(MockClient, 'init');
    shallow(
      <FeatureToggle
        {...defaultProps}
      />,
    );

    expect(startFetchingFeatureToggle)
      .not
      .toHaveBeenCalled();

    expect(MockClient.init)
      .not
      .toHaveBeenCalled();
  });

  it('initProvider called when not loaded', () => {
    defaultProps.isLoaded = false;
    jest.spyOn(MockClient, 'init');
    shallow(
      <FeatureToggle
        {...defaultProps}
      />,
    );

    expect(startFetchingFeatureToggle)
      .toHaveBeenCalled();

    expect(MockClient.init)
      .toHaveBeenCalled();
  });

  it('initProvider reload override', () => {
    defaultProps.isLoaded = true;
    defaultProps.reload = true;
    jest.spyOn(MockClient, 'init');
    shallow(
      <FeatureToggle
        {...defaultProps}
      />,
    );

    expect(startFetchingFeatureToggle)
      .toHaveBeenCalled();

    expect(MockClient.init)
      .toHaveBeenCalled();
  });
});
