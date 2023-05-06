"use strict";
exports.__esModule = true;
exports.imagesStatus = exports.imagesSelector = exports.ImagesSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var imagesAPI_1 = require("./dist/imagesAPI");
var initialState = {
    images: [],
    status: "idle"
};
exports.ImagesSlice = toolkit_1.createSlice({
    name: "images",
    initialState: initialState,
    reducers: {},
    extraReducers: (function (builder) {
        builder
            .addCase(imagesAPI_1.getImagesAsync.pending, function (state) {
            state.status = 'loading';
        })
            .addCase(imagesAPI_1.getImagesAsync.fulfilled, function (state, action) {
            state.status = 'idle';
            state.images = action.payload;
        })
            .addCase(imagesAPI_1.getImagesAsync.rejected, function (state) {
            state.status = 'failed';
        });
    })
});
exports.imagesSelector = function (state) { return state.images.images; };
exports.imagesStatus = function (state) { return state.images.status; };
exports["default"] = exports.ImagesSlice.reducer;
