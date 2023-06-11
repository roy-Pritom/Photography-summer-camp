import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
// import  './CheckoutForm.css'
const CheckoutForm = ({data}) => {
    const {price,name,image}=data || {};
    const [cardError, setCardError] = useState('');
    const{user}=useContext(authContext)
    const [clientSecret, setClientSecret] = useState('');
    const[transactionId,setTransactionId]=useState('');
    const stripe = useStripe();
    const elements = useElements();
    const token = localStorage.getItem('token');
    const [processing,setProcessing]=useState(false)
   
    useEffect(()=>{
        if(price>0){
            axios.post('http://localhost:5000/create-payment-intent',{price}, {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
        }
    },[price,token])

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true)

        
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent)
        setProcessing(false)
        if(paymentIntent.status==='succeeded'){
            setTransactionId(paymentIntent.id)
            
          
            const payment={
                email:user?.email,
                transactionId:paymentIntent.id,
                name,
                image,
                price,
                
            }
            axios.post('http://localhost:5000/payments',payment,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            .then(data=>{
                console.log(data)
                if(data.data.insertResult.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }

    }

    return (
       <div className="w-full">
         <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className=" btn primary" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        {transactionId&&<p className="text-green-500">Payment success  transactionId:{transactionId}</p>}
       </div>
    );
};

export default CheckoutForm;