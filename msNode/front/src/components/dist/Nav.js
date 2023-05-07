"use strict";
exports.__esModule = true;
exports.Nav = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../styles/allComponents.scss");
exports.Nav = function () {
    return (react_1["default"].createElement("div", { className: 'nav' },
        react_1["default"].createElement(react_router_dom_1.Link, { className: 'link', to: '/sorted-data' }, "sort"),
        react_1["default"].createElement(react_router_dom_1.Link, { className: 'link', to: '/pagination-data' }, "pagination")));
};
