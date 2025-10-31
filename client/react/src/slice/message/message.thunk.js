import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../component/utility/axiosInstance";



export const sendMessage=createAsyncThunk("sendMessage",async(data,{rejectWithValue})=>{
    try {
       const {recieverId,message}=data;
        const response = await axiosInstance.post(`message/sendMessage/${recieverId}`,{message});
        console.log(response);
 return response.data       
        
    } catch (error) {
        console.log(error)
          return rejectWithValue(error.response.data)
    }
})
export const getMessages=createAsyncThunk("getmessages",async({recieverId},{rejectWithValue})=>{
    try {
      
        const response = await axiosInstance.get(`message/get-message/${recieverId}`)
       
 return response.data
   
    } catch (error) {
        console.log(error)
          return rejectWithValue(error.response.data)
    }


})
