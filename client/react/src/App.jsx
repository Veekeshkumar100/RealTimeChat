
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './page/Authentication/Login';
import SignUp from './page/Authentication/signUp';
import Home from './page/Home/Home';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import { loginUserThunk } from './slice/user/user.thunk.js';

  



function App(){
const data = useSelector(state=>state);
const dispatch =useDispatch();

console.log(data)
useEffect(()=>{
dispatch(loginUserThunk())
},[])

 const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
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
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
