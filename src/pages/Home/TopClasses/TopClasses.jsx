import { useEffect, useState } from "react";
import TopClassCard from "./TopClassCard";

const TopClasses = () => {
    const [classes,setClasses]=useState([]);
    const token=localStorage.getItem('token');
useEffect(()=>{
    fetch('http://localhost:5000/classes/true')
    .then(res=>res.json())
    .then(data=>{
        const kl=data.slice(0,6)
        setClasses(kl)   
    })
},[token])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-0">
                {
                    classes?.map(item=><TopClassCard
                    key={item._id}
                    item={item}
                    ></TopClassCard>)
                }
            </div>
        </div>
    );
};

export default TopClasses;