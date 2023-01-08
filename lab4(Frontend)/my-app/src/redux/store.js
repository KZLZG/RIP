import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/cart.reducer";
import productReducer from "./product/reducer";

export default configureStore({
    reducer: combineReducers({
        cart: cartReducer,
        product: productReducer
    }),

});
