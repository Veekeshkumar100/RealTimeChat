import React, { useEffect, useState } from 'react'

import { IoIosKey } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

import {useDispatch, useSelector} from "react-redux";
import { loginUserThunk } from '../../slice/user/user.thunk';

const Login = () => {
  const navigat=useNavigate();
  const dispatch=useDispatch();
      const {isAuthenticate}=useSelector(state=>state.userReducer);

useEffect(()=>{
   if(isAuthenticate){
       navigat("/")
      }
},[isAuthenticate]);

     
  const [login,setLogin]=useState({
    userName:"",
    password:"",
  })
    const handleInputChange=(e)=>{
         setLogin({...login,[e.target.name]:e.target.value});
    }

    const handleformsubmit=async ()=>{
      const response=await dispatch(loginUserThunk(login));
    
      if(response.payload.success){
        navigat("/");
      }
    }

    

 
  return (
    <div className='flex justify-center  items-center p-6 min-h-screen'>
    <div className='flex flex-col max-w-[20rem] w-full gap-2 bg-base-200 p-6 rounded-lg'> 
      <p className='text-xl mb-2'>Please login here..</p>
    <label className="input input-bordered flex items-center gap-2">
<FaUser />

  <input type="text" name="userName" value={login.userName} className="grow w-full" placeholder="User Name" onChange={handleInputChange} />
</label>

<label className="input input-bordered flex items-center gap-2">
<IoIosKey />
  <input type="password" name="password" className="grow" value={login.password} onChange={handleInputChange}/>
</label>

<button type='text' className='bg-blue-400 rounded-lg p-2 font-semibold' onClick={handleformsubmit}>Login</button>
   <p> 
    Don,t have a account? <Link className='text-blue-400 underline ' to="/signUp">signUp</Link>
   </p>
    
    </div>
    </div>
  )
}

export default Login
