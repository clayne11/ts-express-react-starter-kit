require("source-map-support").install();
module.exports =
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code/server/app.ts":
/*!********************************!*\
  !*** ./src/code/server/app.ts ***!
  \********************************/
/*! exports provided: app, httpServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpServer", function() { return httpServer; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);


var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var httpServer = Object(http__WEBPACK_IMPORTED_MODULE_1__["createServer"])(app);

/***/ }),

/***/ "./src/code/server/bootstrap/index.ts":
/*!********************************************!*\
  !*** ./src/code/server/bootstrap/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var code_server_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! code/server/routes */ "./src/code/server/routes.ts");
/* harmony import */ var code_server_webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! code/server/webpack */ "./src/code/server/webpack/index.ts");
/* harmony import */ var _startup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startup */ "./src/code/server/bootstrap/startup.ts");



Object(_startup__WEBPACK_IMPORTED_MODULE_2__["startup"])();

/***/ }),

/***/ "./src/code/server/bootstrap/runHttpServer.ts":
/*!****************************************************!*\
  !*** ./src/code/server/bootstrap/runHttpServer.ts ***!
  \****************************************************/
/*! exports provided: runHttpServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runHttpServer", function() { return runHttpServer; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "core-js/modules/es6.promise");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/code/server/app.ts");
/* harmony import */ var _utils_startup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/startup */ "./src/code/server/utils/startup.ts");



var _this = undefined;




/* globals PORT */

var runHttpServer = function runHttpServer() {
  return new Promise(function (resolve, reject) {
    var port = typeof PORT !== 'undefined' ? PORT : process.env.PORT;

    if (!port) {
      throw new Error("Environment Variable PORT must be set to startup a server");
    }

    var callback = function callback(err) {
      if (err) {
        // tslint:disable-next-line no-console
        console.log("error starting up http server: ".concat(err));
        reject(err);
      } else {
        // tslint:disable-next-line no-console
        console.log("HTTP Server listening on port ".concat(port));
        resolve();
      }
    };

    _app__WEBPACK_IMPORTED_MODULE_3__["httpServer"].listen(port, callback);
    Object(_utils_startup__WEBPACK_IMPORTED_MODULE_4__["teardown"])(function () {
      return tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"](_this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _app__WEBPACK_IMPORTED_MODULE_3__["httpServer"].close();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    });
  });
};



/***/ }),

/***/ "./src/code/server/bootstrap/startup.ts":
/*!**********************************************!*\
  !*** ./src/code/server/bootstrap/startup.ts ***!
  \**********************************************/
/*! exports provided: startup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startup", function() { return startup; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _runHttpServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runHttpServer */ "./src/code/server/bootstrap/runHttpServer.ts");
/* harmony import */ var _utils_startupSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/startupSubject */ "./src/code/server/utils/startupSubject.ts");


var _this = undefined;




var startup = function startup() {
  return tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_runHttpServer__WEBPACK_IMPORTED_MODULE_2__["runHttpServer"])();

          case 2:
            _utils_startupSubject__WEBPACK_IMPORTED_MODULE_3__["startupSubject"].next(true);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};

/***/ }),

/***/ "./src/code/server/index.ts":
/*!**********************************!*\
  !*** ./src/code/server/index.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var code_server_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! code/server/bootstrap */ "./src/code/server/bootstrap/index.ts");


/***/ }),

/***/ "./src/code/server/routes.ts":
/*!***********************************!*\
  !*** ./src/code/server/routes.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/code/server/app.ts");
/* harmony import */ var _utils_startupChecker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/startupChecker */ "./src/code/server/utils/startupChecker.ts");


var _this = undefined;




_app__WEBPACK_IMPORTED_MODULE_2__["app"].get('/ping', function (_req, res) {
  return tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Object(_utils_startupChecker__WEBPACK_IMPORTED_MODULE_3__["startupChecker"])();

          case 3:
            res.end();
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            res.status(500).end();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));
});

/***/ }),

/***/ "./src/code/server/ui/components/HtmlDocument/HtmlDocument.tsx":
/*!*********************************************************************!*\
  !*** ./src/code/server/ui/components/HtmlDocument/HtmlDocument.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.link */ "core-js/modules/es6.string.link");
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var HtmlDocument = function HtmlDocument(_ref) {
  var apolloClientState = _ref.apolloClientState,
      head = _ref.head,
      helmetHead = _ref.helmetHead,
      inlineCss = _ref.inlineCss,
      markup = _ref.markup,
      styleElements = _ref.styleElements,
      _ref$css = _ref.css,
      css = _ref$css === void 0 ? [] : _ref$css,
      _ref$scripts = _ref.scripts,
      scripts = _ref$scripts === void 0 ? [] : _ref$scripts,
      _ref$storeState = _ref.storeState,
      storeState = _ref$storeState === void 0 ? {} : _ref$storeState;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("html", helmetHead && helmetHead.htmlAttributes.toComponent(), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("head", null, scripts.map(function (src) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
      key: src,
      rel: 'preload',
      as: 'script',
      href: src
    });
  }), !!head && head, helmetHead && helmetHead.base.toComponent(), helmetHead && helmetHead.link.toComponent(), helmetHead && helmetHead.meta.toComponent(), helmetHead && helmetHead.script.toComponent(), helmetHead && helmetHead.style.toComponent(), helmetHead && helmetHead.title.toComponent(), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: 'utf-8'
  }), !!inlineCss && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: inlineCss
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__INITIAL_STATE__=".concat(JSON.stringify(storeState))
    }
  }), apolloClientState && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: "window.__APOLLO_CLIENT_STATE__=".concat(JSON.stringify(apolloClientState))
    }
  }), styleElements, css.map(function (href, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
      href: href,
      key: index,
      rel: 'stylesheet'
    });
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: 'RootNode',
    dangerouslySetInnerHTML: {
      __html: markup ? markup : ''
    }
  }), scripts.map(function (src) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("script", {
      key: src,
      src: src
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HtmlDocument);

/***/ }),

