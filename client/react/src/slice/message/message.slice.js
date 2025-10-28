import { createSlice } from "@reduxjs/toolkit";
import { getMessages, sendMessage } from "./message.thunk";

export const messageSlice=createSlice({
    name:"message",
    initialState:{
        screenLoading:false,
        usersMessage:[],
    },
    reducers:{

    },
    extraReducers: (builder)=>{
       //get message 
       builder.addCase(getMessages.pending, (state) => {
           state.screenLoading=true;
       })
       builder.addCase(getMessages.fulfilled, (state, action) => {
           state.screenLoading=false;    
            state.usersMessage=action.payload.messages;
       })
       builder.addCase(getMessages.rejected, (state, action) => {
            state.screenLoading=false;
       });

       //send data
       builder.addCase(sendMessage.pending, (state) => {
           state.screenLoading=true;
       })
       builder.addCase(sendMessage.fulfilled, (state, action) => {
           state.screenLoading=false;    
           console.log(action.payload);  
           state.usersMessage=[...state.usersMessage,action.payload.newmessage]
       })
       builder.addCase(sendMessage.rejected, (state, action) => {
            state.screenLoading=false;
          });
    }
})
export const {}= messageSlice.actions;
export default messageSlice.reducer;