import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  setUserMessageData } from '../../slice/user/user.slice'
// {_id,fullName,userName,avatar}
const UserProfile = ({userDetail}) => {
      const dispatch=useDispatch()
        const {_id,fullName,userName,avatar}=userDetail;  
    const handleMassageToggle=()=>{
         dispatch(setUserMessageData({_id,fullName,userName,avatar}));
    }     
return (
    <div className={`flex items-center gap-4 p-2 rounded-lg shadow  transition-shadow cursor-pointer hover:bg-gray-700 `} onClick={handleMassageToggle}>
        <div className="avatar offline">
            <div className="w-14 h-14 rounded-full border-2 border-blue-400 overflow-hidden">
                <img
                    src={avatar}
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
        <div>
            <h2 className="text-base font-semibold  line-clamp-1">{fullName}</h2>
            <p className="text-xs text-gray-500 italic">{userName}</p>
        </div>
    </div>
)
}

export default UserProfile;
