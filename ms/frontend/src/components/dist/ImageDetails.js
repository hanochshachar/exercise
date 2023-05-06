"use strict";
exports.__esModule = true;
exports.ImageDetails = void 0;
var react_1 = require("react");
require("../styles/main.scss");
exports.ImageDetails = function (_a) {
    var views = _a.views, downloads = _a.downloads, collections = _a.collections, likes = _a.likes, comments = _a.comments, user = _a.user, setBoolDetails = _a.setBoolDetails;
    return (react_1["default"].createElement("div", { className: 'details' },
        react_1["default"].createElement("p", null,
            "user: ",
            user),
        react_1["default"].createElement("p", null,
            "views: ",
            views),
        react_1["default"].createElement("p", null,
            "downloads: ",
            downloads),
        react_1["default"].createElement("p", null,
            "collections: ",
            collections),
        react_1["default"].createElement("p", null,
            "likes: ",
            likes),
        react_1["default"].createElement("p", null,
            "comments: ",
            comments),
        react_1["default"].createElement("h4", { onClick: function () { return setBoolDetails(false); } }, "exit")));
};
