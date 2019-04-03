"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cartActions = require("../actions/action-types/cart-actions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = {
  items: [],
  addedItems: [],
  total: 0
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  //INSIDE HOME COMPONENT
  if (action.type === _cartActions.ADD_TO_CART) {
    var addedItem = state.items.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems

    var existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread({}, state, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      var newTotal = state.total + addedItem.price;
      return _objectSpread({}, state, {
        addedItems: [].concat(_toConsumableArray(state.addedItems), [addedItem]),
        total: newTotal
      });
    }
  }

  if (action.type === _cartActions.REMOVE_ITEM) {
    var itemToRemove = state.addedItems.find(function (item) {
      return action.id === item.id;
    });
    var new_items = state.addedItems.filter(function (item) {
      return action.id !== item.id;
    }); //calculating the total

    var _newTotal = state.total - itemToRemove.price * itemToRemove.quantity;

    console.log(itemToRemove);
    return _objectSpread({}, state, {
      addedItems: new_items,
      total: _newTotal
    });
  } //INSIDE CART COMPONENT


  if (action.type === _cartActions.ADD_QUANTITY) {
    var _addedItem = state.items.find(function (item) {
      return item.id === action.id;
    });

    _addedItem.quantity += 1;

    var _newTotal2 = state.total + _addedItem.price;

    return _objectSpread({}, state, {
      total: _newTotal2
    });
  }

  if (action.type === _cartActions.SUB_QUANTITY) {
    var _addedItem2 = state.items.find(function (item) {
      return item.id === action.id;
    }); //if the qt == 0 then it should be removed


    if (_addedItem2.quantity === 1) {
      var _new_items = state.addedItems.filter(function (item) {
        return item.id !== action.id;
      });

      var _newTotal3 = state.total - _addedItem2.price;

      return _objectSpread({}, state, {
        addedItems: _new_items,
        total: _newTotal3
      });
    } else {
      _addedItem2.quantity -= 1;

      var _newTotal4 = state.total - _addedItem2.price;

      return _objectSpread({}, state, {
        total: _newTotal4
      });
    }
  }

  if (action.type === _cartActions.ADD_SHIPPING) {
    return _objectSpread({}, state, {
      total: state.total + 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread({}, state, {
      total: state.total - 6
    });
  }

  return state;
};

var _default = cartReducer;
exports["default"] = _default;