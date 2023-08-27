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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsTable.vue */ \"./src/components/ViewTransactionsLabeling/TransactionsTable.vue\");\n/* harmony import */ var _TableHeaderCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TableHeaderCard.vue */ \"./src/components/TableHeaderCard.vue\");\n/* harmony import */ var _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vuepic/vue-datepicker */ \"./node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js\");\n/* harmony import */ var _vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vuepic/vue-datepicker/dist/main.css */ \"./node_modules/@vuepic/vue-datepicker/dist/main.css\");\n/* harmony import */ var _vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vuepic_vue_datepicker_dist_main_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      date: null,\n      transactions: [],\n      balance_summaries: []\n    };\n  },\n  components: {\n    TransactionsTable: _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    TableHeaderCard: _TableHeaderCard_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    VueDatePicker: _vuepic_vue_datepicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  methods: {\n    getTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`;\n      axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(getTransactionsUrl, {\n        params: {\n          start_period: this.formatDatePeriod()[0],\n          end_period: this.formatDatePeriod()[1]\n        }\n      }).then(response => {\n        // Process the response data\n        let data = response.data.data;\n        this.balance_summaries = data.balance_summaries;\n        this.transactions = data.transactions;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    },\n    formatDatePeriod() {\n      let start_date = this.date[0];\n      let end_date = this.date[1] ? this.date[1] : this.date[0];\n      let start_period = `${start_date.month}-${start_date.year}`;\n      let end_period = `${end_date.month}-${end_date.year}`;\n      return [start_period, end_period];\n    },\n    organizeTransactionData(data) {\n      // balance_summaries.forEach((bs)=>{\n      //   this.balance_summaries.push(bs)\n      // })\n      // transactions.forEach((ts)=>{\n      //   this.transactions.push(ts)\n      // })\n      console.log(this.balance_summaries);\n      console.log(this.transactions);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP2JiYzciXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlZVRV9BUFBfQkFTRV9VUkw7XG5pbXBvcnQgVHJhbnNhY3Rpb25zVGFibGUgZnJvbSAnLi9UcmFuc2FjdGlvbnNUYWJsZS52dWUnO1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2FyZCBmcm9tICcuLi9UYWJsZUhlYWRlckNhcmQudnVlJztcbmltcG9ydCBWdWVEYXRlUGlja2VyIGZyb20gJ0B2dWVwaWMvdnVlLWRhdGVwaWNrZXInO1xuaW1wb3J0ICdAdnVlcGljL3Z1ZS1kYXRlcGlja2VyL2Rpc3QvbWFpbi5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpe1xuICAgIHJldHVybntcbiAgICAgIGRhdGU6bnVsbCxcbiAgICAgIHRyYW5zYWN0aW9uczogW10sXG4gICAgICBiYWxhbmNlX3N1bW1hcmllczogW11cbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6e1xuICAgIFRyYW5zYWN0aW9uc1RhYmxlLFxuICAgIFRhYmxlSGVhZGVyQ2FyZCxcbiAgICBWdWVEYXRlUGlja2VyXG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIGdldFRyYW5zYWN0aW9ucygpe1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRlRva2VuJ10gPSBDb29raWVzLmdldCgnY3NyZnRva2VuJyk7XG4gICAgICBjb25zdCBnZXRUcmFuc2FjdGlvbnNVcmwgPSBgJHtiYXNlVXJsfWJhbmtzdGF0ZW1lbnQvYXBpL0NSVURCYW5rc3RhdGVtZW50QVBJYFxuXG4gICAgICBheGlvcy5nZXQoZ2V0VHJhbnNhY3Rpb25zVXJsICx7XG4gICAgICAgIHBhcmFtczp7XG4gICAgICAgICAgICBzdGFydF9wZXJpb2Q6dGhpcy5mb3JtYXREYXRlUGVyaW9kKClbMF0sXG4gICAgICAgICAgICBlbmRfcGVyaW9kOnRoaXMuZm9ybWF0RGF0ZVBlcmlvZCgpWzFdXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgdGhpcy5iYWxhbmNlX3N1bW1hcmllcyA9IGRhdGEuYmFsYW5jZV9zdW1tYXJpZXNcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvbnMgPSBkYXRhLnRyYW5zYWN0aW9uc1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IG9jY3Vyc1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBmb3JtYXREYXRlUGVyaW9kKCl7XG4gICAgICBsZXQgc3RhcnRfZGF0ZSA9IHRoaXMuZGF0ZVswXVxuICAgICAgbGV0IGVuZF9kYXRlID0gdGhpcy5kYXRlWzFdP3RoaXMuZGF0ZVsxXTp0aGlzLmRhdGVbMF1cbiAgICAgIGxldCBzdGFydF9wZXJpb2QgPSBgJHtzdGFydF9kYXRlLm1vbnRofS0ke3N0YXJ0X2RhdGUueWVhcn1gXG4gICAgICBsZXQgZW5kX3BlcmlvZCA9IGAke2VuZF9kYXRlLm1vbnRofS0ke2VuZF9kYXRlLnllYXJ9YFxuICAgICAgcmV0dXJuIFtzdGFydF9wZXJpb2QsIGVuZF9wZXJpb2RdXG4gICAgfSxcbiAgICBvcmdhbml6ZVRyYW5zYWN0aW9uRGF0YShkYXRhKXtcbiAgICAgIFxuICAgICAgLy8gYmFsYW5jZV9zdW1tYXJpZXMuZm9yRWFjaCgoYnMpPT57XG4gICAgICAvLyAgIHRoaXMuYmFsYW5jZV9zdW1tYXJpZXMucHVzaChicylcbiAgICAgIC8vIH0pXG4gICAgICAvLyB0cmFuc2FjdGlvbnMuZm9yRWFjaCgodHMpPT57XG4gICAgICAvLyAgIHRoaXMudHJhbnNhY3Rpb25zLnB1c2godHMpXG4gICAgICAvLyB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5iYWxhbmNlX3N1bW1hcmllcylcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudHJhbnNhY3Rpb25zKVxuICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "19946e2d85cae794"; }
/******/ }();
/******/ 
/******/ }
);