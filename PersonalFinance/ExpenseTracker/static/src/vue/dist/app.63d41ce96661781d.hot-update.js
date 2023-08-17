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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsTable.vue */ \"./src/components/ViewTransactionsLabeling/TransactionsTable.vue\");\n/* harmony import */ var _TableHeaderCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TableHeaderCard.vue */ \"./src/components/TableHeaderCard.vue\");\n/* harmony import */ var _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vuepic/vue-datepicker */ \"./node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js\");\n/* harmony import */ var _vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vuepic/vue-datepicker/dist/main.css */ \"./node_modules/@vuepic/vue-datepicker/dist/main.css\");\n/* harmony import */ var _vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      date: new Date(),\n      transactions: []\n    };\n  },\n  components: {\n    TransactionsTable: _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    TableHeaderCard: _TableHeaderCard_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    VueDatePicker: _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  methods: {\n    getTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`;\n      console.log(this.format(this.date));\n      axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(getTransactionsUrl, {\n        params: {\n          from_month: this.date[0].month,\n          from_year: this.date[0].year,\n          to_month: this.date[1].month,\n          to_year: this.date[1].year\n        }\n      }).then(response => {\n        // Process the response data\n        let data = response.data;\n        console.log(data);\n        return data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    },\n    format() {\n      return {\n        \"start_period\": `${this.date[0].month}/${this.date[0].year}`,\n        \"end_period\": `${this.date[1].month}/${this.date[1].year}`\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP2JiYzciXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlZVRV9BUFBfQkFTRV9VUkw7XG5pbXBvcnQgVHJhbnNhY3Rpb25zVGFibGUgZnJvbSAnLi9UcmFuc2FjdGlvbnNUYWJsZS52dWUnO1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2FyZCBmcm9tICcuLi9UYWJsZUhlYWRlckNhcmQudnVlJztcbmltcG9ydCBWdWVEYXRlUGlja2VyIGZyb20gJ0B2dWVwaWMvdnVlLWRhdGVwaWNrZXInO1xuaW1wb3J0ICdAdnVlcGljL3Z1ZS1kYXRlcGlja2VyL2Rpc3QvbWFpbi5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpe1xuICAgIHJldHVybntcbiAgICAgIGRhdGU6bmV3IERhdGUoKSxcbiAgICAgIHRyYW5zYWN0aW9uczogW11cbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6e1xuICAgIFRyYW5zYWN0aW9uc1RhYmxlLFxuICAgIFRhYmxlSGVhZGVyQ2FyZCxcbiAgICBWdWVEYXRlUGlja2VyXG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIGdldFRyYW5zYWN0aW9ucygpe1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRlRva2VuJ10gPSBDb29raWVzLmdldCgnY3NyZnRva2VuJyk7XG4gICAgICBjb25zdCBnZXRUcmFuc2FjdGlvbnNVcmwgPSBgJHtiYXNlVXJsfWJhbmtzdGF0ZW1lbnQvYXBpL0NSVURCYW5rc3RhdGVtZW50QVBJYFxuICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtYXQodGhpcy5kYXRlKSlcbiAgICAgIGF4aW9zLmdldChnZXRUcmFuc2FjdGlvbnNVcmwgLHtcbiAgICAgICAgcGFyYW1zOntcbiAgICAgICAgICAgIGZyb21fbW9udGg6dGhpcy5kYXRlWzBdLm1vbnRoLFxuICAgICAgICAgICAgZnJvbV95ZWFyOnRoaXMuZGF0ZVswXS55ZWFyLFxuICAgICAgICAgICAgdG9fbW9udGg6dGhpcy5kYXRlWzFdLm1vbnRoLFxuICAgICAgICAgICAgdG9feWVhcjp0aGlzLmRhdGVbMV0ueWVhclxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgb2NjdXJzXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGZvcm1hdCgpIHtcbiAgICAgIHJldHVybntcbiAgICAgICAgXCJzdGFydF9wZXJpb2RcIjpgJHt0aGlzLmRhdGVbMF0ubW9udGh9LyR7dGhpcy5kYXRlWzBdLnllYXJ9YCxcbiAgICAgICAgXCJlbmRfcGVyaW9kXCI6YCR7dGhpcy5kYXRlWzFdLm1vbnRofS8ke3RoaXMuZGF0ZVsxXS55ZWFyfWBcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "58ae83cc40099f38"; }
/******/ }();
/******/ 
/******/ }
);