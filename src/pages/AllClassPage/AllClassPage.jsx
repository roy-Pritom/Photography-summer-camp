import { useLoaderData } from "react-router-dom";
import TopClassCard from "../Home/TopClasses/TopClassCard";

const AllClassPage = () => {
    const classes=useLoaderData();
    console.log(classes);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    classes.map(item=><TopClassCard
                    key={item._id}
                    item={item}
                    ></TopClassCard>)
                }
            </div>
            
        </div>
    );
};

export default AllClassPage;