"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./styles/main.scss");
var hooks_1 = require("./app/hooks");
var categorySlice_1 = require("./features/images/categorySlice");
function App() {
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var dispatch = hooks_1.useAppDispatch();
    var options = ["backgrounds", "fashion", "nature", "science",
        "education", "feelings", "health", "people",
        "religion", "places", "animals", "industry",
        "computer", "food", "sports", "transportation",
        "travel", "buildings", "business", "music"];
    var handlePrev = function () {
        page > 1 ? setPage(page - 1) : prompt("no previous data!!");
    };
    var handleNext = function () {
        page < 10 ? setPage(page + 1) : prompt("no more pages!!");
    };
    var handleChangeCategory = function (ev) {
        try {
            dispatch(categorySlice_1.changeCategory(ev.target.value));
        }
        catch (error) {
            console.error(error);
        }
    };
    var selectedCategory = hooks_1.useAppSelector(categorySlice_1.categorySelector);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "top" },
            react_1["default"].createElement("button", { onClick: handlePrev }, "prev"),
            react_1["default"].createElement("select", { value: selectedCategory, onChange: handleChangeCategory },
                react_1["default"].createElement("option", { value: "" }, "Select an option"),
                options.map(function (option, index) { return (react_1["default"].createElement("option", { key: index, value: option }, option)); })),
            react_1["default"].createElement("button", { onClick: handleNext }, "next"))));
}
exports["default"] = App;
