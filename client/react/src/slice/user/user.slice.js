import {  createSlice} from "@reduxjs/toolkit";
import { loginUserThunk } from "./user.thunk";

 const userSlice =createSlice({
    name:"user",
    initialState:{
        isLogedin:false,
        screenLoading:false,
    },
   reducers:{
    LoginUser:()=>{
        console.log("welcom");
    },
    
   },
   extraReducers: (builder) => {
builder
.addCase(loginUserThunk.pending, (state) => {
 console.log("pending")
})
.addCase(loginUserThunk.fulfilled, (state, action) => {
 console.log("fulfilled")
})
.addCase(loginUserThunk.rejected, (state, action) => {
    console.log("reject")
});
},


})


export const {LoginUser}= userSlice.actions;
export default userSlice.reducer;
