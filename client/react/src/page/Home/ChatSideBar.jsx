import React from 'react'
import UserProfile from './user'
import { IoMdSend } from "react-icons/io";
import { useSelector } from 'react-redux';
const chatSideBar = () => {

  const {setUserMessage}=useSelector(state=>state.userReducer);
    console.log(setUserMessage);
   const {_id,fullName,userName,avatar}=setUserMessage;
  //  console.log(fullName,userName,avatar)
  return (
   <>
   <div className=' w-full h-screen flex flex-col '>
    <div className='border-b border-[#0c0e10] '>
    <UserProfile  _id={_id} fullName={fullName} userName={userName} avatar={avatar}/>
    </div>

    <div className='h-full  overflow-y-auto flex flex-col p-2 '>
    <div class="chat chat-start">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="chat-header">
    Obi-Wan Kenobi
    <time class="text-xs opacity-50">12:45</time>
  </div>
  <div class="chat-bubble">You were the Chosen One!</div>
  <div class="chat-footer opacity-50">Delivered</div>
</div>
<div class="chat chat-end">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="chat-header">
    Anakin
    <time class="text-xs opacity-50">12:46</time>
  </div>
  <div class="chat-bubble">I hate you!</div>
  <div class="chat-footer opacity-50">Seen at 12:46</div>
</div>
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
