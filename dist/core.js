/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Settings */ "./src/pages/Settings.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var App = function App() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
    position: "bottom-right",
    autoClose: 2500,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "boostimer-app text-gray-700 m-auto max-w-full xl:max-w-7xl mt-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-12 gap-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pages_Settings__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }))))));
};

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/App.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var base = 'boostimer';
var version = 'v1';
var BoostApi = {
  get: function get(endpoint) {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: "/".concat(base, "/").concat(version, "/").concat(endpoint),
      method: 'GET'
    });
  },
  put: function put(endpoint, data) {
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: "/".concat(base, "/").concat(version, "/").concat(endpoint),
      method: 'PUT',
      data: data
    });
  }
};
var _default = BoostApi;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(base, "base", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/api/index.js");
  reactHotLoader.register(version, "version", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/api/index.js");
  reactHotLoader.register(BoostApi, "BoostApi", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/api/index.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/api/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/api/settings.js":
/*!*****************************!*\
  !*** ./src/api/settings.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_SETTINGS": function() { return /* binding */ GET_SETTINGS; },
/* harmony export */   "UPDATE_SETTINGS": function() { return /* binding */ UPDATE_SETTINGS; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/api/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();



var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var endpoint = 'settings';

var GET_SETTINGS = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _index__WEBPACK_IMPORTED_MODULE_2__["default"].get(endpoint);

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GET_SETTINGS() {
    return _ref.apply(this, arguments);
  };
}();

var UPDATE_SETTINGS = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _index__WEBPACK_IMPORTED_MODULE_2__["default"].put(endpoint, data);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function UPDATE_SETTINGS(_x) {
    return _ref2.apply(this, arguments);
  };
}();


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(endpoint, "endpoint", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/api/settings.js");
  reactHotLoader.register(GET_SETTINGS, "GET_SETTINGS", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/api/settings.js");
  reactHotLoader.register(UPDATE_SETTINGS, "UPDATE_SETTINGS", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/api/settings.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/components/Loader.js":
/*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var Loader = function Loader() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_content_loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    viewBox: "0 0 800 400",
    height: '100%',
    width: '100%',
    className: "h-full"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "-8",
    y: "30",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "70",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "90",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "120",
    rx: "3",
    ry: "3",
    width: "424",
    height: "7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "-8",
    y: "170",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "190",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "210",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "230",
    rx: "3",
    ry: "3",
    width: "424",
    height: "7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "-8",
    y: "280",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "300",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "320",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "12",
    y: "340",
    rx: "3",
    ry: "3",
    width: "424",
    height: "7"
  }));
};

var _default = Loader;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loader, "Loader", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Loader.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Loader.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _Utils_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils/Logo */ "./src/components/Utils/Logo.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var Sidebar = function Sidebar() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-6 flex flex-col items-center bg-white rounded-md shadow sticky top-16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Utils_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-10 mb-4 w-full grid grid-rows-1 gap-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
    className: "outline-none text-gray-400 hover:text-gray-800 rounded-md px-6 py-3 flex items-center text-md uppercase tracking-wider focus:ring-0 text-gray-600 bg-gray-100 rounded-md shadow font-semibold",
    to: "/"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ml-6"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings", "boostimer")))));
};

