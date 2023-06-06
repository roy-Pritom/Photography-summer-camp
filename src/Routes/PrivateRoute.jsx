import { useContext } from "react";
import { authContext } from "../pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(authContext);
    const location=useLocation();
    if (loading) {
        return <div className="flex justify-center items-center">
            <button className="btn">
                <span className="loading loading-spinner"></span>
                loading
            </button>
        </div>
    }
    if(user)
    {
        return children;
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;