 import {createSlice} from "@reduxjs/toolkit";

 const initialState = {
     cartItems: [],
 }

 const cartSlice = createSlice({
     name: "cart",
     initialState,
     reducers: {
         setCartItem: (state, action) =>{
             state.cartItems.push(action.payload);
         },
         deleteCartItem: (state, action) =>{
             state.cartItems = state.cartItems.filter(item =>item.id !== action.payload)
         },
         clearAllItems(state) {
             state.cartItems = [];
         },
     },
 });

 export const selectAllItems = (state) => state.cartItems;
 export const { setCartItem, deleteCartItem, clearAllItems} = cartSlice.actions;
 export default cartSlice.reducer;
