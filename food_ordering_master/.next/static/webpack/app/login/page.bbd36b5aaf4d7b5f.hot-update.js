"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.js":
/*!*******************************!*\
  !*** ./src/app/login/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_Login_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/css/Login.css */ \"(app-pages-browser)/./public/css/Login.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! buffer */ \"(app-pages-browser)/./node_modules/next/dist/compiled/buffer/index.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction LoginPage() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [loginInProgress, setLoginInProgress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    async function handleFormSubmit(ev) {\n        ev.preventDefault();\n        setLoginInProgress(true);\n        const data = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"credentials\", {\n            email,\n            password\n        });\n        console.log(data, \"dasdasd\");\n        setLoginInProgress(false);\n        alert(\"Login Successfull\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"mt-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center  text-4xl mb-4 heading \",\n                children: \"LogIn\"\n            }, void 0, false, {\n                fileName: \"D:\\\\study\\\\sem 4\\\\capstone\\\\project\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\login\\\\page.js\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"max-w-xs mx-auto\",\n                onSubmit: handleFormSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        placeholder: \"Email\",\n                        value: email,\n                        disabled: loginInProgress,\n                        onChange: (ev)=>setEmail(ev.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\study\\\\sem 4\\\\capstone\\\\project\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\login\\\\page.js\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        placeholder: \"Password\",\n                        value: password,\n                        disabled: loginInProgress,\n                        onChange: (ev)=>setPassword(ev.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\study\\\\sem 4\\\\capstone\\\\project\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\login\\\\page.js\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: loginInProgress,\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\study\\\\sem 4\\\\capstone\\\\project\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\login\\\\page.js\",\n                        lineNumber: 44,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"my-4 text-center text-gray-500\",\n                        children: \"If uh are new User\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\study\\\\sem 4\\\\capstone\\\\project\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\login\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        className: \"flex gap-4 justify-center text-white rbutton\",\n                        href: \"/register\",\n                        children: \"Register \\xbb\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\study\\\\sem 4\\\\capstone\\\\project\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\login\\\\page.js\",\n                        lineNumber: 51,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\study\\\\sem 4\\\\capstone\\\\project\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\login\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\study\\\\sem 4\\\\capstone\\\\project\\\\food-ordering-master\\\\food-ordering-master\\\\src\\\\app\\\\login\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this);\n}\n_s(LoginPage, \"1IylrzisuZkEXlDG9szxxvDMhj8=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDVjtBQUNFO0FBQ007QUFDVjtBQUNNO0FBQ0k7QUFFdkIsU0FBU0s7O0lBQ3ZCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxpQkFBaUJDLG1CQUFtQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2RCxlQUFlVSxpQkFBaUJDLEVBQUU7UUFDakNBLEdBQUdDLGNBQWM7UUFDakJILG1CQUFtQjtRQUVwQixNQUFNSSxPQUFNLE1BQU1mLHVEQUFNQSxDQUFDLGVBQWU7WUFBRU07WUFBT0U7UUFBUztRQUMzRFEsUUFBUUMsR0FBRyxDQUFDRixNQUFLO1FBQ2ZKLG1CQUFtQjtRQUNuQk8sTUFBTTtJQUNQO0lBQ0EscUJBQ0MsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNDOzs7Ozs7MEJBQ3BELDhEQUFDRTtnQkFBS0YsV0FBVTtnQkFBbUJHLFVBQVVYOztrQ0FDNUMsOERBQUNZO3dCQUNBQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPdEI7d0JBQ1B1QixVQUFVbkI7d0JBQ1ZvQixVQUFVLENBQUNqQixLQUFPTixTQUFTTSxHQUFHa0IsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTNDLDhEQUFDSjt3QkFDQUMsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3BCO3dCQUNQcUIsVUFBVW5CO3dCQUNWb0IsVUFBVSxDQUFDakIsS0FBT0osWUFBWUksR0FBR2tCLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU5Qyw4REFBQ0k7d0JBQU9ILFVBQVVuQjt3QkFBaUJlLE1BQUs7a0NBQVM7Ozs7OztrQ0FHakQsOERBQUNRO3dCQUFJYixXQUFVO2tDQUFpQzs7Ozs7O2tDQUkvQyw4REFBQ2pCLGtEQUFJQTt3QkFDSmlCLFdBQVU7d0JBQ1ZjLE1BQU07a0NBRU47Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9OO0dBcER3QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS5qcz80OGI5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuLi8uLi8uLi9wdWJsaWMvY3NzL0xvZ2luLmNzcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ2J1ZmZlcidcbmltcG9ydCBcIi4uLy4uLy4uL3B1YmxpYy9jc3MvTG9naW4uY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbbG9naW5JblByb2dyZXNzLCBzZXRMb2dpbkluUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldikge1xuXHRcdGV2LnByZXZlbnREZWZhdWx0KClcblx0XHRzZXRMb2dpbkluUHJvZ3Jlc3ModHJ1ZSlcblxuXHRjb25zdCBkYXRhPVx0YXdhaXQgc2lnbkluKCdjcmVkZW50aWFscycsIHsgZW1haWwsIHBhc3N3b3JkIH0pXG5jb25zb2xlLmxvZyhkYXRhLFwiZGFzZGFzZFwiKVxuXHRcdHNldExvZ2luSW5Qcm9ncmVzcyhmYWxzZSlcblx0XHRhbGVydChcIkxvZ2luIFN1Y2Nlc3NmdWxsXCIpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC04XCI+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgIHRleHQtNHhsIG1iLTQgaGVhZGluZyBcIj5Mb2dJbjwvaDE+XG5cdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJtYXgtdy14cyBteC1hdXRvXCIgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdGRpc2FibGVkPXtsb2dpbkluUHJvZ3Jlc3N9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhldikgPT4gc2V0RW1haWwoZXYudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHRkaXNhYmxlZD17bG9naW5JblByb2dyZXNzfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXYpID0+IHNldFBhc3N3b3JkKGV2LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxidXR0b24gZGlzYWJsZWQ9e2xvZ2luSW5Qcm9ncmVzc30gdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdExvZ2luXG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm15LTQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuXHRcdFx0XHRcdElmIHVoIGFyZSBuZXcgVXNlclxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggZ2FwLTQganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSByYnV0dG9uXCJcblx0XHRcdFx0XHRcdGhyZWY9eycvcmVnaXN0ZXInfVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0UmVnaXN0ZXIgJnJhcXVvO1xuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG4iXSwibmFtZXMiOlsic2lnbkluIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJjb25zdGFudHMiLCJMb2dpblBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvZ2luSW5Qcm9ncmVzcyIsInNldExvZ2luSW5Qcm9ncmVzcyIsImhhbmRsZUZvcm1TdWJtaXQiLCJldiIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsImRpdiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.js\n"));

/***/ })

});