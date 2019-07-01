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
        var newDate;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('/api/date.js');

              case 2:
                newDate = _context.sent;
                console.log('DATE', newDate);
                setDate(newDate);

              case 5:
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
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Next.js + Node API")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Static Next.js + Node.js API"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Deployed with", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://zeit.co/docs",
    target: "_blank",
    rel: "noreferrer noopener",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "ZEIT Now"), "!"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/zeit/now-examples/blob/master/nextjs-node",
    target: "_blank",
    rel: "noreferrer noopener",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "This project"), ' ', "is a ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://nextjs.org/",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Next.js"), " app with two directories,", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "/pages"), " for static content and ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "/api"), " which contains a serverless ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://nodejs.org/en/",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Node.js"), ' ', "function. See", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/api/date.js",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "api/date.js"), " for the Date API with Node.js"), "."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "The date according to Node.js is:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, date ? date.newDate : 'Loading date...'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "173879261",
    __self: this
  }, "main.jsx-173879261{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;box-sizing:border-box;display:grid;font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue', 'Helvetica','Arial',sans-serif;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;line-height:1.65;margin:0 auto;max-width:680px;min-height:100vh;padding:72px 0;text-align:center;}h1.jsx-173879261{font-size:45px;}h2.jsx-173879261{margin-top:1.5em;}p.jsx-173879261{font-size:16px;}a.jsx-173879261{border-bottom:1px solid white;color:#0076ff;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}a.jsx-173879261:hover{border-bottom:1px solid #0076ff;}code.jsx-173879261,pre.jsx-173879261{color:#d400ff;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace, serif;font-size:0.92em;}code.jsx-173879261:before,code.jsx-173879261:after{content:'`';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tY3MvRGV2ZWxvcG1lbnQvemVpdC9ub3ctZXhhbXBsZXMvbmV4dGpzLW5vZGUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURrQixBQUdnQyxBQWNOLEFBR0UsQUFHRixBQUdlLEFBT0UsQUFJbEIsQUFRRixZQUNkLEVBTlMsQ0F0QlQsQUFNQSxFQUhBLGFBTWdCLEVBT2hCLFlBTmlCLGVBQ00saUJBekJDLHNCQUNULFdBeUJZLEVBdkJTLCtCQWtDakIsaUJBQ25CLFFBWEEsa0NBdkJlLHFFQUNJLGlCQUNILGNBQ0UsZ0JBQ0MsaUJBQ0YsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21jcy9EZXZlbG9wbWVudC96ZWl0L25vdy1leGFtcGxlcy9uZXh0anMtbm9kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBhd2FpdCBmZXRjaCgnL2FwaS9kYXRlLmpzJyk7XG4gICAgICBjb25zb2xlLmxvZygnREFURScsIG5ld0RhdGUpO1xuICAgICAgc2V0RGF0ZShuZXdEYXRlKTtcbiAgICB9XG4gICAgZ2V0RGF0ZSgpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKCdEQVRFMicsIGRhdGUpO1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0LmpzICsgTm9kZSBBUEk8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPlN0YXRpYyBOZXh0LmpzICsgTm9kZS5qcyBBUEk8L2gxPlxuICAgICAgPGgyPlxuICAgICAgICBEZXBsb3llZCB3aXRoeycgJ31cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly96ZWl0LmNvL2RvY3NcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICBaRUlUIE5vd1xuICAgICAgICA8L2E+XG4gICAgICAgICFcbiAgICAgIDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbm93LWV4YW1wbGVzL2Jsb2IvbWFzdGVyL25leHRqcy1ub2RlXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgVGhpcyBwcm9qZWN0XG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBpcyBhIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCI+TmV4dC5qczwvYT4gYXBwIHdpdGggdHdvIGRpcmVjdG9yaWVzLHsnICd9XG4gICAgICAgIDxjb2RlPi9wYWdlczwvY29kZT4gZm9yIHN0YXRpYyBjb250ZW50IGFuZCA8Y29kZT4vYXBpPC9jb2RlPiB3aGljaFxuICAgICAgICBjb250YWlucyBhIHNlcnZlcmxlc3MgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9lbi9cIj5Ob2RlLmpzPC9hPnsnICd9XG4gICAgICAgIGZ1bmN0aW9uLiBTZWV7JyAnfVxuICAgICAgICA8YSBocmVmPVwiL2FwaS9kYXRlLmpzXCI+XG4gICAgICAgICAgPGNvZGU+YXBpL2RhdGUuanM8L2NvZGU+IGZvciB0aGUgRGF0ZSBBUEkgd2l0aCBOb2RlLmpzXG4gICAgICAgIDwvYT5cbiAgICAgICAgLlxuICAgICAgPC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDI+VGhlIGRhdGUgYWNjb3JkaW5nIHRvIE5vZGUuanMgaXM6PC9oMj5cbiAgICAgIDxwPntkYXRlID8gZGF0ZS5uZXdEYXRlIDogJ0xvYWRpbmcgZGF0ZS4uLid9PC9wPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnLCAnU0YgUHJvIEljb25zJywgJ0hlbHZldGljYSBOZXVlJyxcbiAgICAgICAgICAgICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGh5cGhlbnM6IGF1dG87XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjU7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiA3MnB4IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgY29sb3I6ICMwMDc2ZmY7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3NmZmO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUsXG4gICAgICAgIHByZSB7XG4gICAgICAgICAgY29sb3I6ICNkNDAwZmY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2UsXG4gICAgICAgICAgICBzZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDAuOTJlbTtcbiAgICAgICAgfVxuICAgICAgICBjb2RlOmJlZm9yZSxcbiAgICAgICAgY29kZTphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJ1xcYCc7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/mcs/Development/zeit/now-examples/nextjs-node/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7c62de89a8735dcfef07.hot-update.js.map