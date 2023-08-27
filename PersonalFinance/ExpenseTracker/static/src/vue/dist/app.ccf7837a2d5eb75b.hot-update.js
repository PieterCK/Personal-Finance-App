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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/utils */ \"./src/components/Utils/utils.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      account_type: null,\n      current_value: 0,\n      start_value: 0,\n      period: {\n        start_month: 0,\n        start_year: 0,\n        current_month: 0,\n        current_year: 0\n      },\n      difference: -1\n    };\n  },\n  props: {\n    balance_summaries: {},\n    transactions: {}\n  },\n  methods: {\n    formatPrice: _Utils_utils__WEBPACK_IMPORTED_MODULE_0__.formatPrice,\n    setUpFigureCard(account_category, bs) {\n      this.account_type = account_category;\n      let sorted_bs = (0,_Utils_utils__WEBPACK_IMPORTED_MODULE_0__.sortBalanceSummaryByDate)((0,vue__WEBPACK_IMPORTED_MODULE_1__.toRaw)(bs), \"asc\");\n      let i = sorted_bs.length - 1;\n      if (account_category == \"Balance\") {\n        this.start_value = sorted_bs[0].starting_balance;\n        this.current_value = sorted_bs[i].ending_balance;\n      } else if (account_category == \"Income\") {\n        this.start_value = sorted_bs[0].credit_mutation;\n        this.current_value = sorted_bs[i].credit_mutation;\n      } else if (account_category == \"Expense\") {\n        this.start_value = sorted_bs[0].debit_mutation;\n        this.current_value = sorted_bs[i].debit_mutation;\n      } else {\n        throw new Error(\"Invalid 'account_category' parameter. Use one of ['Balance', 'Income', 'Expense'].\");\n      }\n      this.setUpCardDetails();\n      this.period.start_month = sorted_bs[0].month;\n      this.period.start_year = sorted_bs[0].year;\n      this.period.current_year = sorted_bs[0].month;\n      this.period.current_year = sorted_bs[i].year;\n    },\n    setUpCardDetails() {\n      let difference = this.start_value - this.current_value;\n      console.log(this.difference);\n      if (this.account_type == \"Income\" || this.account_type == \"Balance\") {\n        this.difference = difference;\n      } else if (this.account_type == \"Expense\") {\n        this.difference = difference > 0 ? difference * -1 : 0;\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdEYXNoYm9hcmQvRmlndXJlQ2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvVmlld0Rhc2hib2FyZC9GaWd1cmVDYXJkLnZ1ZT84YTdmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1heC13LXNtIHAtMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IHNtOnAtOCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cIm1iLTQgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTgwMFwiPnt7YWNjb3VudF90eXBlfX08L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1iYXNlbGluZSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPnt7Zm9ybWF0UHJpY2UodGhpcy5jdXJyZW50X3ZhbHVlKX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsb3ctcm9vdFwiPlxuICAgICAgICAgICAgPHVsIHJvbGU9XCJsaXN0XCIgY2xhc3M9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgZGFyazpkaXZpZGUtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJweS0zIHNtOnB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTBcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JlZW4tNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzUgZGFyazp0ZXh0LWdyYXktNDAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIwLjc1ZW1cIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBkPVwiTTM4NCAxNjBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJINTQ0YzE3LjcgMCAzMiAxNC4zIDMyIDMyVjI4OGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMlYyMDUuM0wzNDIuNiAzNzQuNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBMMTkyIDI2OS4zIDU0LjYgNDA2LjZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zbDE2MC0xNjBjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBMMzIwIDMwNi43IDQ2Ni43IDE2MEgzODR6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiIzAwMDAwMFwiIGNsYXNzPVwiYmkgYmktZGFzaC1sZ1wiPlxuICAgIDxwYXRoIGQ9XCJNMCA4YTEgMSAwIDAgMSAxLTFoMTRhMSAxIDAgMSAxIDAgMkgxYTEgMSAwIDAgMS0xLTF6XCIvPlxuICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZGQzMTMxXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9XCIjZGQzMTMxXCIgc3Ryb2tlLXdpZHRoPVwiMC4wMDAyNDAwMDAwMDAwMDAwMDAwM1wiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNMjEsMTFhMSwxLDAsMCwwLTEsMXYyLjU5bC02LjI5LTYuM2ExLDEsMCwwLDAtMS40MiwwTDksMTEuNTksMy43MSw2LjI5QTEsMSwwLDAsMCwyLjI5LDcuNzFsNiw2YTEsMSwwLDAsMCwxLjQyLDBMMTMsMTAuNDEsMTguNTksMTZIMTZhMSwxLDAsMCwwLDAsMmg1YTEsMSwwLDAsMCwuMzgtLjA4LDEsMSwwLDAsMCwuNTQtLjU0QTEsMSwwLDAsMCwyMiwxN1YxMkExLDEsMCwwLDAsMjEsMTFaXCI+PC9wYXRoPjwvZz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdHJ1bmNhdGUgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IFBlcmlvZDoge3sgcGVyaW9kLnN0YXJ0X21vbnRoIH19IC8ge3sgcGVyaW9kLnN0YXJ0X3llYXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2Zvcm1hdFByaWNlKHRoaXMuY3VycmVudF92YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj4gICBcbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vVXRpbHMvdXRpbHMnO1xuICBpbXBvcnQgeyBzb3J0QmFsYW5jZVN1bW1hcnlCeURhdGUgfSBmcm9tICcuLi9VdGlscy91dGlscyc7XG4gIGltcG9ydCB7dG9SYXd9IGZyb20gJ3Z1ZSdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgYWNjb3VudF90eXBlOm51bGwsXG4gICAgICAgICAgICBjdXJyZW50X3ZhbHVlOjAsXG4gICAgICAgICAgICBzdGFydF92YWx1ZTowLFxuICAgICAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRfbW9udGg6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnRfeWVhcjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50X21vbnRoOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRfeWVhcjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpZmZlcmVuY2U6IC0xXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOntcbiAgICAgICAgYmFsYW5jZV9zdW1tYXJpZXM6e30sXG4gICAgICAgIHRyYW5zYWN0aW9uczp7fVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIGZvcm1hdFByaWNlLFxuICAgICAgICBzZXRVcEZpZ3VyZUNhcmQoYWNjb3VudF9jYXRlZ29yeSwgYnMpe1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50X3R5cGUgPSBhY2NvdW50X2NhdGVnb3J5XG4gICAgICAgICAgICBsZXQgc29ydGVkX2JzID0gc29ydEJhbGFuY2VTdW1tYXJ5QnlEYXRlKHRvUmF3KGJzKSwgXCJhc2NcIilcbiAgICAgICAgICAgIGxldCBpID0gc29ydGVkX2JzLmxlbmd0aCAtMVxuICAgICAgICAgICAgaWYgKGFjY291bnRfY2F0ZWdvcnkgPT0gXCJCYWxhbmNlXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uc3RhcnRpbmdfYmFsYW5jZVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSA9IHNvcnRlZF9ic1tpXS5lbmRpbmdfYmFsYW5jZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY2NvdW50X2NhdGVnb3J5ID09IFwiSW5jb21lXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uY3JlZGl0X211dGF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gc29ydGVkX2JzW2ldLmNyZWRpdF9tdXRhdGlvblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY2NvdW50X2NhdGVnb3J5ID09IFwiRXhwZW5zZVwiKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0X3ZhbHVlID0gc29ydGVkX2JzWzBdLmRlYml0X211dGF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gc29ydGVkX2JzW2ldLmRlYml0X211dGF0aW9uXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCAnYWNjb3VudF9jYXRlZ29yeScgcGFyYW1ldGVyLiBVc2Ugb25lIG9mIFsnQmFsYW5jZScsICdJbmNvbWUnLCAnRXhwZW5zZSddLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0VXBDYXJkRGV0YWlscygpXG4gICAgICAgICAgICB0aGlzLnBlcmlvZC5zdGFydF9tb250aCA9IHNvcnRlZF9ic1swXS5tb250aFxuICAgICAgICAgICAgdGhpcy5wZXJpb2Quc3RhcnRfeWVhciA9IHNvcnRlZF9ic1swXS55ZWFyXG4gICAgICAgICAgICB0aGlzLnBlcmlvZC5jdXJyZW50X3llYXIgPSBzb3J0ZWRfYnNbMF0ubW9udGhcbiAgICAgICAgICAgIHRoaXMucGVyaW9kLmN1cnJlbnRfeWVhciA9IHNvcnRlZF9ic1tpXS55ZWFyXG4gICAgICAgIH0sXG4gICAgICAgIHNldFVwQ2FyZERldGFpbHMoKXtcbiAgICAgICAgICAgIGxldCBkaWZmZXJlbmNlID0gdGhpcy5zdGFydF92YWx1ZSAtIHRoaXMuY3VycmVudF92YWx1ZVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kaWZmZXJlbmNlKVxuICAgICAgICAgICAgaWYgKHRoaXMuYWNjb3VudF90eXBlID09IFwiSW5jb21lXCIgfHx0aGlzLmFjY291bnRfdHlwZSA9PSBcIkJhbGFuY2VcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZSBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NvdW50X3R5cGUgPT0gXCJFeHBlbnNlXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IChkaWZmZXJlbmNlID4gMCkgPyAoZGlmZmVyZW5jZSAqIC0xKTogMFxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700\"\n};\nconst _hoisted_2 = {\n  class: \"mb-4 text-xl font-medium text-gray-800 dark:text-gray-800\"\n};\nconst _hoisted_3 = {\n  class: \"flex items-baseline text-gray-900 dark:text-white\"\n};\nconst _hoisted_4 = {\n  class: \"text-3xl font-semibold\"\n};\nconst _hoisted_5 = {\n  class: \"flow-root\"\n};\nconst _hoisted_6 = {\n  role: \"list\",\n  class: \"divide-y divide-gray-200 dark:divide-gray-700\"\n};\nconst _hoisted_7 = {\n  class: \"py-3 sm:py-4\"\n};\nconst _hoisted_8 = {\n  class: \"flex items-center space-x-4\"\n};\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div class=\\\"flex-shrink-0\\\"><svg class=\\\"text-green-500 transition duration-75 dark:text-gray-400\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"currentColor\\\" height=\\\"0.75em\\\" viewBox=\\\"0 0 576 512\\\"><path d=\\\"M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z\\\"></path></svg><svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"800px\\\" height=\\\"800px\\\" viewBox=\\\"0 0 16 16\\\" fill=\\\"#000000\\\" class=\\\"bi bi-dash-lg\\\"><path d=\\\"M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z\\\"></path></svg> <svg fill=\\\"#dd3131\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" stroke=\\\"#dd3131\\\" stroke-width=\\\"0.00024000000000000003\\\"><g id=\\\"SVGRepo_bgCarrier\\\" stroke-width=\\\"0\\\"></g><g id=\\\"SVGRepo_tracerCarrier\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\"></g><g id=\\\"SVGRepo_iconCarrier\\\"><path d=\\\"M21,11a1,1,0,0,0-1,1v2.59l-6.29-6.3a1,1,0,0,0-1.42,0L9,11.59,3.71,6.29A1,1,0,0,0,2.29,7.71l6,6a1,1,0,0,0,1.42,0L13,10.41,18.59,16H16a1,1,0,0,0,0,2h5a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,17V12A1,1,0,0,0,21,11Z\\\"></path></g></svg></div>\", 1);\nconst _hoisted_10 = {\n  class: \"flex-1 min-w-0\"\n};\nconst _hoisted_11 = {\n  class: \"text-sm font-medium text-gray-900 truncate dark:text-white\"\n};\nconst _hoisted_12 = {\n  class: \"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h5\", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.account_type), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(this.current_value)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", _hoisted_11, \" Start Period: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.period.start_month) + \" / \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.period.start_year), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(this.current_value)), 1 /* TEXT */)])])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay1wbHVnaW4tdnVldGlmeS9kaXN0L3NjcmlwdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdEYXNoYm9hcmQvRmlndXJlQ2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWM0MmQxZjgiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBRUE7QUFBQTs7QUFDQTtBQUFBOzs7QUFDQTtBQUFBOztBQUNBO0FBQUE7OztBQVdBO0FBQUE7O0FBQ0E7QUFBQTs7QUFJQTtBQUFBOztBQXhCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvVmlld0Rhc2hib2FyZC9GaWd1cmVDYXJkLnZ1ZT84YTdmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1heC13LXNtIHAtMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgc2hhZG93IHNtOnAtOCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgIDxoNSBjbGFzcz1cIm1iLTQgdGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTgwMFwiPnt7YWNjb3VudF90eXBlfX08L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1iYXNlbGluZSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPnt7Zm9ybWF0UHJpY2UodGhpcy5jdXJyZW50X3ZhbHVlKX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsb3ctcm9vdFwiPlxuICAgICAgICAgICAgPHVsIHJvbGU9XCJsaXN0XCIgY2xhc3M9XCJkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDAgZGFyazpkaXZpZGUtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJweS0zIHNtOnB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTBcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JlZW4tNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzUgZGFyazp0ZXh0LWdyYXktNDAwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIwLjc1ZW1cIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj48cGF0aCBkPVwiTTM4NCAxNjBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJINTQ0YzE3LjcgMCAzMiAxNC4zIDMyIDMyVjI4OGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMlYyMDUuM0wzNDIuNiAzNzQuNmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBMMTkyIDI2OS4zIDU0LjYgNDA2LjZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zbDE2MC0xNjBjMTIuNS0xMi41IDMyLjgtMTIuNSA0NS4zIDBMMzIwIDMwNi43IDQ2Ni43IDE2MEgzODR6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9XCI4MDBweFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiIzAwMDAwMFwiIGNsYXNzPVwiYmkgYmktZGFzaC1sZ1wiPlxuICAgIDxwYXRoIGQ9XCJNMCA4YTEgMSAwIDAgMSAxLTFoMTRhMSAxIDAgMSAxIDAgMkgxYTEgMSAwIDAgMS0xLTF6XCIvPlxuICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZGQzMTMxXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9XCIjZGQzMTMxXCIgc3Ryb2tlLXdpZHRoPVwiMC4wMDAyNDAwMDAwMDAwMDAwMDAwM1wiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNMjEsMTFhMSwxLDAsMCwwLTEsMXYyLjU5bC02LjI5LTYuM2ExLDEsMCwwLDAtMS40MiwwTDksMTEuNTksMy43MSw2LjI5QTEsMSwwLDAsMCwyLjI5LDcuNzFsNiw2YTEsMSwwLDAsMCwxLjQyLDBMMTMsMTAuNDEsMTguNTksMTZIMTZhMSwxLDAsMCwwLDAsMmg1YTEsMSwwLDAsMCwuMzgtLjA4LDEsMSwwLDAsMCwuNTQtLjU0QTEsMSwwLDAsMCwyMiwxN1YxMkExLDEsMCwwLDAsMjEsMTFaXCI+PC9wYXRoPjwvZz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMSBtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgdHJ1bmNhdGUgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXJ0IFBlcmlvZDoge3sgcGVyaW9kLnN0YXJ0X21vbnRoIH19IC8ge3sgcGVyaW9kLnN0YXJ0X3llYXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2Zvcm1hdFByaWNlKHRoaXMuY3VycmVudF92YWx1ZSl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj4gICBcbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vVXRpbHMvdXRpbHMnO1xuICBpbXBvcnQgeyBzb3J0QmFsYW5jZVN1bW1hcnlCeURhdGUgfSBmcm9tICcuLi9VdGlscy91dGlscyc7XG4gIGltcG9ydCB7dG9SYXd9IGZyb20gJ3Z1ZSdcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgYWNjb3VudF90eXBlOm51bGwsXG4gICAgICAgICAgICBjdXJyZW50X3ZhbHVlOjAsXG4gICAgICAgICAgICBzdGFydF92YWx1ZTowLFxuICAgICAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgICAgICAgc3RhcnRfbW9udGg6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnRfeWVhcjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50X21vbnRoOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRfeWVhcjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpZmZlcmVuY2U6IC0xXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOntcbiAgICAgICAgYmFsYW5jZV9zdW1tYXJpZXM6e30sXG4gICAgICAgIHRyYW5zYWN0aW9uczp7fVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIGZvcm1hdFByaWNlLFxuICAgICAgICBzZXRVcEZpZ3VyZUNhcmQoYWNjb3VudF9jYXRlZ29yeSwgYnMpe1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50X3R5cGUgPSBhY2NvdW50X2NhdGVnb3J5XG4gICAgICAgICAgICBsZXQgc29ydGVkX2JzID0gc29ydEJhbGFuY2VTdW1tYXJ5QnlEYXRlKHRvUmF3KGJzKSwgXCJhc2NcIilcbiAgICAgICAgICAgIGxldCBpID0gc29ydGVkX2JzLmxlbmd0aCAtMVxuICAgICAgICAgICAgaWYgKGFjY291bnRfY2F0ZWdvcnkgPT0gXCJCYWxhbmNlXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uc3RhcnRpbmdfYmFsYW5jZVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudF92YWx1ZSA9IHNvcnRlZF9ic1tpXS5lbmRpbmdfYmFsYW5jZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY2NvdW50X2NhdGVnb3J5ID09IFwiSW5jb21lXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRfdmFsdWUgPSBzb3J0ZWRfYnNbMF0uY3JlZGl0X211dGF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gc29ydGVkX2JzW2ldLmNyZWRpdF9tdXRhdGlvblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhY2NvdW50X2NhdGVnb3J5ID09IFwiRXhwZW5zZVwiKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0X3ZhbHVlID0gc29ydGVkX2JzWzBdLmRlYml0X211dGF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50X3ZhbHVlID0gc29ydGVkX2JzW2ldLmRlYml0X211dGF0aW9uXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCAnYWNjb3VudF9jYXRlZ29yeScgcGFyYW1ldGVyLiBVc2Ugb25lIG9mIFsnQmFsYW5jZScsICdJbmNvbWUnLCAnRXhwZW5zZSddLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0VXBDYXJkRGV0YWlscygpXG4gICAgICAgICAgICB0aGlzLnBlcmlvZC5zdGFydF9tb250aCA9IHNvcnRlZF9ic1swXS5tb250aFxuICAgICAgICAgICAgdGhpcy5wZXJpb2Quc3RhcnRfeWVhciA9IHNvcnRlZF9ic1swXS55ZWFyXG4gICAgICAgICAgICB0aGlzLnBlcmlvZC5jdXJyZW50X3llYXIgPSBzb3J0ZWRfYnNbMF0ubW9udGhcbiAgICAgICAgICAgIHRoaXMucGVyaW9kLmN1cnJlbnRfeWVhciA9IHNvcnRlZF9ic1tpXS55ZWFyXG4gICAgICAgIH0sXG4gICAgICAgIHNldFVwQ2FyZERldGFpbHMoKXtcbiAgICAgICAgICAgIGxldCBkaWZmZXJlbmNlID0gdGhpcy5zdGFydF92YWx1ZSAtIHRoaXMuY3VycmVudF92YWx1ZVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kaWZmZXJlbmNlKVxuICAgICAgICAgICAgaWYgKHRoaXMuYWNjb3VudF90eXBlID09IFwiSW5jb21lXCIgfHx0aGlzLmFjY291bnRfdHlwZSA9PSBcIkJhbGFuY2VcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZSBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY2NvdW50X3R5cGUgPT0gXCJFeHBlbnNlXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGlmZmVyZW5jZSA9IChkaWZmZXJlbmNlID4gMCkgPyAoZGlmZmVyZW5jZSAqIC0xKTogMFxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewDashboard/FigureCard.vue?vue&type=template&id=ac42d1f8\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1e22869b46f5693d"; }
/******/ }();
/******/ 
/******/ }
);