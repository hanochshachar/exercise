"use strict";
exports.__esModule = true;
exports.categoryStatus = exports.categorySelector = exports.changeCategory = exports.CategorySlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    category: "",
    status: "idle"
};
exports.CategorySlice = toolkit_1.createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        changeCategory: function (state, action) {
            state.category = action.payload;
        }
    }
});
exports.changeCategory = exports.CategorySlice.actions.changeCategory;
exports.categorySelector = function (state) { return state.category.category; };
exports.categoryStatus = function (state) { return state.category.status; };
exports["default"] = exports.CategorySlice.reducer;
