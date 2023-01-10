import {createSlice} from "@reduxjs/toolkit";

 const initialState = {
     allProducts: [],
 }

 const allProductSlice = createSlice({
     name: "allProducts",
     initialState,
     reducers: {
         setallProducts: (state, action) =>{
             state.allProducts = action.payload;
         },
         clearAllProducts(state) {
             state.allProducts = [];
         },
     },
 });

 export const { setallProducts, clearAllProducts } = allProductSlice.actions;
export default allProductSlice.reducer;
