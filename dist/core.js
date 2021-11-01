(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-core"],{

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"core": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/wp-content/plugins/woo-availability/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors","style-core"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Settings */ "./src/pages/Settings.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var App = function App() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["HashRouter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_toastify__WEBPACK_IMPORTED_MODULE_6__["ToastContainer"], {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woo-availability-app text-gray-700 m-auto max-w-full xl:max-w-7xl mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "grid grid-cols-12 gap-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-span-3"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-span-9"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/",
    component: _pages_Settings__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))))));
};

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_2__["hot"])(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/App.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Loader.js":
/*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var Loader = function Loader() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_content_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    viewBox: "0 0 800 400",
    height: '100%',
    width: '100%',
    className: "h-full"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "-8",
    y: "30",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "70",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "90",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "120",
    rx: "3",
    ry: "3",
    width: "424",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "-8",
    y: "170",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "190",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "210",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "230",
    rx: "3",
    ry: "3",
    width: "424",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "-8",
    y: "280",
    rx: "4",
    ry: "4",
    width: "120",
    height: "10"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "300",
    rx: "3",
    ry: "3",
    className: "h-2 w-full"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
    x: "12",
    y: "320",
    rx: "3",
    ry: "3",
    width: "422",
    height: "7"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", {
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

  reactHotLoader.register(Loader, "Loader", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Loader.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Loader.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _Utils_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils/Logo */ "./src/components/Utils/Logo.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var Sidebar = function Sidebar() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "p-6 flex flex-col items-center bg-white rounded-md shadow"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-8"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Utils_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-10 mb-4 w-full grid grid-rows-1 gap-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: "outline-none text-gray-400 hover:text-gray-800 rounded-md px-6 py-3 flex items-center text-md uppercase tracking-wider focus:ring-0",
    exact: true,
    to: "/",
    activeClassName: "text-gray-600 bg-gray-100 rounded-md shadow font-semibold"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "ml-6"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Settings", "woo-availability")))));
};

