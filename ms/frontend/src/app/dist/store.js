"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var counterSlice_1 = require("../features/counter/counterSlice");
var categorySlice_1 = require("../features/images/categorySlice");
var imageSlice_1 = require("../features/images/imageSlice");
exports.store = toolkit_1.configureStore({
    reducer: {
        counter: counterSlice_1["default"],
        category: categorySlice_1["default"],
        images: imageSlice_1["default"]
    }
});
