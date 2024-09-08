import { useEffect, useState } from 'react';

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide =>
        prevSlide === totalSlides ? 1 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div>
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.imgur.com/remxAUk.jpg"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/GVLpL7n/bannercar3edit.jpg"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/dfT2sFd/bannercar4.jpg"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <div className="carousel w-full">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            currentSlide === 1 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.imgur.com/remxAUk.jpg"
            className="w-full h-[450px] lg:h-[550px] object-cover"
            alt="Slide 1"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
              onClick={() => setCurrentSlide(3)}
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
              onClick={() => setCurrentSlide(2)}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className={`carousel-item relative w-full ${
            currentSlide === 2 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.ibb.co/GVLpL7n/bannercar3edit.jpg"
            className="w-full h-[450px] lg:h-[550px] object-cover"
            alt="Slide 2"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
              onClick={() => setCurrentSlide(1)}
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent text-white"
              onClick={() => setCurrentSlide(3)}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className={`carousel-item relative w-full ${
            currentSlide === 3 ? 'block' : 'hidden'
          }`}
        >
          <img
            src="https://i.ibb.co/dfT2sFd/bannercar4.jpg"
            className="w-full h-[450px] lg:h-[550px] object-cover"
            alt="Slide 3"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent text-white"
              onClick={() => setCurrentSlide(2)}
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent text-white"
              onClick={() => setCurrentSlide(1)}
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
