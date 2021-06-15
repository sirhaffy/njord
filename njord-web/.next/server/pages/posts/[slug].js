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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/haffy/Woonderland/HTTPD/njord/njord-web/pages/posts/[slug].js\";\n\nfunction Post(data) {\n  console.log({\n    data\n  });\n  const post = data.post;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"text-3xl text-center\",\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex justify-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        width: \"640\",\n        height: \"480\",\n        src: post.featuredImage.node.sourceUrl\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n      className: \"text-center\",\n      dangerouslySetInnerHTML: {\n        __html: post.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps(context) {\n  const res = await fetch('http://localhost:8888/njord/njord-cms/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: `\n      query SinglePost( $id: ID!, $idType: PostIdType! ) {\n        post(id: $id, idType: $idType) {\n          title\n          slug\n          content\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n      `,\n      variables: {\n        id: context.params.slug,\n        idType: 'SLUG'\n      }\n    })\n  });\n  const json = await res.json();\n  return {\n    props: {\n      post: json.data.post\n    }\n  };\n}\nasync function getStaticPaths() {\n  const res = await fetch(process.env.WORDPRESS_LOCAL_API_URL, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: `\n        query AllPosts {\n          posts {\n            nodes {\n              slug\n              title\n              content\n              featuredImage {\n                node {\n                  sourceUrl\n                }\n              }\n            }\n          }\n        }\n      `\n    })\n  });\n  const json = await res.json();\n  const posts = json.data.posts.nodes; // Will give us an array of paths.\n\n  const paths = posts.map(post => ({\n    params: {\n      slug: post.slug\n    }\n  }));\n  return {\n    paths,\n    fallback: false\n  }; // untill we have fallback, use false.\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uam9yZC13ZWIvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/ZGVjOSJdLCJuYW1lcyI6WyJQb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwidGl0bGUiLCJmZWF0dXJlZEltYWdlIiwibm9kZSIsInNvdXJjZVVybCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5IiwidmFyaWFibGVzIiwiaWQiLCJwYXJhbXMiLCJzbHVnIiwiaWRUeXBlIiwianNvbiIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwcm9jZXNzIiwiZW52IiwiV09SRFBSRVNTX0xPQ0FMX0FQSV9VUkwiLCJwb3N0cyIsIm5vZGVzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULENBQWVDLElBQWYsRUFBc0I7QUFFbkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNGO0FBQUQsR0FBWjtBQUVBLFFBQU1HLElBQUksR0FBR0gsSUFBSSxDQUFDRyxJQUFsQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsc0JBQWQ7QUFBQSxnQkFBc0NBLElBQUksQ0FBQ0M7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUFPLGFBQUssRUFBQyxLQUFiO0FBQW1CLGNBQU0sRUFBQyxLQUExQjtBQUFnQyxXQUFHLEVBQUVELElBQUksQ0FBQ0UsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0JDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFLRTtBQUFTLGVBQVMsRUFBQyxhQUFuQjtBQUFpQyw2QkFBdUIsRUFBRTtBQUFDQyxjQUFNLEVBQUVMLElBQUksQ0FBQ007QUFBZDtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDtBQUVNLGVBQWVDLGNBQWYsQ0FBK0JDLE9BQS9CLEVBQXlDO0FBRTlDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsK0NBQUYsRUFBbUQ7QUFDMUVDLFVBQU0sRUFBRSxNQURrRTtBQUUxRUMsV0FBTyxFQUFFO0FBQUUsc0JBQWdCO0FBQWxCLEtBRmlFO0FBRzFFQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxXQUFLLEVBQUc7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQWR1QjtBQWVqQkMsZUFBUyxFQUFFO0FBQ1RDLFVBQUUsRUFBRVYsT0FBTyxDQUFDVyxNQUFSLENBQWVDLElBRFY7QUFFVEMsY0FBTSxFQUFFO0FBRkM7QUFmTSxLQUFmO0FBSG9FLEdBQW5ELENBQXZCO0FBeUJBLFFBQU1DLElBQUksR0FBRyxNQUFNYixHQUFHLENBQUNhLElBQUosRUFBbkI7QUFFQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMdkIsVUFBSSxFQUFFc0IsSUFBSSxDQUFDekIsSUFBTCxDQUFVRztBQURYO0FBREYsR0FBUDtBQU1EO0FBRU0sZUFBZXdCLGNBQWYsR0FBZ0M7QUFDckMsUUFBTWYsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRWUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHVCQUFkLEVBQXVDO0FBQzlEaEIsVUFBTSxFQUFFLE1BRHNEO0FBRTlEQyxXQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEIsS0FGcUQ7QUFHOURDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJDLFdBQUssRUFBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCdUIsS0FBZjtBQUh3RCxHQUF2QyxDQUF2QjtBQXVCQSxRQUFNTSxJQUFJLEdBQUcsTUFBTWIsR0FBRyxDQUFDYSxJQUFKLEVBQW5CO0FBQ0EsUUFBTU0sS0FBSyxHQUFHTixJQUFJLENBQUN6QixJQUFMLENBQVUrQixLQUFWLENBQWdCQyxLQUE5QixDQXpCcUMsQ0EyQnJDOztBQUNBLFFBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVkvQixJQUFGLEtBQWE7QUFDbkNtQixVQUFNLEVBQUU7QUFBRUMsVUFBSSxFQUFFcEIsSUFBSSxDQUFDb0I7QUFBYjtBQUQyQixHQUFiLENBQVYsQ0FBZDtBQUlBLFNBQU87QUFBRVUsU0FBRjtBQUFTRSxZQUFRLEVBQUU7QUFBbkIsR0FBUCxDQWhDcUMsQ0FnQ0g7QUFDbkMiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCggZGF0YSApIHtcbiAgXG4gIGNvbnNvbGUubG9nKHtkYXRhfSk7XG5cbiAgY29uc3QgcG9zdCA9IGRhdGEucG9zdDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZSB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjQ4MFwiIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLm5vZGUuc291cmNlVXJsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwb3N0LmNvbnRlbnR9fT48L2FydGljbGU+XG4gICAgPC9kaXY+XG4gIClcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoIGNvbnRleHQgKSB7XG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goICdodHRwOi8vbG9jYWxob3N0Ojg4ODgvbmpvcmQvbmpvcmQtY21zL2dyYXBocWwnLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcbiAgICBxdWVyeTogYFxuICAgICAgcXVlcnkgU2luZ2xlUG9zdCggJGlkOiBJRCEsICRpZFR5cGU6IFBvc3RJZFR5cGUhICkge1xuICAgICAgICBwb3N0KGlkOiAkaWQsIGlkVHlwZTogJGlkVHlwZSkge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGAsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgaWQ6IGNvbnRleHQucGFyYW1zLnNsdWcsXG4gICAgICAgIGlkVHlwZTogJ1NMVUcnXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IGpzb24uZGF0YS5wb3N0LFxuICAgIH0sXG4gIH1cblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCBwcm9jZXNzLmVudi5XT1JEUFJFU1NfTE9DQUxfQVBJX1VSTCwge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXG4gICAgICBxdWVyeTogYFxuICAgICAgICBxdWVyeSBBbGxQb3N0cyB7XG4gICAgICAgICAgcG9zdHMge1xuICAgICAgICAgICAgbm9kZXMge1xuICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICBzb3VyY2VVcmxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zdCBwb3N0cyA9IGpzb24uZGF0YS5wb3N0cy5ub2RlcztcblxuICAvLyBXaWxsIGdpdmUgdXMgYW4gYXJyYXkgb2YgcGF0aHMuXG4gIGNvbnN0IHBhdGhzID0gcG9zdHMubWFwKCggcG9zdCApID0+ICh7XG4gICAgcGFyYW1zOiB7IHNsdWc6IHBvc3Quc2x1ZyB9LFxuICB9KSlcblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH0gLy8gdW50aWxsIHdlIGhhdmUgZmFsbGJhY2ssIHVzZSBmYWxzZS5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./pages/posts/[slug].js"); });
module.exports = __webpack_exports__;

})();