import { configureStore } from '@reduxjs/toolkit';
import cardSlices from './slices/cardSlices'
import imagesSlices from './slices/imagesSlices'

export const store = configureStore({
    reducer: {
        cards: cardSlices,
        images: imagesSlices
    },
});
