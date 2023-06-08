import { useContext } from "react";
import { authContext } from "../pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAdmin=()=>{
    const {user}=useContext(authContext);
    const {data:isAdmin}=useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const res= await axios.get(`http://localhost:5000/users/admin/${user?.email}`);
            return res.data
        }
    })

    // const [isAdmin,setIsAdmin]=useState('')
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/users/admin/${user?.email}`)
    //    .then(res=>res.json())
    //    .then(data=>{
        
    //     setIsAdmin(data)
        
    //    })
    // },[user?.email])
    // console.log(isAdmin);
    return isAdmin?.admin
}
export default useAdmin;