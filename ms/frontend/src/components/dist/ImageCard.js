"use strict";
exports.__esModule = true;
exports.ImageCard = void 0;
var react_1 = require("react");
require("../styles/main.scss");
var hooks_1 = require("../app/hooks");
var imageSlice_1 = require("../features/images/imageSlice");
var ImageDetails_1 = require("./ImageDetails");
exports.ImageCard = function () {
    var _a = react_1.useState(false), boolDetails = _a[0], setBoolDetails = _a[1];
    var _b = react_1.useState(null), selectedImage = _b[0], setSelectedImage = _b[1];
    var imagesArray = hooks_1.useAppSelector(imageSlice_1.imagesSelector);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'images' },
            imagesArray !== null && imagesArray.map(function (image, index) {
                return (react_1["default"].createElement("div", { className: "image", key: index },
                    react_1["default"].createElement("img", { className: 'img', onClick: function () { setBoolDetails(true); setSelectedImage(image); }, src: image.largeImageURL, alt: "" })));
            }),
            boolDetails === true && react_1["default"].createElement(ImageDetails_1.ImageDetails, { views: selectedImage.views, downloads: selectedImage.downloads, collections: selectedImage.collections, likes: selectedImage.likes, comments: selectedImage.comments, user: selectedImage.user, setBoolDetails: setBoolDetails }))));
};
