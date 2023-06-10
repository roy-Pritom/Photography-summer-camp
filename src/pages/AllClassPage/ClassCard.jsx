
import { useContext } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { authContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassCard = ({item}) => {
   const navigate=useNavigate();
   const {user}=useContext(authContext);
    const isAdmin=useAdmin();
    const isInstructor=useInstructor();
    const {classImg,instructorName,className,price,seats}=item;
    const handleAddToCart=(item)=>{
      console.log(item);
      const orderData={name:item.className,image:item.classImg,instructorName:item.instructorName,email:user?.email,price:item.price}
      if(user)
      {
         fetch('http://localhost:5000/carts',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(orderData)
         })
         .then(res=>res.json())
         .then(data=>{
          if(data.insertedId)
          {
            Swal.fire({
              title: 'success!',
              text: 'class added to cart successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
         })
      }
      else
      {
        Swal.fire({
          title: 'warning!',
          text: 'please Login to order',
          icon: 'warning',
          confirmButtonText: 'Cool'
        })
        navigate('/login')
      }

    }


    return (
        
    <div className={`max-w-sm rounded overflow-hidden shadow-lg ${seats==='0'?'bg-red-600':''}`}   >
    <div className="relative">
      <img
        className="w-full h-56 object-cover transition duration-500 ease-in-out transform hover:scale-110"
        src={classImg}
        alt="Card"
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{className}</div>
      <p className="font-bold">Instructor Name : {instructorName}</p>
      <p className="font-bold">Available Seats : {seats}</p>
      <p className="font-bold">Price : {price}</p>
      
    </div>
    <div className="px-6 py-4">
        {
         isAdmin || isInstructor || seats==='0'
         ?
         <button onClick={()=>handleAddToCart(item)} disabled className="btn btn-secondary">Select</button>
         :
         <button onClick={()=>handleAddToCart(item)}  className="btn btn-secondary">Select</button>
          
        }
     


  
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        Tag 3
      </span>
    </div>
  </div>
    );
};

export default ClassCard;