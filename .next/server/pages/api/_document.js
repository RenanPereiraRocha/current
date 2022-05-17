"use strict";
(() => {
var exports = {};
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(580);
;// CONCATENATED MODULE: ./pages/api/_document.js


class MyDocument extends next_document["default"] {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(next_document.Html, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Inter&display=optional",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossorigin: true
                        }),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap",
                            rel: "stylesheet"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const _document = (MyDocument);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [580], () => (__webpack_exec__(9519)));
module.exports = __webpack_exports__;

})();