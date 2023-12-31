import { configureStore } from "@reduxjs/toolkit";
import YoutubeReducer from './YoutubeSlice'

export const store = configureStore({
    reducer: {
        Youtube: YoutubeReducer,
    }
});