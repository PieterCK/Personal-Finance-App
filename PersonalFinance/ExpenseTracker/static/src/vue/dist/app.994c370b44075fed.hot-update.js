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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      headers: [{\n        title: 'Transaction',\n        align: 'start',\n        sortable: false,\n        key: 'info'\n      }, {\n        title: 'Amount (IDR)',\n        align: 'start',\n        sortable: true,\n        key: 'amount'\n      }, {\n        title: 'Date',\n        align: 'start',\n        sortable: true,\n        key: 'date'\n      }, {\n        title: 'Entry',\n        align: 'start',\n        sortable: true,\n        key: 'entry'\n      }, {\n        title: 'Type',\n        align: 'start',\n        sortable: true,\n        key: 'type'\n      }, {\n        title: 'Detail',\n        align: 'start',\n        sortable: false,\n        key: 'details'\n      }, {\n        title: 'Category',\n        align: 'start',\n        sortable: true,\n        key: \"category\"\n      }],\n      items: [{\n        amount: 10000,\n        date: \"17/08\",\n        entry: \"DEBIT\",\n        info: 'TRANSFER REKENING',\n        details: 'Beli Makan'\n      }],\n      cached_items: null\n    };\n  },\n  methods: {\n    readServerData() {\n      let input_value = String(this.$refs.server_data.value);\n      console.log(\"input value: \", input_value);\n      const cached_items = JSON.parse(this.$refs.server_data.value);\n      console.log(\"cached items: \", cached_items);\n    },\n    getCachedTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}transactions`;\n      axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(getTransactionsUrl).then(response => {\n        // Process the response data\n        let data = response.data;\n        console.log(data);\n        return data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    }\n  },\n  mounted() {\n    // this.$refs.ssp ? this.$emit('ssp', this.$refs.ssp.innerText): null\n    this.$refs.server_data ? this.readServerData() : console.log(\"no\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9WaWV3VHJhbnNhY3Rpb25zTGFiZWxpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvVmlld1RyYW5zYWN0aW9uc0xhYmVsaW5nL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy52dWU/YmJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVlVFX0FQUF9CQVNFX1VSTDtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgXG4gIGRhdGEoKXtcbiAgICByZXR1cm57XG4gICAgICBoZWFkZXJzOltcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOidUcmFuc2FjdGlvbicsXG4gICAgICAgICAgYWxpZ246J3N0YXJ0JyxcbiAgICAgICAgICBzb3J0YWJsZTpmYWxzZSxcbiAgICAgICAgICBrZXk6J2luZm8nXG4gICAgICAgIH0sXG4gICAgICAgIHt0aXRsZTonQW1vdW50IChJRFIpJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OidhbW91bnQnfSxcbiAgICAgICAge3RpdGxlOidEYXRlJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6dHJ1ZSwga2V5OidkYXRlJ30sXG4gICAgICAgIHt0aXRsZTonRW50cnknLCBhbGlnbjonc3RhcnQnLCBzb3J0YWJsZTp0cnVlLCBrZXk6J2VudHJ5J30sXG4gICAgICAgIHt0aXRsZTonVHlwZScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTondHlwZSd9LFxuICAgICAgICB7dGl0bGU6J0RldGFpbCcsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOmZhbHNlLCBrZXk6J2RldGFpbHMnfSxcbiAgICAgICAge3RpdGxlOidDYXRlZ29yeScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTpcImNhdGVnb3J5XCJ9XG4gICAgICBdLFxuICAgICAgaXRlbXM6W1xuICAgICAgICB7XG4gICAgICAgICAgYW1vdW50OiAxMDAwMCxcbiAgICAgICAgICBkYXRlOiBcIjE3LzA4XCIsXG4gICAgICAgICAgZW50cnk6IFwiREVCSVRcIixcbiAgICAgICAgICBpbmZvOiAnVFJBTlNGRVIgUkVLRU5JTkcnLFxuICAgICAgICAgIGRldGFpbHM6ICdCZWxpIE1ha2FuJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY2FjaGVkX2l0ZW1zOm51bGxcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6e1xuICAgIHJlYWRTZXJ2ZXJEYXRhKCl7XG4gICAgICBsZXQgaW5wdXRfdmFsdWUgPSBTdHJpbmcodGhpcy4kcmVmcy5zZXJ2ZXJfZGF0YS52YWx1ZSlcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5wdXQgdmFsdWU6IFwiLCBpbnB1dF92YWx1ZSlcbiAgICAgIGNvbnN0IGNhY2hlZF9pdGVtcyA9IEpTT04ucGFyc2UodGhpcy4kcmVmcy5zZXJ2ZXJfZGF0YS52YWx1ZSlcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FjaGVkIGl0ZW1zOiBcIiwgY2FjaGVkX2l0ZW1zKVxuICAgIH0sXG4gICAgZ2V0Q2FjaGVkVHJhbnNhY3Rpb25zKCl7XG4gICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGVG9rZW4nXSA9IENvb2tpZXMuZ2V0KCdjc3JmdG9rZW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGdldFRyYW5zYWN0aW9uc1VybCA9IGAke2Jhc2VVcmx9dHJhbnNhY3Rpb25zYFxuICAgICAgICAgICAgYXhpb3MuZ2V0KGdldFRyYW5zYWN0aW9uc1VybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IG9jY3Vyc1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICB9LFxuICBtb3VudGVkKCl7XG4gICAgICAvLyB0aGlzLiRyZWZzLnNzcCA/IHRoaXMuJGVtaXQoJ3NzcCcsIHRoaXMuJHJlZnMuc3NwLmlubmVyVGV4dCk6IG51bGxcbiAgICAgIHRoaXMuJHJlZnMuc2VydmVyX2RhdGEgPyB0aGlzLnJlYWRTZXJ2ZXJEYXRhKCk6IGNvbnNvbGUubG9nKFwibm9cIilcbiAgfVxufVxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e59a40dc78265818"; }
/******/ }();
/******/ 
/******/ }
);