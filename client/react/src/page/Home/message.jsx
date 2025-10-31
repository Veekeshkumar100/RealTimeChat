import React from 'react'
import { useSelector } from 'react-redux';
const Messages = ({messages}) => {
  const {userData,setUserMessage} = useSelector((state) => state.userReducer);
  return (
    <>
  <div class={`chat chat-start ${userData?.user._id===messages.senderId ? "chat-end" :"chat-start"}`}>
  <div class="chat-image avatar">
    <div class="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={userData?.user._id===messages.senderId ? `${userData?.user.avatar}` : `${setUserMessage.avatar}`} />
    </div>
  </div>
  <div class="chat-header">
  </div>
  <div class="chat-bubble">{messages.message}</div> 
 </div>
  </>
  )
}

export default Messages;
