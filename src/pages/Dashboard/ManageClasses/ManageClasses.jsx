import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ManageClasses = () => {
   const classes=useLoaderData();
   const [disable,setDisable]=useState(false);
   const handleStatus=(item,isApprove)=>{
  if(isApprove)
  {
    item.status='approved'
    setDisable(true)

  }
  else
  {
    item.status='denied'
    setDisable(true)


  }
   }

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
    <th>Class Image</th>
    <th>Class name</th>
    <th>Instructor name</th>
    <th>Instructor email</th>
    <th>Available seats</th>
    <th>Price</th>
    <th>Status</th>
    <th>Approve</th>
    <th>Deny</th>
    <th>Feedback</th>
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
        <td>{item.instructorName}</td>
        <td>{item.instructorEmail}</td>
        <td>{item.seats}</td>
        <td>${item.price}</td>
      
        <td>{item.status}</td>

        <td>
        <button disabled={disable} onClick={()=>handleStatus(item,true)} className="btn btn-outline btn-xs btn-secondary">Approve</button>

        </td>
        <td>
        <button disabled={disable} onClick={()=>handleStatus(item,false)} className="btn btn-outline btn-xs btn-secondary">Deny</button>

        </td>
        <td>
        <button className="btn btn-outline btn-xs btn-secondary">Feedback</button>

        </td>

 
      </tr>)
 }
  
</tbody>


</table>
</div>
    </div>
    );
};

export default ManageClasses;