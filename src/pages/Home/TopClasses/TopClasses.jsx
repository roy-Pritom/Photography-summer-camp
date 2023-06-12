import { useEffect, useState } from "react";
import TopClassCard from "./TopClassCard";

const TopClasses = () => {
    const [classes, setClasses] = useState([]);
    // const [sortedData, setSortedData] = useState(sliceData);
    
    const [sliceData, setSliceData] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        fetch('https://assignment-12-server-site-sepia.vercel.app/classes/true')
            .then(res => res.json())
            .then(data => {
                const myData=data.slice(0,6);
               setSliceData(myData)
                
                // setClasses(data)
            })
    }, [token])

    useEffect(() => {
        const sorted = [...sliceData].sort((a, b) => b.totalEnrolledStudents - a.totalEnrolledStudents);
        setClasses(sorted)
      }, [sliceData]);

    return (
        <div className="md:mt-20 mt-10 ">
          
                <h2 className="text-center text-5xl font-bold my-5">Our Top Classes</h2>
                <p className="text-center  text-lg mb-10 "> Learn the basics of photography, including camera settings, composition, lighting,  <br /> and exposure. Develop a solid foundation to kickstart your photography journey.</p>
   
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-0">
                {
                    classes?.map(item => <TopClassCard
                        key={item._id}
                        item={item}
                    ></TopClassCard>)
                }
            </div>
        </div>
    );
};

export default TopClasses;