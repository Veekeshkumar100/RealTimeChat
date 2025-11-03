import { useDispatch, useSelector } from 'react-redux'
import {  setUserMessageData } from '../../slice/user/user.slice'

const UserProfile = ({userDetail}) => {
      const dispatch=useDispatch()
      const {onlinesUser} =useSelector(state=>state.socketReducer);
      console.log(onlinesUser)
        const {_id,fullName,userName,avatar}=userDetail;  
    const handleMassageToggle=()=>{
         dispatch(setUserMessageData({_id,fullName,userName,avatar}));
    } 
    const isOnline = onlinesUser.includes(userDetail?._id) ? true :false;
       console.log(isOnline);
  
return (
    <div className={`flex items-center gap-4 p-2 rounded-lg shadow  transition-shadow cursor-pointer hover:bg-gray-700 `} onClick={handleMassageToggle}>
       
     <div className={`avatar avatar-${ isOnline? 'online':"offline"}`}>
  <div className="w-14 h-14 rounded-full">
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
