import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import productsSlice from "./productsSlice";


const store=configureStore({
    reducer:{
        //list of reducers using key value pair
        cart: cartSlice,
        wish: wishlistSlice,
        productsSlice: productsSlice
    }
})

export default store