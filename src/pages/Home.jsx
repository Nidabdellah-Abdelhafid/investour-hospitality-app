import React, { useRef, useState } from 'react';
import { IoChevronBackOutline, IoChevronForward, IoCaretForwardCircleOutline, IoPauseCircleOutline } from "react-icons/io5";


const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true); // Track control visibility

  // Function to toggle play/pause
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setControlsVisible(false); // Hide controls after the first play
    } else {
      video.pause();
      setIsPlaying(false);
      setControlsVisible(true); // Hide controls after the first play

    }
  };

  // Function to handle mouse hover state
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel w-full h-screen relative">
        <div id="slide1" className="carousel-item relative w-full h-screen">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/img/Groupe de masques 1.png`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-20 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-700">OWN THE MOOD</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">More Power Today, More Value Tomorrow</p>
          </div>

          {/* Carousel Controls Section */}
          <div className="absolute right-36 sm:right-5 bottom-10 sm:bottom-5 md:right-10 md:bottom-10 z-1 flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <a
                href="#slide4"
                className="carousel-control border border-white text-white hover:bg-gray-300 hover:text-black rounded-full p-1 md:p-2"
              >
                <IoChevronBackOutline className="text-white hover:text-black" />
              </a>
              <a
                href="#slide2"
                className="carousel-control border border-white text-white hover:bg-gray-300 hover:text-black rounded-full p-1 md:p-2"
              >
                <IoChevronForward className="text-white hover:text-black" />
              </a>
            </div>
            <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p>
          </div>
        </div>

        {/* Second Slide */}
        <div id="slide2" className="carousel-item relative w-full h-screen">
          <img
            alt=""
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-20 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-700">OWN THE MOOD</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">More Power Today, More Value Tomorrow</p>
          </div>

          {/* Carousel Controls Section */}
          <div className="absolute right-10 sm:right-5 bottom-10 sm:bottom-5 md:right-10 md:bottom-10 z-1 flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <a
                href="#slide1"
                className="carousel-control border border-white text-white hover:bg-gray-300 hover:text-black rounded-full p-1 md:p-2"
              >
                <IoChevronBackOutline className="text-white hover:text-black" />
              </a>
              <a
                href="#slide3"
                className="carousel-control border border-white text-white hover:bg-gray-300 hover:text-black rounded-full p-1 md:p-2"
              >
                <IoChevronForward className="text-white hover:text-black" />
              </a>
            </div>
            <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p>
          </div>
        </div>

        {/* Third Slide */}
        <div id="slide3" className="carousel-item relative w-full h-screen">
          <img
            alt=""
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-20 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-700">OWN THE MOOD</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">More Power Today, More Value Tomorrow</p>
          </div>

          {/* Carousel Controls Section */}
          <div className="absolute right-10 sm:right-5 bottom-10 sm:bottom-5 md:right-10 md:bottom-10 z-1 flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <a
                href="#slide2"
                className="carousel-control border border-white text-white hover:bg-gray-300 hover:text-black rounded-full p-1 md:p-2"
              >
                <IoChevronBackOutline className="text-white hover:text-black" />
              </a>
              <a
                href="#slide4"
                className="carousel-control border border-white text-white hover:bg-gray-300 hover:text-black rounded-full p-1 md:p-2"
              >
                <IoChevronForward className="text-white hover:text-black" />
              </a>
            </div>
            <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p>
          </div>
        </div>

        {/* Fourth Slide */}
        <div id="slide4" className="carousel-item relative w-full h-screen">
          <img
            alt=""
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-20 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-700">OWN THE MOOD</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">More Power Today, More Value Tomorrow</p>
          </div>

          {/* Carousel Controls Section */}
          <div className="absolute right-36 sm:right-36 bottom-10 sm:bottom-5 md:right-10 md:bottom-10 z-1 flex flex-col items-center space-y-2">
            <div className="flex space-x-2">
              <a
                href="#slide3"
                className="carousel-control border border-white text-white hover:bg-gray-300 hover:text-black rounded-full p-1 md:p-2"
              >
                <IoChevronBackOutline className="text-white hover:text-black" />
              </a>
              <a
                href="#slide1"
                className="carousel-control border border-white text-white hover:bg-gray-300 hover:text-black rounded-full p-1 md:p-2"
              >
                <IoChevronForward className="text-white hover:text-black" />
              </a>
            </div>
            <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between mb-5" style={{ backgroundColor: '#FCF7FF' }}>
        {/* Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
            Developing the Future Together
          </h1>
          <div className="flex my-2">
            <div className="w-2 h-[146px] lg:h-29" style={{ backgroundColor: '#281A2A' }}></div>
            <p className="text-base md:text-lg lg:text-lg mb-6 font-medium text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
              Investour Hospitality succeeds when you do. Our team looks forward to working with you to understand your hotel development goals, offer our hospitality expertise, and support your business objectives to achieve long-term success.
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 mb-6 lg:mb-10 text-start">
            Investour Hospitality is the world’s largest travel company, offering unmatched choice for guests and driving unrivaled value for owners. With our expansive portfolio of brands, dynamic sales and marketing platform, and the world’s most admired guest loyalty program, we focus on driving long-term profitable partnerships with owners. It’s never been easier for owners to tap into the power of the world’s leading hospitality company.
          </p>

          <button className="relative inline-flex items-center px-6 py-4 border-2 border-gray-800 text-gray-800 font-bold uppercase hover:bg-primary hover:text-white transition duration-300">
            <span className="absolute left-[-42px] w-14 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-12"></span>
            Learn More
          </button>
        </div>

        {/* Video Section */}
        <section className="relative lg:w-1/2 px-6 md:px-12 lg:px-16 xl:px-12 py-8 lg:py-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="w-full h-auto"
            poster={`${process.env.PUBLIC_URL}/img/Groupe de masques 2.png`}
          >
            <source src={`${process.env.PUBLIC_URL}/img/Mamounia_Marrakech.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Show controls initially, hide after first play */}
          {controlsVisible && (
            <div className="absolute inset-0 text-white px-4 py-2 text-xs md:text-sm lg:text-lg flex gap-4 items-center justify-center">
              <span className="cursor-pointer text-center" onClick={togglePlayPause}>
                Watch the Video
              </span>
              <IoCaretForwardCircleOutline size={40} onClick={togglePlayPause} />
            </div>
          )}

          {/* Show "Pause the Video" when hovered and playing */}
          {isHovered && isPlaying && (
            <div className="absolute inset-0 text-white px-4 py-2 text-xs md:text-sm lg:text-lg flex gap-4 items-center justify-center">
              <span className="cursor-pointer text-center" onClick={togglePlayPause}>
                Pause the Video
              </span>
              <IoPauseCircleOutline size={40} onClick={togglePlayPause} />
            </div>
          )}

          {/* Caption for the Video */}
          <p className="absolute bottom-12 left-10 lg:bottom-20 lg:left-16 text-white text-2xs lg:text-4sm">LA MAMOUNIA - Marrakesh</p>
        </section>
      </div>


    </div>
  );
}

export default Home;
