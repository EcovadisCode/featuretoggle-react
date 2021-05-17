export const CLEAR_FEATURE_TOGGLE = 'CLEAR_FEATURE_TOGGLE';
export const START_FETCHING_FEATURE_TOGGLE = 'START_FETCHING_FEATURE_TOGGLE';
export const UPDATE_FEATURE_TOGGLE = 'UPDATE_FEATURE_TOGGLE';

export const clearFeatureToggle = () => ({
  type: CLEAR_FEATURE_TOGGLE,
});

export const startFetchingFeatureToggle = () => ({
  type: START_FETCHING_FEATURE_TOGGLE,
});

export const updateFeatureToggle = toggles => ({
  type: UPDATE_FEATURE_TOGGLE,
  payload: {
    features: toggles,
  },
});
