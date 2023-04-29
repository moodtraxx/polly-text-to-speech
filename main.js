/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=CryptoOperation.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/Key.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/Key.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=Key.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=KeyOperation.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=MsSubtleCrypto.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/MsWindow.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/MsWindow.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isMsWindow = void 0;
var msSubtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
];
function quacksLikeAnMsWindow(window) {
    return "MSInputMethodContext" in window && "msCrypto" in window;
}
/**
 * Determines if the provided window is (or is like) the window object one would
 * expect to encounter in Internet Explorer 11.
 */
function isMsWindow(window) {
    if (quacksLikeAnMsWindow(window) && window.msCrypto.subtle !== undefined) {
        var _a = window.msCrypto, getRandomValues = _a.getRandomValues, subtle_1 = _a.subtle;
        return msSubtleCryptoMethods
            .map(function (methodName) { return subtle_1[methodName]; })
            .concat(getRandomValues)
            .every(function (method) { return typeof method === "function"; });
    }
    return false;
}
exports.isMsWindow = isMsWindow;
//# sourceMappingURL=MsWindow.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/build/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/build/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./CryptoOperation */ "./node_modules/@aws-crypto/ie11-detection/build/CryptoOperation.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./Key */ "./node_modules/@aws-crypto/ie11-detection/build/Key.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./KeyOperation */ "./node_modules/@aws-crypto/ie11-detection/build/KeyOperation.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./MsSubtleCrypto */ "./node_modules/@aws-crypto/ie11-detection/build/MsSubtleCrypto.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./MsWindow */ "./node_modules/@aws-crypto/ie11-detection/build/MsWindow.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-crypto/ie11-detection/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/constants.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/constants.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EMPTY_DATA_SHA_256 = exports.SHA_256_HMAC_ALGO = exports.SHA_256_HASH = void 0;
exports.SHA_256_HASH = { name: "SHA-256" };
exports.SHA_256_HMAC_ALGO = {
    name: "HMAC",
    hash: exports.SHA_256_HASH
};
exports.EMPTY_DATA_SHA_256 = new Uint8Array([
    227,
    176,
    196,
    66,
    152,
    252,
    28,
    20,
    154,
    251,
    244,
    200,
    153,
    111,
    185,
    36,
    39,
    174,
    65,
    228,
    100,
    155,
    147,
    76,
    164,
    149,
    153,
    27,
    120,
    82,
    184,
    85
]);
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sha256 = void 0;
var ie11Sha256_1 = __webpack_require__(/*! ./ie11Sha256 */ "./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js");
var webCryptoSha256_1 = __webpack_require__(/*! ./webCryptoSha256 */ "./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js");
var sha256_js_1 = __webpack_require__(/*! @aws-crypto/sha256-js */ "./node_modules/@aws-crypto/sha256-js/build/index.js");
var supports_web_crypto_1 = __webpack_require__(/*! @aws-crypto/supports-web-crypto */ "./node_modules/@aws-crypto/supports-web-crypto/build/index.js");
var ie11_detection_1 = __webpack_require__(/*! @aws-crypto/ie11-detection */ "./node_modules/@aws-crypto/ie11-detection/build/index.js");
var util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ "./node_modules/@aws-sdk/util-locate-window/dist-es/index.js");
var util_1 = __webpack_require__(/*! @aws-crypto/util */ "./node_modules/@aws-crypto/util/build/index.js");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        if ((0, supports_web_crypto_1.supportsWebCrypto)((0, util_locate_window_1.locateWindow)())) {
            this.hash = new webCryptoSha256_1.Sha256(secret);
        }
        else if ((0, ie11_detection_1.isMsWindow)((0, util_locate_window_1.locateWindow)())) {
            this.hash = new ie11Sha256_1.Sha256(secret);
        }
        else {
            this.hash = new sha256_js_1.Sha256(secret);
        }
    }
    Sha256.prototype.update = function (data, encoding) {
        this.hash.update((0, util_1.convertToBuffer)(data));
    };
    Sha256.prototype.digest = function () {
        return this.hash.digest();
    };
    Sha256.prototype.reset = function () {
        this.hash.reset();
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
//# sourceMappingURL=crossPlatformSha256.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sha256 = void 0;
var isEmptyData_1 = __webpack_require__(/*! ./isEmptyData */ "./node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@aws-crypto/sha256-browser/build/constants.js");
var util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js");
var util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ "./node_modules/@aws-sdk/util-locate-window/dist-es/index.js");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.secret = secret;
        this.reset();
    }
    Sha256.prototype.update = function (toHash) {
        var _this = this;
        if ((0, isEmptyData_1.isEmptyData)(toHash)) {
            return;
        }
        this.operation = this.operation.then(function (operation) {
            operation.onerror = function () {
                _this.operation = Promise.reject(new Error("Error encountered updating hash"));
            };
            operation.process(toArrayBufferView(toHash));
            return operation;
        });
        this.operation.catch(function () { });
    };
    Sha256.prototype.digest = function () {
        return this.operation.then(function (operation) {
            return new Promise(function (resolve, reject) {
                operation.onerror = function () {
                    reject(new Error("Error encountered finalizing hash"));
                };
                operation.oncomplete = function () {
                    if (operation.result) {
                        resolve(new Uint8Array(operation.result));
                    }
                    reject(new Error("Error encountered finalizing hash"));
                };
                operation.finish();
            });
        });
    };
    Sha256.prototype.reset = function () {
        if (this.secret) {
            this.operation = getKeyPromise(this.secret).then(function (keyData) {
                return (0, util_locate_window_1.locateWindow)().msCrypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, keyData);
            });
            this.operation.catch(function () { });
        }
        else {
            this.operation = Promise.resolve((0, util_locate_window_1.locateWindow)().msCrypto.subtle.digest("SHA-256"));
        }
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
function getKeyPromise(secret) {
    return new Promise(function (resolve, reject) {
        var keyOperation = (0, util_locate_window_1.locateWindow)().msCrypto.subtle.importKey("raw", toArrayBufferView(secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"]);
        keyOperation.oncomplete = function () {
            if (keyOperation.result) {
                resolve(keyOperation.result);
            }
            reject(new Error("ImportKey completed without importing key."));
        };
        keyOperation.onerror = function () {
            reject(new Error("ImportKey failed to import key."));
        };
    });
}
function toArrayBufferView(data) {
    if (typeof data === "string") {
        return (0, util_utf8_browser_1.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
//# sourceMappingURL=ie11Sha256.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebCryptoSha256 = exports.Ie11Sha256 = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./crossPlatformSha256 */ "./node_modules/@aws-crypto/sha256-browser/build/crossPlatformSha256.js"), exports);
var ie11Sha256_1 = __webpack_require__(/*! ./ie11Sha256 */ "./node_modules/@aws-crypto/sha256-browser/build/ie11Sha256.js");
Object.defineProperty(exports, "Ie11Sha256", ({ enumerable: true, get: function () { return ie11Sha256_1.Sha256; } }));
var webCryptoSha256_1 = __webpack_require__(/*! ./webCryptoSha256 */ "./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js");
Object.defineProperty(exports, "WebCryptoSha256", ({ enumerable: true, get: function () { return webCryptoSha256_1.Sha256; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/isEmptyData.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData;
//# sourceMappingURL=isEmptyData.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/build/webCryptoSha256.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sha256 = void 0;
var util_1 = __webpack_require__(/*! @aws-crypto/util */ "./node_modules/@aws-crypto/util/build/index.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@aws-crypto/sha256-browser/build/constants.js");
var util_locate_window_1 = __webpack_require__(/*! @aws-sdk/util-locate-window */ "./node_modules/@aws-sdk/util-locate-window/dist-es/index.js");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.toHash = new Uint8Array(0);
        this.secret = secret;
        this.reset();
    }
    Sha256.prototype.update = function (data) {
        if ((0, util_1.isEmptyData)(data)) {
            return;
        }
        var update = (0, util_1.convertToBuffer)(data);
        var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
        typedArray.set(this.toHash, 0);
        typedArray.set(update, this.toHash.byteLength);
        this.toHash = typedArray;
    };
    Sha256.prototype.digest = function () {
        var _this = this;
        if (this.key) {
            return this.key.then(function (key) {
                return (0, util_locate_window_1.locateWindow)()
                    .crypto.subtle.sign(constants_1.SHA_256_HMAC_ALGO, key, _this.toHash)
                    .then(function (data) { return new Uint8Array(data); });
            });
        }
        if ((0, util_1.isEmptyData)(this.toHash)) {
            return Promise.resolve(constants_1.EMPTY_DATA_SHA_256);
        }
        return Promise.resolve()
            .then(function () {
            return (0, util_locate_window_1.locateWindow)().crypto.subtle.digest(constants_1.SHA_256_HASH, _this.toHash);
        })
            .then(function (data) { return Promise.resolve(new Uint8Array(data)); });
    };
    Sha256.prototype.reset = function () {
        var _this = this;
        this.toHash = new Uint8Array(0);
        if (this.secret && this.secret !== void 0) {
            this.key = new Promise(function (resolve, reject) {
                (0, util_locate_window_1.locateWindow)()
                    .crypto.subtle.importKey("raw", (0, util_1.convertToBuffer)(_this.secret), constants_1.SHA_256_HMAC_ALGO, false, ["sign"])
                    .then(resolve, reject);
            });
            this.key.catch(function () { });
        }
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
//# sourceMappingURL=webCryptoSha256.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-browser/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/RawSha256.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/RawSha256.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RawSha256 = void 0;
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@aws-crypto/sha256-js/build/constants.js");
/**
 * @internal
 */
var RawSha256 = /** @class */ (function () {
    function RawSha256() {
        this.state = Int32Array.from(constants_1.INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        /**
         * @internal
         */
        this.finished = false;
    }
    RawSha256.prototype.update = function (data) {
        if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > constants_1.MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === constants_1.BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
            }
        }
    };
    RawSha256.prototype.digest = function () {
        if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 0x80);
            // Ensure the final block has enough room for the hashed length
            if (undecoratedLength % constants_1.BLOCK_SIZE >= constants_1.BLOCK_SIZE - 8) {
                for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE; i++) {
                    bufferView.setUint8(i, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
            }
            for (var i = this.bufferLength; i < constants_1.BLOCK_SIZE - 8; i++) {
                bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(constants_1.BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
            bufferView.setUint32(constants_1.BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
        }
        // The value in state is little-endian rather than big-endian, so flip
        // each word into a new Uint8Array
        var out = new Uint8Array(constants_1.DIGEST_LENGTH);
        for (var i = 0; i < 8; i++) {
            out[i * 4] = (this.state[i] >>> 24) & 0xff;
            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
        }
        return out;
    };
    RawSha256.prototype.hashBuffer = function () {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
            if (i < 16) {
                this.temp[i] =
                    ((buffer[i * 4] & 0xff) << 24) |
                        ((buffer[i * 4 + 1] & 0xff) << 16) |
                        ((buffer[i * 4 + 2] & 0xff) << 8) |
                        (buffer[i * 4 + 3] & 0xff);
            }
            else {
                var u = this.temp[i - 2];
                var t1_1 = ((u >>> 17) | (u << 15)) ^ ((u >>> 19) | (u << 13)) ^ (u >>> 10);
                u = this.temp[i - 15];
                var t2_1 = ((u >>> 7) | (u << 25)) ^ ((u >>> 18) | (u << 14)) ^ (u >>> 3);
                this.temp[i] =
                    ((t1_1 + this.temp[i - 7]) | 0) + ((t2_1 + this.temp[i - 16]) | 0);
            }
            var t1 = ((((((state4 >>> 6) | (state4 << 26)) ^
                ((state4 >>> 11) | (state4 << 21)) ^
                ((state4 >>> 25) | (state4 << 7))) +
                ((state4 & state5) ^ (~state4 & state6))) |
                0) +
                ((state7 + ((constants_1.KEY[i] + this.temp[i]) | 0)) | 0)) |
                0;
            var t2 = ((((state0 >>> 2) | (state0 << 30)) ^
                ((state0 >>> 13) | (state0 << 19)) ^
                ((state0 >>> 22) | (state0 << 10))) +
                ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) |
                0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = (state3 + t1) | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = (t1 + t2) | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
    };
    return RawSha256;
}());
exports.RawSha256 = RawSha256;
//# sourceMappingURL=RawSha256.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/constants.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAX_HASHABLE_LENGTH = exports.INIT = exports.KEY = exports.DIGEST_LENGTH = exports.BLOCK_SIZE = void 0;
/**
 * @internal
 */
exports.BLOCK_SIZE = 64;
/**
 * @internal
 */
exports.DIGEST_LENGTH = 32;
/**
 * @internal
 */
exports.KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/**
 * @internal
 */
exports.INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
];
/**
 * @internal
 */
exports.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./jsSha256 */ "./node_modules/@aws-crypto/sha256-js/build/jsSha256.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/jsSha256.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/jsSha256.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sha256 = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@aws-crypto/sha256-js/build/constants.js");
var RawSha256_1 = __webpack_require__(/*! ./RawSha256 */ "./node_modules/@aws-crypto/sha256-js/build/RawSha256.js");
var util_1 = __webpack_require__(/*! @aws-crypto/util */ "./node_modules/@aws-crypto/util/build/index.js");
var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.secret = secret;
        this.hash = new RawSha256_1.RawSha256();
        this.reset();
    }
    Sha256.prototype.update = function (toHash) {
        if ((0, util_1.isEmptyData)(toHash) || this.error) {
            return;
        }
        try {
            this.hash.update((0, util_1.convertToBuffer)(toHash));
        }
        catch (e) {
            this.error = e;
        }
    };
    /* This synchronous method keeps compatibility
     * with the v2 aws-sdk.
     */
    Sha256.prototype.digestSync = function () {
        if (this.error) {
            throw this.error;
        }
        if (this.outer) {
            if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
        }
        return this.hash.digest();
    };
    /* The underlying digest method here is synchronous.
     * To keep the same interface with the other hash functions
     * the default is to expose this as an async method.
     * However, it can sometimes be useful to have a sync method.
     */
    Sha256.prototype.digest = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.digestSync()];
            });
        });
    };
    Sha256.prototype.reset = function () {
        this.hash = new RawSha256_1.RawSha256();
        if (this.secret) {
            this.outer = new RawSha256_1.RawSha256();
            var inner = bufferFromSecret(this.secret);
            var outer = new Uint8Array(constants_1.BLOCK_SIZE);
            outer.set(inner);
            for (var i = 0; i < constants_1.BLOCK_SIZE; i++) {
                inner[i] ^= 0x36;
                outer[i] ^= 0x5c;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            // overwrite the copied key in memory
            for (var i = 0; i < inner.byteLength; i++) {
                inner[i] = 0;
            }
        }
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
function bufferFromSecret(secret) {
    var input = (0, util_1.convertToBuffer)(secret);
    if (input.byteLength > constants_1.BLOCK_SIZE) {
        var bufferHash = new RawSha256_1.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(constants_1.BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}
//# sourceMappingURL=jsSha256.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@aws-crypto/supports-web-crypto/build/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-crypto/supports-web-crypto/build/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./supportsWebCrypto */ "./node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOERBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vc3VwcG9ydHNXZWJDcnlwdG9cIjtcbiJdfQ==

/***/ }),

/***/ "./node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-crypto/supports-web-crypto/build/supportsWebCrypto.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.supportsZeroByteGCM = exports.supportsSubtleCrypto = exports.supportsSecureRandom = exports.supportsWebCrypto = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js");
var subtleCryptoMethods = [
    "decrypt",
    "digest",
    "encrypt",
    "exportKey",
    "generateKey",
    "importKey",
    "sign",
    "verify"
];
function supportsWebCrypto(window) {
    if (supportsSecureRandom(window) &&
        typeof window.crypto.subtle === "object") {
        var subtle = window.crypto.subtle;
        return supportsSubtleCrypto(subtle);
    }
    return false;
}
exports.supportsWebCrypto = supportsWebCrypto;
function supportsSecureRandom(window) {
    if (typeof window === "object" && typeof window.crypto === "object") {
        var getRandomValues = window.crypto.getRandomValues;
        return typeof getRandomValues === "function";
    }
    return false;
}
exports.supportsSecureRandom = supportsSecureRandom;
function supportsSubtleCrypto(subtle) {
    return (subtle &&
        subtleCryptoMethods.every(function (methodName) { return typeof subtle[methodName] === "function"; }));
}
exports.supportsSubtleCrypto = supportsSubtleCrypto;
function supportsZeroByteGCM(subtle) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var key, zeroByteAuthTag, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!supportsSubtleCrypto(subtle))
                        return [2 /*return*/, false];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, subtle.generateKey({ name: "AES-GCM", length: 128 }, false, ["encrypt"])];
                case 2:
                    key = _b.sent();
                    return [4 /*yield*/, subtle.encrypt({
                            name: "AES-GCM",
                            iv: new Uint8Array(Array(12)),
                            additionalData: new Uint8Array(Array(16)),
                            tagLength: 128
                        }, key, new Uint8Array(0))];
                case 3:
                    zeroByteAuthTag = _b.sent();
                    return [2 /*return*/, zeroByteAuthTag.byteLength === 16];
                case 4:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.supportsZeroByteGCM = supportsZeroByteGCM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydHNXZWJDcnlwdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc3VwcG9ydHNXZWJDcnlwdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVVBLElBQU0sbUJBQW1CLEdBQThCO0lBQ3JELFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0NBQ1QsQ0FBQztBQUVGLFNBQWdCLGlCQUFpQixDQUFDLE1BQWM7SUFDOUMsSUFDRSxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7UUFDNUIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQ3hDO1FBQ1EsSUFBQSxNQUFNLEdBQUssTUFBTSxDQUFDLE1BQU0sT0FBbEIsQ0FBbUI7UUFFakMsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyQztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVhELDhDQVdDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsTUFBYztJQUNqRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzNELElBQUEsZUFBZSxHQUFLLE1BQU0sQ0FBQyxNQUFNLGdCQUFsQixDQUFtQjtRQUUxQyxPQUFPLE9BQU8sZUFBZSxLQUFLLFVBQVUsQ0FBQztLQUM5QztJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJELG9EQVFDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsTUFBb0I7SUFDdkQsT0FBTyxDQUNMLE1BQU07UUFDTixtQkFBbUIsQ0FBQyxLQUFLLENBQ3ZCLFVBQUEsVUFBVSxJQUFJLE9BQUEsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxFQUF4QyxDQUF3QyxDQUN2RCxDQUNGLENBQUM7QUFDSixDQUFDO0FBUEQsb0RBT0M7QUFFRCxTQUFzQixtQkFBbUIsQ0FBQyxNQUFvQjs7Ozs7O29CQUM1RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO3dCQUFFLHNCQUFPLEtBQUssRUFBQzs7OztvQkFFbEMscUJBQU0sTUFBTSxDQUFDLFdBQVcsQ0FDbEMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFDaEMsS0FBSyxFQUNMLENBQUMsU0FBUyxDQUFDLENBQ1osRUFBQTs7b0JBSkssR0FBRyxHQUFHLFNBSVg7b0JBQ3VCLHFCQUFNLE1BQU0sQ0FBQyxPQUFPLENBQzFDOzRCQUNFLElBQUksRUFBRSxTQUFTOzRCQUNmLEVBQUUsRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQzdCLGNBQWMsRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ3pDLFNBQVMsRUFBRSxHQUFHO3lCQUNmLEVBQ0QsR0FBRyxFQUNILElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUNsQixFQUFBOztvQkFUSyxlQUFlLEdBQUcsU0FTdkI7b0JBQ0Qsc0JBQU8sZUFBZSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUM7OztvQkFFekMsc0JBQU8sS0FBSyxFQUFDOzs7OztDQUVoQjtBQXRCRCxrREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFN1YnRsZUNyeXB0b01ldGhvZCA9XG4gIHwgXCJkZWNyeXB0XCJcbiAgfCBcImRpZ2VzdFwiXG4gIHwgXCJlbmNyeXB0XCJcbiAgfCBcImV4cG9ydEtleVwiXG4gIHwgXCJnZW5lcmF0ZUtleVwiXG4gIHwgXCJpbXBvcnRLZXlcIlxuICB8IFwic2lnblwiXG4gIHwgXCJ2ZXJpZnlcIjtcblxuY29uc3Qgc3VidGxlQ3J5cHRvTWV0aG9kczogQXJyYXk8U3VidGxlQ3J5cHRvTWV0aG9kPiA9IFtcbiAgXCJkZWNyeXB0XCIsXG4gIFwiZGlnZXN0XCIsXG4gIFwiZW5jcnlwdFwiLFxuICBcImV4cG9ydEtleVwiLFxuICBcImdlbmVyYXRlS2V5XCIsXG4gIFwiaW1wb3J0S2V5XCIsXG4gIFwic2lnblwiLFxuICBcInZlcmlmeVwiXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNXZWJDcnlwdG8od2luZG93OiBXaW5kb3cpOiBib29sZWFuIHtcbiAgaWYgKFxuICAgIHN1cHBvcnRzU2VjdXJlUmFuZG9tKHdpbmRvdykgJiZcbiAgICB0eXBlb2Ygd2luZG93LmNyeXB0by5zdWJ0bGUgPT09IFwib2JqZWN0XCJcbiAgKSB7XG4gICAgY29uc3QgeyBzdWJ0bGUgfSA9IHdpbmRvdy5jcnlwdG87XG5cbiAgICByZXR1cm4gc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzU2VjdXJlUmFuZG9tKHdpbmRvdzogV2luZG93KTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB3aW5kb3cuY3J5cHRvID09PSBcIm9iamVjdFwiKSB7XG4gICAgY29uc3QgeyBnZXRSYW5kb21WYWx1ZXMgfSA9IHdpbmRvdy5jcnlwdG87XG5cbiAgICByZXR1cm4gdHlwZW9mIGdldFJhbmRvbVZhbHVlcyA9PT0gXCJmdW5jdGlvblwiO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlOiBTdWJ0bGVDcnlwdG8pIHtcbiAgcmV0dXJuIChcbiAgICBzdWJ0bGUgJiZcbiAgICBzdWJ0bGVDcnlwdG9NZXRob2RzLmV2ZXJ5KFxuICAgICAgbWV0aG9kTmFtZSA9PiB0eXBlb2Ygc3VidGxlW21ldGhvZE5hbWVdID09PSBcImZ1bmN0aW9uXCJcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdXBwb3J0c1plcm9CeXRlR0NNKHN1YnRsZTogU3VidGxlQ3J5cHRvKSB7XG4gIGlmICghc3VwcG9ydHNTdWJ0bGVDcnlwdG8oc3VidGxlKSkgcmV0dXJuIGZhbHNlO1xuICB0cnkge1xuICAgIGNvbnN0IGtleSA9IGF3YWl0IHN1YnRsZS5nZW5lcmF0ZUtleShcbiAgICAgIHsgbmFtZTogXCJBRVMtR0NNXCIsIGxlbmd0aDogMTI4IH0sXG4gICAgICBmYWxzZSxcbiAgICAgIFtcImVuY3J5cHRcIl1cbiAgICApO1xuICAgIGNvbnN0IHplcm9CeXRlQXV0aFRhZyA9IGF3YWl0IHN1YnRsZS5lbmNyeXB0KFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkFFUy1HQ01cIixcbiAgICAgICAgaXY6IG5ldyBVaW50OEFycmF5KEFycmF5KDEyKSksXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBuZXcgVWludDhBcnJheShBcnJheSgxNikpLFxuICAgICAgICB0YWdMZW5ndGg6IDEyOFxuICAgICAgfSxcbiAgICAgIGtleSxcbiAgICAgIG5ldyBVaW50OEFycmF5KDApXG4gICAgKTtcbiAgICByZXR1cm4gemVyb0J5dGVBdXRoVGFnLmJ5dGVMZW5ndGggPT09IDE2O1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/convertToBuffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/convertToBuffer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToBuffer = void 0;
var util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js");
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : util_utf8_browser_1.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer;
//# sourceMappingURL=convertToBuffer.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
var convertToBuffer_1 = __webpack_require__(/*! ./convertToBuffer */ "./node_modules/@aws-crypto/util/build/convertToBuffer.js");
Object.defineProperty(exports, "convertToBuffer", ({ enumerable: true, get: function () { return convertToBuffer_1.convertToBuffer; } }));
var isEmptyData_1 = __webpack_require__(/*! ./isEmptyData */ "./node_modules/@aws-crypto/util/build/isEmptyData.js");
Object.defineProperty(exports, "isEmptyData", ({ enumerable: true, get: function () { return isEmptyData_1.isEmptyData; } }));
var numToUint8_1 = __webpack_require__(/*! ./numToUint8 */ "./node_modules/@aws-crypto/util/build/numToUint8.js");
Object.defineProperty(exports, "numToUint8", ({ enumerable: true, get: function () { return numToUint8_1.numToUint8; } }));
var uint32ArrayFrom_1 = __webpack_require__(/*! ./uint32ArrayFrom */ "./node_modules/@aws-crypto/util/build/uint32ArrayFrom.js");
Object.defineProperty(exports, "uint32ArrayFrom", ({ enumerable: true, get: function () { return uint32ArrayFrom_1.uint32ArrayFrom; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/isEmptyData.js":
/*!************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/isEmptyData.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData;
//# sourceMappingURL=isEmptyData.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/numToUint8.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/numToUint8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff,
    ]);
}
exports.numToUint8 = numToUint8;
//# sourceMappingURL=numToUint8.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/uint32ArrayFrom.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/uint32ArrayFrom.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom;
//# sourceMappingURL=uint32ArrayFrom.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CognitoIdentityClient": () => (/* binding */ CognitoIdentityClient)
/* harmony export */ });
/* harmony import */ var _aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/config-resolver */ "./node_modules/@aws-sdk/config-resolver/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_content_length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-content-length */ "./node_modules/@aws-sdk/middleware-content-length/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-host-header */ "./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/middleware-logger */ "./node_modules/@aws-sdk/middleware-logger/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/middleware-recursion-detection */ "./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/middleware-retry */ "./node_modules/@aws-sdk/middleware-retry/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/middleware-signing */ "./node_modules/@aws-sdk/middleware-signing/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-sdk/middleware-user-agent */ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./endpoint/EndpointParameters */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js");
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js");












