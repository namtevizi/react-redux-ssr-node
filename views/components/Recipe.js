"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

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

//import { addShipping } from './actions/cartActions'
var Recipe =
/*#__PURE__*/
function (_Component) {
  _inherits(Recipe, _Component);

  function Recipe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Recipe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Recipe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChecked", function (e) {
      if (e.target.checked) {
        _this.props.addShipping();
      } else {
        _this.props.substractShipping();
      }
    });

    return _this;
  }

  _createClass(Recipe, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.refs.shipping.checked) this.props.substractShipping();
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "collection"
      }, _react["default"].createElement("li", {
        className: "collection-item"
      }, _react["default"].createElement("label", null, _react["default"].createElement("input", {
        type: "checkbox",
        ref: "shipping",
        onChange: this.handleChecked
      }), _react["default"].createElement("span", null, "Shipping(+6$)"))), _react["default"].createElement("li", {
        className: "collection-item"
      }, _react["default"].createElement("b", null, "Total: ", this.props.total, " $"))), _react["default"].createElement("div", {
        className: "checkout"
      }, _react["default"].createElement("button", {
        className: "waves-effect waves-light btn"
      }, "Checkout")));
    }
  }]);

  return Recipe;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addShipping: function addShipping() {
      dispatch({
        type: 'ADD_SHIPPING'
      });
    },
    substractShipping: function substractShipping() {
      dispatch({
        type: 'SUB_SHIPPING'
      });
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Recipe);

exports["default"] = _default;