(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-admin"],{

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
/******/ 		"admin": 0
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
/******/ 	deferredModules.push(["./src/index.js","vendors","style-admin"]);
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Settings */ "./src/pages/Settings.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var App = function App() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["HashRouter"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "woo-availability-app text-gray-700"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "grid grid-cols-12 gap-0 min-h-screen bg-white shadow"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-span-2 bg-white"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-span-10 bg-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/settings",
    component: _pages_Settings__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/",
    exact: true,
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_5__["default"]
  }))))));
};

var _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__["hot"])(App);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\App.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
/* harmony import */ var react_icons_Ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/Ai */ "./node_modules/react-icons/Ai/index.esm.js");
/* harmony import */ var react_icons_Io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/Io */ "./node_modules/react-icons/Io/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var _Utils_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils/Logo */ "./src/components/Utils/Logo.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var Sidebar = function Sidebar() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "p-6 flex flex-col items-center"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Utils_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-20 w-full grid grid-rows-4 gap-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    className: "outline-none text-gray-400 hover:text-gray-800 rounded-md px-6 py-3 rounded-md flex items-center text-md uppercase",
    exact: true,
    to: "/",
    activeClassName: "text-gray-600 bg-gray-100 rounded-md shadow font-semibold"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_2__["AiFillHome"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "ml-6"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Home', 'woo-availability'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    className: "outline-none text-gray-400 hover:text-gray-800 rounded-md px-6 py-3 rounded-md flex items-center text-md uppercase",
    exact: true,
    to: "/settings",
    activeClassName: "text-gray-600 bg-gray-100 rounded-md shadow font-semibold"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_icons_Io__WEBPACK_IMPORTED_MODULE_3__["IoMdSettings"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "ml-6"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Settings', 'woo-availability')))));
};

var _default = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sidebar, "Sidebar", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Sidebar.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Sidebar.js");
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
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");


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
      value = _ref.value;
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
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsInfoCircle"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    className: "rounded-md",
    type: "dark",
    effect: "solid",
    delayHide: 100
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "mt-2 text-white text-xs"
  }, tooltip)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
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

  reactHotLoader.register(InputField, "InputField", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Utils\\InputField.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Utils\\InputField.js");
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

  reactHotLoader.register(Logo, "Logo", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Utils\\Logo.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Utils\\Logo.js");
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
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _WooSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WooSwitch */ "./src/components/Utils/WooSwitch.js");


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
      checked = _ref.checked;
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
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsInfoCircle"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    className: "rounded-md",
    type: "dark",
    effect: "solid",
    delayHide: 100
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "mt-2 text-white text-xs"
  }, tooltip))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_WooSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: switchId,
    checked: checked
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

  reactHotLoader.register(SwitchField, "SwitchField", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Utils\\SwitchField.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Utils\\SwitchField.js");
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
      checked = _ref.checked;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: id,
    className: "flex items-center cursor-pointer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "relative"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
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

  reactHotLoader.register(WooSwitch, "WooSwitch", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Utils\\WooSwitch.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\components\\Utils\\WooSwitch.js");
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

  reactHotLoader.register(mountNode, "mountNode", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Home = function Home() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var goBack = function goBack() {
    history.goBack();
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "p-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    type: "button",
    onClick: handleClick
  }, "Go home")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "text-2xl"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Home', 'woo-availability'))));
};

__signature__(Home, "useHistory{history}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"]];
});

var _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\pages\\Home.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\pages\\Home.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/Settings.js":
/*!*******************************!*\
  !*** ./src/pages/Settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "./node_modules/@wordpress/element/build-module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "./node_modules/@wordpress/i18n/build-module/index.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _components_Utils_WooSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Utils/WooSwitch */ "./src/components/Utils/WooSwitch.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _components_Utils_InputField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Utils/InputField */ "./src/components/Utils/InputField.js");
/* harmony import */ var _components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Utils/SwitchField */ "./src/components/Utils/SwitchField.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var Settings = function Settings() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "p-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "text-2xl font-semibold text-gray-600"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Settings', 'woo-availability'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "grid grid-cols-12 gap-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "col-span-8"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bg-white p-8 shadow rounded-md"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "text-md uppercase tracking-widest text-gray-500 font-semibold"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Countdown Timer', 'woo-availability')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "enable_countdown_timer",
    switchId: "enable_countdown_timer_switch",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show Countdown Timer', 'woo-availability'),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable this to show countdown timer on single product', 'woo-availability'),
    checked: true
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "text-md uppercase tracking-widest text-gray-500 font-semibold"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Notify User', 'woo-availability')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-4"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Utils_SwitchField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "enable_notify_user",
    switchId: "enable_notify_user_switch",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable Notify User', 'woo-availability'),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable this to show "notify me" button on single product page', 'woo-availability'),
    checked: false
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "success_enroll_tooltip",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Success Enrollment Message', 'woo-availability'),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This message will be displayed when a user successfully enrolls for the availability notification', 'woo-availability'),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('You are enrolled successfully to get notified for stock availability!', 'woo-availability'),
    value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('You are enrolled successfully to get notified for stock availability!', 'woo-availability')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-6"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Utils_InputField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "notify_me_btn_text_tooltip",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('"Notify Me" Button Text', 'woo-availability'),
    tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This text will be displayed on an enrollment button on a product page', 'woo-availability'),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Notify me!', 'woo-availability'),
    value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Notify me!', 'woo-availability')
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "mt-12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "bg-blue-900 text-white px-6 py-2 uppercase text-md rounded-md hover:shadow-md transition delay-100 ease-out"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Save', 'woo-availability'))))))));
};

var _default = Settings;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Settings, "Settings", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\pages\\Settings.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\pages\\Settings.js");
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

  reactHotLoader.register(menuFix, "menuFix", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\utils\\admin-menu-fix.js");
  reactHotLoader.register(_default, "default", "G:\\dev\\laragon\\www\\xvr\\wp-content\\plugins\\woo-availability\\src\\utils\\admin-menu-fix.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map