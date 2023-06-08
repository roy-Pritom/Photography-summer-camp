import { useEffect, useState } from "react";
import TopClassCard from "./TopClassCard";

const TopClasses = () => {
    const [classes,setClasses]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data=>{
        const kl=data.slice(0,6)
        setClasses(kl)   
    })
},[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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