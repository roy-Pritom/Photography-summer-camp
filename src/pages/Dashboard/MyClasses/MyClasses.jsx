import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";

const MyClasses = () => {
    const {user}=useContext(authContext);
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/classes/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[user?.email])


    return (
        <div>
            

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
            #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Status</th>
        <th>Total Enrolled Students</th>
        <th>Feedback</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
     

     {
        classes?.map((item,index)=><tr
        key={item._id}
        >
            <th>
            {index+1}
            </th>
            <td>
             
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.classImg} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
           
            </td>
            <td>{item.className}</td>
          
            <td>{item.status}</td>
            <td>0</td>
            <td>
            <button className="btn btn-outline btn-sm btn-secondary">Feedback</button>

            </td>
            <td>
            <button className="btn btn-outline btn-sm btn-secondary">Update</button>

            </td>

     
          </tr>)
     }
      
     
  
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default MyClasses;