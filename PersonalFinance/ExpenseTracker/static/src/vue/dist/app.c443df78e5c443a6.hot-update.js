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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/utils */ \"./src/components/Utils/utils.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      account_type: null,\n      current_value: 0,\n      start_value: 0,\n      period: {\n        start_month: 0,\n        start_year: 0,\n        current_month: 0,\n        current_year: 0\n      }\n    };\n  },\n  props: {\n    balance_summaries: {},\n    transactions: {}\n  },\n  methods: {\n    formatPrice: _Utils_utils__WEBPACK_IMPORTED_MODULE_0__.formatPrice,\n    setUpFigureCard(account_category, bs) {\n      let sorted_bs = (0,_Utils_utils__WEBPACK_IMPORTED_MODULE_0__.sortBalanceSummaryByDate)((0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(bs), \"asc\");\n      let i = sorted_bs.length - 1;\n      console.log(sorted_bs);\n      if (account_category == \"Balance\") {\n        this.start_value = sorted_bs[0].starting_balance;\n        this.current_value = sorted_bs[i].ending_balance;\n      } else if (account_category == \"Income\") {\n        this.start_value = sorted_bs[0].credit_mutation;\n        this.current_value = sorted_bs[i].credit_mutation;\n      } else if (account_category == \"Expense\") {\n        this.start_value = sorted_bs[0].debit_mutation;\n        this.current_value = sorted_bs[i].debit_mutation;\n      } else {\n        throw new Error(\"Invalid 'account_category' parameter. Use one of ['Balance', 'Income', 'Expense'].\");\n      }\n      this.period.start_month = sorted_bs[0].month;\n      this.period.start_year = sorted_bs[0].year;\n      this.period.current_year = sorted_bs[0].month;\n      this.period.current_year = sorted_bs[i].year;\n    },\n    setUpCardDetails(account_category) {}\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdEYXNoYm9hcmQvRmlndXJlQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdEYXNoYm9hcmQvRmlndXJlQ2FyZC52dWU/OGE3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYXgtdy1zbSBwLTIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdyBzbTpwLTggZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICA8aDUgY2xhc3M9XCJtYi00IHRleHQteGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS04MDBcIj57e2FjY291bnRfY2F0ZWdvcnl9fTwvaDU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWJhc2VsaW5lIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+e3tmb3JtYXRQcmljZSh0aGlzLmN1cnJlbnRfdmFsdWUpfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvdy1yb290XCI+XG4gICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzcz1cImRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMCBkYXJrOmRpdmlkZS1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInB5LTMgc206cHktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1zaHJpbmstMFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwidGV4dC1ncmVlbi01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi03NSBkYXJrOnRleHQtZ3JheS00MDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjAuNzVlbVwiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGQ9XCJNMzg0IDE2MGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMkg1NDRjMTcuNyAwIDMyIDE0LjMgMzIgMzJWMjg4YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyVjIwNS4zTDM0Mi42IDM3NC42Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMEwxOTIgMjY5LjMgNTQuNiA0MDYuNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBzLTEyLjUtMzIuOCAwLTQ1LjNsMTYwLTE2MGMxMi41LTEyLjUgMzIuOC0xMi41IDQ1LjMgMEwzMjAgMzA2LjcgNDY2LjcgMTYwSDM4NHpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTEgbWluLXctMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIHRydW5jYXRlIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGFydCBQZXJpb2Q6IHt7IHBlcmlvZC5zdGFydF9tb250aCB9fSAvIHt7IHBlcmlvZC5zdGFydF95ZWFyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tmb3JtYXRQcmljZSh0aGlzLmN1cnJlbnRfdmFsdWUpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+ICAgXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL1V0aWxzL3V0aWxzJztcbiAgaW1wb3J0IHsgc29ydEJhbGFuY2VTdW1tYXJ5QnlEYXRlIH0gZnJvbSAnLi4vVXRpbHMvdXRpbHMnO1xuICBpbXBvcnQge3RvUmF3fSBmcm9tICd2dWUnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCl7XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIGFjY291bnRfdHlwZTpudWxsLFxuICAgICAgICAgICAgY3VycmVudF92YWx1ZTowLFxuICAgICAgICAgICAgc3RhcnRfdmFsdWU6MCxcbiAgICAgICAgICAgIHBlcmlvZDoge1xuICAgICAgICAgICAgICAgIHN0YXJ0X21vbnRoOiAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0X3llYXI6IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudF9tb250aDogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50X3llYXI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6e1xuICAgICAgICBiYWxhbmNlX3N1bW1hcmllczp7fSxcbiAgICAgICAgdHJhbnNhY3Rpb25zOnt9XG4gICAgfSxcbiAgICBtZXRob2RzOntcbiAgICAgICAgZm9ybWF0UHJpY2UsXG4gICAgICAgIHNldFVwRmlndXJlQ2FyZChhY2NvdW50X2NhdGVnb3J5LCBicyl7XG4gICAgICAgICAgICBsZXQgc29ydGVkX2JzID0gc29ydEJhbGFuY2VTdW1tYXJ5QnlEYXRlKHRvUmF3KGJzKSwgXCJhc2NcIilcbiAgICAgICAgICAgIGxldCBpID0gc29ydGVkX2JzLmxlbmd0aCAtMVxuICAgICAgICAgICAgY29uc29sZS5sb2coc29ydGVkX2JzKVxuICAgICAgICAgICAgaWYgKGFjY291bnRfY2F0ZWdvcnkgPT0gXCJCYWxhbmNlXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uc3RhcnRpbmdfYmFsYW5jZVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSA9IHNvcnRlZF9ic1tpXS5lbmRpbmdfYmFsYW5jZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY2NvdW50X2NhdGVnb3J5ID09IFwiSW5jb21lXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uY3JlZGl0X211dGF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gc29ydGVkX2JzW2ldLmNyZWRpdF9tdXRhdGlvblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY2NvdW50X2NhdGVnb3J5ID09IFwiRXhwZW5zZVwiKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0X3ZhbHVlID0gc29ydGVkX2JzWzBdLmRlYml0X211dGF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gc29ydGVkX2JzW2ldLmRlYml0X211dGF0aW9uXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCAnYWNjb3VudF9jYXRlZ29yeScgcGFyYW1ldGVyLiBVc2Ugb25lIG9mIFsnQmFsYW5jZScsICdJbmNvbWUnLCAnRXhwZW5zZSddLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wZXJpb2Quc3RhcnRfbW9udGggPSBzb3J0ZWRfYnNbMF0ubW9udGhcbiAgICAgICAgICAgIHRoaXMucGVyaW9kLnN0YXJ0X3llYXIgPSBzb3J0ZWRfYnNbMF0ueWVhclxuICAgICAgICAgICAgdGhpcy5wZXJpb2QuY3VycmVudF95ZWFyID0gc29ydGVkX2JzWzBdLm1vbnRoXG4gICAgICAgICAgICB0aGlzLnBlcmlvZC5jdXJyZW50X3llYXIgPSBzb3J0ZWRfYnNbaV0ueWVhclxuICAgICAgICB9LFxuICAgICAgICBzZXRVcENhcmREZXRhaWxzKGFjY291bnRfY2F0ZWdvcnkpe1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700\"\n};\nconst _hoisted_2 = {\n  class: \"mb-4 text-xl font-medium text-gray-800 dark:text-gray-800\"\n};\nconst _hoisted_3 = {\n  class: \"flex items-baseline text-gray-900 dark:text-white\"\n};\nconst _hoisted_4 = {\n  class: \"text-3xl font-semibold\"\n};\nconst _hoisted_5 = {\n  class: \"flow-root\"\n};\nconst _hoisted_6 = {\n  role: \"list\",\n  class: \"divide-y divide-gray-200 dark:divide-gray-700\"\n};\nconst _hoisted_7 = {\n  class: \"py-3 sm:py-4\"\n};\nconst _hoisted_8 = {\n  class: \"flex items-center space-x-4\"\n};\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"flex-shrink-0\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"svg\", {\n  class: \"text-green-500 transition duration-75 dark:text-gray-400\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fill: \"currentColor\",\n  height: \"0.75em\",\n  viewBox: \"0 0 576 512\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"path\", {\n  d: \"M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z\"\n})])], -1 /* HOISTED */);\nconst _hoisted_10 = {\n  class: \"flex-1 min-w-0\"\n};\nconst _hoisted_11 = {\n  class: \"text-sm font-medium text-gray-900 truncate dark:text-white\"\n};\nconst _hoisted_12 = {\n  class: \"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h5\", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.account_category), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(this.current_value)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_11, \" Start Period: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.period.start_month) + \" / \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.period.start_year), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(this.current_value)), 1 /* TEXT */)])])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay1wbHVnaW4tdnVldGlmeS9kaXN0L3NjcmlwdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdEYXNoYm9hcmQvRmlndXJlQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWM0MmQxZjgiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBRUE7QUFBQTs7QUFDQTtBQUFBOzs7QUFDQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7O0FBQ0E7QUFBQTs7QUFJQTtBQUFBOztBQWpCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvVmlld0Rhc2hib2FyZC9GaWd1cmVDYXJkLnZ1ZT84YTdmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1heC13LXNtIHAtMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IHNtOnAtOCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cIm1iLTQgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTgwMFwiPnt7YWNjb3VudF9jYXRlZ29yeX19PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtYmFzZWxpbmUgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj57e2Zvcm1hdFByaWNlKHRoaXMuY3VycmVudF92YWx1ZSl9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbG93LXJvb3RcIj5cbiAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwIGRhcms6ZGl2aWRlLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicHktMyBzbTpweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0wXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJ0ZXh0LWdyZWVuLTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTc1IGRhcms6dGV4dC1ncmF5LTQwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMC43NWVtXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PHBhdGggZD1cIk0zODQgMTYwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDU0NGMxNy43IDAgMzIgMTQuMyAzMiAzMlYyODhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJWMjA1LjNMMzQyLjYgMzc0LjZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwTDE5MiAyNjkuMyA1NC42IDQwNi42Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMHMtMTIuNS0zMi44IDAtNDUuM2wxNjAtMTYwYzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwTDMyMCAzMDYuNyA0NjYuNyAxNjBIMzg0elwiLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdHJ1bmNhdGUgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IFBlcmlvZDoge3sgcGVyaW9kLnN0YXJ0X21vbnRoIH19IC8ge3sgcGVyaW9kLnN0YXJ0X3llYXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2Zvcm1hdFByaWNlKHRoaXMuY3VycmVudF92YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj4gICBcbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vVXRpbHMvdXRpbHMnO1xuICBpbXBvcnQgeyBzb3J0QmFsYW5jZVN1bW1hcnlCeURhdGUgfSBmcm9tICcuLi9VdGlscy91dGlscyc7XG4gIGltcG9ydCB7dG9SYXd9IGZyb20gJ3Z1ZSdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgYWNjb3VudF90eXBlOm51bGwsXG4gICAgICAgICAgICBjdXJyZW50X3ZhbHVlOjAsXG4gICAgICAgICAgICBzdGFydF92YWx1ZTowLFxuICAgICAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRfbW9udGg6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnRfeWVhcjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50X21vbnRoOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRfeWVhcjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczp7XG4gICAgICAgIGJhbGFuY2Vfc3VtbWFyaWVzOnt9LFxuICAgICAgICB0cmFuc2FjdGlvbnM6e31cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICBmb3JtYXRQcmljZSxcbiAgICAgICAgc2V0VXBGaWd1cmVDYXJkKGFjY291bnRfY2F0ZWdvcnksIGJzKXtcbiAgICAgICAgICAgIGxldCBzb3J0ZWRfYnMgPSBzb3J0QmFsYW5jZVN1bW1hcnlCeURhdGUodG9SYXcoYnMpLCBcImFzY1wiKVxuICAgICAgICAgICAgbGV0IGkgPSBzb3J0ZWRfYnMubGVuZ3RoIC0xXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb3J0ZWRfYnMpXG4gICAgICAgICAgICBpZiAoYWNjb3VudF9jYXRlZ29yeSA9PSBcIkJhbGFuY2VcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydF92YWx1ZSA9IHNvcnRlZF9ic1swXS5zdGFydGluZ19iYWxhbmNlXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gc29ydGVkX2JzW2ldLmVuZGluZ19iYWxhbmNlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjY291bnRfY2F0ZWdvcnkgPT0gXCJJbmNvbWVcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydF92YWx1ZSA9IHNvcnRlZF9ic1swXS5jcmVkaXRfbXV0YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfdmFsdWUgPSBzb3J0ZWRfYnNbaV0uY3JlZGl0X211dGF0aW9uXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjY291bnRfY2F0ZWdvcnkgPT0gXCJFeHBlbnNlXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uZGViaXRfbXV0YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRfdmFsdWUgPSBzb3J0ZWRfYnNbaV0uZGViaXRfbXV0YXRpb25cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkICdhY2NvdW50X2NhdGVnb3J5JyBwYXJhbWV0ZXIuIFVzZSBvbmUgb2YgWydCYWxhbmNlJywgJ0luY29tZScsICdFeHBlbnNlJ10uXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnBlcmlvZC5zdGFydF9tb250aCA9IHNvcnRlZF9ic1swXS5tb250aFxuICAgICAgICAgICAgdGhpcy5wZXJpb2Quc3RhcnRfeWVhciA9IHNvcnRlZF9ic1swXS55ZWFyXG4gICAgICAgICAgICB0aGlzLnBlcmlvZC5jdXJyZW50X3llYXIgPSBzb3J0ZWRfYnNbMF0ubW9udGhcbiAgICAgICAgICAgIHRoaXMucGVyaW9kLmN1cnJlbnRfeWVhciA9IHNvcnRlZF9ic1tpXS55ZWFyXG4gICAgICAgIH0sXG4gICAgICAgIHNldFVwQ2FyZERldGFpbHMoYWNjb3VudF9jYXRlZ29yeSl7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "df9c4b6896bfbf5e"; }
/******/ }();
/******/ 
/******/ }
);