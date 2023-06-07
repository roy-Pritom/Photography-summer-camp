import { useLoaderData } from "react-router-dom";
import InstructorBox from "./InstructorBox";

const InstructorPage = () => {
    const instructors=useLoaderData();

    return (
        <div className="mb-20">
            <h2 className="text-5xl font-bold text-center mt-8 mb-14">Our Instructors</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                    instructors.map(instructor=><InstructorBox
                    key={instructor._id}
                    instructor={instructor}
                    ></InstructorBox>)
                }
            </div>
        </div>
    );
};

export default InstructorPage;