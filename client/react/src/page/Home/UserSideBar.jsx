
import { IoSearch } from "react-icons/io5";
import UserProfile from './user';
import {useDispatch} from "react-redux";
import {logoutUserThunk} from "../../slice/user/user.thunk";
const UserSideBar = () => {
   const dispatch=useDispatch();

  const handleLogout=async ()=>{
    console.log("vekesh")
    const responce=await dispatch(logoutUserThunk())
  }

  return (
    <div className='w-1/3 p-4 border-r border-[#0c0e10] h-screen flex flex-col gap-4'>
        <h2 className='font-bold text-lg text-[#60A5FA] bg-[#191E24] px-2 py-2 rounded-lg'>GUP SUP</h2>
        <div>
            <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
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
<div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
  <button onClick={handleLogout} className="btn btn-primary btn-sm">Logout</button>
</div>
        </div>
       
 
  )
}

export default UserSideBar;