/***/ "./src/code/server/ui/components/HtmlDocument/index.ts":
/*!*************************************************************!*\
  !*** ./src/code/server/ui/components/HtmlDocument/index.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HtmlDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlDocument */ "./src/code/server/ui/components/HtmlDocument/HtmlDocument.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HtmlDocument__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/code/server/ui/serverRender.tsx":
/*!*********************************************!*\
  !*** ./src/code/server/ui/serverRender.tsx ***!
  \*********************************************/
/*! exports provided: serverRender, HtmlDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRender", function() { return serverRender; });
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "core-js/modules/es6.array.from");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.date.to-string */ "core-js/modules/es6.date.to-string");
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "core-js/modules/es7.symbol.async-iterator");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "core-js/modules/es6.symbol");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.is-array */ "core-js/modules/es6.array.is-array");
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_HtmlDocument__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/HtmlDocument */ "./src/code/server/ui/components/HtmlDocument/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlDocument", function() { return _components_HtmlDocument__WEBPACK_IMPORTED_MODULE_12__["default"]; });











var _this = undefined;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var renderHtmlDocument = function renderHtmlDocument(_ref) {
  var apolloClientState = _ref.apolloClientState,
      head = _ref.head,
      helmetHead = _ref.helmetHead,
      markup = _ref.markup,
      res = _ref.res,
      webpackUrls = _ref.webpackUrls,
      styleElements = _ref.styleElements,
      _ref$bundles = _ref.bundles,
      bundles = _ref$bundles === void 0 ? [] : _ref$bundles;

  // The application component is rendered to static markup
  // and sent as response.
  var render = function render() {
    return Object(react_dom_server__WEBPACK_IMPORTED_MODULE_11__["renderToStaticMarkup"])(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_HtmlDocument__WEBPACK_IMPORTED_MODULE_12__["default"], {
      apolloClientState: apolloClientState,
      head: head,
      scripts: [webpackUrls.main.js, webpackUrls['vendors~main'].js].concat(_toConsumableArray(bundles)),
      helmetHead: helmetHead,
      markup: markup,
      styleElements: styleElements
    }));
  };

  var html = render();
  var doctype = '<!DOCTYPE html>';
  res.write(doctype + html);
  res.end();
};

var serverRender = function serverRender(_ref2) {
  var res = _ref2.res,
      webpackUrls = _ref2.webpackUrls;
  return tslib__WEBPACK_IMPORTED_MODULE_9__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return renderHtmlDocument({
              res: res,
              webpackUrls: webpackUrls
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};


/***/ }),

/***/ "./src/code/server/utils/startup.ts":
/*!******************************************!*\
  !*** ./src/code/server/utils/startup.ts ***!
  \******************************************/
/*! exports provided: startup, runStartup, teardown, runTeardown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startup", function() { return startup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runStartup", function() { return runStartup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teardown", function() { return teardown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runTeardown", function() { return runTeardown; });
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "core-js/modules/es6.promise");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _universal_utils_unsubscribeFrom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../universal/utils/unsubscribeFrom */ "./src/code/universal/utils/unsubscribeFrom.ts");







var _this = undefined;



var fnsToStartup = [];
var unsubscribablesToTeardown = [];
var isStarted = false;
var startup = function startup(func) {
  return tslib__WEBPACK_IMPORTED_MODULE_6__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var unsubscribableToTeardown;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isStarted) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return func();

          case 3:
            unsubscribableToTeardown = _context.sent;

            if (unsubscribableToTeardown) {
              unsubscribablesToTeardown.push(unsubscribableToTeardown);
            }

            return _context.abrupt("return");

          case 6:
            fnsToStartup.push(func);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};
var runStartup = function runStartup() {
  return tslib__WEBPACK_IMPORTED_MODULE_6__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            isStarted = true;
            _context2.next = 3;
            return Promise.all(fnsToStartup.map(startup));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
};
var teardown = function teardown(unsubscribable) {
  if (unsubscribable) {
    unsubscribablesToTeardown.push(unsubscribable);
  }
};
var runTeardown = function runTeardown() {
  return tslib__WEBPACK_IMPORTED_MODULE_6__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Promise.all(unsubscribablesToTeardown.map(_universal_utils_unsubscribeFrom__WEBPACK_IMPORTED_MODULE_7__["unsubscribeFrom"]));

          case 2:
            fnsToStartup = [];
            unsubscribablesToTeardown = [];
            isStarted = false;

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
};

/***/ }),

/***/ "./src/code/server/utils/startupChecker.ts":
/*!*************************************************!*\
  !*** ./src/code/server/utils/startupChecker.ts ***!
  \*************************************************/
/*! exports provided: startupChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startupChecker", function() { return startupChecker; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "core-js/modules/es6.promise");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _startup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startup */ "./src/code/server/utils/startup.ts");
/* harmony import */ var _startupSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./startupSubject */ "./src/code/server/utils/startupSubject.ts");
/* harmony import */ var code_universal_utils_unsubscribeFrom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! code/universal/utils/unsubscribeFrom */ "./src/code/universal/utils/unsubscribeFrom.ts");



