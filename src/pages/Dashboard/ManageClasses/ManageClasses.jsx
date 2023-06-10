// import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClasses = () => {
//    const classes=useLoaderData();
//    const [classes,setClasses]=useState([]);

//    useEffect(()=>{
//     fetch('http://localhost:5000/classes')
//     .then(res=>res.json())
//     .then(data=>setClasses(data))
//    },[])
 
   const { data: classes = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch(`http://localhost:5000/classes/${true}`)
    return res.json()
})





   const handleStatus=(item,isApprove)=>{
  if(isApprove)
  {
    const info={i:true}
    fetch(`http://localhost:5000/classes/${item._id}`, {
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                  
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `successfully approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
  

  }
  else
  {
    const info={i:false}
    fetch(`http://localhost:5000/classes/${item._id}`, {
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                  refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `successfully denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })





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
        <button disabled={`${item?.status==='approved' || item?.status==='denied'?true:''}`} onClick={()=>handleStatus(item,true)} className="btn btn-outline btn-xs btn-secondary">Approve</button>

        </td>
        <td>
        <button disabled={`${item?.status==='approved' || item?.status==='denied'?true:''}`} onClick={()=>handleStatus(item,false)} className="btn btn-outline btn-xs btn-secondary">Deny</button>

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