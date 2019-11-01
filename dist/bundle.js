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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ \"./src/js/index.js\");\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_index_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_base_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_typography_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/typography.scss */ \"./src/scss/typography.scss\");\n/* harmony import */ var _scss_typography_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_typography_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_normalize_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/_normalize.scss */ \"./src/scss/_normalize.scss\");\n/* harmony import */ var _scss_normalize_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let btn4 = document.getElementById('btn4');\nbtn4.addEventListener('click', fillCanvas4);\n\nfunction fillCanvas4() {\n  let requestURL = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';\n  let request = new XMLHttpRequest();\n  request.open('GET', requestURL);\n  request.responseType = 'json';\n  request.send();\n\n  request.onload = function () {\n    let matrix4x4 = request.response;\n    let canvas = document.getElementById(\"canvas\");\n    let ctx = canvas.getContext(\"2d\");\n    let width = matrix4x4[0].length;\n    let height = matrix4x4.length;\n    let scale = 1;\n    canvas.width = 4;\n    canvas.height = 4;\n\n    for (let row = 0; row < height; row++) {\n      for (let col = 0; col < width; col++) {\n        ctx.fillStyle = '#' + matrix4x4[row][col];\n        ctx.fillRect(col * scale, row * scale, scale, scale);\n      }\n    }\n  };\n}\n\nlet btn32 = document.getElementById('btn32');\nbtn32.addEventListener('click', fillCanvas32);\n\nfunction fillCanvas32() {\n  let requestURL = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';\n  let request = new XMLHttpRequest();\n  request.open('GET', requestURL);\n  request.responseType = 'json';\n  request.send();\n\n  request.onload = function () {\n    let flattenedRGBAValues = request.response.flat(2);\n    let canvas = document.getElementById(\"canvas\");\n    let ctx = canvas.getContext(\"2d\");\n    canvas.height = 32;\n    canvas.width = 32;\n    const imgData = new ImageData(Uint8ClampedArray.from(flattenedRGBAValues), 32, 32);\n    ctx.putImageData(imgData, 0, 0);\n  };\n}\n\nlet btn256 = document.getElementById('btn256');\nbtn256.addEventListener('click', fillCanvas256);\n\nfunction fillCanvas256() {\n  let canvas = document.getElementById(\"canvas\");\n  let ctx = canvas.getContext(\"2d\");\n  let img = new Image();\n\n  img.onload = function () {\n    canvas.width = 256;\n    canvas.height = 256;\n    ctx.drawImage(img, 0, 0);\n  };\n\n  img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/image.png';\n}\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/_normalize.scss":
/*!**********************************!*\
  !*** ./src/scss/_normalize.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/_normalize.scss?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ }),

/***/ "./src/scss/typography.scss":
/*!**********************************!*\
  !*** ./src/scss/typography.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/typography.scss?");

/***/ })

/******/ });