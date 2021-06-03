import { initialize } from "launchdarkly-js-client-sdk";

class launchdarklyClientClass {
  constructor({ clientSideId, user }) {
    this.fetching = false;
    this.clientSideId = clientSideId;
    this.user = user;
    this.init = this.init.bind(this);
  }

  init(handler) {
    if (!this.fetching) {
      const client = initialize(this.clientSideId, this.user);
      client.on('ready', () => {
        const features = client.allFlags();
        handler(features);
      });
    }
    this.fetching = true;
  }
}

export const launchdarklyClient = ({
  clientSideId,
  user,
}) => new launchdarklyClientClass({
  clientSideId,
  user,
});
