"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
require("./styles/main.scss");
var hooks_1 = require("./app/hooks");
var ImageCard_1 = require("./components/ImageCard");
var imagesAPI_1 = require("./features/images/imagesAPI");
function App() {
    var _this = this;
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    var _b = react_1.useState('backgrounds'), category = _b[0], setCategory = _b[1];
    var dispatch = hooks_1.useAppDispatch();
    var options = ["backgrounds", "fashion", "nature", "science",
        "education", "feelings", "health", "people",
        "religion", "places", "animals", "industry",
        "computer", "food", "sports", "transportation",
        "travel", "buildings", "business", "music"];
    var handlePrev = function () {
        page > 1 ? setPage(page - 1) : alert("no previous data!!");
    };
    var handleNext = function () {
        page < 10 ? setPage(page + 1) : alert("no more pages!!");
    };
    var handleChangeCategory = function (ev) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ev.preventDefault();
            try {
                setCategory(ev.target.value);
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    }); };
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                dispatch(imagesAPI_1.getImagesAsync({ category: category, page: page }));
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
    }, []);
    react_1.useEffect(function () {
        fetchData();
    }, [category, page]);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "top" },
            react_1["default"].createElement("button", { onClick: handlePrev }, "prev"),
            react_1["default"].createElement("select", { value: category, onChange: handleChangeCategory }, options.map(function (option, index) { return (react_1["default"].createElement("option", { key: index, value: option }, option)); })),
            react_1["default"].createElement("button", { onClick: handleNext }, "next")),
        react_1["default"].createElement(ImageCard_1.ImageCard, null)));
}
exports["default"] = App;
