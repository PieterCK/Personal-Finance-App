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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsTable.vue */ \"./src/components/ViewTransactionsLabeling/TransactionsTable.vue\");\n/* harmony import */ var _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      cached_items: null,\n      account_types: null\n    };\n  },\n  components: {\n    TransactionsTable: (_TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1___default())\n  },\n  methods: {\n    readServerData() {\n      let input_value = this.$refs.server_data.value;\n      console.log(\"input value: \", input_value);\n      if (input_value) {\n        const cached_items = JSON.parse(input_value);\n        console.log(\"cached_items: \", cached_items);\n        this.cached_items = cached_items;\n        this.$refs.server_data.value = null;\n      }\n    },\n    getCachedTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}transactions`;\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(getTransactionsUrl).then(response => {\n        // Process the response data\n        let data = response.data;\n        console.log(data);\n        return data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    }\n  },\n  mounted() {\n    this.$refs.server_data ? this.readServerData() : null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP2JiYzciXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlZVRV9BUFBfQkFTRV9VUkw7XG5pbXBvcnQgVHJhbnNhY3Rpb25zVGFibGUgZnJvbSAnLi9UcmFuc2FjdGlvbnNUYWJsZS52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFxuICBkYXRhKCl7XG4gICAgcmV0dXJue1xuICAgICAgY2FjaGVkX2l0ZW1zOm51bGwsXG4gICAgICBhY2NvdW50X3R5cGVzOm51bGxcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6e1xuICAgIFRyYW5zYWN0aW9uc1RhYmxlXG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIHJlYWRTZXJ2ZXJEYXRhKCl7XG4gICAgICBsZXQgaW5wdXRfdmFsdWUgPSB0aGlzLiRyZWZzLnNlcnZlcl9kYXRhLnZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhcImlucHV0IHZhbHVlOiBcIiwgaW5wdXRfdmFsdWUpXG4gICAgICBpZiAoaW5wdXRfdmFsdWUpe1xuICAgICAgICBjb25zdCBjYWNoZWRfaXRlbXMgPSBKU09OLnBhcnNlKGlucHV0X3ZhbHVlKVxuICAgICAgICBjb25zb2xlLmxvZyhcImNhY2hlZF9pdGVtczogXCIsIGNhY2hlZF9pdGVtcylcbiAgICAgICAgdGhpcy5jYWNoZWRfaXRlbXMgPSBjYWNoZWRfaXRlbXNcbiAgICAgICAgdGhpcy4kcmVmcy5zZXJ2ZXJfZGF0YS52YWx1ZSA9IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldENhY2hlZFRyYW5zYWN0aW9ucygpe1xuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRlRva2VuJ10gPSBDb29raWVzLmdldCgnY3NyZnRva2VuJyk7XG4gICAgICAgICAgICBjb25zdCBnZXRUcmFuc2FjdGlvbnNVcmwgPSBgJHtiYXNlVXJsfXRyYW5zYWN0aW9uc2BcbiAgICAgICAgICAgIGF4aW9zLmdldChnZXRUcmFuc2FjdGlvbnNVcmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyB0aGUgcmVzcG9uc2UgZGF0YVxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhbnkgZXJyb3IgdGhhdCBvY2N1cnNcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpe1xuICAgICAgdGhpcy4kcmVmcy5zZXJ2ZXJfZGF0YSA/IHRoaXMucmVhZFNlcnZlckRhdGEoKTogbnVsbFxuICB9XG59XG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js\n");

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
/******/ 	__webpack_require__.h = function() { return "814cfb0b07aa64b9"; }
/******/ }();
/******/ 
/******/ }
);