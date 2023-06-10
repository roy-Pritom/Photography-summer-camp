import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm ";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";


const Payment = () => {
    
   
    const data=useLoaderData();
    // console.log(data.price);
    const price=data.price;

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
    console.log(stripePromise)

    return (
        <div className="w-full">
       
            <h2>payment taka</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm price={price}></CheckoutForm>
                
            </Elements>
        </div>
    );
};

export default Payment;