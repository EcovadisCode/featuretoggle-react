"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optimizelyClient = void 0;

var _optimizelySdk = _interopRequireDefault(require("@optimizely/optimizely-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var optimizelyClient = function optimizelyClient(_ref) {
  var sdkKey = _ref.sdkKey,
      audience = _ref.audience;

  var optimizelyClientInstance = _optimizelySdk["default"].createInstance({
    sdkKey: sdkKey
  });

  return {
    init: function init(handler) {
      optimizelyClientInstance.onReady().then(function () {
        var featureToggles = {};
        var features = optimizelyClientInstance.getEnabledFeatures(audience);
        features.forEach(function (feature) {
          featureToggles[feature] = true;
        });
        handler(featureToggles);
      });
    }
  };
};

exports.optimizelyClient = optimizelyClient;