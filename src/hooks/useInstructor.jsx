import { useContext } from "react";
import { authContext } from "../pages/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useInstructor = () => {
     const {user}=useContext(authContext);

const token=localStorage.getItem('token')
     const {data:isInstructor}=useQuery({
        queryKey:['isInstructor',user?.email],
        queryFn:async()=>{
            const res= await axios.get(`http://localhost:5000/users/instructor/${user?.email}`,{
                headers:{
                    authorization:`bearer ${token}`
                }
            });
            return res.data
        }
    })


    //  const [instructor,setInstructor]=useState('');
    //  useEffect(()=>{
    //     fetch(`http://localhost:5000/users/instructor/${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setInstructor(data))
    //  },[user?.email])
    //  console.log(isInstructor);
     return isInstructor?.instructor;
};

export default useInstructor;