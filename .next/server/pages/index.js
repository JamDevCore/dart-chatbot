"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const fetchStations = async ()=>{\n        const stations = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/api/get-train-stations\");\n        console.log(stations);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello World\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesharding/james/dart-chat-bot/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>fetchStations(),\n                children: \"Fetch Stations\"\n            }, void 0, false, {\n                fileName: \"/Users/jamesharding/james/dart-chat-bot/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlCO0FBR1YsU0FBU0MsSUFBSSxHQUFHO0lBQzNCLE1BQU1DLGFBQWEsR0FBRyxVQUFZO1FBQzlCLE1BQU1DLFFBQVEsR0FBRyxNQUFNSCxnREFBUyxDQUFDLHlCQUF5QixDQUFDO1FBQzNESyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxxQkFDSTs7MEJBQ0EsOERBQUNJLElBQUU7MEJBQUMsYUFBVzs7Ozs7b0JBQUs7MEJBQ3BCLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBTVAsYUFBYSxFQUFFOzBCQUFFLGdCQUFjOzs7OztvQkFBUzs7b0JBQzVELENBQ047QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFydC1jaGF0LWJvdC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgZmV0Y2hTdGF0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGlvbnMgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZ2V0LXRyYWluLXN0YXRpb25zJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRpb25zKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZldGNoU3RhdGlvbnMoKX0+RmV0Y2ggU3RhdGlvbnM8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJheGlvcyIsIkhvbWUiLCJmZXRjaFN0YXRpb25zIiwic3RhdGlvbnMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();