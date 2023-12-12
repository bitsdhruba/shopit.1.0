import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({

    initialState : [],
    name : 'Cart',
    reducers : {
        addToCart : (state, action)=>{

        },
        removeFromCart : (state, action)=>{

        },
        buyNow : (state, action)=>{

        },
    }
});

export const {addToCart, removeFromCart, buyNow} = CartSlice.actions;
export default CartSlice.reducer;