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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsTable.vue */ \"./src/components/ViewTransactionsLabeling/TransactionsTable.vue\");\n/* harmony import */ var _TableHeaderCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TableHeaderCard.vue */ \"./src/components/TableHeaderCard.vue\");\n/* harmony import */ var _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vuepic/vue-datepicker */ \"./node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js\");\n/* harmony import */ var _vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vuepic/vue-datepicker/dist/main.css */ \"./node_modules/@vuepic/vue-datepicker/dist/main.css\");\n/* harmony import */ var _vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      date: null,\n      transactions: [],\n      balance_summaries: []\n    };\n  },\n  components: {\n    TransactionsTable: _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    TableHeaderCard: _TableHeaderCard_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    VueDatePicker: _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  methods: {\n    getTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`;\n      axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(getTransactionsUrl, {\n        params: {\n          start_period: this.formatDatePeriod()[0],\n          end_period: this.formatDatePeriod()[1]\n        }\n      }).then(response => {\n        // Process the response data\n        let data = response.data.data;\n        this.balance_summaries = data.balance_summaries;\n        this.transactions = data.transactions;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    },\n    formatDatePeriod() {\n      let start_date = this.date[0];\n      let end_date = this.date[1] ? this.date[1] : this.date[0];\n      let start_period = `${start_date.month}-${start_date.year}`;\n      let end_period = `${end_date.month}-${end_date.year}`;\n      return [start_period, end_period];\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcvVmlld1RyYW5zYWN0aW9uc0xhYmVsaW5nLnZ1ZT9iYmM3Il0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WVUVfQVBQX0JBU0VfVVJMO1xuaW1wb3J0IFRyYW5zYWN0aW9uc1RhYmxlIGZyb20gJy4vVHJhbnNhY3Rpb25zVGFibGUudnVlJztcbmltcG9ydCBUYWJsZUhlYWRlckNhcmQgZnJvbSAnLi4vVGFibGVIZWFkZXJDYXJkLnZ1ZSc7XG5pbXBvcnQgVnVlRGF0ZVBpY2tlciBmcm9tICdAdnVlcGljL3Z1ZS1kYXRlcGlja2VyJztcbmltcG9ydCAnQHZ1ZXBpYy92dWUtZGF0ZXBpY2tlci9kaXN0L21haW4uY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKXtcbiAgICByZXR1cm57XG4gICAgICBkYXRlOm51bGwsXG4gICAgICB0cmFuc2FjdGlvbnM6IFtdLFxuICAgICAgYmFsYW5jZV9zdW1tYXJpZXM6IFtdXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOntcbiAgICBUcmFuc2FjdGlvbnNUYWJsZSxcbiAgICBUYWJsZUhlYWRlckNhcmQsXG4gICAgVnVlRGF0ZVBpY2tlclxuICB9LFxuICBtZXRob2RzOntcbiAgICBnZXRUcmFuc2FjdGlvbnMoKXtcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkZUb2tlbiddID0gQ29va2llcy5nZXQoJ2NzcmZ0b2tlbicpO1xuICAgICAgY29uc3QgZ2V0VHJhbnNhY3Rpb25zVXJsID0gYCR7YmFzZVVybH1iYW5rc3RhdGVtZW50L2FwaS9DUlVEQmFua3N0YXRlbWVudEFQSWBcblxuICAgICAgYXhpb3MuZ2V0KGdldFRyYW5zYWN0aW9uc1VybCAse1xuICAgICAgICBwYXJhbXM6e1xuICAgICAgICAgICAgc3RhcnRfcGVyaW9kOnRoaXMuZm9ybWF0RGF0ZVBlcmlvZCgpWzBdLFxuICAgICAgICAgICAgZW5kX3BlcmlvZDp0aGlzLmZvcm1hdERhdGVQZXJpb2QoKVsxXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgIHRoaXMuYmFsYW5jZV9zdW1tYXJpZXMgPSBkYXRhLmJhbGFuY2Vfc3VtbWFyaWVzXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gZGF0YS50cmFuc2FjdGlvbnNcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBvY2N1cnNcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9ybWF0RGF0ZVBlcmlvZCgpe1xuICAgICAgbGV0IHN0YXJ0X2RhdGUgPSB0aGlzLmRhdGVbMF1cbiAgICAgIGxldCBlbmRfZGF0ZSA9IHRoaXMuZGF0ZVsxXT90aGlzLmRhdGVbMV06dGhpcy5kYXRlWzBdXG4gICAgICBsZXQgc3RhcnRfcGVyaW9kID0gYCR7c3RhcnRfZGF0ZS5tb250aH0tJHtzdGFydF9kYXRlLnllYXJ9YFxuICAgICAgbGV0IGVuZF9wZXJpb2QgPSBgJHtlbmRfZGF0ZS5tb250aH0tJHtlbmRfZGF0ZS55ZWFyfWBcbiAgICAgIHJldHVybiBbc3RhcnRfcGVyaW9kLCBlbmRfcGVyaW9kXVxuICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bf7b258a5a77c656"; }
/******/ }();
/******/ 
/******/ }
);