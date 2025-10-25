import React from 'react'
import UserProfile from './user'
import { IoMdSend } from "react-icons/io";
import { useSelector } from 'react-redux';
import Message from './message';
const chatSideBar = () => {

  const {setUserMessage}=useSelector(state=>state.userReducer);
    console.log(setUserMessage);
   const {_id,fullName,userName,avatar}=setUserMessage;
   console.log(fullName,userName,avatar)
  return (
   <>
   <div className=' w-full h-screen flex flex-col '>
    <div className='border-b border-[#0c0e10] '>
    <UserProfile  _id={_id} fullName={fullName} userName={userName} avatar={avatar}/>
    </div>

    <div className='h-full  overflow-y-auto flex flex-col p-2 '>
   <Message/>
   <Message/>
          </div>

 <div className='p-2 border-t border-[#0c0e10] flex gap-3'>

<input type="text" placeholder="Type here..." className="input input-bordered w-full " />
<button class="btn btn-square btn-outline">
  <IoMdSend />
</button>
 </div >
 
   </div>
    
   </>
  )

}

export default chatSideBar
