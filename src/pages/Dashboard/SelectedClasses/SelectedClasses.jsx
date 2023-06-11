
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const SelectedClasses = () => {
    const { user } = useContext(authContext);
    const token = localStorage.getItem('token');
    const { data: classes = [], refetch } = useQuery(['carts', user?.email], async () => {
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json()
    })



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className="w-full">


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>instructorName</th>
                            <th>Price</th>
                            <th>Seats</th>
                            <th>enrllrd</th>
                            <th>Pay</th>
                            <th>Delete</th>
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
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>{item.name}</td>

                                <td>{item.instructorName}</td>
                                <td>${item.price}</td>
                                <td>{item.seats}</td>
                                <td>{item.totalEnrolledStudents}</td>

                                <td>

                                    <Link to={`/dashboard/payment/${item._id}`}>
                                        <button className="btn btn-outline btn-sm btn-secondary">Pay</button>

                                    </Link>
                                </td>
                                <td>
                                    {/* <button onClick={() => handleDelete(item._id)} className="btn btn-outline btn-sm btn-secondary">Delete</button> */}
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-outline btn-secondary  text-white"><FaTrashAlt></FaTrashAlt></button>

                                </td>


                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;