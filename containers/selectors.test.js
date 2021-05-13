import {
  getFeatureToggle,
  getFeatureToggleByKey,
} from './selectors';

describe('getFeatureToggle', () => {
  process.env.REACT_APP_FEATURE_TOGGLE = 'false';

  it('should return proper feature toggle list', () => {
    const state = {
      featureToggle: {
        features: {
          feature1: true,
          feature2: false,
        },
      },
    };

    const expected = {
      feature1: true,
      feature2: false,
    };

    expect(getFeatureToggle(state))
      .toEqual(expected);
  });
});

describe('getFeatureToggleByKey', () => {
  process.env.REACT_APP_FEATURE_TOGGLE = 'false';

  it('should return toggle value for provided key', () => {
    const state = {
      featureToggle: {
        features: {
          feature1: true,
          feature2: false,
        },
      },
    };

    expect(getFeatureToggleByKey('feature1')(state))
      .toBeTruthy();
  });

  it('should return false if feature key is not found in the list', () => {
    const state = {
      featureToggle: {
        features: {
          feature1: true,
          feature2: false,
        },
      },
    };

    expect(getFeatureToggleByKey('feature3')(state))
      .toBeFalsy();
  });

  it('should return false if state is not defined', () => {
    expect(getFeatureToggleByKey('feature3')(undefined))
      .toBeFalsy();
    expect(getFeatureToggleByKey('feature3')(null))
      .toBeFalsy();
  });

  it('should return false if featureToggle is not defined', () => {
    const state = {};

    expect(getFeatureToggleByKey('feature3')(state))
      .toBeFalsy();
  });

  it('should return false if featureToggle.features is not defined', () => {
    const state = {
      featureToggle: {},
    };

    expect(getFeatureToggleByKey('feature3')(state))
      .toBeFalsy();
  });
});
