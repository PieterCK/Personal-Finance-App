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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsTable.vue */ \"./src/components/ViewTransactionsLabeling/TransactionsTable.vue\");\n/* harmony import */ var _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      cached_items: null\n    };\n  },\n  components: {\n    TransactionsTable: (_TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1___default())\n  },\n  methods: {\n    readServerData() {\n      let input_value = this.$refs.server_data.value;\n      console.log(\"input value: \", input_value);\n      const cached_items = JSON.parse(input_value);\n      this.cached_items = cached_items;\n      this.$refs.server_data.value = null;\n    },\n    getCachedTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}transactions`;\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(getTransactionsUrl).then(response => {\n        // Process the response data\n        let data = response.data;\n        console.log(data);\n        return data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    }\n  },\n  mounted() {\n    this.$refs.server_data ? this.readServerData() : null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcvVmlld1RyYW5zYWN0aW9uc0xhYmVsaW5nLnZ1ZT9iYmM3Il0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WVUVfQVBQX0JBU0VfVVJMO1xuaW1wb3J0IFRyYW5zYWN0aW9uc1RhYmxlIGZyb20gJy4vVHJhbnNhY3Rpb25zVGFibGUudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgXG4gIGRhdGEoKXtcbiAgICByZXR1cm57XG4gICAgICBjYWNoZWRfaXRlbXM6bnVsbFxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czp7XG4gICAgVHJhbnNhY3Rpb25zVGFibGVcbiAgfSxcbiAgbWV0aG9kczp7XG4gICAgcmVhZFNlcnZlckRhdGEoKXtcbiAgICAgIGxldCBpbnB1dF92YWx1ZSA9IHRoaXMuJHJlZnMuc2VydmVyX2RhdGEudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5wdXQgdmFsdWU6IFwiLCBpbnB1dF92YWx1ZSlcbiAgICAgIGNvbnN0IGNhY2hlZF9pdGVtcyA9IEpTT04ucGFyc2UoaW5wdXRfdmFsdWUpXG4gICAgICB0aGlzLmNhY2hlZF9pdGVtcyA9IGNhY2hlZF9pdGVtc1xuICAgICAgdGhpcy4kcmVmcy5zZXJ2ZXJfZGF0YS52YWx1ZSA9IG51bGxcbiAgICB9LFxuICAgIGdldENhY2hlZFRyYW5zYWN0aW9ucygpe1xuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRlRva2VuJ10gPSBDb29raWVzLmdldCgnY3NyZnRva2VuJyk7XG4gICAgICAgICAgICBjb25zdCBnZXRUcmFuc2FjdGlvbnNVcmwgPSBgJHtiYXNlVXJsfXRyYW5zYWN0aW9uc2BcbiAgICAgICAgICAgIGF4aW9zLmdldChnZXRUcmFuc2FjdGlvbnNVcmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBvY2N1cnNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpe1xuICAgICAgdGhpcy4kcmVmcy5zZXJ2ZXJfZGF0YSA/IHRoaXMucmVhZFNlcnZlckRhdGEoKTogbnVsbFxuICB9XG59XG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./src/components/ViewTransactionsLabeling/TransactionsTable.vue":
/*!***********************************************************************!*\
  !*** ./src/components/ViewTransactionsLabeling/TransactionsTable.vue ***!
  \***********************************************************************/
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "272cb51152b33cce"; }
/******/ }();
/******/ 
/******/ }
);