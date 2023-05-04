import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ImagesState {
    images: [],
    status: "idle" | "loading" | "failed"
}

const initialState: ImagesState = {
    images: [],
    status: "idle"
}

export const ImagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        changeImages: (state, action) => {
            state.images = action.payload;
        }
    }
})

export const {changeImages} = ImagesSlice.actions;
export const imagesSelector = (state: RootState) => state.images.images;
export const imagesStatus = (state: RootState) => state.images.status;
export default ImagesSlice.reducer;