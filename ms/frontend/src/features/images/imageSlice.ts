import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getImagesAsync } from "./dist/imagesAPI";

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
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(getImagesAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getImagesAsync.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle';
                state.images = action.payload
            })
            .addCase(getImagesAsync.rejected, (state) => {
                state.status = 'failed'
            })
    })
})

export const imagesSelector = (state: RootState) => state.images.images;
export const imagesStatus = (state: RootState) => state.images.status;
export default ImagesSlice.reducer;