import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({

    initialState : [],
    name : 'Cart',
    reducers : {
        addToCart : (state, action)=>{
            state.push(action.payload);
        },
        removeFromCart : (state, action)=>{
            return state.filter((item) => item.id !== action.payload)
        },
    }
});

export const {addToCart, removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;