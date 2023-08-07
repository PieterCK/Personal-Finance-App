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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _YesNoModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../YesNoModal.vue */ \"./src/components/YesNoModal.vue\");\n/* harmony import */ var _TableHeaderCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TableHeaderCard.vue */ \"./src/components/TableHeaderCard.vue\");\n/* harmony import */ var _SnackBar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SnackBar.vue */ \"./src/components/SnackBar.vue\");\n/* harmony import */ var _WarningModal_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../WarningModal.vue */ \"./src/components/WarningModal.vue\");\n\n\n\n\n\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    YesNoModal: _YesNoModal_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    TableHeaderCard: _TableHeaderCard_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    SnackBar: _SnackBar_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    WarningModal: _WarningModal_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data() {\n    return {\n      attrs: {\n        class: 'mb-6',\n        boilerplate: true,\n        elevation: 2\n      },\n      dialog: false,\n      formIsValid: true,\n      headers: [{\n        title: 'Transaction',\n        align: 'start',\n        sortable: false,\n        key: 'info'\n      }, {\n        title: 'Amount (IDR)',\n        align: 'start',\n        sortable: true,\n        key: 'amount'\n      }, {\n        title: 'Date',\n        align: 'start',\n        sortable: true,\n        key: 'date'\n      }, {\n        title: 'Detail',\n        align: 'start',\n        sortable: false,\n        key: 'details'\n      }, {\n        title: 'Category',\n        align: 'start',\n        sortable: true,\n        key: \"category\"\n      }, {\n        title: 'Status',\n        align: 'start',\n        sortable: true,\n        key: \"status\"\n      }],\n      items: [],\n      categories: [],\n      selectAll: false,\n      yesNoModalObj: {\n        trigger: false,\n        dialog: {\n          title: \"New Transactions\",\n          text: \"Looks like you just uploaded a bankstatement, want to label transactions from that bankstatement?\"\n        }\n      },\n      snackBarObj: {\n        trigger: false,\n        dialog: \"Please select and label transactions first!\"\n      },\n      tableIsLoading: false\n    };\n  },\n  props: {\n    cached_items: null,\n    account_types: null\n  },\n  methods: {\n    getTransaction() {\n      axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('csrftoken');\n      const getTransactionsUrl = `${baseUrl}transactions`;\n      axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(getTransactionsUrl).then(response => {\n        // Process the response data\n        return response.data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    },\n    postTransactions() {\n      axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaults.headers.common['X-CSRFToken'] = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('csrftoken');\n      const CRUDBankstatementAPI = `${baseUrl}CRUDBankstatementAPI`;\n      const formData = new FormData();\n      formData.append('input_value', this.input_values);\n      axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(CRUDBankstatementAPI).then(response => {\n        // Process the response data\n        let data = response.data;\n        console.log(data);\n        return data;\n      }).catch(error => {\n        // Handle any error that occurs\n        console.error(error);\n      });\n    },\n    getCachedTransactions() {\n      this.items = this.cached_items;\n      this.dialog = false;\n    },\n    toggleAllCheckboxes() {\n      this.items.forEach(item => {\n        item.select = this.selectAll;\n      });\n    },\n    formatPrice(value) {\n      let val = (value / 1).toFixed(2).replace('.', ',');\n      return val.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \".\");\n    },\n    processCategorySelect(account_types) {\n      let categories = [{\n        key: null,\n        name: null\n      }];\n      account_types.forEach(category => categories.push({\n        key: category,\n        name: category\n      }));\n      this.categories = categories;\n    },\n    validateForm() {\n      this.tableIsLoading = true;\n      let safeToSubmit = true;\n      let selectedTransactions = [];\n      const NO_ITEM_SELECTED = this.items.filter(item => item.select).length < 1;\n      const NO_ITEM = this.items.length < 1;\n      if (NO_ITEM || NO_ITEM_SELECTED) {\n        this.$refs.errorSnackbar.popSnackBar(\"Please Selecet or Load Transactions First!\");\n        this.tableIsLoading = false;\n      }\n      this.items.forEach(item => {\n        if (item.select) {\n          selectedTransactions.push(item);\n          item.error = !item.account_type;\n          safeToSubmit = item.account_type;\n        }\n      });\n      if (!safeToSubmit) {\n        this.$refs.errorSnackbar.popSnackBar(\"Please Complete Labeling Your Transactions\");\n        this.tableIsLoading = false;\n      }\n      if (selectedTransactions.length() < this.items.length() && safeToSubmit) {\n        this.$validationModal.toggleModal(true);\n      } else {}\n    }\n  },\n  mounted() {\n    this.cached_items ? this.$refs.loadCachedItemModal.toggleModal(true) : this.processCategorySelect(this.account_types);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQXlHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdUcmFuc2FjdGlvbnNMYWJlbGluZy9UcmFuc2FjdGlvbnNUYWJsZS52dWU/Y2Q2MCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48di1zaGVldFxuICBjb2xvcj1cIndoaXRlXCJcbiAgb3V0bGluZWRcbiAgcm91bmRlZFxuICBzaGFwZWRcbiAgZWxldmF0aW9uPVwiMjRcIlxuPlxuPFNuYWNrQmFyXG4gIHJlZj1cImVycm9yU25hY2tiYXJcIlxuPjwvU25hY2tCYXI+XG5cbjxZZXNOb01vZGFsXG4gIHJlZj1cImxvYWRDYWNoZWRJdGVtTW9kYWxcIlxuICBAcmVzcG9uc2U9XCIobXNnKSA9PiBtc2c/dGhpcy5nZXRDYWNoZWRUcmFuc2FjdGlvbnMoKTpudWxsXCJcbj48L1llc05vTW9kYWw+XG5cbjxUYWJsZUhlYWRlckNhcmRcbiAgQHJlc3BvbnNlPVwiKG1zZykgPT4gbXNnP3RoaXMudmFsaWRhdGVGb3JtKCk6bnVsbFwiXG4gIDppc0xvYWRpbmc9XCJ0aGlzLnRhYmxlSXNMb2FkaW5nXCJcbj48L1RhYmxlSGVhZGVyQ2FyZD5cblxuPFdhcm5pbmdNb2RhbFxuICBAcmVzcG9uc2U9XCIobXNnKSA9Pm1zZz9cIlxuPjwvV2FybmluZ01vZGFsPlxuXG4gIDx2LWRpdmlkZXI+PC92LWRpdmlkZXI+XG4gIFxuICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgb3ZlcmZsb3cteC1hdXRvIHNoYWRvdy1tZCBzbTpyb3VuZGVkLXhsXCI+XG4gICAgPHYtdGFibGUgXG4gICAgICBkZW5zaXR5PVwiY29tcGFjdFwiXG4gICAgICBmaXhlZC1oZWFkZXJcbiAgICAgIGZpeGVkLWZvb3RlclxuICAgICAgaG92ZXJcbiAgICAgIHJvdW5kZWRcbiAgICAgIGhlaWdodD1cIjUwMHB4XCJcbiAgICA+XG4gICAgICAgIDx0aGVhZCAgY2xhc3M9XCJ0ZXh0LW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVsYXRpdmUgZmxvYXQtbGVmdCAtbWwtWzEuNXJlbV0gbXItWzZweF0gbXQtWzAuMTVyZW1dIGgtWzEuMTI1cmVtXSB3LVsxLjEyNXJlbV0gYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtWzAuMjVyZW1dIGJvcmRlci1bMC4xMjVyZW1dIGJvcmRlci1zb2xpZCBib3JkZXItbmV1dHJhbC0zMDAgb3V0bGluZS1ub25lIGJlZm9yZTpwb2ludGVyLWV2ZW50cy1ub25lIGJlZm9yZTphYnNvbHV0ZSBiZWZvcmU6aC1bMC44NzVyZW1dIGJlZm9yZTp3LVswLjg3NXJlbV0gYmVmb3JlOnNjYWxlLTAgYmVmb3JlOnJvdW5kZWQtZnVsbCBiZWZvcmU6YmctdHJhbnNwYXJlbnQgYmVmb3JlOm9wYWNpdHktMCBiZWZvcmU6c2hhZG93LVswcHhfMHB4XzBweF8xM3B4X3RyYW5zcGFyZW50XSBiZWZvcmU6Y29udGVudC1bJyddIGNoZWNrZWQ6Ym9yZGVyLXByaW1hcnkgY2hlY2tlZDpiZy1wcmltYXJ5IGNoZWNrZWQ6YmVmb3JlOm9wYWNpdHktWzAuMTZdIGNoZWNrZWQ6YWZ0ZXI6YWJzb2x1dGUgY2hlY2tlZDphZnRlcjotbXQtcHggY2hlY2tlZDphZnRlcjptbC1bMC4yNXJlbV0gY2hlY2tlZDphZnRlcjpibG9jayBjaGVja2VkOmFmdGVyOmgtWzAuODEyNXJlbV0gY2hlY2tlZDphZnRlcjp3LVswLjM3NXJlbV0gY2hlY2tlZDphZnRlcjpyb3RhdGUtNDUgY2hlY2tlZDphZnRlcjpib3JkZXItWzAuMTI1cmVtXSBjaGVja2VkOmFmdGVyOmJvcmRlci1sLTAgY2hlY2tlZDphZnRlcjpib3JkZXItdC0wIGNoZWNrZWQ6YWZ0ZXI6Ym9yZGVyLXNvbGlkIGNoZWNrZWQ6YWZ0ZXI6Ym9yZGVyLXdoaXRlIGNoZWNrZWQ6YWZ0ZXI6YmctdHJhbnNwYXJlbnQgY2hlY2tlZDphZnRlcjpjb250ZW50LVsnJ10gaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6YmVmb3JlOm9wYWNpdHktWzAuMDRdIGhvdmVyOmJlZm9yZTpzaGFkb3ctWzBweF8wcHhfMHB4XzEzcHhfcmdiYSgwLDAsMCwwLjYpXSBmb2N1czpzaGFkb3ctbm9uZSBmb2N1czp0cmFuc2l0aW9uLVtib3JkZXItY29sb3JfMC4yc10gZm9jdXM6YmVmb3JlOnNjYWxlLTEwMCBmb2N1czpiZWZvcmU6b3BhY2l0eS1bMC4xMl0gZm9jdXM6YmVmb3JlOnNoYWRvdy1bMHB4XzBweF8wcHhfMTNweF9yZ2JhKDAsMCwwLDAuNildIGZvY3VzOmJlZm9yZTp0cmFuc2l0aW9uLVtib3gtc2hhZG93XzAuMnMsdHJhbnNmb3JtXzAuMnNdIGZvY3VzOmFmdGVyOmFic29sdXRlIGZvY3VzOmFmdGVyOnotWzFdIGZvY3VzOmFmdGVyOmJsb2NrIGZvY3VzOmFmdGVyOmgtWzAuODc1cmVtXSBmb2N1czphZnRlcjp3LVswLjg3NXJlbV0gZm9jdXM6YWZ0ZXI6cm91bmRlZC1bMC4xMjVyZW1dIGZvY3VzOmFmdGVyOmNvbnRlbnQtWycnXSBjaGVja2VkOmZvY3VzOmJlZm9yZTpzY2FsZS0xMDAgY2hlY2tlZDpmb2N1czpiZWZvcmU6c2hhZG93LVswcHhfMHB4XzBweF8xM3B4XyMzYjcxY2FdIGNoZWNrZWQ6Zm9jdXM6YmVmb3JlOnRyYW5zaXRpb24tW2JveC1zaGFkb3dfMC4ycyx0cmFuc2Zvcm1fMC4yc10gY2hlY2tlZDpmb2N1czphZnRlcjotbXQtcHggY2hlY2tlZDpmb2N1czphZnRlcjptbC1bMC4yNXJlbV0gY2hlY2tlZDpmb2N1czphZnRlcjpoLVswLjgxMjVyZW1dIGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6dy1bMC4zNzVyZW1dIGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6cm90YXRlLTQ1IGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6cm91bmRlZC1ub25lIGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6Ym9yZGVyLVswLjEyNXJlbV0gY2hlY2tlZDpmb2N1czphZnRlcjpib3JkZXItbC0wIGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6Ym9yZGVyLXQtMCBjaGVja2VkOmZvY3VzOmFmdGVyOmJvcmRlci1zb2xpZCBjaGVja2VkOmZvY3VzOmFmdGVyOmJvcmRlci13aGl0ZSBjaGVja2VkOmZvY3VzOmFmdGVyOmJnLXRyYW5zcGFyZW50IGRhcms6Ym9yZGVyLW5ldXRyYWwtNjAwIGRhcms6Y2hlY2tlZDpib3JkZXItcHJpbWFyeSBkYXJrOmNoZWNrZWQ6YmctcHJpbWFyeSBkYXJrOmZvY3VzOmJlZm9yZTpzaGFkb3ctWzBweF8wcHhfMHB4XzEzcHhfcmdiYSgyNTUsMjU1LDI1NSwwLjQpXSBkYXJrOmNoZWNrZWQ6Zm9jdXM6YmVmb3JlOnNoYWRvdy1bMHB4XzBweF8wcHhfMTNweF8jM2I3MWNhXVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJjaGVja2JveENoZWNrZWROb0xhYmVsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCIuLi5cIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdEFsbFwiIFxuICAgICAgICAgICAgICAgICAgQGNoYW5nZSA9IFwidG9nZ2xlQWxsQ2hlY2tib3hlc1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICA8dGggdi1mb3I9XCJoZWFkZXIgaW4gaGVhZGVyc1wiIDprZXk9XCJoZWFkZXIua2V5XCIgc2NvcGU9XCJjb2xcIiBjbGFzcz1cInB4LTYgcHktMyBmb250LW1lZGl1bSB0ZXh0LWJsYWNrLTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGhlYWRlci50aXRsZSB9fVxuICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpdGVtLmtleVwiIGNsYXNzPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJlbGF0aXZlIGZsb2F0LWxlZnQgLW1sLVsxLjVyZW1dIG1yLVs2cHhdIG10LVswLjE1cmVtXSBoLVsxLjEyNXJlbV0gdy1bMS4xMjVyZW1dIGFwcGVhcmFuY2Utbm9uZSByb3VuZGVkLVswLjI1cmVtXSBib3JkZXItWzAuMTI1cmVtXSBib3JkZXItc29saWQgYm9yZGVyLW5ldXRyYWwtMzAwIG91dGxpbmUtbm9uZSBiZWZvcmU6cG9pbnRlci1ldmVudHMtbm9uZSBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOmgtWzAuODc1cmVtXSBiZWZvcmU6dy1bMC44NzVyZW1dIGJlZm9yZTpzY2FsZS0wIGJlZm9yZTpyb3VuZGVkLWZ1bGwgYmVmb3JlOmJnLXRyYW5zcGFyZW50IGJlZm9yZTpvcGFjaXR5LTAgYmVmb3JlOnNoYWRvdy1bMHB4XzBweF8wcHhfMTNweF90cmFuc3BhcmVudF0gYmVmb3JlOmNvbnRlbnQtWycnXSBjaGVja2VkOmJvcmRlci1wcmltYXJ5IGNoZWNrZWQ6YmctcHJpbWFyeSBjaGVja2VkOmJlZm9yZTpvcGFjaXR5LVswLjE2XSBjaGVja2VkOmFmdGVyOmFic29sdXRlIGNoZWNrZWQ6YWZ0ZXI6LW10LXB4IGNoZWNrZWQ6YWZ0ZXI6bWwtWzAuMjVyZW1dIGNoZWNrZWQ6YWZ0ZXI6YmxvY2sgY2hlY2tlZDphZnRlcjpoLVswLjgxMjVyZW1dIGNoZWNrZWQ6YWZ0ZXI6dy1bMC4zNzVyZW1dIGNoZWNrZWQ6YWZ0ZXI6cm90YXRlLTQ1IGNoZWNrZWQ6YWZ0ZXI6Ym9yZGVyLVswLjEyNXJlbV0gY2hlY2tlZDphZnRlcjpib3JkZXItbC0wIGNoZWNrZWQ6YWZ0ZXI6Ym9yZGVyLXQtMCBjaGVja2VkOmFmdGVyOmJvcmRlci1zb2xpZCBjaGVja2VkOmFmdGVyOmJvcmRlci13aGl0ZSBjaGVja2VkOmFmdGVyOmJnLXRyYW5zcGFyZW50IGNoZWNrZWQ6YWZ0ZXI6Y29udGVudC1bJyddIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJlZm9yZTpvcGFjaXR5LVswLjA0XSBob3ZlcjpiZWZvcmU6c2hhZG93LVswcHhfMHB4XzBweF8xM3B4X3JnYmEoMCwwLDAsMC42KV0gZm9jdXM6c2hhZG93LW5vbmUgZm9jdXM6dHJhbnNpdGlvbi1bYm9yZGVyLWNvbG9yXzAuMnNdIGZvY3VzOmJlZm9yZTpzY2FsZS0xMDAgZm9jdXM6YmVmb3JlOm9wYWNpdHktWzAuMTJdIGZvY3VzOmJlZm9yZTpzaGFkb3ctWzBweF8wcHhfMHB4XzEzcHhfcmdiYSgwLDAsMCwwLjYpXSBmb2N1czpiZWZvcmU6dHJhbnNpdGlvbi1bYm94LXNoYWRvd18wLjJzLHRyYW5zZm9ybV8wLjJzXSBmb2N1czphZnRlcjphYnNvbHV0ZSBmb2N1czphZnRlcjp6LVsxXSBmb2N1czphZnRlcjpibG9jayBmb2N1czphZnRlcjpoLVswLjg3NXJlbV0gZm9jdXM6YWZ0ZXI6dy1bMC44NzVyZW1dIGZvY3VzOmFmdGVyOnJvdW5kZWQtWzAuMTI1cmVtXSBmb2N1czphZnRlcjpjb250ZW50LVsnJ10gY2hlY2tlZDpmb2N1czpiZWZvcmU6c2NhbGUtMTAwIGNoZWNrZWQ6Zm9jdXM6YmVmb3JlOnNoYWRvdy1bMHB4XzBweF8wcHhfMTNweF8jM2I3MWNhXSBjaGVja2VkOmZvY3VzOmJlZm9yZTp0cmFuc2l0aW9uLVtib3gtc2hhZG93XzAuMnMsdHJhbnNmb3JtXzAuMnNdIGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6LW10LXB4IGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6bWwtWzAuMjVyZW1dIGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6aC1bMC44MTI1cmVtXSBjaGVja2VkOmZvY3VzOmFmdGVyOnctWzAuMzc1cmVtXSBjaGVja2VkOmZvY3VzOmFmdGVyOnJvdGF0ZS00NSBjaGVja2VkOmZvY3VzOmFmdGVyOnJvdW5kZWQtbm9uZSBjaGVja2VkOmZvY3VzOmFmdGVyOmJvcmRlci1bMC4xMjVyZW1dIGNoZWNrZWQ6Zm9jdXM6YWZ0ZXI6Ym9yZGVyLWwtMCBjaGVja2VkOmZvY3VzOmFmdGVyOmJvcmRlci10LTAgY2hlY2tlZDpmb2N1czphZnRlcjpib3JkZXItc29saWQgY2hlY2tlZDpmb2N1czphZnRlcjpib3JkZXItd2hpdGUgY2hlY2tlZDpmb2N1czphZnRlcjpiZy10cmFuc3BhcmVudCBkYXJrOmJvcmRlci1uZXV0cmFsLTYwMCBkYXJrOmNoZWNrZWQ6Ym9yZGVyLXByaW1hcnkgZGFyazpjaGVja2VkOmJnLXByaW1hcnkgZGFyazpmb2N1czpiZWZvcmU6c2hhZG93LVswcHhfMHB4XzBweF8xM3B4X3JnYmEoMjU1LDI1NSwyNTUsMC40KV0gZGFyazpjaGVja2VkOmZvY3VzOmJlZm9yZTpzaGFkb3ctWzBweF8wcHhfMHB4XzEzcHhfIzNiNzFjYV1cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiY2hlY2tib3hDaGVja2VkTm9MYWJlbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC0yIGZvbnQtc21hbGwgdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uaW5mbyB9fVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgdi1pZj1cIml0ZW0uZW50cnkgPT0gJ0RlYml0J1wiIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC0xIGZvbnQtYm9sZCBweS0xIGZvbnQtc21hbGwgdGV4dC1yb3NlLTQwMCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIC0gUnAge3tmb3JtYXRQcmljZShpdGVtLmFtb3VudCl9fVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgdi1lbHNlIHNjb3BlPVwicm93XCIgY2xhc3M9XCJweC0xIHB5LTEgZm9udC1zZW1pYm9sZCB0ZXh0LWdyZWVuLTcwMCBmb250LXNtYWxsIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBScCB7e2Zvcm1hdFByaWNlKGl0ZW0uYW1vdW50KX19XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCAgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInB4LTEgcHktMSBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBpdGVtLmRhdGUgfX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkICBzY29wZT1cInJvd1wiIGNsYXNzPVwicHgtMSBweS0xIGZvbnQtc21hbGwgdGV4dC1ncmF5LTkwMCB3aGl0ZXNwYWNlLXdyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBpdGVtLmRldGFpbHMgfX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkID5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3QgZGF0YS10ZS1zZWxlY3QtaW5pdCBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0uYWNjb3VudF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiY2F0ZWdvcnkgaW4gY2F0ZWdvcmllc1wiIDprZXk9XCJjYXRlZ29yeS5rZXlcIiA6dmFsdWU9XCJjYXRlZ29yeS5uYW1lXCI+e3tjYXRlZ29yeS5uYW1lfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzcz1cInRleHQtY2VudGVyIHB4LTEgcHktMSBmb250LXNtYWxsIHRleHQtZ3JheS05MDAgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHYtY2hpcFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYS0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOb3QgU2F2ZWRcbiAgICAgICAgICAgICAgICA8L3YtY2hpcD5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgPC92LXRhYmxlPlxuICA8L2Rpdj5cbjwvdi1zaGVldD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4gIGltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbiAgaW1wb3J0IFllc05vTW9kYWwgZnJvbSAnLi4vWWVzTm9Nb2RhbC52dWUnO1xuICBpbXBvcnQgVGFibGVIZWFkZXJDYXJkIGZyb20gJy4uL1RhYmxlSGVhZGVyQ2FyZC52dWUnO1xuICBpbXBvcnQgU25hY2tCYXIgZnJvbSAnLi4vU25hY2tCYXIudnVlJztcbiAgaW1wb3J0IFdhcm5pbmdNb2RhbCBmcm9tICcuLi9XYXJuaW5nTW9kYWwudnVlJztcblxuICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuVlVFX0FQUF9CQVNFX1VSTDtcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czp7XG4gICAgICBZZXNOb01vZGFsLFxuICAgICAgVGFibGVIZWFkZXJDYXJkLFxuICAgICAgU25hY2tCYXIsXG4gICAgICBXYXJuaW5nTW9kYWxcbiAgICB9LFxuICAgIGRhdGEgKCkgeyBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGF0dHJzOntcbiAgICAgICAgICBjbGFzczogJ21iLTYnLFxuICAgICAgICAgIGJvaWxlcnBsYXRlOiB0cnVlLFxuICAgICAgICAgIGVsZXZhdGlvbjogMixcbiAgICAgICAgfSxcbiAgICAgICAgZGlhbG9nOmZhbHNlLFxuICAgICAgICBmb3JtSXNWYWxpZDp0cnVlLFxuICAgICAgICBoZWFkZXJzOltcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTonVHJhbnNhY3Rpb24nLFxuICAgICAgICAgICAgYWxpZ246J3N0YXJ0JyxcbiAgICAgICAgICAgIHNvcnRhYmxlOmZhbHNlLFxuICAgICAgICAgICAga2V5OidpbmZvJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge3RpdGxlOidBbW91bnQgKElEUiknLCBhbGlnbjonc3RhcnQnLCBzb3J0YWJsZTp0cnVlLCBrZXk6J2Ftb3VudCd9LFxuICAgICAgICAgIHt0aXRsZTonRGF0ZScsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTonZGF0ZSd9LFxuICAgICAgICAgIHt0aXRsZTonRGV0YWlsJywgYWxpZ246J3N0YXJ0Jywgc29ydGFibGU6ZmFsc2UsIGtleTonZGV0YWlscyd9LFxuICAgICAgICAgIHt0aXRsZTonQ2F0ZWdvcnknLCBhbGlnbjonc3RhcnQnLCBzb3J0YWJsZTp0cnVlLCBrZXk6XCJjYXRlZ29yeVwifSxcbiAgICAgICAgICB7dGl0bGU6J1N0YXR1cycsIGFsaWduOidzdGFydCcsIHNvcnRhYmxlOnRydWUsIGtleTpcInN0YXR1c1wifSxcbiAgICAgICAgXSxcbiAgICAgICAgaXRlbXM6W10sXG4gICAgICAgIGNhdGVnb3JpZXM6W10sXG4gICAgICAgIHNlbGVjdEFsbDpmYWxzZSxcbiAgICAgICAgeWVzTm9Nb2RhbE9iajp7XG4gICAgICAgICAgdHJpZ2dlcjpmYWxzZSxcbiAgICAgICAgICBkaWFsb2c6e1xuICAgICAgICAgICAgdGl0bGU6IFwiTmV3IFRyYW5zYWN0aW9uc1wiLFxuICAgICAgICAgICAgdGV4dDogXCJMb29rcyBsaWtlIHlvdSBqdXN0IHVwbG9hZGVkIGEgYmFua3N0YXRlbWVudCwgd2FudCB0byBsYWJlbCB0cmFuc2FjdGlvbnMgZnJvbSB0aGF0IGJhbmtzdGF0ZW1lbnQ/XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNuYWNrQmFyT2JqOntcbiAgICAgICAgICB0cmlnZ2VyOmZhbHNlLFxuICAgICAgICAgIGRpYWxvZzpcIlBsZWFzZSBzZWxlY3QgYW5kIGxhYmVsIHRyYW5zYWN0aW9ucyBmaXJzdCFcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGFibGVJc0xvYWRpbmc6ZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOntcbiAgICAgICAgY2FjaGVkX2l0ZW1zOm51bGwsXG4gICAgICAgIGFjY291bnRfdHlwZXM6bnVsbFxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICBnZXRUcmFuc2FjdGlvbigpe1xuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGVG9rZW4nXSA9IENvb2tpZXMuZ2V0KCdjc3JmdG9rZW4nKTtcbiAgICAgICAgY29uc3QgZ2V0VHJhbnNhY3Rpb25zVXJsID0gYCR7YmFzZVVybH10cmFuc2FjdGlvbnNgXG4gICAgICAgIGF4aW9zLmdldChnZXRUcmFuc2FjdGlvbnNVcmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgb2NjdXJzXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcG9zdFRyYW5zYWN0aW9ucygpe1xuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1DU1JGVG9rZW4nXSA9IENvb2tpZXMuZ2V0KCdjc3JmdG9rZW4nKTtcbiAgICAgICAgY29uc3QgQ1JVREJhbmtzdGF0ZW1lbnRBUEkgPSBgJHtiYXNlVXJsfUNSVURCYW5rc3RhdGVtZW50QVBJYFxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW5wdXRfdmFsdWUnLCB0aGlzLmlucHV0X3ZhbHVlcyk7XG4gICAgICAgIGF4aW9zLnBvc3QoQ1JVREJhbmtzdGF0ZW1lbnRBUEkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgb2NjdXJzXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Q2FjaGVkVHJhbnNhY3Rpb25zKCl7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmNhY2hlZF9pdGVtc1xuICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlXG4gICAgICB9LFxuICAgICAgdG9nZ2xlQWxsQ2hlY2tib3hlcygpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGl0ZW0uc2VsZWN0ID0gdGhpcy5zZWxlY3RBbGw7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZvcm1hdFByaWNlKHZhbHVlKSB7XG4gICAgICAgIGxldCB2YWwgPSAodmFsdWUvMSkudG9GaXhlZCgyKS5yZXBsYWNlKCcuJywgJywnKVxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpXG4gICAgICB9LFxuICAgICAgcHJvY2Vzc0NhdGVnb3J5U2VsZWN0KGFjY291bnRfdHlwZXMpe1xuICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IFt7a2V5Om51bGwsIG5hbWU6bnVsbH1dXG4gICAgICAgIGFjY291bnRfdHlwZXMuZm9yRWFjaChjYXRlZ29yeT0+IFxuICAgICAgICAgIGNhdGVnb3JpZXMucHVzaCh7XG4gICAgICAgICAgICAgIGtleTpjYXRlZ29yeSwgXG4gICAgICAgICAgICAgIG5hbWU6Y2F0ZWdvcnlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0ZUZvcm0oKXtcbiAgICAgICAgdGhpcy50YWJsZUlzTG9hZGluZyA9IHRydWVcbiAgICAgICAgbGV0IHNhZmVUb1N1Ym1pdCA9IHRydWVcbiAgICAgICAgbGV0IHNlbGVjdGVkVHJhbnNhY3Rpb25zID0gW11cblxuICAgICAgICBjb25zdCBOT19JVEVNX1NFTEVDVEVEID0gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pPT5pdGVtLnNlbGVjdCkubGVuZ3RoIDwgMVxuICAgICAgICBjb25zdCBOT19JVEVNID0gdGhpcy5pdGVtcy5sZW5ndGggPCAxXG4gICAgICAgIGlmIChOT19JVEVNIHx8IE5PX0lURU1fU0VMRUNURUQpe1xuICAgICAgICAgIHRoaXMuJHJlZnMuZXJyb3JTbmFja2Jhci5wb3BTbmFja0JhcihcIlBsZWFzZSBTZWxlY2V0IG9yIExvYWQgVHJhbnNhY3Rpb25zIEZpcnN0IVwiKVxuICAgICAgICAgIHRoaXMudGFibGVJc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0KXtcbiAgICAgICAgICAgIHNlbGVjdGVkVHJhbnNhY3Rpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIGl0ZW0uZXJyb3IgPSAhaXRlbS5hY2NvdW50X3R5cGVcbiAgICAgICAgICAgIHNhZmVUb1N1Ym1pdCA9IGl0ZW0uYWNjb3VudF90eXBlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgaWYgKCFzYWZlVG9TdWJtaXQpe1xuICAgICAgICAgIHRoaXMuJHJlZnMuZXJyb3JTbmFja2Jhci5wb3BTbmFja0JhcihcIlBsZWFzZSBDb21wbGV0ZSBMYWJlbGluZyBZb3VyIFRyYW5zYWN0aW9uc1wiKVxuICAgICAgICAgIHRoaXMudGFibGVJc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoc2VsZWN0ZWRUcmFuc2FjdGlvbnMubGVuZ3RoKCkgPCB0aGlzLml0ZW1zLmxlbmd0aCgpICYmIHNhZmVUb1N1Ym1pdCl7XG4gICAgICAgICAgdGhpcy4kdmFsaWRhdGlvbk1vZGFsLnRvZ2dsZU1vZGFsKHRydWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCl7XG4gICAgICB0aGlzLmNhY2hlZF9pdGVtcyA/IHRoaXMuJHJlZnMubG9hZENhY2hlZEl0ZW1Nb2RhbC50b2dnbGVNb2RhbCh0cnVlKTpcbiAgICAgIHRoaXMucHJvY2Vzc0NhdGVnb3J5U2VsZWN0KHRoaXMuYWNjb3VudF90eXBlcylcbiAgICB9XG4gIH1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/src/components/ViewTransactionsLabeling/TransactionsTable.vue: Unexpected token (64:58)\n\n\u001b[0m \u001b[90m 62 |\u001b[39m       }\u001b[33m,\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m \u001b[35m8\u001b[39m \u001b[90m/* PROPS */\u001b[39m\u001b[33m,\u001b[39m [\u001b[32m\"isLoading\"\u001b[39m])\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 63 |\u001b[39m       _createVNode(_component_WarningModal\u001b[33m,\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 64 |\u001b[39m         onResponse\u001b[33m:\u001b[39m _cache[\u001b[35m2\u001b[39m] \u001b[33m||\u001b[39m (_cache[\u001b[35m2\u001b[39m] \u001b[33m=\u001b[39m (msg) \u001b[33m=>\u001b[39mmsg\u001b[33m?\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 65 |\u001b[39m       })\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 66 |\u001b[39m       _createVNode(_component_v_divider)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 67 |\u001b[39m       _createElementVNode(\u001b[32m\"div\"\u001b[39m\u001b[33m,\u001b[39m _hoisted_1\u001b[33m,\u001b[39m [\u001b[0m\n    at instantiate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:63:32)\n    at constructor (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:358:12)\n    at JSXParserMixin.raise (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:3255:19)\n    at JSXParserMixin.unexpected (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:3285:16)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11284:16)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:6974:20)\n    at JSXParserMixin.parseExprSubscripts (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10890:23)\n    at JSXParserMixin.parseUpdate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10873:21)\n    at JSXParserMixin.parseMaybeUnary (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10849:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10687:61)\n    at JSXParserMixin.parseExprOps (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10692:23)\n    at JSXParserMixin.parseMaybeConditional (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10669:23)\n    at JSXParserMixin.parseMaybeAssign (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10630:21)\n    at /home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10600:39\n    at JSXParserMixin.allowInAnd (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:12280:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10600:17)\n    at JSXParserMixin.parseConditional (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10679:30)\n    at JSXParserMixin.parseMaybeConditional (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10673:17)\n    at JSXParserMixin.parseMaybeAssign (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10630:21)\n    at JSXParserMixin.parseFunctionBody (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11940:24)\n    at JSXParserMixin.parseArrowExpression (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11922:10)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11525:12)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11164:23)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:6974:20)\n    at JSXParserMixin.parseExprSubscripts (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10890:23)\n    at JSXParserMixin.parseUpdate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10873:21)\n    at JSXParserMixin.parseMaybeUnary (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10849:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10687:61)\n    at JSXParserMixin.parseExprOps (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10692:23)\n    at JSXParserMixin.parseMaybeConditional (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10669:23)\n    at JSXParserMixin.parseMaybeAssign (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10630:21)\n    at JSXParserMixin.parseMaybeAssign (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10656:25)\n    at /home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10600:39\n    at JSXParserMixin.allowInAnd (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:12280:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10600:17)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11513:28)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11164:23)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:6974:20)\n    at JSXParserMixin.parseExprSubscripts (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10890:23)\n    at JSXParserMixin.parseUpdate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10873:21)\n    at JSXParserMixin.parseMaybeUnary (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10849:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10687:61)\n    at JSXParserMixin.parseExprOpBaseRightExpr (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10780:34)\n    at JSXParserMixin.parseExprOpRightExpr (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10775:21)\n    at JSXParserMixin.parseExprOp (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10738:27)\n    at JSXParserMixin.parseExprOps (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10696:17)\n    at JSXParserMixin.parseMaybeConditional (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10669:23)\n    at JSXParserMixin.parseMaybeAssign (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10630:21)\n    at /home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10600:39\n    at JSXParserMixin.allowInAnd (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:12280:12)");

/***/ }),

/***/ "./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162":
/*!*****************************************************************************************************!*\
  !*** ./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162 ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_webpack_plugin_vuetify_dist_scriptLoader_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TransactionsTable_vue_vue_type_template_id_35bea162__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TransactionsTable.vue?vue&type=template&id=35bea162 */ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewTransactionsLabeling/TransactionsTable.vue?vue&type=template&id=35bea162");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "faf0da05106217f9"; }
/******/ }();
/******/ 
/******/ }
);