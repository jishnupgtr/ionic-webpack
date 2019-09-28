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
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/app.js":
/*!***********************!*\
  !*** ./www/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Scripts_app_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Scripts/app.router.js */ \"./www/js/app.router.js\");\n // import components from './components';\n// console.log('components',components)\n// Ionic Starter App\n// angular.module is a global place for creating, registering and retrieving Angular modules\n// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)\n// the 2nd parameter is an array of 'requires'\n\nangular.module(\"starter\", [\"ionic\", \"components\"]).run(function ($ionicPlatform) {\n  $ionicPlatform.ready(function () {\n    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard\n    // for form inputs).\n    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at\n    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes\n    // useful especially with forms, though we would prefer giving the user a little more room\n    // to interact with the app.\n    if (window.cordova && window.Keyboard) {\n      window.Keyboard.hideKeyboardAccessoryBar(true);\n    }\n\n    if (window.StatusBar) {\n      // Set the statusbar to use the default style, tweak this to\n      // remove the status bar on iOS or change it to use white instead of dark colors.\n      StatusBar.styleDefault();\n    }\n  });\n}); // .config(router);\n\n//# sourceURL=webpack:///./www/js/app.js?");

/***/ }),

/***/ "./www/js/app.router.js":
/*!******************************!*\
  !*** ./www/js/app.router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar AppRouter = function AppRouter($stateProvider, $urlRouterProvider) {\n  /**\n   * Define Routes here\n   * \n   */\n  $urlRouterProvider.otherwise(\"/app/home\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppRouter);\n\n//# sourceURL=webpack:///./www/js/app.router.js?");

/***/ })

/******/ });