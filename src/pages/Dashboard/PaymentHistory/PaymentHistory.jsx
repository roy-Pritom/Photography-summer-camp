import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {

    const token = localStorage.getItem('token');
    const { data: payments = [] } = useQuery(['users'], async () => {
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

                            <th>Class Name</th>
                            <th>User Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((item, index) => <tr key={item._id}>


                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>${item.price}</td>
                                <td>${item.transactionId}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;