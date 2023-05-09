"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Contacts_Contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contacts/Contacts */ \"./components/Contacts/Contacts.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Main/Main */ \"./components/Main/Main.js\");\n/* harmony import */ var _components_apabilities_apabilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Сapabilities/Сapabilities */ \"./components/Сapabilities/Сapabilities.js\");\n/* harmony import */ var _components_Header_PopUpHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header/PopUpHeader */ \"./components/Header/PopUpHeader.js\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animationStore/IndexAnimationStore */ \"./animationStore/IndexAnimationStore.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _windowWatchers_WindowScrollWatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../windowWatchers/WindowScrollWatcher */ \"./windowWatchers/WindowScrollWatcher.js\");\n/* harmony import */ var _store_HeaderStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/HeaderStore */ \"./store/HeaderStore.js\");\n/* harmony import */ var _animationStore_HeaderAnimationStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../animationStore/HeaderAnimationStore */ \"./animationStore/HeaderAnimationStore.js\");\n/* harmony import */ var _components_UI_PopUpBlock_PopUpBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/UI/PopUpBlock/PopUpBlock */ \"./components/UI/PopUpBlock/PopUpBlock.js\");\n/* harmony import */ var _store_GlobalStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/GlobalStore */ \"./store/GlobalStore.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const [shopPopUpHeader, setShowPopUpHeader] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [shopPopUpBlock, setShowPopUpBlock] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const popUpHeaderScrollWatcher = new _windowWatchers_WindowScrollWatcher__WEBPACK_IMPORTED_MODULE_10__[\"default\"]([\n            [\n                0,\n                150\n            ],\n            [\n                150,\n                2000\n            ]\n        ], [\n            ()=>setShowPopUpHeader(false),\n            ()=>setShowPopUpHeader(true)\n        ], ()=>{});\n        const activeAchorScrollWatcher = new _windowWatchers_WindowScrollWatcher__WEBPACK_IMPORTED_MODULE_10__[\"default\"]([\n            [\n                0,\n                450\n            ],\n            [\n                450,\n                810\n            ],\n            [\n                810,\n                2000\n            ]\n        ], [\n            ()=>_store_HeaderStore__WEBPACK_IMPORTED_MODULE_11__[\"default\"].setAnshorActive(0),\n            ()=>_store_HeaderStore__WEBPACK_IMPORTED_MODULE_11__[\"default\"].setAnshorActive(1),\n            ()=>_store_HeaderStore__WEBPACK_IMPORTED_MODULE_11__[\"default\"].setAnshorActive(2)\n        ], ()=>_animationStore_HeaderAnimationStore__WEBPACK_IMPORTED_MODULE_12__[\"default\"].clearAnimations());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"12a3a71be2b451ce\",\n                children: \"*{margin:0px;padding:0px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:default}body{background:-webkit-linear-gradient(300.24deg,#0e0e2c 2.05%,#02020c 108.04%);background:-moz-linear-gradient(300.24deg,#0e0e2c 2.05%,#02020c 108.04%);background:-o-linear-gradient(300.24deg,#0e0e2c 2.05%,#02020c 108.04%);background:linear-gradient(149.76deg,#0e0e2c 2.05%,#02020c 108.04%);mix-blend-mode:normal;overflow-x:hidden}\"\n            }, void 0, false, void 0, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_15__.AnimatePresence, {\n                children: shopPopUpHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_PopUpHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    initial: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpHeader.initial,\n                    animate: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpHeader.animate,\n                    exit: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpHeader.exit\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 64,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_15__.AnimatePresence, {\n                children: _store_GlobalStore__WEBPACK_IMPORTED_MODULE_14__[\"default\"].popUpBlockText != \"\" && shopPopUpBlock && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_PopUpBlock_PopUpBlock__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    onCloseClick: ()=>setShowPopUpBlock(false),\n                    initial: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpBlock.initial,\n                    animate: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpBlock.animate,\n                    exit: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpBlock.exit,\n                    children: _store_GlobalStore__WEBPACK_IMPORTED_MODULE_14__[\"default\"].popUpBlockText || popUpBlockTextSSR\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Main__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_apabilities_apabilities__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contacts_Contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"dbpoI+Bv2mo7dIAxjbalxL7ikmw=\");\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__.observer)(Index));\nvar _c, _c1;\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNXO0FBQ047QUFDTjtBQUN3QjtBQUNSO0FBQ2hCO0FBQzZCO0FBQ3hCO0FBQ2tCO0FBQ25CO0FBQzJCO0FBQ1Y7QUFDakI7QUFJOUMsTUFBTWUsUUFBUSxJQUFNOztJQUNqQixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU0sQ0FBQ2lCLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2IsTUFBTW9CLDJCQUEyQixJQUFJViw0RUFBYUEsQ0FDL0M7WUFDRztnQkFBQztnQkFBRzthQUFJO1lBQ1I7Z0JBQUM7Z0JBQUs7YUFBSztTQUNiLEVBQ0Q7WUFBQyxJQUFNTyxtQkFBbUIsS0FBSztZQUFHLElBQU1BLG1CQUFtQixJQUFJO1NBQUUsRUFDakUsSUFBTSxDQUFDO1FBRVYsTUFBTUksMkJBQTJCLElBQUlYLDRFQUFhQSxDQUMvQztZQUNHO2dCQUFDO2dCQUFHO2FBQUk7WUFDUjtnQkFBQztnQkFBSzthQUFJO1lBQ1Y7Z0JBQUM7Z0JBQUs7YUFBSztTQUNiLEVBQ0Q7WUFDRyxJQUFNQywyRUFBMkIsQ0FBQztZQUNsQyxJQUFNQSwyRUFBMkIsQ0FBQztZQUNsQyxJQUFNQSwyRUFBMkIsQ0FBQztTQUNwQyxFQUNELElBQU1DLDZGQUFvQztJQUVoRCxHQUFHLEVBQUU7SUFDTCxxQkFDRzs7Ozs7OzBCQWdCRyw4REFBQ1QsaUVBQU1BOzs7OzswQkFDUCw4REFBQ00sMkRBQWVBOzBCQUNaTyxpQ0FDRSw4REFBQ1Ysc0VBQVdBO29CQUNUa0IsU0FBU2hCLCtGQUF1QztvQkFDaERrQixTQUFTbEIsK0ZBQXVDO29CQUNoRG1CLE1BQU1uQiw0RkFBb0M7Ozs7Ozs7Ozs7OzBCQUluRCw4REFBQ0MsMkRBQWVBOzBCQUNaSywwRUFBMEIsSUFBSSxNQUFNSSxnQ0FDbEMsOERBQUNMLDZFQUFVQTtvQkFDUmdCLGNBQWMsSUFBTVYsa0JBQWtCLEtBQUs7b0JBQzNDSyxTQUFTaEIsOEZBQXNDO29CQUMvQ2tCLFNBQVNsQiw4RkFBc0M7b0JBQy9DbUIsTUFBTW5CLDJGQUFtQzs4QkFFeENNLDBFQUEwQixJQUFJaUI7Ozs7Ozs7Ozs7OzBCQUl4Qyw4REFBQzNCLDZEQUFJQTs7Ozs7MEJBQ0wsOERBQUNDLDJFQUFZQTs7Ozs7MEJBQ2IsOERBQUNILHFFQUFRQTs7Ozs7OztBQUdsQjtHQXRFTWE7S0FBQUE7O0FBc0ZOLCtEQUFlLE1BQUFSLHlEQUFRQSxDQUFDUSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDb250YWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWN0cy9Db250YWN0c1wiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiXHJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL01haW4vTWFpblwiXHJcbmltcG9ydCBDYXBhYmlsaXRpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMv0KFhcGFiaWxpdGllcy/QoWFwYWJpbGl0aWVzXCJcclxuaW1wb3J0IFBvcFVwSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9Qb3BVcEhlYWRlclwiXHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiXHJcbmltcG9ydCBJbmRleEFuaW1hdGlvblN0b3JlIGZyb20gXCIuLi9hbmltYXRpb25TdG9yZS9JbmRleEFuaW1hdGlvblN0b3JlXCJcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgU2Nyb2xsV2F0Y2hlciBmcm9tIFwiLi4vd2luZG93V2F0Y2hlcnMvV2luZG93U2Nyb2xsV2F0Y2hlclwiXHJcbmltcG9ydCBIZWFkZXJTdG9yZSBmcm9tIFwiLi4vc3RvcmUvSGVhZGVyU3RvcmVcIlxyXG5pbXBvcnQgSGVhZGVyQW5pbWF0aW9uU3RvcmUgZnJvbSBcIi4uL2FuaW1hdGlvblN0b3JlL0hlYWRlckFuaW1hdGlvblN0b3JlXCJcclxuaW1wb3J0IFBvcFVwQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvVUkvUG9wVXBCbG9jay9Qb3BVcEJsb2NrXCJcclxuaW1wb3J0IEdsb2JhbFN0b3JlIGZyb20gXCIuLi9zdG9yZS9HbG9iYWxTdG9yZVwiXHJcbmltcG9ydCBtZXNzYWdlVG9DdXN0b21lcnNBUEkgZnJvbSBcIi4uL0FQSS9tZXNzYWdlVG9DdXN0b21lcnNBUElcIlxyXG5pbXBvcnQgY29udGFjdEFQSSBmcm9tIFwiLi4vQVBJL2NvbnRhY3RBUElcIlxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgIGNvbnN0IFtzaG9wUG9wVXBIZWFkZXIsIHNldFNob3dQb3BVcEhlYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgY29uc3QgW3Nob3BQb3BVcEJsb2NrLCBzZXRTaG93UG9wVXBCbG9ja10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBwb3BVcEhlYWRlclNjcm9sbFdhdGNoZXIgPSBuZXcgU2Nyb2xsV2F0Y2hlcihcclxuICAgICAgICAgW1xyXG4gICAgICAgICAgICBbMCwgMTUwXSxcclxuICAgICAgICAgICAgWzE1MCwgMjAwMF0sXHJcbiAgICAgICAgIF0sXHJcbiAgICAgICAgIFsoKSA9PiBzZXRTaG93UG9wVXBIZWFkZXIoZmFsc2UpLCAoKSA9PiBzZXRTaG93UG9wVXBIZWFkZXIodHJ1ZSldLFxyXG4gICAgICAgICAoKSA9PiB7fVxyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IGFjdGl2ZUFjaG9yU2Nyb2xsV2F0Y2hlciA9IG5ldyBTY3JvbGxXYXRjaGVyKFxyXG4gICAgICAgICBbXHJcbiAgICAgICAgICAgIFswLCA0NTBdLFxyXG4gICAgICAgICAgICBbNDUwLCA4MTBdLFxyXG4gICAgICAgICAgICBbODEwLCAyMDAwXSxcclxuICAgICAgICAgXSxcclxuICAgICAgICAgW1xyXG4gICAgICAgICAgICAoKSA9PiBIZWFkZXJTdG9yZS5zZXRBbnNob3JBY3RpdmUoMCksXHJcbiAgICAgICAgICAgICgpID0+IEhlYWRlclN0b3JlLnNldEFuc2hvckFjdGl2ZSgxKSxcclxuICAgICAgICAgICAgKCkgPT4gSGVhZGVyU3RvcmUuc2V0QW5zaG9yQWN0aXZlKDIpLFxyXG4gICAgICAgICBdLFxyXG4gICAgICAgICAoKSA9PiBIZWFkZXJBbmltYXRpb25TdG9yZS5jbGVhckFuaW1hdGlvbnMoKVxyXG4gICAgICApXHJcbiAgIH0sIFtdKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OS43NmRlZywgIzBlMGUyYyAyLjA1JSwgIzAyMDIwYyAxMDguMDQlKTtcclxuICAgICAgICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgICAge3Nob3BQb3BVcEhlYWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgIDxQb3BVcEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXtJbmRleEFuaW1hdGlvblN0b3JlLnBvcFVwSGVhZGVyLmluaXRpYWx9XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e0luZGV4QW5pbWF0aW9uU3RvcmUucG9wVXBIZWFkZXIuYW5pbWF0ZX1cclxuICAgICAgICAgICAgICAgICAgZXhpdD17SW5kZXhBbmltYXRpb25TdG9yZS5wb3BVcEhlYWRlci5leGl0fVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgICAge0dsb2JhbFN0b3JlLnBvcFVwQmxvY2tUZXh0ICE9IFwiXCIgJiYgc2hvcFBvcFVwQmxvY2sgJiYgKFxyXG4gICAgICAgICAgICAgICA8UG9wVXBCbG9ja1xyXG4gICAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2s9eygpID0+IHNldFNob3dQb3BVcEJsb2NrKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17SW5kZXhBbmltYXRpb25TdG9yZS5wb3BVcEJsb2NrLmluaXRpYWx9XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e0luZGV4QW5pbWF0aW9uU3RvcmUucG9wVXBCbG9jay5hbmltYXRlfVxyXG4gICAgICAgICAgICAgICAgICBleGl0PXtJbmRleEFuaW1hdGlvblN0b3JlLnBvcFVwQmxvY2suZXhpdH1cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7R2xvYmFsU3RvcmUucG9wVXBCbG9ja1RleHQgfHwgcG9wVXBCbG9ja1RleHRTU1J9XHJcbiAgICAgICAgICAgICAgIDwvUG9wVXBCbG9jaz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgIDxDYXBhYmlsaXRpZXMgLz5cclxuICAgICAgICAgPENvbnRhY3RzIC8+XHJcbiAgICAgIDwvPlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgIGxldCB0ZXh0ID0gXCJcIlxyXG4gICBsZXQgY29udGFjdHMgPSB7fVxyXG4gICBhd2FpdCBtZXNzYWdlVG9DdXN0b21lcnNBUEkuZ2V0TWVzc2FnZVRvQ3VzdG9tZXJzKChyZXMpID0+ICh0ZXh0ID0gcmVzLmRhdGEpKVxyXG4gICBhd2FpdCBjb250YWN0QVBJLmdldENvbnRhY3RzKChyZXMpID0+IChjb250YWN0cyA9IHJlcy5kYXRhKSlcclxuICAgY29uc29sZS5sb2codGV4dClcclxuICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgcG9wVXBCbG9ja1RleHQ6IHRleHQsXHJcbiAgICAgICAgIHBob25lOiBjb250YWN0cy5waG9uZSxcclxuICAgICAgICAgYWRyZXNzOiBjb250YWN0cy5hZHJlc3MsXHJcbiAgICAgIH0sXHJcbiAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihJbmRleClcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFjdHMiLCJIZWFkZXIiLCJNYWluIiwiQ2FwYWJpbGl0aWVzIiwiUG9wVXBIZWFkZXIiLCJvYnNlcnZlciIsIkluZGV4QW5pbWF0aW9uU3RvcmUiLCJBbmltYXRlUHJlc2VuY2UiLCJTY3JvbGxXYXRjaGVyIiwiSGVhZGVyU3RvcmUiLCJIZWFkZXJBbmltYXRpb25TdG9yZSIsIlBvcFVwQmxvY2siLCJHbG9iYWxTdG9yZSIsIkluZGV4Iiwic2hvcFBvcFVwSGVhZGVyIiwic2V0U2hvd1BvcFVwSGVhZGVyIiwic2hvcFBvcFVwQmxvY2siLCJzZXRTaG93UG9wVXBCbG9jayIsInBvcFVwSGVhZGVyU2Nyb2xsV2F0Y2hlciIsImFjdGl2ZUFjaG9yU2Nyb2xsV2F0Y2hlciIsInNldEFuc2hvckFjdGl2ZSIsImNsZWFyQW5pbWF0aW9ucyIsImluaXRpYWwiLCJwb3BVcEhlYWRlciIsImFuaW1hdGUiLCJleGl0IiwicG9wVXBCbG9ja1RleHQiLCJvbkNsb3NlQ2xpY2siLCJwb3BVcEJsb2NrIiwicG9wVXBCbG9ja1RleHRTU1IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});