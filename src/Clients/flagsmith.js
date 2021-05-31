import flagsmith from "flagsmith";

class flagsmithClientClass {
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
        handler(this.transform(state));
      }
    });
    this.fetching = true;
  }

  transform(state) {
    const { flags } = state;
    const featureFlags = {};
    Object.keys(flags).forEach(flag => featureFlags[flag] = flags[flag].enabled);

    return featureFlags;
  }
}

export const flagsmithClient = ({ environmentID }) => new flagsmithClientClass({
  environmentID,
});