var _default = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sidebar, "Sidebar", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Sidebar.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Sidebar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/components/Utils/InputField.js":
/*!********************************************!*\
  !*** ./src/components/Utils/InputField.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var InputField = function InputField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      tooltip = _ref.tooltip,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col justify-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-md text-gray-400 flex items-center"
  }, label, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-tip": true,
    "data-for": id,
    className: "ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    className: "rounded-md",
    type: "dark",
    effect: "solid",
    delayHide: 100
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mt-2 text-white text-xs"
  }, tooltip)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    onChange: onChange,
    className: "boostimer-input",
    type: "text",
    placeholder: placeholder,
    defaultValue: value
  })));
};

var _default = InputField;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InputField, "InputField", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Utils/InputField.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Utils/InputField.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/components/Utils/Logo.js":
/*!**************************************!*\
  !*** ./src/components/Utils/Logo.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var Logo = function Logo() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "169",
    height: "23",
    fill: "none",
    viewBox: "0 0 169 23"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#1F2937",
    d: "M74.934 16.477c0 1.972-.713 3.52-2.14 4.642-1.425 1.123-3.393 1.684-5.901 1.684s-4.562-.389-6.16-1.168v-3.429c1.012.476 2.084.85 3.217 1.123 1.143.273 2.205.41 3.186.41 1.436 0 2.493-.273 3.17-.82.689-.546 1.032-1.28 1.032-2.2 0-.829-.313-1.532-.94-2.108-.627-.577-1.922-1.26-3.884-2.049-2.023-.819-3.45-1.755-4.279-2.806-.83-1.052-1.244-2.317-1.244-3.793 0-1.851.658-3.308 1.973-4.37C64.278.531 66.044 0 68.258 0c2.124 0 4.239.465 6.342 1.396l-1.153 2.958c-1.972-.83-3.732-1.244-5.28-1.244-1.173 0-2.063.258-2.67.774-.607.506-.91 1.178-.91 2.018 0 .576.121 1.072.364 1.487.243.404.642.789 1.199 1.153.556.364 1.557.844 3.004 1.441 1.628.678 2.822 1.31 3.58 1.897.759.586 1.315 1.249 1.67 1.987.353.738.53 1.608.53 2.61zM86.89 22.5h-3.627V3.429H76.74V.319h16.674v3.11H86.89V22.5zM96.827 22.5V.319h3.626V22.5h-3.626zM115.913 22.5l-6.432-18.525h-.122c.172 2.751.258 5.33.258 7.738V22.5h-3.292V.319h5.113l6.16 17.645h.091L124.03.319h5.129V22.5h-3.49V11.53c0-1.102.025-2.538.076-4.308.061-1.77.111-2.842.152-3.217h-.122l-6.66 18.495h-3.202zM147.547 22.5H135V.319h12.547v3.064h-8.921v6.039h8.36v3.034h-8.36v6.964h8.921v3.08zM155.982 10.636h2.519c1.689 0 2.913-.314 3.672-.941.758-.627 1.138-1.558 1.138-2.792 0-1.254-.41-2.154-1.229-2.7-.82-.547-2.054-.82-3.702-.82h-2.398v7.252zm0 3.004v8.86h-3.626V.319h6.266c2.863 0 4.982.536 6.357 1.608 1.376 1.072 2.064 2.69 2.064 4.855 0 2.761-1.436 4.728-4.309 5.902L169 22.5h-4.127l-5.31-8.86h-3.581zM0 .319h6.585c3.054 0 5.26.445 6.615 1.335 1.365.89 2.048 2.296 2.048 4.218 0 1.294-.334 2.371-1.002 3.231-.667.86-1.628 1.401-2.882 1.624v.151c1.557.294 2.7.875 3.429 1.745.738.86 1.107 2.028 1.107 3.505 0 1.992-.698 3.555-2.094 4.688-1.385 1.123-3.317 1.684-5.795 1.684H0V.319zm3.626 9.163h3.49c1.517 0 2.624-.237 3.322-.713.698-.485 1.047-1.304 1.047-2.457 0-1.042-.38-1.796-1.138-2.261-.748-.465-1.942-.698-3.58-.698h-3.14v6.13zm0 2.944v7.024H7.48c1.517 0 2.66-.288 3.429-.864.778-.587 1.168-1.508 1.168-2.762 0-1.153-.395-2.007-1.184-2.564-.789-.556-1.987-.834-3.595-.834H3.626z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#E50914",
    fillRule: "evenodd",
    d: "M38.246 18.152a10.805 10.805 0 002.453-6.855h-3.323a7.48 7.48 0 11-2.19-5.292l2.348-2.349a10.806 10.806 0 10.712 14.496z",
    clipRule: "evenodd"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#E50914",
    fillRule: "evenodd",
    d: "M48.416 22.102c5.968 0 10.805-4.837 10.805-10.805S54.384.491 48.416.491 37.61 5.33 37.61 11.297c0 5.968 4.838 10.805 10.806 10.805zm-.006-3.328a7.48 7.48 0 100-14.961 7.48 7.48 0 000 14.961z",
    clipRule: "evenodd"
  }));
};

var _default = Logo;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Logo, "Logo", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Utils/Logo.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Utils/Logo.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/components/Utils/SwitchField.js":
/*!*********************************************!*\
  !*** ./src/components/Utils/SwitchField.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _WooSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WooSwitch */ "./src/components/Utils/WooSwitch.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var SwitchField = function SwitchField(_ref) {
  var id = _ref.id,
      switchId = _ref.switchId,
      label = _ref.label,
      tooltip = _ref.tooltip,
      checked = _ref.checked,
      onChange = _ref.onChange;

  var getSwitchStatus = function getSwitchStatus(status) {
    if (typeof status === "boolean") {
      return status;
    }

    return 'yes' === status;
  };

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between w-full"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-md text-gray-400 flex items-center"
  }, label, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-tip": true,
    "data-for": id,
    className: "ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id,
    className: "rounded-md",
    type: "dark",
    effect: "solid",
    delayHide: 100
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mt-2 text-white text-xs"
  }, tooltip))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WooSwitch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: onChange,
    id: switchId,
    checked: getSwitchStatus(checked)
  }));
};