class CognitoIdentityClient extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client {
    constructor(configuration) {
        const _config_0 = (0,_runtimeConfig__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(configuration);
        const _config_1 = (0,_endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0,_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_0__.resolveRegionConfig)(_config_1);
        const _config_3 = (0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_2__.resolveEndpointConfig)(_config_2);
        const _config_4 = (0,_aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__.resolveRetryConfig)(_config_3);
        const _config_5 = (0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_3__.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0,_aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_7__.resolveAwsAuthConfig)(_config_5);
        const _config_7 = (0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__.resolveUserAgentConfig)(_config_6);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use((0,_aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__.getRetryPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_content_length__WEBPACK_IMPORTED_MODULE_1__.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_3__.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_4__.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_5__.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetCredentialsForIdentityCommand": () => (/* binding */ GetCredentialsForIdentityCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protocols/Aws_json1_1 */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js");




class GetCredentialsForIdentityCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, GetCredentialsForIdentityCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoIdentityClient";
        const commandName = "GetCredentialsForIdentityCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_3__.se_GetCredentialsForIdentityCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_3__.de_GetCredentialsForIdentityCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetIdCommand": () => (/* binding */ GetIdCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protocols/Aws_json1_1 */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js");




class GetIdCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, GetIdCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CognitoIdentityClient";
        const commandName = "GetIdCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_3__.se_GetIdCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_json1_1__WEBPACK_IMPORTED_MODULE_3__.de_GetIdCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/EndpointParameters.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveClientEndpointParameters": () => (/* binding */ resolveClientEndpointParameters)
/* harmony export */ });
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "cognito-identity",
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultEndpointResolver": () => (/* binding */ defaultEndpointResolver)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-endpoints */ "./node_modules/@aws-sdk/util-endpoints/dist-es/index.js");
/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruleset */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js");


const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_1__.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/ruleset.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ruleSet": () => (/* binding */ ruleSet)
/* harmony export */ });
const p = "required", q = "fn", r = "argv", s = "ref";
const a = "PartitionResult", b = "tree", c = "error", d = "endpoint", e = { [p]: false, "type": "String" }, f = { [p]: true, "default": false, "type": "Boolean" }, g = { [s]: "Endpoint" }, h = { [q]: "booleanEquals", [r]: [{ [s]: "UseFIPS" }, true] }, i = { [q]: "booleanEquals", [r]: [{ [s]: "UseDualStack" }, true] }, j = {}, k = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsFIPS"] }] }, l = { [q]: "booleanEquals", [r]: [true, { [q]: "getAttr", [r]: [{ [s]: a }, "supportsDualStack"] }] }, m = [g], n = [h], o = [i];
const _data = { version: "1.0", parameters: { Region: e, UseDualStack: f, UseFIPS: f, Endpoint: e }, rules: [{ conditions: [{ [q]: "aws.partition", [r]: [{ [s]: "Region" }], assign: a }], type: b, rules: [{ conditions: [{ [q]: "isSet", [r]: m }, { [q]: "parseURL", [r]: m, assign: "url" }], type: b, rules: [{ conditions: n, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c }, { type: b, rules: [{ conditions: o, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c }, { endpoint: { url: g, properties: j, headers: j }, type: d }] }] }, { conditions: [h, i], type: b, rules: [{ conditions: [k, l], type: b, rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c }] }, { conditions: n, type: b, rules: [{ conditions: [k], type: b, rules: [{ type: b, rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c }] }, { conditions: o, type: b, rules: [{ conditions: [l], type: b, rules: [{ endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: j, headers: j }, type: d }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c }] }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", properties: j, headers: j }, type: d }] }] };
const ruleSet = _data;


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CognitoIdentityServiceException": () => (/* binding */ CognitoIdentityServiceException)
/* harmony export */ });
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");

class CognitoIdentityServiceException extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, CognitoIdentityServiceException.prototype);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/models/models_0.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/models/models_0.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmbiguousRoleResolutionType": () => (/* binding */ AmbiguousRoleResolutionType),
/* harmony export */   "ConcurrentModificationException": () => (/* binding */ ConcurrentModificationException),
/* harmony export */   "DeveloperUserAlreadyRegisteredException": () => (/* binding */ DeveloperUserAlreadyRegisteredException),
/* harmony export */   "ErrorCode": () => (/* binding */ ErrorCode),
/* harmony export */   "ExternalServiceException": () => (/* binding */ ExternalServiceException),
/* harmony export */   "InternalErrorException": () => (/* binding */ InternalErrorException),
/* harmony export */   "InvalidIdentityPoolConfigurationException": () => (/* binding */ InvalidIdentityPoolConfigurationException),
/* harmony export */   "InvalidParameterException": () => (/* binding */ InvalidParameterException),
/* harmony export */   "LimitExceededException": () => (/* binding */ LimitExceededException),
/* harmony export */   "MappingRuleMatchType": () => (/* binding */ MappingRuleMatchType),
/* harmony export */   "NotAuthorizedException": () => (/* binding */ NotAuthorizedException),
/* harmony export */   "ResourceConflictException": () => (/* binding */ ResourceConflictException),
/* harmony export */   "ResourceNotFoundException": () => (/* binding */ ResourceNotFoundException),
/* harmony export */   "RoleMappingType": () => (/* binding */ RoleMappingType),
/* harmony export */   "TooManyRequestsException": () => (/* binding */ TooManyRequestsException)
/* harmony export */ });
/* harmony import */ var _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CognitoIdentityServiceException */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js");

const AmbiguousRoleResolutionType = {
    AUTHENTICATED_ROLE: "AuthenticatedRole",
    DENY: "Deny",
};
class InternalErrorException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InternalErrorException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalErrorException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalErrorException.prototype);
    }
}
class InvalidParameterException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InvalidParameterException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidParameterException.prototype);
    }
}
class LimitExceededException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
class NotAuthorizedException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "NotAuthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "NotAuthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    }
}
class ResourceConflictException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ResourceConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceConflictException.prototype);
    }
}
class TooManyRequestsException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
const ErrorCode = {
    ACCESS_DENIED: "AccessDenied",
    INTERNAL_SERVER_ERROR: "InternalServerError",
};
class ResourceNotFoundException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class ExternalServiceException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ExternalServiceException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExternalServiceException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExternalServiceException.prototype);
    }
}
class InvalidIdentityPoolConfigurationException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityPoolConfigurationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityPoolConfigurationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityPoolConfigurationException.prototype);
    }
}
const MappingRuleMatchType = {
    CONTAINS: "Contains",
    EQUALS: "Equals",
    NOT_EQUAL: "NotEqual",
    STARTS_WITH: "StartsWith",
};
const RoleMappingType = {
    RULES: "Rules",
    TOKEN: "Token",
};
class DeveloperUserAlreadyRegisteredException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "DeveloperUserAlreadyRegisteredException",
            $fault: "client",
            ...opts,
        });
        this.name = "DeveloperUserAlreadyRegisteredException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DeveloperUserAlreadyRegisteredException.prototype);
    }
}
class ConcurrentModificationException extends _CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_0__.CognitoIdentityServiceException {
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConcurrentModificationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "de_CreateIdentityPoolCommand": () => (/* binding */ de_CreateIdentityPoolCommand),
/* harmony export */   "de_DeleteIdentitiesCommand": () => (/* binding */ de_DeleteIdentitiesCommand),
/* harmony export */   "de_DeleteIdentityPoolCommand": () => (/* binding */ de_DeleteIdentityPoolCommand),
/* harmony export */   "de_DescribeIdentityCommand": () => (/* binding */ de_DescribeIdentityCommand),
/* harmony export */   "de_DescribeIdentityPoolCommand": () => (/* binding */ de_DescribeIdentityPoolCommand),
/* harmony export */   "de_GetCredentialsForIdentityCommand": () => (/* binding */ de_GetCredentialsForIdentityCommand),
/* harmony export */   "de_GetIdCommand": () => (/* binding */ de_GetIdCommand),
/* harmony export */   "de_GetIdentityPoolRolesCommand": () => (/* binding */ de_GetIdentityPoolRolesCommand),
/* harmony export */   "de_GetOpenIdTokenCommand": () => (/* binding */ de_GetOpenIdTokenCommand),
/* harmony export */   "de_GetOpenIdTokenForDeveloperIdentityCommand": () => (/* binding */ de_GetOpenIdTokenForDeveloperIdentityCommand),
/* harmony export */   "de_GetPrincipalTagAttributeMapCommand": () => (/* binding */ de_GetPrincipalTagAttributeMapCommand),
/* harmony export */   "de_ListIdentitiesCommand": () => (/* binding */ de_ListIdentitiesCommand),
/* harmony export */   "de_ListIdentityPoolsCommand": () => (/* binding */ de_ListIdentityPoolsCommand),
/* harmony export */   "de_ListTagsForResourceCommand": () => (/* binding */ de_ListTagsForResourceCommand),
/* harmony export */   "de_LookupDeveloperIdentityCommand": () => (/* binding */ de_LookupDeveloperIdentityCommand),
/* harmony export */   "de_MergeDeveloperIdentitiesCommand": () => (/* binding */ de_MergeDeveloperIdentitiesCommand),
/* harmony export */   "de_SetIdentityPoolRolesCommand": () => (/* binding */ de_SetIdentityPoolRolesCommand),
/* harmony export */   "de_SetPrincipalTagAttributeMapCommand": () => (/* binding */ de_SetPrincipalTagAttributeMapCommand),
/* harmony export */   "de_TagResourceCommand": () => (/* binding */ de_TagResourceCommand),
/* harmony export */   "de_UnlinkDeveloperIdentityCommand": () => (/* binding */ de_UnlinkDeveloperIdentityCommand),
/* harmony export */   "de_UnlinkIdentityCommand": () => (/* binding */ de_UnlinkIdentityCommand),
/* harmony export */   "de_UntagResourceCommand": () => (/* binding */ de_UntagResourceCommand),
/* harmony export */   "de_UpdateIdentityPoolCommand": () => (/* binding */ de_UpdateIdentityPoolCommand),
/* harmony export */   "se_CreateIdentityPoolCommand": () => (/* binding */ se_CreateIdentityPoolCommand),
/* harmony export */   "se_DeleteIdentitiesCommand": () => (/* binding */ se_DeleteIdentitiesCommand),
/* harmony export */   "se_DeleteIdentityPoolCommand": () => (/* binding */ se_DeleteIdentityPoolCommand),
/* harmony export */   "se_DescribeIdentityCommand": () => (/* binding */ se_DescribeIdentityCommand),
/* harmony export */   "se_DescribeIdentityPoolCommand": () => (/* binding */ se_DescribeIdentityPoolCommand),
/* harmony export */   "se_GetCredentialsForIdentityCommand": () => (/* binding */ se_GetCredentialsForIdentityCommand),
/* harmony export */   "se_GetIdCommand": () => (/* binding */ se_GetIdCommand),
/* harmony export */   "se_GetIdentityPoolRolesCommand": () => (/* binding */ se_GetIdentityPoolRolesCommand),
/* harmony export */   "se_GetOpenIdTokenCommand": () => (/* binding */ se_GetOpenIdTokenCommand),
/* harmony export */   "se_GetOpenIdTokenForDeveloperIdentityCommand": () => (/* binding */ se_GetOpenIdTokenForDeveloperIdentityCommand),
/* harmony export */   "se_GetPrincipalTagAttributeMapCommand": () => (/* binding */ se_GetPrincipalTagAttributeMapCommand),
/* harmony export */   "se_ListIdentitiesCommand": () => (/* binding */ se_ListIdentitiesCommand),
/* harmony export */   "se_ListIdentityPoolsCommand": () => (/* binding */ se_ListIdentityPoolsCommand),
/* harmony export */   "se_ListTagsForResourceCommand": () => (/* binding */ se_ListTagsForResourceCommand),
/* harmony export */   "se_LookupDeveloperIdentityCommand": () => (/* binding */ se_LookupDeveloperIdentityCommand),
/* harmony export */   "se_MergeDeveloperIdentitiesCommand": () => (/* binding */ se_MergeDeveloperIdentitiesCommand),
/* harmony export */   "se_SetIdentityPoolRolesCommand": () => (/* binding */ se_SetIdentityPoolRolesCommand),
/* harmony export */   "se_SetPrincipalTagAttributeMapCommand": () => (/* binding */ se_SetPrincipalTagAttributeMapCommand),
/* harmony export */   "se_TagResourceCommand": () => (/* binding */ se_TagResourceCommand),
/* harmony export */   "se_UnlinkDeveloperIdentityCommand": () => (/* binding */ se_UnlinkDeveloperIdentityCommand),
/* harmony export */   "se_UnlinkIdentityCommand": () => (/* binding */ se_UnlinkIdentityCommand),
/* harmony export */   "se_UntagResourceCommand": () => (/* binding */ se_UntagResourceCommand),
/* harmony export */   "se_UpdateIdentityPoolCommand": () => (/* binding */ se_UpdateIdentityPoolCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _models_CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/CognitoIdentityServiceException */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/models_0 */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/models/models_0.js");




const se_CreateIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("CreateIdentityPool");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteIdentities");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteIdentityPool");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeIdentity");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeIdentityPool");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetCredentialsForIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("GetCredentialsForIdentity");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetIdCommand = async (input, context) => {
    const headers = sharedHeaders("GetId");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetIdentityPoolRolesCommand = async (input, context) => {
    const headers = sharedHeaders("GetIdentityPoolRoles");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetOpenIdTokenCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpenIdToken");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetOpenIdTokenForDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("GetOpenIdTokenForDeveloperIdentity");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = sharedHeaders("GetPrincipalTagAttributeMap");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("ListIdentities");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListIdentityPoolsCommand = async (input, context) => {
    const headers = sharedHeaders("ListIdentityPools");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListTagsForResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForResource");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_LookupDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("LookupDeveloperIdentity");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_MergeDeveloperIdentitiesCommand = async (input, context) => {
    const headers = sharedHeaders("MergeDeveloperIdentities");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SetIdentityPoolRolesCommand = async (input, context) => {
    const headers = sharedHeaders("SetIdentityPoolRoles");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_SetPrincipalTagAttributeMapCommand = async (input, context) => {
    const headers = sharedHeaders("SetPrincipalTagAttributeMap");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UnlinkDeveloperIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("UnlinkDeveloperIdentity");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UnlinkIdentityCommand = async (input, context) => {
    const headers = sharedHeaders("UnlinkIdentity");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateIdentityPoolCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateIdentityPool");
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const de_CreateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DeleteIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteIdentityPoolCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_DeleteIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_IdentityDescription(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetCredentialsForIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetCredentialsForIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetCredentialsForIdentityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetCredentialsForIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidIdentityPoolConfigurationException":
        case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
            throw await de_InvalidIdentityPoolConfigurationExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetIdCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdentityPoolRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetIdentityPoolRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetOpenIdTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetOpenIdTokenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetOpenIdTokenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetOpenIdTokenForDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetOpenIdTokenForDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetOpenIdTokenForDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DeveloperUserAlreadyRegisteredException":
        case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
            throw await de_DeveloperUserAlreadyRegisteredExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetPrincipalTagAttributeMapCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetPrincipalTagAttributeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListIdentitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListIdentityPoolsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListIdentityPoolsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListIdentityPoolsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_LookupDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_LookupDeveloperIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_LookupDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_MergeDeveloperIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_MergeDeveloperIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_MergeDeveloperIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SetIdentityPoolRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetIdentityPoolRolesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_SetIdentityPoolRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SetPrincipalTagAttributeMapCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetPrincipalTagAttributeMapCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_SetPrincipalTagAttributeMapCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UnlinkDeveloperIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UnlinkDeveloperIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_UnlinkDeveloperIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UnlinkIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UnlinkIdentityCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_UnlinkIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExternalServiceException":
        case "com.amazonaws.cognitoidentity#ExternalServiceException":
            throw await de_ExternalServiceExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateIdentityPoolCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateIdentityPoolCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateIdentityPoolCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InternalErrorException":
        case "com.amazonaws.cognitoidentity#InternalErrorException":
            throw await de_InternalErrorExceptionRes(parsedOutput, context);
        case "InvalidParameterException":
        case "com.amazonaws.cognitoidentity#InvalidParameterException":
            throw await de_InvalidParameterExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.cognitoidentity#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "NotAuthorizedException":
        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
            throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
        case "ResourceConflictException":
        case "com.amazonaws.cognitoidentity#ResourceConflictException":
            throw await de_ResourceConflictExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_DeveloperUserAlreadyRegisteredExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.DeveloperUserAlreadyRegisteredException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_ExternalServiceExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.ExternalServiceException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InternalErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.InternalErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidIdentityPoolConfigurationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.InvalidIdentityPoolConfigurationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_InvalidParameterExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.InvalidParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_NotAuthorizedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.NotAuthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_ResourceConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.ResourceConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(body);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_2__.TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, body);
};
const de_Credentials = (output, context) => {
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        AccessKeyId: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Expiration: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        SecretKey: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        SessionToken: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_GetCredentialsForIdentityResponse = (output, context) => {
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Credentials: (_) => de_Credentials(_, context),
        IdentityId: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_IdentitiesList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_IdentityDescription(entry, context);
    });
    return retVal;
};
const de_IdentityDescription = (output, context) => {
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        CreationDate: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        IdentityId: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LastModifiedDate: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        Logins: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
    });
};
const de_ListIdentitiesResponse = (output, context) => {
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Identities: (_) => de_IdentitiesList(_, context),
        IdentityPoolId: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        NextToken: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_CognitoIdentityServiceException__WEBPACK_IMPORTED_MODULE_3__.CognitoIdentityServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": `AWSCognitoIdentityService.${operation}`,
    };
}
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.browser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRuntimeConfig": () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../package.json */ "./node_modules/@aws-sdk/client-cognito-identity/package.json");
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/sha256-browser */ "./node_modules/@aws-crypto/sha256-browser/build/index.js");
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/config-resolver */ "./node_modules/@aws-sdk/config-resolver/dist-es/index.js");
/* harmony import */ var _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/fetch-http-handler */ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/index.js");
/* harmony import */ var _aws_sdk_invalid_dependency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/invalid-dependency */ "./node_modules/@aws-sdk/invalid-dependency/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_body_length_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/util-body-length-browser */ "./node_modules/@aws-sdk/util-body-length-browser/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/util-user-agent-browser */ "./node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js");
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runtimeConfig.shared */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_defaults_mode_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-sdk/util-defaults-mode-browser */ "./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/index.js");











const getRuntimeConfig = (config) => {
    const defaultsMode = (0,_aws_sdk_util_defaults_mode_browser__WEBPACK_IMPORTED_MODULE_8__.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_7__.loadConfigsForDefaultMode);
    const clientSharedValues = (0,_runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_9__.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "browser",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? _aws_sdk_util_body_length_browser__WEBPACK_IMPORTED_MODULE_4__.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,_aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_6__.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_10__.version }),
        maxAttempts: config?.maxAttempts ?? _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_MAX_ATTEMPTS,
        region: config?.region ?? (0,_aws_sdk_invalid_dependency__WEBPACK_IMPORTED_MODULE_3__.invalidProvider)("Region is missing"),
        requestHandler: config?.requestHandler ?? new _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_2__.FetchHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_RETRY_MODE),
        sha256: config?.sha256 ?? _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__.Sha256,
        streamCollector: config?.streamCollector ?? _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_2__.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_USE_DUALSTACK_ENDPOINT)),
        useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_USE_FIPS_ENDPOINT)),
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/dist-es/runtimeConfig.shared.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRuntimeConfig": () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/url-parser */ "./node_modules/@aws-sdk/url-parser/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-base64 */ "./node_modules/@aws-sdk/util-base64/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");
/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endpoint/endpointResolver */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/endpoint/endpointResolver.js");





const getRuntimeConfig = (config) => ({
    apiVersion: "2014-06-30",
    base64Decoder: config?.base64Decoder ?? _aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_2__.fromBase64,
    base64Encoder: config?.base64Encoder ?? _aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_2__.toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__.defaultEndpointResolver,
    logger: config?.logger ?? new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.NoOpLogger(),
    serviceId: config?.serviceId ?? "Cognito Identity",
    urlParser: config?.urlParser ?? _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_1__.parseUrl,
    utf8Decoder: config?.utf8Decoder ?? _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8,
});


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/Polly.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/Polly.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Polly": () => (/* binding */ Polly)
/* harmony export */ });
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _commands_DeleteLexiconCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands/DeleteLexiconCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/DeleteLexiconCommand.js");
/* harmony import */ var _commands_DescribeVoicesCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commands/DescribeVoicesCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/DescribeVoicesCommand.js");
/* harmony import */ var _commands_GetLexiconCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands/GetLexiconCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/GetLexiconCommand.js");
/* harmony import */ var _commands_GetSpeechSynthesisTaskCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands/GetSpeechSynthesisTaskCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/GetSpeechSynthesisTaskCommand.js");
/* harmony import */ var _commands_ListLexiconsCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/ListLexiconsCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/ListLexiconsCommand.js");
/* harmony import */ var _commands_ListSpeechSynthesisTasksCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/ListSpeechSynthesisTasksCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/ListSpeechSynthesisTasksCommand.js");
/* harmony import */ var _commands_PutLexiconCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commands/PutLexiconCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/PutLexiconCommand.js");
/* harmony import */ var _commands_StartSpeechSynthesisTaskCommand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commands/StartSpeechSynthesisTaskCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/StartSpeechSynthesisTaskCommand.js");
/* harmony import */ var _commands_SynthesizeSpeechCommand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commands/SynthesizeSpeechCommand */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/SynthesizeSpeechCommand.js");
/* harmony import */ var _PollyClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PollyClient */ "./node_modules/@aws-sdk/client-polly/dist-es/PollyClient.js");











const commands = {
    DeleteLexiconCommand: _commands_DeleteLexiconCommand__WEBPACK_IMPORTED_MODULE_1__.DeleteLexiconCommand,
    DescribeVoicesCommand: _commands_DescribeVoicesCommand__WEBPACK_IMPORTED_MODULE_2__.DescribeVoicesCommand,
    GetLexiconCommand: _commands_GetLexiconCommand__WEBPACK_IMPORTED_MODULE_3__.GetLexiconCommand,
    GetSpeechSynthesisTaskCommand: _commands_GetSpeechSynthesisTaskCommand__WEBPACK_IMPORTED_MODULE_4__.GetSpeechSynthesisTaskCommand,
    ListLexiconsCommand: _commands_ListLexiconsCommand__WEBPACK_IMPORTED_MODULE_5__.ListLexiconsCommand,
    ListSpeechSynthesisTasksCommand: _commands_ListSpeechSynthesisTasksCommand__WEBPACK_IMPORTED_MODULE_6__.ListSpeechSynthesisTasksCommand,
    PutLexiconCommand: _commands_PutLexiconCommand__WEBPACK_IMPORTED_MODULE_7__.PutLexiconCommand,
    StartSpeechSynthesisTaskCommand: _commands_StartSpeechSynthesisTaskCommand__WEBPACK_IMPORTED_MODULE_8__.StartSpeechSynthesisTaskCommand,
    SynthesizeSpeechCommand: _commands_SynthesizeSpeechCommand__WEBPACK_IMPORTED_MODULE_9__.SynthesizeSpeechCommand,
};
class Polly extends _PollyClient__WEBPACK_IMPORTED_MODULE_10__.PollyClient {
}
(0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.createAggregatedClient)(commands, Polly);


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/PollyClient.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/PollyClient.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollyClient": () => (/* binding */ PollyClient)
/* harmony export */ });
/* harmony import */ var _aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/config-resolver */ "./node_modules/@aws-sdk/config-resolver/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_content_length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-content-length */ "./node_modules/@aws-sdk/middleware-content-length/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-host-header */ "./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/middleware-logger */ "./node_modules/@aws-sdk/middleware-logger/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/middleware-recursion-detection */ "./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/middleware-retry */ "./node_modules/@aws-sdk/middleware-retry/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/middleware-signing */ "./node_modules/@aws-sdk/middleware-signing/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-sdk/middleware-user-agent */ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./endpoint/EndpointParameters */ "./node_modules/@aws-sdk/client-polly/dist-es/endpoint/EndpointParameters.js");
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig */ "./node_modules/@aws-sdk/client-polly/dist-es/runtimeConfig.browser.js");












