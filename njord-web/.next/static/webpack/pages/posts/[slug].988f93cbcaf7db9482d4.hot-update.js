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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/haffy/Woonderland/HTTPD/njord/njord-web/pages/posts/[slug].js\";\n\nvar __N_SSG = true;\nfunction Post(data) {\n  console.log({\n    data: data\n  });\n  var post = data.post;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"text-3xl text-center\",\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        width: \"640\",\n        height: \"480\",\n        src: post.featuredImage.node.sourceUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      className: \"text-center\",\n      dangerouslySetInnerHTML: {\n        __html: post.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzP2RlYzkiXSwibmFtZXMiOlsiUG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsInRpdGxlIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJzb3VyY2VVcmwiLCJfX2h0bWwiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxJQUFULENBQWVDLElBQWYsRUFBc0I7QUFFbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNGLFFBQUksRUFBSkE7QUFBRCxHQUFaO0FBRUEsTUFBTUcsSUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQWxCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxzQkFBZDtBQUFBLGdCQUFzQ0EsSUFBSSxDQUFDQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBSyxFQUFDLEtBQWI7QUFBbUIsY0FBTSxFQUFDLEtBQTFCO0FBQWdDLFdBQUcsRUFBRUQsSUFBSSxDQUFDRSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QkM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUtFO0FBQVMsZUFBUyxFQUFDLGFBQW5CO0FBQWlDLDZCQUF1QixFQUFFO0FBQUNDLGNBQU0sRUFBRUwsSUFBSSxDQUFDTTtBQUFkO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEO0tBaEJ1QlYsSSIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KCBkYXRhICkge1xuICBcbiAgY29uc29sZS5sb2coe2RhdGF9KTtcblxuICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPEltYWdlIHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiNDgwXCIgc3JjPXtwb3N0LmZlYXR1cmVkSW1hZ2Uubm9kZS5zb3VyY2VVcmx9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY29udGVudH19PjwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbiAgKVxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyggY29udGV4dCApIHtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCggJ2h0dHA6Ly9sb2NhbGhvc3Q6ODg4OC9uam9yZC9uam9yZC1jbXMvZ3JhcGhxbCcsIHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IFxuICAgIHF1ZXJ5OiBgXG4gICAgICBxdWVyeSBTaW5nbGVQb3N0KCAkaWQ6IElEISwgJGlkVHlwZTogUG9zdElkVHlwZSEgKSB7XG4gICAgICAgIHBvc3QoaWQ6ICRpZCwgaWRUeXBlOiAkaWRUeXBlKSB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgY29udGVudFxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIHNvdXJjZVVybFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBpZDogY29udGV4dC5wYXJhbXMuc2x1ZyxcbiAgICAgICAgaWRUeXBlOiAnU0xVRydcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDoganNvbi5kYXRhLnBvc3QsXG4gICAgfSxcbiAgfVxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goIHByb2Nlc3MuZW52LldPUkRQUkVTU19MT0NBTF9BUElfVVJMLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcbiAgICAgIHF1ZXJ5OiBgXG4gICAgICAgIHF1ZXJ5IEFsbFBvc3RzIHtcbiAgICAgICAgICBwb3N0cyB7XG4gICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZVVybFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnN0IHBvc3RzID0ganNvbi5kYXRhLnBvc3RzLm5vZGVzO1xuXG4gIC8vIFdpbGwgZ2l2ZSB1cyBhbiBhcnJheSBvZiBwYXRocy5cbiAgY29uc3QgcGF0aHMgPSBwb3N0cy5tYXAoKCBwb3N0ICkgPT4gKHtcbiAgICBwYXJhbXM6IHsgc2x1ZzogcG9zdC5zbHVnIH0sXG4gIH0pKVxuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfSAvLyB1bnRpbGwgd2UgaGF2ZSBmYWxsYmFjaywgdXNlIGZhbHNlLlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ })

});