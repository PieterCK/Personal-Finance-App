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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      headers: [{\n        title: 'Transaction',\n        align: 'start',\n        sortable: false,\n        key: 'info'\n      }, {\n        title: 'Amount (IDR)',\n        align: 'start',\n        sortable: true,\n        key: 'amount'\n      }, {\n        title: 'Date',\n        align: 'start',\n        sortable: true,\n        key: 'date'\n      }, {\n        title: 'Entry',\n        align: 'start',\n        sortable: true,\n        key: 'entry'\n      }, {\n        title: 'Type',\n        align: 'start',\n        sortable: true,\n        key: 'type'\n      }, {\n        title: 'Detail',\n        align: 'start',\n        sortable: false,\n        key: 'details'\n      }, {\n        title: 'Category',\n        align: 'start',\n        sortable: true,\n        key: \"category\"\n      }],\n      items: [{\n        amount: 10000,\n        date: \"17/08\",\n        entry: \"DEBIT\",\n        info: 'TRANSFER REKENING',\n        details: 'Beli Makan'\n      }],\n      categories: [{\n        key: \"food\",\n        name: \"Food\"\n      }, {\n        key: \"entertainment\",\n        name: \"Entertainment\"\n      }, {\n        key: \"transport\",\n        name: \"Transport\"\n      }]\n    };\n  },\n  props: {\n    cached_items: null\n  },\n  methods: {\n    getCachedTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}transactions`;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(getTransactionsUrl).then(response => {\n        // Process the response data\n        let data = response.data;\n        console.log(data);\n        return data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7O0FBb0RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/Y2Q2MCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgPHYtdGFibGUgXG4gICAgICAgIGRlbnNpdHk9XCJjb21wYWN0XCIgXG4gICAgICAgIGNsYXNzPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCJcbiAgICAgID5cbiAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJ0ZXh0LW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICAgIDx0aCB2LWZvcj1cImhlYWRlciBpbiBoZWFkZXJzXCIgOmtleT1cImhlYWRlci5rZXlcIiBzY29wZT1cImNvbFwiIGNsYXNzPVwicHgtNiBweS0zIGZvbnQtbWVkaXVtIHRleHQtYmxhY2stOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGhlYWRlci50aXRsZSB9fVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keSA+XG4gICAgICAgICAgICAgIDx0ciB2LWZvcj1cIml0ZW0gaW4gY2FjaGVkX2l0ZW1zXCIgOmtleT1cIml0ZW0ua2V5XCIgY2xhc3M9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC0yIGZvbnQtc21hbGwgdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmluZm8gfX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC0xIHB5LTEgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFJwLnt7IGl0ZW0uYW1vdW50IH19XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkICBzY29wZT1cInJvd1wiIGNsYXNzPVwicHgtMSBweS0xIGZvbnQtc21hbGwgdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmRhdGUgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC0xIHB5LTEgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZW50cnkgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC0xIHB5LTEgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uaW5mbyB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTEgcHktMSBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS13cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGV0YWlscyB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjEwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgZGF0YS10ZS1zZWxlY3QtaW5pdFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiY2F0ZWdvcnkua2V5XCI+e3tjYXRlZ29yeS5uYW1lfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPHYtcGFnaW5hdGlvblxuICAgICAgICAgIHYtbW9kZWw9XCJwYWdlXCJcbiAgICAgICAgICA6bGVuZ3RoPVwiNFwiXG4gICAgICAgICAgcm91bmRlZD1cImNpcmNsZVwiXG4gICAgICAgID48L3YtcGFnaW5hdGlvbj5cbiAgICAgIDwvdi10YWJsZT5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgXG4gICAgICA8c2NyaXB0PlxuICAgICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbiAgICAgIGltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG4gICAgICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVlVFX0FQUF9CQVNFX1VSTDtcbiAgICBcbiAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSAoKSB7IFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJzOltcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOidUcmFuc2FjdGlvbicsXG4gICAgICAgICAgICAgICAgYWxpZ246J3N0YXJ0JyxcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICBrZXk6J2luZm8nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHt0aXRsZTonQW1vdW50IChJRFIpJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OidhbW91bnQnfSxcbiAgICAgICAgICAgICAge3RpdGxlOidEYXRlJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OidkYXRlJ30sXG4gICAgICAgICAgICAgIHt0aXRsZTonRW50cnknLCBhbGlnbjonc3RhcnQnLCBzb3J0YWJsZTp0cnVlLCBrZXk6J2VudHJ5J30sXG4gICAgICAgICAgICAgIHt0aXRsZTonVHlwZScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTondHlwZSd9LFxuICAgICAgICAgICAgICB7dGl0bGU6J0RldGFpbCcsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOmZhbHNlLCBrZXk6J2RldGFpbHMnfSxcbiAgICAgICAgICAgICAge3RpdGxlOidDYXRlZ29yeScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTpcImNhdGVnb3J5XCJ9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMDAwMCxcbiAgICAgICAgICAgICAgICBkYXRlOiBcIjE3LzA4XCIsXG4gICAgICAgICAgICAgICAgZW50cnk6IFwiREVCSVRcIixcbiAgICAgICAgICAgICAgICBpbmZvOiAnVFJBTlNGRVIgUkVLRU5JTkcnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdCZWxpIE1ha2FuJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY2F0ZWdvcmllczpbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6XCJmb29kXCIsIFxuICAgICAgICAgICAgICAgIG5hbWU6XCJGb29kXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge2tleTpcImVudGVydGFpbm1lbnRcIiwgbmFtZTpcIkVudGVydGFpbm1lbnRcIn0sXG4gICAgICAgICAgICAgIHtrZXk6XCJ0cmFuc3BvcnRcIiwgbmFtZTpcIlRyYW5zcG9ydFwifVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgY2FjaGVkX2l0ZW1zOm51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgZ2V0Q2FjaGVkVHJhbnNhY3Rpb25zKCl7XG4gICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGVG9rZW4nXSA9IENvb2tpZXMuZ2V0KCdjc3JmdG9rZW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGdldFRyYW5zYWN0aW9uc1VybCA9IGAke2Jhc2VVcmx9dHJhbnNhY3Rpb25zYFxuICAgICAgICAgICAgYXhpb3MuZ2V0KGdldFRyYW5zYWN0aW9uc1VybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IG9jY3Vyc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zY3JpcHQ+XG4gICAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vuetify_lib_components_VPagination_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VPagination/index.mjs */ \"./node_modules/vuetify/lib/components/VPagination/VPagination.mjs\");\n/* harmony import */ var vuetify_lib_components_VTable_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTable/index.mjs */ \"./node_modules/vuetify/lib/components/VTable/VTable.mjs\");\n\nconst _hoisted_1 = {\n  class: \"relative overflow-x-auto\"\n};\nconst _hoisted_2 = {\n  class: \"text-m text-gray-900 dark:text-gray-400\"\n};\nconst _hoisted_3 = {\n  scope: \"row\",\n  class: \"px-2 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_4 = {\n  scope: \"row\",\n  class: \"px-1 py-1 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_5 = {\n  scope: \"row\",\n  class: \"px-1 py-1 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_6 = {\n  scope: \"row\",\n  class: \"px-1 py-1 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_7 = {\n  scope: \"row\",\n  class: \"px-1 py-1 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_8 = {\n  scope: \"row\",\n  class: \"px-1 py-1 font-small text-gray-900 whitespace-wrap dark:text-white\"\n};\nconst _hoisted_9 = {\n  width: \"100px\"\n};\nconst _hoisted_10 = {\n  \"data-te-select-init\": \"\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n                                                                    \n                                                          \n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vuetify_lib_components_VTable_index_mjs__WEBPACK_IMPORTED_MODULE_1__.VTable, {\n    density: \"compact\",\n    class: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"thead\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.headers, header => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"th\", {\n        key: header.key,\n        scope: \"col\",\n        class: \"px-6 py-3 font-medium text-black-900 whitespace-nowrap dark:text-white\"\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(header.title), 1 /* TEXT */);\n    }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.cached_items, item => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"tr\", {\n        key: item.key,\n        class: \"bg-white dark:bg-gray-800\"\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.info), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_4, \" Rp.\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.entry), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.info), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.details), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"select\", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.categories, category => {\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"option\", {\n          key: category.key\n        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 1 /* TEXT */);\n      }), 128 /* KEYED_FRAGMENT */))])])]);\n    }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vuetify_lib_components_VPagination_index_mjs__WEBPACK_IMPORTED_MODULE_2__.VPagination, {\n      modelValue: _ctx.page,\n      \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => _ctx.page = $event),\n      length: 4,\n      rounded: \"circle\"\n    }, null, 8 /* PROPS */, [\"modelValue\"])]),\n    _: 1 /* STABLE */\n  })]);\n}\n\n/* Vuetify */\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay1wbHVnaW4tdnVldGlmeS9kaXN0L3NjcmlwdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzViZWExNjIiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFLQTtBQUFBOztBQVNBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7O0FBQ0E7QUFBQTs7OztBQWpDQTtBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvVmlld1RyYW5zYWN0aW9uc0xhYmVsaW5nL1RyYW5zYWN0aW9uc1RhYmxlLnZ1ZT9jZDYwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICA8di10YWJsZSBcbiAgICAgICAgZGVuc2l0eT1cImNvbXBhY3RcIiBcbiAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIlxuICAgICAgPlxuICAgICAgICAgIDx0aGVhZCBjbGFzcz1cInRleHQtbSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICA8dHIgPlxuICAgICAgICAgICAgICAgICAgPHRoIHYtZm9yPVwiaGVhZGVyIGluIGhlYWRlcnNcIiA6a2V5PVwiaGVhZGVyLmtleVwiIHNjb3BlPVwiY29sXCIgY2xhc3M9XCJweC02IHB5LTMgZm9udC1tZWRpdW0gdGV4dC1ibGFjay05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaGVhZGVyLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5ID5cbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiaXRlbSBpbiBjYWNoZWRfaXRlbXNcIiA6a2V5PVwiaXRlbS5rZXlcIiBjbGFzcz1cImJnLXdoaXRlIGRhcms6YmctZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTIgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uaW5mbyB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTEgcHktMSBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUnAue3sgaXRlbS5hbW91bnQgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC0xIHB5LTEgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTEgcHktMSBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5lbnRyeSB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTEgcHktMSBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5pbmZvIH19XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkICBzY29wZT1cInJvd1wiIGNsYXNzPVwicHgtMSBweS0xIGZvbnQtc21hbGwgdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLXdyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5kZXRhaWxzIH19XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHdpZHRoPVwiMTAwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBkYXRhLXRlLXNlbGVjdC1pbml0XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiIDprZXk9XCJjYXRlZ29yeS5rZXlcIj57e2NhdGVnb3J5Lm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8di1wYWdpbmF0aW9uXG4gICAgICAgICAgdi1tb2RlbD1cInBhZ2VcIlxuICAgICAgICAgIDpsZW5ndGg9XCI0XCJcbiAgICAgICAgICByb3VuZGVkPVwiY2lyY2xlXCJcbiAgICAgICAgPjwvdi1wYWdpbmF0aW9uPlxuICAgICAgPC92LXRhYmxlPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICBcbiAgICAgIDxzY3JpcHQ+XG4gICAgICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuICAgICAgaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WVUVfQVBQX0JBU0VfVVJMO1xuICAgIFxuICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhICgpIHsgXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcnM6W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6J1RyYW5zYWN0aW9uJyxcbiAgICAgICAgICAgICAgICBhbGlnbjonc3RhcnQnLFxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOmZhbHNlLFxuICAgICAgICAgICAgICAgIGtleTonaW5mbydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge3RpdGxlOidBbW91bnQgKElEUiknLCBhbGlnbjonc3RhcnQnLCBzb3J0YWJsZTp0cnVlLCBrZXk6J2Ftb3VudCd9LFxuICAgICAgICAgICAgICB7dGl0bGU6J0RhdGUnLCBhbGlnbjonc3RhcnQnLCBzb3J0YWJsZTp0cnVlLCBrZXk6J2RhdGUnfSxcbiAgICAgICAgICAgICAge3RpdGxlOidFbnRyeScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTonZW50cnknfSxcbiAgICAgICAgICAgICAge3RpdGxlOidUeXBlJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5Oid0eXBlJ30sXG4gICAgICAgICAgICAgIHt0aXRsZTonRGV0YWlsJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6ZmFsc2UsIGtleTonZGV0YWlscyd9LFxuICAgICAgICAgICAgICB7dGl0bGU6J0NhdGVnb3J5JywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OlwiY2F0ZWdvcnlcIn1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpdGVtczpbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEwMDAwLFxuICAgICAgICAgICAgICAgIGRhdGU6IFwiMTcvMDhcIixcbiAgICAgICAgICAgICAgICBlbnRyeTogXCJERUJJVFwiLFxuICAgICAgICAgICAgICAgIGluZm86ICdUUkFOU0ZFUiBSRUtFTklORycsXG4gICAgICAgICAgICAgICAgZGV0YWlsczogJ0JlbGkgTWFrYW4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBjYXRlZ29yaWVzOltcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTpcImZvb2RcIiwgXG4gICAgICAgICAgICAgICAgbmFtZTpcIkZvb2RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7a2V5OlwiZW50ZXJ0YWlubWVudFwiLCBuYW1lOlwiRW50ZXJ0YWlubWVudFwifSxcbiAgICAgICAgICAgICAge2tleTpcInRyYW5zcG9ydFwiLCBuYW1lOlwiVHJhbnNwb3J0XCJ9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBjYWNoZWRfaXRlbXM6bnVsbFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICBnZXRDYWNoZWRUcmFuc2FjdGlvbnMoKXtcbiAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkZUb2tlbiddID0gQ29va2llcy5nZXQoJ2NzcmZ0b2tlbicpO1xuICAgICAgICAgICAgY29uc3QgZ2V0VHJhbnNhY3Rpb25zVXJsID0gYCR7YmFzZVVybH10cmFuc2FjdGlvbnNgXG4gICAgICAgICAgICBheGlvcy5nZXQoZ2V0VHJhbnNhY3Rpb25zVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgb2NjdXJzXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L3NjcmlwdD5cbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d835c34a3da979db"; }
/******/ }();
/******/ 
/******/ }
);