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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsTable.vue */ \"./src/components/ViewTransactionsLabeling/TransactionsTable.vue\");\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      cached_items: null,\n      account_types\n    };\n  },\n  components: {\n    TransactionsTable: _TransactionsTable_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  methods: {\n    readServerData() {\n      let input_value = this.$refs.server_data.value;\n      if (input_value) {\n        const cached_items = JSON.parse(input_value);\n        this.cached_items = cached_items;\n        this.$refs.server_data.value = null;\n      }\n    },\n    getCachedTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}transactions`;\n      axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(getTransactionsUrl).then(response => {\n        // Process the response data\n        let data = response.data;\n        console.log(data);\n        return data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    }\n  },\n  mounted() {\n    this.$refs.server_data ? this.readServerData() : null;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcvVmlld1RyYW5zYWN0aW9uc0xhYmVsaW5nLnZ1ZT9iYmM3Il0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WVUVfQVBQX0JBU0VfVVJMO1xuaW1wb3J0IFRyYW5zYWN0aW9uc1RhYmxlIGZyb20gJy4vVHJhbnNhY3Rpb25zVGFibGUudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgXG4gIGRhdGEoKXtcbiAgICByZXR1cm57XG4gICAgICBjYWNoZWRfaXRlbXM6bnVsbCxcbiAgICAgIGFjY291bnRfdHlwZXNcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6e1xuICAgIFRyYW5zYWN0aW9uc1RhYmxlXG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIHJlYWRTZXJ2ZXJEYXRhKCl7XG4gICAgICBsZXQgaW5wdXRfdmFsdWUgPSB0aGlzLiRyZWZzLnNlcnZlcl9kYXRhLnZhbHVlXG4gICAgICBpZiAoaW5wdXRfdmFsdWUpe1xuICAgICAgICBjb25zdCBjYWNoZWRfaXRlbXMgPSBKU09OLnBhcnNlKGlucHV0X3ZhbHVlKVxuICAgICAgICB0aGlzLmNhY2hlZF9pdGVtcyA9IGNhY2hlZF9pdGVtc1xuICAgICAgICB0aGlzLiRyZWZzLnNlcnZlcl9kYXRhLnZhbHVlID0gbnVsbFxuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Q2FjaGVkVHJhbnNhY3Rpb25zKCl7XG4gICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGVG9rZW4nXSA9IENvb2tpZXMuZ2V0KCdjc3JmdG9rZW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGdldFRyYW5zYWN0aW9uc1VybCA9IGAke2Jhc2VVcmx9dHJhbnNhY3Rpb25zYFxuICAgICAgICAgICAgYXhpb3MuZ2V0KGdldFRyYW5zYWN0aW9uc1VybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IG9jY3Vyc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICB9LFxuICBtb3VudGVkKCl7XG4gICAgICB0aGlzLiRyZWZzLnNlcnZlcl9kYXRhID8gdGhpcy5yZWFkU2VydmVyRGF0YSgpOiBudWxsXG4gIH1cbn1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ecb41f1c0d899122"; }
/******/ }();
/******/ 
/******/ }
);