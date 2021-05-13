import {
  CLEAR_FEATURE_TOGGLE,
  START_FETCHING_FEATURE_TOGGLE,
  UPDATE_FEATURE_TOGGLE,
} from './actions';
import { initialState, featureToggleReducer } from './reducer';

describe('Feature toggle reducer', () => {
  it('case UPDATE_FEATURE_TOGGLE', () => {
    const expected = {
      loaded: true,
      loading: false,
      features: {
        feature1: true,
        feature2: false,
      },
    };

    const action = {
      type: UPDATE_FEATURE_TOGGLE,
      payload: {
        features: {
          feature1: true,
          feature2: false,
        },
      },
    };

    expect(featureToggleReducer(
      initialState,
      action,
    ))
      .toEqual(expected);
  });

  it('case CLEAR_FEATURE_TOGGLE', () => {
    const updatedState = {
      loaded: true,
      loading: false,
      features: {
        feature1: true,
        feature2: false,
      },
    };

    const expected = {
      features: {
        feature1: true,
        feature2: false,
      },
      loaded: false,
      loading: false,
    };

    const action = {
      type: CLEAR_FEATURE_TOGGLE,
    };

    expect(featureToggleReducer(
      updatedState,
      action,
    ))
      .toEqual(expected);
  });

  it('case START_FETCHING_FEATURE_TOGGLE', () => {
    const state = {
      ...initialState,
    };

    const expected = {
      ...initialState,
      loading: true,
      loaded: false,
    };

    const action = {
      type: START_FETCHING_FEATURE_TOGGLE,
      payload: {
        feature: 'feature1',
      },
    };

    expect(featureToggleReducer(
      state,
      action,
    ))
      .toEqual(expected);
  });
});
