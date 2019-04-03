"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Navbar = function Navbar() {
  return _react["default"].createElement("nav", {
    className: "nav-wrapper"
  }, _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/",
    className: "brand-logo"
  }, "Shopping"), _react["default"].createElement("ul", {
    className: "right"
  }, _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/"
  }, "Shop")), _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/cart"
  }, "My cart")), _react["default"].createElement("li", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/cart"
  }, _react["default"].createElement("i", {
    className: "material-icons"
  }, "shopping_cart"))))));
};

var _default = Navbar;
exports["default"] = _default;