var _this = undefined;





var MAX_STARTUP_SECONDS = 60;
var MAX_STARTUP_TIME = MAX_STARTUP_SECONDS * 1000;
var startupHandler;
var unsubscribeStartup;
var startupPromise = new Promise(function (resolve) {
  startupHandler = setTimeout(function () {
    resolve(false);
  }, MAX_STARTUP_TIME);
  unsubscribeStartup = _startupSubject__WEBPACK_IMPORTED_MODULE_4__["startupSubject"].subscribe(function () {
    clearTimeout(startupHandler);
    resolve(true);
  });
});
var startupChecker = function startupChecker() {
  return tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var started;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return startupPromise;

          case 2:
            started = _context.sent;

            if (started) {
              _context.next = 5;
              break;
            }

            throw new Error("Server failed to start in ".concat(MAX_STARTUP_SECONDS, " seconds"));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};
Object(_startup__WEBPACK_IMPORTED_MODULE_3__["teardown"])(function () {
  clearTimeout(startupHandler);
  Object(code_universal_utils_unsubscribeFrom__WEBPACK_IMPORTED_MODULE_5__["unsubscribeFrom"])(unsubscribeStartup);
});

/***/ }),

/***/ "./src/code/server/utils/startupSubject.ts":
/*!*************************************************!*\
  !*** ./src/code/server/utils/startupSubject.ts ***!
  \*************************************************/
/*! exports provided: startupSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startupSubject", function() { return startupSubject; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);

var startupSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

/***/ }),

/***/ "./src/code/server/webpack/getWebpackUrls.ts":
/*!***************************************************!*\
  !*** ./src/code/server/webpack/getWebpackUrls.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _runtimeStaticPaths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runtimeStaticPaths */ "./src/code/server/webpack/runtimeStaticPaths.ts");


var _this = undefined;





var webpackUrls;
var getWebpackUrls;
var reactLoadableStats;
var statsPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(Object(_runtimeStaticPaths__WEBPACK_IMPORTED_MODULE_4__["getRuntimeStaticPaths"])().server, 'webpack-stats.json');
var reactLoadablePath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(Object(_runtimeStaticPaths__WEBPACK_IMPORTED_MODULE_4__["getRuntimeStaticPaths"])().server, 'react-loadable.json');

if (true) {
  // XXX: Hardcoded way of getting to the root of the project
  getWebpackUrls = function getWebpackUrls() {
    return tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"](_this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!webpackUrls) {
                try {
                  webpackUrls = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(statsPath, 'utf8'));
                } catch (error) {// do nothing
                }
              }

              if (!reactLoadableStats) {
                try {
                  reactLoadableStats = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(reactLoadablePath, 'utf8'));
                } catch (error) {// do nothing
                }
              }

              return _context.abrupt("return", {
                webpackUrls: webpackUrls,
                reactLoadableStats: reactLoadableStats
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };
} else {}

/* harmony default export */ __webpack_exports__["default"] = (getWebpackUrls);

/***/ }),

/***/ "./src/code/server/webpack/index.ts":
/*!******************************************!*\
  !*** ./src/code/server/webpack/index.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpack_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpack-middleware */ "./src/code/server/webpack/webpack-middleware.ts");


/***/ }),

/***/ "./src/code/server/webpack/runtimeStaticPaths.ts":
/*!*******************************************************!*\
  !*** ./src/code/server/webpack/runtimeStaticPaths.ts ***!
  \*******************************************************/
/*! exports provided: getRuntimeStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRuntimeStaticPaths", function() { return getRuntimeStaticPaths; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

var getRuntimeStaticPaths = function getRuntimeStaticPaths() {
  var root = process.cwd();
  return {
    server: path__WEBPACK_IMPORTED_MODULE_0___default.a.join(root, 'lib', 'server'),
    client: path__WEBPACK_IMPORTED_MODULE_0___default.a.join(root, 'lib', 'client')
  };
};

/***/ }),

/***/ "./src/code/server/webpack/webpack-middleware.ts":
/*!*******************************************************!*\
  !*** ./src/code/server/webpack/webpack-middleware.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var code_server_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! code/server/app */ "./src/code/server/app.ts");
/* harmony import */ var _ui_serverRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/serverRender */ "./src/code/server/ui/serverRender.tsx");
/* harmony import */ var _getWebpackUrls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWebpackUrls */ "./src/code/server/webpack/getWebpackUrls.ts");



var _this = undefined;






function isAppUrl(req) {
  var url = req.url;
  var nonClientRoutes = ['/app.manifest', '/favicon.ico', '/robots.txt'];

  if (nonClientRoutes.includes(url)) {
    return false;
  }

  return true;
}

code_server_app__WEBPACK_IMPORTED_MODULE_3__["app"].use(function (req, res, next) {
  return tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _ref, webpackUrls, reactLoadableStats;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (isAppUrl(req)) {
              _context.next = 3;
              break;
            }

            next();
            return _context.abrupt("return");

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return Object(_getWebpackUrls__WEBPACK_IMPORTED_MODULE_5__["default"])();

          case 6:
            _ref = _context.sent;
            webpackUrls = _ref.webpackUrls;
            reactLoadableStats = _ref.reactLoadableStats;
            _context.next = 11;
            return Object(_ui_serverRender__WEBPACK_IMPORTED_MODULE_4__["serverRender"])({
              res: res,
              webpackUrls: webpackUrls
            });

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            next(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 13]]);
  }));
});

