import React, { useRef, useState } from 'react'
import ScrollToTopButton from './ScrollToTopButton'
import { IoCaretForwardCircleOutline, IoChevronBackOutline, IoChevronForward, IoPauseCircleOutline } from 'react-icons/io5'

function Brands() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

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
      <div className='m-14 pt-2 md:m-10'>

      </div>
      <div className='mb-2 ml-10'>
        <div className="breadcrumbs text-sm md:px-36">
          <ul>
            <li><a>Home</a></li>
            <li><a className='text-[12px]'>Marques</a></li>
            <li><a className='text-[12px]'>Valeria Collection</a></li>
          </ul>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel w-full h-[80vh] relative mt-0">
        <div id="slide1" className="carousel-item relative w-full h-auto">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/img/v_c_1.jpg`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:top-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-xl md:text-4xl font-700">Valeria Collection – L’Art de l’Hospitalité All-Inclusive            </h1>
          </div>

          <div className="absolute bottom-6 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            {/* <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p> */}
          </div>



          {/* Carousel Controls Section */}
          <div className="absolute bottom-12 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-10 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
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
        <div id="slide2" className="carousel-item relative w-full h-auto">
          <img
            alt=""
            src={`https://s3.eu-west-1.amazonaws.com/fractalitetest/2025-02-25T14:20:13.607553421_hp-2-min%20(1).jpg`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:top-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
          <h1 className="text-xl sm:text-xl md:text-4xl font-700">Valeria Collection – L’Art de l’Hospitalité All-Inclusive          </h1>
          </div>

          <div className="absolute bottom-6 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            {/* <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p> */}
          </div>



          {/* Carousel Controls Section */}
          <div className="absolute bottom-12 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-10 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
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
        <div id="slide3" className="carousel-item relative w-full h-auto">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/img/hp-4.jpg`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:top-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
          <h1 className="text-xl sm:text-xl md:text-4xl font-700">Valeria Collection – L’Art de l’Hospitalité All-Inclusive          </h1>
          </div>

          <div className="absolute bottom-6 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-10 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            {/* <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p> */}
          </div>



          {/* Carousel Controls Section */}
          <div className="absolute bottom-12 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-10 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
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
                Marque haut de gamme d’Investour Hospitality, Valeria Collection fusionne luxe, culture et bien-être pour une expérience immersive et raffinée.
                <br/>✔ Gastronomie d’exception, espaces bien-être et expériences exclusives
                <br/>✔ Hébergements élégants et écoresponsables, conçus pour favoriser la reconnexion et l’authenticité
                <br/>✔ Séjours sur-mesure, adaptés aux familles, voyageurs sophistiqués et amateurs de détente

                </p>
                {/* <p className="text-black md:text-4sm lg:text-4sm mb-6 font-500 text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4">+ Read More</p> */}

              </div>

            </div>
          </div>
        </section>

        <section className="content-section items-center justify-center" >
          <div className="flex flex-col md:flex-row items-center justify-center w-full px-16 md:px-36">
            <div className="md:w-full  items-center justify-center">
              <h2 className="text-[#281A2A] text-xl md:text-5xl md:font-500 font-700">Valeria Collection, une signature d’exception pour un séjour All-Inclusive inoubliable</h2>
              <div className="flex justify-center py-2 md:py-5">
                <p className='md:text-2xl font-300 text-sm'>
                  Visit Our Brand Sites to Learn More
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center py-10 px-8">
          {/* <h1 className="text-3xl font-bold mb-4 text-center">Investour Hospitality Brands</h1>
          <p className="text-lg mb-8 text-center">Visit Our Brand Sites to Learn More</p> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* First Row - Four Images */}
            <div className="relative group">
              <img src={`${process.env.PUBLIC_URL}/img/hp-3.jpg`} alt="Brand 1" className="w-full h-auto" />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h2 className="text-xl font-bold">Karlton Hotel</h2>
                  <p className="mb-4">Legendary service creates experiences so exceptional our guests can return simply by closing.</p>
                  <button className="text-white px-4 py-2">LEARN MORE</button>
                </div>
              </div> */}
            </div>
            <div className="relative group">
              <img src={`https://s3.eu-west-1.amazonaws.com/fractalitetest/2025-02-25T14:12:18.173586782_hp-5-min.JPG`} alt="Brand 2" className="w-full h-auto" />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h2 className="text-xl font-bold">Karlton Hotel</h2>
                  <p className="mb-4">Legendary service creates experiences so exceptional our guests can return simply by closing.</p>
                  <button className="text-white px-4 py-2">LEARN MORE</button>
                </div>
              </div> */}
            </div>
            <div className="relative group">
              <img src={`${process.env.PUBLIC_URL}/img/hp-6.jpg`} alt="Brand 3" className="w-full h-auto" />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h2 className="text-xl font-bold">Karlton Hotel</h2>
                  <p className="mb-4">Legendary service creates experiences so exceptional our guests can return simply by closing.</p>
                  <button className="text-white px-4 py-2">LEARN MORE</button>
                </div>
              </div> */}
            </div>
            <div className="relative group">
              <img src={`https://s3.eu-west-1.amazonaws.com/fractalitetest/2025-02-25T14:12:29.863323491_hp-7-min.JPG`} alt="Brand 4" className="w-full h-auto" />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h2 className="text-xl font-bold">Karlton Hotel</h2>
                  <p className="mb-4">Legendary service creates experiences so exceptional our guests can return simply by closing.</p>
                  <button className="text-white px-4 py-2">LEARN MORE</button>
                </div>
              </div> */}
            </div>
          </div>
          {/* Second Row - Two Centered Responsive Images */}
          <div className="flex md:justify-center mt-6 flex-wrap">
            <div className="relative w-full max-w-xl md:max-w-xs md:mx-2 group flex-1 min-w-[200px]">
              <img src={`${process.env.PUBLIC_URL}/img/hp-8.jpg`} alt="Brand 5" className="w-full h-auto" />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h2 className="text-xl font-bold">Karlton Hotel</h2>
                  <p className="mb-4">Legendary service creates experiences so exceptional our guests can return simply by closing.</p>
                  <button className="text-white px-4 py-2">LEARN MORE</button>
                </div>
              </div> */}
            </div>
            <div className="relative w-full max-w-xl md:max-w-xs mt-6 md:mt-0 md:mx-2 group flex-1 min-w-[200px]">
              <img src={`${process.env.PUBLIC_URL}/img/hp-4.jpg`} alt="Brand 6" className="w-full h-auto" />
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h2 className="text-xl font-bold">Karlton Hotel</h2>
                  <p className="mb-4">Legendary service creates experiences so exceptional our guests can return simply by closing.</p>
                  <button className="text-white px-4 py-2">LEARN MORE</button>
                </div>
              </div> */}
            </div>
          </div>
        </div>


        <div className='divider my-16'></div>
        <section className="content-section items-center justify-center mt-16" >
          <div className="flex flex-col md:flex-row items-center justify-center w-full px-16 md:px-36">
            <div className="md:w-full  items-center justify-center">
              <h2 className="text-[#281A2A] text-xl md:text-6xl font-500 ">Discover More</h2>

            </div>

          </div>
          <section className="relative lg:w-full h-1/2 px-6 md:px-16 lg:px-16 xl:px-16 py-8 lg:py-16"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='hero-overlay bg-opacity-90 bg-[#1D1D1D]'></div>
            <video
              ref={videoRef}
              className="w-full h-auto"
              poster={`${process.env.PUBLIC_URL}/img/Groupe de masques 14.png`}
            >
            <source src="https://s3.eu-west-1.amazonaws.com/fractalitetest/2025-02-24T13:08:55.260270708_palmiya.mp4" type="video/mp4" />
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
          </section>
        </section>

      </div>

      <ScrollToTopButton />
    </div>
  )
}

export default Brands