import {  createSlice} from "@reduxjs/toolkit";

const userSlice =createSlice({
    name:"user",
    initialState:{
        isLogedin:false,
        screenLoading:false,
    },
   reducers:{
    Login:()=>{
        console.log("welcom");
    }
   }
})


export const {Login}= userSlice.actions;
export default userSlice.reducer;
