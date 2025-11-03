import {  createSlice} from "@reduxjs/toolkit";

import { io } from "socket.io-client";
 const socketSlice =createSlice({
    name:"socket",
    initialState:{
     socket:null,
     onlinesUser:[],      
    },
   reducers:{
     initialSocket: (state,action)=>{
       console.log(action.payload);
        const socket = io("http://localhost:5000",{
         query:{
            userId:action.payload,
         }
        });
        state.socket=socket;   
     },
     onlinesUserState:(state,action)=>{
    
        state.onlinesUser=action.payload;
        }
     
}})


export const {initialSocket,onlinesUserState}= socketSlice.actions;
export default socketSlice.reducer;
