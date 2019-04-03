/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/data.json":
/*!**************************!*\
  !*** ./assets/data.json ***!
  \**************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

eval("module.exports = [{\"id\":1,\"title\":\"Winter body\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.\",\"price\":110,\"img\":{\"src\":\"media/item1.jpg\",\"alt\":\"pandora icon\"}},{\"id\":2,\"title\":\"Adidas\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.\",\"price\":80,\"img\":{\"src\":\"media/item2.jpg\",\"alt\":\"pandora icon\"}},{\"id\":3,\"title\":\"Vans\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.\",\"price\":120,\"img\":{\"src\":\"media/item3.jpg\",\"alt\":\"pandora icon\"}},{\"id\":4,\"title\":\"White\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.\",\"price\":260,\"img\":{\"src\":\"media/item4.jpg\",\"alt\":\"pandora icon\"}},{\"id\":5,\"title\":\"Cropped-sho\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.\",\"price\":160,\"img\":{\"src\":\"media/item5.jpg\",\"alt\":\"pandora icon\"}},{\"id\":6,\"title\":\"Blues\",\"desc\":\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.\",\"price\":90,\"img\":{\"src\":\"media/item6.jpg\",\"alt\":\"pandora icon\"}}];\n\n//# sourceURL=webpack:///./assets/data.json?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/template */ \"./src/template.js\");\n/* harmony import */ var _src_template__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_template__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()(); // Serving static files\n//app.use('/assets', express.static(path.join(__dirname, '../assets')));\n//app.use('/media', express.static(path.join(__dirname, '../media')));\n\nvar STATIC_OPTIONS = {\n  maxAge: 31536000000 // One year\n\n};\napp.use('/assets', express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"]('assets', STATIC_OPTIONS));\napp.use('/media', express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"]('media', STATIC_OPTIONS)); // hide powered by express\n\napp.disable('x-powered-by'); // start the server\n\napp.listen(process.env.PORT || 3000); // our apps data model\n\nvar data = __webpack_require__(/*! ../assets/data.json */ \"./assets/data.json\");\n\nvar initialState = {\n  isFetching: false,\n  items: data //SSR function import\n\n};\n\nvar ssr = __webpack_require__(/*! ../views/server */ \"./views/server.js\");\n\nvar serverRenderer = function serverRenderer(req, res, next) {\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./assets/index.html'), 'utf8', function (err, html) {\n    if (err) {\n      console.error(err);\n      return res.status(500).send('An error occurred');\n    }\n\n    var _ssr = ssr(initialState),\n        preloadedState = _ssr.preloadedState,\n        content = _ssr.content;\n\n    res.setHeader('Cache-Control', 'assets, max-age=604800');\n    return res.send(html.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(content, \"</div>\")));\n  });\n};\n\napp.get('/', serverRenderer); // server rendered home page\n\n/*app.get('/', (req, res) => {\n  const { preloadedState, content } = ssr(initialState)\n  const response = template(\"Server Rendered Page\", preloadedState, content)\n  res.setHeader('Cache-Control', 'assets, max-age=604800')\n  res.send(response);\n});*/\n// Pure client side rendered page\n\napp.get('/client', function (req, res) {\n  var response = _src_template__WEBPACK_IMPORTED_MODULE_6___default()('Client Side Rendered page');\n  res.setHeader('Cache-Control', 'assets, max-age=604800');\n  res.send(response);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function template(title) {\n  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"\";\n  var scripts = '';\n\n  if (content) {\n    scripts = \" <script>\\n                   window.__STATE__ = \".concat(JSON.stringify(initialState), \"\\n                </script>\\n                <script src=\\\"assets/client.js\\\"></script> \\n                \");\n  } else {\n    scripts = \" <script src=\\\"assets/bundle.js\\\"> </script> \";\n  }\n\n  var page = \"<!DOCTYPE html>\\n              <html lang=\\\"en\\\">\\n              <head>\\n                <meta charset=\\\"utf-8\\\">\\n                <title> \".concat(title, \" </title>\\n                <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\\\">\\n                <!--Materialize Icons-->\\n                <link href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\" rel=\\\"stylesheet\\\">\\n                \\n              </head>\\n              <body>\\n                <div class=\\\"content\\\">\\n                   <div id=\\\"app\\\" class=\\\"wrap-inner\\\">\\n                      <!--- magic happens here -->  \").concat(content, \"\\n                   </div>\\n                </div>\\n                  \").concat(scripts, \"\\n                  <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\\\"></script>\\n              </body>\\n              </html>\\n              \");\n  return page;\n}\n\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/template.js?");

