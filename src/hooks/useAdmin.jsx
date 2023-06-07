import { useContext, useEffect, useState } from "react";
import { authContext } from "../pages/Provider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const useAdmin=()=>{
    const {user}=useContext(authContext);
    // const {data:isAdmin}=useQuery({
    //     queryKey:['isAdmin',user?.email],
    //     queryFn:async()=>{
    //         const res= await fetch(`/users/admin/${user?.email}`);
    //         return res.json()
    //     }
    // })

    const [isAdmin,setIsAdmin]=useState('')
    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${user?.email}`)
       .then(res=>res.json())
       .then(data=>{
        
        setIsAdmin(data)
        
       })
    },[user?.email])
    console.log(isAdmin);
    return isAdmin
}
export default useAdmin;