import { useContext } from "react";
import { authContext } from "../pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAdmin=()=>{
    const {user}=useContext(authContext);
    const token=localStorage.getItem('token');
    const {data:isAdmin}=useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const res= await axios.get(`https://assignment-12-server-site-sepia.vercel.app/users/admin/${user?.email}`,{
            headers:{
                authorization:`bearer ${token} `
            }
            });
            return res.data
        }
    })
    
    return isAdmin?.admin
}
export default useAdmin;