"use strict";
exports.__esModule = true;
exports.Main = void 0;
var react_1 = require("react");
var Nav_1 = require("./Nav");
var react_router_dom_1 = require("react-router-dom");
require("../styles/allComponents.scss");
exports.Main = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", { className: 'title' }, "node challenge"),
        react_1["default"].createElement(Nav_1.Nav, null),
        react_1["default"].createElement(react_router_dom_1.Outlet, null)));
};
