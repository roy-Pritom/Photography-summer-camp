
import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";

const AllClassPage = () => {
    // const classes=useLoaderData();
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-12-server-site-sepia.vercel.app/classes/${false}`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <div>

            <div className="h-14">

            </div>
            <h2 className="text-5xl font-bold text-center mt-14 mb-10">All Classes</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    classes?.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>




        </div>
    );
};

export default AllClassPage;