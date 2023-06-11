import { useQuery } from "@tanstack/react-query";

const EnrolledClasses = () => {
    const token = localStorage.getItem('token');
    const { data: classes = [] } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/payments', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json()
    })
    return (


        <div className="w-full">

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>User Email</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>


                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image}alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>${item.price}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;