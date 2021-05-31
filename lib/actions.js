"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFeatureToggle = exports.UPDATE_FEATURE_TOGGLE = void 0;
var UPDATE_FEATURE_TOGGLE = 'UPDATE_FEATURE_TOGGLE';
exports.UPDATE_FEATURE_TOGGLE = UPDATE_FEATURE_TOGGLE;

var updateFeatureToggle = function updateFeatureToggle(toggles) {
  return {
    type: UPDATE_FEATURE_TOGGLE,
    payload: {
      features: toggles
    }
  };
};

exports.updateFeatureToggle = updateFeatureToggle;