class PollyClient extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_9__.Client {
    constructor(configuration) {
        const _config_0 = (0,_runtimeConfig__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(configuration);
        const _config_1 = (0,_endpoint_EndpointParameters__WEBPACK_IMPORTED_MODULE_11__.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0,_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_0__.resolveRegionConfig)(_config_1);
        const _config_3 = (0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_2__.resolveEndpointConfig)(_config_2);
        const _config_4 = (0,_aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__.resolveRetryConfig)(_config_3);
        const _config_5 = (0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_3__.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0,_aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_7__.resolveAwsAuthConfig)(_config_5);
        const _config_7 = (0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__.resolveUserAgentConfig)(_config_6);
        super(_config_7);
        this.config = _config_7;
        this.middlewareStack.use((0,_aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_6__.getRetryPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_content_length__WEBPACK_IMPORTED_MODULE_1__.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_3__.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_4__.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_recursion_detection__WEBPACK_IMPORTED_MODULE_5__.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_7__.getAwsAuthPlugin)(this.config));
        this.middlewareStack.use((0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_8__.getUserAgentPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/DeleteLexiconCommand.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/DeleteLexiconCommand.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteLexiconCommand": () => (/* binding */ DeleteLexiconCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");




class DeleteLexiconCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, DeleteLexiconCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "DeleteLexiconCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.se_DeleteLexiconCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.de_DeleteLexiconCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/DescribeVoicesCommand.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/DescribeVoicesCommand.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescribeVoicesCommand": () => (/* binding */ DescribeVoicesCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");




class DescribeVoicesCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, DescribeVoicesCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "DescribeVoicesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.se_DescribeVoicesCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.de_DescribeVoicesCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/GetLexiconCommand.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/GetLexiconCommand.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetLexiconCommand": () => (/* binding */ GetLexiconCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ "./node_modules/@aws-sdk/client-polly/dist-es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");





class GetLexiconCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, GetLexiconCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "GetLexiconCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_3__.GetLexiconOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.se_GetLexiconCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.de_GetLexiconCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/GetSpeechSynthesisTaskCommand.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/GetSpeechSynthesisTaskCommand.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetSpeechSynthesisTaskCommand": () => (/* binding */ GetSpeechSynthesisTaskCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");




class GetSpeechSynthesisTaskCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, GetSpeechSynthesisTaskCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "GetSpeechSynthesisTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.se_GetSpeechSynthesisTaskCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.de_GetSpeechSynthesisTaskCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/ListLexiconsCommand.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/ListLexiconsCommand.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListLexiconsCommand": () => (/* binding */ ListLexiconsCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");




class ListLexiconsCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, ListLexiconsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "ListLexiconsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.se_ListLexiconsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.de_ListLexiconsCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/ListSpeechSynthesisTasksCommand.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/ListSpeechSynthesisTasksCommand.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListSpeechSynthesisTasksCommand": () => (/* binding */ ListSpeechSynthesisTasksCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");




class ListSpeechSynthesisTasksCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, ListSpeechSynthesisTasksCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "ListSpeechSynthesisTasksCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.se_ListSpeechSynthesisTasksCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.de_ListSpeechSynthesisTasksCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/PutLexiconCommand.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/PutLexiconCommand.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PutLexiconCommand": () => (/* binding */ PutLexiconCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ "./node_modules/@aws-sdk/client-polly/dist-es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");





class PutLexiconCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, PutLexiconCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "PutLexiconCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PutLexiconInputFilterSensitiveLog,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.se_PutLexiconCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.de_PutLexiconCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/StartSpeechSynthesisTaskCommand.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/StartSpeechSynthesisTaskCommand.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartSpeechSynthesisTaskCommand": () => (/* binding */ StartSpeechSynthesisTaskCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");




class StartSpeechSynthesisTaskCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, StartSpeechSynthesisTaskCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "StartSpeechSynthesisTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.se_StartSpeechSynthesisTaskCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_3__.de_StartSpeechSynthesisTaskCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/commands/SynthesizeSpeechCommand.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/commands/SynthesizeSpeechCommand.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SynthesizeSpeechCommand": () => (/* binding */ SynthesizeSpeechCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-endpoint */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js");
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ "./node_modules/@aws-sdk/client-polly/dist-es/models/models_0.js");
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js");





class SynthesizeSpeechCommand extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_2__.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0,_aws_sdk_middleware_endpoint__WEBPACK_IMPORTED_MODULE_0__.getEndpointPlugin)(configuration, SynthesizeSpeechCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "PollyClient";
        const commandName = "SynthesizeSpeechCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_3__.SynthesizeSpeechOutputFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.se_SynthesizeSpeechCommand)(input, context);
    }
    deserialize(output, context) {
        return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.de_SynthesizeSpeechCommand)(output, context);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/endpoint/EndpointParameters.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/endpoint/EndpointParameters.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveClientEndpointParameters": () => (/* binding */ resolveClientEndpointParameters)
/* harmony export */ });
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "polly",
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/endpoint/endpointResolver.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/endpoint/endpointResolver.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultEndpointResolver": () => (/* binding */ defaultEndpointResolver)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-endpoints */ "./node_modules/@aws-sdk/util-endpoints/dist-es/index.js");
/* harmony import */ var _ruleset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruleset */ "./node_modules/@aws-sdk/client-polly/dist-es/endpoint/ruleset.js");


const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_0__.resolveEndpoint)(_ruleset__WEBPACK_IMPORTED_MODULE_1__.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/endpoint/ruleset.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/endpoint/ruleset.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ruleSet": () => (/* binding */ ruleSet)
/* harmony export */ });
const q = "required", r = "fn", s = "argv", t = "ref";
const a = "isSet", b = "tree", c = "error", d = "endpoint", e = "PartitionResult", f = { [q]: false, "type": "String" }, g = { [q]: true, "default": false, "type": "Boolean" }, h = { [t]: "Endpoint" }, i = { [r]: "booleanEquals", [s]: [{ [t]: "UseFIPS" }, true] }, j = { [r]: "booleanEquals", [s]: [{ [t]: "UseDualStack" }, true] }, k = {}, l = { [r]: "booleanEquals", [s]: [true, { [r]: "getAttr", [s]: [{ [t]: e }, "supportsFIPS"] }] }, m = { [r]: "booleanEquals", [s]: [true, { [r]: "getAttr", [s]: [{ [t]: e }, "supportsDualStack"] }] }, n = [i], o = [j], p = [{ [t]: "Region" }];
const _data = { version: "1.0", parameters: { Region: f, UseDualStack: g, UseFIPS: g, Endpoint: f }, rules: [{ conditions: [{ [r]: a, [s]: [h] }], type: b, rules: [{ conditions: n, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: c }, { type: b, rules: [{ conditions: o, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: c }, { endpoint: { url: h, properties: k, headers: k }, type: d }] }] }, { type: b, rules: [{ conditions: [{ [r]: a, [s]: p }], type: b, rules: [{ conditions: [{ [r]: "aws.partition", [s]: p, assign: e }], type: b, rules: [{ conditions: [i, j], type: b, rules: [{ conditions: [l, m], type: b, rules: [{ type: b, rules: [{ endpoint: { url: "https://polly-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: k, headers: k }, type: d }] }] }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: c }] }, { conditions: n, type: b, rules: [{ conditions: [l], type: b, rules: [{ type: b, rules: [{ endpoint: { url: "https://polly-fips.{Region}.{PartitionResult#dnsSuffix}", properties: k, headers: k }, type: d }] }] }, { error: "FIPS is enabled but this partition does not support FIPS", type: c }] }, { conditions: o, type: b, rules: [{ conditions: [m], type: b, rules: [{ type: b, rules: [{ endpoint: { url: "https://polly.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: k, headers: k }, type: d }] }] }, { error: "DualStack is enabled but this partition does not support DualStack", type: c }] }, { type: b, rules: [{ endpoint: { url: "https://polly.{Region}.{PartitionResult#dnsSuffix}", properties: k, headers: k }, type: d }] }] }] }, { error: "Invalid Configuration: Missing Region", type: c }] }] };
const ruleSet = _data;


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/models/PollyServiceException.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/models/PollyServiceException.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PollyServiceException": () => (/* binding */ PollyServiceException)
/* harmony export */ });
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");

class PollyServiceException extends _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, PollyServiceException.prototype);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/models/models_0.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/models/models_0.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => (/* binding */ Engine),
/* harmony export */   "EngineNotSupportedException": () => (/* binding */ EngineNotSupportedException),
/* harmony export */   "Gender": () => (/* binding */ Gender),
/* harmony export */   "GetLexiconOutputFilterSensitiveLog": () => (/* binding */ GetLexiconOutputFilterSensitiveLog),
/* harmony export */   "InvalidLexiconException": () => (/* binding */ InvalidLexiconException),
/* harmony export */   "InvalidNextTokenException": () => (/* binding */ InvalidNextTokenException),
/* harmony export */   "InvalidS3BucketException": () => (/* binding */ InvalidS3BucketException),
/* harmony export */   "InvalidS3KeyException": () => (/* binding */ InvalidS3KeyException),
/* harmony export */   "InvalidSampleRateException": () => (/* binding */ InvalidSampleRateException),
/* harmony export */   "InvalidSnsTopicArnException": () => (/* binding */ InvalidSnsTopicArnException),
/* harmony export */   "InvalidSsmlException": () => (/* binding */ InvalidSsmlException),
/* harmony export */   "InvalidTaskIdException": () => (/* binding */ InvalidTaskIdException),
/* harmony export */   "LanguageCode": () => (/* binding */ LanguageCode),
/* harmony export */   "LanguageNotSupportedException": () => (/* binding */ LanguageNotSupportedException),
/* harmony export */   "LexiconFilterSensitiveLog": () => (/* binding */ LexiconFilterSensitiveLog),
/* harmony export */   "LexiconNotFoundException": () => (/* binding */ LexiconNotFoundException),
/* harmony export */   "LexiconSizeExceededException": () => (/* binding */ LexiconSizeExceededException),
/* harmony export */   "MarksNotSupportedForFormatException": () => (/* binding */ MarksNotSupportedForFormatException),
/* harmony export */   "MaxLexemeLengthExceededException": () => (/* binding */ MaxLexemeLengthExceededException),
/* harmony export */   "MaxLexiconsNumberExceededException": () => (/* binding */ MaxLexiconsNumberExceededException),
/* harmony export */   "OutputFormat": () => (/* binding */ OutputFormat),
/* harmony export */   "PutLexiconInputFilterSensitiveLog": () => (/* binding */ PutLexiconInputFilterSensitiveLog),
/* harmony export */   "ServiceFailureException": () => (/* binding */ ServiceFailureException),
/* harmony export */   "SpeechMarkType": () => (/* binding */ SpeechMarkType),
/* harmony export */   "SsmlMarksNotSupportedForTextTypeException": () => (/* binding */ SsmlMarksNotSupportedForTextTypeException),
/* harmony export */   "SynthesisTaskNotFoundException": () => (/* binding */ SynthesisTaskNotFoundException),
/* harmony export */   "SynthesizeSpeechOutputFilterSensitiveLog": () => (/* binding */ SynthesizeSpeechOutputFilterSensitiveLog),
/* harmony export */   "TaskStatus": () => (/* binding */ TaskStatus),
/* harmony export */   "TextLengthExceededException": () => (/* binding */ TextLengthExceededException),
/* harmony export */   "TextType": () => (/* binding */ TextType),
/* harmony export */   "UnsupportedPlsAlphabetException": () => (/* binding */ UnsupportedPlsAlphabetException),
/* harmony export */   "UnsupportedPlsLanguageException": () => (/* binding */ UnsupportedPlsLanguageException),
/* harmony export */   "VoiceId": () => (/* binding */ VoiceId)
/* harmony export */ });
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PollyServiceException */ "./node_modules/@aws-sdk/client-polly/dist-es/models/PollyServiceException.js");


class LexiconNotFoundException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "LexiconNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "LexiconNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LexiconNotFoundException.prototype);
    }
}
class ServiceFailureException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "ServiceFailureException",
            $fault: "server",
            ...opts,
        });
        this.name = "ServiceFailureException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ServiceFailureException.prototype);
    }
}
const Engine = {
    NEURAL: "neural",
    STANDARD: "standard",
};
const LanguageCode = {
    ar_AE: "ar-AE",
    arb: "arb",
    ca_ES: "ca-ES",
    cmn_CN: "cmn-CN",
    cy_GB: "cy-GB",
    da_DK: "da-DK",
    de_AT: "de-AT",
    de_DE: "de-DE",
    en_AU: "en-AU",
    en_GB: "en-GB",
    en_GB_WLS: "en-GB-WLS",
    en_IN: "en-IN",
    en_NZ: "en-NZ",
    en_US: "en-US",
    en_ZA: "en-ZA",
    es_ES: "es-ES",
    es_MX: "es-MX",
    es_US: "es-US",
    fi_FI: "fi-FI",
    fr_CA: "fr-CA",
    fr_FR: "fr-FR",
    hi_IN: "hi-IN",
    is_IS: "is-IS",
    it_IT: "it-IT",
    ja_JP: "ja-JP",
    ko_KR: "ko-KR",
    nb_NO: "nb-NO",
    nl_NL: "nl-NL",
    pl_PL: "pl-PL",
    pt_BR: "pt-BR",
    pt_PT: "pt-PT",
    ro_RO: "ro-RO",
    ru_RU: "ru-RU",
    sv_SE: "sv-SE",
    tr_TR: "tr-TR",
    yue_CN: "yue-CN",
};
const Gender = {
    Female: "Female",
    Male: "Male",
};
const VoiceId = {
    Aditi: "Aditi",
    Adriano: "Adriano",
    Amy: "Amy",
    Andres: "Andres",
    Aria: "Aria",
    Arlet: "Arlet",
    Arthur: "Arthur",
    Astrid: "Astrid",
    Ayanda: "Ayanda",
    Bianca: "Bianca",
    Brian: "Brian",
    Camila: "Camila",
    Carla: "Carla",
    Carmen: "Carmen",
    Celine: "Celine",
    Chantal: "Chantal",
    Conchita: "Conchita",
    Cristiano: "Cristiano",
    Daniel: "Daniel",
    Dora: "Dora",
    Elin: "Elin",
    Emma: "Emma",
    Enrique: "Enrique",
    Ewa: "Ewa",
    Filiz: "Filiz",
    Gabrielle: "Gabrielle",
    Geraint: "Geraint",
    Giorgio: "Giorgio",
    Gwyneth: "Gwyneth",
    Hala: "Hala",
    Hannah: "Hannah",
    Hans: "Hans",
    Hiujin: "Hiujin",
    Ida: "Ida",
    Ines: "Ines",
    Ivy: "Ivy",
    Jacek: "Jacek",
    Jan: "Jan",
    Joanna: "Joanna",
    Joey: "Joey",
    Justin: "Justin",
    Kajal: "Kajal",
    Karl: "Karl",
    Kazuha: "Kazuha",
    Kendra: "Kendra",
    Kevin: "Kevin",
    Kimberly: "Kimberly",
    Laura: "Laura",
    Lea: "Lea",
    Liam: "Liam",
    Liv: "Liv",
    Lotte: "Lotte",
    Lucia: "Lucia",
    Lupe: "Lupe",
    Mads: "Mads",
    Maja: "Maja",
    Marlene: "Marlene",
    Mathieu: "Mathieu",
    Matthew: "Matthew",
    Maxim: "Maxim",
    Mia: "Mia",
    Miguel: "Miguel",
    Mizuki: "Mizuki",
    Naja: "Naja",
    Nicole: "Nicole",
    Ola: "Ola",
    Olivia: "Olivia",
    Pedro: "Pedro",
    Penelope: "Penelope",
    Raveena: "Raveena",
    Remi: "Remi",
    Ricardo: "Ricardo",
    Ruben: "Ruben",
    Russell: "Russell",
    Ruth: "Ruth",
    Salli: "Salli",
    Seoyeon: "Seoyeon",
    Sergio: "Sergio",
    Stephen: "Stephen",
    Suvi: "Suvi",
    Takumi: "Takumi",
    Tatyana: "Tatyana",
    Thiago: "Thiago",
    Tomoko: "Tomoko",
    Vicki: "Vicki",
    Vitoria: "Vitoria",
    Zeina: "Zeina",
    Zhiyu: "Zhiyu",
};
class InvalidNextTokenException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "InvalidNextTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidNextTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    }
}
class EngineNotSupportedException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "EngineNotSupportedException",
            $fault: "client",
            ...opts,
        });
        this.name = "EngineNotSupportedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EngineNotSupportedException.prototype);
    }
}
const OutputFormat = {
    JSON: "json",
    MP3: "mp3",
    OGG_VORBIS: "ogg_vorbis",
    PCM: "pcm",
};
const SpeechMarkType = {
    SENTENCE: "sentence",
    SSML: "ssml",
    VISEME: "viseme",
    WORD: "word",
};
const TaskStatus = {
    COMPLETED: "completed",
    FAILED: "failed",
    IN_PROGRESS: "inProgress",
    SCHEDULED: "scheduled",
};
const TextType = {
    SSML: "ssml",
    TEXT: "text",
};
class InvalidTaskIdException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "InvalidTaskIdException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidTaskIdException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidTaskIdException.prototype);
    }
}
class SynthesisTaskNotFoundException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "SynthesisTaskNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "SynthesisTaskNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SynthesisTaskNotFoundException.prototype);
    }
}
class InvalidLexiconException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "InvalidLexiconException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidLexiconException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidLexiconException.prototype);
    }
}
class InvalidS3BucketException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "InvalidS3BucketException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidS3BucketException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidS3BucketException.prototype);
    }
}
class InvalidS3KeyException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "InvalidS3KeyException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidS3KeyException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidS3KeyException.prototype);
    }
}
class InvalidSampleRateException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "InvalidSampleRateException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSampleRateException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSampleRateException.prototype);
    }
}
class InvalidSnsTopicArnException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "InvalidSnsTopicArnException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSnsTopicArnException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSnsTopicArnException.prototype);
    }
}
class InvalidSsmlException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "InvalidSsmlException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSsmlException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSsmlException.prototype);
    }
}
class LanguageNotSupportedException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "LanguageNotSupportedException",
            $fault: "client",
            ...opts,
        });
        this.name = "LanguageNotSupportedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LanguageNotSupportedException.prototype);
    }
}
class LexiconSizeExceededException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "LexiconSizeExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LexiconSizeExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LexiconSizeExceededException.prototype);
    }
}
class MarksNotSupportedForFormatException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "MarksNotSupportedForFormatException",
            $fault: "client",
            ...opts,
        });
        this.name = "MarksNotSupportedForFormatException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MarksNotSupportedForFormatException.prototype);
    }
}
class MaxLexemeLengthExceededException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "MaxLexemeLengthExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "MaxLexemeLengthExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MaxLexemeLengthExceededException.prototype);
    }
}
class MaxLexiconsNumberExceededException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "MaxLexiconsNumberExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "MaxLexiconsNumberExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MaxLexiconsNumberExceededException.prototype);
    }
}
class UnsupportedPlsAlphabetException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedPlsAlphabetException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedPlsAlphabetException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedPlsAlphabetException.prototype);
    }
}
class UnsupportedPlsLanguageException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedPlsLanguageException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedPlsLanguageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedPlsLanguageException.prototype);
    }
}
class SsmlMarksNotSupportedForTextTypeException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "SsmlMarksNotSupportedForTextTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "SsmlMarksNotSupportedForTextTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SsmlMarksNotSupportedForTextTypeException.prototype);
    }
}
class TextLengthExceededException extends _PollyServiceException__WEBPACK_IMPORTED_MODULE_1__.PollyServiceException {
    constructor(opts) {
        super({
            name: "TextLengthExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "TextLengthExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TextLengthExceededException.prototype);
    }
}
const LexiconFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Content && { Content: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const GetLexiconOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Lexicon && { Lexicon: LexiconFilterSensitiveLog(obj.Lexicon) }),
});
const PutLexiconInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Content && { Content: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING }),
});
const SynthesizeSpeechOutputFilterSensitiveLog = (obj) => ({
    ...obj,
});


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/protocols/Aws_restJson1.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "de_DeleteLexiconCommand": () => (/* binding */ de_DeleteLexiconCommand),
/* harmony export */   "de_DescribeVoicesCommand": () => (/* binding */ de_DescribeVoicesCommand),
/* harmony export */   "de_GetLexiconCommand": () => (/* binding */ de_GetLexiconCommand),
/* harmony export */   "de_GetSpeechSynthesisTaskCommand": () => (/* binding */ de_GetSpeechSynthesisTaskCommand),
/* harmony export */   "de_ListLexiconsCommand": () => (/* binding */ de_ListLexiconsCommand),
/* harmony export */   "de_ListSpeechSynthesisTasksCommand": () => (/* binding */ de_ListSpeechSynthesisTasksCommand),
/* harmony export */   "de_PutLexiconCommand": () => (/* binding */ de_PutLexiconCommand),
/* harmony export */   "de_StartSpeechSynthesisTaskCommand": () => (/* binding */ de_StartSpeechSynthesisTaskCommand),
/* harmony export */   "de_SynthesizeSpeechCommand": () => (/* binding */ de_SynthesizeSpeechCommand),
/* harmony export */   "se_DeleteLexiconCommand": () => (/* binding */ se_DeleteLexiconCommand),
/* harmony export */   "se_DescribeVoicesCommand": () => (/* binding */ se_DescribeVoicesCommand),
/* harmony export */   "se_GetLexiconCommand": () => (/* binding */ se_GetLexiconCommand),
/* harmony export */   "se_GetSpeechSynthesisTaskCommand": () => (/* binding */ se_GetSpeechSynthesisTaskCommand),
/* harmony export */   "se_ListLexiconsCommand": () => (/* binding */ se_ListLexiconsCommand),
/* harmony export */   "se_ListSpeechSynthesisTasksCommand": () => (/* binding */ se_ListSpeechSynthesisTasksCommand),
/* harmony export */   "se_PutLexiconCommand": () => (/* binding */ se_PutLexiconCommand),
/* harmony export */   "se_StartSpeechSynthesisTaskCommand": () => (/* binding */ se_StartSpeechSynthesisTaskCommand),
/* harmony export */   "se_SynthesizeSpeechCommand": () => (/* binding */ se_SynthesizeSpeechCommand)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ "./node_modules/@aws-sdk/client-polly/dist-es/models/models_0.js");
/* harmony import */ var _models_PollyServiceException__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/PollyServiceException */ "./node_modules/@aws-sdk/client-polly/dist-es/models/PollyServiceException.js");




const se_DeleteLexiconCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons/{Name}";
    resolvedPath = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
const se_DescribeVoicesCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/voices";
    const query = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        Engine: [, input.Engine],
        LanguageCode: [, input.LanguageCode],
        IncludeAdditionalLanguageCodes: [
            () => input.IncludeAdditionalLanguageCodes !== void 0,
            () => input.IncludeAdditionalLanguageCodes.toString(),
        ],
        NextToken: [, input.NextToken],
    });
    let body;
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const se_GetLexiconCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons/{Name}";
    resolvedPath = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
const se_GetSpeechSynthesisTaskCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/synthesisTasks/{TaskId}";
    resolvedPath = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.resolvedPath)(resolvedPath, input, "TaskId", () => input.TaskId, "{TaskId}", false);
    let body;
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
const se_ListLexiconsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons";
    const query = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        NextToken: [, input.NextToken],
    });
    let body;
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const se_ListSpeechSynthesisTasksCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {};
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/synthesisTasks";
    const query = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults.toString()],
        NextToken: [, input.NextToken],
        Status: [, input.Status],
    });
    let body;
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
const se_PutLexiconCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/lexicons/{Name}";
    resolvedPath = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.resolvedPath)(resolvedPath, input, "Name", () => input.Name, "{Name}", false);
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        Content: [],
    }));
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
const se_StartSpeechSynthesisTaskCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/synthesisTasks";
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        Engine: [],
        LanguageCode: [],
        LexiconNames: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
        OutputFormat: [],
        OutputS3BucketName: [],
        OutputS3KeyPrefix: [],
        SampleRate: [],
        SnsTopicArn: [],
        SpeechMarkTypes: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
        Text: [],
        TextType: [],
        VoiceId: [],
    }));
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
const se_SynthesizeSpeechCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/speech";
    let body;
    body = JSON.stringify((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(input, {
        Engine: [],
        LanguageCode: [],
        LexiconNames: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
        OutputFormat: [],
        SampleRate: [],
        SpeechMarkTypes: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json)(_),
        Text: [],
        TextType: [],
        VoiceId: [],
    }));
    return new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
const de_DeleteLexiconCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_DeleteLexiconCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_DeleteLexiconCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LexiconNotFoundException":
        case "com.amazonaws.polly#LexiconNotFoundException":
            throw await de_LexiconNotFoundExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeVoicesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_DescribeVoicesCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        NextToken: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Voices: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_DescribeVoicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.polly#InvalidNextTokenException":
            throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetLexiconCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetLexiconCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        Lexicon: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        LexiconAttributes: (_) => de_LexiconAttributes(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetLexiconCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LexiconNotFoundException":
        case "com.amazonaws.polly#LexiconNotFoundException":
            throw await de_LexiconNotFoundExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_GetSpeechSynthesisTaskCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_GetSpeechSynthesisTaskCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        SynthesisTask: (_) => de_SynthesisTask(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_GetSpeechSynthesisTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTaskIdException":
        case "com.amazonaws.polly#InvalidTaskIdException":
            throw await de_InvalidTaskIdExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        case "SynthesisTaskNotFoundException":
        case "com.amazonaws.polly#SynthesisTaskNotFoundException":
            throw await de_SynthesisTaskNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListLexiconsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListLexiconsCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        Lexicons: (_) => de_LexiconDescriptionList(_, context),
        NextToken: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListLexiconsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.polly#InvalidNextTokenException":
            throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListSpeechSynthesisTasksCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_ListSpeechSynthesisTasksCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        NextToken: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        SynthesisTasks: (_) => de_SynthesisTasks(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListSpeechSynthesisTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.polly#InvalidNextTokenException":
            throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_PutLexiconCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutLexiconCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_PutLexiconCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLexiconException":
        case "com.amazonaws.polly#InvalidLexiconException":
            throw await de_InvalidLexiconExceptionRes(parsedOutput, context);
        case "LexiconSizeExceededException":
        case "com.amazonaws.polly#LexiconSizeExceededException":
            throw await de_LexiconSizeExceededExceptionRes(parsedOutput, context);
        case "MaxLexemeLengthExceededException":
        case "com.amazonaws.polly#MaxLexemeLengthExceededException":
            throw await de_MaxLexemeLengthExceededExceptionRes(parsedOutput, context);
        case "MaxLexiconsNumberExceededException":
        case "com.amazonaws.polly#MaxLexiconsNumberExceededException":
            throw await de_MaxLexiconsNumberExceededExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        case "UnsupportedPlsAlphabetException":
        case "com.amazonaws.polly#UnsupportedPlsAlphabetException":
            throw await de_UnsupportedPlsAlphabetExceptionRes(parsedOutput, context);
        case "UnsupportedPlsLanguageException":
        case "com.amazonaws.polly#UnsupportedPlsLanguageException":
            throw await de_UnsupportedPlsLanguageExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StartSpeechSynthesisTaskCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_StartSpeechSynthesisTaskCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectObject)(await parseBody(output.body, context)), "body");
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        SynthesisTask: (_) => de_SynthesisTask(_, context),
    });
    Object.assign(contents, doc);
    return contents;
};
const de_StartSpeechSynthesisTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EngineNotSupportedException":
        case "com.amazonaws.polly#EngineNotSupportedException":
            throw await de_EngineNotSupportedExceptionRes(parsedOutput, context);
        case "InvalidS3BucketException":
        case "com.amazonaws.polly#InvalidS3BucketException":
            throw await de_InvalidS3BucketExceptionRes(parsedOutput, context);
        case "InvalidS3KeyException":
        case "com.amazonaws.polly#InvalidS3KeyException":
            throw await de_InvalidS3KeyExceptionRes(parsedOutput, context);
        case "InvalidSampleRateException":
        case "com.amazonaws.polly#InvalidSampleRateException":
            throw await de_InvalidSampleRateExceptionRes(parsedOutput, context);
        case "InvalidSnsTopicArnException":
        case "com.amazonaws.polly#InvalidSnsTopicArnException":
            throw await de_InvalidSnsTopicArnExceptionRes(parsedOutput, context);
        case "InvalidSsmlException":
        case "com.amazonaws.polly#InvalidSsmlException":
            throw await de_InvalidSsmlExceptionRes(parsedOutput, context);
        case "LanguageNotSupportedException":
        case "com.amazonaws.polly#LanguageNotSupportedException":
            throw await de_LanguageNotSupportedExceptionRes(parsedOutput, context);
        case "LexiconNotFoundException":
        case "com.amazonaws.polly#LexiconNotFoundException":
            throw await de_LexiconNotFoundExceptionRes(parsedOutput, context);
        case "MarksNotSupportedForFormatException":
        case "com.amazonaws.polly#MarksNotSupportedForFormatException":
            throw await de_MarksNotSupportedForFormatExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        case "SsmlMarksNotSupportedForTextTypeException":
        case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
            throw await de_SsmlMarksNotSupportedForTextTypeExceptionRes(parsedOutput, context);
        case "TextLengthExceededException":
        case "com.amazonaws.polly#TextLengthExceededException":
            throw await de_TextLengthExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_SynthesizeSpeechCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_SynthesizeSpeechCommandError(output, context);
    }
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({
        $metadata: deserializeMetadata(output),
        ContentType: [, output.headers["content-type"]],
        RequestCharacters: [
            () => void 0 !== output.headers["x-amzn-requestcharacters"],
            () => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.strictParseInt32)(output.headers["x-amzn-requestcharacters"]),
        ],
    });
    const data = output.body;
    context.sdkStreamMixin(data);
    contents.AudioStream = data;
    return contents;
};
const de_SynthesizeSpeechCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EngineNotSupportedException":
        case "com.amazonaws.polly#EngineNotSupportedException":
            throw await de_EngineNotSupportedExceptionRes(parsedOutput, context);
        case "InvalidSampleRateException":
        case "com.amazonaws.polly#InvalidSampleRateException":
            throw await de_InvalidSampleRateExceptionRes(parsedOutput, context);
        case "InvalidSsmlException":
        case "com.amazonaws.polly#InvalidSsmlException":
            throw await de_InvalidSsmlExceptionRes(parsedOutput, context);
        case "LanguageNotSupportedException":
        case "com.amazonaws.polly#LanguageNotSupportedException":
            throw await de_LanguageNotSupportedExceptionRes(parsedOutput, context);
        case "LexiconNotFoundException":
        case "com.amazonaws.polly#LexiconNotFoundException":
            throw await de_LexiconNotFoundExceptionRes(parsedOutput, context);
        case "MarksNotSupportedForFormatException":
        case "com.amazonaws.polly#MarksNotSupportedForFormatException":
            throw await de_MarksNotSupportedForFormatExceptionRes(parsedOutput, context);
        case "ServiceFailureException":
        case "com.amazonaws.polly#ServiceFailureException":
            throw await de_ServiceFailureExceptionRes(parsedOutput, context);
        case "SsmlMarksNotSupportedForTextTypeException":
        case "com.amazonaws.polly#SsmlMarksNotSupportedForTextTypeException":
            throw await de_SsmlMarksNotSupportedForTextTypeExceptionRes(parsedOutput, context);
        case "TextLengthExceededException":
        case "com.amazonaws.polly#TextLengthExceededException":
            throw await de_TextLengthExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.withBaseException)(_models_PollyServiceException__WEBPACK_IMPORTED_MODULE_2__.PollyServiceException);
const de_EngineNotSupportedExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.EngineNotSupportedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidLexiconExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidLexiconException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidNextTokenExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidNextTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidS3BucketExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidS3BucketException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidS3KeyExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidS3KeyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidSampleRateExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidSampleRateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidSnsTopicArnExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidSnsTopicArnException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidSsmlExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidSsmlException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_InvalidTaskIdExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.InvalidTaskIdException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_LanguageNotSupportedExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.LanguageNotSupportedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_LexiconNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.LexiconNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_LexiconSizeExceededExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.LexiconSizeExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_MarksNotSupportedForFormatExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.MarksNotSupportedForFormatException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_MaxLexemeLengthExceededExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.MaxLexemeLengthExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_MaxLexiconsNumberExceededExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.MaxLexiconsNumberExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_ServiceFailureExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.ServiceFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_SsmlMarksNotSupportedForTextTypeExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.SsmlMarksNotSupportedForTextTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_SynthesisTaskNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.SynthesisTaskNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_TextLengthExceededExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.TextLengthExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnsupportedPlsAlphabetExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UnsupportedPlsAlphabetException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_UnsupportedPlsLanguageExceptionRes = async (parsedOutput, context) => {
    const contents = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.map)({});
    const data = parsedOutput.body;
    const doc = (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(data, {
        message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
    Object.assign(contents, doc);
    const exception = new _models_models_0__WEBPACK_IMPORTED_MODULE_3__.UnsupportedPlsLanguageException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.decorateServiceException)(exception, parsedOutput.body);
};
const de_LexiconAttributes = (output, context) => {
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Alphabet: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LanguageCode: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LastModified: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        LexemesCount: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        LexiconArn: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        Size: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
    });
};
const de_LexiconDescription = (output, context) => {
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        Attributes: (_) => de_LexiconAttributes(_, context),
        Name: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_LexiconDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_LexiconDescription(entry, context);
    });
    return retVal;
};
const de_SynthesisTask = (output, context) => {
    return (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.take)(output, {
        CreationTime: (_) => (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNonNull)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.parseEpochTimestamp)((0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectNumber)(_))),
        Engine: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LanguageCode: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        LexiconNames: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        OutputFormat: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        OutputUri: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        RequestCharacters: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectInt32,
        SampleRate: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        SnsTopicArn: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        SpeechMarkTypes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__._json,
        TaskId: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        TaskStatus: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        TaskStatusReason: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        TextType: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
        VoiceId: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.expectString,
    });
};
const de_SynthesisTasks = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_SynthesisTask(entry, context);
    });
    return retVal;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/runtimeConfig.browser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/runtimeConfig.browser.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRuntimeConfig": () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../package.json */ "./node_modules/@aws-sdk/client-polly/package.json");
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/sha256-browser */ "./node_modules/@aws-crypto/sha256-browser/build/index.js");
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/config-resolver */ "./node_modules/@aws-sdk/config-resolver/dist-es/index.js");
/* harmony import */ var _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/fetch-http-handler */ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/index.js");
/* harmony import */ var _aws_sdk_invalid_dependency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/invalid-dependency */ "./node_modules/@aws-sdk/invalid-dependency/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_body_length_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/util-body-length-browser */ "./node_modules/@aws-sdk/util-body-length-browser/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_stream_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/util-stream-browser */ "./node_modules/@aws-sdk/util-stream-browser/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/util-user-agent-browser */ "./node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js");
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./runtimeConfig.shared */ "./node_modules/@aws-sdk/client-polly/dist-es/runtimeConfig.shared.js");
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_defaults_mode_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-sdk/util-defaults-mode-browser */ "./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/index.js");












const getRuntimeConfig = (config) => {
    const defaultsMode = (0,_aws_sdk_util_defaults_mode_browser__WEBPACK_IMPORTED_MODULE_9__.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_8__.loadConfigsForDefaultMode);
    const clientSharedValues = (0,_runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_10__.getRuntimeConfig)(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "browser",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? _aws_sdk_util_body_length_browser__WEBPACK_IMPORTED_MODULE_4__.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,_aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_7__.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_11__.version }),
        maxAttempts: config?.maxAttempts ?? _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_MAX_ATTEMPTS,
        region: config?.region ?? (0,_aws_sdk_invalid_dependency__WEBPACK_IMPORTED_MODULE_3__.invalidProvider)("Region is missing"),
        requestHandler: config?.requestHandler ?? new _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_2__.FetchHttpHandler(defaultConfigProvider),
        retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_RETRY_MODE),
        sdkStreamMixin: config?.sdkStreamMixin ?? _aws_sdk_util_stream_browser__WEBPACK_IMPORTED_MODULE_6__.sdkStreamMixin,
        sha256: config?.sha256 ?? _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__.Sha256,
        streamCollector: config?.streamCollector ?? _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_2__.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_USE_DUALSTACK_ENDPOINT)),
        useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_USE_FIPS_ENDPOINT)),
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/dist-es/runtimeConfig.shared.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/dist-es/runtimeConfig.shared.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRuntimeConfig": () => (/* binding */ getRuntimeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/smithy-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js");
/* harmony import */ var _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/url-parser */ "./node_modules/@aws-sdk/url-parser/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-base64 */ "./node_modules/@aws-sdk/util-base64/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");
/* harmony import */ var _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endpoint/endpointResolver */ "./node_modules/@aws-sdk/client-polly/dist-es/endpoint/endpointResolver.js");





const getRuntimeConfig = (config) => ({
    apiVersion: "2016-06-10",
    base64Decoder: config?.base64Decoder ?? _aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_2__.fromBase64,
    base64Encoder: config?.base64Encoder ?? _aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_2__.toBase64,
    disableHostPrefix: config?.disableHostPrefix ?? false,
    endpointProvider: config?.endpointProvider ?? _endpoint_endpointResolver__WEBPACK_IMPORTED_MODULE_4__.defaultEndpointResolver,
    logger: config?.logger ?? new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.NoOpLogger(),
    serviceId: config?.serviceId ?? "Polly",
    urlParser: config?.urlParser ?? _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_1__.parseUrl,
    utf8Decoder: config?.utf8Decoder ?? _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.fromUtf8,
    utf8Encoder: config?.utf8Encoder ?? _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8,
});


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_USE_DUALSTACK_ENDPOINT": () => (/* binding */ CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "DEFAULT_USE_DUALSTACK_ENDPOINT": () => (/* binding */ DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "ENV_USE_DUALSTACK_ENDPOINT": () => (/* binding */ ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS": () => (/* binding */ NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-config-provider */ "./node_modules/@aws-sdk/util-config-provider/dist-es/index.js");

