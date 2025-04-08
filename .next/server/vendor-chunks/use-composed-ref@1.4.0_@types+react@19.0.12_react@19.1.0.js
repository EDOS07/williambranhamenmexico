"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-composed-ref@1.4.0_@types+react@19.0.12_react@19.1.0";
exports.ids = ["vendor-chunks/use-composed-ref@1.4.0_@types+react@19.0.12_react@19.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@19.0.12_react@19.1.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@19.0.12_react@19.1.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useComposedRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.2.4_@babel+core@7.2_16ce3abb760b473ba98db4731cd0a223/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// basically Exclude<React.ClassAttributes<T>[\"ref\"], string>\n\nvar updateRef = function updateRef(ref, value) {\n  if (typeof ref === 'function') {\n    ref(value);\n    return;\n  }\n  ref.current = value;\n};\nvar useComposedRef = function useComposedRef(libRef, userRef) {\n  var prevUserRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();\n  return react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function (instance) {\n    libRef.current = instance;\n    if (prevUserRef.current) {\n      updateRef(prevUserRef.current, null);\n    }\n    prevUserRef.current = userRef;\n    if (!userRef) {\n      return;\n    }\n    updateRef(userRef, instance);\n  }, [userRef]);\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXNlLWNvbXBvc2VkLXJlZkAxLjQuMF9AdHlwZXMrcmVhY3RAMTkuMC4xMl9yZWFjdEAxOS4xLjAvbm9kZV9tb2R1bGVzL3VzZS1jb21wb3NlZC1yZWYvZGlzdC91c2UtY29tcG9zZWQtcmVmLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQVk7QUFDaEMsU0FBUyx3REFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVxQyIsInNvdXJjZXMiOlsiRTpcXENvZGlnb19XQk1YXFx3Ym14XFx3Ym14LW9maWNpYWxcXG5vZGVfbW9kdWxlc1xcLnBucG1cXHVzZS1jb21wb3NlZC1yZWZAMS40LjBfQHR5cGVzK3JlYWN0QDE5LjAuMTJfcmVhY3RAMTkuMS4wXFxub2RlX21vZHVsZXNcXHVzZS1jb21wb3NlZC1yZWZcXGRpc3RcXHVzZS1jb21wb3NlZC1yZWYuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGJhc2ljYWxseSBFeGNsdWRlPFJlYWN0LkNsYXNzQXR0cmlidXRlczxUPltcInJlZlwiXSwgc3RyaW5nPlxuXG52YXIgdXBkYXRlUmVmID0gZnVuY3Rpb24gdXBkYXRlUmVmKHJlZiwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZWYodmFsdWUpO1xuICAgIHJldHVybjtcbiAgfVxuICByZWYuY3VycmVudCA9IHZhbHVlO1xufTtcbnZhciB1c2VDb21wb3NlZFJlZiA9IGZ1bmN0aW9uIHVzZUNvbXBvc2VkUmVmKGxpYlJlZiwgdXNlclJlZikge1xuICB2YXIgcHJldlVzZXJSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGxpYlJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XG4gICAgaWYgKHByZXZVc2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHVwZGF0ZVJlZihwcmV2VXNlclJlZi5jdXJyZW50LCBudWxsKTtcbiAgICB9XG4gICAgcHJldlVzZXJSZWYuY3VycmVudCA9IHVzZXJSZWY7XG4gICAgaWYgKCF1c2VyUmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVwZGF0ZVJlZih1c2VyUmVmLCBpbnN0YW5jZSk7XG4gIH0sIFt1c2VyUmVmXSk7XG59O1xuXG5leHBvcnQgeyB1c2VDb21wb3NlZFJlZiBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@19.0.12_react@19.1.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js\n");

/***/ })

};
;