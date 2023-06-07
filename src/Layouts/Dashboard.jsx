import { NavLink, Outlet } from "react-router-dom";
import {  FaHome } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const ob =useAdmin();
  console.log(ob.admin);
  const isAdmin=ob.admin
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

          {
            isAdmin ? <>
              <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
              <li><NavLink to="/dashboard/mageClasses">Manage Classes </NavLink></li>
              <li><NavLink to="/dashboard/allUser">Manage Users</NavLink></li>
   

            </> : <>
            <li><NavLink to="/"><FaHome></FaHome> User Home</NavLink></li>
              <li><NavLink to="/dashboard/classes">Selected Classes</NavLink></li>
              <li><NavLink to="/">Enrolled Classes</NavLink></li>
              <li><NavLink to="/"> Payment History</NavLink></li>
            </>
          }
          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome>Home</NavLink> </li>
          <li><NavLink to="/menu">Review</NavLink></li>
  
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;