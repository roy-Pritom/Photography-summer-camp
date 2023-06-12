import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";




const MyClasses = () => {

  const { user } = useContext(authContext);
  const [classes, setClasses] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch(`https://assignment-12-server-site-sepia.vercel.app/classes?email=${user?.email}`, {
      headers: {
        authorization: `bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setClasses(data))
  }, [user?.email, token])


  return (
    <div className="w-full">
      <h2 className="text-center font-bold mb-14 text-4xl">My Classes</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
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
              classes?.map((item, index) => <tr
                key={item._id}
              >
                <th>
                  {index + 1}
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
                <td>{item.totalEnrolledStudents}</td>
                <td>
                  {item?.adminFeedback}

                </td>
                <td>
                 <Link to={`/update/${item._id}`}>
                 <button  className="btn btn-outline btn-sm btn-secondary">Update</button>
                 
                 </Link>

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