/***/ }),

/***/ "./views/App.js":
/*!**********************!*\
  !*** ./views/App.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Navbar = _interopRequireDefault(__webpack_require__(/*! ./components/Navbar */ \"./views/components/Navbar.js\"));\n\nvar _Home = _interopRequireDefault(__webpack_require__(/*! ./components/Home */ \"./views/components/Home.js\"));\n\nvar _Cart = _interopRequireDefault(__webpack_require__(/*! ./components/Cart */ \"./views/components/Cart.js\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};\n\n          if (desc.get || desc.set) {\n            Object.defineProperty(newObj, key, desc);\n          } else {\n            newObj[key] = obj[key];\n          }\n        }\n      }\n    }\n\n    newObj[\"default\"] = obj;\n    return newObj;\n  }\n}\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return _react[\"default\"].createElement(_reactRouterDom.StaticRouter, null, _react[\"default\"].createElement(\"div\", {\n        className: \"App\"\n      }, _react[\"default\"].createElement(_Navbar[\"default\"], null), _react[\"default\"].createElement(_reactRouterDom.Switch, null, _react[\"default\"].createElement(_reactRouterDom.Route, {\n        exact: true,\n        path: \"/\",\n        component: _Home[\"default\"]\n      }), _react[\"default\"].createElement(_reactRouterDom.Route, {\n        path: \"/cart\",\n        component: _Cart[\"default\"]\n      }))));\n    }\n  }]);\n\n  return App;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  var isFetching = state.isFetching,\n      items = state.items;\n  return {\n    isFetching: isFetching,\n    items: items\n  };\n}\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(App);\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./views/App.js?");

/***/ }),

