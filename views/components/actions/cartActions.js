"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addQuantity = exports.subtractQuantity = exports.removeItem = exports.addToCart = void 0;

var _cartActions = require("./action-types/cart-actions");

//add cart action
var addToCart = function addToCart(id) {
  return {
    type: _cartActions.ADD_TO_CART,
    id: id
  };
}; //remove item action


exports.addToCart = addToCart;

var removeItem = function removeItem(id) {
  return {
    type: _cartActions.REMOVE_ITEM,
    id: id
  };
}; //subtract qt action


exports.removeItem = removeItem;

var subtractQuantity = function subtractQuantity(id) {
  return {
    type: _cartActions.SUB_QUANTITY,
    id: id
  };
}; //add qt action


exports.subtractQuantity = subtractQuantity;

var addQuantity = function addQuantity(id) {
  return {
    type: _cartActions.ADD_QUANTITY,
    id: id
  };
};

exports.addQuantity = addQuantity;