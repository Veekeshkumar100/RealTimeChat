import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoIosKey } from "react-icons/io";
import { Link } from 'react-router-dom';
const Login = () => {
  const [login,setLogin]=useState({
    email:"",
    password:"",
  })
    const handleInputChange=(e)=>{
         setLogin({...login,[e.target.name]:e.target.value});
    }

    console.log(login);

  return (
    <div className='flex justify-center  items-center p-6 min-h-screen'>
    <div className='flex flex-col max-w-[20rem] w-full gap-2 bg-base-200 p-6 rounded-lg'> 
      <p className='text-xl mb-2'>Please login here..</p>
    <label className="input input-bordered flex items-center gap-2">
<MdOutlineEmail />

  <input type="text" name="email" value={login.email} className="grow w-full" placeholder="Email" onChange={handleInputChange} />
</label>

<label className="input input-bordered flex items-center gap-2">
<IoIosKey />
  <input type="password" name="password" className="grow" value={login.password} onChange={handleInputChange}/>
</label>
<button type='text' className='bg-blue-400 rounded-lg p-2 font-semibold'>Login</button>
   <p> 
    Don,t have a account? <Link className='text-blue-400 underline ' to="/signUp">signUp</Link>
   </p>
    
    </div>
    </div>
  )
}

export default Login
