import { NavLink, Outlet } from "react-router-dom";
import {  FaHome, FaRegBookmark, FaUserCog, FaUsers, FaUsersCog, FaWallet } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

  const isAdmin=useAdmin();

  const isInstructor=useInstructor()
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-full px-10 h-full bg-pink-300 text-base-content">



          {
            isAdmin && <>
            
              <li><NavLink to="/dashboard/allUser"><FaUsers></FaUsers>Manage Users</NavLink></li>
              <li><NavLink to="/dashboard/manageClasses"><FaUserCog></FaUserCog> Manage Classes </NavLink></li>
            </>


          }
          {
            isInstructor && <>
              <li><NavLink to="/dashboard/addClass"><FaRegBookmark></FaRegBookmark> Add a Class</NavLink></li>
              <li><NavLink to="/dashboard/myClasses"><FaUsers></FaUsers> My classes</NavLink></li>

            </>

          }
          {
            isAdmin!==true  && isInstructor!==true
            &&
            <>
            
            <li><NavLink to="/dashboard/selectedClasses"><FaUserCog></FaUserCog>Selected Classes</NavLink></li>
            <li><NavLink to="/dashboard/enrolledClasses"><FaUsersCog></FaUsersCog> Enrolled Classes</NavLink></li>
            <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
            </>

          }

          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome>Home</NavLink> </li>
 

        </ul>

      </div>
    </div>
  );
};

export default Dashboard;