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
/* harmony import */ var _startup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startup */ "./src/code/server/bootstrap/startup.ts");


Object(_startup__WEBPACK_IMPORTED_MODULE_1__["startup"])();

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

/***/ "core-js/modules/es6.promise":
/*!**********************************************!*\
  !*** external "core-js/modules/es6.promise" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise");

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.iterator");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9zZXJ2ZXIvYm9vdHN0cmFwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci9ib290c3RyYXAvcnVuSHR0cFNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9zZXJ2ZXIvYm9vdHN0cmFwL3N0YXJ0dXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL3V0aWxzL3N0YXJ0dXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvc2VydmVyL3V0aWxzL3N0YXJ0dXBDaGVja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlL3NlcnZlci91dGlscy9zdGFydHVwU3ViamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS91bml2ZXJzYWwvdXRpbHMvdW5zdWJzY3JpYmVGcm9tLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm1hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHNsaWJcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9zdGF0aWMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQge2NyZWF0ZVNlcnZlcn0gZnJvbSAnaHR0cCdcblxuZXhwb3J0IGNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5leHBvcnQgY29uc3QgaHR0cFNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApXG4iLCJpbXBvcnQgJ2NvZGUvc2VydmVyL3JvdXRlcydcbmltcG9ydCB7c3RhcnR1cH0gZnJvbSAnLi9zdGFydHVwJ1xuXG5zdGFydHVwKClcbiIsImltcG9ydCB7aHR0cFNlcnZlcn0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHt0ZWFyZG93bn0gZnJvbSAnLi4vdXRpbHMvc3RhcnR1cCdcblxuLyogZ2xvYmFscyBQT1JUICovXG5cbmNvbnN0IHJ1bkh0dHBTZXJ2ZXIgPSAoKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcG9ydCA9IHR5cGVvZiBQT1JUICE9PSAndW5kZWZpbmVkJyA/IFBPUlQgOiBwcm9jZXNzLmVudi5QT1JUXG5cbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEVudmlyb25tZW50IFZhcmlhYmxlIFBPUlQgbXVzdCBiZSBzZXQgdG8gc3RhcnR1cCBhIHNlcnZlcmBcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsYmFjayA9IChlcnI/OiBhbnkpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yIHN0YXJ0aW5nIHVwIGh0dHAgc2VydmVyOiAke2Vycn1gKVxuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5sb2coYEhUVFAgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBodHRwU2VydmVyLmxpc3Rlbihwb3J0LCBjYWxsYmFjaylcblxuICAgIHRlYXJkb3duKGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IGh0dHBTZXJ2ZXIuY2xvc2UoKVxuICAgIH0pXG4gIH0pXG5cbmV4cG9ydCB7cnVuSHR0cFNlcnZlcn1cbiIsImltcG9ydCB7cnVuSHR0cFNlcnZlcn0gZnJvbSAnLi9ydW5IdHRwU2VydmVyJ1xuaW1wb3J0IHtzdGFydHVwU3ViamVjdH0gZnJvbSAnLi4vdXRpbHMvc3RhcnR1cFN1YmplY3QnXG5cbmV4cG9ydCBjb25zdCBzdGFydHVwID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBydW5IdHRwU2VydmVyKClcblxuICBzdGFydHVwU3ViamVjdC5uZXh0KHRydWUpXG59XG4iLCJpbXBvcnQgJ2NvZGUvc2VydmVyL2Jvb3RzdHJhcCdcbiIsImltcG9ydCB7YXBwfSBmcm9tICcuL2FwcCdcbmltcG9ydCB7c3RhcnR1cENoZWNrZXJ9IGZyb20gJy4vdXRpbHMvc3RhcnR1cENoZWNrZXInXG5cbmFwcC5nZXQoJy9waW5nJywgYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IHN0YXJ0dXBDaGVja2VyKClcbiAgICByZXMuZW5kKClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuZW5kKClcbiAgfVxufSlcbiIsImltcG9ydCB7VW5zdWJzY3JpYmFibGV9IGZyb20gJy4uLy4uL3R5cGluZ3MvVW5zdWJzY3JpYmFibGUnXG5pbXBvcnQge3Vuc3Vic2NyaWJlRnJvbX0gZnJvbSAnLi4vLi4vdW5pdmVyc2FsL3V0aWxzL3Vuc3Vic2NyaWJlRnJvbSdcblxuaW50ZXJmYWNlIFN0YXJ0dXBGdW5jIHtcbiAgKCk6IFVuc3Vic2NyaWJhYmxlIHwgdm9pZCB8IFByb21pc2U8VW5zdWJzY3JpYmFibGUgfCB2b2lkPlxufVxuXG5sZXQgZm5zVG9TdGFydHVwID0gW10gYXMgQXJyYXk8U3RhcnR1cEZ1bmM+XG5sZXQgdW5zdWJzY3JpYmFibGVzVG9UZWFyZG93biA9IFtdIGFzIEFycmF5PFVuc3Vic2NyaWJhYmxlPlxuXG5sZXQgaXNTdGFydGVkID0gZmFsc2VcblxuZXhwb3J0IGNvbnN0IHN0YXJ0dXAgPSBhc3luYyAoZnVuYzogU3RhcnR1cEZ1bmMpID0+IHtcbiAgaWYgKGlzU3RhcnRlZCkge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJhYmxlVG9UZWFyZG93biA9IGF3YWl0IGZ1bmMoKVxuICAgIGlmICh1bnN1YnNjcmliYWJsZVRvVGVhcmRvd24pIHtcbiAgICAgIHVuc3Vic2NyaWJhYmxlc1RvVGVhcmRvd24ucHVzaCh1bnN1YnNjcmliYWJsZVRvVGVhcmRvd24pXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGZuc1RvU3RhcnR1cC5wdXNoKGZ1bmMpXG59XG5cbmV4cG9ydCBjb25zdCBydW5TdGFydHVwID0gYXN5bmMgKCkgPT4ge1xuICBpc1N0YXJ0ZWQgPSB0cnVlXG5cbiAgYXdhaXQgUHJvbWlzZS5hbGwoZm5zVG9TdGFydHVwLm1hcChzdGFydHVwKSlcbn1cblxuZXhwb3J0IGNvbnN0IHRlYXJkb3duID0gdW5zdWJzY3JpYmFibGUgPT4ge1xuICBpZiAodW5zdWJzY3JpYmFibGUpIHtcbiAgICB1bnN1YnNjcmliYWJsZXNUb1RlYXJkb3duLnB1c2godW5zdWJzY3JpYmFibGUpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJ1blRlYXJkb3duID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBQcm9taXNlLmFsbCh1bnN1YnNjcmliYWJsZXNUb1RlYXJkb3duLm1hcCh1bnN1YnNjcmliZUZyb20pKVxuICBmbnNUb1N0YXJ0dXAgPSBbXVxuICB1bnN1YnNjcmliYWJsZXNUb1RlYXJkb3duID0gW11cblxuICBpc1N0YXJ0ZWQgPSBmYWxzZVxufVxuIiwiaW1wb3J0IHt0ZWFyZG93bn0gZnJvbSAnLi9zdGFydHVwJ1xuaW1wb3J0IHtzdGFydHVwU3ViamVjdH0gZnJvbSAnLi9zdGFydHVwU3ViamVjdCdcbmltcG9ydCB7dW5zdWJzY3JpYmVGcm9tfSBmcm9tICdjb2RlL3VuaXZlcnNhbC91dGlscy91bnN1YnNjcmliZUZyb20nXG5cbmNvbnN0IE1BWF9TVEFSVFVQX1NFQ09ORFMgPSA2MFxuY29uc3QgTUFYX1NUQVJUVVBfVElNRSA9IE1BWF9TVEFSVFVQX1NFQ09ORFMgKiAxMDAwXG5cbmxldCBzdGFydHVwSGFuZGxlclxubGV0IHVuc3Vic2NyaWJlU3RhcnR1cFxuXG5jb25zdCBzdGFydHVwUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICBzdGFydHVwSGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHJlc29sdmUoZmFsc2UpXG4gIH0sIE1BWF9TVEFSVFVQX1RJTUUpXG4gIHVuc3Vic2NyaWJlU3RhcnR1cCA9IHN0YXJ0dXBTdWJqZWN0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHN0YXJ0dXBIYW5kbGVyKVxuICAgIHJlc29sdmUodHJ1ZSlcbiAgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBzdGFydHVwQ2hlY2tlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc3RhcnRlZCA9IGF3YWl0IHN0YXJ0dXBQcm9taXNlXG4gIGlmICghc3RhcnRlZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIGZhaWxlZCB0byBzdGFydCBpbiAke01BWF9TVEFSVFVQX1NFQ09ORFN9IHNlY29uZHNgKVxuICB9XG59XG5cbnRlYXJkb3duKCgpID0+IHtcbiAgY2xlYXJUaW1lb3V0KHN0YXJ0dXBIYW5kbGVyKVxuICB1bnN1YnNjcmliZUZyb20odW5zdWJzY3JpYmVTdGFydHVwKVxufSlcbiIsImltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcydcblxuZXhwb3J0IGNvbnN0IHN0YXJ0dXBTdWJqZWN0ID0gbmV3IFN1YmplY3QoKVxuIiwiaW1wb3J0IHtVbnN1YnNjcmliYWJsZX0gZnJvbSAnY29kZS90eXBpbmdzL1Vuc3Vic2NyaWJhYmxlJ1xuXG5leHBvcnQgY29uc3QgdW5zdWJzY3JpYmVGcm9tID0gYXN5bmMgKHN1YnNjcmlwdGlvbjogVW5zdWJzY3JpYmFibGUpID0+IHtcbiAgaWYgKHR5cGVvZiBzdWJzY3JpcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBzdWJzY3JpcHRpb24oKVxuICAgIHJldHVyblxuICB9XG5cbiAgYXdhaXQgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5tYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHNsaWJcIik7Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQTNCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUdBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQURBO0FBQUE7QUFNQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9