const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;
const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0,_aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(env, ENV_USE_DUALSTACK_ENDPOINT, _aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.ENV),
    configFileSelector: (profile) => (0,_aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(profile, CONFIG_USE_DUALSTACK_ENDPOINT, _aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.CONFIG),
    default: false,
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_USE_FIPS_ENDPOINT": () => (/* binding */ CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   "DEFAULT_USE_FIPS_ENDPOINT": () => (/* binding */ DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   "ENV_USE_FIPS_ENDPOINT": () => (/* binding */ ENV_USE_FIPS_ENDPOINT),
/* harmony export */   "NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS": () => (/* binding */ NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-config-provider */ "./node_modules/@aws-sdk/util-config-provider/dist-es/index.js");

const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
const DEFAULT_USE_FIPS_ENDPOINT = false;
const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0,_aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(env, ENV_USE_FIPS_ENDPOINT, _aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.ENV),
    configFileSelector: (profile) => (0,_aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)(profile, CONFIG_USE_FIPS_ENDPOINT, _aws_sdk_util_config_provider__WEBPACK_IMPORTED_MODULE_0__.SelectorType.CONFIG),
    default: false,
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_USE_DUALSTACK_ENDPOINT": () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "CONFIG_USE_FIPS_ENDPOINT": () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   "DEFAULT_USE_DUALSTACK_ENDPOINT": () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "DEFAULT_USE_FIPS_ENDPOINT": () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   "ENV_USE_DUALSTACK_ENDPOINT": () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "ENV_USE_FIPS_ENDPOINT": () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.ENV_USE_FIPS_ENDPOINT),
/* harmony export */   "NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS": () => (/* reexport safe */ _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   "NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS": () => (/* reexport safe */ _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   "resolveCustomEndpointsConfig": () => (/* reexport safe */ _resolveCustomEndpointsConfig__WEBPACK_IMPORTED_MODULE_2__.resolveCustomEndpointsConfig),
/* harmony export */   "resolveEndpointsConfig": () => (/* reexport safe */ _resolveEndpointsConfig__WEBPACK_IMPORTED_MODULE_3__.resolveEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _NodeUseDualstackEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeUseDualstackEndpointConfigOptions */ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js");
/* harmony import */ var _NodeUseFipsEndpointConfigOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeUseFipsEndpointConfigOptions */ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js");
/* harmony import */ var _resolveCustomEndpointsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveCustomEndpointsConfig */ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js");
/* harmony import */ var _resolveEndpointsConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpointsConfig */ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js");






/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveCustomEndpointsConfig": () => (/* binding */ resolveCustomEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-middleware */ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js");

const resolveCustomEndpointsConfig = (input) => {
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false),
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveEndpointsConfig": () => (/* binding */ resolveEndpointsConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-middleware */ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js");
/* harmony import */ var _utils_getEndpointFromRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getEndpointFromRegion */ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js");


const resolveEndpointsConfig = (input) => {
    const useDualstackEndpoint = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: endpoint
            ? (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => (0,_utils_getEndpointFromRegion__WEBPACK_IMPORTED_MODULE_1__.getEndpointFromRegion)({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndpointFromRegion": () => (/* binding */ getEndpointFromRegion)
/* harmony export */ });
const getEndpointFromRegion = async (input) => {
    const { tls = true } = input;
    const region = await input.region();
    const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
    if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
    }
    const useDualstackEndpoint = await input.useDualstackEndpoint();
    const useFipsEndpoint = await input.useFipsEndpoint();
    const { hostname } = (await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint })) ?? {};
    if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
    }
    return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_USE_DUALSTACK_ENDPOINT": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "CONFIG_USE_FIPS_ENDPOINT": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG_USE_FIPS_ENDPOINT),
/* harmony export */   "DEFAULT_USE_DUALSTACK_ENDPOINT": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "DEFAULT_USE_FIPS_ENDPOINT": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_USE_FIPS_ENDPOINT),
/* harmony export */   "ENV_USE_DUALSTACK_ENDPOINT": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_DUALSTACK_ENDPOINT),
/* harmony export */   "ENV_USE_FIPS_ENDPOINT": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.ENV_USE_FIPS_ENDPOINT),
/* harmony export */   "NODE_REGION_CONFIG_FILE_OPTIONS": () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   "NODE_REGION_CONFIG_OPTIONS": () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   "NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   "NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
/* harmony export */   "REGION_ENV_NAME": () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_ENV_NAME),
/* harmony export */   "REGION_INI_NAME": () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.REGION_INI_NAME),
/* harmony export */   "getRegionInfo": () => (/* reexport safe */ _regionInfo__WEBPACK_IMPORTED_MODULE_2__.getRegionInfo),
/* harmony export */   "resolveCustomEndpointsConfig": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.resolveCustomEndpointsConfig),
/* harmony export */   "resolveEndpointsConfig": () => (/* reexport safe */ _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__.resolveEndpointsConfig),
/* harmony export */   "resolveRegionConfig": () => (/* reexport safe */ _regionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _endpointsConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpointsConfig */ "./node_modules/@aws-sdk/config-resolver/dist-es/endpointsConfig/index.js");
/* harmony import */ var _regionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regionConfig */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/index.js");
/* harmony import */ var _regionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regionInfo */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/index.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/config.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/config.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODE_REGION_CONFIG_FILE_OPTIONS": () => (/* binding */ NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   "NODE_REGION_CONFIG_OPTIONS": () => (/* binding */ NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   "REGION_ENV_NAME": () => (/* binding */ REGION_ENV_NAME),
/* harmony export */   "REGION_INI_NAME": () => (/* binding */ REGION_INI_NAME)
/* harmony export */ });
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/getRealRegion.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/getRealRegion.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRealRegion": () => (/* binding */ getRealRegion)
/* harmony export */ });
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFipsRegion */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/isFipsRegion.js");

const getRealRegion = (region) => (0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_0__.isFipsRegion)(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NODE_REGION_CONFIG_FILE_OPTIONS": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_FILE_OPTIONS),
/* harmony export */   "NODE_REGION_CONFIG_OPTIONS": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.NODE_REGION_CONFIG_OPTIONS),
/* harmony export */   "REGION_ENV_NAME": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_ENV_NAME),
/* harmony export */   "REGION_INI_NAME": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.REGION_INI_NAME),
/* harmony export */   "resolveRegionConfig": () => (/* reexport safe */ _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__.resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/config.js");
/* harmony import */ var _resolveRegionConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveRegionConfig */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/resolveRegionConfig.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/isFipsRegion.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/isFipsRegion.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFipsRegion": () => (/* binding */ isFipsRegion)
/* harmony export */ });
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/resolveRegionConfig.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/resolveRegionConfig.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveRegionConfig": () => (/* binding */ resolveRegionConfig)
/* harmony export */ });
/* harmony import */ var _getRealRegion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRealRegion */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/getRealRegion.js");
/* harmony import */ var _isFipsRegion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFipsRegion */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionConfig/isFipsRegion.js");


const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(region);
            }
            const providedRegion = await region();
            return (0,_getRealRegion__WEBPACK_IMPORTED_MODULE_0__.getRealRegion)(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if ((0,_isFipsRegion__WEBPACK_IMPORTED_MODULE_1__.isFipsRegion)(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/PartitionHash.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/PartitionHash.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/RegionHash.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/RegionHash.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHostnameFromVariants": () => (/* binding */ getHostnameFromVariants)
/* harmony export */ });
const getHostnameFromVariants = (variants = [], { useFipsEndpoint, useDualstackEndpoint }) => variants.find(({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))?.hostname;


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getRegionInfo.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getRegionInfo.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegionInfo": () => (/* binding */ getRegionInfo)
/* harmony export */ });
/* harmony import */ var _getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHostnameFromVariants */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js");
/* harmony import */ var _getResolvedHostname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getResolvedHostname */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedHostname.js");
/* harmony import */ var _getResolvedPartition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getResolvedPartition */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedPartition.js");
/* harmony import */ var _getResolvedSigningRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getResolvedSigningRegion */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js");




const getRegionInfo = (region, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash, }) => {
    const partition = (0,_getResolvedPartition__WEBPACK_IMPORTED_MODULE_2__.getResolvedPartition)(region, { partitionHash });
    const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;
    const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
    const regionHostname = (0,_getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__.getHostnameFromVariants)(regionHash[resolvedRegion]?.variants, hostnameOptions);
    const partitionHostname = (0,_getHostnameFromVariants__WEBPACK_IMPORTED_MODULE_0__.getHostnameFromVariants)(partitionHash[partition]?.variants, hostnameOptions);
    const hostname = (0,_getResolvedHostname__WEBPACK_IMPORTED_MODULE_1__.getResolvedHostname)(resolvedRegion, { regionHostname, partitionHostname });
    if (hostname === undefined) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
    }
    const signingRegion = (0,_getResolvedSigningRegion__WEBPACK_IMPORTED_MODULE_3__.getResolvedSigningRegion)(hostname, {
        signingRegion: regionHash[resolvedRegion]?.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint,
    });
    return {
        partition,
        signingService,
        hostname,
        ...(signingRegion && { signingRegion }),
        ...(regionHash[resolvedRegion]?.signingService && {
            signingService: regionHash[resolvedRegion].signingService,
        }),
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedHostname.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedHostname.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResolvedHostname": () => (/* binding */ getResolvedHostname)
/* harmony export */ });
const getResolvedHostname = (resolvedRegion, { regionHostname, partitionHostname }) => regionHostname
    ? regionHostname
    : partitionHostname
        ? partitionHostname.replace("{region}", resolvedRegion)
        : undefined;


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedPartition.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedPartition.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResolvedPartition": () => (/* binding */ getResolvedPartition)
/* harmony export */ });
const getResolvedPartition = (region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws";


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResolvedSigningRegion": () => (/* binding */ getResolvedSigningRegion)
/* harmony export */ });
const getResolvedSigningRegion = (hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
    if (signingRegion) {
        return signingRegion;
    }
    else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
            return regionRegexmatchArray[0].slice(1, -1);
        }
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegionInfo": () => (/* reexport safe */ _getRegionInfo__WEBPACK_IMPORTED_MODULE_2__.getRegionInfo)
/* harmony export */ });
/* harmony import */ var _PartitionHash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartitionHash */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/PartitionHash.js");
/* harmony import */ var _RegionHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegionHash */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/RegionHash.js");
/* harmony import */ var _getRegionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRegionInfo */ "./node_modules/@aws-sdk/config-resolver/dist-es/regionInfo/getRegionInfo.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/InMemoryStorage.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/InMemoryStorage.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InMemoryStorage": () => (/* binding */ InMemoryStorage)
/* harmony export */ });
class InMemoryStorage {
    constructor(store = {}) {
        this.store = store;
    }
    getItem(key) {
        if (key in this.store) {
            return this.store[key];
        }
        return null;
    }
    removeItem(key) {
        delete this.store[key];
    }
    setItem(key, value) {
        this.store[key] = value;
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/IndexedDbStorage.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/IndexedDbStorage.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexedDbStorage": () => (/* binding */ IndexedDbStorage)
/* harmony export */ });
const STORE_NAME = "IdentityIds";
class IndexedDbStorage {
    constructor(dbName = "aws:cognito-identity-ids") {
        this.dbName = dbName;
    }
    getItem(key) {
        return this.withObjectStore("readonly", (store) => {
            const req = store.get(key);
            return new Promise((resolve) => {
                req.onerror = () => resolve(null);
                req.onsuccess = () => resolve(req.result ? req.result.value : null);
            });
        }).catch(() => null);
    }
    removeItem(key) {
        return this.withObjectStore("readwrite", (store) => {
            const req = store.delete(key);
            return new Promise((resolve, reject) => {
                req.onerror = () => reject(req.error);
                req.onsuccess = () => resolve();
            });
        });
    }
    setItem(id, value) {
        return this.withObjectStore("readwrite", (store) => {
            const req = store.put({ id, value });
            return new Promise((resolve, reject) => {
                req.onerror = () => reject(req.error);
                req.onsuccess = () => resolve();
            });
        });
    }
    getDb() {
        const openDbRequest = self.indexedDB.open(this.dbName, 1);
        return new Promise((resolve, reject) => {
            openDbRequest.onsuccess = () => {
                resolve(openDbRequest.result);
            };
            openDbRequest.onerror = () => {
                reject(openDbRequest.error);
            };
            openDbRequest.onblocked = () => {
                reject(new Error("Unable to access DB"));
            };
            openDbRequest.onupgradeneeded = () => {
                const db = openDbRequest.result;
                db.onerror = () => {
                    reject(new Error("Failed to create object store"));
                };
                db.createObjectStore(STORE_NAME, { keyPath: "id" });
            };
        });
    }
    withObjectStore(mode, action) {
        return this.getDb().then((db) => {
            const tx = db.transaction(STORE_NAME, mode);
            tx.oncomplete = () => db.close();
            return new Promise((resolve, reject) => {
                tx.onerror = () => reject(tx.error);
                resolve(action(tx.objectStore(STORE_NAME)));
            }).catch((err) => {
                db.close();
                throw err;
            });
        });
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentity.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentity.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromCognitoIdentity": () => (/* binding */ fromCognitoIdentity)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-cognito-identity */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js");
/* harmony import */ var _aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/property-provider */ "./node_modules/@aws-sdk/property-provider/dist-es/index.js");
/* harmony import */ var _resolveLogins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveLogins */ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/resolveLogins.js");



function fromCognitoIdentity(parameters) {
    return async () => {
        const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(), Expiration, SecretKey = throwOnMissingSecretKey(), SessionToken, } = throwOnMissingCredentials(), } = await parameters.client.send(new _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_1__.GetCredentialsForIdentityCommand({
            CustomRoleArn: parameters.customRoleArn,
            IdentityId: parameters.identityId,
            Logins: parameters.logins ? await (0,_resolveLogins__WEBPACK_IMPORTED_MODULE_2__.resolveLogins)(parameters.logins) : undefined,
        }));
        return {
            identityId: parameters.identityId,
            accessKeyId: AccessKeyId,
            secretAccessKey: SecretKey,
            sessionToken: SessionToken,
            expiration: Expiration,
        };
    };
}
function throwOnMissingAccessKeyId() {
    throw new _aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("Response from Amazon Cognito contained no access key ID");
}
function throwOnMissingCredentials() {
    throw new _aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("Response from Amazon Cognito contained no credentials");
}
function throwOnMissingSecretKey() {
    throw new _aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("Response from Amazon Cognito contained no secret key");
}


/***/ }),

/***/ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentityPool.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentityPool.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromCognitoIdentityPool": () => (/* binding */ fromCognitoIdentityPool)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/client-cognito-identity */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js");
/* harmony import */ var _aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/property-provider */ "./node_modules/@aws-sdk/property-provider/dist-es/index.js");
/* harmony import */ var _fromCognitoIdentity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromCognitoIdentity */ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentity.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/localStorage.js");
/* harmony import */ var _resolveLogins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveLogins */ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/resolveLogins.js");





function fromCognitoIdentityPool({ accountId, cache = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.localStorage)(), client, customRoleArn, identityPoolId, logins, userIdentifier = !logins || Object.keys(logins).length === 0 ? "ANONYMOUS" : undefined, }) {
    const cacheKey = userIdentifier ? `aws:cognito-identity-credentials:${identityPoolId}:${userIdentifier}` : undefined;
    let provider = async () => {
        let identityId = cacheKey && (await cache.getItem(cacheKey));
        if (!identityId) {
            const { IdentityId = throwOnMissingId() } = await client.send(new _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_2__.GetIdCommand({
                AccountId: accountId,
                IdentityPoolId: identityPoolId,
                Logins: logins ? await (0,_resolveLogins__WEBPACK_IMPORTED_MODULE_3__.resolveLogins)(logins) : undefined,
            }));
            identityId = IdentityId;
            if (cacheKey) {
                Promise.resolve(cache.setItem(cacheKey, identityId)).catch(() => { });
            }
        }
        provider = (0,_fromCognitoIdentity__WEBPACK_IMPORTED_MODULE_4__.fromCognitoIdentity)({
            client,
            customRoleArn,
            logins,
            identityId,
        });
        return provider();
    };
    return () => provider().catch(async (err) => {
        if (cacheKey) {
            Promise.resolve(cache.removeItem(cacheKey)).catch(() => { });
        }
        throw err;
    });
}
function throwOnMissingId() {
    throw new _aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError("Response from Amazon Cognito contained no identity ID");
}


/***/ }),

/***/ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/localStorage.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/localStorage.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorage": () => (/* binding */ localStorage)
/* harmony export */ });
/* harmony import */ var _IndexedDbStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexedDbStorage */ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/IndexedDbStorage.js");
/* harmony import */ var _InMemoryStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InMemoryStorage */ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/InMemoryStorage.js");


const inMemoryStorage = new _InMemoryStorage__WEBPACK_IMPORTED_MODULE_0__.InMemoryStorage();
function localStorage() {
    if (typeof self === "object" && self.indexedDB) {
        return new _IndexedDbStorage__WEBPACK_IMPORTED_MODULE_1__.IndexedDbStorage();
    }
    if (typeof window === "object" && window.localStorage) {
        return window.localStorage;
    }
    return inMemoryStorage;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/resolveLogins.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/resolveLogins.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveLogins": () => (/* binding */ resolveLogins)
/* harmony export */ });
function resolveLogins(logins) {
    return Promise.all(Object.keys(logins).reduce((arr, name) => {
        const tokenOrProvider = logins[name];
        if (typeof tokenOrProvider === "string") {
            arr.push([name, tokenOrProvider]);
        }
        else {
            arr.push(tokenOrProvider().then((token) => [name, token]));
        }
        return arr;
    }, [])).then((resolvedPairs) => resolvedPairs.reduce((logins, [key, value]) => {
        logins[key] = value;
        return logins;
    }, {}));
}


/***/ }),

/***/ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/fetch-http-handler.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/fetch-http-handler/dist-es/fetch-http-handler.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchHttpHandler": () => (/* binding */ FetchHttpHandler)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_querystring_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/querystring-builder */ "./node_modules/@aws-sdk/querystring-builder/dist-es/index.js");
/* harmony import */ var _request_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-timeout */ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/request-timeout.js");



