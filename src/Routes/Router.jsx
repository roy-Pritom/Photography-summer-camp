import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import InstructorPage from "../pages/InstructorPage/InstructorPage";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AddClass from "../pages/Dashboard/AddClass/Addclass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/instructors",
          element:<InstructorPage></InstructorPage>,
          loader:()=>fetch('http://localhost:5000/instructors')
        }
        
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"allUser",
          element:<AllUser></AllUser>
        },

        {
          path:'addClass',
          element:<AddClass></AddClass>
        },
        {
          path:'myClasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:'manageClasses',
          element:<ManageClasses></ManageClasses>,
          loader:()=>fetch('http://localhost:5000/classes')
        }
      ]
    }
  ]);

  export default router;