var _default = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sidebar, "Sidebar", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Sidebar.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Sidebar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Utils/InputField.js":
/*!********************************************!*\
  !*** ./src/components/Utils/InputField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");


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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex flex-col justify-center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex flex-col"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "text-md text-gray-400 flex items-center"
  }, label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "data-tip": true,
    "data-for": id,
    className: "ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: id,
    className: "rounded-md",
    type: "dark",
    effect: "solid",
    delayHide: 100
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "mt-2 text-white text-xs"
  }, tooltip)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    onChange: onChange,
    className: "woo-availability-input",
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

  reactHotLoader.register(InputField, "InputField", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Utils/InputField.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Utils/InputField.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Utils/Logo.js":
/*!**************************************!*\
  !*** ./src/components/Utils/Logo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var Logo = function Logo() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "200",
    height: "26",
    fill: "none",
    viewBox: "0 0 200 26"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#374151",
    fillRule: "evenodd",
    d: "M16.808 4.198a9.55 9.55 0 105.664 8.729v-1.033a1.685 1.685 0 013.37 0v1.035a12.922 12.922 0 11-7.662-11.81 1.685 1.685 0 11-1.372 3.079z",
    clipRule: "evenodd"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#1E3A8A",
    fillRule: "evenodd",
    d: "M25.348 2.74c.659.657.66 1.724.002 2.382L14.114 16.36a1.686 1.686 0 01-2.384 0l-3.371-3.367a1.683 1.683 0 010-2.382 1.686 1.686 0 012.383 0l2.179 2.177L22.965 2.74a1.686 1.686 0 012.383-.001z",
    clipRule: "evenodd"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#374151",
    d: "M53.3 5.243l-3.71 14.443H45.39L43.12 10.18l-2.353 9.505h-4.198l-3.61-14.443h3.711l2.049 10.513 2.535-10.513h3.813L47.5 15.756 49.57 5.243H53.3zM60.191 19.85c-1.109 0-2.11-.24-3.002-.72a5.318 5.318 0 01-2.088-2.057c-.5-.892-.75-1.934-.75-3.127 0-1.18.256-2.215.77-3.107a5.246 5.246 0 012.109-2.078c.892-.48 1.893-.72 3.002-.72 1.108 0 2.109.24 3.001.72a5.246 5.246 0 012.11 2.078c.513.892.77 1.927.77 3.107 0 1.18-.264 2.222-.79 3.127a5.248 5.248 0 01-2.13 2.057c-.893.48-1.893.72-3.002.72zm0-3.045c.663 0 1.224-.247 1.683-.74.474-.494.71-1.2.71-2.12 0-.918-.23-1.625-.69-2.118a2.15 2.15 0 00-1.662-.74c-.676 0-1.237.246-1.684.74-.446.48-.669 1.186-.669 2.119 0 .919.216 1.625.649 2.119.446.493 1 .74 1.663.74zM73.104 19.85c-1.108 0-2.109-.24-3.001-.72a5.319 5.319 0 01-2.09-2.057c-.5-.892-.75-1.934-.75-3.127 0-1.18.257-2.215.771-3.107a5.246 5.246 0 012.11-2.078c.892-.48 1.892-.72 3-.72 1.11 0 2.11.24 3.002.72a5.246 5.246 0 012.11 2.078c.513.892.77 1.927.77 3.107 0 1.18-.263 2.222-.79 3.127a5.248 5.248 0 01-2.13 2.057c-.893.48-1.893.72-3.002.72zm0-3.045c.663 0 1.224-.247 1.683-.74.474-.494.71-1.2.71-2.12 0-.918-.23-1.625-.69-2.118a2.15 2.15 0 00-1.662-.74c-.676 0-1.237.246-1.683.74-.447.48-.67 1.186-.67 2.119 0 .919.216 1.625.65 2.119.445.493 1 .74 1.662.74z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "#1E3A8A",
    d: "M89.967 17.167h-5.325l-.854 2.526H80.15l5.163-14.305h4.024L94.5 19.694h-3.679l-.854-2.527zm-.894-2.69L87.305 9.24l-1.748 5.237h3.516zM101.173 16.433l2.46-8.11h3.699l-4.024 11.37h-4.29l-4.024-11.37h3.72l2.459 8.11zM108.104 13.988c0-1.169.217-2.194.651-3.077.447-.883 1.05-1.563 1.809-2.038a4.688 4.688 0 012.541-.713c.799 0 1.497.163 2.093.489.61.326 1.078.754 1.403 1.283v-1.61h3.476v11.372h-3.476v-1.61c-.339.53-.813.957-1.423 1.283-.596.326-1.294.49-2.094.49a4.652 4.652 0 01-2.52-.714c-.759-.489-1.362-1.175-1.809-2.058-.434-.896-.651-1.929-.651-3.097zm8.497.02c0-.87-.244-1.555-.732-2.058a2.309 2.309 0 00-1.748-.754c-.691 0-1.281.251-1.768.754-.475.489-.712 1.168-.712 2.038 0 .87.237 1.562.712 2.078a2.372 2.372 0 001.768.754c.691 0 1.274-.251 1.748-.754.488-.502.732-1.188.732-2.058zM124.339 7.14c-.61 0-1.111-.176-1.504-.53a1.8 1.8 0 01-.569-1.344c0-.543.19-.992.569-1.345.393-.367.894-.55 1.504-.55.596 0 1.084.183 1.464.55.393.353.589.802.589 1.345 0 .53-.196.978-.589 1.345-.38.353-.868.53-1.464.53zm1.728 1.183v11.37h-3.476V8.324h3.476zM132.062 4.614v15.08h-3.476V4.614h3.476zM133.889 13.988c0-1.169.217-2.194.651-3.077.447-.883 1.05-1.563 1.809-2.038a4.688 4.688 0 012.541-.713c.799 0 1.497.163 2.093.489.61.326 1.078.754 1.403 1.283v-1.61h3.476v11.372h-3.476v-1.61c-.339.53-.813.957-1.423 1.283-.596.326-1.294.49-2.094.49a4.652 4.652 0 01-2.52-.714c-.759-.489-1.362-1.175-1.809-2.058-.434-.896-.651-1.929-.651-3.097zm8.497.02c0-.87-.244-1.555-.732-2.058a2.309 2.309 0 00-1.748-.754c-.691 0-1.28.251-1.768.754-.475.489-.712 1.168-.712 2.038 0 .87.237 1.562.712 2.078a2.373 2.373 0 001.768.754c.691 0 1.274-.251 1.748-.754.488-.502.732-1.188.732-2.058zM151.852 9.932c.325-.53.793-.957 1.403-1.283.61-.326 1.307-.49 2.093-.49.935 0 1.782.238 2.541.714.759.475 1.355 1.155 1.789 2.038.447.883.671 1.908.671 3.077 0 1.168-.224 2.2-.671 3.097-.434.883-1.03 1.57-1.789 2.058a4.688 4.688 0 01-2.541.713c-.799 0-1.497-.156-2.093-.468a3.774 3.774 0 01-1.403-1.284v1.59h-3.476V4.614h3.476v5.318zm4.96 4.056c0-.87-.244-1.55-.732-2.038-.474-.503-1.064-.754-1.768-.754-.691 0-1.281.251-1.769.754-.474.503-.711 1.189-.711 2.058 0 .87.237 1.556.711 2.058a2.376 2.376 0 001.769.754c.691 0 1.28-.251 1.768-.754.488-.516.732-1.209.732-2.078zM163.92 7.14c-.61 0-1.111-.176-1.504-.53a1.8 1.8 0 01-.569-1.344c0-.543.19-.992.569-1.345.393-.367.894-.55 1.504-.55.596 0 1.084.183 1.464.55.393.353.589.802.589 1.345 0 .53-.196.978-.589 1.345-.38.353-.868.53-1.464.53zm1.728 1.183v11.37h-3.476V8.324h3.476zM171.643 4.614v15.08h-3.476V4.614h3.476zM175.91 7.14c-.61 0-1.112-.176-1.505-.53a1.8 1.8 0 01-.569-1.344c0-.543.19-.992.569-1.345.393-.367.895-.55 1.505-.55.596 0 1.084.183 1.463.55.393.353.59.802.59 1.345 0 .53-.197.978-.59 1.345-.379.353-.867.53-1.463.53zm1.727 1.183v11.37h-3.475V8.324h3.475zM186.478 16.739v2.954h-1.769c-1.26 0-2.242-.305-2.947-.917-.705-.625-1.057-1.637-1.057-3.036v-4.524h-1.382V8.323h1.382V5.55h3.476v2.772h2.276v2.893h-2.276v4.565c0 .34.081.584.244.734.162.149.433.224.813.224h1.24zM200 8.323l-7.114 16.77h-3.74l2.601-5.787-4.614-10.983h3.883l2.622 7.111 2.602-7.111H200z"
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

  reactHotLoader.register(Logo, "Logo", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Utils/Logo.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Utils/Logo.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Utils/SwitchField.js":
/*!*********************************************!*\
  !*** ./src/components/Utils/SwitchField.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _WooSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WooSwitch */ "./src/components/Utils/WooSwitch.js");


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

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex items-center justify-between w-full"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "flex flex-col"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "text-md text-gray-400 flex items-center"
  }, label, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "data-tip": true,
    "data-for": id,
    className: "ml-2 cursor-pointer text-gray-400 hover:text-gray-700 transition delay-100 ease-out"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: id,
    className: "rounded-md",
    type: "dark",
    effect: "solid",
    delayHide: 100
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "mt-2 text-white text-xs"
  }, tooltip))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_WooSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

  reactHotLoader.register(SwitchField, "SwitchField", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Utils/SwitchField.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Utils/SwitchField.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Utils/WooSwitch.js":
/*!*******************************************!*\
  !*** ./src/components/Utils/WooSwitch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


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
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: id,
    className: "flex items-center cursor-pointer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "relative"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    onChange: onChange,
    id: id,
    type: "checkbox",
    className: "sr-only",
    defaultChecked: checked
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "w-10 h-4 bg-gray-400 rounded-full shadow-inner"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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

  reactHotLoader.register(WooSwitch, "WooSwitch", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Utils/WooSwitch.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/components/Utils/WooSwitch.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/admin-menu-fix */ "./src/utils/admin-menu-fix.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var mountNode = document.getElementById('woo-availability-app');
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null), mountNode);
Object(_utils_admin_menu_fix__WEBPACK_IMPORTED_MODULE_3__["default"])('woo-availability');
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mountNode, "mountNode", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Settings.js":
/*!*******************************!*\
  !*** ./src/pages/Settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Utils_InputField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Utils/InputField */ "./src/components/Utils/InputField.js");
