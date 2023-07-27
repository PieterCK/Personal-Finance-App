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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      headers: [{\n        title: 'Transaction',\n        align: 'start',\n        sortable: false,\n        key: 'info'\n      }, {\n        title: 'Amount (IDR)',\n        align: 'start',\n        sortable: true,\n        key: 'amount'\n      }, {\n        title: 'Date',\n        align: 'start',\n        sortable: true,\n        key: 'date'\n      }, {\n        title: 'Entry',\n        align: 'start',\n        sortable: true,\n        key: 'entry'\n      }, {\n        title: 'Type',\n        align: 'start',\n        sortable: true,\n        key: 'type'\n      }, {\n        title: 'Detail',\n        align: 'start',\n        sortable: false,\n        key: 'details'\n      }, {\n        title: 'Category',\n        align: 'start',\n        sortable: true,\n        key: \"category\"\n      }],\n      items: [{\n        amount: 10000,\n        date: \"17/08\",\n        entry: \"DEBIT\",\n        info: 'TRANSFER REKENING',\n        details: 'Beli Makan'\n      }]\n    };\n  },\n  props: {},\n  methods: {\n    getCachedTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}transactions`;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(getTransactionsUrl).then(response => {\n        // Process the response data\n        let data = response.data;\n        console.log(data);\n        return data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7O0FBbURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/Y2Q2MCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgPHYtdGFibGUgXG4gICAgICAgIGRlbnNpdHk9XCJjb21wYWN0XCIgXG4gICAgICAgIGNsYXNzPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCJcbiAgICAgID5cbiAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgICAgICA8dGggdi1mb3I9XCJoZWFkZXIgaW4gaGVhZGVyc1wiIDprZXk9XCJoZWFkZXIua2V5XCIgc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktMyBmb250LW1lZGl1bSB0ZXh0LWJsYWNrLTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBoZWFkZXIudGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHkgPlxuICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cIml0ZW0ua2V5XCIgY2xhc3M9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC02IHB5LTQgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uaW5mbyB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTYgcHktNCBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUnAue3sgaXRlbS5hbW91bnQgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC02IHB5LTQgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTYgcHktNCBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5lbnRyeSB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTYgcHktNCBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5pbmZvIH19XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkICBzY29wZT1cInJvd1wiIGNsYXNzPVwicHgtNiBweS00IGZvbnQtc21hbGwgdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmRldGFpbHMgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxMDBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiWydDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdUZXhhcycsICdXeW9taW5nJ11cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzb2xvLWZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgID48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgPC92LXRhYmxlPlxuICAgICAgPFNlcnZlclNpZGVQcm9wc1xuICAgICAgICBAc3NwPVwiKG1zZykgPT4gc3NwID0gbXNnXCIgXG4gICAgICAvPlxuICAgICAge3tzc3B9fVxuICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgXG4gICAgICA8c2NyaXB0PlxuICAgICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbiAgICAgIGltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG4gICAgICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVlVFX0FQUF9CQVNFX1VSTDtcbiAgICBcbiAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSAoKSB7IFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJzOltcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOidUcmFuc2FjdGlvbicsXG4gICAgICAgICAgICAgICAgYWxpZ246J3N0YXJ0JyxcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICBrZXk6J2luZm8nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHt0aXRsZTonQW1vdW50IChJRFIpJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OidhbW91bnQnfSxcbiAgICAgICAgICAgICAge3RpdGxlOidEYXRlJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OidkYXRlJ30sXG4gICAgICAgICAgICAgIHt0aXRsZTonRW50cnknLCBhbGlnbjonc3RhcnQnLCBzb3J0YWJsZTp0cnVlLCBrZXk6J2VudHJ5J30sXG4gICAgICAgICAgICAgIHt0aXRsZTonVHlwZScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTondHlwZSd9LFxuICAgICAgICAgICAgICB7dGl0bGU6J0RldGFpbCcsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOmZhbHNlLCBrZXk6J2RldGFpbHMnfSxcbiAgICAgICAgICAgICAge3RpdGxlOidDYXRlZ29yeScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTpcImNhdGVnb3J5XCJ9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMDAwMCxcbiAgICAgICAgICAgICAgICBkYXRlOiBcIjE3LzA4XCIsXG4gICAgICAgICAgICAgICAgZW50cnk6IFwiREVCSVRcIixcbiAgICAgICAgICAgICAgICBpbmZvOiAnVFJBTlNGRVIgUkVLRU5JTkcnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdCZWxpIE1ha2FuJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6e1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgIGdldENhY2hlZFRyYW5zYWN0aW9ucygpe1xuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRlRva2VuJ10gPSBDb29raWVzLmdldCgnY3NyZnRva2VuJyk7XG4gICAgICAgICAgICBjb25zdCBnZXRUcmFuc2FjdGlvbnNVcmwgPSBgJHtiYXNlVXJsfXRyYW5zYWN0aW9uc2BcbiAgICAgICAgICAgIGF4aW9zLmdldChnZXRUcmFuc2FjdGlvbnNVcmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBvY2N1cnNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc2NyaXB0PlxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var vuetify_lib_components_VSelect_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VSelect/index.mjs */ \"./node_modules/vuetify/lib/components/VSelect/VSelect.mjs\");\n/* harmony import */ var vuetify_lib_components_VTable_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VTable/index.mjs */ \"./node_modules/vuetify/lib/components/VTable/VTable.mjs\");\n\nconst _hoisted_1 = {\n  class: \"relative overflow-x-auto\"\n};\nconst _hoisted_2 = {\n  class: \"text-xs text-gray-900 dark:text-gray-400\"\n};\nconst _hoisted_3 = {\n  scope: \"row\",\n  class: \"px-6 py-4 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_4 = {\n  scope: \"row\",\n  class: \"px-6 py-4 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_5 = {\n  scope: \"row\",\n  class: \"px-6 py-4 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_6 = {\n  scope: \"row\",\n  class: \"px-6 py-4 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_7 = {\n  scope: \"row\",\n  class: \"px-6 py-4 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_8 = {\n  scope: \"row\",\n  class: \"px-6 py-4 font-small text-gray-900 whitespace-nowrap dark:text-white\"\n};\nconst _hoisted_9 = {\n  width: \"100px\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n                                                            \n                                                          \n  const _component_ServerSideProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ServerSideProps\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vuetify_lib_components_VTable_index_mjs__WEBPACK_IMPORTED_MODULE_1__.VTable, {\n    density: \"compact\",\n    class: \"w-full text-sm text-left text-gray-500 dark:text-gray-400\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"thead\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.headers, header => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"th\", {\n        key: header.key,\n        scope: \"col\",\n        class: \"px-6 py-3 font-medium text-black-900 whitespace-nowrap dark:text-white\"\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(header.title), 1 /* TEXT */);\n    }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.items, item => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"tr\", {\n        key: item.key,\n        class: \"bg-white dark:bg-gray-800\"\n      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.info), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_4, \" Rp.\" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.amount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.date), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.entry), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.info), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.details), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vuetify_lib_components_VSelect_index_mjs__WEBPACK_IMPORTED_MODULE_2__.VSelect, {\n        label: \"Select\",\n        items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],\n        variant: \"solo-filled\"\n      })])]);\n    }), 128 /* KEYED_FRAGMENT */))])]),\n\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ServerSideProps, {\n    onSsp: _cache[0] || (_cache[0] = msg => _ctx.ssp = msg)\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.ssp), 1 /* TEXT */)]);\n}\n\n/* Vuetify */\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay1wbHVnaW4tdnVldGlmeS9kaXN0L3NjcmlwdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwLnVzZVswXSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzViZWExNjIiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFLQTtBQUFBOztBQVNBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7OztBQUdBO0FBQUE7Ozs7O0FBaENBO0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTs7Ozs7QUFNQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/Y2Q2MCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIG92ZXJmbG93LXgtYXV0b1wiPlxuICAgICAgPHYtdGFibGUgXG4gICAgICAgIGRlbnNpdHk9XCJjb21wYWN0XCIgXG4gICAgICAgIGNsYXNzPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCJcbiAgICAgID5cbiAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgICAgICA8dGggdi1mb3I9XCJoZWFkZXIgaW4gaGVhZGVyc1wiIDprZXk9XCJoZWFkZXIua2V5XCIgc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktMyBmb250LW1lZGl1bSB0ZXh0LWJsYWNrLTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBoZWFkZXIudGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHkgPlxuICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cIml0ZW0ua2V5XCIgY2xhc3M9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwXCI+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC02IHB5LTQgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uaW5mbyB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTYgcHktNCBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUnAue3sgaXRlbS5hbW91bnQgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC02IHB5LTQgZm9udC1zbWFsbCB0ZXh0LWdyYXktOTAwIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTYgcHktNCBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5lbnRyeSB9fVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTYgcHktNCBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5pbmZvIH19XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkICBzY29wZT1cInJvd1wiIGNsYXNzPVwicHgtNiBweS00IGZvbnQtc21hbGwgdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmRldGFpbHMgfX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgd2lkdGg9XCIxMDBweFwiPlxuICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiWydDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdUZXhhcycsICdXeW9taW5nJ11cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzb2xvLWZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgID48L3Ytc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgPC92LXRhYmxlPlxuICAgICAgPFNlcnZlclNpZGVQcm9wc1xuICAgICAgICBAc3NwPVwiKG1zZykgPT4gc3NwID0gbXNnXCIgXG4gICAgICAvPlxuICAgICAge3tzc3B9fVxuICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgXG4gICAgICA8c2NyaXB0PlxuICAgICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbiAgICAgIGltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG4gICAgICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVlVFX0FQUF9CQVNFX1VSTDtcbiAgICBcbiAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSAoKSB7IFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXJzOltcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOidUcmFuc2FjdGlvbicsXG4gICAgICAgICAgICAgICAgYWxpZ246J3N0YXJ0JyxcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTpmYWxzZSxcbiAgICAgICAgICAgICAgICBrZXk6J2luZm8nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHt0aXRsZTonQW1vdW50IChJRFIpJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OidhbW91bnQnfSxcbiAgICAgICAgICAgICAge3RpdGxlOidEYXRlJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OidkYXRlJ30sXG4gICAgICAgICAgICAgIHt0aXRsZTonRW50cnknLCBhbGlnbjonc3RhcnQnLCBzb3J0YWJsZTp0cnVlLCBrZXk6J2VudHJ5J30sXG4gICAgICAgICAgICAgIHt0aXRsZTonVHlwZScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTondHlwZSd9LFxuICAgICAgICAgICAgICB7dGl0bGU6J0RldGFpbCcsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOmZhbHNlLCBrZXk6J2RldGFpbHMnfSxcbiAgICAgICAgICAgICAge3RpdGxlOidDYXRlZ29yeScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTpcImNhdGVnb3J5XCJ9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaXRlbXM6W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiAxMDAwMCxcbiAgICAgICAgICAgICAgICBkYXRlOiBcIjE3LzA4XCIsXG4gICAgICAgICAgICAgICAgZW50cnk6IFwiREVCSVRcIixcbiAgICAgICAgICAgICAgICBpbmZvOiAnVFJBTlNGRVIgUkVLRU5JTkcnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdCZWxpIE1ha2FuJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6e1xuXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgIGdldENhY2hlZFRyYW5zYWN0aW9ucygpe1xuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRlRva2VuJ10gPSBDb29raWVzLmdldCgnY3NyZnRva2VuJyk7XG4gICAgICAgICAgICBjb25zdCBnZXRUcmFuc2FjdGlvbnNVcmwgPSBgJHtiYXNlVXJsfXRyYW5zYWN0aW9uc2BcbiAgICAgICAgICAgIGF4aW9zLmdldChnZXRUcmFuc2FjdGlvbnNVcmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBvY2N1cnNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc2NyaXB0PlxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a965cd1a585e632b"; }
/******/ }();
/******/ 
/******/ }
);