import { Fade } from "react-awesome-reveal";
import InstructorBox from "./InstructorBox";
import { useQuery } from "@tanstack/react-query";

const InstructorPage = () => {

    const token = localStorage.getItem('token');


    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
        return res.json()
    })
    const instructors = users.filter(item => item.role === 'instructor')

    return (
        <Fade direction='right'>
            <div className="mb-20 ">
                <h2 className="text-5xl font-bold text-center  mb-14">Our Instructors</h2>

                <div className="">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-14">Our Instructors</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mx-5 md:mx-0">
                        {
                            instructors.map(instructor => <InstructorBox
                                key={instructor._id}
                                instructor={instructor}
                            ></InstructorBox>)
                        }
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default InstructorPage;