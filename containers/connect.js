import { connect } from 'react-redux';
import { FeatureToggle as FeatureToggleView } from 'components/FeatureToggle';
import {
  startFetchingFeatureToggle,
  updateFeatureToggle,
} from './actions';
import {
  getFeatureToggle,
  getIsLoaded,
  getIsLoading,
} from './selectors';

const mapStateToProps = (state, props) => ({
  featureToggle: getFeatureToggle(state),
  isLoaded: getIsLoaded(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  startFetchingFeatureToggle: feature => dispatch(startFetchingFeatureToggle(feature)),
  updateFeatureToggle: toggles => dispatch(updateFeatureToggle(toggles)),
});

export const FeatureToggle = connect(mapStateToProps, mapDispatchToProps)(FeatureToggleView);
