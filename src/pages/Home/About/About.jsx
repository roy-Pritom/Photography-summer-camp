import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
    return (
        <div className='flex md:flex-row flex-col md:mt-32 mt-16'>
            <div className="md:w-1/2">
                <Carousel
                    autoPlay={true}
                    interval={5000}
                    infiniteLoop={true}
                    showStatus={false}
                    showThumbs={false}
                    dynamicHeight={false}
                    className='mb-10 '
                >
                    <div className="carousel-slide ">
                        <img src="https://img.freepik.com/free-photo/selective-focus-shot-beautiful-green-honeycreeper-bird-perched-branch_181624-51278.jpg?w=996&t=st=1686494171~exp=1686494771~hmac=2767e5845dd9fc593888e42886202be640422c621eef65cd7287ea90925dfe54" alt="Image 1" className='rounded-lg md:h-[600px] h-[300px]' />

                    </div>
                    <div className="carousel-slide">
                        <img src="https://img.freepik.com/premium-photo/portrait-young-woman-sportswear-created-with-generative-ai_419341-5905.jpg?size=626&ext=jpg" alt="Image 2" className='rounded-lg md:h-[600px] h-[300px]' />

                    </div>
                    <div className="carousel-slide">
                        <img src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?w=996&t=st=1686494296~exp=1686494896~hmac=78cbcc90cb6b3b3c0739ccfae9ee13177a91b2b3efa75e656c42485ddcbb5bf7" alt="Image 3" className='rounded-lg md:h-[600px] h-[300px]' />

                    </div>
                    <div className="carousel-slide">
                        <img src="https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-amazing-clouds-sky_181624-2044.jpg?size=626&ext=jpg" alt="Image 3" className='rounded-lg md:h-[600px] h-[300px]' />

                    </div>
                </Carousel>
            </div>
            <div className="md:w-1/2 ml-5 md:ml-12">
                <h2 className="text-2xl md:text-6xl font-bold uppercase mb-12">about</h2>
                <div className="flex md:flex-row flex-col">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6">Description</h2>
                        <p className="text-2xl font-bold">Welcome to our vibrant online platform dedicated to the exhilarating world of summer camp photography</p>
                        <p className="text-base my-5">Our website is a haven for both campers and their families, providing a window into the magical experiences that unfold during those cherished summer days. Through the lens, we capture the essence of camp life, documenting the joy.</p>
                    </div>
                    <div className="md:w-1/2 md:ml-12">
                        <h2 className="text-3xl font-bold mb-6">Clients</h2>
                        <div className="text-xl grid grid-cols-2 gap-4 mb-6">
                            <p>Burberry</p>
                            <p>Active 3</p>
                            <p>Harrods</p>
                            <p>Lancome</p>
                            <p>Factor 2</p>
                            <p>Giorgio</p>
                            <p>Armani</p>
                            <p>Givenchy</p>
                            <p>Oil of Olay</p>
                            <p>Panasonic</p>
                            <p>Siemens</p>
                            <p>Atlantic 2</p>
                            <p>Bacardi</p>
                            <p>Channel 4</p>
                            <p>Pantene</p>
                            <p>Burberry</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;