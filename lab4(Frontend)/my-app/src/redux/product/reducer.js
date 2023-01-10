import {createSlice} from "@reduxjs/toolkit";

 const initialState = {
     currentProduct: null,
 }

 const productSlice = createSlice({
     name: "product",
     initialState,
     reducers: {
         setCurrentProduct: (state, action) =>{
             state.currentProduct = action.payload;
         },
         clearCurrentProduct(state) {
             state.allProducts = null;
         },
     },
 });

 export const { setCurrentProduct, clearCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
