import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './Slices/CartSlice'; // Ensure you are importing the default or named slice correctly

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,  // Access the reducer from the slice
    },
});
