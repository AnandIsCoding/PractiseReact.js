import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        add(state, action) {
            state.items.push(action.payload);
        },
        remove(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { add, remove} = CartSlice.actions;
export default CartSlice;
