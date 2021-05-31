"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureToggle = exports.FeatureToggleWrapper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _actions = require("./actions");

var _reducer = require("./reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FeatureToggleContext = /*#__PURE__*/(0, _react.createContext)();

var FeatureToggleWrapper = function FeatureToggleWrapper(_ref) {
  var children = _ref.children,
      provider = _ref.provider;

  var _useReducer = (0, _react.useReducer)(_reducer.featureToggleReducer, _reducer.initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var updateHandler = function updateHandler(featureToggle) {
    return dispatch((0, _actions.updateFeatureToggle)(featureToggle));
  };

  return /*#__PURE__*/_react["default"].createElement(FeatureToggleContext.Provider, {
    value: {
      state: state,
      provider: provider,
      updateHandler: updateHandler
    }
  }, children);
};

exports.FeatureToggleWrapper = FeatureToggleWrapper;
FeatureToggleWrapper.propTypes = {
  children: _propTypes["default"].node,
  provider: _propTypes["default"].shape({
    init: _propTypes["default"].func
  }).isRequired
};
FeatureToggleWrapper.defaultProps = {
  children: null
};

var FeatureToggle = function FeatureToggle(_ref2) {
  var children = _ref2.children,
      feature = _ref2.feature;

  var _useContext = (0, _react.useContext)(FeatureToggleContext),
      state = _useContext.state,
      provider = _useContext.provider,
      updateHandler = _useContext.updateHandler;

  (0, _react.useEffect)(function () {
    provider.init(updateHandler);
  }, []);

  if (!feature) {
    return null;
  }

  var featureToggleEnabled = state.features[feature];

  var toggledChildren = _react["default"].Children.map(children, function (child) {
    return /*#__PURE__*/_react["default"].cloneElement(child, {
      featureToggleEnabled: featureToggleEnabled
    });
  });

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, toggledChildren);
};

exports.FeatureToggle = FeatureToggle;
FeatureToggle.propTypes = {
  children: _propTypes["default"].node,
  feature: _propTypes["default"].string
};
FeatureToggle.defaultProps = {
  children: null,
  feature: null
};