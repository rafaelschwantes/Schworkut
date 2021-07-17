(function() {
var exports = {};
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.js":
/*!*************************!*\
  !*** ./pages/logout.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Logout; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function Logout() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    nookies__WEBPACK_IMPORTED_MODULE_1___default().destroy(null, 'USER_TOKEN');
    router.push('/login');
  });
  return null;
}

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/logout.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvbG9nb3V0LmpzIiwid2VicGFjazovL3dpdGgtc3R5bGVkLWNvbXBvbmVudHMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3dpdGgtc3R5bGVkLWNvbXBvbmVudHMvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTG9nb3V0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJub29raWVzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWlCO0FBQzVCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsd0RBQUEsQ0FBZ0IsTUFBSztBQUNqQkMsMERBQUEsQ0FBZ0IsSUFBaEIsRUFBc0IsWUFBdEI7QUFDQUgsVUFBTSxDQUFDSSxJQUFQLENBQVksUUFBWjtBQUNILEdBSEQ7QUFLQSxTQUFPLElBQVA7QUFDSCxDOzs7Ozs7Ozs7OztBQ2JELHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL2xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvdXQoKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgICBub29raWVzLmRlc3Ryb3kobnVsbCwgJ1VTRVJfVE9LRU4nKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJykgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9