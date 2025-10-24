
import { MdOutlineEmail } from "react-icons/md";
import { IoIosKey } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux";
import {registerUserThunk} from'../../slice/user/user.thunk' 
import toast from "react-hot-toast";

const SignUp = () => {
  const navigat= useNavigate();
  const dispatch=useDispatch();
  const [signUp,setsignUp]=useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
        gender:"",
  })
  const [file,setFile]=useState(null);
    const handleInputChange=(e)=>{
         setsignUp({...signUp,[e.target.name]:e.target.value});
    }
  
    const handleFileInputChange=(e)=>{
     setFile(e.target.files[0])
     console.log(file);
    }
    // new handler for the checkbox controls
  const handleCheckboxChange = (e) => {
    const value = e.target.dataset.value; // "male" or "female"
    // toggle: uncheck if already selected, otherwise set
    setsignUp(prev => ({ ...prev, gender: prev.gender === value ? "" : value }));
  }

  const handleSubmit = async () => {
        if(signUp.password!==signUp.confirmPassword){
          return toast.error("Password does not match");
        }
       const formData= new FormData();
          formData.append("fullName",signUp.fullName)
          formData.append("userName",signUp.userName)       
          formData.append("password",signUp.password)
          formData.append("avatar",file)
             formData.append("gender", signUp.gender)
         
     const responce=await dispatch(registerUserThunk(Object.fromEntries(formData)));
      if(responce.payload.success){
        
     navigat("/")
      }
  }

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
<input
  type="file"
  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
  onChange={handleFileInputChange} />

 <label className="label cursor-pointer">
    <input type="checkbox"  className="checkbox checkbox-sm" data-value="male" checked={signUp.gender === 'male'} onChange={handleCheckboxChange} />
    <span className="label-text">male</span>
    <input type="checkbox" className="checkbox checkbox-sm" data-value="female" checked={signUp.gender === 'female'} onChange={handleCheckboxChange} />
    <span className="label-text">female</span>

  </label>

<button type='submit' className='bg-blue-400 rounded-lg p-2 font-semibold' onClick={handleSubmit}>SignUp</button>
   <p> 
    Don,t have a account? <Link className='text-blue-400 underline ' to="/login">login</Link>
   </p>
   
    </div>
    </div>
   
  )
}
export default SignUp;
