
import './App.css'
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './page/Authentication/Login';
import SignUp from './page/Authentication/signUp';
import Home from './page/Home/Home';


import { Toaster } from 'react-hot-toast';import ProtectedRoutes from './component/utility/protectedRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfile } from './slice/user/user.thunk';
 'react-hot-toast';


function App(){
const dispatch=useDispatch();
useEffect(()=>{
 (async() => {
     await dispatch(getUserProfile());
     
})();
})

 const router=createBrowserRouter([
  {
    path:"/",
    element: <ProtectedRoutes>
      <Home/>
      </ProtectedRoutes> 
   
  },
  {
    path:"/login",
    element:<Login/>
  },{
    path:"/signUp",
    element:<SignUp/>,
  }
 ])

  return (
    <>
   <RouterProvider router={router}></RouterProvider>
   <Toaster position='top-center' reverseOrder={false}/>

    </>
  )
}

export default App
