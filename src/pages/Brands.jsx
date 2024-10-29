import React from 'react'
import ScrollToTopButton from './ScrollToTopButton'
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5'

function Brands() {
  return (
    <div>
      <div className='m-10 pt-2'>
        
      </div>
      <div className='mb-2 ml-10'>
        <div className="breadcrumbs text-sm md:px-36">
          <ul>
            <li><a>Home</a></li>
            <li><a className='text-[12px]'>Brands</a></li>
            <li><a className='text-[12px]'>Luxury</a></li>
          </ul>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel w-full h-1/2 relative mt-0">
        <div id="slide1" className="carousel-item relative w-full h-1/2">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/img/Groupe de masques 7.png`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-14 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:top-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-700">Luxury</h1>
          </div>

          <div className="absolute bottom-1 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p>
          </div>



          {/* Carousel Controls Section */}
          <div className="absolute bottom-5 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-10 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
            <div className="flex space-x-2">
              <a
                href="#slide3"
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
              <div className='justify-center items-center text-center'>
                <p className='justify-center items-center text-center'>1/3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div id="slide2" className="carousel-item relative w-full h-1/2">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/img/Groupe de masques 7.png`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-14 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:top-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-700">Luxury</h1>
          </div>

          <div className="absolute bottom-1 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p>
          </div>



          {/* Carousel Controls Section */}
          <div className="absolute bottom-5 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-10 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
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
              <div className='justify-center items-center text-center'>
                <p className='justify-center items-center text-center'>2/3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div id="slide3" className="carousel-item relative w-full h-1/2">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/img/Groupe de masques 7.png`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-14 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:top-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-700">Luxury</h1>
          </div>

          <div className="absolute bottom-1 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p>
          </div>



          {/* Carousel Controls Section */}
          <div className="absolute bottom-5 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-10 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
            <div className="flex space-x-2">
              <a
                href="#slide2"
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
              <div className='justify-center items-center text-center'>
                <p className='justify-center items-center text-center'>3/3</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='md:mx-14'>
        
      <section className="content-section text-start md:items-center md:justify-center md:mr-14">
        <div className="flex flex-col lg:flex-row md:items-center md:justify-center">
          <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-6 lg:pt-10">
            <div className="my-2">
              <p className="text-black md:text-2lg lg:text-lg mb-6 font-500 text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
              Investour Hospitality is known as an innovative leader in luxury hospitality. Each of our globally recognized luxury brands offer owners long term value through category leadership, engagement with loyal and coveted consumers, and dedicated luxury expertise to support operations.</p>
              <p className="text-black md:text-4sm lg:text-4sm mb-6 font-500 text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4">+ Read More</p>
            
            </div>

          </div>
        </div>
      </section>

      <section className="content-section items-center justify-center" >
        <div className="flex flex-col md:flex-row items-center justify-center w-full px-16 md:px-36">
        <div className="md:w-full  items-center justify-center">
            <h2 className="text-[#281A2A] text-xl md:text-6xl font-500 ">Investour Hospitality Brands</h2>
            <div className="flex justify-center py-2 md:py-5">
              <p className='md:text-2xl font-300 text-sm'>
              Visit Our Brand Sites to Learn More
              </p>
            </div>
          </div>
        </div>
      </section>

      </div>

      <ScrollToTopButton />
    </div>
  )
}

export default Brands