class FetchHttpHandler {
    constructor(options) {
        if (typeof options === "function") {
            this.configProvider = options().then((opts) => opts || {});
        }
        else {
            this.config = options ?? {};
            this.configProvider = Promise.resolve(this.config);
        }
    }
    destroy() {
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        const requestTimeoutInMs = this.config.requestTimeout;
        if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            return Promise.reject(abortError);
        }
        let path = request.path;
        if (request.query) {
            const queryString = (0,_aws_sdk_querystring_builder__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(request.query);
            if (queryString) {
                path += `?${queryString}`;
            }
        }
        const { port, method } = request;
        const url = `${request.protocol}//${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? undefined : request.body;
        const requestOptions = {
            body,
            headers: new Headers(request.headers),
            method: method,
        };
        if (typeof AbortController !== "undefined") {
            requestOptions["signal"] = abortSignal;
        }
        const fetchRequest = new Request(url, requestOptions);
        const raceOfPromises = [
            fetch(fetchRequest).then((response) => {
                const fetchHeaders = response.headers;
                const transformedHeaders = {};
                for (const pair of fetchHeaders.entries()) {
                    transformedHeaders[pair[0]] = pair[1];
                }
                const hasReadableStream = response.body !== undefined;
                if (!hasReadableStream) {
                    return response.blob().then((body) => ({
                        response: new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({
                            headers: transformedHeaders,
                            statusCode: response.status,
                            body,
                        }),
                    }));
                }
                return {
                    response: new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({
                        headers: transformedHeaders,
                        statusCode: response.status,
                        body: response.body,
                    }),
                };
            }),
            (0,_request_timeout__WEBPACK_IMPORTED_MODULE_2__.requestTimeout)(requestTimeoutInMs),
        ];
        if (abortSignal) {
            raceOfPromises.push(new Promise((resolve, reject) => {
                abortSignal.onabort = () => {
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }));
        }
        return Promise.race(raceOfPromises);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/fetch-http-handler/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchHttpHandler": () => (/* reexport safe */ _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.FetchHttpHandler),
/* harmony export */   "streamCollector": () => (/* reexport safe */ _stream_collector__WEBPACK_IMPORTED_MODULE_1__.streamCollector)
/* harmony export */ });
/* harmony import */ var _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-http-handler */ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/fetch-http-handler.js");
/* harmony import */ var _stream_collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stream-collector */ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/stream-collector.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/request-timeout.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/fetch-http-handler/dist-es/request-timeout.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestTimeout": () => (/* binding */ requestTimeout)
/* harmony export */ });
function requestTimeout(timeoutInMs = 0) {
    return new Promise((resolve, reject) => {
        if (timeoutInMs) {
            setTimeout(() => {
                const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
                timeoutError.name = "TimeoutError";
                reject(timeoutError);
            }, timeoutInMs);
        }
    });
}


/***/ }),

/***/ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/stream-collector.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/fetch-http-handler/dist-es/stream-collector.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "streamCollector": () => (/* binding */ streamCollector)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-base64 */ "./node_modules/@aws-sdk/util-base64/dist-es/index.js");

const streamCollector = (stream) => {
    if (typeof Blob === "function" && stream instanceof Blob) {
        return collectBlob(stream);
    }
    return collectStream(stream);
};
async function collectBlob(blob) {
    const base64 = await readToBase64(blob);
    const arrayBuffer = (0,_aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_0__.fromBase64)(base64);
    return new Uint8Array(arrayBuffer);
}
async function collectStream(stream) {
    let res = new Uint8Array(0);
    const reader = stream.getReader();
    let isDone = false;
    while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
            const prior = res;
            res = new Uint8Array(prior.length + value.length);
            res.set(prior);
            res.set(value, prior.length);
        }
        isDone = done;
    }
    return res;
}
function readToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState !== 2) {
                return reject(new Error("Reader aborted too early"));
            }
            const result = (reader.result ?? "");
            const commaIndex = result.indexOf(",");
            const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
            resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
    });
}


/***/ }),

/***/ "./node_modules/@aws-sdk/invalid-dependency/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/invalid-dependency/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invalidFunction": () => (/* reexport safe */ _invalidFunction__WEBPACK_IMPORTED_MODULE_0__.invalidFunction),
/* harmony export */   "invalidProvider": () => (/* reexport safe */ _invalidProvider__WEBPACK_IMPORTED_MODULE_1__.invalidProvider)
/* harmony export */ });
/* harmony import */ var _invalidFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalidFunction */ "./node_modules/@aws-sdk/invalid-dependency/dist-es/invalidFunction.js");
/* harmony import */ var _invalidProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invalidProvider */ "./node_modules/@aws-sdk/invalid-dependency/dist-es/invalidProvider.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/invalid-dependency/dist-es/invalidFunction.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/invalid-dependency/dist-es/invalidFunction.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invalidFunction": () => (/* binding */ invalidFunction)
/* harmony export */ });
const invalidFunction = (message) => () => {
    throw new Error(message);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/invalid-dependency/dist-es/invalidProvider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/invalid-dependency/dist-es/invalidProvider.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invalidProvider": () => (/* binding */ invalidProvider)
/* harmony export */ });
const invalidProvider = (message) => () => Promise.reject(message);


/***/ }),

/***/ "./node_modules/@aws-sdk/is-array-buffer/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/is-array-buffer/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArrayBuffer": () => (/* binding */ isArrayBuffer)
/* harmony export */ });
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-content-length/dist-es/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-content-length/dist-es/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentLengthMiddleware": () => (/* binding */ contentLengthMiddleware),
/* harmony export */   "contentLengthMiddlewareOptions": () => (/* binding */ contentLengthMiddlewareOptions),
/* harmony export */   "getContentLengthPlugin": () => (/* binding */ getContentLengthPlugin)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");

const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
const contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
});


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConfigValueProvider": () => (/* binding */ createConfigValueProvider)
/* harmony export */ });
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
    const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndpointFromInstructions": () => (/* binding */ getEndpointFromInstructions),
/* harmony export */   "resolveParams": () => (/* binding */ resolveParams)
/* harmony export */ });
/* harmony import */ var _service_customizations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service-customizations */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/service-customizations/index.js");
/* harmony import */ var _createConfigValueProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createConfigValueProvider */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js");


const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await (0,_createConfigValueProvider__WEBPACK_IMPORTED_MODULE_1__.createConfigValueProvider)(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await (0,_service_customizations__WEBPACK_IMPORTED_MODULE_0__.resolveParamsForS3)(endpointParams);
    }
    return endpointParams;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndpointFromInstructions": () => (/* reexport safe */ _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions),
/* harmony export */   "resolveParams": () => (/* reexport safe */ _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.resolveParams),
/* harmony export */   "toEndpointV1": () => (/* reexport safe */ _toEndpointV1__WEBPACK_IMPORTED_MODULE_1__.toEndpointV1)
/* harmony export */ });
/* harmony import */ var _getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEndpointFromInstructions */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js");
/* harmony import */ var _toEndpointV1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toEndpointV1 */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/toEndpointV1.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/toEndpointV1.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/toEndpointV1.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toEndpointV1": () => (/* binding */ toEndpointV1)
/* harmony export */ });
/* harmony import */ var _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/url-parser */ "./node_modules/@aws-sdk/url-parser/dist-es/index.js");

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return (0,_aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(endpoint.url);
        }
        return endpoint;
    }
    return (0,_aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(endpoint);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/endpointMiddleware.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/endpointMiddleware.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpointMiddleware": () => (/* binding */ endpointMiddleware)
/* harmony export */ });
/* harmony import */ var _adaptors_getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adaptors/getEndpointFromInstructions */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js");

const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        const endpoint = await (0,_adaptors_getEndpointFromInstructions__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions)(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
        }
        return next({
            ...args,
        });
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/getEndpointPlugin.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/getEndpointPlugin.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpointMiddlewareOptions": () => (/* binding */ endpointMiddlewareOptions),
/* harmony export */   "getEndpointPlugin": () => (/* binding */ getEndpointPlugin)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js");
/* harmony import */ var _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpointMiddleware */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/endpointMiddleware.js");


const endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.serializerMiddlewareOption.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo((0,_endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__.endpointMiddleware)({
            config,
            instructions,
        }), endpointMiddlewareOptions);
    },
});


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpointMiddleware": () => (/* reexport safe */ _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__.endpointMiddleware),
/* harmony export */   "endpointMiddlewareOptions": () => (/* reexport safe */ _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__.endpointMiddlewareOptions),
/* harmony export */   "getEndpointFromInstructions": () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.getEndpointFromInstructions),
/* harmony export */   "getEndpointPlugin": () => (/* reexport safe */ _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__.getEndpointPlugin),
/* harmony export */   "resolveEndpointConfig": () => (/* reexport safe */ _resolveEndpointConfig__WEBPACK_IMPORTED_MODULE_3__.resolveEndpointConfig),
/* harmony export */   "resolveParams": () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.resolveParams),
/* harmony export */   "toEndpointV1": () => (/* reexport safe */ _adaptors__WEBPACK_IMPORTED_MODULE_0__.toEndpointV1)
/* harmony export */ });
/* harmony import */ var _adaptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adaptors */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/index.js");
/* harmony import */ var _endpointMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpointMiddleware */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/endpointMiddleware.js");
/* harmony import */ var _getEndpointPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointPlugin */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/getEndpointPlugin.js");
/* harmony import */ var _resolveEndpointConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolveEndpointConfig */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/resolveEndpointConfig.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/types.js");







/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/resolveEndpointConfig.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/resolveEndpointConfig.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveEndpointConfig": () => (/* binding */ resolveEndpointConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-middleware */ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js");
/* harmony import */ var _adaptors_toEndpointV1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adaptors/toEndpointV1 */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/adaptors/toEndpointV1.js");


const resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => (0,_adaptors_toEndpointV1__WEBPACK_IMPORTED_MODULE_1__.toEndpointV1)(await (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.useFipsEndpoint ?? false),
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/service-customizations/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/service-customizations/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOT_PATTERN": () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.DOT_PATTERN),
/* harmony export */   "S3_HOSTNAME_PATTERN": () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.S3_HOSTNAME_PATTERN),
/* harmony export */   "isArnBucketName": () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.isArnBucketName),
/* harmony export */   "isDnsCompatibleBucketName": () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.isDnsCompatibleBucketName),
/* harmony export */   "resolveParamsForS3": () => (/* reexport safe */ _s3__WEBPACK_IMPORTED_MODULE_0__.resolveParamsForS3)
/* harmony export */ });
/* harmony import */ var _s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./s3 */ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/service-customizations/s3.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/service-customizations/s3.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/service-customizations/s3.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOT_PATTERN": () => (/* binding */ DOT_PATTERN),
/* harmony export */   "S3_HOSTNAME_PATTERN": () => (/* binding */ S3_HOSTNAME_PATTERN),
/* harmony export */   "isArnBucketName": () => (/* binding */ isArnBucketName),
/* harmony export */   "isDnsCompatibleBucketName": () => (/* binding */ isDnsCompatibleBucketName),
/* harmony export */   "resolveParamsForS3": () => (/* binding */ resolveParamsForS3)
/* harmony export */ });
const resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, region, account, typeOrId] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = [arn, partition, service, account, typeOrId].filter(Boolean).length === 5;
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return arn === "arn" && !!partition && !!service && !!account && !!typeOrId;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-endpoint/dist-es/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-endpoint/dist-es/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHostHeaderPlugin": () => (/* binding */ getHostHeaderPlugin),
/* harmony export */   "hostHeaderMiddleware": () => (/* binding */ hostHeaderMiddleware),
/* harmony export */   "hostHeaderMiddlewareOptions": () => (/* binding */ hostHeaderMiddlewareOptions),
/* harmony export */   "resolveHostHeaderConfig": () => (/* binding */ resolveHostHeaderConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");

function resolveHostHeaderConfig(input) {
    return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = "";
    }
    else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
            host += `:${request.port}`;
        request.headers["host"] = host;
    }
    return next(args);
};
const hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
});


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-logger/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoggerPlugin": () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.getLoggerPlugin),
/* harmony export */   "loggerMiddleware": () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.loggerMiddleware),
/* harmony export */   "loggerMiddlewareOptions": () => (/* reexport safe */ _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__.loggerMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _loggerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loggerMiddleware */ "./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLoggerPlugin": () => (/* binding */ getLoggerPlugin),
/* harmony export */   "loggerMiddleware": () => (/* binding */ loggerMiddleware),
/* harmony export */   "loggerMiddlewareOptions": () => (/* binding */ loggerMiddlewareOptions)
/* harmony export */ });
const loggerMiddleware = () => (next, context) => async (args) => {
    try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
        return response;
    }
    catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
        });
        throw error;
    }
};
const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRecursionDetectionMiddlewareOptions": () => (/* binding */ addRecursionDetectionMiddlewareOptions),
/* harmony export */   "getRecursionDetectionPlugin": () => (/* binding */ getRecursionDetectionPlugin),
/* harmony export */   "recursionDetectionMiddleware": () => (/* binding */ recursionDetectionMiddleware)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
const addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
    },
});


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/AdaptiveRetryStrategy.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/AdaptiveRetryStrategy.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdaptiveRetryStrategy": () => (/* binding */ AdaptiveRetryStrategy)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardRetryStrategy */ "./node_modules/@aws-sdk/middleware-retry/dist-es/StandardRetryStrategy.js");


class AdaptiveRetryStrategy extends _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__.DefaultRateLimiter();
        this.mode = _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/StandardRetryStrategy.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/StandardRetryStrategy.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardRetryStrategy": () => (/* binding */ StandardRetryStrategy)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/service-error-classification */ "./node_modules/@aws-sdk/service-error-classification/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _defaultRetryQuota__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultRetryQuota */ "./node_modules/@aws-sdk/middleware-retry/dist-es/defaultRetryQuota.js");
/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delayDecider */ "./node_modules/@aws-sdk/middleware-retry/dist-es/delayDecider.js");
/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryDecider */ "./node_modules/@aws-sdk/middleware-retry/dist-es/retryDecider.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./node_modules/@aws-sdk/middleware-retry/dist-es/util.js");








class StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.RETRY_MODES.STANDARD;
        this.retryDecider = options?.retryDecider ?? _retryDecider__WEBPACK_IMPORTED_MODULE_5__.defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? _delayDecider__WEBPACK_IMPORTED_MODULE_4__.defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? (0,_defaultRetryQuota__WEBPACK_IMPORTED_MODULE_3__.getDefaultRetryQuota)(_aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
            request.headers[_aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.INVOCATION_ID_HEADER] = (0,uuid__WEBPACK_IMPORTED_MODULE_7__["default"])();
        }
        while (true) {
            try {
                if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
                    request.headers[_aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options?.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options?.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = (0,_util__WEBPACK_IMPORTED_MODULE_6__.asSdkError)(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delayFromDecider = this.delayDecider((0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isThrottlingError)(err) ? _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.THROTTLING_RETRY_DELAY_BASE : _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_RETRY_DELAY_BASE, attempts);
                    const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
                    const delay = Math.max(delayFromResponse || 0, delayFromDecider);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
const getDelayFromRetryAfterHeader = (response) => {
    if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1000;
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate.getTime() - Date.now();
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/configurations.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/configurations.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_MAX_ATTEMPTS": () => (/* binding */ CONFIG_MAX_ATTEMPTS),
/* harmony export */   "CONFIG_RETRY_MODE": () => (/* binding */ CONFIG_RETRY_MODE),
/* harmony export */   "ENV_MAX_ATTEMPTS": () => (/* binding */ ENV_MAX_ATTEMPTS),
/* harmony export */   "ENV_RETRY_MODE": () => (/* binding */ ENV_RETRY_MODE),
/* harmony export */   "NODE_MAX_ATTEMPT_CONFIG_OPTIONS": () => (/* binding */ NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
/* harmony export */   "NODE_RETRY_MODE_CONFIG_OPTIONS": () => (/* binding */ NODE_RETRY_MODE_CONFIG_OPTIONS),
/* harmony export */   "resolveRetryConfig": () => (/* binding */ resolveRetryConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-middleware */ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");


const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
const CONFIG_MAX_ATTEMPTS = "max_attempts";
const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAX_ATTEMPTS,
};
const resolveRetryConfig = (input) => {
    const { retryStrategy } = input;
    const maxAttempts = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.maxAttempts ?? _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_MAX_ATTEMPTS);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (retryStrategy) {
                return retryStrategy;
            }
            const retryMode = await (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)(input.retryMode)();
            if (retryMode === _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__.RETRY_MODES.ADAPTIVE) {
                return new _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__.AdaptiveRetryStrategy(maxAttempts);
            }
            return new _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy(maxAttempts);
        },
    };
};
const ENV_RETRY_MODE = "AWS_RETRY_MODE";
const CONFIG_RETRY_MODE = "retry_mode";
const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_MODE,
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/defaultRetryQuota.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/defaultRetryQuota.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultRetryQuota": () => (/* binding */ getDefaultRetryQuota)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");

const getDefaultRetryQuota = (initialRetryTokens, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = options?.noRetryIncrement ?? _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__.NO_RETRY_INCREMENT;
    const retryCost = options?.retryCost ?? _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__.RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_RETRY_COST;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/delayDecider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/delayDecider.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultDelayDecider": () => (/* binding */ defaultDelayDecider)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");

const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(_aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdaptiveRetryStrategy": () => (/* reexport safe */ _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.AdaptiveRetryStrategy),
/* harmony export */   "CONFIG_MAX_ATTEMPTS": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.CONFIG_MAX_ATTEMPTS),
/* harmony export */   "CONFIG_RETRY_MODE": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.CONFIG_RETRY_MODE),
/* harmony export */   "ENV_MAX_ATTEMPTS": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.ENV_MAX_ATTEMPTS),
/* harmony export */   "ENV_RETRY_MODE": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.ENV_RETRY_MODE),
/* harmony export */   "NODE_MAX_ATTEMPT_CONFIG_OPTIONS": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
/* harmony export */   "NODE_RETRY_MODE_CONFIG_OPTIONS": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.NODE_RETRY_MODE_CONFIG_OPTIONS),
/* harmony export */   "StandardRetryStrategy": () => (/* reexport safe */ _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.StandardRetryStrategy),
/* harmony export */   "defaultDelayDecider": () => (/* reexport safe */ _delayDecider__WEBPACK_IMPORTED_MODULE_3__.defaultDelayDecider),
/* harmony export */   "defaultRetryDecider": () => (/* reexport safe */ _retryDecider__WEBPACK_IMPORTED_MODULE_5__.defaultRetryDecider),
/* harmony export */   "getOmitRetryHeadersPlugin": () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.getOmitRetryHeadersPlugin),
/* harmony export */   "getRetryAfterHint": () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.getRetryAfterHint),
/* harmony export */   "getRetryPlugin": () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.getRetryPlugin),
/* harmony export */   "omitRetryHeadersMiddleware": () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.omitRetryHeadersMiddleware),
/* harmony export */   "omitRetryHeadersMiddlewareOptions": () => (/* reexport safe */ _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__.omitRetryHeadersMiddlewareOptions),
/* harmony export */   "resolveRetryConfig": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_2__.resolveRetryConfig),
/* harmony export */   "retryMiddleware": () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.retryMiddleware),
/* harmony export */   "retryMiddlewareOptions": () => (/* reexport safe */ _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__.retryMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdaptiveRetryStrategy */ "./node_modules/@aws-sdk/middleware-retry/dist-es/AdaptiveRetryStrategy.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StandardRetryStrategy */ "./node_modules/@aws-sdk/middleware-retry/dist-es/StandardRetryStrategy.js");
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurations */ "./node_modules/@aws-sdk/middleware-retry/dist-es/configurations.js");
/* harmony import */ var _delayDecider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delayDecider */ "./node_modules/@aws-sdk/middleware-retry/dist-es/delayDecider.js");
/* harmony import */ var _omitRetryHeadersMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./omitRetryHeadersMiddleware */ "./node_modules/@aws-sdk/middleware-retry/dist-es/omitRetryHeadersMiddleware.js");
/* harmony import */ var _retryDecider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./retryDecider */ "./node_modules/@aws-sdk/middleware-retry/dist-es/retryDecider.js");
/* harmony import */ var _retryMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retryMiddleware */ "./node_modules/@aws-sdk/middleware-retry/dist-es/retryMiddleware.js");









/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/omitRetryHeadersMiddleware.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/omitRetryHeadersMiddleware.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOmitRetryHeadersPlugin": () => (/* binding */ getOmitRetryHeadersPlugin),
/* harmony export */   "omitRetryHeadersMiddleware": () => (/* binding */ omitRetryHeadersMiddleware),
/* harmony export */   "omitRetryHeadersMiddlewareOptions": () => (/* binding */ omitRetryHeadersMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");


const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
        delete request.headers[_aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__.INVOCATION_ID_HEADER];
        delete request.headers[_aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_1__.REQUEST_HEADER];
    }
    return next(args);
};
const omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
});


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/retryDecider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/retryDecider.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultRetryDecider": () => (/* binding */ defaultRetryDecider)
/* harmony export */ });
/* harmony import */ var _aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/service-error-classification */ "./node_modules/@aws-sdk/service-error-classification/dist-es/index.js");

const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return (0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isRetryableByTrait)(error) || (0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isClockSkewError)(error) || (0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isThrottlingError)(error) || (0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isTransientError)(error);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/retryMiddleware.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/retryMiddleware.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRetryAfterHint": () => (/* binding */ getRetryAfterHint),
/* harmony export */   "getRetryPlugin": () => (/* binding */ getRetryPlugin),
/* harmony export */   "retryMiddleware": () => (/* binding */ retryMiddleware),
/* harmony export */   "retryMiddlewareOptions": () => (/* binding */ retryMiddlewareOptions)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/service-error-classification */ "./node_modules/@aws-sdk/service-error-classification/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-retry */ "./node_modules/@aws-sdk/util-retry/dist-es/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./node_modules/@aws-sdk/middleware-retry/dist-es/util.js");





const retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
            request.headers[_aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.INVOCATION_ID_HEADER] = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
        }
        while (true) {
            try {
                if (_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
                    request.headers[_aws_sdk_util_retry__WEBPACK_IMPORTED_MODULE_2__.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                const { response, output } = await next(args);
                retryStrategy.recordSuccess(retryToken);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalRetryDelay;
                return { response, output };
            }
            catch (e) {
                const retryErrorInfo = getRetyErrorInto(e);
                lastError = (0,_util__WEBPACK_IMPORTED_MODULE_3__.asSdkError)(e);
                try {
                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
                }
                catch (refreshError) {
                    if (!lastError.$metadata) {
                        lastError.$metadata = {};
                    }
                    lastError.$metadata.attempts = attempts + 1;
                    lastError.$metadata.totalRetryDelay = totalRetryDelay;
                    throw lastError;
                }
                attempts = retryToken.getRetryCount();
                const delay = retryToken.getRetryDelay();
                totalRetryDelay += delay;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
    }
};
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
    typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
    typeof retryStrategy.recordSuccess !== "undefined";
const getRetyErrorInto = (error) => {
    const errorInfo = {
        errorType: getRetryErrorType(error),
    };
    const retryAfterHint = getRetryAfterHint(error.$response);
    if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
};
const getRetryErrorType = (error) => {
    if ((0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isThrottlingError)(error))
        return "THROTTLING";
    if ((0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isTransientError)(error))
        return "TRANSIENT";
    if ((0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_1__.isServerError)(error))
        return "SERVER_ERROR";
    return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
});
const getRetryAfterHint = (response) => {
    if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1000);
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-retry/dist-es/util.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-retry/dist-es/util.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asSdkError": () => (/* binding */ asSdkError)
/* harmony export */ });
const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-serde/dist-es/deserializerMiddleware.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-serde/dist-es/deserializerMiddleware.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializerMiddleware": () => (/* binding */ deserializerMiddleware)
/* harmony export */ });
const deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        if (!('$metadata' in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            error.message += "\n  " + hint;
        }
        throw error;
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-serde/dist-es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-serde/dist-es/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializerMiddleware": () => (/* reexport safe */ _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__.deserializerMiddleware),
/* harmony export */   "deserializerMiddlewareOption": () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.deserializerMiddlewareOption),
/* harmony export */   "getSerdePlugin": () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.getSerdePlugin),
/* harmony export */   "serializerMiddleware": () => (/* reexport safe */ _serializerMiddleware__WEBPACK_IMPORTED_MODULE_2__.serializerMiddleware),
/* harmony export */   "serializerMiddlewareOption": () => (/* reexport safe */ _serdePlugin__WEBPACK_IMPORTED_MODULE_1__.serializerMiddlewareOption)
/* harmony export */ });
/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserializerMiddleware */ "./node_modules/@aws-sdk/middleware-serde/dist-es/deserializerMiddleware.js");
/* harmony import */ var _serdePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serdePlugin */ "./node_modules/@aws-sdk/middleware-serde/dist-es/serdePlugin.js");
/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serializerMiddleware */ "./node_modules/@aws-sdk/middleware-serde/dist-es/serializerMiddleware.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-serde/dist-es/serdePlugin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-serde/dist-es/serdePlugin.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializerMiddlewareOption": () => (/* binding */ deserializerMiddlewareOption),
/* harmony export */   "getSerdePlugin": () => (/* binding */ getSerdePlugin),
/* harmony export */   "serializerMiddlewareOption": () => (/* binding */ serializerMiddlewareOption)
/* harmony export */ });
/* harmony import */ var _deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deserializerMiddleware */ "./node_modules/@aws-sdk/middleware-serde/dist-es/deserializerMiddleware.js");
/* harmony import */ var _serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializerMiddleware */ "./node_modules/@aws-sdk/middleware-serde/dist-es/serializerMiddleware.js");


const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add((0,_deserializerMiddleware__WEBPACK_IMPORTED_MODULE_0__.deserializerMiddleware)(config, deserializer), deserializerMiddlewareOption);
            commandStack.add((0,_serializerMiddleware__WEBPACK_IMPORTED_MODULE_1__.serializerMiddleware)(config, serializer), serializerMiddlewareOption);
        },
    };
}


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-serde/dist-es/serializerMiddleware.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-serde/dist-es/serializerMiddleware.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializerMiddleware": () => (/* binding */ serializerMiddleware)
/* harmony export */ });
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpoint = context.endpointV2?.url && options.urlParser
        ? async () => options.urlParser(context.endpointV2.url)
        : options.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-signing/dist-es/configurations.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-signing/dist-es/configurations.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveAwsAuthConfig": () => (/* binding */ resolveAwsAuthConfig),
/* harmony export */   "resolveSigV4AuthConfig": () => (/* binding */ resolveSigV4AuthConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/property-provider */ "./node_modules/@aws-sdk/property-provider/dist-es/index.js");
/* harmony import */ var _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/signature-v4 */ "./node_modules/@aws-sdk/signature-v4/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-middleware */ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js");



const CREDENTIAL_EXPIRE_WINDOW = 300000;
const resolveAwsAuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(input.signer);
    }
    else if (input.regionInfoProvider) {
        signer = () => (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(input.region)()
            .then(async (region) => [
            (await input.regionInfoProvider(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            input.signingRegion = input.signingRegion || signingRegion || region;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: input.signingName || input.defaultSigningName,
                signingRegion: await (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(input.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            input.signingRegion = input.signingRegion || signingRegion;
            input.signingName = input.signingName || signingService || input.serviceId;
            const params = {
                ...input,
                credentials: normalizedCreds,
                region: input.signingRegion,
                service: input.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = input.signerConstructor || _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4;
            return new SignerCtor(params);
        };
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const resolveSigV4AuthConfig = (input) => {
    const normalizedCreds = input.credentials
        ? normalizeCredentialProvider(input.credentials)
        : input.credentialDefaultProvider(input);
    const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
    let signer;
    if (input.signer) {
        signer = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(input.signer);
    }
    else {
        signer = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(new _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4({
            credentials: normalizedCreds,
            region: input.region,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
        }));
    }
    return {
        ...input,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const normalizeCredentialProvider = (credentials) => {
    if (typeof credentials === "function") {
        return (0,_aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__.memoize)(credentials, (credentials) => credentials.expiration !== undefined &&
            credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW, (credentials) => credentials.expiration !== undefined);
    }
    return (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(credentials);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-signing/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-signing/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "awsAuthMiddleware": () => (/* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_1__.awsAuthMiddleware),
/* harmony export */   "awsAuthMiddlewareOptions": () => (/* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_1__.awsAuthMiddlewareOptions),
/* harmony export */   "getAwsAuthPlugin": () => (/* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_1__.getAwsAuthPlugin),
/* harmony export */   "getSigV4AuthPlugin": () => (/* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_1__.getSigV4AuthPlugin),
/* harmony export */   "resolveAwsAuthConfig": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_0__.resolveAwsAuthConfig),
/* harmony export */   "resolveSigV4AuthConfig": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_0__.resolveSigV4AuthConfig)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations */ "./node_modules/@aws-sdk/middleware-signing/dist-es/configurations.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middleware */ "./node_modules/@aws-sdk/middleware-signing/dist-es/middleware.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-signing/dist-es/middleware.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-signing/dist-es/middleware.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "awsAuthMiddleware": () => (/* binding */ awsAuthMiddleware),
/* harmony export */   "awsAuthMiddlewareOptions": () => (/* binding */ awsAuthMiddlewareOptions),
/* harmony export */   "getAwsAuthPlugin": () => (/* binding */ getAwsAuthPlugin),
/* harmony export */   "getSigV4AuthPlugin": () => (/* binding */ getSigV4AuthPlugin)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _utils_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getSkewCorrectedDate */ "./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js");
/* harmony import */ var _utils_getUpdatedSystemClockOffset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getUpdatedSystemClockOffset */ "./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js");



const awsAuthMiddleware = (options) => (next, context) => async function (args) {
    if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(args.request))
        return next(args);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const multiRegionOverride = authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;
    const signer = await options.signer(authScheme);
    const output = await next({
        ...args,
        request: await signer.sign(args.request, {
            signingDate: (0,_utils_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_1__.getSkewCorrectedDate)(options.systemClockOffset),
            signingRegion: multiRegionOverride || context["signing_region"],
            signingService: context["signing_service"],
        }),
    }).catch((error) => {
        const serverTime = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
            options.systemClockOffset = (0,_utils_getUpdatedSystemClockOffset__WEBPACK_IMPORTED_MODULE_2__.getUpdatedSystemClockOffset)(serverTime, options.systemClockOffset);
        }
        throw error;
    });
    const dateHeader = getDateHeader(output.response);
    if (dateHeader) {
        options.systemClockOffset = (0,_utils_getUpdatedSystemClockOffset__WEBPACK_IMPORTED_MODULE_2__.getUpdatedSystemClockOffset)(dateHeader, options.systemClockOffset);
    }
    return output;
};
const getDateHeader = (response) => _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
const awsAuthMiddlewareOptions = {
    name: "awsAuthMiddleware",
    tags: ["SIGNATURE", "AWSAUTH"],
    relation: "after",
    toMiddleware: "retryMiddleware",
    override: true,
};
const getAwsAuthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
    },
});
const getSigV4AuthPlugin = getAwsAuthPlugin;


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSkewCorrectedDate": () => (/* binding */ getSkewCorrectedDate)
/* harmony export */ });
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getUpdatedSystemClockOffset.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUpdatedSystemClockOffset": () => (/* binding */ getUpdatedSystemClockOffset)
/* harmony export */ });
/* harmony import */ var _isClockSkewed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isClockSkewed */ "./node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js");

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if ((0,_isClockSkewed__WEBPACK_IMPORTED_MODULE_0__.isClockSkewed)(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-signing/dist-es/utils/isClockSkewed.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isClockSkewed": () => (/* binding */ isClockSkewed)
/* harmony export */ });
/* harmony import */ var _getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSkewCorrectedDate */ "./node_modules/@aws-sdk/middleware-signing/dist-es/utils/getSkewCorrectedDate.js");

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs((0,_getSkewCorrectedDate__WEBPACK_IMPORTED_MODULE_0__.getSkewCorrectedDate)(systemClockOffset).getTime() - clockTime) >= 300000;


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-stack/dist-es/MiddlewareStack.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-stack/dist-es/MiddlewareStack.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constructStack": () => (/* binding */ constructStack)
/* harmony export */ });
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.name && entry.name === toRemove) {
                isRemoved = true;
                entriesNameSet.delete(toRemove);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                if (entry.name)
                    entriesNameSet.delete(entry.name);
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            if (normalizedEntry.name)
                normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ${entry.name || "anonymous"} middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expendedMiddlewareList) => {
            wholeList.push(...expendedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${name}'`);
                    const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === name);
                    const toOverride = absoluteEntries[toOverrideIndex];
                    if (toOverride.step !== entry.step || toOverride.priority !== entry.priority) {
                        throw new Error(`"${name}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be ` +
                            `overridden by same-name middleware with ${entry.priority} priority in ${entry.step} step.`);
                    }
                    absoluteEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override } = options;
            const entry = {
                middleware,
                ...options,
            };
            if (name) {
                if (entriesNameSet.has(name)) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${name}'`);
                    const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === name);
                    const toOverride = relativeEntries[toOverrideIndex];
                    if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                        throw new Error(`"${name}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                            `by same-name middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
                    }
                    relativeEntries.splice(toOverrideIndex, 1);
                }
                entriesNameSet.add(name);
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name } = entry;
                if (tags && tags.includes(toRemove)) {
                    if (name)
                        entriesNameSet.delete(name);
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                return mw.name + ": " + (mw.tags || []).join(",");
            });
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-stack/dist-es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-stack/dist-es/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constructStack": () => (/* reexport safe */ _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__.constructStack)
/* harmony export */ });
/* harmony import */ var _MiddlewareStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiddlewareStack */ "./node_modules/@aws-sdk/middleware-stack/dist-es/MiddlewareStack.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveUserAgentConfig": () => (/* binding */ resolveUserAgentConfig)
/* harmony export */ });
function resolveUserAgentConfig(input) {
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    };
}


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPACE": () => (/* binding */ SPACE),
/* harmony export */   "UA_ESCAPE_REGEX": () => (/* binding */ UA_ESCAPE_REGEX),
/* harmony export */   "USER_AGENT": () => (/* binding */ USER_AGENT),
/* harmony export */   "X_AMZ_USER_AGENT": () => (/* binding */ X_AMZ_USER_AGENT)
/* harmony export */ });
const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_ESCAPE_REGEX = /[^\!\#\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;


/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserAgentMiddlewareOptions": () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.getUserAgentMiddlewareOptions),
/* harmony export */   "getUserAgentPlugin": () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.getUserAgentPlugin),
/* harmony export */   "resolveUserAgentConfig": () => (/* reexport safe */ _configurations__WEBPACK_IMPORTED_MODULE_0__.resolveUserAgentConfig),
/* harmony export */   "userAgentMiddleware": () => (/* reexport safe */ _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__.userAgentMiddleware)
/* harmony export */ });
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurations */ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js");
/* harmony import */ var _user_agent_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-agent-middleware */ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserAgentMiddlewareOptions": () => (/* binding */ getUserAgentMiddlewareOptions),
/* harmony export */   "getUserAgentPlugin": () => (/* binding */ getUserAgentPlugin),
/* harmony export */   "userAgentMiddleware": () => (/* binding */ userAgentMiddleware)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-endpoints */ "./node_modules/@aws-sdk/util-endpoints/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js");



const userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const prefix = (0,_aws_sdk_util_endpoints__WEBPACK_IMPORTED_MODULE_1__.getUserAgentPrefix)();
    const sdkUserAgentValue = (prefix ? [prefix] : [])
        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
        .join(_constants__WEBPACK_IMPORTED_MODULE_2__.SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(_constants__WEBPACK_IMPORTED_MODULE_2__.SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT] = headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT]
                ? `${headers[_constants__WEBPACK_IMPORTED_MODULE_2__.USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[_constants__WEBPACK_IMPORTED_MODULE_2__.USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[_constants__WEBPACK_IMPORTED_MODULE_2__.X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
const escapeUserAgent = ([name, version]) => {
    const prefixSeparatorIndex = name.indexOf("/");
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .map((item) => item?.replace(_constants__WEBPACK_IMPORTED_MODULE_2__.UA_ESCAPE_REGEX, "_"))
        .join("/");
};
const getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
});


/***/ }),

/***/ "./node_modules/@aws-sdk/polly-request-presigner/dist-es/getSignedUrls.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/polly-request-presigner/dist-es/getSignedUrls.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSignedUrl": () => (/* binding */ getSignedUrl)
/* harmony export */ });
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/signature-v4 */ "./node_modules/@aws-sdk/signature-v4/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_format_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-format-url */ "./node_modules/@aws-sdk/util-format-url/dist-es/index.js");



const getSignedUrl = async (client, command, options = {}) => {
    const signer = new _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_1__.SignatureV4({
        service: options.service || "polly",
        uriEscapePath: options.uriEscapePath || false,
        ...client.config,
    });
    const presignInterceptMiddleware = (next, context) => async (args) => {
        const { request } = args;
        if (!_aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest.isInstance(request)) {
            throw new Error("Request to be presigned is not an valid HTTP request.");
        }
        request.method = "GET";
        delete request.headers["amz-sdk-invocation-id"];
        delete request.headers["amz-sdk-request"];
        delete request.headers["content-length"];
        request.body = "";
        request.query = {
            ...request.query,
            ...args.input,
        };
        const unsignableHeaders = new Set();
        unsignableHeaders.add("content-type");
        const presigned = await signer.presign(request, {
            expiresIn: 3600,
            unsignableHeaders,
            ...options,
            signingRegion: options.signingRegion ?? context["signing_region"],
            signingService: options.signingService ?? context["signing_service"],
        });
        return {
            response: {},
            output: {
                $metadata: { httpStatusCode: 200 },
                presigned,
            },
        };
    };
    client.middlewareStack.addRelativeTo(presignInterceptMiddleware, {
        name: "presignInterceptMiddleware",
        relation: "before",
        toMiddleware: "awsAuthMiddleware",
    });
    let presigned;
    try {
        const output = await client.send(command);
        presigned = output.presigned;
    }
    finally {
        client.middlewareStack.remove("presignInterceptMiddleware");
    }
    return (0,_aws_sdk_util_format_url__WEBPACK_IMPORTED_MODULE_2__.formatUrl)(presigned);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/polly-request-presigner/dist-es/getSynthesizeSpeechUrl.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/polly-request-presigner/dist-es/getSynthesizeSpeechUrl.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSynthesizeSpeechUrl": () => (/* binding */ getSynthesizeSpeechUrl)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_polly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-polly */ "./node_modules/@aws-sdk/client-polly/dist-es/commands/SynthesizeSpeechCommand.js");
/* harmony import */ var _getSignedUrls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSignedUrls */ "./node_modules/@aws-sdk/polly-request-presigner/dist-es/getSignedUrls.js");


const getSynthesizeSpeechUrl = async (input) => {
    const command = new _aws_sdk_client_polly__WEBPACK_IMPORTED_MODULE_1__.SynthesizeSpeechCommand(input.params);
    const options = input.options || {};
    return await (0,_getSignedUrls__WEBPACK_IMPORTED_MODULE_0__.getSignedUrl)(input.client, command, options);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/polly-request-presigner/dist-es/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/polly-request-presigner/dist-es/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSynthesizeSpeechUrl": () => (/* reexport safe */ _getSynthesizeSpeechUrl__WEBPACK_IMPORTED_MODULE_0__.getSynthesizeSpeechUrl)
/* harmony export */ });
/* harmony import */ var _getSynthesizeSpeechUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSynthesizeSpeechUrl */ "./node_modules/@aws-sdk/polly-request-presigner/dist-es/getSynthesizeSpeechUrl.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/property-provider/dist-es/CredentialsProviderError.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/property-provider/dist-es/CredentialsProviderError.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CredentialsProviderError": () => (/* binding */ CredentialsProviderError)
/* harmony export */ });
/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ "./node_modules/@aws-sdk/property-provider/dist-es/ProviderError.js");

class CredentialsProviderError extends _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/property-provider/dist-es/ProviderError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/property-provider/dist-es/ProviderError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProviderError": () => (/* binding */ ProviderError)
/* harmony export */ });
class ProviderError extends Error {
    constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/property-provider/dist-es/TokenProviderError.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/property-provider/dist-es/TokenProviderError.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenProviderError": () => (/* binding */ TokenProviderError)
/* harmony export */ });
/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ "./node_modules/@aws-sdk/property-provider/dist-es/ProviderError.js");

class TokenProviderError extends _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/property-provider/dist-es/chain.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/property-provider/dist-es/chain.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chain": () => (/* binding */ chain)
/* harmony export */ });
/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProviderError */ "./node_modules/@aws-sdk/property-provider/dist-es/ProviderError.js");

function chain(...providers) {
    return () => {
        let promise = Promise.reject(new _ProviderError__WEBPACK_IMPORTED_MODULE_0__.ProviderError("No providers in chain"));
        for (const provider of providers) {
            promise = promise.catch((err) => {
                if (err?.tryNextLink) {
                    return provider();
                }
                throw err;
            });
        }
        return promise;
    };
}


/***/ }),

/***/ "./node_modules/@aws-sdk/property-provider/dist-es/fromStatic.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/property-provider/dist-es/fromStatic.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromStatic": () => (/* binding */ fromStatic)
/* harmony export */ });
const fromStatic = (staticValue) => () => Promise.resolve(staticValue);


/***/ }),

/***/ "./node_modules/@aws-sdk/property-provider/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/property-provider/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CredentialsProviderError": () => (/* reexport safe */ _CredentialsProviderError__WEBPACK_IMPORTED_MODULE_0__.CredentialsProviderError),
/* harmony export */   "ProviderError": () => (/* reexport safe */ _ProviderError__WEBPACK_IMPORTED_MODULE_1__.ProviderError),
/* harmony export */   "TokenProviderError": () => (/* reexport safe */ _TokenProviderError__WEBPACK_IMPORTED_MODULE_2__.TokenProviderError),
/* harmony export */   "chain": () => (/* reexport safe */ _chain__WEBPACK_IMPORTED_MODULE_3__.chain),
/* harmony export */   "fromStatic": () => (/* reexport safe */ _fromStatic__WEBPACK_IMPORTED_MODULE_4__.fromStatic),
/* harmony export */   "memoize": () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_5__.memoize)
/* harmony export */ });
/* harmony import */ var _CredentialsProviderError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CredentialsProviderError */ "./node_modules/@aws-sdk/property-provider/dist-es/CredentialsProviderError.js");
/* harmony import */ var _ProviderError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProviderError */ "./node_modules/@aws-sdk/property-provider/dist-es/ProviderError.js");
/* harmony import */ var _TokenProviderError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TokenProviderError */ "./node_modules/@aws-sdk/property-provider/dist-es/TokenProviderError.js");
/* harmony import */ var _chain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chain */ "./node_modules/@aws-sdk/property-provider/dist-es/chain.js");
/* harmony import */ var _fromStatic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fromStatic */ "./node_modules/@aws-sdk/property-provider/dist-es/fromStatic.js");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memoize */ "./node_modules/@aws-sdk/property-provider/dist-es/memoize.js");








/***/ }),

/***/ "./node_modules/@aws-sdk/property-provider/dist-es/memoize.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/property-provider/dist-es/memoize.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "memoize": () => (/* binding */ memoize)
/* harmony export */ });
const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/Field.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/Field.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _FieldPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldPosition */ "./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js");

class Field {
    constructor({ name, kind = _FieldPosition__WEBPACK_IMPORTED_MODULE_0__.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v) => v !== value);
    }
    toString() {
        return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
    }
    get() {
        return this.values;
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldPosition": () => (/* binding */ FieldPosition)
/* harmony export */ });
var FieldPosition;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/Fields.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/Fields.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fields": () => (/* binding */ Fields)
/* harmony export */ });
class Fields {
    constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
    }
    setField(field) {
        this.entries[field.name.toLowerCase()] = field;
    }
    getField(name) {
        return this.entries[name.toLowerCase()];
    }
    removeField(name) {
        delete this.entries[name.toLowerCase()];
    }
    getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/httpHandler.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/httpHandler.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/httpRequest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/httpRequest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpRequest": () => (/* binding */ HttpRequest)
/* harmony export */ });
class HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/httpResponse.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/httpResponse.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse)
/* harmony export */ });
class HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_0__.Field),
/* harmony export */   "FieldPosition": () => (/* reexport safe */ _FieldPosition__WEBPACK_IMPORTED_MODULE_1__.FieldPosition),
/* harmony export */   "Fields": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_2__.Fields),
/* harmony export */   "HttpRequest": () => (/* reexport safe */ _httpRequest__WEBPACK_IMPORTED_MODULE_4__.HttpRequest),
/* harmony export */   "HttpResponse": () => (/* reexport safe */ _httpResponse__WEBPACK_IMPORTED_MODULE_5__.HttpResponse),
/* harmony export */   "isValidHostname": () => (/* reexport safe */ _isValidHostname__WEBPACK_IMPORTED_MODULE_6__.isValidHostname)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/@aws-sdk/protocol-http/dist-es/Field.js");
/* harmony import */ var _FieldPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldPosition */ "./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields */ "./node_modules/@aws-sdk/protocol-http/dist-es/Fields.js");
/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpHandler */ "./node_modules/@aws-sdk/protocol-http/dist-es/httpHandler.js");
/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpRequest */ "./node_modules/@aws-sdk/protocol-http/dist-es/httpRequest.js");
/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./httpResponse */ "./node_modules/@aws-sdk/protocol-http/dist-es/httpResponse.js");
/* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValidHostname */ "./node_modules/@aws-sdk/protocol-http/dist-es/isValidHostname.js");









/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/isValidHostname.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/isValidHostname.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidHostname": () => (/* binding */ isValidHostname)
/* harmony export */ });
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}


/***/ }),

/***/ "./node_modules/@aws-sdk/querystring-builder/dist-es/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/querystring-builder/dist-es/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQueryString": () => (/* binding */ buildQueryString)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-uri-escape */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/index.js");

function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}


/***/ }),

/***/ "./node_modules/@aws-sdk/querystring-parser/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/querystring-parser/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseQueryString": () => (/* binding */ parseQueryString)
/* harmony export */ });
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/service-error-classification/dist-es/constants.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/service-error-classification/dist-es/constants.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLOCK_SKEW_ERROR_CODES": () => (/* binding */ CLOCK_SKEW_ERROR_CODES),
/* harmony export */   "NODEJS_TIMEOUT_ERROR_CODES": () => (/* binding */ NODEJS_TIMEOUT_ERROR_CODES),
/* harmony export */   "THROTTLING_ERROR_CODES": () => (/* binding */ THROTTLING_ERROR_CODES),
/* harmony export */   "TRANSIENT_ERROR_CODES": () => (/* binding */ TRANSIENT_ERROR_CODES),
/* harmony export */   "TRANSIENT_ERROR_STATUS_CODES": () => (/* binding */ TRANSIENT_ERROR_STATUS_CODES)
/* harmony export */ });
const CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
const THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
const TRANSIENT_ERROR_CODES = ["AbortError", "TimeoutError", "RequestTimeout", "RequestTimeoutException"];
const TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];


/***/ }),

/***/ "./node_modules/@aws-sdk/service-error-classification/dist-es/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/service-error-classification/dist-es/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isClockSkewError": () => (/* binding */ isClockSkewError),
/* harmony export */   "isRetryableByTrait": () => (/* binding */ isRetryableByTrait),
/* harmony export */   "isServerError": () => (/* binding */ isServerError),
/* harmony export */   "isThrottlingError": () => (/* binding */ isThrottlingError),
/* harmony export */   "isTransientError": () => (/* binding */ isTransientError)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/service-error-classification/dist-es/constants.js");

const isRetryableByTrait = (error) => error.$retryable !== undefined;
const isClockSkewError = (error) => _constants__WEBPACK_IMPORTED_MODULE_0__.CLOCK_SKEW_ERROR_CODES.includes(error.name);
const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
const isTransientError = (error) => _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSIENT_ERROR_CODES.includes(error.name) ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
    _constants__WEBPACK_IMPORTED_MODULE_0__.TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignatureV4": () => (/* binding */ SignatureV4)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-middleware */ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credentialDerivation */ "./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js");
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCanonicalHeaders */ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js");
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getCanonicalQuery */ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js");
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getPayloadHash */ "./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js");
/* harmony import */ var _headerUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headerUtil */ "./node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js");
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moveHeadersToQuery */ "./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js");
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prepareRequest */ "./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js");
/* harmony import */ var _utilDate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilDate */ "./node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js");












class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)(region);
        this.credentialProvider = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > _constants__WEBPACK_IMPORTED_MODULE_3__.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_4__.createScope)(shortDate, region, signingService ?? this.service);
        const request = (0,_moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_9__.moveHeadersToQuery)((0,_prepareRequest__WEBPACK_IMPORTED_MODULE_10__.prepareRequest)(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[_constants__WEBPACK_IMPORTED_MODULE_3__.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[_constants__WEBPACK_IMPORTED_MODULE_3__.ALGORITHM_QUERY_PARAM] = _constants__WEBPACK_IMPORTED_MODULE_3__.ALGORITHM_IDENTIFIER;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_3__.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_3__.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_3__.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_5__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[_constants__WEBPACK_IMPORTED_MODULE_3__.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[_constants__WEBPACK_IMPORTED_MODULE_3__.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_7__.getPayloadHash)(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_4__.createScope)(shortDate, region, signingService ?? this.service);
        const hashedPayload = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_7__.getPayloadHash)({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
        const stringToSign = [
            _constants__WEBPACK_IMPORTED_MODULE_3__.EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_2__.toUint8Array)(stringToSign));
        return (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = (0,_prepareRequest__WEBPACK_IMPORTED_MODULE_10__.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_4__.createScope)(shortDate, region, signingService ?? this.service);
        request.headers[_constants__WEBPACK_IMPORTED_MODULE_3__.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[_constants__WEBPACK_IMPORTED_MODULE_3__.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_7__.getPayloadHash)(request, this.sha256);
        if (!(0,_headerUtil__WEBPACK_IMPORTED_MODULE_8__.hasHeader)(_constants__WEBPACK_IMPORTED_MODULE_3__.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[_constants__WEBPACK_IMPORTED_MODULE_3__.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_5__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[_constants__WEBPACK_IMPORTED_MODULE_3__.AUTH_HEADER] =
            `${_constants__WEBPACK_IMPORTED_MODULE_3__.ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0,_getCanonicalQuery__WEBPACK_IMPORTED_MODULE_6__.getCanonicalQuery)(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_2__.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${_constants__WEBPACK_IMPORTED_MODULE_3__.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_2__.toUint8Array)(stringToSign));
        return (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_4__.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = (0,_utilDate__WEBPACK_IMPORTED_MODULE_11__.iso8601)(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneQuery": () => (/* binding */ cloneQuery),
/* harmony export */   "cloneRequest": () => (/* binding */ cloneRequest)
/* harmony export */ });
const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? cloneQuery(query) : undefined,
});
const cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/constants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALGORITHM_IDENTIFIER": () => (/* binding */ ALGORITHM_IDENTIFIER),
/* harmony export */   "ALGORITHM_IDENTIFIER_V4A": () => (/* binding */ ALGORITHM_IDENTIFIER_V4A),
/* harmony export */   "ALGORITHM_QUERY_PARAM": () => (/* binding */ ALGORITHM_QUERY_PARAM),
/* harmony export */   "ALWAYS_UNSIGNABLE_HEADERS": () => (/* binding */ ALWAYS_UNSIGNABLE_HEADERS),
/* harmony export */   "AMZ_DATE_HEADER": () => (/* binding */ AMZ_DATE_HEADER),
/* harmony export */   "AMZ_DATE_QUERY_PARAM": () => (/* binding */ AMZ_DATE_QUERY_PARAM),
/* harmony export */   "AUTH_HEADER": () => (/* binding */ AUTH_HEADER),
/* harmony export */   "CREDENTIAL_QUERY_PARAM": () => (/* binding */ CREDENTIAL_QUERY_PARAM),
/* harmony export */   "DATE_HEADER": () => (/* binding */ DATE_HEADER),
/* harmony export */   "EVENT_ALGORITHM_IDENTIFIER": () => (/* binding */ EVENT_ALGORITHM_IDENTIFIER),
/* harmony export */   "EXPIRES_QUERY_PARAM": () => (/* binding */ EXPIRES_QUERY_PARAM),
/* harmony export */   "GENERATED_HEADERS": () => (/* binding */ GENERATED_HEADERS),
/* harmony export */   "HOST_HEADER": () => (/* binding */ HOST_HEADER),
/* harmony export */   "KEY_TYPE_IDENTIFIER": () => (/* binding */ KEY_TYPE_IDENTIFIER),
/* harmony export */   "MAX_CACHE_SIZE": () => (/* binding */ MAX_CACHE_SIZE),
/* harmony export */   "MAX_PRESIGNED_TTL": () => (/* binding */ MAX_PRESIGNED_TTL),
/* harmony export */   "PROXY_HEADER_PATTERN": () => (/* binding */ PROXY_HEADER_PATTERN),
/* harmony export */   "REGION_SET_PARAM": () => (/* binding */ REGION_SET_PARAM),
/* harmony export */   "SEC_HEADER_PATTERN": () => (/* binding */ SEC_HEADER_PATTERN),
/* harmony export */   "SHA256_HEADER": () => (/* binding */ SHA256_HEADER),
/* harmony export */   "SIGNATURE_HEADER": () => (/* binding */ SIGNATURE_HEADER),
/* harmony export */   "SIGNATURE_QUERY_PARAM": () => (/* binding */ SIGNATURE_QUERY_PARAM),
/* harmony export */   "SIGNED_HEADERS_QUERY_PARAM": () => (/* binding */ SIGNED_HEADERS_QUERY_PARAM),
/* harmony export */   "TOKEN_HEADER": () => (/* binding */ TOKEN_HEADER),
/* harmony export */   "TOKEN_QUERY_PARAM": () => (/* binding */ TOKEN_QUERY_PARAM),
/* harmony export */   "UNSIGNABLE_PATTERNS": () => (/* binding */ UNSIGNABLE_PATTERNS),
/* harmony export */   "UNSIGNED_PAYLOAD": () => (/* binding */ UNSIGNED_PAYLOAD)
/* harmony export */ });
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCredentialCache": () => (/* binding */ clearCredentialCache),
/* harmony export */   "createScope": () => (/* binding */ createScope),
/* harmony export */   "getSigningKey": () => (/* binding */ getSigningKey)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");



