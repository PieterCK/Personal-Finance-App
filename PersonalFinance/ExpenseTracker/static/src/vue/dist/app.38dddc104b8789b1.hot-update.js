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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewBankStatement/ViewBankStatement.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewBankStatement/ViewBankStatement.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BankstatementForms_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BankstatementForms.vue */ \"./src/components/ViewBankStatement/BankstatementForms.vue\");\n/* harmony import */ var _DiagnoseForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiagnoseForm.vue */ \"./src/components/ViewBankStatement/DiagnoseForm.vue\");\n/* harmony import */ var _PDFPreviewPanel_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PDFPreviewPanel.vue */ \"./src/components/ViewBankStatement/PDFPreviewPanel.vue\");\n\n\n\nconst baseUrl = \"http://127.0.0.1:9015/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    BankstatementForms: _BankstatementForms_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    DiagnoseForm: _DiagnoseForm_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    PDFPreviewPanel: _PDFPreviewPanel_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data() {\n    return {\n      form: \"upload_form\",\n      is_valid: true,\n      pdf_url: \"\",\n      transaction_data: \"\",\n      parse_values: []\n    };\n  },\n  watch: {\n    is_valid(is_valid) {\n      if (is_valid) {\n        this.form = \"upload_form\";\n        this.pdf_url = `${baseUrl}bankstatement/api/display_pdf/original`;\n      } else {\n        this.form = \"diagnose_form\";\n        this.pdf_url = `${baseUrl}bankstatement/api/display_pdf/highlighted`;\n      }\n    }\n  },\n  methods: {\n    handleResponse(msg) {\n      this.is_valid = msg.transaction_data.is_valid;\n      this.parse_values = msg.transaction_data.parse_value;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1ZpZXdCYW5rU3RhdGVtZW50L1ZpZXdCYW5rU3RhdGVtZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1ZpZXdCYW5rU3RhdGVtZW50L1ZpZXdCYW5rU3RhdGVtZW50LnZ1ZT9kOWJlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICBcbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQmFua3N0YXRlbWVudEZvcm1zIGZyb20gJy4vQmFua3N0YXRlbWVudEZvcm1zLnZ1ZSc7XG5pbXBvcnQgRGlhZ25vc2VGb3JtIGZyb20gJy4vRGlhZ25vc2VGb3JtLnZ1ZSc7XG5pbXBvcnQgUERGUHJldmlld1BhbmVsIGZyb20gJy4vUERGUHJldmlld1BhbmVsLnZ1ZSc7XG5cbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5WVUVfQVBQX0JBU0VfVVJMO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czp7XG4gICAgICAgIEJhbmtzdGF0ZW1lbnRGb3JtcyxcbiAgICAgICAgRGlhZ25vc2VGb3JtLFxuICAgICAgICBQREZQcmV2aWV3UGFuZWxcbiAgICB9LFxuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvcm0gOiBcInVwbG9hZF9mb3JtXCIsXG4gICAgICAgICAgICBpc192YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIHBkZl91cmw6XCJcIixcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uX2RhdGE6XCJcIixcbiAgICAgICAgICAgIHBhcnNlX3ZhbHVlczpbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBpc192YWxpZChpc192YWxpZCkge1xuICAgICAgICAgICAgaWYoaXNfdmFsaWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IFwidXBsb2FkX2Zvcm1cIlxuICAgICAgICAgICAgICAgIHRoaXMucGRmX3VybCA9IGAke2Jhc2VVcmx9YmFua3N0YXRlbWVudC9hcGkvZGlzcGxheV9wZGYvb3JpZ2luYWxgO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IFwiZGlhZ25vc2VfZm9ybVwiXG4gICAgICAgICAgICAgICAgdGhpcy5wZGZfdXJsID0gYCR7YmFzZVVybH1iYW5rc3RhdGVtZW50L2FwaS9kaXNwbGF5X3BkZi9oaWdobGlnaHRlZGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2UobXNnKXtcbiAgICAgICAgICAgIHRoaXMuaXNfdmFsaWQgPSBtc2cudHJhbnNhY3Rpb25fZGF0YS5pc192YWxpZFxuICAgICAgICAgICAgdGhpcy5wYXJzZV92YWx1ZXMgPSBtc2cudHJhbnNhY3Rpb25fZGF0YS5wYXJzZV92YWx1ZVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewBankStatement/ViewBankStatement.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewBankStatement/ViewBankStatement.vue?vue&type=template&id=4b110b6d":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-plugin-vuetify/dist/scriptLoader.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ViewBankStatement/ViewBankStatement.vue?vue&type=template&id=4b110b6d ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; }
/* harmony export */ });
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e75a52a5b171ab93"; }
/******/ }();
/******/ 
/******/ }
);