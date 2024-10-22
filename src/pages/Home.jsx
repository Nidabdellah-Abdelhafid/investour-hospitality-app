import React from 'react';
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

function Home() {
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
      <section className="content-section p-10">
        <div className="container mx-auto text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Developing the Future Together</h2>
          <p className="text-sm sm:text-lg leading-relaxed mb-6">
            Investour Hospitality succeeds when you do. Our team looks forward to working with you to understand your hotel development goals, offer our hospitality expertise and support your business objectives to achieve long-term success.
          </p>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Hotel Development"
            className="w-full lg:w-1/2 object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