const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${_constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, _constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_1__.toUint8Array)(data));
    return hash.digest();
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCanonicalHeaders": () => (/* binding */ getCanonicalHeaders)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in _constants__WEBPACK_IMPORTED_MODULE_0__.ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            _constants__WEBPACK_IMPORTED_MODULE_0__.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            _constants__WEBPACK_IMPORTED_MODULE_0__.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCanonicalQuery": () => (/* binding */ getCanonicalQuery)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-uri-escape */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");


const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_1__.SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key)}=${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .sort()
                .reduce((encoded, value) => encoded.concat([`${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key)}=${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`]), [])
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPayloadHash": () => (/* binding */ getPayloadHash)
/* harmony export */ });
/* harmony import */ var _aws_sdk_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/is-array-buffer */ "./node_modules/@aws-sdk/is-array-buffer/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");




const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_3__.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || (0,_aws_sdk_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_2__.toUint8Array)(body));
        return (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(await hashCtor.digest());
    }
    return _constants__WEBPACK_IMPORTED_MODULE_3__.UNSIGNED_PAYLOAD;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteHeader": () => (/* binding */ deleteHeader),
/* harmony export */   "getHeaderValue": () => (/* binding */ getHeaderValue),
/* harmony export */   "hasHeader": () => (/* binding */ hasHeader)
/* harmony export */ });
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignatureV4": () => (/* reexport safe */ _SignatureV4__WEBPACK_IMPORTED_MODULE_0__.SignatureV4),
/* harmony export */   "clearCredentialCache": () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.clearCredentialCache),
/* harmony export */   "createScope": () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.createScope),
/* harmony export */   "getCanonicalHeaders": () => (/* reexport safe */ _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__.getCanonicalHeaders),
/* harmony export */   "getCanonicalQuery": () => (/* reexport safe */ _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__.getCanonicalQuery),
/* harmony export */   "getPayloadHash": () => (/* reexport safe */ _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__.getPayloadHash),
/* harmony export */   "getSigningKey": () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.getSigningKey),
/* harmony export */   "moveHeadersToQuery": () => (/* reexport safe */ _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__.moveHeadersToQuery),
/* harmony export */   "prepareRequest": () => (/* reexport safe */ _prepareRequest__WEBPACK_IMPORTED_MODULE_5__.prepareRequest)
/* harmony export */ });
/* harmony import */ var _SignatureV4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignatureV4 */ "./node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js");
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCanonicalHeaders */ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js");
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCanonicalQuery */ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js");
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPayloadHash */ "./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js");
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moveHeadersToQuery */ "./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js");
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prepareRequest */ "./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js");
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credentialDerivation */ "./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js");









/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveHeadersToQuery": () => (/* binding */ moveHeadersToQuery)
/* harmony export */ });
/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneRequest */ "./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js");

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : (0,_cloneRequest__WEBPACK_IMPORTED_MODULE_0__.cloneRequest)(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareRequest": () => (/* binding */ prepareRequest)
/* harmony export */ });
/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneRequest */ "./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");


const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : (0,_cloneRequest__WEBPACK_IMPORTED_MODULE_0__.cloneRequest)(request);
    for (const headerName of Object.keys(request.headers)) {
        if (_constants__WEBPACK_IMPORTED_MODULE_1__.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iso8601": () => (/* binding */ iso8601),
/* harmony export */   "toDate": () => (/* binding */ toDate)
/* harmony export */ });
const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/NoOpLogger.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/NoOpLogger.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoOpLogger": () => (/* binding */ NoOpLogger)
/* harmony export */ });
class NoOpLogger {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/client.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/client.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": () => (/* binding */ Client)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-stack */ "./node_modules/@aws-sdk/middleware-stack/dist-es/index.js");

class Client {
    constructor(config) {
        this.middlewareStack = (0,_aws_sdk_middleware_stack__WEBPACK_IMPORTED_MODULE_0__.constructStack)();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/command.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/command.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Command": () => (/* binding */ Command)
/* harmony export */ });
/* harmony import */ var _aws_sdk_middleware_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-stack */ "./node_modules/@aws-sdk/middleware-stack/dist-es/index.js");

class Command {
    constructor() {
        this.middlewareStack = (0,_aws_sdk_middleware_stack__WEBPACK_IMPORTED_MODULE_0__.constructStack)();
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SENSITIVE_STRING": () => (/* binding */ SENSITIVE_STRING)
/* harmony export */ });
const SENSITIVE_STRING = "***SensitiveInformation***";


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/create-aggregated-client.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/create-aggregated-client.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAggregatedClient": () => (/* binding */ createAggregatedClient)
/* harmony export */ });
const createAggregatedClient = (commands, Client) => {
    for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = async function (args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            }
            else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object")
                    throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            }
            else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/date-utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/date-utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateToUtcString": () => (/* binding */ dateToUtcString),
/* harmony export */   "parseEpochTimestamp": () => (/* binding */ parseEpochTimestamp),
/* harmony export */   "parseRfc3339DateTime": () => (/* binding */ parseRfc3339DateTime),
/* harmony export */   "parseRfc3339DateTimeWithOffset": () => (/* binding */ parseRfc3339DateTimeWithOffset),
/* harmony export */   "parseRfc7231DateTime": () => (/* binding */ parseRfc7231DateTime)
/* harmony export */ });
/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-utils */ "./node_modules/@aws-sdk/smithy-client/dist-es/parse-utils.js");

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
const ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate((0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate((0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseDouble)(value);
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseShort)(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1000;
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseByte)(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return (0,_parse_utils__WEBPACK_IMPORTED_MODULE_0__.strictParseFloat32)("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    }
    else if (directionStr == "-") {
        direction = -1;
    }
    else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/default-error-handler.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/default-error-handler.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwDefaultError": () => (/* binding */ throwDefaultError),
/* harmony export */   "withBaseException": () => (/* binding */ withBaseException)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exceptions */ "./node_modules/@aws-sdk/smithy-client/dist-es/exceptions.js");

const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw (0,_exceptions__WEBPACK_IMPORTED_MODULE_0__.decorateServiceException)(response, parsedBody);
};
const withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/defaults-mode.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/defaults-mode.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadConfigsForDefaultMode": () => (/* binding */ loadConfigsForDefaultMode)
/* harmony export */ });
const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitWarningIfUnsupportedVersion": () => (/* binding */ emitWarningIfUnsupportedVersion)
/* harmony export */ });
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/exceptions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/exceptions.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceException": () => (/* binding */ ServiceException),
/* harmony export */   "decorateServiceException": () => (/* binding */ decorateServiceException)
/* harmony export */ });
class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/extended-encode-uri-component.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/extended-encode-uri-component.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extendedEncodeURIComponent": () => (/* binding */ extendedEncodeURIComponent)
/* harmony export */ });
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/get-array-if-single-item.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/get-array-if-single-item.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArrayIfSingleItem": () => (/* binding */ getArrayIfSingleItem)
/* harmony export */ });
const getArrayIfSingleItem = (mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray];


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/get-value-from-text-node.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/get-value-from-text-node.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValueFromTextNode": () => (/* binding */ getValueFromTextNode)
/* harmony export */ });
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Client": () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_1__.Client),
/* harmony export */   "Command": () => (/* reexport safe */ _command__WEBPACK_IMPORTED_MODULE_2__.Command),
/* harmony export */   "LazyJsonString": () => (/* reexport safe */ _lazy_json__WEBPACK_IMPORTED_MODULE_13__.LazyJsonString),
/* harmony export */   "NoOpLogger": () => (/* reexport safe */ _NoOpLogger__WEBPACK_IMPORTED_MODULE_0__.NoOpLogger),
/* harmony export */   "SENSITIVE_STRING": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_3__.SENSITIVE_STRING),
/* harmony export */   "ServiceException": () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_9__.ServiceException),
/* harmony export */   "StringWrapper": () => (/* reexport safe */ _lazy_json__WEBPACK_IMPORTED_MODULE_13__.StringWrapper),
/* harmony export */   "_json": () => (/* reexport safe */ _serde_json__WEBPACK_IMPORTED_MODULE_18__._json),
/* harmony export */   "convertMap": () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_14__.convertMap),
/* harmony export */   "createAggregatedClient": () => (/* reexport safe */ _create_aggregated_client__WEBPACK_IMPORTED_MODULE_4__.createAggregatedClient),
/* harmony export */   "dateToUtcString": () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.dateToUtcString),
/* harmony export */   "decorateServiceException": () => (/* reexport safe */ _exceptions__WEBPACK_IMPORTED_MODULE_9__.decorateServiceException),
/* harmony export */   "emitWarningIfUnsupportedVersion": () => (/* reexport safe */ _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_8__.emitWarningIfUnsupportedVersion),
/* harmony export */   "expectBoolean": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectBoolean),
/* harmony export */   "expectByte": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectByte),
/* harmony export */   "expectFloat32": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectFloat32),
/* harmony export */   "expectInt": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectInt),
/* harmony export */   "expectInt32": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectInt32),
/* harmony export */   "expectLong": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectLong),
/* harmony export */   "expectNonNull": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectNonNull),
/* harmony export */   "expectNumber": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectNumber),
/* harmony export */   "expectObject": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectObject),
/* harmony export */   "expectShort": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectShort),
/* harmony export */   "expectString": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectString),
/* harmony export */   "expectUnion": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.expectUnion),
/* harmony export */   "extendedEncodeURIComponent": () => (/* reexport safe */ _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_10__.extendedEncodeURIComponent),
/* harmony export */   "getArrayIfSingleItem": () => (/* reexport safe */ _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_11__.getArrayIfSingleItem),
/* harmony export */   "getValueFromTextNode": () => (/* reexport safe */ _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_12__.getValueFromTextNode),
/* harmony export */   "handleFloat": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.handleFloat),
/* harmony export */   "limitedParseDouble": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.limitedParseDouble),
/* harmony export */   "limitedParseFloat": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.limitedParseFloat),
/* harmony export */   "limitedParseFloat32": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.limitedParseFloat32),
/* harmony export */   "loadConfigsForDefaultMode": () => (/* reexport safe */ _defaults_mode__WEBPACK_IMPORTED_MODULE_7__.loadConfigsForDefaultMode),
/* harmony export */   "logger": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.logger),
/* harmony export */   "map": () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_14__.map),
/* harmony export */   "parseBoolean": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.parseBoolean),
/* harmony export */   "parseEpochTimestamp": () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.parseEpochTimestamp),
/* harmony export */   "parseRfc3339DateTime": () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.parseRfc3339DateTime),
/* harmony export */   "parseRfc3339DateTimeWithOffset": () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.parseRfc3339DateTimeWithOffset),
/* harmony export */   "parseRfc7231DateTime": () => (/* reexport safe */ _date_utils__WEBPACK_IMPORTED_MODULE_5__.parseRfc7231DateTime),
/* harmony export */   "resolvedPath": () => (/* reexport safe */ _resolve_path__WEBPACK_IMPORTED_MODULE_16__.resolvedPath),
/* harmony export */   "serializeFloat": () => (/* reexport safe */ _ser_utils__WEBPACK_IMPORTED_MODULE_17__.serializeFloat),
/* harmony export */   "splitEvery": () => (/* reexport safe */ _split_every__WEBPACK_IMPORTED_MODULE_19__.splitEvery),
/* harmony export */   "strictParseByte": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.strictParseByte),
/* harmony export */   "strictParseDouble": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.strictParseDouble),
/* harmony export */   "strictParseFloat": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.strictParseFloat),
/* harmony export */   "strictParseFloat32": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.strictParseFloat32),
/* harmony export */   "strictParseInt": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.strictParseInt),
/* harmony export */   "strictParseInt32": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.strictParseInt32),
/* harmony export */   "strictParseLong": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.strictParseLong),
/* harmony export */   "strictParseShort": () => (/* reexport safe */ _parse_utils__WEBPACK_IMPORTED_MODULE_15__.strictParseShort),
/* harmony export */   "take": () => (/* reexport safe */ _object_mapping__WEBPACK_IMPORTED_MODULE_14__.take),
/* harmony export */   "throwDefaultError": () => (/* reexport safe */ _default_error_handler__WEBPACK_IMPORTED_MODULE_6__.throwDefaultError),
/* harmony export */   "withBaseException": () => (/* reexport safe */ _default_error_handler__WEBPACK_IMPORTED_MODULE_6__.withBaseException)
/* harmony export */ });
/* harmony import */ var _NoOpLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoOpLogger */ "./node_modules/@aws-sdk/smithy-client/dist-es/NoOpLogger.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./node_modules/@aws-sdk/smithy-client/dist-es/client.js");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command */ "./node_modules/@aws-sdk/smithy-client/dist-es/command.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/smithy-client/dist-es/constants.js");
/* harmony import */ var _create_aggregated_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-aggregated-client */ "./node_modules/@aws-sdk/smithy-client/dist-es/create-aggregated-client.js");
/* harmony import */ var _date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-utils */ "./node_modules/@aws-sdk/smithy-client/dist-es/date-utils.js");
/* harmony import */ var _default_error_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-error-handler */ "./node_modules/@aws-sdk/smithy-client/dist-es/default-error-handler.js");
/* harmony import */ var _defaults_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defaults-mode */ "./node_modules/@aws-sdk/smithy-client/dist-es/defaults-mode.js");
/* harmony import */ var _emitWarningIfUnsupportedVersion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emitWarningIfUnsupportedVersion */ "./node_modules/@aws-sdk/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js");
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exceptions */ "./node_modules/@aws-sdk/smithy-client/dist-es/exceptions.js");
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extended-encode-uri-component */ "./node_modules/@aws-sdk/smithy-client/dist-es/extended-encode-uri-component.js");
/* harmony import */ var _get_array_if_single_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./get-array-if-single-item */ "./node_modules/@aws-sdk/smithy-client/dist-es/get-array-if-single-item.js");
/* harmony import */ var _get_value_from_text_node__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-value-from-text-node */ "./node_modules/@aws-sdk/smithy-client/dist-es/get-value-from-text-node.js");
/* harmony import */ var _lazy_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lazy-json */ "./node_modules/@aws-sdk/smithy-client/dist-es/lazy-json.js");
/* harmony import */ var _object_mapping__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./object-mapping */ "./node_modules/@aws-sdk/smithy-client/dist-es/object-mapping.js");
/* harmony import */ var _parse_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parse-utils */ "./node_modules/@aws-sdk/smithy-client/dist-es/parse-utils.js");
/* harmony import */ var _resolve_path__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolve-path */ "./node_modules/@aws-sdk/smithy-client/dist-es/resolve-path.js");
/* harmony import */ var _ser_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ser-utils */ "./node_modules/@aws-sdk/smithy-client/dist-es/ser-utils.js");
/* harmony import */ var _serde_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./serde-json */ "./node_modules/@aws-sdk/smithy-client/dist-es/serde-json.js");
/* harmony import */ var _split_every__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./split-every */ "./node_modules/@aws-sdk/smithy-client/dist-es/split-every.js");






















/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/lazy-json.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/lazy-json.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyJsonString": () => (/* binding */ LazyJsonString),
/* harmony export */   "StringWrapper": () => (/* binding */ StringWrapper)
/* harmony export */ });
const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);
class LazyJsonString extends StringWrapper {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/object-mapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/object-mapping.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertMap": () => (/* binding */ convertMap),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "take": () => (/* binding */ take)
/* harmony export */ });
function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        applyInstruction(target, null, instructions, key);
    }
    return target;
}
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
const take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
    }
    return out;
};
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};
const applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
            instruction = [, instruction];
        }
        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if ((typeof filter === "function" && filter(source[sourceKey])) || (typeof filter !== "function" && !!filter)) {
            target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === undefined && (_value = value()) != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed) {
            target[targetKey] = _value;
        }
        else if (customFilterPassed) {
            target[targetKey] = value();
        }
    }
    else {
        const defaultFilterPassed = filter === undefined && value != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
        }
    }
};
const nonNullish = (_) => _ != null;
const pass = (_) => _;


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/parse-utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/parse-utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expectBoolean": () => (/* binding */ expectBoolean),
/* harmony export */   "expectByte": () => (/* binding */ expectByte),
/* harmony export */   "expectFloat32": () => (/* binding */ expectFloat32),
/* harmony export */   "expectInt": () => (/* binding */ expectInt),
/* harmony export */   "expectInt32": () => (/* binding */ expectInt32),
/* harmony export */   "expectLong": () => (/* binding */ expectLong),
/* harmony export */   "expectNonNull": () => (/* binding */ expectNonNull),
/* harmony export */   "expectNumber": () => (/* binding */ expectNumber),
/* harmony export */   "expectObject": () => (/* binding */ expectObject),
/* harmony export */   "expectShort": () => (/* binding */ expectShort),
/* harmony export */   "expectString": () => (/* binding */ expectString),
/* harmony export */   "expectUnion": () => (/* binding */ expectUnion),
/* harmony export */   "handleFloat": () => (/* binding */ handleFloat),
/* harmony export */   "limitedParseDouble": () => (/* binding */ limitedParseDouble),
/* harmony export */   "limitedParseFloat": () => (/* binding */ limitedParseFloat),
/* harmony export */   "limitedParseFloat32": () => (/* binding */ limitedParseFloat32),
/* harmony export */   "logger": () => (/* binding */ logger),
/* harmony export */   "parseBoolean": () => (/* binding */ parseBoolean),
/* harmony export */   "strictParseByte": () => (/* binding */ strictParseByte),
/* harmony export */   "strictParseDouble": () => (/* binding */ strictParseDouble),
/* harmony export */   "strictParseFloat": () => (/* binding */ strictParseFloat),
/* harmony export */   "strictParseFloat32": () => (/* binding */ strictParseFloat32),
/* harmony export */   "strictParseInt": () => (/* binding */ strictParseInt),
/* harmony export */   "strictParseInt32": () => (/* binding */ strictParseInt32),
/* harmony export */   "strictParseLong": () => (/* binding */ strictParseLong),
/* harmony export */   "strictParseShort": () => (/* binding */ strictParseShort)
/* harmony export */ });
const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectInt = expectLong;
const expectInt32 = (value) => expectSizedInt(value, 32);
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject)
        .filter(([, v]) => v != null)
        .map(([k]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
const strictParseDouble = (value) => {
    if (typeof value == "string") {
        return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
};
const strictParseFloat = strictParseDouble;
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const handleFloat = limitedParseDouble;
const limitedParseFloat = limitedParseDouble;
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return expectLong(parseNumber(value));
    }
    return expectLong(value);
};
const strictParseInt = strictParseLong;
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const strictParseShort = (value) => {
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
};
const logger = {
    warn: console.warn,
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/resolve-path.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/resolve-path.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvedPath": () => (/* binding */ resolvedPath)
/* harmony export */ });
/* harmony import */ var _extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extended-encode-uri-component */ "./node_modules/@aws-sdk/smithy-client/dist-es/extended-encode-uri-component.js");

const resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== undefined) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel
            ? labelValue
                .split("/")
                .map((segment) => (0,_extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)(segment))
                .join("/")
            : (0,_extended_encode_uri_component__WEBPACK_IMPORTED_MODULE_0__.extendedEncodeURIComponent)(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/ser-utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/ser-utils.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeFloat": () => (/* binding */ serializeFloat)
/* harmony export */ });
const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/serde-json.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/serde-json.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_json": () => (/* binding */ _json)
/* harmony export */ });
const _json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = _json(obj[key]);
        }
        return target;
    }
    return obj;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/smithy-client/dist-es/split-every.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/smithy-client/dist-es/split-every.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "splitEvery": () => (/* binding */ splitEvery)
/* harmony export */ });
function splitEvery(value, delimiter, numDelimiters) {
    if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
        throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
    }
    const segments = value.split(delimiter);
    if (numDelimiters === 1) {
        return segments;
    }
    const compoundSegments = [];
    let currentSegment = "";
    for (let i = 0; i < segments.length; i++) {
        if (currentSegment === "") {
            currentSegment = segments[i];
        }
        else {
            currentSegment += delimiter + segments[i];
        }
        if ((i + 1) % numDelimiters === 0) {
            compoundSegments.push(currentSegment);
            currentSegment = "";
        }
    }
    if (currentSegment !== "") {
        compoundSegments.push(currentSegment);
    }
    return compoundSegments;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/abort.js":
/*!******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/abort.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/auth.js":
/*!*****************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/auth.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpAuthLocation": () => (/* binding */ HttpAuthLocation)
/* harmony export */ });
var HttpAuthLocation;
(function (HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));


/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/checksum.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/checksum.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/client.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/client.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/command.js":
/*!********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/command.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/connection/config.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/connection/config.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/connection/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/connection/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/@aws-sdk/types/dist-es/connection/config.js");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ "./node_modules/@aws-sdk/types/dist-es/connection/manager.js");
/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pool */ "./node_modules/@aws-sdk/types/dist-es/connection/pool.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/connection/manager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/connection/manager.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/connection/pool.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/connection/pool.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/credentials.js":
/*!************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/credentials.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/crypto.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/crypto.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/dns.js":
/*!****************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/dns.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HostAddressType": () => (/* binding */ HostAddressType)
/* harmony export */ });
var HostAddressType;
(function (HostAddressType) {
    HostAddressType["AAAA"] = "AAAA";
    HostAddressType["A"] = "A";
})(HostAddressType || (HostAddressType = {}));


