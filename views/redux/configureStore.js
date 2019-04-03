"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configureStore;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _cartReducer = _interopRequireDefault(require("../components/reducers/cartReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function configureStore(preloadedState) {
  return (0, _redux.createStore)(_cartReducer["default"], preloadedState, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
}