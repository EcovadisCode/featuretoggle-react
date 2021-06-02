# featuretoggle-react

This module is meant to simplify the usage of Feature Toggles in React, as described in these medium articles:

https://medium.com/ecovadis-engineering/using-feature-toggle-in-a-react-application-part-1-ee34a0e72cf4

https://medium.com/ecovadis-engineering/using-feature-toggle-in-a-react-application-part-2-4e09b46d7ad1

## Installation

Install the module using:

`npm install featuretoggle-react`

or:

`yarn add featuretoggle-react`

## Usage

import the required dependencies:

```
import {
  FeatureToggleWrapper,
  flagsmithClient, // or
  optimizelyClient, // alternatively
  FeatureToggle,
  On,
  Off,
 } from "featuretoggle-react";
```

Initialize one of the Clients provided: `flagsmithClient` or `optimizelyClient`:

```
const provider = flagsmithClient({
  environmentID: "xxxxxxxxxxxxxxxxxxxxx"
});
```

or:

```
const provider = optimizelyClient({
  audience: 'xxxxxxxxxxxx',
  sdkKey: 'xxxxxxxxxxxxxxx',
});
```
Use the FeatureToggle:

```
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
