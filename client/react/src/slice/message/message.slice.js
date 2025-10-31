import { createSlice } from "@reduxjs/toolkit";
import { getMessages, sendMessage } from "./message.thunk";

export const messageSlice=createSlice({
    name:"message",
    initialState:{
        screenLoading:false,
        usersMessage:null,
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
           console.log(action.payload);  
           const oldmessage=state.usersMessage ?? [];
              state.usersMessage=[...oldmessage,action.payload.newmessage]
           state.screenLoading=false;    
       })
       builder.addCase(sendMessage.rejected, (state, action) => {
            state.screenLoading=false;
          });
    }
})
export const {}= messageSlice.actions;
export default messageSlice.reducer;