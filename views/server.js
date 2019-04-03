"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _configureStore = _interopRequireDefault(require("./redux/configureStore"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import './index.css'
module.exports = function render(initialState) {
  // Model the initial state
  var store = (0, _configureStore["default"])(initialState);
  var content = (0, _server.renderToString)(_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, _react["default"].createElement(_App["default"], null)));
  var preloadedState = store.getState();
  return {
    content: content,
    preloadedState: preloadedState
  };
};