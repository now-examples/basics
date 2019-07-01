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
                setDate({
                  currentDate: newDate
                });

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
  }, null);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Next.js + Node API")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Static Next.js + Node.js API"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Deployed with", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://zeit.co/docs",
    target: "_blank",
    rel: "noreferrer noopener",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "ZEIT Now"), "!"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/zeit/now-examples/blob/master/nextjs-node",
    target: "_blank",
    rel: "noreferrer noopener",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "This project"), ' ', "is a ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://nextjs.org/",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Next.js"), " app with two directories,", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "/pages"), " for static content and ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "/api"), " which contains a serverless ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://nodejs.org/en/",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Node.js"), ' ', "function. See", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "/api/date.js",
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("code", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "api/date.js"), " for the Date API with Node.js"), "."), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "The date according to Node.js is:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-173879261",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, date ? date.currentDate : 'Loading date...'), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "173879261",
    __self: this
  }, "main.jsx-173879261{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;box-sizing:border-box;display:grid;font-family:'SF Pro Text','SF Pro Icons','Helvetica Neue', 'Helvetica','Arial',sans-serif;-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;line-height:1.65;margin:0 auto;max-width:680px;min-height:100vh;padding:72px 0;text-align:center;}h1.jsx-173879261{font-size:45px;}h2.jsx-173879261{margin-top:1.5em;}p.jsx-173879261{font-size:16px;}a.jsx-173879261{border-bottom:1px solid white;color:#0076ff;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}a.jsx-173879261:hover{border-bottom:1px solid #0076ff;}code.jsx-173879261,pre.jsx-173879261{color:#d400ff;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace, serif;font-size:0.92em;}code.jsx-173879261:before,code.jsx-173879261:after{content:'`';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tY3MvRGV2ZWxvcG1lbnQvemVpdC9ub3ctZXhhbXBsZXMvbmV4dGpzLW5vZGUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUdnQyxBQWNOLEFBR0UsQUFHRixBQUdlLEFBT0UsQUFJbEIsQUFRRixZQUNkLEVBTlMsQ0F0QlQsQUFNQSxFQUhBLGFBTWdCLEVBT2hCLFlBTmlCLGVBQ00saUJBekJDLHNCQUNULFdBeUJZLEVBdkJTLCtCQWtDakIsaUJBQ25CLFFBWEEsa0NBdkJlLHFFQUNJLGlCQUNILGNBQ0UsZ0JBQ0MsaUJBQ0YsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21jcy9EZXZlbG9wbWVudC96ZWl0L25vdy1leGFtcGxlcy9uZXh0anMtbm9kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBhd2FpdCBmZXRjaCgnL2FwaS9kYXRlLmpzJyk7XG4gICAgICBjb25zb2xlLmxvZygnREFURScsIG5ld0RhdGUpO1xuICAgICAgc2V0RGF0ZSh7IGN1cnJlbnREYXRlOiBuZXdEYXRlIH0pO1xuICAgIH1cbiAgICBnZXREYXRlKCk7XG4gIH0sIG51bGwpO1xuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0LmpzICsgTm9kZSBBUEk8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPlN0YXRpYyBOZXh0LmpzICsgTm9kZS5qcyBBUEk8L2gxPlxuICAgICAgPGgyPlxuICAgICAgICBEZXBsb3llZCB3aXRoeycgJ31cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly96ZWl0LmNvL2RvY3NcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG4gICAgICAgID5cbiAgICAgICAgICBaRUlUIE5vd1xuICAgICAgICA8L2E+XG4gICAgICAgICFcbiAgICAgIDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbm93LWV4YW1wbGVzL2Jsb2IvbWFzdGVyL25leHRqcy1ub2RlXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgVGhpcyBwcm9qZWN0XG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBpcyBhIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCI+TmV4dC5qczwvYT4gYXBwIHdpdGggdHdvIGRpcmVjdG9yaWVzLHsnICd9XG4gICAgICAgIDxjb2RlPi9wYWdlczwvY29kZT4gZm9yIHN0YXRpYyBjb250ZW50IGFuZCA8Y29kZT4vYXBpPC9jb2RlPiB3aGljaFxuICAgICAgICBjb250YWlucyBhIHNlcnZlcmxlc3MgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9lbi9cIj5Ob2RlLmpzPC9hPnsnICd9XG4gICAgICAgIGZ1bmN0aW9uLiBTZWV7JyAnfVxuICAgICAgICA8YSBocmVmPVwiL2FwaS9kYXRlLmpzXCI+XG4gICAgICAgICAgPGNvZGU+YXBpL2RhdGUuanM8L2NvZGU+IGZvciB0aGUgRGF0ZSBBUEkgd2l0aCBOb2RlLmpzXG4gICAgICAgIDwvYT5cbiAgICAgICAgLlxuICAgICAgPC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDI+VGhlIGRhdGUgYWNjb3JkaW5nIHRvIE5vZGUuanMgaXM6PC9oMj5cbiAgICAgIDxwPntkYXRlID8gZGF0ZS5jdXJyZW50RGF0ZSA6ICdMb2FkaW5nIGRhdGUuLi4nfTwvcD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NGIFBybyBUZXh0JywgJ1NGIFBybyBJY29ucycsICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgICAgICAgICAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBoeXBoZW5zOiBhdXRvO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjgwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogNzJweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiAjMDA3NmZmO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNzZmZjtcbiAgICAgICAgfVxuICAgICAgICBjb2RlLFxuICAgICAgICBwcmUge1xuICAgICAgICAgIGNvbG9yOiAjZDQwMGZmO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlLFxuICAgICAgICAgICAgc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjkyZW07XG4gICAgICAgIH1cbiAgICAgICAgY29kZTpiZWZvcmUsXG4gICAgICAgIGNvZGU6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICdcXGAnO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/mcs/Development/zeit/now-examples/nextjs-node/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.bdbf83c5d9ada01f4116.hot-update.js.map