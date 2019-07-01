webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/Users/mcs/Development/zeit/now-examples/nextjs-node/pages/index.js";





function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getDate() {
      return _getDate.apply(this, arguments);
    }

    function _getDate() {
      _getDate = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, newDate;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('/api/date.js');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.text();

              case 5:
                newDate = _context.sent;
                console.log('DATE', newDate);
                setDate(newDate);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getDate.apply(this, arguments);
    }

    getDate();
  }, []);
  console.log('DATE2', date);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Next.js + Node API")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Static Next.js + Node.js API"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Deployed with", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://zeit.co/docs",
    target: "_blank",
    rel: "noreferrer noopener",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "ZEIT Now"), "!"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/zeit/now-examples/blob/master/nextjs-node",
    target: "_blank",
    rel: "noreferrer noopener",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "This project"), ' ', "is a ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://nextjs.org/",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Next.js"), " app with two directories,", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "/pages"), " for static content and ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "/api"), " which contains a serverless ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://nodejs.org/en/",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Node.js"), ' ', "function. See", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/api/date.js",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "api/date.js"), " for the Date API with Node.js"), "."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "The date according to Node.js is:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, date ? date : 'Loading date...'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "173879261",
    __self: this
  }, "main.jsx-173879261{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;box-sizing:border-box;display:grid;font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue', 'Helvetica','Arial',sans-serif;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;line-height:1.65;margin:0 auto;max-width:680px;min-height:100vh;padding:72px 0;text-align:center;}h1.jsx-173879261{font-size:45px;}h2.jsx-173879261{margin-top:1.5em;}p.jsx-173879261{font-size:16px;}a.jsx-173879261{border-bottom:1px solid white;color:#0076ff;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}a.jsx-173879261:hover{border-bottom:1px solid #0076ff;}code.jsx-173879261,pre.jsx-173879261{color:#d400ff;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace, serif;font-size:0.92em;}code.jsx-173879261:before,code.jsx-173879261:after{content:'`';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tY3MvRGV2ZWxvcG1lbnQvemVpdC9ub3ctZXhhbXBsZXMvbmV4dGpzLW5vZGUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RrQixBQUdnQyxBQWNOLEFBR0UsQUFHRixBQUdlLEFBT0UsQUFJbEIsQUFRRixZQUNkLEVBTlMsQ0F0QlQsQUFNQSxFQUhBLGFBTWdCLEVBT2hCLFlBTmlCLGVBQ00saUJBekJDLHNCQUNULFdBeUJZLEVBdkJTLCtCQWtDakIsaUJBQ25CLFFBWEEsa0NBdkJlLHFFQUNJLGlCQUNILGNBQ0UsZ0JBQ0MsaUJBQ0YsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21jcy9EZXZlbG9wbWVudC96ZWl0L25vdy1leGFtcGxlcy9uZXh0anMtbm9kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGUuanMnKTtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgY29uc29sZS5sb2coJ0RBVEUnLCBuZXdEYXRlKTtcbiAgICAgIHNldERhdGUobmV3RGF0ZSk7XG4gICAgfVxuICAgIGdldERhdGUoKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZygnREFURTInLCBkYXRlKTtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dC5qcyArIE5vZGUgQVBJPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT5TdGF0aWMgTmV4dC5qcyArIE5vZGUuanMgQVBJPC9oMT5cbiAgICAgIDxoMj5cbiAgICAgICAgRGVwbG95ZWQgd2l0aHsnICd9XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vemVpdC5jby9kb2NzXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgWkVJVCBOb3dcbiAgICAgICAgPC9hPlxuICAgICAgICAhXG4gICAgICA8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25vdy1leGFtcGxlcy9ibG9iL21hc3Rlci9uZXh0anMtbm9kZVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFRoaXMgcHJvamVjdFxuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgaXMgYSA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiPk5leHQuanM8L2E+IGFwcCB3aXRoIHR3byBkaXJlY3Rvcmllcyx7JyAnfVxuICAgICAgICA8Y29kZT4vcGFnZXM8L2NvZGU+IGZvciBzdGF0aWMgY29udGVudCBhbmQgPGNvZGU+L2FwaTwvY29kZT4gd2hpY2hcbiAgICAgICAgY29udGFpbnMgYSBzZXJ2ZXJsZXNzIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZW4vXCI+Tm9kZS5qczwvYT57JyAnfVxuICAgICAgICBmdW5jdGlvbi4gU2VleycgJ31cbiAgICAgICAgPGEgaHJlZj1cIi9hcGkvZGF0ZS5qc1wiPlxuICAgICAgICAgIDxjb2RlPmFwaS9kYXRlLmpzPC9jb2RlPiBmb3IgdGhlIERhdGUgQVBJIHdpdGggTm9kZS5qc1xuICAgICAgICA8L2E+XG4gICAgICAgIC5cbiAgICAgIDwvcD5cbiAgICAgIDxiciAvPlxuICAgICAgPGgyPlRoZSBkYXRlIGFjY29yZGluZyB0byBOb2RlLmpzIGlzOjwvaDI+XG4gICAgICA8cD57ZGF0ZSA/IGRhdGUgOiAnTG9hZGluZyBkYXRlLi4uJ308L3A+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gVGV4dCcsICdTRiBQcm8gSWNvbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxuICAgICAgICAgICAgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgaHlwaGVuczogYXV0bztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42NTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDcycHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogIzAwNzZmZjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDc2ZmY7XG4gICAgICAgIH1cbiAgICAgICAgY29kZSxcbiAgICAgICAgcHJlIHtcbiAgICAgICAgICBjb2xvcjogI2Q0MDBmZjtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZSxcbiAgICAgICAgICAgIHNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45MmVtO1xuICAgICAgICB9XG4gICAgICAgIGNvZGU6YmVmb3JlLFxuICAgICAgICBjb2RlOmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnXFxgJztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/mcs/Development/zeit/now-examples/nextjs-node/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4ecd70e911a8d6429529.hot-update.js.map