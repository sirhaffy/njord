/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/haffy/Woonderland/HTTPD/njord/njord-web/pages/posts/[slug].js\";\n\nvar __N_SSP = true;\nfunction Post(_ref) {\n  var data = _ref.data;\n  console.log({\n    data: data\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"text-3xl text-center\",\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n        width: \"640\",\n        height: \"480\",\n        src: post.featuredImage.node.sourceUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      className: \"text-center\",\n      dangerouslySetInnerHTML: {\n        __html: post.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzP2RlYzkiXSwibmFtZXMiOlsiUG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInRpdGxlIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzb3VyY2VVcmwiLCJfX2h0bWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQXdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBRXJDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBWjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsc0JBQWQ7QUFBQSxnQkFBc0NHLElBQUksQ0FBQ0M7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDRSw4REFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDLEtBQWI7QUFBbUIsY0FBTSxFQUFDLEtBQTFCO0FBQWdDLFdBQUcsRUFBRUQsSUFBSSxDQUFDRSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QkM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUtFO0FBQVMsZUFBUyxFQUFDLGFBQW5CO0FBQWlDLDZCQUF1QixFQUFFO0FBQUNDLGNBQU0sRUFBRUwsSUFBSSxDQUFDTTtBQUFkO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEO0tBZHVCVixJIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBjcmVhdGVIdHRwTGluaywgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgge2RhdGF9ICkge1xuICBcbiAgY29uc29sZS5sb2coe2RhdGF9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZSB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjQ4MFwiIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLm5vZGUuc291cmNlVXJsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0LmNvbnRlbnR9fT48L2FydGljbGU+XG4gICAgPC9kaXY+XG4gIClcbiAgXG59XG5cblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHNzck1vZGU6IHRydWUsXG4gIGxpbms6IGNyZWF0ZUh0dHBMaW5rKHtcbiAgICB1cmk6IHByb2Nlc3MuZW52LldPUkRQUkVTU19MT0NBTF9TSVRFX1VSTCxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICB9KSxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyggY29udGV4dCApIHtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IFNpbmdsZVBvc3QoICRpZDogSUQhLCAkaWRUeXBlOiBQb3N0SWRUeXBlISApIHtcbiAgICAgICAgcG9zdChpZDogJGlkLCBpZFR5cGU6ICRpZFR5cGUpIHtcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgc291cmNlVXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBjb250ZXh0LnBhcmFtcy5zbHVnLFxuICAgICAgaWRUeXBlOiAnU0xVRydcbiAgICB9XG4gIH0pO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07XG4gIH1cbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ })

});