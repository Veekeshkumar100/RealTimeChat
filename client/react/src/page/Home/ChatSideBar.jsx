import React, { useState } from "react";
import UserProfile from "./user";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import { getMessages, sendMessage } from "../../slice/message/message.thunk";
import { useEffect } from "react";
import Messages from "./message";
import { messageState } from "../../slice/message/message.slice";


const chatSideBar = () => {
  const [message,setMessage]=useState("")
  const { setUserMessage } = useSelector((state) => state.userReducer);
  const { usersMessage } = useSelector((state) => state.messageReducer);
  const { socket } = useSelector((state) => state.socketReducer);


  const dispatch = useDispatch();
  useEffect(() => {
    (async()=>{
     await dispatch(getMessages({ recieverId: setUserMessage?._id }));
    })();
  }, [setUserMessage]);

  const handelDispatch=async()=>{
     dispatch(sendMessage({recieverId:setUserMessage?._id,message})); 
     setMessage(""); 
   

  }
  return (
    <>
      {!setUserMessage ? (
        <>please select a user</>
      ) : (
        <div className=" w-full h-screen flex flex-col ">
          <div className="border-b border-[#0c0e10] ">
             <UserProfile
            userDetail ={setUserMessage}
            />
          </div> 

          <div className="h-full  overflow-y-auto flex flex-col p-2 ">
           {
         
            usersMessage?.map((message,index)=>{
              return <Messages key={index} messages={message}   />
            })
           }
     
          </div>

          <div className="p-2 border-t border-[#0c0e10] flex gap-3">
            <input
              type="text"
              value={message}
              placeholder="Type here..."
              onChange={(e)=>setMessage(e.target.value)}
              className="input input-bordered w-full "
            />
            <button class="btn btn-square btn-outline" onClick={handelDispatch}>
              <IoMdSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default chatSideBar;
