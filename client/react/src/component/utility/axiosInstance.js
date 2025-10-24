
import axios from "axios";



export const axiosInstance= axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",
    }

})
export const axiosInstanceS= axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials:true,
    headers:{
        "Content-Type":"multipart/form-data",
    }

})
