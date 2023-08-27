"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/components/Utils/utils.js":
/*!***************************************!*\
  !*** ./src/components/Utils/utils.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatPrice: function() { return /* binding */ formatPrice; },\n/* harmony export */   sortBalanceSummaryByDate: function() { return /* binding */ sortBalanceSummaryByDate; }\n/* harmony export */ });\nfunction formatPrice(value) {\n  let val = (value / 1).toFixed(2).replace('.', ',');\n  return \"Rp \" + val.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \".\");\n}\nfunction sortBalanceSummaryByDate(bs, order) {\n  if (order === 'asc') {\n    return list.sort((a, b) => new Date(a.date) - new Date(b.date));\n  } else if (order === 'dsc') {\n    return list.sort((a, b) => new Date(b.date) - new Date(a.date));\n  } else {\n    throw new Error(\"Invalid order parameter. Use 'asc' or 'dsc'.\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VdGlscy91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9VdGlscy91dGlscy5qcz80MGI2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZSh2YWx1ZSkge1xuICAgIGxldCB2YWwgPSAodmFsdWUgLyAxKS50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnLCcpO1xuICAgIHJldHVybiBcIlJwIFwiK3ZhbC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRCYWxhbmNlU3VtbWFyeUJ5RGF0ZShicywgb3JkZXIpe1xuICAgIGlmIChvcmRlciA9PT0gJ2FzYycpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSkpO1xuICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2RzYycpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcmRlciBwYXJhbWV0ZXIuIFVzZSAnYXNjJyBvciAnZHNjJy5cIik7XG4gICAgICB9XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Utils/utils.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "293bc8a9f74b0a24"; }
/******/ }();
/******/ 
/******/ }
);