var _default = SwitchField;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SwitchField, "SwitchField", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Utils/SwitchField.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Utils/SwitchField.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/components/Utils/WooSwitch.js":
/*!*******************************************!*\
  !*** ./src/components/Utils/WooSwitch.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var WooSwitch = function WooSwitch(_ref) {
  var id = _ref.id,
      checked = _ref.checked,
      onChange = _ref.onChange;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: id,
    className: "flex items-center cursor-pointer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    onChange: onChange,
    id: id,
    type: "checkbox",
    className: "sr-only",
    defaultChecked: checked
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-10 h-4 bg-gray-400 rounded-full shadow-inner"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dot absolute w-6 h-6 bg-gray-100 rounded-full shadow -left-1 -top-1 transition"
  })));
};

var _default = WooSwitch;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WooSwitch, "WooSwitch", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Utils/WooSwitch.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/components/Utils/WooSwitch.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/admin-menu-fix */ "./src/utils/admin-menu-fix.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* module decorator */ module = __webpack_require__.hmd(module);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var mountNode = document.getElementById('boostimer-app');
react_dom__WEBPACK_IMPORTED_MODULE_1__.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null), mountNode);
(0,_utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_2__["default"])('boostimer');
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mountNode, "mountNode", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/pages/Settings.js":
/*!*******************************!*\
  !*** ./src/pages/Settings.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader.js");
/* harmony import */ var _components_Utils_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Utils/InputField */ "./src/components/Utils/InputField.js");
/* harmony import */ var _components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Utils/SwitchField */ "./src/components/Utils/SwitchField.js");
/* harmony import */ var _api_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/settings */ "./src/api/settings.js");
/* module decorator */ module = __webpack_require__.hmd(module);




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var Settings = function Settings() {
  var settingsSchema = {
    sale_timer: {
      title: '',
      enabled: 0
    },
    stock_timer: {
      title: '',
      enabled: 0
    }
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settingsSchema),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      settings = _useState2[0],
      setSettings = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      iSSaving = _useState6[0],
      setIsSaving = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    (0,_api_settings__WEBPACK_IMPORTED_MODULE_8__.GET_SETTINGS)().then(function (response) {
      setSettings(response);
      setIsLoading(false);
    })["finally"](function () {});
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setIsSaving(true);
    var data = {
      sale_timer: {
        title: settings.sale_timer.title,
        enabled: settings.sale_timer.enabled
      },
      stock_timer: {
        title: settings.stock_timer.title,
        enabled: settings.stock_timer.enabled
      },
      short_sale_date: {
        title: settings.short_sale_date.title,
        enabled: settings.short_sale_date.enabled
      }
    };
    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.promise((0,_api_settings__WEBPACK_IMPORTED_MODULE_8__.UPDATE_SETTINGS)(data), {
      pending: {
        render: function render() {
          return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Saving settings', 'boostimer');
        }
      },
      success: {
        render: function render(_ref) {
          var data = _ref.data;
          return data.message ? data.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings have been updated successfully', 'boostimer');
        }
      },
      error: {
        render: function render(_ref2) {
          var data = _ref2.data;
          return data.message ? data.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Settings could not be saved. Something went wrong', 'boostimer');
        }
      }
    })["finally"](function () {
      return setIsSaving(false);
    });
  };

  var handleSwitchChange = function handleSwitchChange(e, key) {
    setSettings(_objectSpread(_objectSpread({}, settings), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, {
      title: settings[key]['title'],
      enabled: e.target.checked
    })));
  };

  var handleInputChange = function handleInputChange(e, key) {
    setSettings(_objectSpread(_objectSpread({}, settings), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, {
      title: e.target.value,
      enabled: settings[key]['enabled']
    })));
  };

  return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "p-6 pt-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "grid grid-cols-12 gap-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "col-span-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "bg-white p-8 shadow rounded-md"
  }, isLoading ? (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null) : (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "uppercase tracking-widest text-gray-500 font-semibold"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show Countdown", "boostimer")), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "enable_sale_countdown_timer",
    switchId: "enable_sale_countdown_timer_switch",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show Sale Countdown Timer", "boostimer"),
    tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enable this to show countdown timer for sale duration on single product", "boostimer"),
    checked: settings.sale_timer.enabled,
    onChange: function onChange(e) {
      return handleSwitchChange(e, 'sale_timer');
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "enable_in_stock_countdown_timer",
    switchId: "enable_in_stock_countdown_timer_switch",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show Stock Countdown Timer", "boostimer"),
    tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enable this to show countdown timer for next available stock on single product", "boostimer"),
    checked: settings.stock_timer.enabled,
    onChange: function onChange(e) {
      return handleSwitchChange(e, 'stock_timer');
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "uppercase tracking-widest text-gray-500 font-semibold"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Timer title", "boostimer")), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "sale_timer_tooltip",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Sale Timer Title", "boostimer"),
    tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("This text will show on the sale timer title", "boostimer"),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Sale ends in:", "boostimer"),
    value: settings.sale_timer.title,
    onChange: function onChange(e) {
      return handleInputChange(e, 'sale_timer');
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "stock_time_title_tooltip",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stock Timer Title', "boostimer"),
    tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("This text will show on the stock timer title", "boostimer"),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Expected restock in:", "boostimer"),
    value: settings.stock_timer.title,
    onChange: function onChange(e) {
      return handleInputChange(e, 'stock_timer');
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "uppercase tracking-widest text-gray-500 font-semibold"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Short Sale Date", "boostimer")), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "enable_short_sale_date",
    switchId: "enable_short_sale_date_switch",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show Short Sale Date", "boostimer"),
    tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enable this to show 'sale ends on' prompt on shop page. E.g: 'Sale ends on: 12/12/2012'", "boostimer"),
    checked: settings.short_sale_date.enabled,
    onChange: function onChange(e) {
      return handleSwitchChange(e, 'short_sale_date');
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "short_sale_date_title_tooltip",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Short Sale Date Title', "boostimer"),
    tooltip: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("This text will show with the sale end date on shop page", "boostimer"),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Sale ends on:", "boostimer"),
    value: settings.short_sale_date.title,
    onChange: function onChange(e) {
      return handleInputChange(e, 'short_sale_date');
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "mt-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", {
    onClick: handleSubmit,
    className: "bg-gray-800 text-white px-8 py-2 uppercase text-md font-medium rounded-md hover:shadow-md transition delay-100 ease-in-out ".concat(iSSaving ? 'opacity-50' : ''),
    disabled: iSSaving
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Save", "boostimer"))))))));
};

__signature__(Settings, "useState{[settings, setSettings](settingsSchema)}\nuseState{[isLoading, setIsLoading](true)}\nuseState{[iSSaving, setIsSaving](false)}\nuseEffect{}");

var _default = Settings;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Settings, "Settings", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/pages/Settings.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/pages/Settings.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/utils/admin-menu-fix.js":
/*!*************************************!*\
  !*** ./src/utils/admin-menu-fix.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/**
 * As we are using hash based navigation, hack fix
 * to highlight the current selected menu
 *
 * Requires jQuery
 *
 * @credit: Tareq Hasan (https://github.com/tareq1988) (Founder & CTO - weDevs)
 */
function menuFix(slug) {
  var $ = jQuery;
  var menuRoot = $('#toplevel_page_' + slug);
  var currentUrl = window.location.href;
  var currentPath = currentUrl.substr(currentUrl.indexOf('admin.php'));
  menuRoot.on('click', 'a', function () {
    var self = $(this);
    $('ul.wp-submenu li', menuRoot).removeClass('current');

    if (self.hasClass('wp-has-submenu')) {
      $('li.wp-first-item', menuRoot).addClass('current');
    } else {
      self.parents('li').addClass('current');
    }
  });
  $('ul.wp-submenu a', menuRoot).each(function (index, el) {
    if ($(el).attr('href') === currentPath) {
      $(el).parent().addClass('current');
      return;
    }
  });
}

var _default = menuFix;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(menuFix, "menuFix", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/utils/admin-menu-fix.js");
  reactHotLoader.register(_default, "default", "/Users/xaviranik/Sites/xvr/wp-content/plugins/boostimer/src/utils/admin-menu-fix.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"core": 0,
/******/ 			"style-core": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkboostimer"] = self["webpackChunkboostimer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","style-core"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=core.js.map