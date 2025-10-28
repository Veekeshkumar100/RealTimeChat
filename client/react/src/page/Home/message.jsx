import React from 'react'
import { useSelector } from 'react-redux';


const Messages = ({messages}) => {
      
    const {message}=messages;
  const {userData} = useSelector((state) => state.userReducer);
  


  return (
    <>
  <div class={`chat chat-start ${userData?._id===message.senderId ? "chat-end" :"chat-start"}`}>
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div class="chat-header">

    
  </div>
  <div class="chat-bubble">{message}</div>

</div>

  </>
  )
}

export default Messages
