import {createSlice} from "@reduxjs/toolkit";

 const initialState = {
     allCategories: [],
     currentCategories: [],
 }

 const CategoriesSlice = createSlice({
     name: "categories",
     initialState,
     reducers: {
         setAllCategories: (state, action) =>{
             state.allCategories = action.payload;
         },
         clearAllCategories(state) {
             state.allCategories = [];
         },
         setCurrentCategories: (state, action) =>{
             state.currentCategories = action.payload;
         },
         clearCurrentCategories(state) {
             state.currentCategories = state.allCategories;
         },
     },
 });

 export const { setAllCategories, clearAllCategories, setCurrentCategories, clearCurrentCategories } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
