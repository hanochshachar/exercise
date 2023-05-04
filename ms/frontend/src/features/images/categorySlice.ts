import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CategoryState{
    category: string,
    status: "idle" | "loading" | "failed"
}

const initialState: CategoryState = {
    category: "",
    status: "idle",
}

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload;
        }
    }
});

export const {changeCategory} = CategorySlice.actions;

export const categorySelector = (state: RootState) => state.category.category;
export const categoryStatus = (state: RootState ) => state.category.status;
export default CategorySlice.reducer;