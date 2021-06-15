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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/haffy/Woonderland/HTTPD/njord/njord-web/pages/posts/[slug].js\";\n\n\nfunction Post({\n  data\n}) {\n  // console.log({data});\n  // FLYTTA TILL INDEX OCH GÖR OM TILL SINGLE-POST.\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n      children: data.posts.nodes.map(post => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: `/posts/${post.slug}`,\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 15\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n  ssrMode: true,\n  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({\n    uri: process.env.WORDPRESS_LOCAL_SITE_URL,\n    credentials: 'same-origin'\n  }),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\n\nconst SsgApollo = ({\n  data\n}) => {//data will be rendered here \n};\n\nasync function getServerSideProps() {\n  const {\n    data\n  } = await client.query({\n    query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n      query AllPosts {\n        posts {\n          nodes {\n            slug\n            title\n            content\n            featuredImage {\n              node {\n                sourceUrl\n              }\n            }\n          }\n        }\n      }\n    `\n  });\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uam9yZC13ZWIvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/ZGVjOSJdLCJuYW1lcyI6WyJQb3N0IiwiZGF0YSIsInBvc3RzIiwibm9kZXMiLCJtYXAiLCJwb3N0Iiwic2x1ZyIsInRpdGxlIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJjcmVhdGVIdHRwTGluayIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJXT1JEUFJFU1NfTE9DQUxfU0lURV9VUkwiLCJjcmVkZW50aWFscyIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIlNzZ0Fwb2xsbyIsImdldFNlcnZlclNpZGVQcm9wcyIsInF1ZXJ5IiwiZ3FsIiwibm90Rm91bmQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWU7QUFBQ0M7QUFBRCxDQUFmLEVBQXdCO0FBRXJDO0FBRUE7QUFFQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsZ0JBR0lBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFzQkMsSUFBSSxJQUFJO0FBQzVCLDRCQUNFO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUcsVUFBU0EsSUFBSSxDQUFDQyxJQUFLLEVBQWhDO0FBQUEsd0JBQW9DRCxJQUFJLENBQUNFO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQU9ELE9BUkQ7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEO0FBR0QsTUFBTUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQWlCO0FBQzlCQyxTQUFPLEVBQUUsSUFEcUI7QUFFOUJDLE1BQUksRUFBRUMsOERBQWMsQ0FBQztBQUNuQkMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsd0JBREU7QUFFbkJDLGVBQVcsRUFBRTtBQUZNLEdBQUQsQ0FGVTtBQU05QkMsT0FBSyxFQUFFLElBQUlDLHlEQUFKO0FBTnVCLENBQWpCLENBQWY7O0FBU0EsTUFBTUMsU0FBUyxHQUFHLENBQUM7QUFBRW5CO0FBQUYsQ0FBRCxLQUFjLENBQzlCO0FBQ0QsQ0FGRDs7QUFJTyxlQUFlb0Isa0JBQWYsR0FBb0M7QUFFekMsUUFBTTtBQUFFcEI7QUFBRixNQUFXLE1BQU1PLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhO0FBQ2xDQSxTQUFLLEVBQUVDLCtDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJzQyxHQUFiLENBQXZCOztBQW1CQSxNQUFJLENBQUN0QixJQUFMLEVBQVc7QUFDVCxXQUFPO0FBQUV1QixjQUFRLEVBQUU7QUFBWixLQUFQO0FBQ0Q7O0FBQ0QsU0FBTztBQUFFQyxTQUFLLEVBQUU7QUFBRXhCO0FBQUY7QUFBVCxHQUFQO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGNyZWF0ZUh0dHBMaW5rLCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgge2RhdGF9ICkge1xuXG4gIC8vIGNvbnNvbGUubG9nKHtkYXRhfSk7XG5cbiAgLy8gRkxZVFRBIFRJTEwgSU5ERVggT0NIIEfDllIgT00gVElMTCBTSU5HTEUtUE9TVC5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dWw+ICBcbiAgICAgIFxuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5wb3N0cy5ub2Rlcy5tYXAoIHBvc3QgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+e3Bvc3QudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG4gIFxufVxuXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBzc3JNb2RlOiB0cnVlLFxuICBsaW5rOiBjcmVhdGVIdHRwTGluayh7XG4gICAgdXJpOiBwcm9jZXNzLmVudi5XT1JEUFJFU1NfTE9DQUxfU0lURV9VUkwsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgfSksXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5cbmNvbnN0IFNzZ0Fwb2xsbyA9ICh7IGRhdGEgfSkgPT4ge1xuICAvL2RhdGEgd2lsbCBiZSByZW5kZXJlZCBoZXJlIFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgQWxsUG9zdHMge1xuICAgICAgICBwb3N0cyB7XG4gICAgICAgICAgbm9kZXMge1xuICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gIH0pO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07XG4gIH1cbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/posts/[slug].js"); });
module.exports = __webpack_exports__;

})();