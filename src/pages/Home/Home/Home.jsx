import Instructors from "../Instructors/Instructors";
import Slider from "../Slider/Slider";
import TopClasses from "../TopClasses/TopClasses";


const Home = () => {
    return (
      <div className="">
        <Slider></Slider>
        <TopClasses></TopClasses>
        <Instructors></Instructors>
      </div>
    );
};

export default Home;