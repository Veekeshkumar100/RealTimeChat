import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserThunk= createAsyncThunk("user.fetchUserById", async()=>{
    console.log("reductjxj-thunk");
})