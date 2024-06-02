import { createSlice } from "@reduxjs/toolkit";

const button=createSlice({
    name:"button",
    initialState:false,
    reducers:{
        buttonToggle:(state)=>{
            return !state;
        }
    }
})

export default button;
export const buttonAction=button.actions;