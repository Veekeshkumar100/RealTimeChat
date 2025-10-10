import React from 'react'
import { IoSearch } from "react-icons/io5";
import UserProfile from './user';
const UserSideBar = () => {
  return (
    <div className='w-1/3 p-4 border-r border-[#0c0e10] h-screen flex flex-col gap-4'>
        <h2 className='font-bold text-lg text-[#60A5FA] bg-[#191E24] px-2 py-2 rounded-lg'>GUP SUP</h2>
        <div>
            <label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <IoSearch />
</label>
        </div>
<div className='h-full  overflow-y-auto flex flex-col '>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>
          <UserProfile/>

     
</div>

<div className='bg-[#191E24] p-2 rounded-lg flex justify-between items-center'>
<div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
  <button class="btn btn-primary btn-sm">Logout</button>
</div>
        </div>
       
 
  )
}

export default UserSideBar;
