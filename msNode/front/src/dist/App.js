"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Main_1 = require("./components/Main");
var Sort_1 = require("./components/Sort");
var Pagination_1 = require("./components/Pagination");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: '/', element: react_1["default"].createElement(Main_1.Main, null) },
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/sorted-data', element: react_1["default"].createElement(Sort_1.Sort, null) }),
                    react_1["default"].createElement(react_router_dom_1.Route, { path: '/pagination-data', element: react_1["default"].createElement(Pagination_1.Pagination, null) }))))));
}
exports["default"] = App;
