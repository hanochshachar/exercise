"use strict";
exports.__esModule = true;
exports.imagesStatus = exports.imagesSelector = exports.changeImages = exports.ImagesSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    images: [],
    status: "idle"
};
exports.ImagesSlice = toolkit_1.createSlice({
    name: "images",
    initialState: initialState,
    reducers: {
        changeImages: function (state, action) {
            state.images = action.payload;
        }
    }
});
exports.changeImages = exports.ImagesSlice.actions.changeImages;
exports.imagesSelector = function (state) { return state.images.images; };
exports.imagesStatus = function (state) { return state.images.status; };
exports["default"] = exports.ImagesSlice.reducer;
