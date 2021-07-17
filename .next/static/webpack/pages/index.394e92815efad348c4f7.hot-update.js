self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/lib/AlurakutCommons.js":
/*!************************************!*\
  !*** ./src/lib/AlurakutCommons.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlurakutMenu": function() { return /* binding */ AlurakutMenu; },
/* harmony export */   "AlurakutProfileSidebarMenuDefault": function() { return /* binding */ AlurakutProfileSidebarMenuDefault; },
/* harmony export */   "OrkutNostalgicIconSet": function() { return /* binding */ OrkutNostalgicIconSet; },
/* harmony export */   "AlurakutStyles": function() { return /* binding */ AlurakutStyles; }
/* harmony export */ });
/* harmony import */ var C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\www2\\schwantes\\Schworkut\\src\\lib\\AlurakutCommons.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var BASE_URL = 'http://alurakut.vercel.app/';
var v = '1';

function Link(_ref) {
  var href = _ref.href,
      children = _ref.children,
      props = (0,C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__.default)(_ref, ["href", "children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
} // ================================================================================================================
// Menu
// ================================================================================================================


_c = Link;
function AlurakutMenu(_ref2) {
  _s();

  var _this = this;

  var githubUser = _ref2.githubUser;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false),
      _React$useState2 = (0,C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      isMenuOpen = _React$useState2[0],
      setMenuState = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenu.Wrapper, {
    isMenuOpen: isMenuOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenu.Logo, {
        src: "/logo-schworkut.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        style: {
          flex: 1
        },
        children: [{
          name: 'Inicio',
          slug: '/'
        }, {
          name: 'Amigos',
          slug: '/amigos'
        }, {
          name: 'Comunidades',
          slug: '/comunidades'
        }].map(function (menuItem) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {
            href: "".concat(menuItem.slug.toLocaleLowerCase()),
            children: menuItem.name
          }, "key__".concat(menuItem.name.toLocaleLowerCase()), false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          href: "/logout",
          children: "Sair"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
            placeholder: "Pesquisar no Schwantes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        onClick: function onClick() {
          return setMenuState(!isMenuOpen);
        },
        children: [isMenuOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/menu-open.svg?v=").concat(v)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 26
        }, this), !isMenuOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/menu-closed.svg?v=").concat(v)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 27
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutMenuProfileSidebar, {
      githubUser: githubUser
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(AlurakutMenu, "RQAUz5wknpCAe4Aflmp8yMbnXOU=");

_c2 = AlurakutMenu;
AlurakutMenu.Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.header.withConfig({
  displayName: "AlurakutCommons__Wrapper",
  componentId: "sc-1vsk6a-0"
})(["width:100%;background-color:#308BC5;.alurakutMenuProfileSidebar{background:white;position:fixed;z-index:100;padding:46px;bottom:0;left:0;right:0;top:48px;transition:.3s;pointer-events:", ";opacity:", ";transform:", ";@media(min-width:860px){display:none;}> div{max-width:400px;margin:auto;}a{font-size:18px;}.boxLink{font-size:18px;color:#2E7BB4;-webkit-text-decoration:none;text-decoration:none;font-weight:800;}hr{margin-top:12px;margin-bottom:8px;border-color:transparent;border-bottom-color:#ECF2FA;}}.container{background-color:#308BC5;padding:7px 16px;max-width:1110px;margin:auto;display:flex;justify-content:space-between;position:relative;z-index:101;@media(min-width:860px){justify-content:flex-start;}button{border:0;background:transparent;align-self:center;display:inline-block;@media(min-width:860px){display:none;}}nav{display:none;@media(min-width:860px){display:flex;}a{font-size:12px;color:white;padding:10px 16px;position:relative;text-decoration:none;&:after{content:\" \";background-color:#5292C1;display:block;position:absolute;width:1px;height:12px;margin:auto;left:0;top:0;bottom:0;}}}input{color:#ffffff;background:#5579A1;padding:10px 42px;border:0;background-image:url(", ");background-position:15px center;background-repeat:no-repeat;border-radius:1000px;font-size:12px;::placeholder{color:#ffffff;opacity:1;}}}"], function (_ref3) {
  var isMenuOpen = _ref3.isMenuOpen;
  return isMenuOpen ? 'all' : 'none';
}, function (_ref4) {
  var isMenuOpen = _ref4.isMenuOpen;
  return isMenuOpen ? '1' : '0';
}, function (_ref5) {
  var isMenuOpen = _ref5.isMenuOpen;
  return isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))';
}, "".concat(BASE_URL, "/icons/search.svg"));
AlurakutMenu.Logo = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.img.withConfig({
  displayName: "AlurakutCommons__Logo",
  componentId: "sc-1vsk6a-1"
})(["background-color:#ffffff;padding:9px 14px;border-radius:1000px;height:34px;"]);

function AlurakutMenuProfileSidebar(_ref6) {
  var githubUser = _ref6.githubUser;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "alurakutMenuProfileSidebar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "https://github.com/".concat(githubUser, ".png"),
        style: {
          borderRadius: '8px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
          className: "boxLink",
          href: "/user/".concat(githubUser),
          children: ["@", githubUser]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutProfileSidebarMenuDefault, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 5
  }, this);
} // ================================================================================================================
// AlurakutProfileSidebarMenuDefault
// ================================================================================================================


_c3 = AlurakutMenuProfileSidebar;
function AlurakutProfileSidebarMenuDefault() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AlurakutProfileSidebarMenuDefault.Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/user.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this), "Perfil"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/book.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, this), "Recados"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/camera.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, this), "Fotos"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/sun.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, this), "Depoimentos"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("nav", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "/icons/plus.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this), "GitHub Trends"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        href: "/logout",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: "".concat(BASE_URL, "//icons/logout.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this), "Sair"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 191,
    columnNumber: 5
  }, this);
}
_c4 = AlurakutProfileSidebarMenuDefault;
AlurakutProfileSidebarMenuDefault.Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({
  displayName: "AlurakutCommons__Wrapper",
  componentId: "sc-1vsk6a-2"
})(["a{font-size:12px;color:#2E7BB4;margin-bottom:16px;display:flex;align-items:center;justify-content:flex-start;text-decoration:none;img{width:16px;height:16px;margin-right:5px;}}"]); // ================================================================================================================
// OrkutNostalgicIconSet
// ================================================================================================================

