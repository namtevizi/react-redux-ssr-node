"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _cartActions = require("./actions/cartActions");

var _Recipe = _interopRequireDefault(require("./Recipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Cart =
/*#__PURE__*/
function (_Component) {
  _inherits(Cart, _Component);

  function Cart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleRemove", function (id) {
      _this.props.removeItem(id);
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddQuantity", function (id) {
      _this.props.addQuantity(id);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubtractQuantity", function (id) {
      _this.props.subtractQuantity(id);
    });

    return _this;
  }

  _createClass(Cart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var addedItems = this.props.items.length ? this.props.items.map(function (item) {
        return _react["default"].createElement("li", {
          className: "collection-item avatar",
          key: item.id
        }, _react["default"].createElement("div", {
          className: "item-img"
        }, _react["default"].createElement("img", {
          src: item.img.src,
          alt: item.img.alt,
          className: ""
        })), _react["default"].createElement("div", {
          className: "item-desc"
        }, _react["default"].createElement("span", {
          className: "title"
        }, item.title), _react["default"].createElement("p", null, item.desc), _react["default"].createElement("p", null, _react["default"].createElement("b", null, "Price: ", item.price, "$")), _react["default"].createElement("p", null, _react["default"].createElement("b", null, "Quantity: ", item.quantity)), _react["default"].createElement("div", {
          className: "add-remove"
        }, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/cart"
        }, _react["default"].createElement("i", {
          className: "material-icons",
          onClick: function onClick() {
            _this2.handleAddQuantity(item.id);
          }
        }, "arrow_drop_up")), _react["default"].createElement(_reactRouterDom.Link, {
          to: "/cart"
        }, _react["default"].createElement("i", {
          className: "material-icons",
          onClick: function onClick() {
            _this2.handleSubtractQuantity(item.id);
          }
        }, "arrow_drop_down"))), _react["default"].createElement("button", {
          className: "waves-effect waves-light btn pink remove",
          onClick: function onClick() {
            _this2.handleRemove(item.id);
          }
        }, "Remove")));
      }) : _react["default"].createElement("p", null, "Nothing.");
      return _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "cart"
      }, _react["default"].createElement("h5", null, "You have ordered:"), _react["default"].createElement("ul", {
        className: "collection"
      }, addedItems)), _react["default"].createElement(_Recipe["default"], null));
    }
  }]);

  return Cart;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    items: state.addedItems //addedItems: state.addedItems

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeItem: function removeItem(id) {
      dispatch((0, _cartActions.removeItem)(id));
    },
    addQuantity: function addQuantity(id) {
      dispatch((0, _cartActions.addQuantity)(id));
    },
    subtractQuantity: function subtractQuantity(id) {
      dispatch((0, _cartActions.subtractQuantity)(id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

exports["default"] = _default;