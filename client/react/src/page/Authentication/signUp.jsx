
import { MdOutlineEmail } from "react-icons/md";
import { IoIosKey } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from "react";

const SignUp = () => {
  const [signUp,setsignUp]=useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
  })
    const handleInputChange=(e)=>{
         setsignUp({...signUp,[e.target.name]:e.target.value});
    }

    console.log(signUp);

  return (
    <div className='flex justify-center  items-center p-6 min-h-screen'>
    <div className='flex flex-col max-w-[20rem] w-full gap-2 bg-base-200 p-6 rounded-lg'> 
      <p className='text-xl mb-2'>Please login here..</p>
    <label className="input input-bordered flex items-center gap-2">
<MdOutlineEmail />

  <input type="text" name="fullName" value={signUp.fullName} placeholder="Full Name" className="grow w-full" onChange={handleInputChange} />
</label>
    <label className="input input-bordered flex items-center gap-2">
<FaRegUser/>

  <input type="text" name="userName" value={signUp.userName} placeholder="User Name" className="grow w-full" onChange={handleInputChange} />
</label>

<label className="input input-bordered flex items-center gap-2">
<IoIosKey />
  <input type="password" name="password" className="grow" value={signUp.password} placeholder='password'  onChange={handleInputChange}/>
</label>
<label className="input input-bordered flex items-center gap-2">
<IoIosKey />
  <input type="password"  name="confirmPassword" placeholder='******' value={signUp.confirmPassword}  className="grow"  onChange={handleInputChange}/>
</label>
<button type='text' className='bg-blue-400 rounded-lg p-2 font-semibold'>SignUp</button>
   <p> 
    Don,t have a account? <Link className='text-blue-400 underline ' to="/login">login</Link>
   </p>
    
    </div>
    </div>
  )
}
export default SignUp