/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/endpoint.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/endpoint.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndpointURLScheme": () => (/* binding */ EndpointURLScheme)
/* harmony export */ });
var EndpointURLScheme;
(function (EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));


/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/eventStream.js":
/*!************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/eventStream.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/http.js":
/*!*****************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/http.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/identity/AnonymousIdentity.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/identity/AnonymousIdentity.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/identity/AwsCredentialIdentity.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/identity/AwsCredentialIdentity.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/identity/Identity.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/identity/Identity.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/identity/LoginIdentity.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/identity/LoginIdentity.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/identity/TokenIdentity.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/identity/TokenIdentity.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/identity/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/identity/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnonymousIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnonymousIdentity */ "./node_modules/@aws-sdk/types/dist-es/identity/AnonymousIdentity.js");
/* harmony import */ var _AwsCredentialIdentity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AwsCredentialIdentity */ "./node_modules/@aws-sdk/types/dist-es/identity/AwsCredentialIdentity.js");
/* harmony import */ var _Identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Identity */ "./node_modules/@aws-sdk/types/dist-es/identity/Identity.js");
/* harmony import */ var _LoginIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginIdentity */ "./node_modules/@aws-sdk/types/dist-es/identity/LoginIdentity.js");
/* harmony import */ var _TokenIdentity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TokenIdentity */ "./node_modules/@aws-sdk/types/dist-es/identity/TokenIdentity.js");







/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndpointURLScheme": () => (/* reexport safe */ _endpoint__WEBPACK_IMPORTED_MODULE_9__.EndpointURLScheme),
/* harmony export */   "HostAddressType": () => (/* reexport safe */ _dns__WEBPACK_IMPORTED_MODULE_8__.HostAddressType),
/* harmony export */   "HttpAuthLocation": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpAuthLocation),
/* harmony export */   "RequestHandlerProtocol": () => (/* reexport safe */ _transfer__WEBPACK_IMPORTED_MODULE_25__.RequestHandlerProtocol)
/* harmony export */ });
/* harmony import */ var _abort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abort */ "./node_modules/@aws-sdk/types/dist-es/abort.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./node_modules/@aws-sdk/types/dist-es/auth.js");
/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checksum */ "./node_modules/@aws-sdk/types/dist-es/checksum.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client */ "./node_modules/@aws-sdk/types/dist-es/client.js");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./command */ "./node_modules/@aws-sdk/types/dist-es/command.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connection */ "./node_modules/@aws-sdk/types/dist-es/connection/index.js");
/* harmony import */ var _credentials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credentials */ "./node_modules/@aws-sdk/types/dist-es/credentials.js");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crypto */ "./node_modules/@aws-sdk/types/dist-es/crypto.js");
/* harmony import */ var _dns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dns */ "./node_modules/@aws-sdk/types/dist-es/dns.js");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./endpoint */ "./node_modules/@aws-sdk/types/dist-es/endpoint.js");
/* harmony import */ var _eventStream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eventStream */ "./node_modules/@aws-sdk/types/dist-es/eventStream.js");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http */ "./node_modules/@aws-sdk/types/dist-es/http.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./identity */ "./node_modules/@aws-sdk/types/dist-es/identity/index.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logger */ "./node_modules/@aws-sdk/types/dist-es/logger.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./middleware */ "./node_modules/@aws-sdk/types/dist-es/middleware.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pagination */ "./node_modules/@aws-sdk/types/dist-es/pagination.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile */ "./node_modules/@aws-sdk/types/dist-es/profile.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./request */ "./node_modules/@aws-sdk/types/dist-es/request.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./response */ "./node_modules/@aws-sdk/types/dist-es/response.js");
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./retry */ "./node_modules/@aws-sdk/types/dist-es/retry.js");
/* harmony import */ var _serde__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./serde */ "./node_modules/@aws-sdk/types/dist-es/serde.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shapes */ "./node_modules/@aws-sdk/types/dist-es/shapes.js");
/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./signature */ "./node_modules/@aws-sdk/types/dist-es/signature.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./stream */ "./node_modules/@aws-sdk/types/dist-es/stream.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./token */ "./node_modules/@aws-sdk/types/dist-es/token.js");
/* harmony import */ var _transfer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./transfer */ "./node_modules/@aws-sdk/types/dist-es/transfer.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./util */ "./node_modules/@aws-sdk/types/dist-es/util.js");
/* harmony import */ var _waiter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./waiter */ "./node_modules/@aws-sdk/types/dist-es/waiter.js");






























/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/logger.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/logger.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/middleware.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/middleware.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/pagination.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/pagination.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/profile.js":
/*!********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/profile.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/request.js":
/*!********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/request.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/response.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/response.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/retry.js":
/*!******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/retry.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/serde.js":
/*!******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/serde.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/shapes.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/shapes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/signature.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/signature.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/stream.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/stream.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/token.js":
/*!******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/token.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/transfer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/transfer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestHandlerProtocol": () => (/* binding */ RequestHandlerProtocol)
/* harmony export */ });
var RequestHandlerProtocol;
(function (RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));


/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/util.js":
/*!*****************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/util.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/types/dist-es/waiter.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aws-sdk/types/dist-es/waiter.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/url-parser/dist-es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-sdk/url-parser/dist-es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseUrl": () => (/* binding */ parseUrl)
/* harmony export */ });
/* harmony import */ var _aws_sdk_querystring_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/querystring-parser */ "./node_modules/@aws-sdk/querystring-parser/dist-es/index.js");

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = (0,_aws_sdk_querystring_parser__WEBPACK_IMPORTED_MODULE_0__.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-base64/dist-es/constants.browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-base64/dist-es/constants.browser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alphabetByEncoding": () => (/* binding */ alphabetByEncoding),
/* harmony export */   "alphabetByValue": () => (/* binding */ alphabetByValue),
/* harmony export */   "bitsPerByte": () => (/* binding */ bitsPerByte),
/* harmony export */   "bitsPerLetter": () => (/* binding */ bitsPerLetter),
/* harmony export */   "maxLetterValue": () => (/* binding */ maxLetterValue)
/* harmony export */ });
const alphabetByEncoding = {};
const alphabetByValue = new Array(64);
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
    const char = String.fromCharCode(i + start);
    alphabetByEncoding[char] = i;
    alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
    const char = String.fromCharCode(i + start);
    const index = i + 26;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
    alphabetByEncoding[i.toString(10)] = i + 52;
    const char = i.toString(10);
    const index = i + 52;
    alphabetByEncoding[char] = index;
    alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
const bitsPerLetter = 6;
const bitsPerByte = 8;
const maxLetterValue = 0b111111;



/***/ }),

/***/ "./node_modules/@aws-sdk/util-base64/dist-es/fromBase64.browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-base64/dist-es/fromBase64.browser.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromBase64": () => (/* binding */ fromBase64)
/* harmony export */ });
/* harmony import */ var _constants_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.browser */ "./node_modules/@aws-sdk/util-base64/dist-es/constants.browser.js");

const fromBase64 = (input) => {
    let totalByteLength = (input.length / 4) * 3;
    if (input.slice(-2) === "==") {
        totalByteLength -= 2;
    }
    else if (input.slice(-1) === "=") {
        totalByteLength--;
    }
    const out = new ArrayBuffer(totalByteLength);
    const dataView = new DataView(out);
    for (let i = 0; i < input.length; i += 4) {
        let bits = 0;
        let bitLength = 0;
        for (let j = i, limit = i + 3; j <= limit; j++) {
            if (input[j] !== "=") {
                if (!(input[j] in _constants_browser__WEBPACK_IMPORTED_MODULE_0__.alphabetByEncoding)) {
                    throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
                }
                bits |= _constants_browser__WEBPACK_IMPORTED_MODULE_0__.alphabetByEncoding[input[j]] << ((limit - j) * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter);
                bitLength += _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter;
            }
            else {
                bits >>= _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter;
            }
        }
        const chunkOffset = (i / 4) * 3;
        bits >>= bitLength % _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte;
        const byteLength = Math.floor(bitLength / _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte);
        for (let k = 0; k < byteLength; k++) {
            const offset = (byteLength - k - 1) * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte;
            dataView.setUint8(chunkOffset + k, (bits & (255 << offset)) >> offset);
        }
    }
    return new Uint8Array(out);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-base64/dist-es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-base64/dist-es/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromBase64": () => (/* reexport safe */ _fromBase64__WEBPACK_IMPORTED_MODULE_0__.fromBase64),
/* harmony export */   "toBase64": () => (/* reexport safe */ _toBase64__WEBPACK_IMPORTED_MODULE_1__.toBase64)
/* harmony export */ });
/* harmony import */ var _fromBase64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromBase64 */ "./node_modules/@aws-sdk/util-base64/dist-es/fromBase64.browser.js");
/* harmony import */ var _toBase64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toBase64 */ "./node_modules/@aws-sdk/util-base64/dist-es/toBase64.browser.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/util-base64/dist-es/toBase64.browser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-base64/dist-es/toBase64.browser.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toBase64": () => (/* binding */ toBase64)
/* harmony export */ });
/* harmony import */ var _constants_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.browser */ "./node_modules/@aws-sdk/util-base64/dist-es/constants.browser.js");

function toBase64(input) {
    let str = "";
    for (let i = 0; i < input.length; i += 3) {
        let bits = 0;
        let bitLength = 0;
        for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
            bits |= input[j] << ((limit - j - 1) * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte);
            bitLength += _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerByte;
        }
        const bitClusterCount = Math.ceil(bitLength / _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter);
        bits <<= bitClusterCount * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter - bitLength;
        for (let k = 1; k <= bitClusterCount; k++) {
            const offset = (bitClusterCount - k) * _constants_browser__WEBPACK_IMPORTED_MODULE_0__.bitsPerLetter;
            str += _constants_browser__WEBPACK_IMPORTED_MODULE_0__.alphabetByValue[(bits & (_constants_browser__WEBPACK_IMPORTED_MODULE_0__.maxLetterValue << offset)) >> offset];
        }
        str += "==".slice(0, 4 - bitClusterCount);
    }
    return str;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-body-length-browser/dist-es/calculateBodyLength.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-body-length-browser/dist-es/calculateBodyLength.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateBodyLength": () => (/* binding */ calculateBodyLength)
/* harmony export */ });
const calculateBodyLength = (body) => {
    if (typeof body === "string") {
        let len = body.length;
        for (let i = len - 1; i >= 0; i--) {
            const code = body.charCodeAt(i);
            if (code > 0x7f && code <= 0x7ff)
                len++;
            else if (code > 0x7ff && code <= 0xffff)
                len += 2;
            if (code >= 0xdc00 && code <= 0xdfff)
                i--;
        }
        return len;
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-body-length-browser/dist-es/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-body-length-browser/dist-es/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateBodyLength": () => (/* reexport safe */ _calculateBodyLength__WEBPACK_IMPORTED_MODULE_0__.calculateBodyLength)
/* harmony export */ });
/* harmony import */ var _calculateBodyLength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateBodyLength */ "./node_modules/@aws-sdk/util-body-length-browser/dist-es/calculateBodyLength.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/util-config-provider/dist-es/booleanSelector.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-config-provider/dist-es/booleanSelector.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectorType": () => (/* binding */ SelectorType),
/* harmony export */   "booleanSelector": () => (/* binding */ booleanSelector)
/* harmony export */ });
var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-config-provider/dist-es/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-config-provider/dist-es/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectorType": () => (/* reexport safe */ _booleanSelector__WEBPACK_IMPORTED_MODULE_0__.SelectorType),
/* harmony export */   "booleanSelector": () => (/* reexport safe */ _booleanSelector__WEBPACK_IMPORTED_MODULE_0__.booleanSelector)
/* harmony export */ });
/* harmony import */ var _booleanSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booleanSelector */ "./node_modules/@aws-sdk/util-config-provider/dist-es/booleanSelector.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/constants.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/constants.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULTS_MODE_OPTIONS": () => (/* binding */ DEFAULTS_MODE_OPTIONS)
/* harmony export */ });
const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];


/***/ }),

/***/ "./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveDefaultsModeConfig": () => (/* reexport safe */ _resolveDefaultsModeConfig__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultsModeConfig)
/* harmony export */ });
/* harmony import */ var _resolveDefaultsModeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveDefaultsModeConfig */ "./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveDefaultsModeConfig": () => (/* binding */ resolveDefaultsModeConfig)
/* harmony export */ });
/* harmony import */ var _aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/property-provider */ "./node_modules/@aws-sdk/property-provider/dist-es/index.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/util-defaults-mode-browser/dist-es/constants.js");



const resolveDefaultsModeConfig = ({ defaultsMode, } = {}) => (0,_aws_sdk_property_provider__WEBPACK_IMPORTED_MODULE_0__.memoize)(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
        case "mobile":
        case "in-region":
        case "cross-region":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const isMobileBrowser = () => {
    const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent
        ? bowser__WEBPACK_IMPORTED_MODULE_1___default().parse(window.navigator.userAgent)
        : undefined;
    const platform = parsedUA?.platform?.type;
    return platform === "tablet" || platform === "mobile";
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/debugId.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/debug/debugId.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debugId": () => (/* binding */ debugId)
/* harmony export */ });
const debugId = "endpoints";


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/debug/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debugId": () => (/* reexport safe */ _debugId__WEBPACK_IMPORTED_MODULE_0__.debugId),
/* harmony export */   "toDebugString": () => (/* reexport safe */ _toDebugString__WEBPACK_IMPORTED_MODULE_1__.toDebugString)
/* harmony export */ });
/* harmony import */ var _debugId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debugId */ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/debugId.js");
/* harmony import */ var _toDebugString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDebugString */ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/toDebugString.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/toDebugString.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/debug/toDebugString.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDebugString": () => (/* binding */ toDebugString)
/* harmony export */ });
function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndpointError": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.EndpointError),
/* harmony export */   "getUserAgentPrefix": () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_0__.getUserAgentPrefix),
/* harmony export */   "partition": () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_0__.partition),
/* harmony export */   "resolveEndpoint": () => (/* reexport safe */ _resolveEndpoint__WEBPACK_IMPORTED_MODULE_1__.resolveEndpoint),
/* harmony export */   "setPartitionInfo": () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_0__.setPartitionInfo),
/* harmony export */   "useDefaultPartitionInfo": () => (/* reexport safe */ _lib_aws_partition__WEBPACK_IMPORTED_MODULE_0__.useDefaultPartitionInfo)
/* harmony export */ });
/* harmony import */ var _lib_aws_partition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/aws/partition */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js");
/* harmony import */ var _resolveEndpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveEndpoint */ "./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserAgentPrefix": () => (/* reexport safe */ _partition__WEBPACK_IMPORTED_MODULE_2__.getUserAgentPrefix),
/* harmony export */   "isVirtualHostableS3Bucket": () => (/* reexport safe */ _isVirtualHostableS3Bucket__WEBPACK_IMPORTED_MODULE_0__.isVirtualHostableS3Bucket),
/* harmony export */   "parseArn": () => (/* reexport safe */ _parseArn__WEBPACK_IMPORTED_MODULE_1__.parseArn),
/* harmony export */   "partition": () => (/* reexport safe */ _partition__WEBPACK_IMPORTED_MODULE_2__.partition),
/* harmony export */   "setPartitionInfo": () => (/* reexport safe */ _partition__WEBPACK_IMPORTED_MODULE_2__.setPartitionInfo),
/* harmony export */   "useDefaultPartitionInfo": () => (/* reexport safe */ _partition__WEBPACK_IMPORTED_MODULE_2__.useDefaultPartitionInfo)
/* harmony export */ });
/* harmony import */ var _isVirtualHostableS3Bucket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isVirtualHostableS3Bucket */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js");
/* harmony import */ var _parseArn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseArn */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js");
/* harmony import */ var _partition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partition */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVirtualHostableS3Bucket": () => (/* binding */ isVirtualHostableS3Bucket)
/* harmony export */ });
/* harmony import */ var _isIpAddress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isIpAddress */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js");
/* harmony import */ var _isValidHostLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValidHostLabel */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isValidHostLabel.js");


const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
                return false;
            }
        }
        return true;
    }
    if (!(0,_isValidHostLabel__WEBPACK_IMPORTED_MODULE_1__.isValidHostLabel)(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if ((0,_isIpAddress__WEBPACK_IMPORTED_MODULE_0__.isIpAddress)(value)) {
        return false;
    }
    return true;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseArn": () => (/* binding */ parseArn)
/* harmony export */ });
const parseArn = (value) => {
    const segments = value.split(":");
    if (segments.length < 6)
        return null;
    const [arn, partition, service, region, accountId, ...resourceId] = segments;
    if (arn !== "arn" || partition === "" || service === "" || resourceId[0] === "")
        return null;
    return {
        partition,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserAgentPrefix": () => (/* binding */ getUserAgentPrefix),
/* harmony export */   "partition": () => (/* binding */ partition),
/* harmony export */   "setPartitionInfo": () => (/* binding */ setPartitionInfo),
/* harmony export */   "useDefaultPartitionInfo": () => (/* binding */ useDefaultPartitionInfo)
/* harmony export */ });
/* harmony import */ var _partitions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partitions.json */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json");

let selectedPartitionsInfo = _partitions_json__WEBPACK_IMPORTED_MODULE_0__;
let selectedUserAgentPrefix = "";
const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
const setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
    selectedPartitionsInfo = partitionsInfo;
    selectedUserAgentPrefix = userAgentPrefix;
};
const useDefaultPartitionInfo = () => {
    setPartitionInfo(_partitions_json__WEBPACK_IMPORTED_MODULE_0__, "");
};
const getUserAgentPrefix = () => selectedUserAgentPrefix;


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/booleanEquals.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/booleanEquals.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "booleanEquals": () => (/* binding */ booleanEquals)
/* harmony export */ });
const booleanEquals = (value1, value2) => value1 === value2;


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttr.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttr.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAttr": () => (/* binding */ getAttr)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _getAttrPathList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAttrPathList */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttrPathList.js");


const getAttr = (value, path) => (0,_getAttrPathList__WEBPACK_IMPORTED_MODULE_1__.getAttrPathList)(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
    }
    return acc[index];
}, value);


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttrPathList.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttrPathList.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAttrPathList": () => (/* binding */ getAttrPathList)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");

const getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
                pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
        }
        else {
            pathList.push(part);
        }
    }
    return pathList;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aws": () => (/* reexport module object */ _aws__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "booleanEquals": () => (/* reexport safe */ _booleanEquals__WEBPACK_IMPORTED_MODULE_1__.booleanEquals),
/* harmony export */   "getAttr": () => (/* reexport safe */ _getAttr__WEBPACK_IMPORTED_MODULE_2__.getAttr),
/* harmony export */   "isSet": () => (/* reexport safe */ _isSet__WEBPACK_IMPORTED_MODULE_3__.isSet),
/* harmony export */   "isValidHostLabel": () => (/* reexport safe */ _isValidHostLabel__WEBPACK_IMPORTED_MODULE_4__.isValidHostLabel),
/* harmony export */   "not": () => (/* reexport safe */ _not__WEBPACK_IMPORTED_MODULE_5__.not),
/* harmony export */   "parseURL": () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_6__.parseURL),
/* harmony export */   "stringEquals": () => (/* reexport safe */ _stringEquals__WEBPACK_IMPORTED_MODULE_7__.stringEquals),
/* harmony export */   "substring": () => (/* reexport safe */ _substring__WEBPACK_IMPORTED_MODULE_8__.substring),
/* harmony export */   "uriEncode": () => (/* reexport safe */ _uriEncode__WEBPACK_IMPORTED_MODULE_9__.uriEncode)
/* harmony export */ });
/* harmony import */ var _aws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aws */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/index.js");
/* harmony import */ var _booleanEquals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booleanEquals */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/booleanEquals.js");
/* harmony import */ var _getAttr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getAttr */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/getAttr.js");
/* harmony import */ var _isSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSet */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isSet.js");
/* harmony import */ var _isValidHostLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isValidHostLabel */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isValidHostLabel.js");
/* harmony import */ var _not__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/not.js");
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parseURL */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/parseURL.js");
/* harmony import */ var _stringEquals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringEquals */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/stringEquals.js");
/* harmony import */ var _substring__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./substring */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/substring.js");
/* harmony import */ var _uriEncode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uriEncode */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/uriEncode.js");












/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIpAddress": () => (/* binding */ isIpAddress)
/* harmony export */ });
const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isSet.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isSet.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSet": () => (/* binding */ isSet)
/* harmony export */ });
const isSet = (value) => value != null;


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isValidHostLabel.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isValidHostLabel.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidHostLabel": () => (/* binding */ isValidHostLabel)
/* harmony export */ });
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/not.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/not.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "not": () => (/* binding */ not)
/* harmony export */ });
const not = (value) => !value;


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/parseURL.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/parseURL.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseURL": () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var _aws_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/types */ "./node_modules/@aws-sdk/types/dist-es/index.js");
/* harmony import */ var _isIpAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isIpAddress */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js");


const DEFAULT_PORTS = {
    [_aws_sdk_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme.HTTP]: 80,
    [_aws_sdk_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme.HTTPS]: 443,
};
const parseURL = (value) => {
    const whatwgURL = (() => {
        try {
            if (value instanceof URL) {
                return value;
            }
            if (typeof value === "object" && "hostname" in value) {
                const { hostname, port, protocol = "", path = "", query = {} } = value;
                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                url.search = Object.entries(query)
                    .map(([k, v]) => `${k}=${v}`)
                    .join("&");
                return url;
            }
            return new URL(value);
        }
        catch (error) {
            return null;
        }
    })();
    if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
        return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(_aws_sdk_types__WEBPACK_IMPORTED_MODULE_0__.EndpointURLScheme).includes(scheme)) {
        return null;
    }
    const isIp = (0,_isIpAddress__WEBPACK_IMPORTED_MODULE_1__.isIpAddress)(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/stringEquals.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/stringEquals.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringEquals": () => (/* binding */ stringEquals)
/* harmony export */ });
const stringEquals = (value1, value2) => value1 === value2;


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/substring.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/substring.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "substring": () => (/* binding */ substring)
/* harmony export */ });
const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/uriEncode.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/uriEncode.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uriEncode": () => (/* binding */ uriEncode)
/* harmony export */ });
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolveEndpoint": () => (/* binding */ resolveEndpoint)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/index.js");



const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(_debug__WEBPACK_IMPORTED_MODULE_0__.debugId, `Initial EndpointParams: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new _types__WEBPACK_IMPORTED_MODULE_1__.EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.evaluateRules)(rules, { endpointParams, logger, referenceRecord: {} });
    if (options.endpointParams?.Endpoint) {
        try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
        }
        catch (e) {
        }
    }
    options.logger?.debug?.(_debug__WEBPACK_IMPORTED_MODULE_0__.debugId, `Resolved endpoint: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpoint)}`);
    return endpoint;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndpointError": () => (/* binding */ EndpointError)
/* harmony export */ });
class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndpointError": () => (/* reexport safe */ _EndpointError__WEBPACK_IMPORTED_MODULE_0__.EndpointError)
/* harmony export */ });
/* harmony import */ var _EndpointError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointError */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js");
/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndpointRuleObject */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js");
/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorRuleObject */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js");
/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RuleSetObject */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js");
/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeRuleObject */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js");








/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/callFunction.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/callFunction.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callFunction": () => (/* binding */ callFunction)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/index.js");
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateExpression */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js");


const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(arg, "arg", options));
    return fn.split(".").reduce((acc, key) => acc[key], _lib__WEBPACK_IMPORTED_MODULE_0__)(...evaluatedArgs);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateCondition.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateCondition.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateCondition": () => (/* binding */ evaluateCondition)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _callFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callFunction */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/callFunction.js");



const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
        throw new _types__WEBPACK_IMPORTED_MODULE_1__.EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = (0,_callFunction__WEBPACK_IMPORTED_MODULE_2__.callFunction)(fnArgs, options);
    options.logger?.debug?.(_debug__WEBPACK_IMPORTED_MODULE_0__.debugId, `evaluateCondition: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(fnArgs)} = ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(value)}`);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateConditions.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateConditions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateConditions": () => (/* binding */ evaluateConditions)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/index.js");
/* harmony import */ var _evaluateCondition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateCondition */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateCondition.js");


const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = (0,_evaluateCondition__WEBPACK_IMPORTED_MODULE_1__.evaluateCondition)(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(_debug__WEBPACK_IMPORTED_MODULE_0__.debugId, `assign: ${toAssign.name} := ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateEndpointRule.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateEndpointRule.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateEndpointRule": () => (/* binding */ evaluateEndpointRule)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug */ "./node_modules/@aws-sdk/util-endpoints/dist-es/debug/index.js");
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateConditions */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateConditions.js");
/* harmony import */ var _getEndpointHeaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointHeaders */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointHeaders.js");
/* harmony import */ var _getEndpointProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getEndpointProperties */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperties.js");
/* harmony import */ var _getEndpointUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getEndpointUrl */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointUrl.js");





const evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_1__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    };
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(_debug__WEBPACK_IMPORTED_MODULE_0__.debugId, `Resolving endpoint from template: ${(0,_debug__WEBPACK_IMPORTED_MODULE_0__.toDebugString)(endpoint)}`);
    return {
        ...(headers != undefined && {
            headers: (0,_getEndpointHeaders__WEBPACK_IMPORTED_MODULE_2__.getEndpointHeaders)(headers, endpointRuleOptions),
        }),
        ...(properties != undefined && {
            properties: (0,_getEndpointProperties__WEBPACK_IMPORTED_MODULE_3__.getEndpointProperties)(properties, endpointRuleOptions),
        }),
        url: (0,_getEndpointUrl__WEBPACK_IMPORTED_MODULE_4__.getEndpointUrl)(url, endpointRuleOptions),
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateErrorRule.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateErrorRule.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateErrorRule": () => (/* binding */ evaluateErrorRule)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateConditions */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateConditions.js");
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateExpression */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js");



const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_1__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError((0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_2__.evaluateExpression)(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateExpression": () => (/* binding */ evaluateExpression)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _callFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callFunction */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/callFunction.js");
/* harmony import */ var _evaluateTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateTemplate */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTemplate.js");
/* harmony import */ var _getReferenceValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getReferenceValue */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getReferenceValue.js");




const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return (0,_evaluateTemplate__WEBPACK_IMPORTED_MODULE_2__.evaluateTemplate)(obj, options);
    }
    else if (obj["fn"]) {
        return (0,_callFunction__WEBPACK_IMPORTED_MODULE_1__.callFunction)(obj, options);
    }
    else if (obj["ref"]) {
        return (0,_getReferenceValue__WEBPACK_IMPORTED_MODULE_3__.getReferenceValue)(obj, options);
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateRules.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateRules.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateRules": () => (/* binding */ evaluateRules)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateEndpointRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateEndpointRule */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateEndpointRule.js");
/* harmony import */ var _evaluateErrorRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluateErrorRule */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateErrorRule.js");
/* harmony import */ var _evaluateTreeRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evaluateTreeRule */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTreeRule.js");




const evaluateRules = (rules, options) => {
    for (const rule of rules) {
        if (rule.type === "endpoint") {
            const endpointOrUndefined = (0,_evaluateEndpointRule__WEBPACK_IMPORTED_MODULE_1__.evaluateEndpointRule)(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else if (rule.type === "error") {
            (0,_evaluateErrorRule__WEBPACK_IMPORTED_MODULE_2__.evaluateErrorRule)(rule, options);
        }
        else if (rule.type === "tree") {
            const endpointOrUndefined = (0,_evaluateTreeRule__WEBPACK_IMPORTED_MODULE_3__.evaluateTreeRule)(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else {
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unknown endpoint rule: ${rule}`);
        }
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Rules evaluation failed`);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTemplate.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTemplate.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateTemplate": () => (/* binding */ evaluateTemplate)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/index.js");

const evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    let currentIndex = 0;
    while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push((0,_lib__WEBPACK_IMPORTED_MODULE_0__.getAttr)(templateContext[refName], attrName));
        }
        else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTreeRule.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTreeRule.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateTreeRule": () => (/* binding */ evaluateTreeRule)
/* harmony export */ });
/* harmony import */ var _evaluateConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluateConditions */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateConditions.js");
/* harmony import */ var _evaluateRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateRules */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateRules.js");


const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = (0,_evaluateConditions__WEBPACK_IMPORTED_MODULE_0__.evaluateConditions)(conditions, options);
    if (!result) {
        return;
    }
    return (0,_evaluateRules__WEBPACK_IMPORTED_MODULE_1__.evaluateRules)(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointHeaders.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointHeaders.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndpointHeaders": () => (/* binding */ getEndpointHeaders)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateExpression */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js");


const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    }),
}), {});


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperties.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperties.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndpointProperties": () => (/* binding */ getEndpointProperties)
/* harmony export */ });
/* harmony import */ var _getEndpointProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEndpointProperty */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperty.js");

const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: (0,_getEndpointProperty__WEBPACK_IMPORTED_MODULE_0__.getEndpointProperty)(propertyVal, options),
}), {});


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperty.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperty.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndpointProperty": () => (/* binding */ getEndpointProperty)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateTemplate */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateTemplate.js");
/* harmony import */ var _getEndpointProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getEndpointProperties */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointProperties.js");



const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return (0,_evaluateTemplate__WEBPACK_IMPORTED_MODULE_1__.evaluateTemplate)(property, options);
        case "object":
            if (property === null) {
                throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return (0,_getEndpointProperties__WEBPACK_IMPORTED_MODULE_2__.getEndpointProperties)(property, options);
        case "boolean":
            return property;
        default:
            throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointUrl.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getEndpointUrl.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEndpointUrl": () => (/* binding */ getEndpointUrl)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js");
/* harmony import */ var _evaluateExpression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluateExpression */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateExpression.js");


