import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Header = () => {
    const[theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light');

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        const allTheme=localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',allTheme);
    },[theme])
    const themehandle=n=>{
        if(n.target.checked){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
    const { user,logOut} = useContext(authContext);
    const handleLogOut=()=>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error.message);
          });
    }
    const navItems = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/instructors'>Instructors</Link>
        </li>
        <li>
            <Link to='/classes'>Classes</Link>
        </li>
        {
            user &&
            <li>
                <Link to='/dashboard'>Dashboard</Link>
            </li>
        }
        <li>
            <input onClick={themehandle}type='checkbox' className="toggle toggle-md text-white"
            checked={theme==='light' ? false:true}/>
        </li>

    </>
    return (
        <div className="navbar bg-pink-200 fixed z-10 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-3">
                            <img id="title" src={user?.photoURL} className="rounded-full w-12 h-10" alt="" />
                            <ReactTooltip anchorId="title"place="bottom" content={user?.displayName}></ReactTooltip>
                            <button onClick={handleLogOut} className="btn btn-active btn-secondary">Logout</button>
                        </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-active btn-secondary">Login</button>

                        </Link>
                }

            </div>
        </div>
    );
};

export default Header;