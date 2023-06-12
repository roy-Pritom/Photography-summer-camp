
import InstructorCard from "./InstructorCard";
import { useQuery } from "@tanstack/react-query";


const Instructors = () => {

const { data: users = [] } = useQuery(['users'], async () => {
    const res = await fetch('https://assignment-12-server-site-sepia.vercel.app/users')
    return res.json()
})

const allInstructors = users?.filter(item => item.role === 'instructor');
const instructors=allInstructors.slice(0,6);

    return (
        <div className="md:my-20 my-10">
            <h2 className="text-5xl font-bold text-center mt-5 mb-7 md:mt-10 md:mb-12">Our Instructors</h2>
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