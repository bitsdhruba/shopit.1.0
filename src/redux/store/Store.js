import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../slices/Slice";

export const store = configureStore({
    reducer : {
        Cart : CartSlice.reducer,
    },
}) 