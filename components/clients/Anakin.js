import { GET_FEATURE_TOGGLE } from 'consts/endpoints';
import { injectMock } from 'utils/ajax';

export const processData = (toggles) => {
  const featureToggle = {};

  if (Array.isArray(toggles)) {
    toggles.forEach((toggle) => {
      featureToggle[toggle.name] = toggle.isEnabled;
    });
  }

  return featureToggle;
};

const init = (handleChange) => {
  const request = {
    method: 'GET',
    url: GET_FEATURE_TOGGLE,
  };

  const requestObservable = injectMock(request);

  requestObservable
    .toPromise()
    .then(
      ({ response }) => handleChange(processData(response)),
      error => console.error(error), // eslint-disable-line
    );
};

export const Anakin = { init };
