import { createSlice } from "@reduxjs/toolkit";
import {all_Products} from '../../public/assets/all_Products';
import new_collections from '../../public/assets/new_collections';
import popular_product from '../../public/assets/popular_product';

const allProducts=createSlice({
    name:"allProducts",
    initialState:{all_Products,new_collections,popular_product},
})

export default allProducts;