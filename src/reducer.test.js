import { initialState, featureToggleReducer } from './reducer';

import {
  UPDATE_FEATURE_TOGGLE,
} from './actions';

describe('featureToggleReducer', () => {
  it('upodates state with featureToggle payload', () => {
    const action = {
      type: UPDATE_FEATURE_TOGGLE,
      payload: {
        features: {
          feature1: true,
          feature2: false,
        },
      },
    };

    const updatedState = featureToggleReducer(initialState, action);

    expect(updatedState)
      .toEqual({
        features: {
          feature1: true,
          feature2: false,
        },
      });
  });
});
