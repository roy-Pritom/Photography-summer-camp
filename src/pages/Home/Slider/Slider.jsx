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
          <img src="https://img.freepik.com/free-vector/world-wildlife-day-illustration-paper-style_23-2148853020.jpg?size=626&ext=jpg" alt="Image 1" className='rounded-lg' />
          <div className="carousel-overlay">
      
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita atque iure culpa sunt quibusdam voluptatum, repellendus consequatur asperiores recusandae dignissimos laudantium non quasi et, vitae, explicabo facere officia officiis.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://img.freepik.com/free-vector/world-wildlife-day-illustration-paper-style_23-2148853020.jpg?size=626&ext=jpg" alt="Image 2" className='rounded-lg' />
          <div className="carousel-overlay">

          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://img.freepik.com/free-vector/world-wildlife-day-illustration-paper-style_23-2148853020.jpg?size=626&ext=jpg" alt="Image 3" className='rounded-lg' />
          <div className="carousel-overlay">
  
          </div>
        </div>
      </Carousel>
    );
};

export default Slider;