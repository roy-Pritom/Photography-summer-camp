
import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const AllClassPage = () => {
    // const classes=useLoaderData();
    const [classes,setClasses]=useState([]);

    useEffect(()=>{
     fetch(`http://localhost:5000/classes/${false}`)
     .then(res=>res.json())
     .then(data=>setClasses(data))
    },[])

    return (
        <div>
   
             
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    classes?.map(item=><ClassCard
                    key={item._id}
                    item={item}
                    ></ClassCard>)
                }
            </div>
            
          
            
            
        </div>
    );
};

export default AllClassPage;