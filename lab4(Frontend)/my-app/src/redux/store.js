import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/cart.reducer";

export default configureStore({
    reducer: combineReducers({
        cart: cartReducer
    }),

});
