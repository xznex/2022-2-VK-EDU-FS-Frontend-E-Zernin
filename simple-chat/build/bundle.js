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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat_list.css":
/*!***********************!*\
  !*** ./chat_list.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat_list.css?");

/***/ }),

/***/ "./common.css":
/*!********************!*\
  !*** ./common.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./common.css?");

/***/ }),

/***/ "./dialog.css":
/*!********************!*\
  !*** ./dialog.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dialog.css?");

/***/ }),

/***/ "./header.css":
/*!********************!*\
  !*** ./header.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./header.css?");

/***/ }),

/***/ "./images/2.jpg":
/*!**********************!*\
  !*** ./images/2.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/2.jpg\";\n\n//# sourceURL=webpack:///./images/2.jpg?");

/***/ }),

/***/ "./images/3.jpg":
/*!**********************!*\
  !*** ./images/3.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/3.jpg\";\n\n//# sourceURL=webpack:///./images/3.jpg?");

/***/ }),

/***/ "./images/4.png":
/*!**********************!*\
  !*** ./images/4.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/4.png\";\n\n//# sourceURL=webpack:///./images/4.png?");

/***/ }),

/***/ "./images/5.jpg":
/*!**********************!*\
  !*** ./images/5.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/5.jpg\";\n\n//# sourceURL=webpack:///./images/5.jpg?");

/***/ }),

/***/ "./images/6.jpg":
/*!**********************!*\
  !*** ./images/6.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/6.jpg\";\n\n//# sourceURL=webpack:///./images/6.jpg?");

/***/ }),

/***/ "./images/7.jpg":
/*!**********************!*\
  !*** ./images/7.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/7.jpg\";\n\n//# sourceURL=webpack:///./images/7.jpg?");

/***/ }),

/***/ "./images/8.jpg":
/*!**********************!*\
  !*** ./images/8.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/8.jpg\";\n\n//# sourceURL=webpack:///./images/8.jpg?");

/***/ }),

/***/ "./images/Anonymous.png":
/*!******************************!*\
  !*** ./images/Anonymous.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/Anonymous.png\";\n\n//# sourceURL=webpack:///./images/Anonymous.png?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ \"./header.css\");\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dialog_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.css */ \"./dialog.css\");\n/* harmony import */ var _dialog_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dialog_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.css */ \"./common.css\");\n/* harmony import */ var _common_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chat_list_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat_list.css */ \"./chat_list.css\");\n/* harmony import */ var _chat_list_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chat_list_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_Anonymous_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Anonymous.png */ \"./images/Anonymous.png\");\n/* harmony import */ var _images_Anonymous_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_Anonymous_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/2.jpg */ \"./images/2.jpg\");\n/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_2_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/3.jpg */ \"./images/3.jpg\");\n/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_3_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/4.png */ \"./images/4.png\");\n/* harmony import */ var _images_4_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_4_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/5.jpg */ \"./images/5.jpg\");\n/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_5_jpg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _images_6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/6.jpg */ \"./images/6.jpg\");\n/* harmony import */ var _images_6_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_6_jpg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_7_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/7.jpg */ \"./images/7.jpg\");\n/* harmony import */ var _images_7_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_7_jpg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _images_8_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/8.jpg */ \"./images/8.jpg\");\n/* harmony import */ var _images_8_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_8_jpg__WEBPACK_IMPORTED_MODULE_11__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar screen = document.querySelector('.screen');\ngetMessages();\nscreen.scrollTop = screen.scrollHeight;\nform.addEventListener('submit', sendMessage.bind(undefined));\nfunction sendMessage(event) {\n  event.preventDefault();\n  if (input.value == \"\") return;\n  var date = new Date();\n  var message = {\n    sender: \"me\",\n    text: input.value,\n    date: date.toString()\n  };\n  renderMessage(message);\n  saveMessage(message);\n  screen.scrollTop = screen.scrollHeight;\n  input.value = \"\";\n  var send = document.getElementById(\"send\");\n  send.remove();\n}\nfunction renderMessage(message) {\n  var div = document.createElement(\"div\");\n  div.className = \"message\";\n  div.style.animation = \"appear .4s\";\n  screen.append(div);\n  var text_message = document.createElement(\"span\");\n  text_message.className = \"text\";\n  text_message.innerText = message.text;\n  div.append(text_message);\n  var info = document.createElement(\"div\");\n  info.className = \"info\";\n  div.appendChild(info);\n  var span = document.createElement(\"span\");\n  span.className = \"date\";\n  var date = new Date(message.date);\n  var currentHours = (\"0\" + date.getHours()).slice(-2);\n  var currentMinutes = (\"0\" + date.getMinutes()).slice(-2);\n  span.innerHTML = \"\".concat(currentHours, \":\").concat(currentMinutes);\n  info.appendChild(span);\n  var status = document.createElement(\"span\");\n  status.className = \"material-icons\";\n  status.id = \"done_all\";\n  status.innerHTML = \"done_all\";\n  info.appendChild(status);\n}\nfunction saveMessage(message) {\n  var messages = localStorage.getItem(\"messages\");\n  if (messages === null) {\n    localStorage.setItem(\"messages\", JSON.stringify({\n      \"messages\": []\n    }));\n  }\n  messages = localStorage.getItem(\"messages\");\n  var parsed_messages = JSON.parse(messages).messages;\n  parsed_messages.push(message);\n  localStorage.setItem(\"messages\", JSON.stringify({\n    \"messages\": parsed_messages\n  }));\n}\nfunction getMessages() {\n  var messages = localStorage.getItem(\"messages\");\n  if (!messages) return;\n  var _iterator = _createForOfIteratorHelper(JSON.parse(messages).messages),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var mes = _step.value;\n      renderMessage(mes);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });