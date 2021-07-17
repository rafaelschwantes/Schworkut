(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginScreen; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\www2\\schwantes\\Schworkut\\pages\\login.js";
 // Hook do NextJS



function LoginScreen() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const [githubUser, setGithubUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    style: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "loginScreen",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "logoArea",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/logo-schworkut.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Conecte-se"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 14
          }, this), " aos seus amigos e familiares usando recados e mensagens instant\xE2neas"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Conhe\xE7a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 14
          }, this), " novas pessoas atrav\xE9s de amigos de seus amigos e comunidades"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Compartilhe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 14
          }, this), " seus v\xEDdeos, fotos e paix\xF5es em um s\xF3 lugar"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "formArea",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "box",
          onSubmit: infosDoEvento => {
            infosDoEvento.preventDefault(); // alert('Alguém clicou no botão!')

            console.log('Usuário: ', githubUser);
            fetch('https://alurakut.vercel.app/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                githubUser: githubUser
              })
            }).then(async respostaDoServer => {
              const dadosDaResposta = await respostaDoServer.json();
              const token = dadosDaResposta.token;
              nookies__WEBPACK_IMPORTED_MODULE_3___default().set(null, 'USER_TOKEN', token, {
                path: '/',
                maxAge: 86400 * 7
              });
              router.push('/');
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Acesse agora mesmo com seu usu\xE1rio do ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: "GitHub"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 53
            }, this), "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            placeholder: "Usu\xE1rio",
            value: githubUser,
            onChange: evento => {
              setGithubUser(evento.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), githubUser.length === 0 ? 'Preencha o campo' : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
          className: "box",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["Ainda n\xE3o \xE9 membro? ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 35
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "/login",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "ENTRAR J\xC1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "footerArea",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["\xA9 2021 - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Sobre o Orkut.br"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 22
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Centro de seguran\xE7a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 57
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Privacidade"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 95
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Termos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 125
          }, this), " - ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/",
            children: "Contato"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 150
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2l0aC1zdHlsZWQtY29tcG9uZW50cy9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93aXRoLXN0eWxlZC1jb21wb25lbnRzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTG9naW5TY3JlZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnaXRodWJVc2VyIiwic2V0R2l0aHViVXNlciIsIlJlYWN0IiwiZGlzcGxheSIsImZsZXgiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbmZvc0RvRXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZlciIsImRhZG9zRGFSZXNwb3N0YSIsImpzb24iLCJ0b2tlbiIsIm5vb2tpZXMiLCJwYXRoIiwibWF4QWdlIiwicHVzaCIsImV2ZW50byIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsV0FBVCxHQUF1QjtBQUNwQyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEJDLHFEQUFBLENBQWUsRUFBZixDQUFwQztBQUVBLHNCQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRSxNQUFYO0FBQW1C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ZUErREU7QUFBUSxpQkFBUyxFQUFDLFlBQWxCO0FBQUEsK0JBQ0U7QUFBQSxrREFDVztBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEWCxzQkFDOEM7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRDlDLHNCQUNvRjtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEcEYsc0JBQ2tIO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURsSCxzQkFDMkk7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRDNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EvREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUVELEM7Ozs7Ozs7Ozs7O0FDakZELHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gSG9vayBkbyBOZXh0SlNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5TY3JlZW4oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2dpdGh1YlVzZXIsIHNldEdpdGh1YlVzZXJdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4OiAxLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luU2NyZWVuXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibG9nb0FyZWFcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28tc2Nod29ya3V0LnBuZ1wiIC8+XHJcbiAgICAgICAgICB7Lyo8aW1nIHNyYz1cImh0dHBzOi8vYWx1cmFrdXQudmVyY2VsLmFwcC9sb2dvLnN2Z1wiIC8+Ki99XHJcblxyXG4gICAgICAgICAgPHA+PHN0cm9uZz5Db25lY3RlLXNlPC9zdHJvbmc+IGFvcyBzZXVzIGFtaWdvcyBlIGZhbWlsaWFyZXMgdXNhbmRvIHJlY2Fkb3MgZSBtZW5zYWdlbnMgaW5zdGFudMOibmVhczwvcD5cclxuICAgICAgICAgIDxwPjxzdHJvbmc+Q29uaGXDp2E8L3N0cm9uZz4gbm92YXMgcGVzc29hcyBhdHJhdsOpcyBkZSBhbWlnb3MgZGUgc2V1cyBhbWlnb3MgZSBjb211bmlkYWRlczwvcD5cclxuICAgICAgICAgIDxwPjxzdHJvbmc+Q29tcGFydGlsaGU8L3N0cm9uZz4gc2V1cyB2w61kZW9zLCBmb3RvcyBlIHBhaXjDtWVzIGVtIHVtIHPDsyBsdWdhcjwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1BcmVhXCI+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJib3hcIiBvblN1Ym1pdD17KGluZm9zRG9FdmVudG8pID0+IHtcclxuICAgICAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KCdBbGd1w6ltIGNsaWNvdSBubyBib3TDo28hJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc3XDoXJpbzogJywgZ2l0aHViVXNlcilcclxuICAgICAgICAgICAgICAgIGZldGNoKCdodHRwczovL2FsdXJha3V0LnZlcmNlbC5hcHAvYXBpL2xvZ2luJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nICBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZ2l0aHViVXNlcjogZ2l0aHViVXNlciB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIChyZXNwb3N0YURvU2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGFkb3NEYVJlc3Bvc3RhID0gYXdhaXQgcmVzcG9zdGFEb1NlcnZlci5qc29uKClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGRhZG9zRGFSZXNwb3N0YS50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBub29raWVzLnNldChudWxsLCAnVVNFUl9UT0tFTicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4QWdlOiA4NjQwMCAqIDcgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEFjZXNzZSBhZ29yYSBtZXNtbyBjb20gc2V1IHVzdcOhcmlvIGRvIDxzdHJvbmc+R2l0SHViPC9zdHJvbmc+IVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXN1w6FyaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2dpdGh1YlVzZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEdpdGh1YlVzZXIoZXZlbnRvLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtnaXRodWJVc2VyLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgPyAnUHJlZW5jaGEgbyBjYW1wbydcclxuICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBBaW5kYSBuw6NvIMOpIG1lbWJybz8gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgRU5UUkFSIErDgVxyXG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlckFyZWFcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICDCqSAyMDIxIC0gPGEgaHJlZj1cIi9cIj5Tb2JyZSBvIE9ya3V0LmJyPC9hPiAtIDxhIGhyZWY9XCIvXCI+Q2VudHJvIGRlIHNlZ3VyYW7Dp2E8L2E+IC0gPGEgaHJlZj1cIi9cIj5Qcml2YWNpZGFkZTwvYT4gLSA8YSBocmVmPVwiL1wiPlRlcm1vczwvYT4gLSA8YSBocmVmPVwiL1wiPkNvbnRhdG88L2E+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufSAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=