/***/ }),

/***/ "./src/code/universal/utils/unsubscribeFrom.ts":
/*!*****************************************************!*\
  !*** ./src/code/universal/utils/unsubscribeFrom.ts ***!
  \*****************************************************/
/*! exports provided: unsubscribeFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeFrom", function() { return unsubscribeFrom; });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined;


var unsubscribeFrom = function unsubscribeFrom(subscription) {
  return tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"](_this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof subscription === 'function')) {
              _context.next = 3;
              break;
            }

            subscription();
            return _context.abrupt("return");

          case 3:
            _context.next = 5;
            return subscription.unsubscribe();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
};

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************!*\
  !*** multi core-js/modules/es7.symbol.observable isomorphic-fetch core-js/modules/es7.symbol.async-iterator ./src/code/server/index.ts ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es7.symbol.observable */"core-js/modules/es7.symbol.observable");
__webpack_require__(/*! isomorphic-fetch */"isomorphic-fetch");
__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */"core-js/modules/es7.symbol.async-iterator");
module.exports = __webpack_require__(/*! /Users/clayne/workspace/ts-starter-kit/src/code/server/index.ts */"./src/code/server/index.ts");


/***/ }),

/***/ "core-js/modules/es6.array.from":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.from" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.from");

/***/ }),

/***/ "core-js/modules/es6.array.is-array":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.is-array" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.is-array");

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator");

/***/ }),

/***/ "core-js/modules/es6.array.map":
/*!************************************************!*\
  !*** external "core-js/modules/es6.array.map" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.map");

/***/ }),

/***/ "core-js/modules/es6.date.to-string":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.date.to-string" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.date.to-string");

/***/ }),

/***/ "core-js/modules/es6.promise":
/*!**********************************************!*\
  !*** external "core-js/modules/es6.promise" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise");

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.to-string");

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.iterator");

/***/ }),

/***/ "core-js/modules/es6.string.link":
/*!**************************************************!*\
  !*** external "core-js/modules/es6.string.link" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.link");

/***/ }),

/***/ "core-js/modules/es6.symbol":
/*!*********************************************!*\
  !*** external "core-js/modules/es6.symbol" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.symbol");

/***/ }),

/***/ "core-js/modules/es7.array.includes":
/*!*****************************************************!*\
  !*** external "core-js/modules/es7.array.includes" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.array.includes");

/***/ }),

/***/ "core-js/modules/es7.symbol.async-iterator":
/*!************************************************************!*\
  !*** external "core-js/modules/es7.symbol.async-iterator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.symbol.async-iterator");

/***/ }),

