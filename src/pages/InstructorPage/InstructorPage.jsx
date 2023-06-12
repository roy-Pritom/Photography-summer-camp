import { Fade } from "react-awesome-reveal";
import InstructorBox from "./InstructorBox";
import { useQuery } from "@tanstack/react-query";

const InstructorPage = () => {

    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await fetch('https://assignment-12-server-site-sepia.vercel.app/users')
        return res.json()
    })
    // console.log(users);
    const instructors = users?.filter(item => item.role === 'instructor')

    return (
        <Fade direction='right'>
            <div className="mb-20 ">
                <div className="h-14"></div>

                <div className="">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mt-14 mb-10 md:mb-14">Our Instructors</h2>

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