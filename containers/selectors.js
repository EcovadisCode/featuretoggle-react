import { createSelector } from 'reselect';
import * as R from 'ramda';
import { renameKeysWith } from 'utils/functional';
import { FEATURES } from './consts';

const featureToggleTest = process.env.REACT_APP_FEATURE_TOGGLE === 'true';

const mapEnvKeys = (val, key) => process.env[`REACT_APP_FEATURE_TOGGLE_${key}`] === 'true';

const featureToggleTestFeatures = R.mapObjIndexed(mapEnvKeys, FEATURES);

const toggleNames = feature => FEATURES[feature];

export const getFeatureToggle = (state) => {
  if (featureToggleTest) {
    return renameKeysWith(toggleNames, featureToggleTestFeatures);
  }

  return state?.featureToggle?.features;
};

export const getFeatureToggleByKey = key => createSelector(
  [getFeatureToggle],
  features => !!features?.[key],
);

export const getIsLoaded = state => state?.featureToggle?.loaded || false;

export const getIsLoading = state => state?.featureToggle?.loading || false;
