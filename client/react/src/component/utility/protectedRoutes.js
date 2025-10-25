import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const navigate=useNavigate();
    const {isAuthenticate,screenLoading}=useSelector(state=>state.userReducer);
 
useEffect(()=>{
  console.log(isAuthenticate,screenLoading);
  if(!isAuthenticate && !screenLoading) navigate("/login");   

},[isAuthenticate,screenLoading])

  return (

      children

  )
}

export default ProtectedRoutes
