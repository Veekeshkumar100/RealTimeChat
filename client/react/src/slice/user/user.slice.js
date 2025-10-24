import {  createSlice} from "@reduxjs/toolkit";
import { loginUserThunk, logoutUserThunk, registerUserThunk } from "./user.thunk";


 const userSlice =createSlice({
    name:"user",
    initialState:{
        isAuthenticate:false,
        screenLoading:false,
        userData:null,
        buttonLoading:false,
    },
   reducers:{
    LoginUser:()=>{
        console.log("welcom");
    },
    
   },
   extraReducers: (builder) => {
    //logn in user
    builder
.addCase(loginUserThunk.pending, (state) => {
    state.buttonLoading=true;
})
builder.addCase(loginUserThunk.fulfilled, (state, action) => {
   state.isAuthenticate=true;
   state.userData=action.payload;
 
})
builder.addCase(loginUserThunk.rejected, (state, action) => {
     state.buttonLoading=false;
     
});
//register user
builder.addCase(registerUserThunk.pending, (state) => {
    state.buttonLoading=true;
})
builder.addCase(registerUserThunk.fulfilled, (state, action) => {
   state.isAuthenticate=true;
   state.userData=action.payload;
   console.log(action.payload);
 
})
builder.addCase(registerUserThunk.rejected, (state, action) => {
     state.buttonLoading=false;
     
});
//logout user
builder.addCase(logoutUserThunk.pending, (state) => {
    state.buttonLoading=true;
})
builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
   state.isAuthenticate=false;
  
 
})
builder.addCase(logoutUserThunk.rejected, (state, action) => {
     state.buttonLoading=false;
     
});
},
})


export const {LoginUser}= userSlice.actions;
export default userSlice.reducer;
