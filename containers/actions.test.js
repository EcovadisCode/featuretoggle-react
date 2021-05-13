import {
  clearFeatureToggle,
  CLEAR_FEATURE_TOGGLE,
  updateFeatureToggle,
  UPDATE_FEATURE_TOGGLE,
} from './actions';

describe('Feature toggle actions', () => {
  it('creates update action', () => {
    const expected = {
      type: UPDATE_FEATURE_TOGGLE,
      payload: {
        features: {
          feature1: true,
          feature2: false,
        },
      },
    };

    const toggles = {
      feature1: true,
      feature2: false,
    };

    expect(updateFeatureToggle(toggles))
      .toEqual(expected);
  });

  it('creates clear action', () => {
    const expected = {
      type: CLEAR_FEATURE_TOGGLE,
    };

    expect(clearFeatureToggle())
      .toEqual(expected);
  });
});
