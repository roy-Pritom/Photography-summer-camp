import { Fade } from "react-awesome-reveal";

const InstructorCard = ({instructor}) => {
    const {name,image,email}=instructor || {};

    return (
    <Fade direction="left">
            <div className="card w-[320px] ml-6 md:ml-0  md:w-96 glass  overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 element ">
            <figure className="bg-secondary opacity-90 rounded-l-box border-b-8"><img src={image} className="w-[110px] h-[100px] rounded-full mx-auto my-12 border-2 border-white
              " alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title ">{name}</h2>
                <p><span className="font-semibold">Email</span> : {email}</p>
                <p className="">How to park your car at your garage? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum soluta modi unde,.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Learn now!</button>
                </div>
            </div>
        </div>
    </Fade>
    );
};

export default InstructorCard;