/***/ "./views/components/Cart.js":
/*!**********************************!*\
  !*** ./views/components/Cart.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _cartActions = __webpack_require__(/*! ./actions/cartActions */ \"./views/components/actions/cartActions.js\");\n\nvar _Recipe = _interopRequireDefault(__webpack_require__(/*! ./Recipe */ \"./views/components/Recipe.js\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};\n\n          if (desc.get || desc.set) {\n            Object.defineProperty(newObj, key, desc);\n          } else {\n            newObj[key] = obj[key];\n          }\n        }\n      }\n    }\n\n    newObj[\"default\"] = obj;\n    return newObj;\n  }\n}\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nvar Cart =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Cart, _Component);\n\n  function Cart() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Cart);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Cart)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleRemove\", function (id) {\n      _this.props.removeItem(id);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleAddQuantity\", function (id) {\n      _this.props.addQuantity(id);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubtractQuantity\", function (id) {\n      _this.props.subtractQuantity(id);\n    });\n\n    return _this;\n  }\n\n  _createClass(Cart, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var addedItems = this.props.items.length ? this.props.items.map(function (item) {\n        return _react[\"default\"].createElement(\"li\", {\n          className: \"collection-item avatar\",\n          key: item.id\n        }, _react[\"default\"].createElement(\"div\", {\n          className: \"item-img\"\n        }, _react[\"default\"].createElement(\"img\", {\n          src: item.img.src,\n          alt: item.img.alt,\n          className: \"\"\n        })), _react[\"default\"].createElement(\"div\", {\n          className: \"item-desc\"\n        }, _react[\"default\"].createElement(\"span\", {\n          className: \"title\"\n        }, item.title), _react[\"default\"].createElement(\"p\", null, item.desc), _react[\"default\"].createElement(\"p\", null, _react[\"default\"].createElement(\"b\", null, \"Price: \", item.price, \"$\")), _react[\"default\"].createElement(\"p\", null, _react[\"default\"].createElement(\"b\", null, \"Quantity: \", item.quantity)), _react[\"default\"].createElement(\"div\", {\n          className: \"add-remove\"\n        }, _react[\"default\"].createElement(_reactRouterDom.Link, {\n          to: \"/cart\"\n        }, _react[\"default\"].createElement(\"i\", {\n          className: \"material-icons\",\n          onClick: function onClick() {\n            _this2.handleAddQuantity(item.id);\n          }\n        }, \"arrow_drop_up\")), _react[\"default\"].createElement(_reactRouterDom.Link, {\n          to: \"/cart\"\n        }, _react[\"default\"].createElement(\"i\", {\n          className: \"material-icons\",\n          onClick: function onClick() {\n            _this2.handleSubtractQuantity(item.id);\n          }\n        }, \"arrow_drop_down\"))), _react[\"default\"].createElement(\"button\", {\n          className: \"waves-effect waves-light btn pink remove\",\n          onClick: function onClick() {\n            _this2.handleRemove(item.id);\n          }\n        }, \"Remove\")));\n      }) : _react[\"default\"].createElement(\"p\", null, \"Nothing.\");\n      return _react[\"default\"].createElement(\"div\", {\n        className: \"container\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"cart\"\n      }, _react[\"default\"].createElement(\"h5\", null, \"You have ordered:\"), _react[\"default\"].createElement(\"ul\", {\n        className: \"collection\"\n      }, addedItems)), _react[\"default\"].createElement(_Recipe[\"default\"], null));\n    }\n  }]);\n\n  return Cart;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    items: state.addedItems //addedItems: state.addedItems\n\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    removeItem: function removeItem(id) {\n      dispatch((0, _cartActions.removeItem)(id));\n    },\n    addQuantity: function addQuantity(id) {\n      dispatch((0, _cartActions.addQuantity)(id));\n    },\n    subtractQuantity: function subtractQuantity(id) {\n      dispatch((0, _cartActions.subtractQuantity)(id));\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./views/components/Cart.js?");

/***/ }),

/***/ "./views/components/Home.js":
/*!**********************************!*\
  !*** ./views/components/Home.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _cartActions = __webpack_require__(/*! ./actions/cartActions */ \"./views/components/actions/cartActions.js\");\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};\n\n          if (desc.get || desc.set) {\n            Object.defineProperty(newObj, key, desc);\n          } else {\n            newObj[key] = obj[key];\n          }\n        }\n      }\n    }\n\n    newObj[\"default\"] = obj;\n    return newObj;\n  }\n}\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleClick\", function (id) {\n      _this.props.addToCart(id);\n    });\n\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var itemList = this.props.items.map(function (item) {\n        return _react[\"default\"].createElement(\"div\", {\n          className: \"card\",\n          key: item.id\n        }, _react[\"default\"].createElement(\"div\", {\n          className: \"card-image\"\n        }, _react[\"default\"].createElement(\"img\", {\n          src: item.img.src,\n          alt: item.title\n        }), _react[\"default\"].createElement(\"span\", {\n          className: \"card-title\"\n        }, item.title), _react[\"default\"].createElement(\"span\", {\n          to: \"/\",\n          className: \"btn-floating halfway-fab waves-effect waves-light red\",\n          onClick: function onClick() {\n            _this2.handleClick(item.id);\n          }\n        }, _react[\"default\"].createElement(\"i\", {\n          className: \"material-icons\"\n        }, \"add\"))), _react[\"default\"].createElement(\"div\", {\n          className: \"card-content\"\n        }, _react[\"default\"].createElement(\"p\", null, item.desc), _react[\"default\"].createElement(\"p\", null, _react[\"default\"].createElement(\"b\", null, \"Price: \", item.price, \"$\"))));\n      });\n      return _react[\"default\"].createElement(\"div\", {\n        className: \"container\"\n      }, _react[\"default\"].createElement(\"h3\", {\n        className: \"center\"\n      }, \"Our items\"), _react[\"default\"].createElement(\"div\", {\n        className: \"box\"\n      }, itemList));\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    items: state.items\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addToCart: function addToCart(id) {\n      dispatch((0, _cartActions.addToCart)(id));\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./views/components/Home.js?");

