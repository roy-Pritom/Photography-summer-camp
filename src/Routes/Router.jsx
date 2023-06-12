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
import AllClassPage from "../pages/AllClassPage/AllClassPage";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import FeedbackPage from "../pages/FeedbackPage/FeedbackPage";
import UpdatePage from "../pages/Dashboard/MyClasses/UpdatePage";


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
          element:<InstructorPage></InstructorPage>
        },
        {
          path:'/classes',
          element:<AllClassPage></AllClassPage>
        },
        {
          path:'/feedback/:id',
          element:<FeedbackPage></FeedbackPage>
        },
        {
          path:'/update/:id',
          element:<UpdatePage></UpdatePage>
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
          element:<ManageClasses></ManageClasses>
        },
        // user dashboard
        {
          path:'selectedClasses',
          element:<SelectedClasses></SelectedClasses>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
          loader:({params})=>fetch(`https://assignment-12-server-site-sepia.vercel.app/carts/${params.id}`)
        },
        {
          path:'enrolledClasses',
          element:<EnrolledClasses></EnrolledClasses>
        }
        ,
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);

  export default router;