const getEndpointUrl = (endpointUrl, options) => {
    const expression = (0,_evaluateExpression__WEBPACK_IMPORTED_MODULE_1__.evaluateExpression)(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new _types__WEBPACK_IMPORTED_MODULE_0__.EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getReferenceValue.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/getReferenceValue.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReferenceValue": () => (/* binding */ getReferenceValue)
/* harmony export */ });
const getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    return referenceRecord[ref];
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/utils/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateRules": () => (/* reexport safe */ _evaluateRules__WEBPACK_IMPORTED_MODULE_0__.evaluateRules)
/* harmony export */ });
/* harmony import */ var _evaluateRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluateRules */ "./node_modules/@aws-sdk/util-endpoints/dist-es/utils/evaluateRules.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/util-format-url/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-format-url/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatUrl": () => (/* binding */ formatUrl)
/* harmony export */ });
/* harmony import */ var _aws_sdk_querystring_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/querystring-builder */ "./node_modules/@aws-sdk/querystring-builder/dist-es/index.js");

function formatUrl(request) {
    const { port, query } = request;
    let { protocol, path, hostname } = request;
    if (protocol && protocol.slice(-1) !== ":") {
        protocol += ":";
    }
    if (port) {
        hostname += `:${port}`;
    }
    if (path && path.charAt(0) !== "/") {
        path = `/${path}`;
    }
    let queryString = query ? (0,_aws_sdk_querystring_builder__WEBPACK_IMPORTED_MODULE_0__.buildQueryString)(query) : "";
    if (queryString && queryString[0] !== "?") {
        queryString = `?${queryString}`;
    }
    return `${protocol}//${hostname}${path}${queryString}`;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromHex": () => (/* binding */ fromHex),
/* harmony export */   "toHex": () => (/* binding */ toHex)
/* harmony export */ });
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-locate-window/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-locate-window/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locateWindow": () => (/* binding */ locateWindow)
/* harmony export */ });
const fallbackWindow = {};
function locateWindow() {
    if (typeof window !== "undefined") {
        return window;
    }
    else if (typeof self !== "undefined") {
        return self;
    }
    return fallbackWindow;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-middleware/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeProvider": () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)
/* harmony export */ });
/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeProvider */ "./node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeProvider": () => (/* binding */ normalizeProvider)
/* harmony export */ });
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/AdaptiveRetryStrategy.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/AdaptiveRetryStrategy.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdaptiveRetryStrategy": () => (/* binding */ AdaptiveRetryStrategy)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/@aws-sdk/util-retry/dist-es/config.js");
/* harmony import */ var _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultRateLimiter */ "./node_modules/@aws-sdk/util-retry/dist-es/DefaultRateLimiter.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandardRetryStrategy */ "./node_modules/@aws-sdk/util-retry/dist-es/StandardRetryStrategy.js");



class AdaptiveRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = _config__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__.DefaultRateLimiter();
        this.standardRetryStrategy = new _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__.StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/DefaultRateLimiter.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/DefaultRateLimiter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRateLimiter": () => (/* binding */ DefaultRateLimiter)
/* harmony export */ });
/* harmony import */ var _aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/service-error-classification */ "./node_modules/@aws-sdk/service-error-classification/dist-es/index.js");

class DefaultRateLimiter {
    constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0,_aws_sdk_service_error_classification__WEBPACK_IMPORTED_MODULE_0__.isThrottlingError)(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/StandardRetryStrategy.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/StandardRetryStrategy.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StandardRetryStrategy": () => (/* binding */ StandardRetryStrategy)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/@aws-sdk/util-retry/dist-es/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/util-retry/dist-es/constants.js");
/* harmony import */ var _defaultRetryToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultRetryToken */ "./node_modules/@aws-sdk/util-retry/dist-es/defaultRetryToken.js");



class StandardRetryStrategy {
    constructor(maxAttemptsProvider) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = _config__WEBPACK_IMPORTED_MODULE_0__.RETRY_MODES.STANDARD;
        this.retryToken = (0,_defaultRetryToken__WEBPACK_IMPORTED_MODULE_2__.getDefaultRetryToken)(_constants__WEBPACK_IMPORTED_MODULE_1__.INITIAL_RETRY_TOKENS, _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_DELAY_BASE);
        this.maxAttemptsProvider = maxAttemptsProvider;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return this.retryToken;
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(tokenToRenew, errorInfo, maxAttempts)) {
            tokenToRenew.getRetryTokenCount(errorInfo);
            return tokenToRenew;
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.retryToken.releaseRetryTokens(token.getLastRetryCost());
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${_config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_ATTEMPTS}`);
            return _config__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount();
        return (attempts < maxAttempts &&
            tokenToRenew.hasRetryTokens(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/config.js":
/*!************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/config.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_MAX_ATTEMPTS": () => (/* binding */ DEFAULT_MAX_ATTEMPTS),
/* harmony export */   "DEFAULT_RETRY_MODE": () => (/* binding */ DEFAULT_RETRY_MODE),
/* harmony export */   "RETRY_MODES": () => (/* binding */ RETRY_MODES)
/* harmony export */ });
var RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = "STANDARD";


/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/constants.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_RETRY_DELAY_BASE": () => (/* binding */ DEFAULT_RETRY_DELAY_BASE),
/* harmony export */   "INITIAL_RETRY_TOKENS": () => (/* binding */ INITIAL_RETRY_TOKENS),
/* harmony export */   "INVOCATION_ID_HEADER": () => (/* binding */ INVOCATION_ID_HEADER),
/* harmony export */   "MAXIMUM_RETRY_DELAY": () => (/* binding */ MAXIMUM_RETRY_DELAY),
/* harmony export */   "NO_RETRY_INCREMENT": () => (/* binding */ NO_RETRY_INCREMENT),
/* harmony export */   "REQUEST_HEADER": () => (/* binding */ REQUEST_HEADER),
/* harmony export */   "RETRY_COST": () => (/* binding */ RETRY_COST),
/* harmony export */   "THROTTLING_RETRY_DELAY_BASE": () => (/* binding */ THROTTLING_RETRY_DELAY_BASE),
/* harmony export */   "TIMEOUT_RETRY_COST": () => (/* binding */ TIMEOUT_RETRY_COST)
/* harmony export */ });
const DEFAULT_RETRY_DELAY_BASE = 100;
const MAXIMUM_RETRY_DELAY = 20 * 1000;
const THROTTLING_RETRY_DELAY_BASE = 500;
const INITIAL_RETRY_TOKENS = 500;
const RETRY_COST = 5;
const TIMEOUT_RETRY_COST = 10;
const NO_RETRY_INCREMENT = 1;
const INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const REQUEST_HEADER = "amz-sdk-request";


/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/defaultRetryBackoffStrategy.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/defaultRetryBackoffStrategy.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultRetryBackoffStrategy": () => (/* binding */ getDefaultRetryBackoffStrategy)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/util-retry/dist-es/constants.js");

const getDefaultRetryBackoffStrategy = () => {
    let delayBase = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
        delayBase = delay;
    };
    return {
        computeNextBackoffDelay,
        setDelayBase,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/defaultRetryToken.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/defaultRetryToken.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultRetryToken": () => (/* binding */ getDefaultRetryToken)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/util-retry/dist-es/constants.js");
/* harmony import */ var _defaultRetryBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultRetryBackoffStrategy */ "./node_modules/@aws-sdk/util-retry/dist-es/defaultRetryBackoffStrategy.js");


const getDefaultRetryToken = (initialRetryTokens, initialRetryDelay, initialRetryCount, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const retryCost = options?.retryCost ?? _constants__WEBPACK_IMPORTED_MODULE_0__.RETRY_COST;
    const timeoutRetryCost = options?.timeoutRetryCost ?? _constants__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_RETRY_COST;
    const retryBackoffStrategy = options?.retryBackoffStrategy ?? (0,_defaultRetryBackoffStrategy__WEBPACK_IMPORTED_MODULE_1__.getDefaultRetryBackoffStrategy)();
    let availableCapacity = initialRetryTokens;
    let retryDelay = Math.min(_constants__WEBPACK_IMPORTED_MODULE_0__.MAXIMUM_RETRY_DELAY, initialRetryDelay);
    let lastRetryCost = undefined;
    let retryCount = initialRetryCount ?? 0;
    const getCapacityAmount = (errorType) => (errorType === "TRANSIENT" ? timeoutRetryCost : retryCost);
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => retryDelay;
    const getLastRetryCost = () => lastRetryCost;
    const hasRetryTokens = (errorType) => getCapacityAmount(errorType) <= availableCapacity;
    const getRetryTokenCount = (errorInfo) => {
        const errorType = errorInfo.errorType;
        if (!hasRetryTokens(errorType)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(errorType);
        const delayBase = errorType === "THROTTLING" ? _constants__WEBPACK_IMPORTED_MODULE_0__.THROTTLING_RETRY_DELAY_BASE : _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_RETRY_DELAY_BASE;
        retryBackoffStrategy.setDelayBase(delayBase);
        const delayFromErrorType = retryBackoffStrategy.computeNextBackoffDelay(retryCount);
        if (errorInfo.retryAfterHint) {
            const delayFromRetryAfterHint = errorInfo.retryAfterHint.getTime() - Date.now();
            retryDelay = Math.max(delayFromRetryAfterHint || 0, delayFromErrorType);
        }
        else {
            retryDelay = delayFromErrorType;
        }
        retryCount++;
        lastRetryCost = capacityAmount;
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (releaseAmount) => {
        availableCapacity += releaseAmount ?? _constants__WEBPACK_IMPORTED_MODULE_0__.NO_RETRY_INCREMENT;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return {
        getRetryCount,
        getRetryDelay,
        getLastRetryCost,
        hasRetryTokens,
        getRetryTokenCount,
        releaseRetryTokens,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdaptiveRetryStrategy": () => (/* reexport safe */ _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.AdaptiveRetryStrategy),
/* harmony export */   "DEFAULT_MAX_ATTEMPTS": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_MAX_ATTEMPTS),
/* harmony export */   "DEFAULT_RETRY_DELAY_BASE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_RETRY_DELAY_BASE),
/* harmony export */   "DEFAULT_RETRY_MODE": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_RETRY_MODE),
/* harmony export */   "DefaultRateLimiter": () => (/* reexport safe */ _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__.DefaultRateLimiter),
/* harmony export */   "INITIAL_RETRY_TOKENS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.INITIAL_RETRY_TOKENS),
/* harmony export */   "INVOCATION_ID_HEADER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.INVOCATION_ID_HEADER),
/* harmony export */   "MAXIMUM_RETRY_DELAY": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.MAXIMUM_RETRY_DELAY),
/* harmony export */   "NO_RETRY_INCREMENT": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.NO_RETRY_INCREMENT),
/* harmony export */   "REQUEST_HEADER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.REQUEST_HEADER),
/* harmony export */   "RETRY_COST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.RETRY_COST),
/* harmony export */   "RETRY_MODES": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_3__.RETRY_MODES),
/* harmony export */   "StandardRetryStrategy": () => (/* reexport safe */ _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__.StandardRetryStrategy),
/* harmony export */   "THROTTLING_RETRY_DELAY_BASE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.THROTTLING_RETRY_DELAY_BASE),
/* harmony export */   "TIMEOUT_RETRY_COST": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_4__.TIMEOUT_RETRY_COST)
/* harmony export */ });
/* harmony import */ var _AdaptiveRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdaptiveRetryStrategy */ "./node_modules/@aws-sdk/util-retry/dist-es/AdaptiveRetryStrategy.js");
/* harmony import */ var _DefaultRateLimiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultRateLimiter */ "./node_modules/@aws-sdk/util-retry/dist-es/DefaultRateLimiter.js");
/* harmony import */ var _StandardRetryStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StandardRetryStrategy */ "./node_modules/@aws-sdk/util-retry/dist-es/StandardRetryStrategy.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./node_modules/@aws-sdk/util-retry/dist-es/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/util-retry/dist-es/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./node_modules/@aws-sdk/util-retry/dist-es/types.js");








/***/ }),

/***/ "./node_modules/@aws-sdk/util-retry/dist-es/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-sdk/util-retry/dist-es/types.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/util-stream-browser/dist-es/getAwsChunkedEncodingStream.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-stream-browser/dist-es/getAwsChunkedEncodingStream.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAwsChunkedEncodingStream": () => (/* binding */ getAwsChunkedEncodingStream)
/* harmony export */ });
const getAwsChunkedEncodingStream = (readableStream, options) => {
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined &&
        bodyLengthChecker !== undefined &&
        checksumAlgorithmFn !== undefined &&
        checksumLocationName !== undefined &&
        streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;
    const reader = readableStream.getReader();
    return new ReadableStream({
        async pull(controller) {
            const { value, done } = await reader.read();
            if (done) {
                controller.enqueue(`0\r\n`);
                if (checksumRequired) {
                    const checksum = base64Encoder(await digest);
                    controller.enqueue(`${checksumLocationName}:${checksum}\r\n`);
                    controller.enqueue(`\r\n`);
                }
                controller.close();
            }
            else {
                controller.enqueue(`${(bodyLengthChecker(value) || 0).toString(16)}\r\n${value}\r\n`);
            }
        },
    });
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-stream-browser/dist-es/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-stream-browser/dist-es/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAwsChunkedEncodingStream": () => (/* reexport safe */ _getAwsChunkedEncodingStream__WEBPACK_IMPORTED_MODULE_0__.getAwsChunkedEncodingStream),
/* harmony export */   "sdkStreamMixin": () => (/* reexport safe */ _sdk_stream_mixin__WEBPACK_IMPORTED_MODULE_1__.sdkStreamMixin)
/* harmony export */ });
/* harmony import */ var _getAwsChunkedEncodingStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAwsChunkedEncodingStream */ "./node_modules/@aws-sdk/util-stream-browser/dist-es/getAwsChunkedEncodingStream.js");
/* harmony import */ var _sdk_stream_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk-stream-mixin */ "./node_modules/@aws-sdk/util-stream-browser/dist-es/sdk-stream-mixin.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/util-stream-browser/dist-es/sdk-stream-mixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-stream-browser/dist-es/sdk-stream-mixin.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sdkStreamMixin": () => (/* binding */ sdkStreamMixin)
/* harmony export */ });
/* harmony import */ var _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/fetch-http-handler */ "./node_modules/@aws-sdk/fetch-http-handler/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-base64 */ "./node_modules/@aws-sdk/util-base64/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");




const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream) => {
    if (!isBlobInstance(stream) && !isReadableStreamInstance(stream)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0,_aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.streamCollector)(stream);
    };
    const blobToWebStream = (blob) => {
        if (typeof blob.stream !== "function") {
            throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\n" +
                "If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
    };
    return Object.assign(stream, {
        transformToByteArray: transformToByteArray,
        transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === "base64") {
                return (0,_aws_sdk_util_base64__WEBPACK_IMPORTED_MODULE_1__.toBase64)(buf);
            }
            else if (encoding === "hex") {
                return (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_2__.toHex)(buf);
            }
            else if (encoding === undefined || encoding === "utf8" || encoding === "utf-8") {
                return (0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8)(buf);
            }
            else if (typeof TextDecoder === "function") {
                return new TextDecoder(encoding).decode(buf);
            }
            else {
                throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
            }
        },
        transformToWebStream: () => {
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            transformed = true;
            if (isBlobInstance(stream)) {
                return blobToWebStream(stream);
            }
            else if (isReadableStreamInstance(stream)) {
                return stream;
            }
            else {
                throw new Error(`Cannot transform payload to web stream, got ${stream}`);
            }
        },
    });
};
const isBlobInstance = (stream) => typeof Blob === "function" && stream instanceof Blob;
const isReadableStreamInstance = (stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream;


/***/ }),

/***/ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri-path.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri-path.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escapeUriPath": () => (/* binding */ escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js");

const escapeUriPath = (uri) => uri.split("/").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join("/");


/***/ }),

/***/ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escapeUri": () => (/* binding */ escapeUri)
/* harmony export */ });
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),

/***/ "./node_modules/@aws-sdk/util-uri-escape/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-uri-escape/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escapeUri": () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),
/* harmony export */   "escapeUriPath": () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js");
/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri-path.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultUserAgent": () => (/* binding */ defaultUserAgent)
/* harmony export */ });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);

const defaultUserAgent = ({ serviceId, clientVersion }) => async () => {
    const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent
        ? bowser__WEBPACK_IMPORTED_MODULE_0___default().parse(window.navigator.userAgent)
        : undefined;
    const sections = [
        ["aws-sdk-js", clientVersion],
        [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
        ["lang/js"],
        ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`],
    ];
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    return sections;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromUtf8": () => (/* binding */ fromUtf8),
/* harmony export */   "toUtf8": () => (/* binding */ toUtf8)
/* harmony export */ });
/* harmony import */ var _pureJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pureJs */ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js");
/* harmony import */ var _whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whatwgEncodingApi */ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js");


const fromUtf8 = (input) => typeof TextEncoder === "function" ? (0,_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(input) : (0,_pureJs__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(input);
const toUtf8 = (input) => typeof TextDecoder === "function" ? (0,_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__.toUtf8)(input) : (0,_pureJs__WEBPACK_IMPORTED_MODULE_0__.toUtf8)(input);


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromUtf8": () => (/* binding */ fromUtf8),
/* harmony export */   "toUtf8": () => (/* binding */ toUtf8)
/* harmony export */ });
const fromUtf8 = (input) => {
    const bytes = [];
    for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        }
        else if (value < 0x800) {
            bytes.push((value >> 6) | 0b11000000, (value & 0b111111) | 0b10000000);
        }
        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            const surrogatePair = 0x10000 + ((value & 0b1111111111) << 10) + (input.charCodeAt(++i) & 0b1111111111);
            bytes.push((surrogatePair >> 18) | 0b11110000, ((surrogatePair >> 12) & 0b111111) | 0b10000000, ((surrogatePair >> 6) & 0b111111) | 0b10000000, (surrogatePair & 0b111111) | 0b10000000);
        }
        else {
            bytes.push((value >> 12) | 0b11100000, ((value >> 6) & 0b111111) | 0b10000000, (value & 0b111111) | 0b10000000);
        }
    }
    return Uint8Array.from(bytes);
};
const toUtf8 = (input) => {
    let decoded = "";
    for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        }
        else if (0b11000000 <= byte && byte < 0b11100000) {
            const nextByte = input[++i];
            decoded += String.fromCharCode(((byte & 0b11111) << 6) | (nextByte & 0b111111));
        }
        else if (0b11110000 <= byte && byte < 0b101101101) {
            const surrogatePair = [byte, input[++i], input[++i], input[++i]];
            const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
        }
        else {
            decoded += String.fromCharCode(((byte & 0b1111) << 12) | ((input[++i] & 0b111111) << 6) | (input[++i] & 0b111111));
        }
    }
    return decoded;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromUtf8": () => (/* binding */ fromUtf8),
/* harmony export */   "toUtf8": () => (/* binding */ toUtf8)
/* harmony export */ });
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.browser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromUtf8": () => (/* binding */ fromUtf8)
/* harmony export */ });
const fromUtf8 = (input) => new TextEncoder().encode(input);


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8/dist-es/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromUtf8": () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   "toUint8Array": () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   "toUtf8": () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.browser.js");
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ "./node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js");
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.browser.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toUint8Array": () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.browser.js");

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.browser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toUtf8": () => (/* binding */ toUtf8)
/* harmony export */ });
const toUtf8 = (input) => new TextDecoder("utf-8").decode(input);


/***/ }),

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/@aws-sdk/client-cognito-identity/package.json":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-cognito-identity/package.json ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"@aws-sdk/client-cognito-identity","_id":"@aws-sdk/client-cognito-identity@3.321.1","_inBundle":false,"_integrity":"sha512-6XuGHbGjKmwmBP9fxVtHtgYsSUZEDJZAdBa9jD3+//6OG9Qh4/mxRUZJFImMT8DOrmNLHU2q2W/4HjsbDql6VA==","_location":"/@aws-sdk/client-cognito-identity","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@aws-sdk/client-cognito-identity","name":"@aws-sdk/client-cognito-identity","escapedName":"@aws-sdk%2fclient-cognito-identity","scope":"@aws-sdk","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/","/@aws-sdk/credential-provider-cognito-identity"],"_resolved":"https://registry.npmjs.org/@aws-sdk/client-cognito-identity/-/client-cognito-identity-3.321.1.tgz","_shasum":"b74f60003fb3dcebe147aedf1a2bf43b1b1e3f29","_spec":"@aws-sdk/client-cognito-identity","_where":"C:\\\\Users\\\\jickt\\\\Desktop\\\\polly_text_to_speech_app","author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"bugs":{"url":"https://github.com/aws/aws-sdk-js-v3/issues"},"bundleDependencies":false,"dependencies":{"@aws-crypto/sha256-browser":"3.0.0","@aws-crypto/sha256-js":"3.0.0","@aws-sdk/client-sts":"3.321.1","@aws-sdk/config-resolver":"3.310.0","@aws-sdk/credential-provider-node":"3.321.1","@aws-sdk/fetch-http-handler":"3.310.0","@aws-sdk/hash-node":"3.310.0","@aws-sdk/invalid-dependency":"3.310.0","@aws-sdk/middleware-content-length":"3.310.0","@aws-sdk/middleware-endpoint":"3.310.0","@aws-sdk/middleware-host-header":"3.310.0","@aws-sdk/middleware-logger":"3.310.0","@aws-sdk/middleware-recursion-detection":"3.310.0","@aws-sdk/middleware-retry":"3.310.0","@aws-sdk/middleware-serde":"3.310.0","@aws-sdk/middleware-signing":"3.310.0","@aws-sdk/middleware-stack":"3.310.0","@aws-sdk/middleware-user-agent":"3.319.0","@aws-sdk/node-config-provider":"3.310.0","@aws-sdk/node-http-handler":"3.321.1","@aws-sdk/protocol-http":"3.310.0","@aws-sdk/smithy-client":"3.316.0","@aws-sdk/types":"3.310.0","@aws-sdk/url-parser":"3.310.0","@aws-sdk/util-base64":"3.310.0","@aws-sdk/util-body-length-browser":"3.310.0","@aws-sdk/util-body-length-node":"3.310.0","@aws-sdk/util-defaults-mode-browser":"3.316.0","@aws-sdk/util-defaults-mode-node":"3.316.0","@aws-sdk/util-endpoints":"3.319.0","@aws-sdk/util-retry":"3.310.0","@aws-sdk/util-user-agent-browser":"3.310.0","@aws-sdk/util-user-agent-node":"3.310.0","@aws-sdk/util-utf8":"3.310.0","tslib":"^2.5.0"},"deprecated":false,"description":"AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native","devDependencies":{"@aws-sdk/client-iam":"3.321.1","@aws-sdk/service-client-documentation-generator":"3.310.0","@tsconfig/node14":"1.0.3","@types/chai":"^4.2.11","@types/mocha":"^8.0.4","@types/node":"^14.14.31","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typedoc":"0.23.23","typescript":"~4.9.5"},"engines":{"node":">=14.0.0"},"files":["dist-*/**"],"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity","license":"Apache-2.0","main":"./dist-cjs/index.js","module":"./dist-es/index.js","name":"@aws-sdk/client-cognito-identity","react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"repository":{"type":"git","url":"git+https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-cognito-identity"},"scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo cognito-identity","test:e2e":"ts-mocha test/**/*.ispec.ts && karma start karma.conf.js"},"sideEffects":false,"types":"./dist-types/index.d.ts","typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"version":"3.321.1"}');

/***/ }),

/***/ "./node_modules/@aws-sdk/client-polly/package.json":
/*!*********************************************************!*\
  !*** ./node_modules/@aws-sdk/client-polly/package.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"@aws-sdk/client-polly","_id":"@aws-sdk/client-polly@3.321.1","_inBundle":false,"_integrity":"sha512-ZpLq/EWBd394GNfrRQ4Lht8l3vOJ0tLHRZEKOoZJZ4ZqQMbpzT+h+2slDbwrpKuVLzTgti4Cf2kY76GSThMdNg==","_location":"/@aws-sdk/client-polly","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@aws-sdk/client-polly","name":"@aws-sdk/client-polly","escapedName":"@aws-sdk%2fclient-polly","scope":"@aws-sdk","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#USER","/","/@aws-sdk/polly-request-presigner"],"_resolved":"https://registry.npmjs.org/@aws-sdk/client-polly/-/client-polly-3.321.1.tgz","_shasum":"6727b6fee86c89f0329b1fd322c8611ecd0daaf6","_spec":"@aws-sdk/client-polly","_where":"C:\\\\Users\\\\jickt\\\\Desktop\\\\polly_text_to_speech_app","author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"browser":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.browser"},"bugs":{"url":"https://github.com/aws/aws-sdk-js-v3/issues"},"bundleDependencies":false,"dependencies":{"@aws-crypto/sha256-browser":"3.0.0","@aws-crypto/sha256-js":"3.0.0","@aws-sdk/client-sts":"3.321.1","@aws-sdk/config-resolver":"3.310.0","@aws-sdk/credential-provider-node":"3.321.1","@aws-sdk/fetch-http-handler":"3.310.0","@aws-sdk/hash-node":"3.310.0","@aws-sdk/invalid-dependency":"3.310.0","@aws-sdk/middleware-content-length":"3.310.0","@aws-sdk/middleware-endpoint":"3.310.0","@aws-sdk/middleware-host-header":"3.310.0","@aws-sdk/middleware-logger":"3.310.0","@aws-sdk/middleware-recursion-detection":"3.310.0","@aws-sdk/middleware-retry":"3.310.0","@aws-sdk/middleware-serde":"3.310.0","@aws-sdk/middleware-signing":"3.310.0","@aws-sdk/middleware-stack":"3.310.0","@aws-sdk/middleware-user-agent":"3.319.0","@aws-sdk/node-config-provider":"3.310.0","@aws-sdk/node-http-handler":"3.321.1","@aws-sdk/protocol-http":"3.310.0","@aws-sdk/smithy-client":"3.316.0","@aws-sdk/types":"3.310.0","@aws-sdk/url-parser":"3.310.0","@aws-sdk/util-base64":"3.310.0","@aws-sdk/util-body-length-browser":"3.310.0","@aws-sdk/util-body-length-node":"3.310.0","@aws-sdk/util-defaults-mode-browser":"3.316.0","@aws-sdk/util-defaults-mode-node":"3.316.0","@aws-sdk/util-endpoints":"3.319.0","@aws-sdk/util-retry":"3.310.0","@aws-sdk/util-stream-browser":"3.310.0","@aws-sdk/util-stream-node":"3.321.1","@aws-sdk/util-user-agent-browser":"3.310.0","@aws-sdk/util-user-agent-node":"3.310.0","@aws-sdk/util-utf8":"3.310.0","tslib":"^2.5.0"},"deprecated":false,"description":"AWS SDK for JavaScript Polly Client for Node.js, Browser and React Native","devDependencies":{"@aws-sdk/service-client-documentation-generator":"3.310.0","@tsconfig/node14":"1.0.3","@types/node":"^14.14.31","concurrently":"7.0.0","downlevel-dts":"0.10.1","rimraf":"3.0.2","typedoc":"0.23.23","typescript":"~4.9.5"},"engines":{"node":">=14.0.0"},"files":["dist-*/**"],"homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-polly","license":"Apache-2.0","main":"./dist-cjs/index.js","module":"./dist-es/index.js","name":"@aws-sdk/client-polly","react-native":{"./dist-es/runtimeConfig":"./dist-es/runtimeConfig.native"},"repository":{"type":"git","url":"git+https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-polly"},"scripts":{"build":"concurrently \'yarn:build:cjs\' \'yarn:build:es\' \'yarn:build:types\'","build:cjs":"tsc -p tsconfig.cjs.json","build:docs":"typedoc","build:es":"tsc -p tsconfig.es.json","build:include:deps":"lerna run --scope $npm_package_name --include-dependencies build","build:types":"tsc -p tsconfig.types.json","build:types:downlevel":"downlevel-dts dist-types dist-types/ts3.4","clean":"rimraf ./dist-* && rimraf *.tsbuildinfo","extract:docs":"api-extractor run --local","generate:client":"node ../../scripts/generate-clients/single-service --solo polly"},"sideEffects":false,"types":"./dist-types/index.d.ts","typesVersions":{"<4.0":{"dist-types/*":["dist-types/ts3.4/*"]}},"version":"3.321.1"}');

/***/ }),

/***/ "./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}}],"version":"1.1"}');

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./polly.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/client-cognito-identity */ "./node_modules/@aws-sdk/client-cognito-identity/dist-es/CognitoIdentityClient.js");
/* harmony import */ var _aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/credential-provider-cognito-identity */ "./node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/fromCognitoIdentityPool.js");
/* harmony import */ var _aws_sdk_client_polly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-polly */ "./node_modules/@aws-sdk/client-polly/dist-es/Polly.js");
/* harmony import */ var _aws_sdk_polly_request_presigner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/polly-request-presigner */ "./node_modules/@aws-sdk/polly-request-presigner/dist-es/index.js");





// Create the Polly service client, assigning your credentials
const client = new _aws_sdk_client_polly__WEBPACK_IMPORTED_MODULE_1__.Polly({
    region: "us-east-2",
    credentials: (0,_aws_sdk_credential_provider_cognito_identity__WEBPACK_IMPORTED_MODULE_2__.fromCognitoIdentityPool)({
        client: new _aws_sdk_client_cognito_identity__WEBPACK_IMPORTED_MODULE_3__.CognitoIdentityClient({ region: "us-east-2" }),
        identityPoolId: "us-east-2:472bf34f-fbdc-4ca9-ab9d-fce2c6f50e96" // IDENTITY_POOL_ID
    }),
});

// Set the parameters
const speechParams = {
    OutputFormat: "mp3", // For example, 'mp3'
    SampleRate: "16000", // For example, '16000
    Text: "", // The 'speakText' function supplies this value
    TextType: "text", // For example, "text"
    VoiceId: "Salli" // For example, "Matthew"
};
const speakText = async () => {
    // Update the Text parameter with the text entered by the user
    speechParams.Text = document.getElementById("textEntry").value;
    try{
        let url = await (0,_aws_sdk_polly_request_presigner__WEBPACK_IMPORTED_MODULE_0__.getSynthesizeSpeechUrl)({
            client, params: speechParams
        });
        console.log(url);
        // Load the URL of the voice recording into the browser
        document.getElementById('audioSource').src = url;
        document.getElementById('audioPlayback').load();
        document.getElementById('result').innerHTML = "Speech ready to play.";
    } catch (err) {
        console.log("Error", err);
        document.getElementById('result').innerHTML = err;
    }
};
// Expose the function to the browser
window.speakText = speakText;
})();

/******/ })()
;