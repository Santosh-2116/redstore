import { createSlice } from "@reduxjs/toolkit";

const cartProducts=createSlice({
    name:"cartProducts",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        deleteToCart:(state,action)=>{
            state.splice(state.indexOf(action.payload),1);
        }
    }
})

export default cartProducts;
export const cartProductsAction=cartProducts.actions;