/***/ "core-js/modules/es7.symbol.observable":
/*!********************************************************!*\
  !*** external "core-js/modules/es7.symbol.observable" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.symbol.observable");

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9zZXJ2ZXIvYm9vdHN0cmFwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci9ib290c3RyYXAvcnVuSHR0cFNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9zZXJ2ZXIvYm9vdHN0cmFwL3N0YXJ0dXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL3VpL2NvbXBvbmVudHMvSHRtbERvY3VtZW50L0h0bWxEb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL3VpL2NvbXBvbmVudHMvSHRtbERvY3VtZW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci91aS9zZXJ2ZXJSZW5kZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci91dGlscy9zdGFydHVwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci91dGlscy9zdGFydHVwQ2hlY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9zZXJ2ZXIvdXRpbHMvc3RhcnR1cFN1YmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL3dlYnBhY2svZ2V0V2VicGFja1VybHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL3dlYnBhY2svaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL3dlYnBhY2svcnVudGltZVN0YXRpY1BhdGhzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci93ZWJwYWNrL3dlYnBhY2stbWlkZGxld2FyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS91bml2ZXJzYWwvdXRpbHMvdW5zdWJzY3JpYmVGcm9tLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXMtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LmRhdGUudG8tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5saW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHNsaWJcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9zdGF0aWMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQge2NyZWF0ZVNlcnZlcn0gZnJvbSAnaHR0cCdcblxuZXhwb3J0IGNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5leHBvcnQgY29uc3QgaHR0cFNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApXG4iLCJpbXBvcnQgJ2NvZGUvc2VydmVyL3JvdXRlcydcbmltcG9ydCAnY29kZS9zZXJ2ZXIvd2VicGFjaydcbmltcG9ydCB7c3RhcnR1cH0gZnJvbSAnLi9zdGFydHVwJ1xuXG5zdGFydHVwKClcbiIsImltcG9ydCB7aHR0cFNlcnZlcn0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHt0ZWFyZG93bn0gZnJvbSAnLi4vdXRpbHMvc3RhcnR1cCdcblxuLyogZ2xvYmFscyBQT1JUICovXG5cbmNvbnN0IHJ1bkh0dHBTZXJ2ZXIgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcG9ydCA9IHR5cGVvZiBQT1JUICE9PSAndW5kZWZpbmVkJyA/IFBPUlQgOiBwcm9jZXNzLmVudi5QT1JUXG5cbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEVudmlyb25tZW50IFZhcmlhYmxlIFBPUlQgbXVzdCBiZSBzZXQgdG8gc3RhcnR1cCBhIHNlcnZlcmBcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsYmFjayA9IChlcnI/OiBhbnkpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yIHN0YXJ0aW5nIHVwIGh0dHAgc2VydmVyOiAke2Vycn1gKVxuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coYEhUVFAgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBodHRwU2VydmVyLmxpc3Rlbihwb3J0LCBjYWxsYmFjaylcblxuICAgIHRlYXJkb3duKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGh0dHBTZXJ2ZXIuY2xvc2UoKVxuICAgIH0pXG4gIH0pXG5cbmV4cG9ydCB7cnVuSHR0cFNlcnZlcn1cbiIsImltcG9ydCB7cnVuSHR0cFNlcnZlcn0gZnJvbSAnLi9ydW5IdHRwU2VydmVyJ1xuaW1wb3J0IHtzdGFydHVwU3ViamVjdH0gZnJvbSAnLi4vdXRpbHMvc3RhcnR1cFN1YmplY3QnXG5cbmV4cG9ydCBjb25zdCBzdGFydHVwID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBydW5IdHRwU2VydmVyKClcblxuICBzdGFydHVwU3ViamVjdC5uZXh0KHRydWUpXG59XG4iLCJpbXBvcnQgJ2NvZGUvc2VydmVyL2Jvb3RzdHJhcCdcbiIsImltcG9ydCB7YXBwfSBmcm9tICcuL2FwcCdcbmltcG9ydCB7c3RhcnR1cENoZWNrZXJ9IGZyb20gJy4vdXRpbHMvc3RhcnR1cENoZWNrZXInXG5cbmFwcC5nZXQoJy9waW5nJywgYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IHN0YXJ0dXBDaGVja2VyKClcbiAgICByZXMuZW5kKClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuZW5kKClcbiAgfVxufSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBIdG1sRG9jdW1lbnRQcm9wcyB7XG4gIGFwb2xsb0NsaWVudFN0YXRlPzogT2JqZWN0XG4gIGNzcz86IEFycmF5PHN0cmluZz5cbiAgaGVhZD86IHN0cmluZ1xuICBoZWxtZXRIZWFkPzogYW55XG4gIGlubGluZUNzcz86IGFueVxuICBtYXJrdXA/OiBzdHJpbmdcbiAgc2NyaXB0cz86IEFycmF5PHN0cmluZz5cbiAgc3RvcmVTdGF0ZT86IE9iamVjdFxuICBzdHlsZUVsZW1lbnRzPzogQXJyYXk8UmVhY3QuUmVhY3ROb2RlPlxufVxuXG5jb25zdCBIdG1sRG9jdW1lbnQ6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxIdG1sRG9jdW1lbnRQcm9wcz4gPSAoe1xuICBhcG9sbG9DbGllbnRTdGF0ZSxcbiAgaGVhZCxcbiAgaGVsbWV0SGVhZCxcbiAgaW5saW5lQ3NzLFxuICBtYXJrdXAsXG4gIHN0eWxlRWxlbWVudHMsXG4gIGNzcyA9IFtdLFxuICBzY3JpcHRzID0gW10sXG4gIHN0b3JlU3RhdGUgPSB7fSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCB7Li4uaGVsbWV0SGVhZCAmJiBoZWxtZXRIZWFkLmh0bWxBdHRyaWJ1dGVzLnRvQ29tcG9uZW50KCl9PlxuICAgICAgPGhlYWQ+XG4gICAgICAgIHtzY3JpcHRzLm1hcChzcmMgPT4gKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgICBrZXk6IHNyYyxcbiAgICAgICAgICAgICAgcmVsOiAncHJlbG9hZCcsXG4gICAgICAgICAgICAgIGFzOiAnc2NyaXB0JyxcbiAgICAgICAgICAgICAgaHJlZjogc3JjLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cblxuICAgICAgICB7ISFoZWFkICYmIGhlYWR9XG4gICAgICAgIHtoZWxtZXRIZWFkICYmIGhlbG1ldEhlYWQuYmFzZS50b0NvbXBvbmVudCgpfVxuICAgICAgICB7aGVsbWV0SGVhZCAmJiBoZWxtZXRIZWFkLmxpbmsudG9Db21wb25lbnQoKX1cbiAgICAgICAge2hlbG1ldEhlYWQgJiYgaGVsbWV0SGVhZC5tZXRhLnRvQ29tcG9uZW50KCl9XG4gICAgICAgIHtoZWxtZXRIZWFkICYmIGhlbG1ldEhlYWQuc2NyaXB0LnRvQ29tcG9uZW50KCl9XG4gICAgICAgIHtoZWxtZXRIZWFkICYmIGhlbG1ldEhlYWQuc3R5bGUudG9Db21wb25lbnQoKX1cbiAgICAgICAge2hlbG1ldEhlYWQgJiYgaGVsbWV0SGVhZC50aXRsZS50b0NvbXBvbmVudCgpfVxuXG4gICAgICAgIDxtZXRhIHsuLi57Y2hhclNldDogJ3V0Zi04J319IC8+XG5cbiAgICAgICAgeyEhaW5saW5lQ3NzICYmIChcbiAgICAgICAgICA8c3R5bGUgey4uLntkYW5nZXJvdXNseVNldElubmVySFRNTDoge19faHRtbDogaW5saW5lQ3NzfX19IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFNldHMgYXBwbGljYXRpb24gc3RhdGUgaW50byBhIGdsb2JhbCB2YXJpYWJsZSAqL31cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICBfX2h0bWw6IGB3aW5kb3cuX19JTklUSUFMX1NUQVRFX189JHtKU09OLnN0cmluZ2lmeShzdG9yZVN0YXRlKX1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBTZXRzIGFwb2xsbyBzdGF0ZSBpbnRvIGEgZ2xvYmFsIHZhcmlhYmxlICovfVxuICAgICAgICB7YXBvbGxvQ2xpZW50U3RhdGUgJiYgKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgd2luZG93Ll9fQVBPTExPX0NMSUVOVF9TVEFURV9fPSR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgICBhcG9sbG9DbGllbnRTdGF0ZVxuICAgICAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7c3R5bGVFbGVtZW50c31cblxuICAgICAgICB7LyogTGlzdGluZyBhbGwgY3NzIGZpbGVzIGZyb20gd2VicGFjayAqL31cbiAgICAgICAge2Nzcy5tYXAoKGhyZWYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgIGhyZWYsXG4gICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvaGVhZD5cblxuICAgICAgPGJvZHk+XG4gICAgICAgIHsvKiBBZGRzIG1hcmt1cCBmb3IgYSBnaXZlbiByb3V0ZSBlbGVtZW50ICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgey4uLntcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ1Jvb3ROb2RlJyxcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7X19odG1sOiBtYXJrdXAgPyBtYXJrdXAgOiAnJ30sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogQWRkcyBhbGwgc2NyaXB0cyBmcm9tIHdlYnBhY2sgKi99XG4gICAgICAgIHtzY3JpcHRzLm1hcChzcmMgPT4gKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICAgIGtleTogc3JjLFxuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIdG1sRG9jdW1lbnRcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9IdG1sRG9jdW1lbnQnXG4iLCJpbXBvcnQge1NlcnZlclJlc3BvbnNlfSBmcm9tICdodHRwJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJUb1N0YXRpY01hcmt1cH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCBIdG1sRG9jdW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL0h0bWxEb2N1bWVudCdcblxuaW50ZXJmYWNlIFJlbmRlckh0bWxEb2N1bWVudFBhcmFtcyB7XG4gIGFwb2xsb0NsaWVudFN0YXRlPzogT2JqZWN0XG4gIGhlYWQ/OiBzdHJpbmdcbiAgaGVsbWV0SGVhZD86IGFueVxuICBtYXJrdXA/OiBzdHJpbmdcbiAgcmVzOiBTZXJ2ZXJSZXNwb25zZVxuICB3ZWJwYWNrVXJsczoge1xuICAgICd2ZW5kb3Jzfm1haW4nOiB7anM6IHN0cmluZ31cbiAgICBtYWluOiB7anM6IHN0cmluZ31cbiAgfVxuICBzdHlsZUVsZW1lbnRzPzogQXJyYXk8UmVhY3QuUmVhY3ROb2RlPlxuICBidW5kbGVzPzogQXJyYXk8c3RyaW5nPlxufVxuY29uc3QgcmVuZGVySHRtbERvY3VtZW50ID0gKHtcbiAgYXBvbGxvQ2xpZW50U3RhdGUsXG4gIGhlYWQsXG4gIGhlbG1ldEhlYWQsXG4gIG1hcmt1cCxcbiAgcmVzLFxuICB3ZWJwYWNrVXJscyxcbiAgc3R5bGVFbGVtZW50cyxcbiAgYnVuZGxlcyA9IFtdLFxufTogUmVuZGVySHRtbERvY3VtZW50UGFyYW1zKSA9PiB7XG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBjb21wb25lbnQgaXMgcmVuZGVyZWQgdG8gc3RhdGljIG1hcmt1cFxuICAvLyBhbmQgc2VudCBhcyByZXNwb25zZS5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT5cbiAgICByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAgIDxIdG1sRG9jdW1lbnRcbiAgICAgICAgey4uLntcbiAgICAgICAgICBhcG9sbG9DbGllbnRTdGF0ZSxcbiAgICAgICAgICBoZWFkLFxuICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgIHdlYnBhY2tVcmxzLm1haW4uanMsXG4gICAgICAgICAgICB3ZWJwYWNrVXJsc1sndmVuZG9yc35tYWluJ10uanMsXG4gICAgICAgICAgICAuLi5idW5kbGVzLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgaGVsbWV0SGVhZCxcbiAgICAgICAgICBtYXJrdXAsXG4gICAgICAgICAgc3R5bGVFbGVtZW50cyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKVxuICBjb25zdCBodG1sID0gcmVuZGVyKClcbiAgY29uc3QgZG9jdHlwZSA9ICc8IURPQ1RZUEUgaHRtbD4nXG4gIHJlcy53cml0ZShkb2N0eXBlICsgaHRtbClcbiAgcmVzLmVuZCgpXG59XG5cbmludGVyZmFjZSBSZW5kZXJQYXJhbXMge1xuICByZXM6IFNlcnZlclJlc3BvbnNlXG4gIHdlYnBhY2tVcmxzOiB7XG4gICAgJ3ZlbmRvcnN+bWFpbic6IHtqczogc3RyaW5nfVxuICAgIG1haW46IHtqczogc3RyaW5nfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXJSZW5kZXIgPSBhc3luYyAoe3Jlcywgd2VicGFja1VybHN9OiBSZW5kZXJQYXJhbXMpID0+IHtcbiAgYXdhaXQgcmVuZGVySHRtbERvY3VtZW50KHtcbiAgICByZXMsXG4gICAgd2VicGFja1VybHMsXG4gIH0pXG59XG5cbmV4cG9ydCB7SHRtbERvY3VtZW50fVxuIiwiaW1wb3J0IHtVbnN1YnNjcmliYWJsZX0gZnJvbSAnLi4vLi4vdHlwaW5ncy9VbnN1YnNjcmliYWJsZSdcbmltcG9ydCB7dW5zdWJzY3JpYmVGcm9tfSBmcm9tICcuLi8uLi91bml2ZXJzYWwvdXRpbHMvdW5zdWJzY3JpYmVGcm9tJ1xuXG5pbnRlcmZhY2UgU3RhcnR1cEZ1bmMge1xuICAoKTogVW5zdWJzY3JpYmFibGUgfCB2b2lkIHwgUHJvbWlzZTxVbnN1YnNjcmliYWJsZSB8IHZvaWQ+XG59XG5cbmxldCBmbnNUb1N0YXJ0dXAgPSBbXSBhcyBBcnJheTxTdGFydHVwRnVuYz5cbmxldCB1bnN1YnNjcmliYWJsZXNUb1RlYXJkb3duID0gW10gYXMgQXJyYXk8VW5zdWJzY3JpYmFibGU+XG5cbmxldCBpc1N0YXJ0ZWQgPSBmYWxzZVxuXG5leHBvcnQgY29uc3Qgc3RhcnR1cCA9IGFzeW5jIChmdW5jOiBTdGFydHVwRnVuYykgPT4ge1xuICBpZiAoaXNTdGFydGVkKSB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmFibGVUb1RlYXJkb3duID0gYXdhaXQgZnVuYygpXG4gICAgaWYgKHVuc3Vic2NyaWJhYmxlVG9UZWFyZG93bikge1xuICAgICAgdW5zdWJzY3JpYmFibGVzVG9UZWFyZG93bi5wdXNoKHVuc3Vic2NyaWJhYmxlVG9UZWFyZG93bilcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgZm5zVG9TdGFydHVwLnB1c2goZnVuYylcbn1cblxuZXhwb3J0IGNvbnN0IHJ1blN0YXJ0dXAgPSBhc3luYyAoKSA9PiB7XG4gIGlzU3RhcnRlZCA9IHRydWVcblxuICBhd2FpdCBQcm9taXNlLmFsbChmbnNUb1N0YXJ0dXAubWFwKHN0YXJ0dXApKVxufVxuXG5leHBvcnQgY29uc3QgdGVhcmRvd24gPSB1bnN1YnNjcmliYWJsZSA9PiB7XG4gIGlmICh1bnN1YnNjcmliYWJsZSkge1xuICAgIHVuc3Vic2NyaWJhYmxlc1RvVGVhcmRvd24ucHVzaCh1bnN1YnNjcmliYWJsZSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcnVuVGVhcmRvd24gPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IFByb21pc2UuYWxsKHVuc3Vic2NyaWJhYmxlc1RvVGVhcmRvd24ubWFwKHVuc3Vic2NyaWJlRnJvbSkpXG4gIGZuc1RvU3RhcnR1cCA9IFtdXG4gIHVuc3Vic2NyaWJhYmxlc1RvVGVhcmRvd24gPSBbXVxuXG4gIGlzU3RhcnRlZCA9IGZhbHNlXG59XG4iLCJpbXBvcnQge3RlYXJkb3dufSBmcm9tICcuL3N0YXJ0dXAnXG5pbXBvcnQge3N0YXJ0dXBTdWJqZWN0fSBmcm9tICcuL3N0YXJ0dXBTdWJqZWN0J1xuaW1wb3J0IHt1bnN1YnNjcmliZUZyb219IGZyb20gJ2NvZGUvdW5pdmVyc2FsL3V0aWxzL3Vuc3Vic2NyaWJlRnJvbSdcblxuY29uc3QgTUFYX1NUQVJUVVBfU0VDT05EUyA9IDYwXG5jb25zdCBNQVhfU1RBUlRVUF9USU1FID0gTUFYX1NUQVJUVVBfU0VDT05EUyAqIDEwMDBcblxubGV0IHN0YXJ0dXBIYW5kbGVyXG5sZXQgdW5zdWJzY3JpYmVTdGFydHVwXG5cbmNvbnN0IHN0YXJ0dXBQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gIHN0YXJ0dXBIYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVzb2x2ZShmYWxzZSlcbiAgfSwgTUFYX1NUQVJUVVBfVElNRSlcbiAgdW5zdWJzY3JpYmVTdGFydHVwID0gc3RhcnR1cFN1YmplY3Quc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQoc3RhcnR1cEhhbmRsZXIpXG4gICAgcmVzb2x2ZSh0cnVlKVxuICB9KVxufSlcblxuZXhwb3J0IGNvbnN0IHN0YXJ0dXBDaGVja2VyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzdGFydGVkID0gYXdhaXQgc3RhcnR1cFByb21pc2VcbiAgaWYgKCFzdGFydGVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgZmFpbGVkIHRvIHN0YXJ0IGluICR7TUFYX1NUQVJUVVBfU0VDT05EU30gc2Vjb25kc2ApXG4gIH1cbn1cblxudGVhcmRvd24oKCkgPT4ge1xuICBjbGVhclRpbWVvdXQoc3RhcnR1cEhhbmRsZXIpXG4gIHVuc3Vic2NyaWJlRnJvbSh1bnN1YnNjcmliZVN0YXJ0dXApXG59KVxuIiwiaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJ1xuXG5leHBvcnQgY29uc3Qgc3RhcnR1cFN1YmplY3QgPSBuZXcgU3ViamVjdCgpXG4iLCJpbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHtnZXRSdW50aW1lU3RhdGljUGF0aHN9IGZyb20gJy4vcnVudGltZVN0YXRpY1BhdGhzJ1xuXG5sZXQgd2VicGFja1VybHNcbmxldCBnZXRXZWJwYWNrVXJsc1xubGV0IHJlYWN0TG9hZGFibGVTdGF0c1xuXG5jb25zdCBzdGF0c1BhdGggPSBwYXRoLmpvaW4oXG4gIGdldFJ1bnRpbWVTdGF0aWNQYXRocygpLnNlcnZlcixcbiAgJ3dlYnBhY2stc3RhdHMuanNvbidcbilcbmNvbnN0IHJlYWN0TG9hZGFibGVQYXRoID0gcGF0aC5qb2luKFxuICBnZXRSdW50aW1lU3RhdGljUGF0aHMoKS5zZXJ2ZXIsXG4gICdyZWFjdC1sb2FkYWJsZS5qc29uJ1xuKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBYWFg6IEhhcmRjb2RlZCB3YXkgb2YgZ2V0dGluZyB0byB0aGUgcm9vdCBvZiB0aGUgcHJvamVjdFxuICBnZXRXZWJwYWNrVXJscyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXdlYnBhY2tVcmxzKSB7XG4gICAgICB0cnkge1xuICAgICAgICB3ZWJwYWNrVXJscyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHN0YXRzUGF0aCwgJ3V0ZjgnKSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFyZWFjdExvYWRhYmxlU3RhdHMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlYWN0TG9hZGFibGVTdGF0cyA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgZnMucmVhZEZpbGVTeW5jKHJlYWN0TG9hZGFibGVQYXRoLCAndXRmOCcpXG4gICAgICAgIClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgd2VicGFja1VybHMsXG4gICAgICByZWFjdExvYWRhYmxlU3RhdHMsXG4gICAgfVxuICB9XG59IGVsc2Uge1xuICB3ZWJwYWNrVXJscyA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHN0YXRzUGF0aCwgJ3V0ZjgnKSlcbiAgcmVhY3RMb2FkYWJsZVN0YXRzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocmVhY3RMb2FkYWJsZVBhdGgsICd1dGY4JykpXG4gIGdldFdlYnBhY2tVcmxzID0gYXN5bmMgKCkgPT4gKHt3ZWJwYWNrVXJscywgcmVhY3RMb2FkYWJsZVN0YXRzfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VicGFja1VybHNcbiIsImltcG9ydCAnLi93ZWJwYWNrLW1pZGRsZXdhcmUnXG4iLCJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY29uc3QgZ2V0UnVudGltZVN0YXRpY1BhdGhzID0gKCkgPT4ge1xuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKVxuXG4gIHJldHVybiB7XG4gICAgc2VydmVyOiBwYXRoLmpvaW4ocm9vdCwgJ2xpYicsICdzZXJ2ZXInKSxcbiAgICBjbGllbnQ6IHBhdGguam9pbihyb290LCAnbGliJywgJ2NsaWVudCcpLFxuICB9XG59XG4iLCJpbXBvcnQge2FwcH0gZnJvbSAnY29kZS9zZXJ2ZXIvYXBwJ1xuaW1wb3J0IHtzZXJ2ZXJSZW5kZXJ9IGZyb20gJy4uL3VpL3NlcnZlclJlbmRlcidcbmltcG9ydCBnZXRXZWJwYWNrVXJscyBmcm9tICcuL2dldFdlYnBhY2tVcmxzJ1xuXG5mdW5jdGlvbiBpc0FwcFVybChyZXEpIHtcbiAgY29uc3QgdXJsID0gcmVxLnVybFxuICBjb25zdCBub25DbGllbnRSb3V0ZXMgPSBbJy9hcHAubWFuaWZlc3QnLCAnL2Zhdmljb24uaWNvJywgJy9yb2JvdHMudHh0J11cbiAgaWYgKG5vbkNsaWVudFJvdXRlcy5pbmNsdWRlcyh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5hcHAudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoIWlzQXBwVXJsKHJlcSkpIHtcbiAgICBuZXh0KClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3Qge3dlYnBhY2tVcmxzLCByZWFjdExvYWRhYmxlU3RhdHN9ID0gYXdhaXQgZ2V0V2VicGFja1VybHMoKVxuXG4gICAgYXdhaXQgc2VydmVyUmVuZGVyKHtcbiAgICAgIHJlcyxcbiAgICAgIHdlYnBhY2tVcmxzLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcilcbiAgfVxufSlcbiIsImltcG9ydCB7VW5zdWJzY3JpYmFibGV9IGZyb20gJ2NvZGUvdHlwaW5ncy9VbnN1YnNjcmliYWJsZSdcblxuZXhwb3J0IGNvbnN0IHVuc3Vic2NyaWJlRnJvbSA9IGFzeW5jIChzdWJzY3JpcHRpb246IFVuc3Vic2NyaWJhYmxlKSA9PiB7XG4gIGlmICh0eXBlb2Ygc3Vic2NyaXB0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc3Vic2NyaXB0aW9uKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGF3YWl0IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pcy1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkubWFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuZGF0ZS50by1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5saW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHNsaWJcIik7Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUEzQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFHQTtBQUhBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBYUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBbUJBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQURBO0FBV0E7QUFDQTtBQURBO0FBREE7QUFhQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFHQTtBQUNBO0FBRkE7QUFGQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVZBO0FBSEE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFNQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBSEE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBREE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUZBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCQSxTQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBUkE7QUFBQTtBQU9BO0FBQUE7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=