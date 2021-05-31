import {
  UPDATE_FEATURE_TOGGLE,
} from './actions';

export const initialState = {
  features: {},
};

export const featureToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FEATURE_TOGGLE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
