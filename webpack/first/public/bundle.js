/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Greeter.js只包括一个用来返回包含问候信息的html元素的函数。\nvar configText = __webpack_require__(2);\n// import styles = './Greeter.css';\n\n\nmodule.exports = function () {\n\tvar greet = document.createElement('div');\n\tgreet.textContent = configText.text;\n\treturn greet;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/Greeter.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/Greeter.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// main.js用来把Greeter模块返回的节点插入页面。\n\nvar greeter = __webpack_require__(0);\ndocument.getElementById('root').appendChild(greeter());\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/main.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"text\": \"hi mini ~ i am form json!!\"\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/config.json\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/config.json?");

/***/ })
/******/ ]);