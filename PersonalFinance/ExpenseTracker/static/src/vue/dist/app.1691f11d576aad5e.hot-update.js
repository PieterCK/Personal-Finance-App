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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/utils */ \"./src/components/Utils/utils.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      account_type: null,\n      current_value: 0,\n      start_value: 0\n    };\n  },\n  props: {\n    balance_summaries: {},\n    transactions: {}\n  },\n  methods: {\n    formatPrice: _Utils_utils__WEBPACK_IMPORTED_MODULE_0__.formatPrice,\n    setUpFigureCard(account_category, bs, transactions) {\n      let sorted_bs = (0,_Utils_utils__WEBPACK_IMPORTED_MODULE_0__.sortBalanceSummaryByDate)(bs, \"asc\");\n      if (account_category == \"Balance\") {\n        this.start_value = sorted_bs[0].starting_balance;\n        this.current_value = sorted_bs[-1].ending_balance;\n      } else if (account_category == \"Income\") {\n        this.start_value = sorted_bs[0].credit_mutation;\n        this.current_value = sorted_bs[-1].credit_mutation;\n      } else if (account_category == \"Expense\") {\n        this.start_value = sorted_bs[0].debit_mutation;\n        this.current_value = sorted_bs[-1].debit_mutation;\n      } else {\n        throw new Error(\"Invalid 'account_category' parameter. Use one of ['Balance', 'Income', 'Expense'].\");\n      }\n      this.start_month = sorted_bs[0].month;\n      this.start_year = sorted_bs[0].year;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdEYXNoYm9hcmQvRmlndXJlQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7QUE2QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvVmlld0Rhc2hib2FyZC9GaWd1cmVDYXJkLnZ1ZT84YTdmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1heC13LXNtIHAtMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IHNtOnAtOCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cIm1iLTQgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTgwMFwiPnt7YWNjb3VudF9jYXRlZ29yeX19PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtYmFzZWxpbmUgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj57e2Zvcm1hdFByaWNlKHRoaXMuY3VycmVudF92YWx1ZSl9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbG93LXJvb3RcIj5cbiAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGRhcms6ZGl2aWRlLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHktMyBzbTpweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0wXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0ZXh0LWdyZWVuLTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTc1IGRhcms6dGV4dC1ncmF5LTQwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMC43NWVtXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZD1cIk0zODQgMTYwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDU0NGMxNy43IDAgMzIgMTQuMyAzMiAzMlYyODhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJWMjA1LjNMMzQyLjYgMzc0LjZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwTDE5MiAyNjkuMyA1NC42IDQwNi42Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMHMtMTIuNS0zMi44IDAtNDUuM2wxNjAtMTYwYzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwTDMyMCAzMDYuNyA0NjYuNyAxNjBIMzg0elwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdHJ1bmNhdGUgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IFBlcmlvZDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmb3JtYXRQcmljZSh0aGlzLmN1cnJlbnRfdmFsdWUpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+ICAgXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL1V0aWxzL3V0aWxzJztcbiAgaW1wb3J0IHsgc29ydEJhbGFuY2VTdW1tYXJ5QnlEYXRlIH0gZnJvbSAnLi4vVXRpbHMvdXRpbHMnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCl7XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIGFjY291bnRfdHlwZTpudWxsLFxuICAgICAgICAgICAgY3VycmVudF92YWx1ZTowLFxuICAgICAgICAgICAgc3RhcnRfdmFsdWU6MFxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczp7XG4gICAgICAgIGJhbGFuY2Vfc3VtbWFyaWVzOnt9LFxuICAgICAgICB0cmFuc2FjdGlvbnM6e31cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBmb3JtYXRQcmljZSxcbiAgICAgICAgc2V0VXBGaWd1cmVDYXJkKGFjY291bnRfY2F0ZWdvcnksIGJzLCB0cmFuc2FjdGlvbnMpe1xuICAgICAgICAgICAgbGV0IHNvcnRlZF9icyA9IHNvcnRCYWxhbmNlU3VtbWFyeUJ5RGF0ZShicywgXCJhc2NcIilcbiAgICAgICAgICAgIGlmIChhY2NvdW50X2NhdGVnb3J5ID09IFwiQmFsYW5jZVwiKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0X3ZhbHVlID0gc29ydGVkX2JzWzBdLnN0YXJ0aW5nX2JhbGFuY2VcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfdmFsdWUgPSBzb3J0ZWRfYnNbLTFdLmVuZGluZ19iYWxhbmNlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjY291bnRfY2F0ZWdvcnkgPT0gXCJJbmNvbWVcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydF92YWx1ZSA9IHNvcnRlZF9ic1swXS5jcmVkaXRfbXV0YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfdmFsdWUgPSBzb3J0ZWRfYnNbLTFdLmNyZWRpdF9tdXRhdGlvblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY2NvdW50X2NhdGVnb3J5ID09IFwiRXhwZW5zZVwiKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0X3ZhbHVlID0gc29ydGVkX2JzWzBdLmRlYml0X211dGF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gc29ydGVkX2JzWy0xXS5kZWJpdF9tdXRhdGlvblxuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgJ2FjY291bnRfY2F0ZWdvcnknIHBhcmFtZXRlci4gVXNlIG9uZSBvZiBbJ0JhbGFuY2UnLCAnSW5jb21lJywgJ0V4cGVuc2UnXS5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRfbW9udGggPSBzb3J0ZWRfYnNbMF0ubW9udGhcbiAgICAgICAgICAgIHRoaXMuc3RhcnRfeWVhciA9IHNvcnRlZF9ic1swXS55ZWFyXG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700\"\n};\nconst _hoisted_2 = {\n  class: \"mb-4 text-xl font-medium text-gray-800 dark:text-gray-800\"\n};\nconst _hoisted_3 = {\n  class: \"flex items-baseline text-gray-900 dark:text-white\"\n};\nconst _hoisted_4 = {\n  class: \"text-3xl font-semibold\"\n};\nconst _hoisted_5 = {\n  class: \"flow-root\"\n};\nconst _hoisted_6 = {\n  role: \"list\",\n  class: \"divide-y divide-gray-200 dark:divide-gray-700\"\n};\nconst _hoisted_7 = {\n  class: \"py-3 sm:py-4\"\n};\nconst _hoisted_8 = {\n  class: \"flex items-center space-x-4\"\n};\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"flex-shrink-0\\\"><svg class=\\\"text-green-500 transition duration-75 dark:text-gray-400\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"currentColor\\\" height=\\\"0.75em\\\" viewBox=\\\"0 0 576 512\\\"><path d=\\\"M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z\\\"></path></svg></div><div class=\\\"flex-1 min-w-0\\\"><p class=\\\"text-sm font-medium text-gray-900 truncate dark:text-white\\\"> Start Period: </p></div>\", 2);\nconst _hoisted_11 = {\n  class: \"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h5\", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.account_category), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(this.current_value)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(this.current_value)), 1 /* TEXT */)])])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay1wbHVnaW4tdnVldGlmeS9kaXN0L3NjcmlwdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdEYXNoYm9hcmQvRmlndXJlQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWM0MmQxZjgiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBRUE7QUFBQTs7QUFDQTtBQUFBOzs7QUFDQTtBQUFBOztBQUNBO0FBQUE7OztBQVNBO0FBQUE7O0FBakJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9WaWV3RGFzaGJvYXJkL0ZpZ3VyZUNhcmQudnVlPzhhN2YiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWF4LXctc20gcC0yIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgc206cC04IGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwibWItNCB0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktODAwXCI+e3thY2NvdW50X2NhdGVnb3J5fX08L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1iYXNlbGluZSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPnt7Zm9ybWF0UHJpY2UodGhpcy5jdXJyZW50X3ZhbHVlKX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsb3ctcm9vdFwiPlxuICAgICAgICAgICAgPHVsIHJvbGU9XCJsaXN0XCIgY2xhc3M9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgZGFyazpkaXZpZGUtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJweS0zIHNtOnB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTBcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cInRleHQtZ3JlZW4tNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzUgZGFyazp0ZXh0LWdyYXktNDAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIwLjc1ZW1cIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBkPVwiTTM4NCAxNjBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJINTQ0YzE3LjcgMCAzMiAxNC4zIDMyIDMyVjI4OGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMlYyMDUuM0wzNDIuNiAzNzQuNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBMMTkyIDI2OS4zIDU0LjYgNDA2LjZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zbDE2MC0xNjBjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBMMzIwIDMwNi43IDQ2Ni43IDE2MEgzODR6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xIG1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB0cnVuY2F0ZSBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgUGVyaW9kOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2Zvcm1hdFByaWNlKHRoaXMuY3VycmVudF92YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj4gICBcbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vVXRpbHMvdXRpbHMnO1xuICBpbXBvcnQgeyBzb3J0QmFsYW5jZVN1bW1hcnlCeURhdGUgfSBmcm9tICcuLi9VdGlscy91dGlscyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgYWNjb3VudF90eXBlOm51bGwsXG4gICAgICAgICAgICBjdXJyZW50X3ZhbHVlOjAsXG4gICAgICAgICAgICBzdGFydF92YWx1ZTowXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOntcbiAgICAgICAgYmFsYW5jZV9zdW1tYXJpZXM6e30sXG4gICAgICAgIHRyYW5zYWN0aW9uczp7fVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIGZvcm1hdFByaWNlLFxuICAgICAgICBzZXRVcEZpZ3VyZUNhcmQoYWNjb3VudF9jYXRlZ29yeSwgYnMsIHRyYW5zYWN0aW9ucyl7XG4gICAgICAgICAgICBsZXQgc29ydGVkX2JzID0gc29ydEJhbGFuY2VTdW1tYXJ5QnlEYXRlKGJzLCBcImFzY1wiKVxuICAgICAgICAgICAgaWYgKGFjY291bnRfY2F0ZWdvcnkgPT0gXCJCYWxhbmNlXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uc3RhcnRpbmdfYmFsYW5jZVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSA9IHNvcnRlZF9ic1stMV0uZW5kaW5nX2JhbGFuY2VcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWNjb3VudF9jYXRlZ29yeSA9PSBcIkluY29tZVwiKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0X3ZhbHVlID0gc29ydGVkX2JzWzBdLmNyZWRpdF9tdXRhdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSA9IHNvcnRlZF9ic1stMV0uY3JlZGl0X211dGF0aW9uXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjY291bnRfY2F0ZWdvcnkgPT0gXCJFeHBlbnNlXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uZGViaXRfbXV0YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfdmFsdWUgPSBzb3J0ZWRfYnNbLTFdLmRlYml0X211dGF0aW9uXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCAnYWNjb3VudF9jYXRlZ29yeScgcGFyYW1ldGVyLiBVc2Ugb25lIG9mIFsnQmFsYW5jZScsICdJbmNvbWUnLCAnRXhwZW5zZSddLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGFydF9tb250aCA9IHNvcnRlZF9ic1swXS5tb250aFxuICAgICAgICAgICAgdGhpcy5zdGFydF95ZWFyID0gc29ydGVkX2JzWzBdLnllYXJcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "94b453ce3794d4e8"; }
/******/ }();
/******/ 
/******/ }
);