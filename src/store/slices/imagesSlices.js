import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  images: []
};

const imagesSlices = createSlice({
    name: "images",
    initialState,
    reducers: {
        getImages(state, action) {
            state.loading = false;
            state.images = action.payload;
        },

    },
});

export const { getImages } =
    imagesSlices.actions;

export default imagesSlices.reducer;