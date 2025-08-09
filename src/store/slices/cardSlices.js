import { createSlice } from '@reduxjs/toolkit';

const initialState= {
  data: [],
  loading: true
};

const cardSlices = createSlice({
    name: "cards",
    initialState,
    reducers: {
        getData(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        onLoadOn(state) {
            state.loading = true;
        },
        onLoadOff(state) {
            state.loading = false;
        },
    },
});

export const { getData, onLoadOff, onLoadOn } =
    cardSlices.actions;

export default cardSlices.reducer;