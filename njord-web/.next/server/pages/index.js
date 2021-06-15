/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/haffy/Woonderland/HTTPD/njord/njord-web/pages/index.js\";\n\n\nfunction Home({\n  posts\n}) {\n  console.log({\n    posts\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"NJORD\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"container bg-gray-200 mt-5 max-w-md mx-auto rounded-lg p-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-5xl text-center pt-3\",\n        children: \"NJORD\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-center pt-5\",\n        children: \"Print some data from WP:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-center pt-5 pb-8\",\n        children: posts.nodes.map(post => {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: `/posts/${post.slug}`,\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 19\n            }, this)\n          }, \"{post.slug}\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 17\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n      className: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n} // Run out query inside here.\n\nasync function getStaticProps() {\n  const res = await fetch(process.env.WORDPRESS_LOCAL_API_URL, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: `\n        query Posts {\n          posts {\n            nodes {\n              slug\n              title\n            }\n          }\n        }\n      `\n    })\n  });\n  const json = await res.json();\n  return {\n    props: {\n      posts: json.data.posts\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uam9yZC13ZWIvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJub2RlcyIsIm1hcCIsInBvc3QiLCJzbHVnIiwidGl0bGUiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIldPUkRQUkVTU19MT0NBTF9BUElfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJqc29uIiwicHJvcHMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBZTtBQUFDQztBQUFELENBQWYsRUFBeUI7QUFDdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNGO0FBQUQsR0FBWjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQU0sZUFBUyxFQUFDLDREQUFoQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQywyQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFTRTtBQUFHLGlCQUFTLEVBQUMsdUJBQWI7QUFBQSxrQkFFSUEsS0FBSyxDQUFDRyxLQUFOLENBQVlDLEdBQVosQ0FBaUJDLElBQUksSUFBSTtBQUN2Qiw4QkFDRTtBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBRyxVQUFTQSxJQUFJLENBQUNDLElBQUssRUFBaEM7QUFBQSx3QkFBb0NELElBQUksQ0FBQ0U7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVEsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBS0QsU0FORDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQTRCRTtBQUFRLGVBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNELEMsQ0FFRDs7QUFDTyxlQUFlQyxjQUFmLEdBQWdDO0FBRXJDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx1QkFBZCxFQUF1QztBQUM1REMsVUFBTSxFQUFFLE1BRG9EO0FBRTVEQyxXQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEIsS0FGbUQ7QUFHNURDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFdBQUssRUFBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZ5QixLQUFmO0FBSHNELEdBQXZDLENBQXZCO0FBaUJBLFFBQU1DLElBQUksR0FBRyxNQUFNWCxHQUFHLENBQUNXLElBQUosRUFBbkI7QUFFQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMckIsV0FBSyxFQUFFb0IsSUFBSSxDQUFDRSxJQUFMLENBQVV0QjtBQURaO0FBREYsR0FBUDtBQU1EIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoIHtwb3N0c30gKSB7XG4gIGNvbnNvbGUubG9nKHtwb3N0c30pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OSk9SRDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBiZy1ncmF5LTIwMCBtdC01IG1heC13LW1kIG14LWF1dG8gcm91bmRlZC1sZyBwLTVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtY2VudGVyIHB0LTNcIj5cbiAgICAgICAgICBOSk9SRFxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTVcIj5cbiAgICAgICAgICBQcmludCBzb21lIGRhdGEgZnJvbSBXUDpcbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTUgcGItOFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvc3RzLm5vZGVzLm1hcCggcG9zdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHVsIGtleT1cIntwb3N0LnNsdWd9XCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9Pntwb3N0LnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9wPlxuICAgICAgPC9tYWluPlxuICAgICAgICBcblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIFJ1biBvdXQgcXVlcnkgaW5zaWRlIGhlcmUuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goIHByb2Nlc3MuZW52LldPUkRQUkVTU19MT0NBTF9BUElfVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcbiAgICAgIHF1ZXJ5OiBgXG4gICAgICAgIHF1ZXJ5IFBvc3RzIHtcbiAgICAgICAgICBwb3N0cyB7XG4gICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBqc29uLmRhdGEucG9zdHMsXG4gICAgfSxcbiAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();