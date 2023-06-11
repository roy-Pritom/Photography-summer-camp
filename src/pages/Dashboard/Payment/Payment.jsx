import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm ";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData, useParams } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const Payment = () => {
    
   const {id}=useParams();

    const data=useLoaderData();
    console.log(data);
    const { user } = useContext(authContext);
    const token = localStorage.getItem('token');
    const { data: classes = [] } = useQuery(['carts', user?.email], async () => {
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json()
    })

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
    

    return (
        <div className="w-full">
       
            <h2>payment taka</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm data={data} selectedClasses={classes} id={id} ></CheckoutForm>
                
            </Elements>
        </div>
    );
};

export default Payment;