function OrkutNostalgicIconSet(props) {
  var _this2 = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(OrkutNostalgicIconSet.List, {
    children: [[{
      name: 'Recados',
      slug: 'recados',
      icon: 'book'
    }, {
      name: 'Fotos',
      slug: 'fotos',
      icon: 'camera'
    }, {
      name: 'Videos',
      slug: 'videos',
      icon: 'video-camera'
    }, {
      name: 'Fãs',
      slug: 'fas',
      icon: 'star'
    }, {
      name: 'Mensagens',
      slug: 'mensagens',
      icon: 'email'
    }].map(function (_ref7) {
      var name = _ref7.name,
          slug = _ref7.slug,
          icon = _ref7.icon;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          style: {
            gridArea: 'title'
          },
          className: "OrkutNostalgicIconSet__title",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "OrkutNostalgicIconSet__number",
          style: {
            gridArea: 'number'
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            className: "OrkutNostalgicIconSet__iconSample",
            src: "https://alurakut.vercel.app/icons/".concat(icon, ".svg")
          }, "orkut__icon_set__".concat(slug, "_img"), false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, _this2), props[slug] ? props[slug] : 0]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, _this2)]
      }, "orkut__icon_set__".concat(slug), true, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, _this2);
    }), [{
      name: 'Confiável',
      slug: 'confiavel',
      icon: 'smile'
    }, {
      name: 'Legal',
      slug: 'legal',
      icon: 'cool'
    }, {
      name: 'Sexy',
      slug: 'sexy',
      icon: 'heart'
    }].map(function (_ref8) {
      var _jsxDEV2;

      var name = _ref8.name,
          slug = _ref8.slug,
          icon = _ref8.icon;
      var total = props[slug] ? props[slug] : 2;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "OrkutNostalgicIconSet__title",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 13
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", (_jsxDEV2 = {
          className: "OrkutNostalgicIconSet__iconComplex"
        }, (0,C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "OrkutNostalgicIconSet__number"), (0,C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "style", {
          gridArea: 'number'
        }), (0,C_www2_schwantes_Schworkut_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "children", [0, 1, 2].map(function (_, index) {
          var isHeartActive = index <= total - 1;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            src: "https://alurakut.vercel.app/icons/".concat(icon, ".svg"),
            style: {
              marginRight: '2px',
              opacity: isHeartActive ? 1 : '0.5'
            }
          }, "orkut__icon_set__".concat(slug, "_img_").concat(index), false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 24
          }, _this2);
        })), _jsxDEV2), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 13
        }, _this2)]
      }, "orkut__icon_set__".concat(slug), true, {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 11
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 246,
    columnNumber: 5
  }, this);
}
_c5 = OrkutNostalgicIconSet;
OrkutNostalgicIconSet.List = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.ul.withConfig({
  displayName: "AlurakutCommons__List",
  componentId: "sc-1vsk6a-3"
})(["margin-top:32px;list-style:none;display:flex;justify-content:space-between;flex-wrap:wrap;li{font-size:12px;color:#5A5A5A;display:grid;grid-template-areas:\"title title\" \"number number\";&:not(:last-child){margin-right:5px;}.OrkutNostalgicIconSet__title{display:block;font-style:italic;}.OrkutNostalgicIconSet__number{min-width:15px;display:flex;align-items:center;justify-content:flex-start;.OrkutNostalgicIconSet__iconSample{margin-right:7px;}}}"]); // ================================================================================================================
// Login Page
// ================================================================================================================

