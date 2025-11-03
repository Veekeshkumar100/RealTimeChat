import React, { useEffect } from 'react'
import UserSideBar from "./UserSideBar.jsx"
import ChatSideBar from "./ChatSideBar.jsx"
import { useDispatch, useSelector } from 'react-redux'
import { initialSocket, onlinesUserState } from '../../slice/socket/socket'
import { messageState } from '../../slice/message/message.slice.js'

const Home = () => {
      const dispatch = useDispatch();
      const {userData,isAuthenticate} = useSelector(state=>state.userReducer);
      const {socket} =useSelector(state=>state.socketReducer);
        
     useEffect(()=>{
      if(!isAuthenticate) return;
         dispatch(initialSocket(userData?.user._id));
     },[isAuthenticate]);
    
     useEffect(()=>{
        if(!socket) return;
        console.log(socket);
        socket.on("onlineuser",(onlinesUser)=>{
          dispatch(onlinesUserState(onlinesUser));
        });
         socket.on("newmessage",(newmessage)=>{
          console.log(newmessage);
            dispatch(messageState(newmessage));
        });
        return ()=>{
          socket.close();
        }
     },[socket,dispatch]);


  return (
    <div className='flex flex-col-2'>
      <UserSideBar />
      <ChatSideBar />
    </div>
  )
}

export default Home;
