import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance, axiosInstanceS } from "../../component/utility/axiosInstance";
import {toast} from "react-hot-toast";

export const loginUserThunk= createAsyncThunk("user/login", async({userName,password},{rejectWithValue})=>{
 try {
    console.log(userName,password);
    const response = await axiosInstance.post("/users/login",{
        userName, 
        password,
    });
   toast.success("user logged in susseccfully");
    return response.data;
 } catch (error) {
    console.log(error);
 toast.error(error?.response?.data?.message || "something went wrong");
    return rejectWithValue(err.response.data) //use for sending custom error message in the rejected action.payload
 }


})
export const getUserProfile= createAsyncThunk("user/get-userProfile", async(_,{rejectWithValue})=>{
 try {

   const  response=await axiosInstance.get("/users/profile");
    return response.data;
 } catch (error) {
    console.log(error);

    return rejectWithValue(err.response.data) //use for sending custom error message in the rejected action.payload
 }


})
export const getOtherUser= createAsyncThunk("user/get-OtherProfile", async(_,{rejectWithValue})=>{
 try {

    const response = await axiosInstance.get("/users/get-otherUser");



    return response.data;
 } catch (error) {
    console.log(error);

    return rejectWithValue(err.response.data) //use for sending custom error message in the rejected action.payload
 }


})
export const logoutUserThunk= createAsyncThunk("user/logout", async(_,{rejectWithValue})=>{
 try {
    const response = await axiosInstance.get("/users/logout");
     return response.data;
  
 } catch (error) {
    console.log(error);
    return rejectWithValue(err.response.data) //use for sending custom error message in the rejected action.payload
 }


})


export const registerUserThunk=createAsyncThunk("user/register",async(data,{rejectWithValue})=>{
    try {
   
      const {fullName,userName,password,avatar,gender} = data;
        const response = await axiosInstanceS.post('users/register',{fullName,userName,password,avatar,gender});
  toast.success("Account cerated  susseccfully");
        return response.data;

    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);

    }
})


