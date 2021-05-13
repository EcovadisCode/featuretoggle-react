import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import { PROVIDERS, SELECTED_PROVIDER } from 'containers/FeatureToggle/consts';
import { ClientProvider } from 'components/FeatureToggle/ClientProvider';

import * as actions from './actions';

const provider = ClientProvider(PROVIDERS[SELECTED_PROVIDER]);

export const fetchFeatureToggleEpic = (action$, store, deps) =>
  action$.pipe(
    ofType(actions.CLEAR_FEATURE_TOGGLE),
    switchMap(() => of(
      actions.startFetchingFeatureToggle(),
    )
      .pipe(
        switchMap(() => {
          provider.init(actions.updateFeatureToggle);

          return empty();
        }),
      ),
    ),
  );

export const featureToggleEpic = combineEpics(fetchFeatureToggleEpic);
