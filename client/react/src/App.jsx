
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './page/Authentication/Login';
import SignUp from './page/Authentication/signUp';
import Home from './page/Home/Home';
import  {useSelectore} from 'react-redux'



function App(){
   const reduxdata= useSelectore((state)=state);
  console.log(reduxdata);


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
