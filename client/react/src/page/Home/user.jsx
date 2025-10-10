import React from 'react'

const UserProfile = () => {
return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer">
        <div className="avatar offline">
            <div className="w-14 h-14 rounded-full border-2 border-blue-400 overflow-hidden">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User Avatar"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
        <div>
            <h2 className="text-base font-semibold text-gray-800 line-clamp-1">Veekesh Kumar Gola</h2>
            <p className="text-xs text-gray-500 italic">user name</p>
        </div>
    </div>
)
}

export default UserProfile;
