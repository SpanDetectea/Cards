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
        deleteCard(state, action) {
            state.data = state.data.filter(card => card.id !== action.payload)
        },
        toggleLike(state, action) {
            const id = state.data.findIndex(card => card.id === action.payload)
            state.data[id].like = state.data[id].like ? !state.data[id].like : true;
        }
    },
});

export const { getData, onLoadOff, onLoadOn, deleteCard, toggleLike } =
    cardSlices.actions;

export default cardSlices.reducer;