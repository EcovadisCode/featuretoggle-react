import flagsmith from 'flagsmith';

class FlagsmithClientClass {
  constructor({ environmentID }) {
    this.fetching = false;
    this.environmentID = environmentID;
    this.init = this.init.bind(this);
  }

  init(handler) {
    !this.fetching && flagsmith.init({
      environmentID: this.environmentID,
      onChange: () => {
        const state = flagsmith.getState();
        handler(this.constructor.transform(state));
      },
    });
    this.fetching = true;
  }

  static transform(state) {
    const { flags } = state;
    const featureFlags = {};
    Object.keys(flags).forEach((flag) => featureFlags[flag] = flags[flag].enabled);

    return featureFlags;
  }
}

export const flagsmithClient = ({ environmentID }) => new FlagsmithClientClass({
  environmentID,
});
