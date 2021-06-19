import * as launchdarklyJsClient from 'launchdarkly-js-client-sdk';
import { LaunchdarklyClientClass } from './launchdarkly';

const config = {
  clientSideId: 'abcdef',
  user: {
    key: 'UNIQUE IDENTIFIER',
  },
};

const flags = {
  feature1: true,
  feature2: false,
};

jest.spyOn(launchdarklyJsClient, 'initialize').mockImplementation(() => ({
  allFlags: () => flags,
  on: (event, callBack) => {
    callBack();
  },
}));

describe('Launchdarkly client', () => {
  it('init passes flags to handler', () => {
    const launchDarklyClient = new LaunchdarklyClientClass(config);
    const handler = jest.fn();
    launchDarklyClient.init(handler);

    expect(handler)
      .toHaveBeenCalledWith(flags);
  });

  it('handler not called when fetching complete', () => {
    const launchDarklyClient = new LaunchdarklyClientClass(config);
    launchDarklyClient.fetching = true;
    const handler = jest.fn();
    launchDarklyClient.init(handler);

    expect(handler)
      .not
      .toHaveBeenCalled();
  });
});
