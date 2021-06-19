import flagsmith from 'flagsmith';
import { FlagsmithClientClass } from './flagsmith';

const state = {
  flags: {
    feature1: {
      enabled: true,
      id: 1234,
      value: true,
    },
    feature2: {
      enabled: false,
      id: 2345,
      value: false,
    },
  },
};

const expected = {
  feature1: true,
  feature2: false,
};

jest.spyOn(flagsmith, 'init').mockImplementation(({
  environmentID,
  onChange,
}) => onChange());
jest.spyOn(flagsmith, 'getState').mockImplementation(() => state);

const config = { environmentID: 'testEnv' };

describe('Flagsmith client', () => {
  it('init passes flags to handler', () => {
    const flagsmithClient = new FlagsmithClientClass(config);
    const handler = jest.fn();
    flagsmithClient.init(handler);

    expect(handler)
      .toHaveBeenCalledWith(expected);
  });

  it('handler not called when fetching complete', () => {
    const flagsmithClient = new FlagsmithClientClass(config);
    flagsmithClient.fetching = true;
    const handler = jest.fn();
    flagsmithClient.init(handler);

    expect(handler)
      .not
      .toHaveBeenCalled();
  });

  it('transforms state', () => {
    const flagsmithClient = new FlagsmithClientClass(config);
    const result = flagsmithClient.constructor.transform(state);

    expect(result)
      .toEqual(expected);
  });
});
