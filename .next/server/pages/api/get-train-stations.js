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
exports.id = "pages/api/get-train-stations";
exports.ids = ["pages/api/get-train-stations"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./modules/get-all-stations.js":
/*!*************************************!*\
  !*** ./modules/get-all-stations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n// Gets all dart stations - could be extended to pass station type\nconst getAllStations = async (type)=>{\n    try {\n        // Error checking on 'type' would be a good addition\n        const stationType = type || \"D\";\n        const allStations = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML_WithStationType?StationType=${stationType}`);\n        console.log(allStations);\n        return allStations;\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllStations);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2R1bGVzL2dldC1hbGwtc3RhdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLGtFQUFrRTtBQUVsRSxNQUFNQyxjQUFjLEdBQUcsT0FBT0MsSUFBSSxHQUFLO0lBQ25DLElBQUk7UUFDSixvREFBb0Q7UUFDcEQsTUFBTUMsV0FBVyxHQUFHRCxJQUFJLElBQUksR0FBRztRQUMvQixNQUFNRSxXQUFXLEdBQUcsTUFBTUosZ0RBQVMsQ0FBQyxDQUFDLDZGQUE2RixFQUFFRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xKRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsV0FBVyxDQUFDO1FBQ3hCLE9BQU9BLFdBQVcsQ0FBQztJQUNuQixFQUFFLE9BQU9JLEtBQUssRUFBRTtRQUNaRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDO0lBQ3RCLENBQUM7QUFDTCxDQUFDO0FBRUQsaUVBQWVQLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcnQtY2hhdC1ib3QvLi9tb2R1bGVzL2dldC1hbGwtc3RhdGlvbnMuanM/YzcxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBHZXRzIGFsbCBkYXJ0IHN0YXRpb25zIC0gY291bGQgYmUgZXh0ZW5kZWQgdG8gcGFzcyBzdGF0aW9uIHR5cGVcblxuY29uc3QgZ2V0QWxsU3RhdGlvbnMgPSBhc3luYyAodHlwZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgLy8gRXJyb3IgY2hlY2tpbmcgb24gJ3R5cGUnIHdvdWxkIGJlIGEgZ29vZCBhZGRpdGlvblxuICAgIGNvbnN0IHN0YXRpb25UeXBlID0gdHlwZSB8fCAnRCdcbiAgICBjb25zdCBhbGxTdGF0aW9ucyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2FwaS5pcmlzaHJhaWwuaWUvcmVhbHRpbWUvcmVhbHRpbWUuYXNteC9nZXRBbGxTdGF0aW9uc1hNTF9XaXRoU3RhdGlvblR5cGU/U3RhdGlvblR5cGU9JHtzdGF0aW9uVHlwZX1gKVxuICAgIGNvbnNvbGUubG9nKGFsbFN0YXRpb25zKVxuICAgIHJldHVybiBhbGxTdGF0aW9ucztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbFN0YXRpb25zOyJdLCJuYW1lcyI6WyJheGlvcyIsImdldEFsbFN0YXRpb25zIiwidHlwZSIsInN0YXRpb25UeXBlIiwiYWxsU3RhdGlvbnMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./modules/get-all-stations.js\n");

/***/ }),

/***/ "(api)/./pages/api/get-train-stations.js":
/*!*****************************************!*\
  !*** ./pages/api/get-train-stations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _modules_get_all_stations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/get-all-stations */ \"(api)/./modules/get-all-stations.js\");\n\n// Gets all dart stations - could be extended to pass station type\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const stations = (0,_modules_get_all_stations__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"D\");\n        res.send(stations);\n    } else {\n        res.status(400);\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXRyYWluLXN0YXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTREO0FBQzVELGtFQUFrRTtBQUluRCxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN6QixNQUFNQyxRQUFRLEdBQUdMLHFFQUFjLENBQUMsR0FBRyxDQUFDO1FBQ3BDRyxHQUFHLENBQUNHLElBQUksQ0FBQ0QsUUFBUSxDQUFDO0lBQ25CLE9BQU87UUFDUEYsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJ0LWNoYXQtYm90Ly4vcGFnZXMvYXBpL2dldC10cmFpbi1zdGF0aW9ucy5qcz82OTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRBbGxTdGF0aW9ucyBmcm9tIFwiLi4vLi4vbW9kdWxlcy9nZXQtYWxsLXN0YXRpb25zXCI7XG4vLyBHZXRzIGFsbCBkYXJ0IHN0YXRpb25zIC0gY291bGQgYmUgZXh0ZW5kZWQgdG8gcGFzcyBzdGF0aW9uIHR5cGVcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgY29uc3Qgc3RhdGlvbnMgPSBnZXRBbGxTdGF0aW9ucygnRCcpO1xuICAgICByZXMuc2VuZChzdGF0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDAwKVxuICAgIH1cbiAgfTsiXSwibmFtZXMiOlsiZ2V0QWxsU3RhdGlvbnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdGlvbnMiLCJzZW5kIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-train-stations.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-train-stations.js"));
module.exports = __webpack_exports__;

})();