/***/ }),

/***/ "./views/components/Navbar.js":
/*!************************************!*\
  !*** ./views/components/Navbar.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nvar Navbar = function Navbar() {\n  return _react[\"default\"].createElement(\"nav\", {\n    className: \"nav-wrapper\"\n  }, _react[\"default\"].createElement(\"div\", {\n    className: \"container\"\n  }, _react[\"default\"].createElement(_reactRouterDom.Link, {\n    to: \"/\",\n    className: \"brand-logo\"\n  }, \"Shopping\"), _react[\"default\"].createElement(\"ul\", {\n    className: \"right\"\n  }, _react[\"default\"].createElement(\"li\", null, _react[\"default\"].createElement(_reactRouterDom.Link, {\n    to: \"/\"\n  }, \"Shop\")), _react[\"default\"].createElement(\"li\", null, _react[\"default\"].createElement(_reactRouterDom.Link, {\n    to: \"/cart\"\n  }, \"My cart\")), _react[\"default\"].createElement(\"li\", null, _react[\"default\"].createElement(_reactRouterDom.Link, {\n    to: \"/cart\"\n  }, _react[\"default\"].createElement(\"i\", {\n    className: \"material-icons\"\n  }, \"shopping_cart\"))))));\n};\n\nvar _default = Navbar;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./views/components/Navbar.js?");

/***/ }),

/***/ "./views/components/Recipe.js":
/*!************************************!*\
  !*** ./views/components/Recipe.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};\n\n          if (desc.get || desc.set) {\n            Object.defineProperty(newObj, key, desc);\n          } else {\n            newObj[key] = obj[key];\n          }\n        }\n      }\n    }\n\n    newObj[\"default\"] = obj;\n    return newObj;\n  }\n}\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n} //import { addShipping } from './actions/cartActions'\n\n\nvar Recipe =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Recipe, _Component);\n\n  function Recipe() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Recipe);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Recipe)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleChecked\", function (e) {\n      if (e.target.checked) {\n        _this.props.addShipping();\n      } else {\n        _this.props.substractShipping();\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(Recipe, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      if (this.refs.shipping.checked) this.props.substractShipping();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react[\"default\"].createElement(\"div\", {\n        className: \"container\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"collection\"\n      }, _react[\"default\"].createElement(\"li\", {\n        className: \"collection-item\"\n      }, _react[\"default\"].createElement(\"label\", null, _react[\"default\"].createElement(\"input\", {\n        type: \"checkbox\",\n        ref: \"shipping\",\n        onChange: this.handleChecked\n      }), _react[\"default\"].createElement(\"span\", null, \"Shipping(+6$)\"))), _react[\"default\"].createElement(\"li\", {\n        className: \"collection-item\"\n      }, _react[\"default\"].createElement(\"b\", null, \"Total: \", this.props.total, \" $\"))), _react[\"default\"].createElement(\"div\", {\n        className: \"checkout\"\n      }, _react[\"default\"].createElement(\"button\", {\n        className: \"waves-effect waves-light btn\"\n      }, \"Checkout\")));\n    }\n  }]);\n\n  return Recipe;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    addedItems: state.addedItems,\n    total: state.total\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addShipping: function addShipping() {\n      dispatch({\n        type: 'ADD_SHIPPING'\n      });\n    },\n    substractShipping: function substractShipping() {\n      dispatch({\n        type: 'SUB_SHIPPING'\n      });\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Recipe);\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./views/components/Recipe.js?");

/***/ }),

