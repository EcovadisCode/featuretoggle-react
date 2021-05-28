import {
  CLEAR_FEATURE_TOGGLE,
  START_FETCHING_FEATURE_TOGGLE,
  UPDATE_FEATURE_TOGGLE,
} from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  features: {},
};

export const featureToggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_FEATURE_TOGGLE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_FEATURE_TOGGLE:
      return {
        ...state,
        ...action.payload,
        loaded: true,
        loading: false,
      };
    case CLEAR_FEATURE_TOGGLE:
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
