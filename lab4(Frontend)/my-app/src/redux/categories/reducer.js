import {createSlice} from "@reduxjs/toolkit";

 const initialState = {
     allCategories: [
         {
             "pk": 3,
             "name": "Автохимия"
         },
         {
             "pk": 4,
             "name": "Гидравлическое масло"
         },
         {
             "pk": 1,
             "name": "Моторные масла"
         },
         {
             "pk": 2,
             "name": "Охлаждающие жидкости"
         },
         {
             "pk": 5,
             "name": "Тормозные жидкости"
         }
     ],
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
