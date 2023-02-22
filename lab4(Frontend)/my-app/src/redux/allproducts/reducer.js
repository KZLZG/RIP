import {createSlice} from "@reduxjs/toolkit";

 const initialState = {
     allProducts: [
         {
             "pk": 3,
             "name": "HIGHTEC ANTIFREEZE 1.5л",
             "fabricant": 3,
             "description": "Лучший антифриз на рынке",
             "in_stock": 20,
             "price": "400.00",
             "category": 2,
             "img": "https://rowe-av.ru/image/cache/catalog/product/21017-0015-99-500x500.png"
         },
         {
             "pk": 5,
             "name": "HIGHTEC ATF 9006 20л",
             "fabricant": 3,
             "description": "высокопроизводительное гидравлическое масло на основе HC-синтеза",
             "in_stock": 17,
             "price": "1600.00",
             "category": 4,
             "img": "https://rowe-av.ru/image/cache/catalog/product/25051-0200-99-500x500.png"
         },
         {
             "pk": 4,
             "name": "HIGHTEC DOT 41л",
             "fabricant": 2,
             "description": "cинтетическая высокопроизводительная тормозная жидкость на гликоленовой основе с ингибиторами окисления",
             "in_stock": 21,
             "price": "800.00",
             "category": 5,
             "img": "https://rowe-av.ru/image/cache/catalog/product/25109-0010-99-500x500.png"
         },
         {
             "pk": 2,
             "name": "HIGHTEC POWER BOAT 2-T 5л",
             "fabricant": 2,
             "description": "Идеально для лодок",
             "in_stock": 4,
             "price": "1300.00",
             "category": 1,
             "img": "https://rowe-av.ru/image/cache/catalog/product/20078-0050-99-500x500.png"
         },
         {
             "pk": 6,
             "name": "HIGHTEC Racing Greaseguard RLF2 1л",
             "fabricant": 1,
             "description": "присадка к топливу. Защищает устаревшие двигатели от износа при использовании бессвинцового топлива",
             "in_stock": 6,
             "price": "1100.00",
             "category": 3,
             "img": "https://rowe-av.ru/image/cache/catalog/product/50203-0010-99-500x500.png"
         },
         {
             "pk": 1,
             "name": "HIGHTEC SYNT ASIA SAE 5W-30 NEW 5л",
             "fabricant": 1,
             "description": "Идеально для машин",
             "in_stock": 15,
             "price": "750.00",
             "category": 1,
             "img": "https://rowe-av.ru/image/cache/catalog/product/20245-0050-99-500x500.png"
         }
     ],
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
