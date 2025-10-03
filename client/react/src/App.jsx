
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './page/Authentication/Login';
import SignUp from './page/Authentication/signUp';
import Home from './page/Home/Home';

function App() {
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
