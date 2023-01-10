import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/cart.reducer";
import productReducer from "./product/reducer";
import userReducer from "./user/reducer";
import allProductsReducer from "./allproducts/reducer";
import CategoriesReducer from "./categories/reducer";


export default configureStore({
    reducer: combineReducers({
        cart: cartReducer,
        product: productReducer,
        user: userReducer,
        allProducts:allProductsReducer,
        categories: CategoriesReducer,
    }),

});
