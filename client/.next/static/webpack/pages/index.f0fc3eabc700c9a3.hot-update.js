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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Contacts_Contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contacts/Contacts */ \"./components/Contacts/Contacts.js\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.js\");\n/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Main/Main */ \"./components/Main/Main.js\");\n/* harmony import */ var _components_apabilities_apabilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Сapabilities/Сapabilities */ \"./components/Сapabilities/Сapabilities.js\");\n/* harmony import */ var _components_Header_PopUpHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header/PopUpHeader */ \"./components/Header/PopUpHeader.js\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n/* harmony import */ var _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animationStore/IndexAnimationStore */ \"./animationStore/IndexAnimationStore.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _windowWatchers_WindowScrollWatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../windowWatchers/WindowScrollWatcher */ \"./windowWatchers/WindowScrollWatcher.js\");\n/* harmony import */ var _store_HeaderStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/HeaderStore */ \"./store/HeaderStore.js\");\n/* harmony import */ var _animationStore_HeaderAnimationStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../animationStore/HeaderAnimationStore */ \"./animationStore/HeaderAnimationStore.js\");\n/* harmony import */ var _components_UI_PopUpBlock_PopUpBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/UI/PopUpBlock/PopUpBlock */ \"./components/UI/PopUpBlock/PopUpBlock.js\");\n/* harmony import */ var _store_GlobalStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/GlobalStore */ \"./store/GlobalStore.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Index = (param)=>{\n    let { popUpBlockTextSSR , contactsSSR  } = param;\n    _s();\n    const [shopPopUpHeader, setShowPopUpHeader] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [shopPopUpBlock, setShowPopUpBlock] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(contactsSSR);\n        const popUpHeaderScrollWatcher = new _windowWatchers_WindowScrollWatcher__WEBPACK_IMPORTED_MODULE_10__[\"default\"]([\n            [\n                0,\n                150\n            ],\n            [\n                150,\n                2000\n            ]\n        ], [\n            ()=>setShowPopUpHeader(false),\n            ()=>setShowPopUpHeader(true)\n        ], ()=>{});\n        const activeAchorScrollWatcher = new _windowWatchers_WindowScrollWatcher__WEBPACK_IMPORTED_MODULE_10__[\"default\"]([\n            [\n                0,\n                450\n            ],\n            [\n                450,\n                810\n            ],\n            [\n                810,\n                2000\n            ]\n        ], [\n            ()=>_store_HeaderStore__WEBPACK_IMPORTED_MODULE_11__[\"default\"].setAnshorActive(0),\n            ()=>_store_HeaderStore__WEBPACK_IMPORTED_MODULE_11__[\"default\"].setAnshorActive(1),\n            ()=>_store_HeaderStore__WEBPACK_IMPORTED_MODULE_11__[\"default\"].setAnshorActive(2)\n        ], ()=>_animationStore_HeaderAnimationStore__WEBPACK_IMPORTED_MODULE_12__[\"default\"].clearAnimations());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"12a3a71be2b451ce\",\n                children: \"*{margin:0px;padding:0px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:default}body{background:-webkit-linear-gradient(300.24deg,#0e0e2c 2.05%,#02020c 108.04%);background:-moz-linear-gradient(300.24deg,#0e0e2c 2.05%,#02020c 108.04%);background:-o-linear-gradient(300.24deg,#0e0e2c 2.05%,#02020c 108.04%);background:linear-gradient(149.76deg,#0e0e2c 2.05%,#02020c 108.04%);mix-blend-mode:normal;overflow-x:hidden}\"\n            }, void 0, false, void 0, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_15__.AnimatePresence, {\n                children: shopPopUpHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_PopUpHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    initial: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpHeader.initial,\n                    animate: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpHeader.animate,\n                    exit: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpHeader.exit\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_15__.AnimatePresence, {\n                children: popUpBlockTextSSR != \"\" && shopPopUpBlock && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UI_PopUpBlock_PopUpBlock__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                    onCloseClick: ()=>setShowPopUpBlock(false),\n                    initial: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpBlock.initial,\n                    animate: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpBlock.animate,\n                    exit: _animationStore_IndexAnimationStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"].popUpBlock.exit,\n                    children: _store_GlobalStore__WEBPACK_IMPORTED_MODULE_14__[\"default\"].popUpBlockText || popUpBlockTextSSR\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 16\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main_Main__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_apabilities_apabilities__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 10\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contacts_Contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\artyom\\\\Desktop\\\\ПРОЕКТЫ ПО РАЗРАБОТКЕ САЙТОВ\\\\ChatBotIo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Index, \"dbpoI+Bv2mo7dIAxjbalxL7ikmw=\");\n_c = Index;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__.observer)(Index));\nvar _c, _c1;\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNXO0FBQ047QUFDTjtBQUN3QjtBQUNSO0FBQ2hCO0FBQzZCO0FBQ3hCO0FBQ2tCO0FBQ25CO0FBQzJCO0FBQ1Y7QUFDakI7QUFJOUMsTUFBTWUsUUFBUSxTQUF3QztRQUF2QyxFQUFFQyxrQkFBaUIsRUFBRUMsWUFBVyxFQUFFOztJQUM5QyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdsQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU0sQ0FBQ21CLGdCQUFnQkMsa0JBQWtCLEdBQUdwQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2JzQixRQUFRQyxHQUFHLENBQUNOO1FBQ1osTUFBTU8sMkJBQTJCLElBQUlkLDRFQUFhQSxDQUMvQztZQUNHO2dCQUFDO2dCQUFHO2FBQUk7WUFDUjtnQkFBQztnQkFBSzthQUFLO1NBQ2IsRUFDRDtZQUFDLElBQU1TLG1CQUFtQixLQUFLO1lBQUcsSUFBTUEsbUJBQW1CLElBQUk7U0FBRSxFQUNqRSxJQUFNLENBQUM7UUFFVixNQUFNTSwyQkFBMkIsSUFBSWYsNEVBQWFBLENBQy9DO1lBQ0c7Z0JBQUM7Z0JBQUc7YUFBSTtZQUNSO2dCQUFDO2dCQUFLO2FBQUk7WUFDVjtnQkFBQztnQkFBSzthQUFLO1NBQ2IsRUFDRDtZQUNHLElBQU1DLDJFQUEyQixDQUFDO1lBQ2xDLElBQU1BLDJFQUEyQixDQUFDO1lBQ2xDLElBQU1BLDJFQUEyQixDQUFDO1NBQ3BDLEVBQ0QsSUFBTUMsNkZBQW9DO0lBRWhELEdBQUcsRUFBRTtJQUNMLHFCQUNHOzs7Ozs7MEJBZ0JHLDhEQUFDVCxpRUFBTUE7Ozs7OzBCQUNQLDhEQUFDTSwyREFBZUE7MEJBQ1pTLGlDQUNFLDhEQUFDWixzRUFBV0E7b0JBQ1RzQixTQUFTcEIsK0ZBQXVDO29CQUNoRHNCLFNBQVN0QiwrRkFBdUM7b0JBQ2hEdUIsTUFBTXZCLDRGQUFvQzs7Ozs7Ozs7Ozs7MEJBSW5ELDhEQUFDQywyREFBZUE7MEJBQ1pPLHFCQUFxQixNQUFNSSxnQ0FDekIsOERBQUNQLDZFQUFVQTtvQkFDUm1CLGNBQWMsSUFBTVgsa0JBQWtCLEtBQUs7b0JBQzNDTyxTQUFTcEIsOEZBQXNDO29CQUMvQ3NCLFNBQVN0Qiw4RkFBc0M7b0JBQy9DdUIsTUFBTXZCLDJGQUFtQzs4QkFFeENNLDBFQUEwQixJQUFJRTs7Ozs7Ozs7Ozs7MEJBSXhDLDhEQUFDWiw2REFBSUE7Ozs7OzBCQUNMLDhEQUFDQywyRUFBWUE7Ozs7OzBCQUNiLDhEQUFDSCxxRUFBUUE7Ozs7Ozs7QUFHbEI7R0F2RU1hO0tBQUFBOztBQXFGTiwrREFBZSxNQUFBUix5REFBUUEsQ0FBQ1EsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQ29udGFjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFjdHMvQ29udGFjdHNcIlxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIlxyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluL01haW5cIlxyXG5pbXBvcnQgQ2FwYWJpbGl0aWVzIGZyb20gXCIuLi9jb21wb25lbnRzL9ChYXBhYmlsaXRpZXMv0KFhcGFiaWxpdGllc1wiXHJcbmltcG9ydCBQb3BVcEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIvUG9wVXBIZWFkZXJcIlxyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0LWxpdGVcIlxyXG5pbXBvcnQgSW5kZXhBbmltYXRpb25TdG9yZSBmcm9tIFwiLi4vYW5pbWF0aW9uU3RvcmUvSW5kZXhBbmltYXRpb25TdG9yZVwiXHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuaW1wb3J0IFNjcm9sbFdhdGNoZXIgZnJvbSBcIi4uL3dpbmRvd1dhdGNoZXJzL1dpbmRvd1Njcm9sbFdhdGNoZXJcIlxyXG5pbXBvcnQgSGVhZGVyU3RvcmUgZnJvbSBcIi4uL3N0b3JlL0hlYWRlclN0b3JlXCJcclxuaW1wb3J0IEhlYWRlckFuaW1hdGlvblN0b3JlIGZyb20gXCIuLi9hbmltYXRpb25TdG9yZS9IZWFkZXJBbmltYXRpb25TdG9yZVwiXHJcbmltcG9ydCBQb3BVcEJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL1BvcFVwQmxvY2svUG9wVXBCbG9ja1wiXHJcbmltcG9ydCBHbG9iYWxTdG9yZSBmcm9tIFwiLi4vc3RvcmUvR2xvYmFsU3RvcmVcIlxyXG5pbXBvcnQgbWVzc2FnZVRvQ3VzdG9tZXJzQVBJIGZyb20gXCIuLi9BUEkvbWVzc2FnZVRvQ3VzdG9tZXJzQVBJXCJcclxuaW1wb3J0IGNvbnRhY3RBUEkgZnJvbSBcIi4uL0FQSS9jb250YWN0QVBJXCJcclxuXHJcbmNvbnN0IEluZGV4ID0gKHsgcG9wVXBCbG9ja1RleHRTU1IsIGNvbnRhY3RzU1NSIH0pID0+IHtcclxuICAgY29uc3QgW3Nob3BQb3BVcEhlYWRlciwgc2V0U2hvd1BvcFVwSGVhZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICBjb25zdCBbc2hvcFBvcFVwQmxvY2ssIHNldFNob3dQb3BVcEJsb2NrXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRhY3RzU1NSKVxyXG4gICAgICBjb25zdCBwb3BVcEhlYWRlclNjcm9sbFdhdGNoZXIgPSBuZXcgU2Nyb2xsV2F0Y2hlcihcclxuICAgICAgICAgW1xyXG4gICAgICAgICAgICBbMCwgMTUwXSxcclxuICAgICAgICAgICAgWzE1MCwgMjAwMF0sXHJcbiAgICAgICAgIF0sXHJcbiAgICAgICAgIFsoKSA9PiBzZXRTaG93UG9wVXBIZWFkZXIoZmFsc2UpLCAoKSA9PiBzZXRTaG93UG9wVXBIZWFkZXIodHJ1ZSldLFxyXG4gICAgICAgICAoKSA9PiB7fVxyXG4gICAgICApXHJcbiAgICAgIGNvbnN0IGFjdGl2ZUFjaG9yU2Nyb2xsV2F0Y2hlciA9IG5ldyBTY3JvbGxXYXRjaGVyKFxyXG4gICAgICAgICBbXHJcbiAgICAgICAgICAgIFswLCA0NTBdLFxyXG4gICAgICAgICAgICBbNDUwLCA4MTBdLFxyXG4gICAgICAgICAgICBbODEwLCAyMDAwXSxcclxuICAgICAgICAgXSxcclxuICAgICAgICAgW1xyXG4gICAgICAgICAgICAoKSA9PiBIZWFkZXJTdG9yZS5zZXRBbnNob3JBY3RpdmUoMCksXHJcbiAgICAgICAgICAgICgpID0+IEhlYWRlclN0b3JlLnNldEFuc2hvckFjdGl2ZSgxKSxcclxuICAgICAgICAgICAgKCkgPT4gSGVhZGVyU3RvcmUuc2V0QW5zaG9yQWN0aXZlKDIpLFxyXG4gICAgICAgICBdLFxyXG4gICAgICAgICAoKSA9PiBIZWFkZXJBbmltYXRpb25TdG9yZS5jbGVhckFuaW1hdGlvbnMoKVxyXG4gICAgICApXHJcbiAgIH0sIFtdKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OS43NmRlZywgIzBlMGUyYyAyLjA1JSwgIzAyMDIwYyAxMDguMDQlKTtcclxuICAgICAgICAgICAgICAgICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgICAge3Nob3BQb3BVcEhlYWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgIDxQb3BVcEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXtJbmRleEFuaW1hdGlvblN0b3JlLnBvcFVwSGVhZGVyLmluaXRpYWx9XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e0luZGV4QW5pbWF0aW9uU3RvcmUucG9wVXBIZWFkZXIuYW5pbWF0ZX1cclxuICAgICAgICAgICAgICAgICAgZXhpdD17SW5kZXhBbmltYXRpb25TdG9yZS5wb3BVcEhlYWRlci5leGl0fVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgICAge3BvcFVwQmxvY2tUZXh0U1NSICE9IFwiXCIgJiYgc2hvcFBvcFVwQmxvY2sgJiYgKFxyXG4gICAgICAgICAgICAgICA8UG9wVXBCbG9ja1xyXG4gICAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2s9eygpID0+IHNldFNob3dQb3BVcEJsb2NrKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17SW5kZXhBbmltYXRpb25TdG9yZS5wb3BVcEJsb2NrLmluaXRpYWx9XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e0luZGV4QW5pbWF0aW9uU3RvcmUucG9wVXBCbG9jay5hbmltYXRlfVxyXG4gICAgICAgICAgICAgICAgICBleGl0PXtJbmRleEFuaW1hdGlvblN0b3JlLnBvcFVwQmxvY2suZXhpdH1cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7R2xvYmFsU3RvcmUucG9wVXBCbG9ja1RleHQgfHwgcG9wVXBCbG9ja1RleHRTU1J9XHJcbiAgICAgICAgICAgICAgIDwvUG9wVXBCbG9jaz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgIDxDYXBhYmlsaXRpZXMgLz5cclxuICAgICAgICAgPENvbnRhY3RzIC8+XHJcbiAgICAgIDwvPlxyXG4gICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgIGxldCB0ZXh0ID0gXCJcIlxyXG4gICBsZXQgY29udGFjdHMgPSB7fVxyXG4gICBhd2FpdCBtZXNzYWdlVG9DdXN0b21lcnNBUEkuZ2V0TWVzc2FnZVRvQ3VzdG9tZXJzKChyZXMpID0+ICh0ZXh0ID0gcmVzLmRhdGEpKVxyXG4gICBhd2FpdCBjb250YWN0QVBJLmdldENvbnRhY3RzKChyZXMpID0+IChjb250YWN0cyA9IHJlcy5kYXRhKSlcclxuICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgcG9wVXBCbG9ja1RleHQ6IHRleHQsXHJcbiAgICAgICAgIHBob25lOiBjb250YWN0cy5waG9uZSxcclxuICAgICAgfSxcclxuICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG9ic2VydmVyKEluZGV4KVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWN0cyIsIkhlYWRlciIsIk1haW4iLCJDYXBhYmlsaXRpZXMiLCJQb3BVcEhlYWRlciIsIm9ic2VydmVyIiwiSW5kZXhBbmltYXRpb25TdG9yZSIsIkFuaW1hdGVQcmVzZW5jZSIsIlNjcm9sbFdhdGNoZXIiLCJIZWFkZXJTdG9yZSIsIkhlYWRlckFuaW1hdGlvblN0b3JlIiwiUG9wVXBCbG9jayIsIkdsb2JhbFN0b3JlIiwiSW5kZXgiLCJwb3BVcEJsb2NrVGV4dFNTUiIsImNvbnRhY3RzU1NSIiwic2hvcFBvcFVwSGVhZGVyIiwic2V0U2hvd1BvcFVwSGVhZGVyIiwic2hvcFBvcFVwQmxvY2siLCJzZXRTaG93UG9wVXBCbG9jayIsImNvbnNvbGUiLCJsb2ciLCJwb3BVcEhlYWRlclNjcm9sbFdhdGNoZXIiLCJhY3RpdmVBY2hvclNjcm9sbFdhdGNoZXIiLCJzZXRBbnNob3JBY3RpdmUiLCJjbGVhckFuaW1hdGlvbnMiLCJpbml0aWFsIiwicG9wVXBIZWFkZXIiLCJhbmltYXRlIiwiZXhpdCIsIm9uQ2xvc2VDbGljayIsInBvcFVwQmxvY2siLCJwb3BVcEJsb2NrVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});