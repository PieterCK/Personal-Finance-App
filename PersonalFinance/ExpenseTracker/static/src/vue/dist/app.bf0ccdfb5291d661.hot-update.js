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
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/src/components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue: Unexpected token, expected \",\" (26:27)\n\n\u001b[0m \u001b[90m 24 |\u001b[39m       axios\u001b[33m.\u001b[39mdefaults\u001b[33m.\u001b[39mheaders\u001b[33m.\u001b[39mcommon[\u001b[32m'X-CSRFToken'\u001b[39m] \u001b[33m=\u001b[39m \u001b[33mCookies\u001b[39m\u001b[33m.\u001b[39m\u001b[36mget\u001b[39m(\u001b[32m'csrftoken'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 |\u001b[39m       \u001b[36mconst\u001b[39m getTransactionsUrl \u001b[33m=\u001b[39m \u001b[32m`${baseUrl}bankstatement/api/CRUDBankstatementAPI`\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 26 |\u001b[39m       console\u001b[33m.\u001b[39mlog(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdate\u001b[35m.0\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m       axios\u001b[33m.\u001b[39m\u001b[36mget\u001b[39m(getTransactionsUrl \u001b[33m,\u001b[39m{\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m         params\u001b[33m:\u001b[39m{\u001b[0m\n\u001b[0m \u001b[90m 29 |\u001b[39m           data\u001b[33m:\u001b[39m {\u001b[0m\n    at instantiate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:63:32)\n    at constructor (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:358:12)\n    at JSXParserMixin.raise (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:3255:19)\n    at JSXParserMixin.unexpected (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:3285:16)\n    at JSXParserMixin.expect (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:3627:28)\n    at JSXParserMixin.parseCallExpressionArguments (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11073:14)\n    at JSXParserMixin.parseCoverCallAndAsyncArrowHead (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10997:29)\n    at JSXParserMixin.parseSubscript (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10932:19)\n    at JSXParserMixin.parseSubscripts (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10903:19)\n    at JSXParserMixin.parseExprSubscripts (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10894:17)\n    at JSXParserMixin.parseUpdate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10873:21)\n    at JSXParserMixin.parseMaybeUnary (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10849:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10687:61)\n    at JSXParserMixin.parseExprOps (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10692:23)\n    at JSXParserMixin.parseMaybeConditional (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10669:23)\n    at JSXParserMixin.parseMaybeAssign (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10630:21)\n    at JSXParserMixin.parseExpressionBase (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10584:23)\n    at /home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10580:39\n    at JSXParserMixin.allowInAnd (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:12275:16)\n    at JSXParserMixin.parseExpression (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10580:17)\n    at JSXParserMixin.parseStatementContent (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:12733:23)\n    at JSXParserMixin.parseStatementLike (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:12584:17)\n    at JSXParserMixin.parseStatementListItem (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:12564:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:13185:61)\n    at JSXParserMixin.parseBlockBody (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:13178:10)\n    at JSXParserMixin.parseBlock (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:13166:10)\n    at JSXParserMixin.parseFunctionBody (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11947:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11933:10)\n    at JSXParserMixin.parseMethod (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11891:31)\n    at JSXParserMixin.parseObjectMethod (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11790:19)\n    at JSXParserMixin.parseObjPropValue (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11823:23)\n    at JSXParserMixin.parsePropertyDefinition (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11757:17)\n    at JSXParserMixin.parseObjectLike (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11672:21)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11182:23)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:6974:20)\n    at JSXParserMixin.parseExprSubscripts (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10890:23)\n    at JSXParserMixin.parseUpdate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10873:21)\n    at JSXParserMixin.parseMaybeUnary (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10849:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10687:61)\n    at JSXParserMixin.parseExprOps (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10692:23)\n    at JSXParserMixin.parseMaybeConditional (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10669:23)\n    at JSXParserMixin.parseMaybeAssign (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10630:21)\n    at /home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10600:39\n    at JSXParserMixin.allowInAnd (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:12280:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:10600:17)\n    at JSXParserMixin.parseObjectProperty (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11796:83)\n    at JSXParserMixin.parseObjPropValue (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11823:100)\n    at JSXParserMixin.parsePropertyDefinition (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11757:17)\n    at JSXParserMixin.parseObjectLike (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11672:21)\n    at JSXParserMixin.parseExprAtom (/home/pieter/projects/Personal-Finance-App/PersonalFinance/frontend/node_modules/@babel/parser/lib/index.js:11182:23)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e493a873734e6ac6"; }
/******/ }();
/******/ 
/******/ }
);