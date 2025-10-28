import {  createSlice} from "@reduxjs/toolkit";
import { getOtherUser, getUserProfile, loginUserThunk, logoutUserThunk, registerUserThunk } from "./user.thunk";
 const userSlice =createSlice({
    name:"user",
    initialState:{
        isAuthenticate:false,
        screenLoading:true,
        otherUserDetail:null,
        setUserMessage:JSON.parse(localStorage.getItem("receiver")),
        userData:null,
        buttonLoading:false,
    },
   reducers:{
    setUserMessageData:(state,action)=>{
        state.setUserMessage=action.payload;
        localStorage.setItem("receiver",JSON.stringify(action.payload));
    }
   },
   extraReducers: (builder) => {
    //logn in user
    builder
.addCase(loginUserThunk.pending, (state) => {
    state.buttonLoading=true;
})
builder.addCase(loginUserThunk.fulfilled, (state, action) => {
   state.isAuthenticate=true;
  

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
        state.otherUserDetail=null;
        state.userData=null;
        state.setUserMessage=null,
        localStorage.clear()
 })

builder.addCase(logoutUserThunk.rejected, (state, action) => {
     state.buttonLoading=false;
     
});
//getuser profile
builder.addCase(getUserProfile.pending, (state) => {
    state.screenLoading=true;
})
builder.addCase(getUserProfile.fulfilled, (state, action) => {
    state.screenLoading=false;
   state.isAuthenticate=true;
    state.userData=action.payload;
 
})
builder.addCase(getUserProfile.rejected, (state, action) => {
     state.screenLoading=false;

});
//get other user 
builder.addCase(getOtherUser.pending, (state) => {
    state.screenLoading=true;
})
builder.addCase(getOtherUser.fulfilled, (state, action) => {
    state.screenLoading=false;    
 
     state.otherUserDetail=action.payload?.getOtherUser;

})
builder.addCase(getOtherUser.rejected, (state, action) => {
     state.screenLoading=false;

});
},
})


export const {setUserMessageData}= userSlice.actions;
export default userSlice.reducer;