/***/ "./views/components/actions/action-types/cart-actions.js":
/*!***************************************************************!*\
  !*** ./views/components/actions/action-types/cart-actions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ADD_SHIPPING = exports.ADD_QUANTITY = exports.SUB_QUANTITY = exports.REMOVE_ITEM = exports.ADD_TO_CART = void 0; //Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled\n\nvar ADD_TO_CART = 'ADD_TO_CART';\nexports.ADD_TO_CART = ADD_TO_CART;\nvar REMOVE_ITEM = 'REMOVE_ITEM';\nexports.REMOVE_ITEM = REMOVE_ITEM;\nvar SUB_QUANTITY = 'SUB_QUANTITY';\nexports.SUB_QUANTITY = SUB_QUANTITY;\nvar ADD_QUANTITY = 'ADD_QUANTITY';\nexports.ADD_QUANTITY = ADD_QUANTITY;\nvar ADD_SHIPPING = 'ADD_SHIPPING';\nexports.ADD_SHIPPING = ADD_SHIPPING;\n\n//# sourceURL=webpack:///./views/components/actions/action-types/cart-actions.js?");

/***/ }),

/***/ "./views/components/actions/cartActions.js":
/*!*************************************************!*\
  !*** ./views/components/actions/cartActions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addQuantity = exports.subtractQuantity = exports.removeItem = exports.addToCart = void 0;\n\nvar _cartActions = __webpack_require__(/*! ./action-types/cart-actions */ \"./views/components/actions/action-types/cart-actions.js\"); //add cart action\n\n\nvar addToCart = function addToCart(id) {\n  return {\n    type: _cartActions.ADD_TO_CART,\n    id: id\n  };\n}; //remove item action\n\n\nexports.addToCart = addToCart;\n\nvar removeItem = function removeItem(id) {\n  return {\n    type: _cartActions.REMOVE_ITEM,\n    id: id\n  };\n}; //subtract qt action\n\n\nexports.removeItem = removeItem;\n\nvar subtractQuantity = function subtractQuantity(id) {\n  return {\n    type: _cartActions.SUB_QUANTITY,\n    id: id\n  };\n}; //add qt action\n\n\nexports.subtractQuantity = subtractQuantity;\n\nvar addQuantity = function addQuantity(id) {\n  return {\n    type: _cartActions.ADD_QUANTITY,\n    id: id\n  };\n};\n\nexports.addQuantity = addQuantity;\n\n//# sourceURL=webpack:///./views/components/actions/cartActions.js?");

/***/ }),

