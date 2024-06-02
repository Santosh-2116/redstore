import { configureStore } from "@reduxjs/toolkit";
import allProducts from './allProductsSlice'
import cartProducts from "./cart";
import button from "./button";

const Appstore=configureStore({
    reducer:{
        allProducts:allProducts.reducer,
        cartProducts:cartProducts.reducer,
        button:button.reducer
    }
})

export default Appstore;