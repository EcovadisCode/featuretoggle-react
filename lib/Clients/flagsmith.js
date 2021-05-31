"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flagsmithClient = void 0;

var _flagsmith = _interopRequireDefault(require("flagsmith"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var flagsmithClientClass = /*#__PURE__*/function () {
  function flagsmithClientClass(_ref) {
    var environmentID = _ref.environmentID;

    _classCallCheck(this, flagsmithClientClass);

    this.fetching = false;
    this.environmentID = environmentID;
    this.init = this.init.bind(this);
  }

  _createClass(flagsmithClientClass, [{
    key: "init",
    value: function init(handler) {
      var _this = this;

      !this.fetching && _flagsmith["default"].init({
        environmentID: this.environmentID,
        onChange: function onChange() {
          var state = _flagsmith["default"].getState();

          handler(_this.transform(state));
        }
      });
      this.fetching = true;
    }
  }, {
    key: "transform",
    value: function transform(state) {
      var flags = state.flags;
      var featureFlags = {};
      Object.keys(flags).forEach(function (flag) {
        return featureFlags[flag] = flags[flag].enabled;
      });
      return featureFlags;
    }
  }]);

  return flagsmithClientClass;
}();

var flagsmithClient = function flagsmithClient(_ref2) {
  var environmentID = _ref2.environmentID;
  return new flagsmithClientClass({
    environmentID: environmentID
  });
};

exports.flagsmithClient = flagsmithClient;