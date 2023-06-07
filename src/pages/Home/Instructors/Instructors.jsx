import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
const [instructors,setInstructors]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/instructors')
    .then(res=>res.json())
    .then(data=>{
        const slicedData=data.slice(0,6)
        setInstructors(slicedData)
    
    })
},[])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10">Our Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 mb-14">
                {
                    instructors.map(instructor=><InstructorCard
                    key={instructor._id}
                    instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;