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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/haffy/Woonderland/HTTPD/njord/njord-web/pages/posts/[slug].js\";\n\n\n\nfunction Post({\n  data\n}) {\n  console.log({\n    data\n  });\n  const post = data.post;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"text-3xl text-center\",\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n        width: \"640\",\n        height: \"480\",\n        src: post.featuredImage.node.sourceUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      className: \"text-center\",\n      dangerouslySetInnerHTML: {\n        __html: post.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n  ssrMode: true,\n  link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({\n    uri: process.env.WORDPRESS_LOCAL_SITE_URL,\n    credentials: 'same-origin'\n  }),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\nasync function getServerSideProps(context) {\n  const {\n    data\n  } = await client.query({\n    query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n      query SinglePost( $id: ID!, $idType: PostIdType! ) {\n        post(id: $id, idType: $idType) {\n          title\n          slug\n          content\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    `,\n    variables: {\n      id: context.params.slug,\n      idType: 'SLUG'\n    }\n  });\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uam9yZC13ZWIvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/ZGVjOSJdLCJuYW1lcyI6WyJQb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwidGl0bGUiLCJmZWF0dXJlZEltYWdlIiwibm9kZSIsInNvdXJjZVVybCIsIl9faHRtbCIsImNvbnRlbnQiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNyZWF0ZUh0dHBMaW5rIiwidXJpIiwicHJvY2VzcyIsImVudiIsIldPUkRQUkVTU19MT0NBTF9TSVRFX1VSTCIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInF1ZXJ5IiwiZ3FsIiwidmFyaWFibGVzIiwiaWQiLCJwYXJhbXMiLCJzbHVnIiwiaWRUeXBlIiwibm90Rm91bmQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxDQUFlO0FBQUNDO0FBQUQsQ0FBZixFQUF3QjtBQUVyQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0Y7QUFBRCxHQUFaO0FBRUEsUUFBTUcsSUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQWxCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxzQkFBZDtBQUFBLGdCQUFzQ0EsSUFBSSxDQUFDQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBSyxFQUFDLEtBQWI7QUFBbUIsY0FBTSxFQUFDLEtBQTFCO0FBQWdDLFdBQUcsRUFBRUQsSUFBSSxDQUFDRSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QkM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUtFO0FBQVMsZUFBUyxFQUFDLGFBQW5CO0FBQWlDLDZCQUF1QixFQUFFO0FBQUNDLGNBQU0sRUFBRUwsSUFBSSxDQUFDTTtBQUFkO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEO0FBR0QsTUFBTUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQWlCO0FBQzlCQyxTQUFPLEVBQUUsSUFEcUI7QUFFOUJDLE1BQUksRUFBRUMsOERBQWMsQ0FBQztBQUNuQkMsT0FBRyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsd0JBREU7QUFFbkJDLGVBQVcsRUFBRTtBQUZNLEdBQUQsQ0FGVTtBQU05QkMsT0FBSyxFQUFFLElBQUlDLHlEQUFKO0FBTnVCLENBQWpCLENBQWY7QUFTTyxlQUFlQyxrQkFBZixDQUFtQ0MsT0FBbkMsRUFBNkM7QUFFbEQsUUFBTTtBQUFFdkI7QUFBRixNQUFXLE1BQU1VLE1BQU0sQ0FBQ2MsS0FBUCxDQUFhO0FBQ2xDQSxTQUFLLEVBQUVDLCtDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0Fkc0M7QUFlbENDLGFBQVMsRUFBRTtBQUNUQyxRQUFFLEVBQUVKLE9BQU8sQ0FBQ0ssTUFBUixDQUFlQyxJQURWO0FBRVRDLFlBQU0sRUFBRTtBQUZDO0FBZnVCLEdBQWIsQ0FBdkI7O0FBcUJBLE1BQUksQ0FBQzlCLElBQUwsRUFBVztBQUNULFdBQU87QUFBRStCLGNBQVEsRUFBRTtBQUFaLEtBQVA7QUFDRDs7QUFDRCxTQUFPO0FBQUVDLFNBQUssRUFBRTtBQUFFaEM7QUFBRjtBQUFULEdBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgY3JlYXRlSHR0cExpbmssIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCgge2RhdGF9ICkge1xuICBcbiAgY29uc29sZS5sb2coe2RhdGF9KTtcblxuICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPEltYWdlIHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiNDgwXCIgc3JjPXtwb3N0LmZlYXR1cmVkSW1hZ2Uubm9kZS5zb3VyY2VVcmx9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY29udGVudH19PjwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbiAgKVxuICBcbn1cblxuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgc3NyTW9kZTogdHJ1ZSxcbiAgbGluazogY3JlYXRlSHR0cExpbmsoe1xuICAgIHVyaTogcHJvY2Vzcy5lbnYuV09SRFBSRVNTX0xPQ0FMX1NJVEVfVVJMLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gIH0pLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCBjb250ZXh0ICkge1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgU2luZ2xlUG9zdCggJGlkOiBJRCEsICRpZFR5cGU6IFBvc3RJZFR5cGUhICkge1xuICAgICAgICBwb3N0KGlkOiAkaWQsIGlkVHlwZTogJGlkVHlwZSkge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IGNvbnRleHQucGFyYW1zLnNsdWcsXG4gICAgICBpZFR5cGU6ICdTTFVHJ1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHsgbm90Rm91bmQ6IHRydWUgfTtcbiAgfVxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./pages/posts/[slug].js"); });
module.exports = __webpack_exports__;

})();