var AlurakutLoginScreen = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)([":root{--backgroundPrimary:#D9E6F6;--backgroundSecondary:#F1F9FE;--backgroundTertiary:#FFFFFF;--backgroundQuarternary:#BBCDE8;--colorPrimary:#2E7BB4;--colorSecondary:#388BB0;--colorTertiary:#2F4A71;--colorQuarternary:#D81D99;--textPrimaryColor:#333333;--textSecondaryColor:#FFFFFF;--textTertiaryColor:#5A5A5A;--textQuarternaryColor:#C5C6CA;--commonRadius:8px;}.loginScreen{padding:16px;max-width:1110px;display:grid;--gap:12px;--gutter:16px;grid-gap:var(--gap);grid-template-areas:\"logoArea\" \"formArea\" \"footerArea\";@media(min-width:860px){grid-template-columns:2fr 1fr;grid-template-areas:\"logoArea formArea\" \"logoArea formArea\" \"footerArea footerArea\";}.logoArea{grid-area:logoArea;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);padding:var(--gutter);text-align:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center;min-height:263px;@media(min-width:860px){min-height:368px;}p{font-size:12px;line-height:1.2;&:not(:last-child){margin-bottom:12px;}strong{color:var(--colorQuarternary);}}img{max-height:45px;margin-bottom:36px;}}.formArea{grid-area:formArea;display:flex;flex-wrap:wrap;flex-direction:column;.box{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:var(--gutter);padding-left:50px;padding-right:50px;background-color:var(--backgroundSecondary);border-radius:var(--commonRadius);flex:1;&:not(:last-child){margin-bottom:var(--gap);}&:first-child{min-height:224px;@media(min-width:860px){min-height:282px;}}p{font-size:14px;}a{text-decoration:none;color:var(--colorPrimary);}input{width:100%;display:block;border:1px solid var(--textQuarternaryColor);padding:12px;background-color:var(--backgroundTertiary);border-radius:var(--commonRadius);margin-top:24px;margin-bottom:16px;}button{width:100%;display:block;border:0;padding:12px;border-radius:var(--commonRadius);background-color:var(--colorPrimary);color:var(--textSecondaryColor);}}}.footerArea{grid-area:footerArea;background-color:var(--backgroundQuarternary);border-radius:var(--commonRadius);padding:8px;p{font-size:12px;text-align:center;a{text-decoration:none;color:var(--colorPrimary);}}}}"]); // ================================================================================================================
// Reset Styles
// ================================================================================================================

var AlurakutStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.css)(["*::-webkit-scrollbar{width:8px;}*::-webkit-scrollbar-track{background:#f1f1f1;}*::-webkit-scrollbar-thumb{background:#888;border-radius:10px;}*::-webkit-scrollbar-thumb:hover{background:#555;}a,button{cursor:pointer;transition:.3s;outline:0;&:hover,&:focus{opacity:.8;}&:disabled{cursor:not-allowed;opacity:.5;}}input{transition:.3s;outline:0;&:disabled{cursor:not-allowed;opacity:.5;}&:hover,&:focus{box-shadow:0px 0px 5px #33333357;}}", ""], AlurakutLoginScreen);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Link");
$RefreshReg$(_c2, "AlurakutMenu");
$RefreshReg$(_c3, "AlurakutMenuProfileSidebar");
$RefreshReg$(_c4, "AlurakutProfileSidebarMenuDefault");
$RefreshReg$(_c5, "OrkutNostalgicIconSet");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9BbHVyYWt1dENvbW1vbnMuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJ2IiwiTGluayIsImhyZWYiLCJjaGlsZHJlbiIsInByb3BzIiwiQWx1cmFrdXRNZW51IiwiZ2l0aHViVXNlciIsIlJlYWN0IiwiaXNNZW51T3BlbiIsInNldE1lbnVTdGF0ZSIsImZsZXgiLCJuYW1lIiwic2x1ZyIsIm1hcCIsIm1lbnVJdGVtIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJXcmFwcGVyIiwic3R5bGVkIiwiTG9nbyIsIkFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIiwiYm9yZGVyUmFkaXVzIiwiQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0IiwiT3JrdXROb3N0YWxnaWNJY29uU2V0IiwiaWNvbiIsImdyaWRBcmVhIiwidG90YWwiLCJfIiwiaW5kZXgiLCJpc0hlYXJ0QWN0aXZlIiwibWFyZ2luUmlnaHQiLCJvcGFjaXR5IiwiTGlzdCIsIkFsdXJha3V0TG9naW5TY3JlZW4iLCJjc3MiLCJBbHVyYWt1dFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLDZCQUFqQjtBQUNBLElBQU1DLENBQUMsR0FBRyxHQUFWOztBQUdBLFNBQVNDLElBQVQsT0FBNEM7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVRDLEtBQVM7O0FBQzFDLHNCQUNFLDhEQUFDLGtEQUFEO0FBQVUsUUFBSSxFQUFFRixJQUFoQjtBQUFzQixZQUFRLE1BQTlCO0FBQUEsMkJBQ0UsbUdBQU9FLEtBQVA7QUFBQSxnQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQyxDQUVEO0FB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QUFBO0FBQUE7QUFBQSxVQURGO0FBeUNEO01BMUNlVSxxQjtBQTJDaEJBLHFCQUFxQixDQUFDUyxJQUF0QixHQUE2QmQsb0VBQTdCO0FBQUE7QUFBQTtBQUFBLDBjLENBaUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNZSxtQkFBbUIsR0FBR0Msc0RBQUgsOHBFQUF6QixDLENBdUlBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxjQUFjLEdBQUdELHNEQUFILCtiQXdDdkJELG1CQXhDdUIsQ0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzk0ZTkyODE1ZWZhZDM0OGM0ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9hbHVyYWt1dC52ZXJjZWwuYXBwLyc7XHJcbmNvbnN0IHYgPSAnMSc7XHJcblxyXG5cclxuZnVuY3Rpb24gTGluayh7IGhyZWYsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cclxuICAgICAgPGEgey4uLnByb3BzfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1lbnVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gQWx1cmFrdXRNZW51KHsgZ2l0aHViVXNlciB9KSB7XHJcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldE1lbnVTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbHVyYWt1dE1lbnUuV3JhcHBlciBpc01lbnVPcGVuPXtpc01lbnVPcGVufT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7Lyo8QWx1cmFrdXRNZW51LkxvZ28gc3JjPXtgJHtCQVNFX1VSTH0vbG9nby5zdmdgfSAvPiovfVxyXG4gICAgICAgIDxBbHVyYWt1dE1lbnUuTG9nbyBzcmM9XCIvbG9nby1zY2h3b3JrdXQucG5nXCIgLz5cclxuIFxyXG5cclxuICAgICAgICA8bmF2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgICB7W3sgbmFtZTogJ0luaWNpbycsIHNsdWc6ICcvJ30sIHtuYW1lOiAnQW1pZ29zJywgc2x1ZzogJy9hbWlnb3MnfSwge25hbWU6ICdDb211bmlkYWRlcycsIHNsdWc6ICcvY29tdW5pZGFkZXMnfV0ubWFwKChtZW51SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2BrZXlfXyR7bWVudUl0ZW0ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpfWB9IGhyZWY9e2Ake21lbnVJdGVtLnNsdWcudG9Mb2NhbGVMb3dlckNhc2UoKX1gfT5cclxuICAgICAgICAgICAgICB7bWVudUl0ZW0ubmFtZX1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8YSBocmVmPXtgL2xvZ291dGB9PlxyXG4gICAgICAgICAgICBTYWlyXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJQZXNxdWlzYXIgbm8gU2Nod2FudGVzXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1lbnVTdGF0ZSghaXNNZW51T3Blbil9PlxyXG4gICAgICAgICAge2lzTWVudU9wZW4gJiYgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9tZW51LW9wZW4uc3ZnP3Y9JHt2fWB9IC8+fVxyXG4gICAgICAgICAgeyFpc01lbnVPcGVuICYmIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvbWVudS1jbG9zZWQuc3ZnP3Y9JHt2fWB9IC8+fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyIGdpdGh1YlVzZXI9e2dpdGh1YlVzZXJ9IC8+XHJcbiAgICA8L0FsdXJha3V0TWVudS5XcmFwcGVyPlxyXG4gIClcclxufVxyXG5BbHVyYWt1dE1lbnUuV3JhcHBlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOEJDNTtcclxuICAuYWx1cmFrdXRNZW51UHJvZmlsZVNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiA0NnB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA0OHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6ICR7KHsgaXNNZW51T3BlbiB9KSA9PiBpc01lbnVPcGVuID8gJ2FsbCcgOiAnbm9uZSd9O1xyXG4gICAgb3BhY2l0eTogJHsoeyBpc01lbnVPcGVuIH0pID0+IGlzTWVudU9wZW4gPyAnMScgOiAnMCd9O1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IGlzTWVudU9wZW4gfSkgPT4gaXNNZW51T3BlbiA/ICd0cmFuc2xhdGVZKDApJyA6ICd0cmFuc2xhdGVZKGNhbGMoLTEwMCUgLSA0OHB4KSknfTtcclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDg2MHB4KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuYm94TGluayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICMyRTdCQjQ7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgICBociB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0VDRjJGQTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA4QkM1O1xyXG4gICAgcGFkZGluZzogN3B4IDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDExMTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDE7XHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBuYXYge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBAbWVkaWEobWluLXdpZHRoOiA4NjBweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOTJDMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTU3OUExO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDQycHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YCR7QkFTRV9VUkx9L2ljb25zL3NlYXJjaC5zdmdgfSk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHggY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfSBcclxuICB9XHJcbmA7XHJcbkFsdXJha3V0TWVudS5Mb2dvID0gc3R5bGVkLmltZ2BcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDlweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBbHVyYWt1dE1lbnVQcm9maWxlU2lkZWJhcih7IGdpdGh1YlVzZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsdXJha3V0TWVudVByb2ZpbGVTaWRlYmFyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHtnaXRodWJVc2VyfS5wbmdgfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc4cHgnIH19IC8+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJib3hMaW5rXCIgaHJlZj17YC91c2VyLyR7Z2l0aHViVXNlcn1gfT5cclxuICAgICAgICAgICAgQHtnaXRodWJVc2VyfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgPEFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBBbHVyYWt1dFByb2ZpbGVTaWRlYmFyTWVudURlZmF1bHRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LldyYXBwZXI+XHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgJHtCQVNFX1VSTH0vaWNvbnMvdXNlci5zdmdgfSAvPlxyXG4gICAgICAgICAgICBQZXJmaWxcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9ib29rLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgIFJlY2Fkb3NcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9jYW1lcmEuc3ZnYH0gLz5cclxuICAgICAgICAgICAgRm90b3NcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2Ake0JBU0VfVVJMfS9pY29ucy9zdW4uc3ZnYH0gLz5cclxuICAgICAgICAgICAgRGVwb2ltZW50b3NcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9L2ljb25zL3BsdXMuc3ZnYH0gLz5cclxuICAgICAgICAgICAgR2l0SHViIFRyZW5kc1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvbG9nb3V0XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YCR7QkFTRV9VUkx9Ly9pY29ucy9sb2dvdXQuc3ZnYH0gLz5cclxuICAgICAgICAgICAgU2FpclxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvQWx1cmFrdXRQcm9maWxlU2lkZWJhck1lbnVEZWZhdWx0LldyYXBwZXI+XHJcbiAgKVxyXG59XHJcbkFsdXJha3V0UHJvZmlsZVNpZGViYXJNZW51RGVmYXVsdC5XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjMkU3QkI0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gT3JrdXROb3N0YWxnaWNJY29uU2V0XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIE9ya3V0Tm9zdGFsZ2ljSWNvblNldChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8T3JrdXROb3N0YWxnaWNJY29uU2V0Lkxpc3Q+XHJcbiAgICAgIHtbXHJcbiAgICAgICAgeyBuYW1lOiAnUmVjYWRvcycsIHNsdWc6ICdyZWNhZG9zJywgaWNvbjogJ2Jvb2snIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnRm90b3MnLCBzbHVnOiAnZm90b3MnLCBpY29uOiAnY2FtZXJhJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1ZpZGVvcycsIHNsdWc6ICd2aWRlb3MnLCBpY29uOiAndmlkZW8tY2FtZXJhJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0bDo3MnLCBzbHVnOiAnZmFzJywgaWNvbjogJ3N0YXInIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTWVuc2FnZW5zJywgc2x1ZzogJ21lbnNhZ2VucycsIGljb246ICdlbWFpbCcgfSxcclxuICAgICAgXS5tYXAoKHsgbmFtZSwgc2x1ZywgaWNvbiB9KSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfWB9PlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZ3JpZEFyZWE6ICd0aXRsZScgfX0gY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X190aXRsZVwiPlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fbnVtYmVyXCIgc3R5bGU9e3sgZ3JpZEFyZWE6ICdudW1iZXInIH19PlxyXG4gICAgICAgICAgICA8aW1nIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfV9pbWdgfSBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX2ljb25TYW1wbGVcIiBzcmM9e2BodHRwczovL2FsdXJha3V0LnZlcmNlbC5hcHAvaWNvbnMvJHtpY29ufS5zdmdgfSAvPlxyXG4gICAgICAgICAgICB7cHJvcHNbc2x1Z10gPyBwcm9wc1tzbHVnXSA6IDB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICAgIHtbXHJcbiAgICAgICAgeyBuYW1lOiAnQ29uZmnDoXZlbCcsIHNsdWc6ICdjb25maWF2ZWwnLCBpY29uOiAnc21pbGUnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTGVnYWwnLCBzbHVnOiAnbGVnYWwnLCBpY29uOiAnY29vbCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdTZXh5Jywgc2x1ZzogJ3NleHknLCBpY29uOiAnaGVhcnQnIH0sXHJcbiAgICAgIF0ubWFwKCh7IG5hbWUsIHNsdWcsIGljb24gfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gcHJvcHNbc2x1Z10gPyBwcm9wc1tzbHVnXSA6IDI7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxsaSBrZXk9e2Bvcmt1dF9faWNvbl9zZXRfXyR7c2x1Z31gfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiT3JrdXROb3N0YWxnaWNJY29uU2V0X190aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9faWNvbkNvbXBsZXhcIiBjbGFzc05hbWU9XCJPcmt1dE5vc3RhbGdpY0ljb25TZXRfX251bWJlclwiIHN0eWxlPXt7IGdyaWRBcmVhOiAnbnVtYmVyJyB9fT5cclxuICAgICAgICAgICAgICB7WzAsIDEsIDJdLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzSGVhcnRBY3RpdmUgPSBpbmRleCA8PSAodG90YWwgLSAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIGtleT17YG9ya3V0X19pY29uX3NldF9fJHtzbHVnfV9pbWdfJHtpbmRleH1gfSBzcmM9e2BodHRwczovL2FsdXJha3V0LnZlcmNlbC5hcHAvaWNvbnMvJHtpY29ufS5zdmdgfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzJweCcsIG9wYWNpdHk6IGlzSGVhcnRBY3RpdmUgPyAxIDogJzAuNScgfX0gLz5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvT3JrdXROb3N0YWxnaWNJY29uU2V0Lkxpc3Q+XHJcbiAgKVxyXG59XHJcbk9ya3V0Tm9zdGFsZ2ljSWNvblNldC5MaXN0ID0gc3R5bGVkLnVsYFxyXG4gIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM1QTVBNUE7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgXCJ0aXRsZSB0aXRsZVwiXHJcbiAgICAgIFwibnVtYmVyIG51bWJlclwiOyBcclxuICAgIFxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuT3JrdXROb3N0YWxnaWNJY29uU2V0X190aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxyXG4gICAgfVxyXG4gICAgLk9ya3V0Tm9zdGFsZ2ljSWNvblNldF9fbnVtYmVyIHtcclxuICAgICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIC5Pcmt1dE5vc3RhbGdpY0ljb25TZXRfX2ljb25TYW1wbGUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBMb2dpbiBQYWdlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgQWx1cmFrdXRMb2dpblNjcmVlbiA9IGNzc2BcclxuICA6cm9vdCB7XHJcbiAgICAtLWJhY2tncm91bmRQcmltYXJ5OiAjRDlFNkY2O1xyXG4gICAgLS1iYWNrZ3JvdW5kU2Vjb25kYXJ5OiAjRjFGOUZFO1xyXG4gICAgLS1iYWNrZ3JvdW5kVGVydGlhcnk6ICNGRkZGRkY7XHJcbiAgICAtLWJhY2tncm91bmRRdWFydGVybmFyeTogI0JCQ0RFODtcclxuICAgIC0tY29sb3JQcmltYXJ5OiAjMkU3QkI0O1xyXG4gICAgLS1jb2xvclNlY29uZGFyeTogIzM4OEJCMDtcclxuICAgIC0tY29sb3JUZXJ0aWFyeTogIzJGNEE3MTtcclxuICAgIC0tY29sb3JRdWFydGVybmFyeTogI0Q4MUQ5OTtcclxuICAgIC0tdGV4dFByaW1hcnlDb2xvcjogIzMzMzMzMztcclxuICAgIC0tdGV4dFNlY29uZGFyeUNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLS10ZXh0VGVydGlhcnlDb2xvcjogIzVBNUE1QTtcclxuICAgIC0tdGV4dFF1YXJ0ZXJuYXJ5Q29sb3I6ICNDNUM2Q0E7XHJcbiAgICAtLWNvbW1vblJhZGl1czogOHB4O1xyXG4gIH1cclxuICAubG9naW5TY3JlZW4ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1heC13aWR0aDogMTExMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIC0tZ2FwOiAxMnB4O1xyXG4gICAgLS1ndXR0ZXI6IDE2cHg7XHJcbiAgICBncmlkLWdhcDogdmFyKC0tZ2FwKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICBcImxvZ29BcmVhXCJcclxuICAgICAgXCJmb3JtQXJlYVwiXHJcbiAgICAgIFwiZm9vdGVyQXJlYVwiO1xyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICAgICAgICBcImxvZ29BcmVhIGZvcm1BcmVhXCJcclxuICAgICAgICAgICAgICBcImxvZ29BcmVhIGZvcm1BcmVhXCJcclxuICAgICAgICAgICAgICBcImZvb3RlckFyZWEgZm9vdGVyQXJlYVwiO1xyXG4gICAgfVxyXG4gICAgLmxvZ29BcmVhIHtcclxuICAgICAgZ3JpZC1hcmVhOiBsb2dvQXJlYTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFRlcnRpYXJ5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcclxuICAgICAgcGFkZGluZzogdmFyKC0tZ3V0dGVyKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtaW4taGVpZ2h0OiAyNjNweDtcclxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjhweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvclF1YXJ0ZXJuYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtQXJlYSB7XHJcbiAgICAgIGdyaWQtYXJlYTogZm9ybUFyZWE7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLmJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWd1dHRlcik7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFNlY29uZGFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1nYXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIyNHB4O1xyXG4gICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogODYwcHgpIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjgycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dFF1YXJ0ZXJuYXJ5Q29sb3IpO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRUZXJ0aWFyeSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jb21tb25SYWRpdXMpO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNvbW1vblJhZGl1cyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvclByaW1hcnkpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHRTZWNvbmRhcnlDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyQXJlYSB7XHJcbiAgICAgIGdyaWQtYXJlYTogZm9vdGVyQXJlYTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZFF1YXJ0ZXJuYXJ5KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29tbW9uUmFkaXVzKTtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yUHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSZXNldCBTdHlsZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgQWx1cmFrdXRTdHlsZXMgPSBjc3NgXHJcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICB9XHJcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgXHJcbiAgfVxyXG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTsgXHJcbiAgfVxyXG4gIGEsXHJcbiAgYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgfVxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjMzMzMzMzNTc7XHJcbiAgICB9XHJcbiAgfVxyXG4gICR7QWx1cmFrdXRMb2dpblNjcmVlbn1cclxuYDsgIl0sInNvdXJjZVJvb3QiOiIifQ==