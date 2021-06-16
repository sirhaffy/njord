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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/haffy/Woonderland/HTTPD/njord/njord-web/pages/index.js\";\n\n\n\nfunction Home({\n  data\n}) {\n  // console.log({data});\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"NJORD\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"container bg-gray-200 mt-5 max-w-md mx-auto rounded-lg p-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-5xl text-center pt-3\",\n        children: \"NJORD\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-center pt-5\",\n        children: \"Print some data from WP:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-center pt-5 pb-8\",\n        children: data.posts.nodes.map(post => {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: `/posts/${post.slug}`,\n                children: post.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 20\n              }, this), \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 19\n            }, this)\n          }, \"{post.slug}\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 17\n          }, this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n      className: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n} // Run out query inside here.\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({\n  ssrMode: true,\n  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.createHttpLink)({\n    uri: process.env.WORDPRESS_LOCAL_SITE_URL,\n    credentials: 'same-origin'\n  }),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache()\n});\nasync function getServerSideProps() {\n  const {\n    data\n  } = await client.query({\n    query: _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`\n      query AllPosts {\n        posts {\n          nodes {\n            slug\n            title\n            content\n            featuredImage {\n              node {\n                sourceUrl\n              }\n            }\n          }\n        }\n      }\n    `\n  });\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uam9yZC13ZWIvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJkYXRhIiwicG9zdHMiLCJub2RlcyIsIm1hcCIsInBvc3QiLCJzbHVnIiwidGl0bGUiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwicHJvY2VzcyIsImVudiIsIldPUkRQUkVTU19MT0NBTF9TSVRFX1VSTCIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicXVlcnkiLCJncWwiLCJub3RGb3VuZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWU7QUFBQ0M7QUFBRCxDQUFmLEVBQXdCO0FBQ3JDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBTSxlQUFTLEVBQUMsNERBQWhCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLDJCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFHLGlCQUFTLEVBQUMsa0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFO0FBQUcsaUJBQVMsRUFBQyx1QkFBYjtBQUFBLGtCQUVJQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBc0JDLElBQUksSUFBSTtBQUM1Qiw4QkFDRTtBQUFBLG1DQUNFO0FBQUEsc0NBQ0MsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFHLFVBQVNBLElBQUksQ0FBQ0MsSUFBSyxFQUFoQztBQUFBLDBCQUFvQ0QsSUFBSSxDQUFDRTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVEsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBT0QsU0FSRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQThCRTtBQUFRLGVBQVMsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNELEMsQ0FFRDs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsd0RBQUosQ0FBaUI7QUFDOUJDLFNBQU8sRUFBRSxJQURxQjtBQUU5QkMsTUFBSSxFQUFFQyw4REFBYyxDQUFDO0FBQ25CQyxPQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyx3QkFERTtBQUVuQkMsZUFBVyxFQUFFO0FBRk0sR0FBRCxDQUZVO0FBTTlCQyxPQUFLLEVBQUUsSUFBSUMseURBQUo7QUFOdUIsQ0FBakIsQ0FBZjtBQVNPLGVBQWVDLGtCQUFmLEdBQW9DO0FBRXpDLFFBQU07QUFBRW5CO0FBQUYsTUFBVyxNQUFNTyxNQUFNLENBQUNhLEtBQVAsQ0FBYTtBQUNsQ0EsU0FBSyxFQUFFQywrQ0FBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCc0MsR0FBYixDQUF2Qjs7QUFtQkEsTUFBSSxDQUFDckIsSUFBTCxFQUFXO0FBQ1QsV0FBTztBQUFFc0IsY0FBUSxFQUFFO0FBQVosS0FBUDtBQUNEOztBQUNELFNBQU87QUFBRUMsU0FBSyxFQUFFO0FBQUV2QjtBQUFGO0FBQVQsR0FBUDtBQUNEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGNyZWF0ZUh0dHBMaW5rLCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgge2RhdGF9ICkge1xuICAvLyBjb25zb2xlLmxvZyh7ZGF0YX0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TkpPUkQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgYmctZ3JheS0yMDAgbXQtNSBtYXgtdy1tZCBteC1hdXRvIHJvdW5kZWQtbGcgcC01XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWNlbnRlciBwdC0zXCI+XG4gICAgICAgICAgTkpPUkRcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC01XCI+XG4gICAgICAgICAgUHJpbnQgc29tZSBkYXRhIGZyb20gV1A6XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC01IHBiLThcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLnBvc3RzLm5vZGVzLm1hcCggcG9zdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHVsIGtleT1cIntwb3N0LnNsdWd9XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfT57cG9zdC50aXRsZX08L0xpbms+IHsvKiA8LS0tLSBUUk9SIEZFTEVUIMOEUiBIw4RSICAqL31cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvbWFpbj5cbiAgICAgICAgXG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBSdW4gb3V0IHF1ZXJ5IGluc2lkZSBoZXJlLlxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHNzck1vZGU6IHRydWUsXG4gIGxpbms6IGNyZWF0ZUh0dHBMaW5rKHtcbiAgICB1cmk6IHByb2Nlc3MuZW52LldPUkRQUkVTU19MT0NBTF9TSVRFX1VSTCxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICB9KSxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5IEFsbFBvc3RzIHtcbiAgICAgICAgcG9zdHMge1xuICAgICAgICAgIG5vZGVzIHtcbiAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgc291cmNlVXJsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICB9KTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4geyBub3RGb3VuZDogdHJ1ZSB9O1xuICB9XG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();