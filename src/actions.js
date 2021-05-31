export const UPDATE_FEATURE_TOGGLE = 'UPDATE_FEATURE_TOGGLE';

export const updateFeatureToggle = toggles => ({
  type: UPDATE_FEATURE_TOGGLE,
  payload: {
    features: toggles,
  },
});
