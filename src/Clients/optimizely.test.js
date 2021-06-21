import optimizelySDK from '@optimizely/optimizely-sdk';
import { optimizelyClient } from './optimizely';

const config = {
  sdkKey: 'abscdef',
  audience: 'some_audience',
};
const flags = [
  'feature1',
  'feature2',
];

jest.spyOn(optimizelySDK, 'createInstance').mockImplementation(() => ({
  onReady: () => ({
    then: (callBack) => callBack(),
  }),
  getEnabledFeatures: () => flags,
}));

describe('Optimizely client', () => {
  it('init passes flags to handler', () => {
    const handler = jest.fn();
    const client = optimizelyClient(config);
    client.init(handler);

    expect(handler)
      .toHaveBeenCalledWith({ feature1: true, feature2: true }
      );
  });
});
