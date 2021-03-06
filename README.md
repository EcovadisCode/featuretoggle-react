# featuretoggle-react

This module is meant to simplify the usage of Feature Toggles in React, as described in these medium articles:

https://medium.com/ecovadis-engineering/using-feature-toggle-in-a-react-application-part-1-ee34a0e72cf4

https://medium.com/ecovadis-engineering/using-feature-toggle-in-a-react-application-part-2-4e09b46d7ad1

## Installation

Install the module using:

`npm install --save featuretoggle-react`

or:

`yarn add featuretoggle-react`

## Usage

import the required dependencies:

```js
import {
  FeatureToggleWrapper,
  flagsmithClient,
  optimizelyClient, // or alternatively
  launchdarklyClient, // or alternatively
  FeatureToggle,
  On,
  Off,
 } from "featuretoggle-react";
```

Initialize one of the Clients provided: `flagsmithClient`, `optimizelyClient` or `launchdarklyClient`:

```js
const provider = flagsmithClient({
  environmentID: "xxxxxxxxxxxxxxxxxxxxx"
});
```

or:

```js
const provider = optimizelyClient({
  audience: 'xxxxxxxxxxxx',
  sdkKey: 'xxxxxxxxxxxxxxx',
});
```

or:

```js
const provider = launchdarklyClient({
  clientSideId: 'xxxxxxxxxxxxxxxx',
  user: {
    key: 'xxxxxxxxx',
  },
});

```
Use the FeatureToggle:

```js
export default function App() {
  return (
    <FeatureToggleWrapper provider={provider}>
      <div className="App">
        <p>
          <span>Feature1: </span>
          <FeatureToggle feature="feature1">
            <On>On</On>
            <Off>Off</Off>
          </FeatureToggle>
        </p>
        <p>
          <span>Feature2: </span>
          <FeatureToggle feature="feature2">
            <On>On</On>
            <Off>Off</Off>
          </FeatureToggle>
        </p>
      </div>
    </FeatureToggleWrapper>
  );
}
```
The `featuretoggle-react` module will fetch the toggle state from the relevant service provider and display the toggled state according to the received data.

You can also create your own provider along those lines:

```js
const provider = {
  init: (handler) => {
    const featureToggles = {};
    // call your endpoint or insert mock values into featureToggles here
    handler(featureToggles);
  }
};
```
**Warning:** reloads and updates are not handled in this version. This is planned for version 2.x. Currently, the feature toggles are fetched and updated only once, when the first `<FeatureToggle>` element is rendered.