/* harmony import */ var _components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Utils/SwitchField */ "./src/components/Utils/SwitchField.js");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(settingsSchema),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      settings = _useState2[0],
      setSettings = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setIsLoading(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
      path: '/wavly/v1/settings',
      method: 'GET'
    }).then(function (response) {
      setSettings(response);
      setIsLoading(false);
    })["finally"](function () {});
  }, []);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      sale_timer: {
        title: settings.sale_timer.title,
        enabled: settings.sale_timer.enabled
      },
      stock_timer: {
        title: settings.stock_timer.title,
        enabled: settings.stock_timer.enabled
      }
    };
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_7___default()({
      path: '/wavly/v1/settings',
      method: 'PUT',
      data: data
    }).then(function (response) {
      var _response$message;

      var message = (_response$message = response.message) !== null && _response$message !== void 0 ? _response$message : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Settings have been updated successfully', 'woo-availability');
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success(message);
    })["catch"](function (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Timer titles can not be empty', 'woo-availability'));
    });
  };

  var handleSwitchChange = function handleSwitchChange(e, key) {
    setSettings(_objectSpread(_objectSpread({}, settings), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, {
      title: settings[key]['title'],
      enabled: e.target.checked
    })));
  };

  var handleInputChange = function handleInputChange(e, key) {
    setSettings(_objectSpread(_objectSpread({}, settings), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, {
      title: e.target.value,
      enabled: settings[key]['enabled']
    })));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "p-6 pt-0"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "grid grid-cols-12 gap-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "col-span-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "bg-white p-8 shadow rounded-md"
  }, isLoading ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "uppercase tracking-widest text-gray-500 font-semibold"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Show Countdown", "woo-availability")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "enable_in_stock_countdown_timer",
    switchId: "enable_in_stock_countdown_timer_switch",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Show Stock Countdown Timer", "woo-availability"),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Enable this to show countdown timer for next available stock on single product", "woo-availability"),
    checked: settings.stock_timer.enabled,
    onChange: function onChange(e) {
      return handleSwitchChange(e, 'stock_timer');
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "enable_sale_countdown_timer",
    switchId: "enable_sale_countdown_timer_switch",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Show Sale Countdown Timer", "woo-availability"),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Enable this to show countdown timer for sale duration on single product", "woo-availability"),
    checked: settings.sale_timer.enabled,
    onChange: function onChange(e) {
      return handleSwitchChange(e, 'sale_timer');
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "uppercase tracking-widest text-gray-500 font-semibold"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Timer title", "woo-availability")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "sale_timer_tooltip",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Sale Timer Title", "woo-availability"),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("This text will show on the sale timer title", "woo-availability"),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Sale ends in:", "woo-availability"),
    value: settings.sale_timer.title,
    onChange: function onChange(e) {
      return handleInputChange(e, 'sale_timer');
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "notify_me_btn_text_tooltip",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Stock Timer Title', "woo-availability"),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("This text will show on the stock timer title", "woo-availability"),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Expected restock in:", "woo-availability"),
    value: settings.stock_timer.title,
    onChange: function onChange(e) {
      return handleInputChange(e, 'stock_timer');
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    onClick: handleSubmit,
    className: "bg-blue-900 text-white px-8 py-2 uppercase text-md font-medium rounded-md hover:shadow-md transition delay-100 ease-in-out"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Save", "woo-availability"))))))));
};

__signature__(Settings, "useState{[settings, setSettings](settingsSchema)}\nuseState{[isLoading, setIsLoading](true)}\nuseEffect{}");

var _default = Settings;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Settings, "Settings", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/pages/Settings.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/pages/Settings.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/admin-menu-fix.js":
/*!*************************************!*\
  !*** ./src/utils/admin-menu-fix.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
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

  reactHotLoader.register(menuFix, "menuFix", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/utils/admin-menu-fix.js");
  reactHotLoader.register(_default, "default", "/Users/xvr/Public/Sites/xvvr/wp-content/plugins/woo-availability/src/utils/admin-menu-fix.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ })

/******/ });
//# sourceMappingURL=core.js.map