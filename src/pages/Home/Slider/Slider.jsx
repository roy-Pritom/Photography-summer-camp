import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.css'
const Slider = () => {
    return (
        <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={false}
            className='mb-10 '
        >
            <div className="carousel-slide ">
                <img src="https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?w=1380&t=st=1686249434~exp=1686250034~hmac=d91c1cd4fe74e2593777d6c5def84ead43a3b74d616605513618090fafa964bb" alt="Image 1" className='rounded-lg md:h-[700px] h-[300px]' />
                <div className="carousel-overlay  bg-black opacity-90">

                    <div className="">
                        <p className='text-pink-300 text-8xl font-bold'>Capture the Beauty</p>
                        <p className=' text-pink-300 text-base mt-7'>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Modi sit nam sed velit possimus <br /> esse voluptas, eius fugiat culpa distinctio accusamus amet eum voluptates quo odit quidem <br /> rerum laborum debitis at unde aperiam itaque? Cumque ?</p>
                        <button className='btn  btn-outline  bg-gradient-to-r from-pink-600 to-purple-200 
          text-white mt-5'>Explore Now</button>
                    </div>
                </div>
            </div>
            <div className="carousel-slide">
                <img src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80" alt="Image 2" className='rounded-lg md:h-[700px] h-[300px]' />
                <div className="carousel-overlay">
                <div className="">
                        <p className='text-pink-300 text-8xl font-bold'>Capture the Beauty</p>
                        <p className=' text-pink-300 text-base mt-7'>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Modi sit nam sed velit possimus <br /> esse voluptas, eius fugiat culpa distinctio accusamus amet eum voluptates quo odit quidem <br /> rerum laborum debitis at unde aperiam itaque? Cumque ?</p>
                        <button className='btn  btn-outline  bg-gradient-to-r from-pink-600 to-purple-200 
          text-white mt-5'>Explore Now</button>
                    </div>
                </div>
            </div>
            <div className="carousel-slide">
                <img src="https://img.freepik.com/premium-photo/young-photographer-taking-picture-sunrise-sky-with-star-trails-digital-art-style-illustration-painting-fantasy-concept-young-photographer-taking-picture_743201-9506.jpg?w=1060" alt="Image 3" className='rounded-lg md:h-[700px] h-[300px]' />
                <div className="carousel-overlay">
                <div className="">
                        <p className='text-pink-300 text-8xl font-bold'>Capture the Beauty</p>
                        <p className=' text-pink-300 text-base mt-7'>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Modi sit nam sed velit possimus <br /> esse voluptas, eius fugiat culpa distinctio accusamus amet eum voluptates quo odit quidem <br /> rerum laborum debitis at unde aperiam itaque? Cumque ?</p>
                        <button className='btn  btn-outline  bg-gradient-to-r from-pink-600 to-purple-200  text-white mt-5'>Explore Now</button>
                    </div>
                </div>
            </div>
            <div className="carousel-slide">
                <img src="https://img.freepik.com/free-photo/professional-lighting-equipment-movie-set-with-smoke-air_1268-17216.jpg?w=1380&t=st=1686249581~exp=1686250181~hmac=caff74560558b23d73bbfd4fba53b55ae43f5413d4839633dfca5799a2b2be93" alt="Image 3" className='rounded-lg md:h-[700px] h-[300px]' />
                <div className="carousel-overlay">
                <div className="">
                        <p className='text-pink-300 text-8xl font-bold'>Capture the Beauty</p>
                        <p className=' text-pink-300 text-base mt-7'>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Modi sit nam sed velit possimus <br /> esse voluptas, eius fugiat culpa distinctio accusamus amet eum voluptates quo odit quidem <br /> rerum laborum debitis at unde aperiam itaque? Cumque ?</p>
                        <button className='btn  btn-outline  bg-gradient-to-r from-pink-600 to-purple-200   text-white mt-5'>Explore Now</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;