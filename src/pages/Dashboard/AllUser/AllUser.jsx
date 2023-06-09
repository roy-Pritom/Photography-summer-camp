import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
    const token=localStorage.getItem('token');

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users',{
            headers:{
                authorization:`bearer ${token}`
              }
        })
        return res.json()
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
            
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                //  document.getElementById('instructor').
                //  document.getElementById("instructor").disabled = true;

                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = (user) => {
        console.log(user._id);
    }
    return (
        <div>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role === 'admin' && 'admin'}
                                {user?.role==='instructor' && 'instructor'}
                                {user?.role!=='instructor' && user.role!=='admin'
                                &&
                                'user'
                                
                                }
                                  
                                                               </td>
                                <td>
                
                                    <button  onClick={() => handleMakeAdmin(user)} className='btn btn-ghost bg-orange-600  text-white'disabled={`${user?.role === 'admin'?true:''}`}  ><FaUserShield></FaUserShield></button>
                                </td>
                                <td>
                                    <button  onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-600  text-white"disabled={`${user?.role === 'instructor'?true:''}`} ><FaUserShield></FaUserShield></button>
                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;