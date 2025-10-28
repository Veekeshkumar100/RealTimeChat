// ...existing code...
import { IoSearch } from "react-icons/io5";
import UserProfile from './user';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getOtherUser, getUserProfile, logoutUserThunk } from "../../slice/user/user.thunk";
import { useEffect } from "react";



const UserSideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {otherUserDetail,userData}=useSelector(state=>state.userReducer);
  console.log(userData);
  useEffect(()=>{
    (async()=>{
      await dispatch(getOtherUser())
      await dispatch(getUserProfile())
    
    })();
  },[])

  const handleLogout = async () => {

  await dispatch(logoutUserThunk());

    navigate("/login");
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
      <div className='h-full  overflow-y-auto flex flex-col gap-3'>
        {otherUserDetail?.map((userDetail)=>{

           return  <UserProfile key={userDetail?._id} userDetail={userDetail}/>
        })}
       
      </div>

      <div className='bg-[#191E24] p-2 rounded-lg flex justify-between items-center'>
        <div className="avatar">
           <div className="flex items-start gap-2">
          <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 ">
            <img src={userData.user.avatar} />
          </div>
          <div>
             <h2>{userData.user.fullName}</h2>
             </div>
        </div>
        </div>
        <button onClick={handleLogout} className="btn btn-primary btn-sm">Logout</button>
      </div>
    </div>
  )
}

export default UserSideBar;
// ...existing code...