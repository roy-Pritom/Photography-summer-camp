import About from "../About/About";
import Blog from "../Blog/Blog";
import Instructors from "../Instructors/Instructors";
import Slider from "../Slider/Slider";
import TopClasses from "../TopClasses/TopClasses";


const Home = () => {
    return (
      <div className="">
        <Slider></Slider>
        <TopClasses></TopClasses> 
        <Instructors></Instructors>
        <Blog></Blog>
        <About></About>
      </div>
    );
};

export default Home;