/***/ "./views/components/reducers/cartReducer.js":
/*!**************************************************!*\
  !*** ./views/components/reducers/cartReducer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _cartActions = __webpack_require__(/*! ../actions/action-types/cart-actions */ \"./views/components/actions/action-types/cart-actions.js\");\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nfunction _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nvar initState = {\n  items: [],\n  addedItems: [],\n  total: 0\n};\n\nvar cartReducer = function cartReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n  var action = arguments.length > 1 ? arguments[1] : undefined; //INSIDE HOME COMPONENT\n\n  if (action.type === _cartActions.ADD_TO_CART) {\n    var addedItem = state.items.find(function (item) {\n      return item.id === action.id;\n    }); //check if the action id exists in the addedItems\n\n    var existed_item = state.addedItems.find(function (item) {\n      return action.id === item.id;\n    });\n\n    if (existed_item) {\n      addedItem.quantity += 1;\n      return _objectSpread({}, state, {\n        total: state.total + addedItem.price\n      });\n    } else {\n      addedItem.quantity = 1; //calculating the total\n\n      var newTotal = state.total + addedItem.price;\n      return _objectSpread({}, state, {\n        addedItems: [].concat(_toConsumableArray(state.addedItems), [addedItem]),\n        total: newTotal\n      });\n    }\n  }\n\n  if (action.type === _cartActions.REMOVE_ITEM) {\n    var itemToRemove = state.addedItems.find(function (item) {\n      return action.id === item.id;\n    });\n    var new_items = state.addedItems.filter(function (item) {\n      return action.id !== item.id;\n    }); //calculating the total\n\n    var _newTotal = state.total - itemToRemove.price * itemToRemove.quantity;\n\n    console.log(itemToRemove);\n    return _objectSpread({}, state, {\n      addedItems: new_items,\n      total: _newTotal\n    });\n  } //INSIDE CART COMPONENT\n\n\n  if (action.type === _cartActions.ADD_QUANTITY) {\n    var _addedItem = state.items.find(function (item) {\n      return item.id === action.id;\n    });\n\n    _addedItem.quantity += 1;\n\n    var _newTotal2 = state.total + _addedItem.price;\n\n    return _objectSpread({}, state, {\n      total: _newTotal2\n    });\n  }\n\n  if (action.type === _cartActions.SUB_QUANTITY) {\n    var _addedItem2 = state.items.find(function (item) {\n      return item.id === action.id;\n    }); //if the qt == 0 then it should be removed\n\n\n    if (_addedItem2.quantity === 1) {\n      var _new_items = state.addedItems.filter(function (item) {\n        return item.id !== action.id;\n      });\n\n      var _newTotal3 = state.total - _addedItem2.price;\n\n      return _objectSpread({}, state, {\n        addedItems: _new_items,\n        total: _newTotal3\n      });\n    } else {\n      _addedItem2.quantity -= 1;\n\n      var _newTotal4 = state.total - _addedItem2.price;\n\n      return _objectSpread({}, state, {\n        total: _newTotal4\n      });\n    }\n  }\n\n  if (action.type === _cartActions.ADD_SHIPPING) {\n    return _objectSpread({}, state, {\n      total: state.total + 6\n    });\n  }\n\n  if (action.type === 'SUB_SHIPPING') {\n    return _objectSpread({}, state, {\n      total: state.total - 6\n    });\n  }\n\n  return state;\n};\n\nvar _default = cartReducer;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./views/components/reducers/cartReducer.js?");

/***/ }),

/***/ "./views/redux/configureStore.js":
/*!***************************************!*\
  !*** ./views/redux/configureStore.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\n\nvar _cartReducer = _interopRequireDefault(__webpack_require__(/*! ../components/reducers/cartReducer */ \"./views/components/reducers/cartReducer.js\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nfunction configureStore(preloadedState) {\n  return (0, _redux.createStore)(_cartReducer[\"default\"], preloadedState, (0, _redux.applyMiddleware)(_reduxThunk[\"default\"]));\n}\n\n//# sourceURL=webpack:///./views/redux/configureStore.js?");

/***/ }),

/***/ "./views/server.js":
/*!*************************!*\
  !*** ./views/server.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _configureStore = _interopRequireDefault(__webpack_require__(/*! ./redux/configureStore */ \"./views/redux/configureStore.js\"));\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ \"./views/App.js\"));\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n} //import './index.css'\n\n\nmodule.exports = function render(initialState) {\n  // Model the initial state\n  var store = (0, _configureStore[\"default\"])(initialState);\n  var content = (0, _server.renderToString)(_react[\"default\"].createElement(_reactRedux.Provider, {\n    store: store\n  }, _react[\"default\"].createElement(_App[\"default\"], null)));\n  var preloadedState = store.getState();\n  return {\n    content: content,\n    preloadedState: preloadedState\n  };\n};\n\n//# sourceURL=webpack:///./views/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });