import optimizelySDK from '@optimizely/optimizely-sdk';

export const optimizelyClient = ({
  sdkKey,
  audience,
}) => {
  const optimizelyClientInstance = optimizelySDK.createInstance({
    sdkKey,
  });

  return {
    init: handler => {
      optimizelyClientInstance.onReady().then(() => {
        const featureToggles = {};
        const features = optimizelyClientInstance.getEnabledFeatures(audience);
        features.forEach(feature => {
          featureToggles[feature] = true;
        });
        handler(featureToggles);
      });
    },
  };
};
