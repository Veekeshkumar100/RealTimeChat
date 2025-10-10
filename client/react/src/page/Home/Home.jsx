import React from 'react'
import UserSideBar from './userSideBar.jsx'
import ChatSideBar from './chatSideBar.jsx'

const Home = () => {
  return (
    <div className='flex flex-col-2'>
      <UserSideBar/>
      <ChatSideBar/>
    </div>
  )
}

export default Home
