import React, { useRef, useState } from 'react';
import { IoChevronBackOutline, IoChevronForward, IoCaretForwardCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import ScrollToTopButton from './ScrollToTopButton';
import { Link } from 'react-router-dom';


const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleMouseEnter1 = (regionId) => {
    setSelectedRegion(regionId);
  };

  const handleMouseLeave1 = () => {
    setSelectedRegion(null);
  };

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
            src={`${process.env.PUBLIC_URL}/img/hp-1.jpg`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-20 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-5xl font-700">TRANSFORMEZ LES SÉJOURS EN HISTOIRES</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">Des expériences inoubliables aujourd’hui, des souvenirs précieux pour toujours.</p>
          </div>

          {/* Carousel Controls Section */}
          <div className="absolute bottom-8 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-24 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
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
            </div>
            {/* <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p> */}
          </div>
        </div>

        {/* Second Slide */}
        <div id="slide2" className="carousel-item relative w-full h-screen">
          <img
            alt=""
            src={`https://s3.eu-west-1.amazonaws.com/fractalitetest/2025-02-25T14:20:13.607553421_hp-2-min%20(1).jpg`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-20 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-5xl font-700">TRANSFORMEZ LES SÉJOURS EN HISTOIRES</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">Des expériences inoubliables aujourd’hui, des souvenirs précieux pour toujours.</p>
          </div>

          {/* Carousel Controls Section */}
          <div className="absolute bottom-8 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-24 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
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
            {/* <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p> */}
          </div>
        </div>

        {/* Third Slide */}
        <div id="slide3" className="carousel-item relative w-full h-screen">
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/img/valeria.jpeg`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Section (Centered on Mobile) */}
          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-20 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-5xl font-700">TRANSFORMEZ LES SÉJOURS EN HISTOIRES</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">Des expériences inoubliables aujourd’hui, des souvenirs précieux pour toujours.</p>
          </div>

          {/* Carousel Controls Section */}
          <div className="absolute bottom-8 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-24 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
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
            </div>
            {/* <p className="text-white text-center text-xs sm:text-sm md:text-sm mt-2">Royal Mansour Marrakech</p> */}
          </div>
        </div>

        {/* Fourth Slide */}
        {/* <div id="slide4" className="carousel-item relative w-full h-screen">
          <img
            alt=""
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="absolute bottom-24 sm:bottom-32 left-1/2 transform -translate-x-1/2 md:bottom-20 md:left-10 md:translate-x-0 text-white z-10 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-6xl font-700">OWN THE MOOD</h1>
            <p className="mt-2 text-xs sm:text-sm md:text-lg">More Power Today, More Value Tomorrow</p>
          </div>

          <div className="absolute bottom-8 sm:bottom-36 left-1/2 transform -translate-x-1/2 md:bottom-24 md:right-36 md:translate-x-1/2 text-white z-10 flex flex-col items-center  space-y-2">
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
        </div> */}
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row  mb-14" style={{ backgroundColor: '#FCF7FF' }}>
        {/* Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
            Investour Hospitality – L’Excellence Hôtelière
          </h1>
          <div className="flex my-2">
            <div className="w-2 h-[146px] lg:h-29" style={{ backgroundColor: '#281A2A' }}></div>
            <p className="text-base md:text-lg lg:text-lg mb-6 font-medium text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
            Investour Hospitality, filiale hôtelière d’Investour Group, conçoit, gère et développe des hôtels et resorts d’exception. En combinant l’hospitalité marocaine avec des standards internationaux, nous créons des expériences uniques, rentables et innovantes.
            </p>
          </div>

          <p className="text-sm md:text-base text-gray-600 mb-14 my-5 lg:mb-10 text-start">
          Grâce à une gestion rigoureuse, nous optimisons la rentabilité, appliquons des stratégies avancées de revenue management et assurons la valorisation durable des actifs hôteliers.
          </p>
          {/* <div className="flex justify-start px-12 py-5">
            <button className="relative inline-flex items-center px-8 py-4 border-2 border-gray-800 text-gray-800 font-bold uppercase hover:bg-[#6D3D90] hover:text-white transition duration-300">
              <span className="absolute left-[-42px] w-14 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-12"></span>
              Learn More
            </button>
          </div> */}

        </div>

        {/* Video Section */}
        <section className="relative lg:w-1/2 px-6 md:px-12 lg:px-16 xl:px-12 py-8 lg:py-16 mb-[-60px] md:mb-[-90px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="w-full h-auto"
            poster={`${process.env.PUBLIC_URL}/img/Groupe de masques 2.png`}
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
          {/* <p className="absolute bottom-12 left-10 lg:bottom-20 lg:left-16 text-white text-2xs lg:text-4sm">LA MAMOUNIA - Marrakesh</p> */}
        </section>
      </div>



      {/* Content Section map */}
      <div className='mb-0 md:mb-8'>
        <h1 className="text-2xl md:text-5xl font-500 mb-2 md:mb-12">Un pays d'opportunités</h1>
        <div
          className="flex flex-col lg:flex-row justify-between items-start"
          style={{ backgroundColor: "#fff" }}
        >

          {/* Left Column: City List */}
          <div className="lg:w-1/2 w-full  lg:mb-0 px-14 py-4 md:px-24 lg:px-16 xl:px-20 lg:py-4 md:ml-16" >
            <div className="flex flex-col space-y-4 md:ml-16">
              <div>
                <h3 className={`text-lg  text-purple-700 text-start ${selectedRegion === 'Casablanca' ? 'font-bold' : 'font-900'} `}>
                  Casablanca
                </h3>
                <div className="border-b border-[#6D3D90]"></div>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Casablanca' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>Siège du groupe</p>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Casablanca' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>Prochaines ouvertures d'hôtels</p>
              </div>
              <div>
                <h3 className={`text-lg  text-purple-700 text-start ${selectedRegion === 'Marrakech-Tensift-Al Haouz' ? 'font-bold' : 'font-900'} `}>
                  Marrakech
                </h3>
                <div className="border-b border-[#6D3D90]"></div>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Marrakech-Tensift-Al Haouz' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>2 hôtels (Dar Atlas Club et Madina Club) </p>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Marrakech-Tensift-Al Haouz' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>1 parc aquatique (Palmiya Fun & Waterland)</p>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Marrakech-Tensift-Al Haouz' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>Prochaines ouvertures d'hôtels</p>
              </div>
              <div>
                <h3 className={`text-lg  text-purple-700 text-start ${selectedRegion === 'Souss-Massa' ? 'font-bold' : 'font-900'} `}>Agadir</h3>
                <div className="border-b border-[#6D3D90]"></div>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Souss-Massa' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>1 hôtel (Jardins d’Agadir Club)</p>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Souss-Massa' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>Prochaines ouvertures d'hôtels</p>
              </div>
              <div>
                <h3 className={`text-lg  text-purple-700 text-start ${selectedRegion === 'Gharb-Chrarda-Beni Hssen' ? 'font-bold' : 'font-900'} `}>Laarache</h3>
                <div className="border-b border-[#6D3D90]"></div>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Gharb-Chrarda-Beni Hssen' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>Lixus Beach Resort</p>
                <p className={`text-purple-500 text-end ${selectedRegion === 'Gharb-Chrarda-Beni Hssen' ? 'font-600 text-2sm' : 'font-300 text-sm'} `}>Prochaines ouvertures d'hôtels</p>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end px-4 lg:px-16 md:mr-16">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%"
              height="500" viewBox="0 0 646.136 690.728">
              <g id="moroccoHigh" transform="translate(0.285 -137.796)">
                <path id="MA-01" d="M444.7,138.27l.15.46.45-.01.28,1.31,1.38.42-.47,2.17.73,5.4.57,1.35,1.74-.12-.4,1.07.56,2.81,1.17,2.52.52-.1.32.54.63-.13,1.02.46.77,1.27,1.79,1.28.95,1.91.07.24.63,1.11,1.21.35.52-.19,3.37,3.94,1.16.62,1.14.15,1.32,1.54,1.44.84.46.58,3.81,1.54,1.26-.45.7.89.65.27.95-.12,2.59.78,1.14-.06,1.45.69h0l-1.09,1.26-.17,1.35.66.69.18,2.36-.93,2.41-2.54,1.66-3.84.68-4.02,3.51-.83.04-.63.51-.75,1.3-.81.12-1.49.77-1.15-.05-2.81.74-1.01-.32-.63.42h-.89l-2.48,1.17-1.13,1.3h0l-2.59-.68-3.25,1.39-4.14-.87-1.86-1.07-1.51-2.41-1.11-.59-.53-.79-.27-.09-1.23.88-1.27-.26-1.62.07-.65-.43-1.36-2.03-1.45-.68-.73-.82-1.7-.25-.85-.99-2.08-.17-2.3-.9-5.26-.95-2.53.15-3.63-.35h0l3.05-9.56.52-.21.41-.69,2.43-8.46.75-1.26L420,160l.87-.81.89-2.52.19-1.76.23-.44.96-4.72,1.27-4.57.23-.06-.02-.63.86-.62,1.65.23.67-.21,1.6.61.01.34.92.19,1.11-1.05.03-.91,1.02-.25.14-.35.46.1.75-.47,1.31.61.85-.43,1.1.26.67-.21.82-.67.08.23.31-.08,1.72-1.93.51-.06.4-.97.24.21.42-.48h.35l.52.51.16-.29.92-.03Z"
                  onMouseEnter={() => handleMouseEnter1('Tanger-Tétouan')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Tanger-Tétouan' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-02" d="M412.43,181.64l3.63.35,2.53-.15,5.26.95,2.3.9,2.08.17.85.99,1.7.25.73.82,1.45.68,1.36,2.03.65.43,1.62-.07,1.27.26,1.23-.88.27.09.53.79,1.11.59,1.51,2.41,1.86,1.07,4.14.87,3.25-1.39,2.59.68h0l-.45,1.49-.01,1.65-.57,2.56.05.52.58.29-.21.69-.44.37-1.03-.19-1.27.53-.2.89-.48.43-.63.47-1.39.32-.27.5.03,1.09-.56.49-1.07.25-.56,1.07-2.52,1.51-1.72.46-.31.64.72.83-.31.56.19.73.5.11.71-.42.52.24-.13.53h0v1.13l.99,1.44h0l-.5.45-1.08-.02-.15,1.75-.83,1-.92.5-.25.58.75,1.04-2.29.66-1.44,1.87-.56-.18-.34-.78.29-.7-.09-.83-.6-.41-2.31-.4-1.35.27-.86-.27-.24-.69.84-1.61-.49-.61-1.35-.13-.49-.7-1.35-.13-1.37,1.04.08,1.19-.47.51-.53.33-1.39.21-.37.33.42,1.09.76-.11.46.26.65,2.39h0l-2.11-.06-1.86-.57-1.62-.02-6.97-2.14-6.64.55-3.79-.94-3.52,1.58-.43-.28-1.58-.06-.65-.34-.73-1.1-1.83.16-.52-.97h0l1.23-3.15.15-.43,5.76-9.42,5.09-10.4,3.31-7.91.64.18-.37,1.05.11.41.87.31.13.35.36-.75.34-.1-.03-.99-1.27-.41-.25-.32-.31.08Z"
                  onMouseEnter={() => handleMouseEnter1('Gharb-Chrarda-Beni Hssen')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Gharb-Chrarda-Beni Hssen' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-03" d="M500.69,168.92l.47.32-.44.49.27.17-.09.41.87,1.03,1.88.6,1.65-.28h0l.31,1.31-.51,2.95.37,1.63.01,2.4.3.43-.14,5.57.54.3.08.85.39.17,1.69-.21.12.27-.59.5.32.46,2.02-.25,1.54.99,1.64-.21.43.48-.43.66.45.87-.14,1.38-.9,1.55.35.6.95.49.06.54-.59.28-1.42-.01-.25.26.42,1.93-.14.64-.87.8.15.32,1.94-.68.64.74.06.99.31.38,1.9.75.69-.05.89-2.97.78-.32.11-1.02,1.28.4,1.14-1.33,2.5-1.43.58-1.19-.04-1.28.49-.32,4.83.08.81.46,1.34,1.79,1.23-.04,1.86,1.09.54.7,1.55.54.13.49-.66,1.74,1.45.76.11.65-.38.17-2.08-.91-2.27,1.09.15,1.43-.65,2.53-1.35.09.22.96-.26.52-.85.2-.49.83-2.38,1.18-.35.77.13.46-.38.38.16.87.68.9,1.13,1.18,1.76,1.17.24,4.61,1.6,1.37.04.64-1.44,3.14-1.01.65-3.75,1.4-.35.67-.15,2.15,1.74,1.34,2.65,3.66,1.01,2.31.09,2.17h0l-3.39-.61-1.47-.53-2.76-2.02-3.25-.71-.57-.32-1.75-2.11-.89-.27-.29-.43-1.03-.46-.51-.85-.5-.02-.51.14-.58,1.61-.97.58-2.04,3.7-1.51,1.22-1.43.54-.31.73-1.35,1.45-1.41.91-.25,1.35-.39.21-.81,1.31-3.17,1.4-1.3.88-4,.35-1.55-1.96,1.34-2.04.09-.74-.98-.59-.78-.03-.72.1-1.36.94-1.02-1.73.17-3.14.92-1.52,1.98-1.21-.45-.31-2.51.12-.47-.41-.59-.06-.53-2.05-.2-.21-1.03-.02-1.04-.74-.95.01-2.75,2-.54-.12-1.39-1.12-1.32-.17-1.37-.6-1.12-1.13.04-3.22-.12-.63-.81-.98.11-.69-.52-.38-1.39-.08-1.07-.86-1.49-.09-.41-.43-1.37-.3-.88-1.66.18-.86-.27-1.23-.9.29-.61-.1.15-1.41-.19-.63-.54-.18-.92.5-1.84.01-.02-.79-.64-.41.12-.43.98-.14-.64-.96-.46-.05-.7.69-.68.19-.24-.4.57-.65-.44-.74-3.18-.27-.42.66-.4.03-.14-.34.25-.45-.4-.03-1.17.87-.38-.11.05-.81-.43-.32-1.83-.32-1.58.61-.8.79-.86-.27-.35.28-1.25.06-1.79.69-.65-.93-1.37.53-1.59-1.71h0l.13-.53-.52-.24-.71.42-.5-.11-.19-.73.31-.56-.72-.83.31-.64,1.72-.46,2.52-1.51.56-1.07,1.07-.25.56-.49-.03-1.09.27-.5,1.39-.32.63-.47.48-.43.2-.89,1.27-.53,1.03.19.44-.37.21-.69-.58-.29-.05-.52.57-2.56.01-1.65.45-1.49h0l1.13-1.3,2.48-1.17h.89l.63-.42,1.01.32,2.81-.74,1.15.05,1.49-.77.81-.12.75-1.3.63-.51.83-.04,4.02-3.51,3.84-.68,2.54-1.66.93-2.41-.18-2.36-.66-.69.17-1.35,1.09-1.26h0l.98.33.84-.21,1.88.51.56-.45.57-.05.4-.45.95-.21.27-.26,1.15-.48,1.31.15.13-.26,1.88-.53.51.23.58-.13,3.21-1.35.26-.39.39.17.71-.31.26.36,1.12-.19,1.42-1.05Z"
                  onMouseEnter={() => handleMouseEnter1('Taza-Al Hoceïma-Taounate')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Taza-Al Hoceïma-Taounate' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-04" d="M537.32,160.66l.51.59-.55.68.36.4-.63,1.82.58.84-.14,2.66,1.41.99.15.41,2.81,2.93-1.08-.58-.23-.59-.9-.64-.57-.88-.43.15.2,1.22.33.4.37-.1.26.26-.15.33-.32-.26-.54.59.04.69.78,1.04.13.71.82.69,2.53,1.27,2.34.04.16-.5-.19-.31-1.26-.9-.2-.6-.8-.5-1.25-1.45,3.65,3.23,3.81,1.58,3.01.41,1.79-.36,1.48-.71,2.29-2.03.05.35.52.22,2.56.59,4.75,1.75-.06,1.76,1.1.72.65.99,1.75.73.1.55,1.19,1.27,1.94,1.38,2.48-.46.13,2.67,2.95,1.63.2,1.58,1.12.22,1.44.96.54-.22-.07.54,2.65,1.42-1.27.91-.14,1.17-2.9,3.78.52-.07.87.59,1,1.54v.47l.84.79.1.58.42.17.2.63,2.32.99-3.66,4.67.53.87,1.39,1.29,1.01,1.6-.29,3.23,2.44,6.04-1.95,10.78,1.09,4.44-2.21,1.7-.33,1.59,1.01.56.16.44,2.03-.19.86,2.33,1.21.73.13.45-.26,1.32.31.09-.01.34-.36.43.58,1.22-1.23,1.75-.16,2-.29.71-.49.35-.69,2,.09,3.47-.32,1.07,1.43,2.43,1.14.95,1,2.54,1.58,1.87.76.61,1.02.35.63.75.36,1.23-.57.92.17.81-.52,1.28-.4.37-.54-.11-1.26.53,6.14,9.82,4.22,1.97,10.29,7.92.07.29-1.84,1.62-.8,1.2-1.36.81-.71.78-1.12-.16-1.82.64-.39.53-.53,2.11-1.01.79.53.76-.43,2.64.18,2.04-2.21,1.72.48.36,2.73-.74,1.29.55.41,1.23.61.33-.02.79-1.15.36-.72.79-1.88.38-.65-.45-2.06.18-1.33-.4-.78.23-1.56-.08-2.28-.31-.81-.39-2.87.52-4-1.05-1.09.07-4.24-1.42-1.84-.04-.91-.69h-.86l-.23.5-.67-.33-.92.05-.76-.75-1-.36-3.32,1.28-2.63.49-.71-.02-3.32-1.14-.97.55-6.1-.15-3.15.65-2.03,1.44-2.41-.22-2.47.31-3.47-.2-2.33.19-1.16-.43-.75,1.14-.34,2.87,1.77,2.96.19,1.4,1.34,2.23.2,1.15-.19.97.85.98-.06.67-6.4,1.51.02.26-10,2.16h0l-1.27-8.51-.08-2.48.5-4.2,1.56-3.04-.34-1.13-1.35-.42-6.62-1.04-3.59-.36-2.79.49-1.43-.14-.62-.37-.07-.69.68-1.46-.66-.84-1.36-.4-1.2-1.15-.75-.29-1.84.01-.99-.47-.84-3.88-4.42-9-1.26-1.52-1.32-.58h0l-.16-.74,2.09-3.29,2.23-2.44,3.34-6.38,1.95-3.09,2.99-2.98,1.92-1.14,4.79-.51,3.92.05,3.61.57,2.74-.12,2.26-.49,4.28-1.75,1.71-.29,2.41-.86.83-1.24.32-1.85-.55-1.54-3.01-3.58-1.54-2.58-2.68-2.44-2.45-1.53-.74-1.49.01-.93.93-2.09,2.5-2.73,1.09-1.71.76-2.94h0l-.09-2.17-1.01-2.31-2.65-3.66-1.74-1.34.15-2.15.35-.67,3.75-1.4,1.01-.65,1.44-3.14-.04-.64-1.6-1.37-.24-4.61-1.76-1.17-1.13-1.18-.68-.9-.16-.87.38-.38-.13-.46.35-.77,2.38-1.18.49-.83.85-.2.26-.52-.22-.96,1.35-.09.65-2.53-.15-1.43,2.27-1.09,2.08.91.38-.17-.11-.65-1.45-.76.66-1.74-.13-.49-1.55-.54-.54-.7-1.86-1.09-1.23.04-1.34-1.79-.81-.46-4.83-.08-.49.32.04,1.28-.58,1.19-2.5,1.43-1.14,1.33-1.28-.4-.11,1.02-.78.32-.89,2.97-.69.05-1.9-.75-.31-.38-.06-.99-.64-.74-1.94.68-.15-.32.87-.8.14-.64-.42-1.93.25-.26,1.42.01.59-.28-.06-.54-.95-.49-.35-.6.9-1.55.14-1.38-.45-.87.43-.66-.43-.48-1.64.21-1.54-.99-2.02.25-.32-.46.59-.5-.12-.27-1.69.21-.39-.17-.08-.85-.54-.3.14-5.57-.3-.43-.01-2.4-.37-1.63.51-2.95-.31-1.31h0l1.29-.89.81-2.44,1.59-.63,1.15.1.44.8,2.88,1.96,2.07.44,1.73.85,1.48-.33.9.63,3.42.32,1.27-.89,1.74-.37.76-.48.43.08.34-.28.96.21,1.37-1.35.87-1.52,1.09.62,1.5-1.06,2.04-3.83.05-.82.05-.3.54-.75.06-.83Z"
                  onMouseEnter={() => handleMouseEnter1("Oriental")}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Oriental' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-05" d="M443.55,212.11l1.6,1.71,1.36-.53.65.93,1.8-.69,1.24-.06.35-.28.86.27.8-.79,1.58-.61,1.83.31.43.33-.04.81.37.11,1.17-.87.4.04-.24.45.13.34.41-.04.42-.65,3.18.27.44.74-.57.65.24.4.68-.19.7-.69.46.06.65.95-.98.14-.12.44.64.41.02.79,1.83-.01.93-.5.54.19.19.63-.15,1.41.61.1.89-.29.28,1.23-.18.85.88,1.66,1.37.3.41.43,1.49.08,1.06.87,1.39.08.52.38-.11.69.8.98.12.63-.03,3.22,1.11,1.13,1.37.6,1.32.17,1.39,1.12.54.12,2.75-2,.94-.01,1.05.74,1.03.02.2.21.52,2.05.59.06.47.41,2.5-.11.45.3-1.98,1.22-.92,1.52-.18,3.14,1.02,1.73,1.37-.95.71-.09.78.02.98.6-.09.74-1.35,2.04,1.55,1.95,4-.34,1.3-.88,3.16-1.4.82-1.31.38-.21.25-1.36,1.41-.91,1.34-1.45.31-.74,1.43-.53,1.51-1.22,2.04-3.7.98-.58.58-1.61.51-.14.51.02.5.85,1.04.46.29.43.89.27,1.75,2.11.57.32,3.25.71,2.76,2.02,1.47.53,3.39.61h0l-.76,2.94-1.09,1.72-2.49,2.72-.93,2.09-.01.94.73,1.49,2.45,1.52,2.68,2.44,1.54,2.58,3.01,3.58.55,1.54-.32,1.85-.83,1.24-2.4.86-1.71.29-4.29,1.75-2.25.49-2.74.13-3.61-.58-3.92-.05-4.79.52-1.92,1.14-2.99,2.98-1.95,3.09-3.34,6.38-2.23,2.44-2.09,3.29.16.74h0l-1.36.55-1.11.07-2.77-.05-1.41-.36-1.1.22-.91-.32-.31-.56-.12-3.17-3.48-3.51-1.54-.98-.94-2.04-.62-.69-.56-.37-2.54-.21-4.59.69-1.71-.7L469.3,276l-.36-.89.11-1.07.48-.75.13-.82-3.53-3.99-1.97-6.3-1.37-3.13-2.33-2.07-.71-1.38-.12-.89.25-.78,3.9-5.65.3-1.02-.25-1.47-1.62-1.72-2.16-1.75-3.65-.5-.86-.54-.41-.86-.02-1.01,1.75-4.58-.23-2.27-1.28-2.04-.89-.52-.82-3.1-2.23-.63-1.15.04-.55-.66-.65-1.57-.48-.39-1-.21-1.24.6-.54-.18-.38-2.17.2-3-.21-2.11-.41-1.45-.45-.48h0l-.99-1.44Z"
                  onMouseEnter={() => handleMouseEnter1('Fès-Boulemane')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Fès-Boulemane' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-06" d="M444.55,214.69l.45.48.41,1.45.21,2.11-.2,3,.38,2.17.54.18,1.24-.6,1,.21.48.39.65,1.57.55.66,1.15-.04,2.23.63.82,3.1.89.52,1.28,2.04.23,2.27-1.75,4.58.02,1.01.41.86.86.54,3.65.5,2.16,1.75,1.62,1.72.25,1.47-.3,1.02-3.9,5.65-.25.78.12.89.71,1.38,2.33,2.07,1.37,3.13,1.97,6.3,3.53,3.99-.13.82-.48.75-.11,1.07.36.89,1.5,1.16,1.71.7,4.59-.69,2.54.21.56.37.62.69.94,2.04,1.54.98,3.48,3.51.12,3.17.31.56.91.32,1.1-.22,1.41.36,2.77.05,1.11-.07,1.36-.55h0l1.31.58,1.27,1.52,4.42,8.99.83,3.88.99.47,1.84-.01.75.3,1.2,1.14,1.36.41.66.84-.68,1.45.08.69.62.38,1.43.14,2.79-.5,3.59.36,6.62,1.04,1.35.42.34,1.13-1.55,3.04-.51,4.19.09,2.48,1.27,8.51h0l-15.24,3.4v10.29l.67.34-.52.71-.46-.32-.25.64-1.22.38-.06.53-.36.35-.49-.07-.21-.66-.31-.1-.33.63.14.3-.39.26.07,1.04-.87.79.13.27.28-.23.2.6.49-.18-.08.83-.93.65.13.3-.42.26.31.64.39-.06.22,1.71.28.19-.67,1.43.17,1.23.46-.26.72.04.41.34.26-.8-.39-.48.89-.36-.13-.51.45-.45.29.4.51.08.36.61.06,1.39-.36,1.47.49-.16.07-.54.76.4.31-.28-.29-.46-.02-.88-.26-.19.49-.32.07,1.34.27.21.52-.57-.06.89.47.17.08.96.44-.03-.02.71.69.67.07-.38.49.11-.08-.51.34-.14-.1,1.04.25.38.24-.3.16,2.86-.41.45.29.03.02.34-.64.3.18.42-.23-.06-.04.48-.59-.21-.01.51-.42.14.14.5-.4.59-.43-.01-.42,1.28-.32.04-.33-.15-.66.93-.15,1.76-.39.35.24,1.34.53-.22.61.34.47,1.42-.51.27-.43,1.09-7.74,3.29-5.76,1.54-5.73.33-6.63,2.48L474.88,393l-12.5,6.22-6.92,5.85h0l-1.32-3.82-.52-.28-1-1.38-.36-1.85-.5-.96.24-3.31-.1-5.52.43-2.26-.03-7.21-1.89-2.59-.19-.88-1.12-1.4-2.02-3.52-.71-3.39-.08-1.33,1.14-5.58.86-6.67,1.59-3.72.92-3.36.18-2.63-.26-1.36-.47-1.08-1.14-1.28-.94-.6-2.96-.91-2.76-1.69-.99-1.83-.6-.48-5.3-1.45-2.72.64-2.73-.39-.48-.49.45-1.38,8.67-9.18,1.01-2.12-.44-.58-5.2-3.55-.94-.05-2.5,1.78-1.5.37h0l.27-.75-.35-1.33-.85-.29-.34-.74.26-.63.86-.38-.2-1.55.99-.69.03-1.55.85-.82,1.37-.07.75-.71.57-.74.2-1.31.28-.3.89-.44,2.32-.44,1.92.46.63-.44.2-1.1-.99-.84.88-2.01-.46-.82.68-1.02.12-1.06.84-1.23-.96-2.21-1.39-1.99-.4-1.46-2.24-.21-.34-.56-1.59-1.11-1.13-.2-1.27,1.07-.99-.07-.5-2.59-.39-.79-.78-.4-.83-1.08-.77.16-.65-.32-.66-1.38-1.7-.99-2.34.37-.44-.18h0l-.33-.63.2-1.27-.34-.5.08-.37.8-.51-1.36-1.82-.25-1.26-.74-.29-1.77.78-.65.01-.57-.48.09-1.7,1.7-.36.65-.48.07-.66-.35-.44-1.67-.72-.33-1.65-2.14-1.03-1.76-1.71-1.51-.5-.44-1.2-3.73-1.27-.36-.67.11-.76.43-.8.71-.53.13-.72h0l-.97-1.89.77-1.77-.41-.69.5-1.79.57-.48,2.31-.53,1.03-.02,1.17.72.55-.12.55-.64.53.28.43.91.43.19.92-.13.31.29-.01.81.33.44.13,2.19.55.77,1.52.16.42.56.73.13.77-.38,1.51-1.74,1.44-.46,4.74,1.39.88-.32.71-1.35.06-1.28-.59-1.6-.13-3.39.41-4.93.72-2.76.55-5.65-.09-1.73-.44-.69-1-.64-.28-.67-.06-.87.37-1.03-.62-.28-.78.25-.24-.52.02-.96,2.05-1.94-.34-1.71-2.46-2.04-.49-.73-.14-2.29h0l-.64-2.4-.46-.26-.76.12-.42-1.09.36-.33,1.4-.21.53-.33.48-.51-.08-1.19,1.37-1.04,1.34.12.5.7,1.34.13.49.61-.83,1.62.23.69.86.26,1.35-.26,2.31.39.6.41.15.86-.29.7.34.78.56.18,1.44-1.87,2.29-.67-.75-1.03.24-.58.92-.5.83-1.01.15-1.75,1.08.02Z"
                  onMouseEnter={() => handleMouseEnter1('Meknès-Tafilalet')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Meknès-Tafilalet' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-07" d="M394.89,218.37l.52.97,1.83-.16.73,1.1.65.34,1.58.06.43.28,3.52-1.58,3.79.94,6.64-.55,6.97,2.14,1.62.02,1.86.57,2.11.06h0l.14,2.29.49.74,2.46,2.04.34,1.71-2.05,1.94-.02.96.24.52.78-.26.62.28-.38,1.03.07.87.28.67.99.64.45.69.09,1.72-.55,5.65-.72,2.77-.41,4.92.13,3.39.6,1.6-.07,1.28-.71,1.35-.88.32-4.74-1.38-1.44.46-1.5,1.74-.78.38-.73-.13-.43-.56-1.52-.16-.55-.77-.14-2.19-.33-.44.01-.81-.31-.29-.92.14-.43-.19-.42-.91-.54-.27-.55.64-.54.12-1.18-.71-1.02.01-2.32.54-.57.47-.5,1.8.41.69-.77,1.77.98,1.89h0l-2.22,1.22-.79-.05-1.57,1.02-1.02,1.85-.53.33-1.62-2.26-1.51-1.06-2.98.23-.83.31-1.82-.83-1.36.68-2.12-.99.45-1.16-.42-2.81.13-.64.95-1.22.22-1.2-1.26-1.76-.47-1.24-.05-1.04,2.39-3.64.35-1.68-.98-.09-.57.39-2.74.16-.37-.64-.73-.33-.78-1.26-1.37-.6h-.6l-.04.4-.55-.03.34-1.12-1.18-2-.03-1.99-.33-1.2-.88-1.5-1.69-.13-.51-.92h0l2.3-1.9.41.1.97-.4,1.04-.85-.03-.25.84-.32.11-.43.56-.19.29-.54,1.58-1.37,2.88-3.47,1.98-2.21Z"
                  onMouseEnter={() => handleMouseEnter1('Rabat-Salé-Zemmour-Zaër')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Rabat-Salé-Zemmour-Zaër' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-08" d="M370.62,239.79h0Zm-1.76-.15.15.62h.58l.17-.05.45-.08.43-.34h0l.02.6-.98,1.1.48,1.04-1.43.37.28.4-.5,1.06.22.22-.18.95.57.58-.44,1.2.36,1.07.68.42.28,1.22-.4.19-.49-.24-.27.52-.74.26.52,1.11-1.75.23-.07.53-1,.19-1.96,1.6-.43,1.75-.91,1.66-.85.05-.51-.27-.63-2.24,1.3-.71,2.09-.64-.19-.14-1.69-.66-1.3-.09-.7.47-.56-.69-1.69.73-.17-.93-1.13-.47-.43-.65-.78.28-.42-.33-.73.31-.66-.67-.6.14-.75-.27-1.12.46-.86-.88-.2-.82h0l2.41-1.44.3-.42.24.47.61-.01.3-.21.11-.04,1.35-.69,1.7-1.03.2-.62.4.1.54-.6.62-.14.41-.67.39.49.34-.28.62.15.05-.01.39.18v-.24l.07-.11.35.42.01-.5.37.37,1.18-.69,1.21-.24,3-2.46.15-.25.88-.61Z"
                  onMouseEnter={() => handleMouseEnter1('Casablanca')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Casablanca' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2"

                />
                <path id="MA-09" d="M379.12,234.7l.51.92,1.69.13.88,1.5.33,1.2.03,1.99,1.18,2-.34,1.12.55.03.04-.4h.6l1.37.6.78,1.26.73.33.37.64,2.74-.16.57-.39.98.09-.35,1.68-2.39,3.64.05,1.04.47,1.24,1.26,1.76-.22,1.2-.95,1.22-.13.64.42,2.81-.45,1.16,2.12.99,1.36-.68,1.82.83.83-.31,2.98-.23,1.51,1.06,1.62,2.26.53-.33,1.02-1.85,1.57-1.02.79.05,2.22-1.22h0l-.13.72-.71.53-.43.8-.11.76.37.66,3.72,1.27.44,1.2,1.51.51,1.76,1.71,2.14,1.03.33,1.65,1.67.72.35.44-.07.66-.65.49-1.7.35-.09,1.71.57.48.64-.01,1.77-.78.74.3.25,1.26,1.36,1.82-.79.51-.09.37.34.5-.2,1.27.34.63h0l-.98.88-.51.98-1.4.85-3.76.38-2.78,1.07-4.05.09-.72-.21-2.11.21-1.54-.71-2.13-.4-1.93.34-.58.59-.52.12-.23.39.49.5-.17.49-1.75-.19-1.07-.56-1.9-.07-1.22-.56-.41.08-.31.62-1.57.2-1.25,1.11-1.82.66h-.85l-.84-.93-.88-.25.16.52-.44,1.21-.25,4.05-1.78,4.82-2.14,2.2h0l-.55-.79-1.46-.16-.7-1.03-1.13-.39-1.3-1.15-2.42-.28-1.71-2.4-2.92.15-1.12.62-.5-.39-.37.25.04.82-1.74,1.09-1.26.11-.81-.55-.31.47h-.37l-1.08-1.78-1.02-2.56-.52-.84-1.06-.41-1.39-3.22-.54-.66-.58-.39-1.27-.16-1.06-.92-3.5-1.08-.19-1.13-1.65-2.36-.61-1.73-.83-.03h0l.57-.59-.04-.19-.81-.02.06-.45.75-.42-.21-.21-.75-.18-.83.68-1,.02,1.04-.89-.84-.47.18-1.32.35-.39-.94-.86.75-.35-.19-.45-.65-.35.58-.39-.15-.58.58-.56-.55-.68.19-.27.61.02.02-.31-.76-.87.32-2.11-.19-.25-.69.38-.33-.19.41-.62-1.03-.78-.07-.83-.54-.12-.21.37-.23-.06V266l-.5-.49.06-.35.9-.15.66-1.16.2-1.12.67-.31.92.29,1.38-.11.56-.83-.9-.43,1.59-.67,1.21-1.64-1.07-.39-.17-.97-.46.15-.3-.39,1.15-.79-.65-.66.81-1.31-.49-.35-.17-.78-1.48-1.95h0l1.59-.88,1.13-.14,1.54-.74h0l.2.82.86.88,1.12-.46.75.27.6-.14.66.67.73-.31.42.33.78-.28.43.65,1.13.47.17.93,1.69-.73.56.69.7-.47,1.3.09,1.69.66.19.14-2.09.64-1.3.71.63,2.24.51.27.85-.05.91-1.66.43-1.75,1.96-1.6,1-.19.07-.53,1.75-.23-.52-1.11.74-.26.27-.52.49.24.4-.19-.28-1.22-.68-.42-.36-1.07.44-1.2-.57-.58.18-.95-.22-.22.5-1.06-.28-.4,1.43-.37-.48-1.04.98-1.1-.02-.6h-.03v-.17l.18-.06.13-.35,1.03-.57,1.87-1.77.71-.24.34-.43.39.01-.01-.34,1.66-.06.55-.48.37-.03.59-.54.31.34Z"
                  onMouseEnter={() => handleMouseEnter1('Chaouia-Ouardigha')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Chaouia-Ouardigha' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-10" d="M345.68,251.56l1.48,1.95.17.78.49.35-.81,1.31.65.66-1.15.79.3.39.46-.15.17.97,1.07.39-1.21,1.64-1.59.67.9.43-.56.83-1.38.11-.92-.29-.67.31-.2,1.12-.66,1.16-.9.15-.06.35.5.49v.35l.23.06.21-.37.54.12.07.83,1.03.78-.41.62.33.19.69-.38.19.25-.32,2.11.76.87-.02.31-.61-.02-.19.27.55.68-.58.56.15.58-.58.39.65.35.19.45-.75.35.94.86-.35.39-.18,1.32.84.47-1.04.89,1-.02.83-.68.75.18.21.21-.75.42-.06.45.81.02.04.19-.57.59h0l-.78.24-.91,1.03-.22,1.13.46,1.09-.33.41v.72l-1.39,1.08.25.47-.25.74,1.07,1.64.21,1.11-.26,1.28-.23.21-.44-.2-1.34,1.92-.97.7-.56.83-1.14.52-.52.62-2.37.04-.62.52.03,1.54-.23.35-1.66-.01-1.12.48-.8,1.3-2.93.94-.29,1.47.13.92,1.18,2.91,1.61,2.22,1.52,1.34,1.31.24,2.3,1.27,1.54,1.3.15.65-.05.8-.48-.68-.64-.1-.15,1.97-1.42.85-1.66,1.47-1.41,2.53-.24,1.51-.92,1.17-.16.68L329.9,326l.7,2.34.62.14,1.23,1.69-1.11.42-.51-.1-1.26-.91-2.75,1.17-1.98-.66-.73-1.2-1.12-.66-3.19.48-.61.33-.93-.48-.51.11-.77,1.01-.29.08-.36-.61-.53.82-.43-.08-1.33-1.17-1.02.4-.5-.38.03-.84-2.28-.53-.29-.71-2.07-1.18-.55-2.47-.63-1.16-1.97-.69-4.96-.47-2.66.44-2.07-.19-3.65-1.32h0l2.99-3.5.42-.36.06-.12.15-.63-.25.02.63-.84.26-2.1,2.31-2.79.32-1.15.05-1.02-.54-1.27.82-2.15-.06-.29-.18-.55-1.15-.47-.37-1.54.19-.6,1.41-1.75.65-2.68-1.18-1.25-.36-1.11-.53-.65,6.3-5.37,2.91-3.46.18.25.37-.49-.44.11,5.31-4.39,4.18-4.62.4-.63.88-.93h.45l.32-.64-.29.09-.04.39-.52.05,1.58-1.89.59-.31.03-.33.79-1.37,1.9-2.14.12-.3.13-.29.14-.38-.88.41.43-.45.74-.21-.65-.99.17-.43,1.48-1.69,1.19-.64-.13-.41.48-.63,1.36-.96.36.1.22.36-.2.23.43.35,1.66-.31,1.88-1.12,1.67-1.58.62-.28,1.25-2.14,3.42-.89,1.19-.86,1.95-.4Z"
                  onMouseEnter={() => handleMouseEnter1('Doukkala-Abda')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Doukkala-Abda' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-11" d="M346.36,280.61l.83.03.61,1.73,1.65,2.36.19,1.13,3.5,1.08,1.06.92,1.27.16.58.39.54.66,1.39,3.22,1.06.41.52.84,1.02,2.56,1.08,1.78h.37l.31-.47.81.55,1.26-.11,1.74-1.09-.04-.82.37-.25.5.39,1.12-.62,2.92-.15,1.71,2.4,2.42.28,1.3,1.15,1.13.39.7,1.03,1.46.16.55.79h0l.06,2.49-.38,1.41.77,3.52-.4,1.6.44,3.85,1.1,1.84,1.29.55.44,1.74-.87.96-.11.67.45.53-.15.78,1.92,2.35-.31.45-.84.1-.19.71.38,1.59-.64.59-1.8-.29-2.47.57-1.52-.83-1.01-.06-.86.16-1.13.68-.62.86-.01,2.83.35.69,1.56.93-.25,1.57.68.41.41-.31,1.95-.37.74.14.22.85-.13,1.43-1.22,3.46-.15,1.26.08,1.34.43,1.24h0l-2.25.67-.98.65-1.99,2.75-2.52.56-3.5.19-1.86.9-3.09,3.24-1.02.63-1.45.39-2.23.03-2.15,1.05-3.13,2.94-2.7,1.46-.16.29.35.57-.28,1.18-3.18,2.8-2.57,1.5-.51-.14.14-1.42-1.21-1-3.18,1.5-1.34.37-3.94.67-1.82-.47-.82.21-1.26,1.31-6.17-.15-1.12.25-1.32,1.25-1.34.16-.99-3.58-.72-.74-1.51-.39-.4-.97-.66-.15-.8.07-1.49,1.76-1.07.74-4.12,1.83-.9,1.51-.95.46-3.47-.53-1.98.87-1.89.04-1.19.72-2.08-.22-.89-.8-2.5.27-.68.47-1.03.15-1.31-.71-1.27-.29-.17-.26.27-1.03-.39-.28-1.39,1.99-1.09.5-1.93-.81-.89.3-2.07-.07.16-.27-.86-2.24-2.85-2.88h0l-.25-.55.11-.61.61-1.3-.36-.85-.03-1.25-.25-.18.32-1.48-.97-.58.32-.79-.2-.66.37-.88-.12-.32.67-1.19-.29-.33.07-1.68.89-1.95.14-1.76-.14-1.43-.42-1.03-.32-.34-.93-.15.29-1.14,1.28-1.32.99-1.93.21.11.13-.99-.59-.09,1.59-1.33,1.95-2.8.49-1.53-.16-2.83,1.66-1.33,1.85-2.85,1.08-.95,1.42-2.06,3.24-3.65h0l3.65,1.32,2.07.19,2.66-.44,4.96.47,1.97.69.63,1.16.55,2.47,2.07,1.18.29.71,2.28.53-.03.84.5.38,1.02-.4,1.33,1.17.43.08.53-.82.36.61.29-.08.77-1.01.51-.11.93.48.61-.33,3.19-.48,1.12.66.73,1.2,1.98.66,2.75-1.17,1.26.91.51.1,1.11-.42-1.23-1.69-.62-.14-.7-2.34,1.76-2.16.16-.68.92-1.17.24-1.51,1.41-2.53,1.66-1.47,1.42-.85.15-1.97.64.1.48.68.05-.8-.15-.65-1.54-1.3-2.3-1.27-1.31-.24-1.52-1.34-1.61-2.22-1.18-2.91-.13-.92.29-1.47,2.93-.94.8-1.3,1.12-.48,1.66.01.23-.35-.03-1.54.62-.52,2.37-.04.52-.62,1.14-.52.56-.83.97-.7,1.34-1.92.44.2.23-.21.26-1.28-.21-1.11-1.07-1.64.25-.74-.25-.47,1.39-1.08v-.72l.33-.41L344.5,283l.22-1.13.91-1.03Z"
                  onMouseEnter={() => handleMouseEnter1('Marrakech-Tensift-Al Haouz')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Marrakech-Tensift-Al Haouz' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-12" d="M421.53,283.04l.44.18,2.34-.37,1.7.99.66,1.38.65.32.77-.16.83,1.08.78.4.39.79.5,2.59.99.07,1.27-1.07,1.13.2,1.59,1.11.34.56,2.24.21.4,1.46,1.39,1.99.96,2.21-.84,1.23-.12,1.06-.68,1.02.46.82-.88,2.01.99.84-.2,1.1-.63.44-1.92-.46-2.32.44-.89.44-.28.3-.2,1.31-.57.74-.75.71-1.37.07-.85.82-.03,1.55-.99.69.2,1.55-.86.38-.26.63.34.74.85.29.35,1.33-.27.75h0l-.08,1.37.31.73-.01.84-.4.65-1.84,1.4-.15.57-1.9-.08-1.41,1.87-3.6,1.59-.1,1.88-.42.99-1.41.01-.74.28-1.57-.29-1.46.92-.94,1.3-6.09,2.39-5.73,3.56-2.34.79-1.91-.5-1.17.55-1.82.26-1.1,1.38-.14.73.6,1.65-.54.51-.8,2.35-.78-.18-.88.36-.47-.73-1.88.23-1.07.54-6.18-1.84-2.64-.04h0l-.43-1.24-.08-1.34.15-1.26,1.22-3.46.13-1.43-.23-.85-.73-.14-1.95.36-.41.31-.68-.41.25-1.56-1.56-.94-.34-.69v-2.83l.62-.86,1.13-.68.87-.16,1,.06,1.52.83,2.46-.57,1.81.29.64-.6-.39-1.59.19-.71.84-.1.31-.45-1.92-2.35.15-.77-.45-.54.11-.67.86-.96-.44-1.74-1.29-.55-1.11-1.84-.44-3.84.4-1.6-.77-3.52.38-1.42-.06-2.49h0l2.14-2.2,1.78-4.82.25-4.05.44-1.21-.16-.52.88.25.85.93h.84l1.83-.66,1.24-1.1,1.58-.2.31-.62.41-.08,1.22.56,1.9.07,1.07.55,1.76.2.17-.5-.5-.49.24-.39.51-.12.59-.59,1.92-.34,2.13.4,1.54.71,2.11-.22.72.21,4.05-.09,2.78-1.06,3.77-.38,1.39-.85.51-.98Z"
                  onMouseEnter={() => handleMouseEnter1('Tadla-Azilal')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Tadla-Azilal' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-13" d="M429.18,317.78l1.5-.37,2.5-1.79.94.05,5.2,3.55.44.58-1.02,2.12-8.67,9.18-.45,1.38.48.49,2.73.39,2.72-.64,5.3,1.45.6.48.99,1.84,2.76,1.68,2.95.91.95.6,1.14,1.27.47,1.08.26,1.36-.18,2.63-.92,3.36-1.59,3.72-.86,6.67-1.14,5.59.08,1.33.71,3.39,2.02,3.52,1.12,1.4.19.89,1.89,2.59.03,7.21-.42,2.26.1,5.52-.24,3.31.5.96.36,1.85.99,1.38.53.28,1.32,3.82h0l-.76.24-3.88,2.94-.46.79-1.26.79-1.58,2.65.26,1.7-.53,1.28-7.69,10.94-.65.27.28.45-.43.95-.27.09-.48-.56-1.06.03-.9-.55-.8-.13-1.44-1.52-.98.86-1.32.07.19-1.3.75-1.12.04-.53-.86-.63-2.06-.61-2.42.29-.62.52-2.95.25-2.27.76-.79-.03-.95.47-3.9-.86-2.11.2v.21l-1.01.33-1.6-.22-3.2.12-.46.28-.16.49-.33-.43h0l.14-1.21-.39-2.79.52-3.86-.19-3.59.8-3.73-.19-6.44-1.57-3.72-5.79-9.14-1.63-1.75-1.86-1.01-1.01.06-.83.3-1.14,1.05-1.86,2.58-1.06.3-1.95,1.13H386.9l-3.6-1.66-1.56-.24-.57.2-1.73,1.88-1.7,3.91-.64,3.24-.89.65-5.82-.26-1.91-.35-1.11-1.12L367,396.6l-.34-.7-.59-.72-2.96-1.92-1.68.95-1.48,1.3-1.12,2.18-.12.85,1.13,5.49-.06.64-.71.85-.61.35-2.13-.09-2.78-.83-1.46.21-1.62,1.06-2.56,2.67-1.84.46-.57.41-1.46-.27-2.59-1.11-4.3-3.07-1.05-.23-.83.19-1.21,1.03-1.21,3-.83,1.13-.75.45-1.19.05-6.2-3.05-1.03-.27-1.66-.07-1.31.35-1.35,1.21.07,2.14.67.58,1.57-.61,1.03.06.22.32-.2,1.36-1.43,1.5-1.14,1.78-.38,1.48-.13,5.21.77,1.82,1.25.92.32.81-.48.88-8.37,2.48-1.05.55-2.61.06-2.4-.36-.52.29-.91.62-1.28,2.63-1.45,6.12-.16-.66-1.23-1.59-.59-1.5-1.41-.77-1.64.06-1.06-.46-1.56.41-.77,1.52-1.41,1.16-2.93.55-2.38,1.26-2.4.63-.58-.28-1.45.22-.36-.19-.96-1.73-1.23-1.07-1.42-.13-.95.29-1.16,1.38-1.56,4.38-.45.43-1.42.6-1.54-.43-1.41.46-4.01,2.96-1.13.15-.53-.3-.44-.77-.92-.27-1.81.37-4.15-.5-1.27.27-.72-.15-1.79-1.4h0l.58-1.48.7-.35.13-.77,2.34-2.68.41-.82,1.32-1.16,1.66-.84,1.39-1.34,1.27-2.77,1-1.47,1.33-1.24.81-1.83.81-.84.28-.58-.14-.77.35-.24-.05-.43.39-.23-.14-.48.31-.15.02-.62.51-.35.45-1.12,1.22-1.5.4-1.11,5.73-5.65.25-.73,1.37-1.86-.06-.51,1.04-1.54.06-.69,2.54-5.37.82-1.09.13-.1.07-.61.96-3.34.01-1.55,1.32-6.69.13-.23.17-.04-.3-.57.38-.79-.17-.67-.45-.65-.14.23-.34-.04-.2.05-.53-.45-.03-.29-.52-.39-.66-2.4-.39-.38-.51-1.44-1.47-.44-.24-1-1.4-1.59-1.59-.76-1.6.16-.83-.31.44-2.69,1.06-1.33-.07-.53,1.75-3.58-.04-.86-.27-.31-.35.17-.15-.44.73-1.95-.48-.86v-1.77h0l2.85,2.88.86,2.24-.16.27,2.07.07.89-.3,1.93.81,1.09-.5,1.39-1.99.39.28-.27,1.03.17.26,1.27.29,1.31.71,1.03-.15.68-.47,2.5-.27.89.8,2.08.22,1.19-.72,1.89-.04,1.98-.87,3.47.53.95-.46.9-1.51,4.12-1.83,1.07-.74,1.49-1.76.8-.07.66.15.4.97,1.51.39.72.74.99,3.58,1.34-.16,1.32-1.25,1.12-.25,6.17.15,1.26-1.31.82-.21,1.82.47,3.94-.67,1.34-.37,3.18-1.5,1.21,1-.14,1.42.51.14,2.57-1.5,3.18-2.8.28-1.18-.35-.57.16-.29,2.7-1.46,3.13-2.94,2.15-1.05,2.23-.03,1.45-.39,1.02-.63,3.09-3.24,1.86-.9,3.5-.19,2.52-.56,1.99-2.75.98-.65,2.25-.67h0l2.64.04,6.19,1.85,1.07-.55,1.88-.22.47.73.88-.36.78.18.81-2.36.54-.51-.6-1.65.15-.73,1.09-1.38,1.82-.26,1.17-.55,1.92.49,2.34-.79,5.73-3.56,6.09-2.39.93-1.3,1.46-.93,1.57.3.74-.28,1.41-.01.42-.99.1-1.87,3.6-1.6,1.41-1.86,1.9.08.15-.57,1.84-1.41.4-.65.01-.84-.32-.74Z"
                  onMouseEnter={() => handleMouseEnter1('Souss-Massa')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Souss-Massa' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-15" d="M201.95,482.75l-3.06,1.3-.23.09-1.08.4-6.81,3.56-5.72,1.41-.9-.01L172.28,492l-9.54,1.22-1.59.47-2.02.09-.53.49-.22.5-.84.39-.25.71-.65.7-.98,3.4-.72.57-.86,1.87-.79.68-1.6.62-2.05,1.3-1.18,2.92-1.21,5.01-1.95,5.45-.78,1.38-.12.86-3.95,6.75-.31,2.3-.21.57.17.5-.47,1.08.01.21-1.63,4-.98,3.72-1.21,3.06-1.64,2.94-1.64,1.78-2.3,1.85-9.2,5.5-2.2,1.89-3.92,1.53-3.88.42-.86,1.77-1.5,1.91-3.15,2.55-2.87.6-3.02,4.06-.72,1.61.6,1.43-.07,2.44-.4,2.04-2.62,5.87-1.79,2.6-.88.72-1.05,4.34-.81,1.95.03,1.45-.46,1.65-.88,1.76-2.52,3.5-.22,1.86-1.35,3.29.1,1.79-.76,2.02.34,1.8-.34,1.51.33,1.04-.16.78.48.31.37,1.03-.2,3.09-.35,1.33.2,1.47-2.06,5.81-.2,1.16.2,1.62-2.38,2.12-1.53.78-.24,1.4-.32.47h0l3.08.48,5.17,2.09,1.19.79,2.25,3.25,1.19.67,1.21.27,4.85-.79,8.02-2.04,8.17-.44,10.02,2.31,2.91,1.18,1.75.41,6.7-1.82,2.93-1.36,5.36-1.9,6.65-.6,11.23,2.2,8.23,2.83,3.35.01,8.93-1.9,6.3-.01,2.01.5,2.35-.51h0l-.01-64.5h0l-16.75.07-.53-3.81-.69-2.12-.37-2.59-.69-2.53-.84-1.28-.22-1.84-1.36-3.77-.34-1.55.1-1.68.77-2.94,1.88-3.82,3.3-3.96,3.77-3.68,2.31-2.92,2.59-6.66,2-3.7,1.72-7.31,1.55-3.99,5.02-7.43,2.91-2.59,1.96-1.19,7.94.03-.6-3.26,1.28-.34,3.24.05-3.22-3.82-1.78-2.87-1.27-3.79-2.66-2.76-2.33-6.17h0l-.18.13Z"
                  onMouseEnter={() => handleMouseEnter1('Laâyoune-Boujdour-Sakia el Hamra')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Laâyoune-Boujdour-Sakia el Hamra' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-14" d="M250.59,447.54l-4.38,3.03-6.06,3.53-8.39,4.46-1.32.44-1.3.9-.02.46-1.47,1.91-.74.37-1.27,1.44-1.71,1.24-1.57,2.05-2,1.61-1.74,2.17.03.42-1.45,1.35-.69,1.46-1.35,1.2-.76,1.71-2.34,1.53-.19.45.37.48-.58-.17-.03-.32-.31-.11-3.23,1.38-.22.05-1.41.41-3.95,1.57h0l2.33,6.17,2.66,2.76,1.27,3.79,1.78,2.87,3.22,3.82-3.24-.05-1.28.34.6,3.26-7.94-.03-1.96,1.19-2.91,2.59-5.02,7.43-1.55,3.99L188.75,528l-2,3.7-2.59,6.66-2.31,2.92-3.77,3.68-3.3,3.96-1.88,3.82-.77,2.94-.1,1.68.34,1.55,1.36,3.77.22,1.84.84,1.28.69,2.53.37,2.59.69,2.12.53,3.81,16.75-.07h0l126.51-.07.25-115.58,7.9-3.59,5.27-5.13,5.45-4.32,1.02-.03,2.75-2.13,4.36-2.58.28-.7.91-1,3.36-1.97,2.22-1.96,3.89-1.82.77-.2.48.16.99-1.52-.06-1.02,1.03-.82,3.98.5,3.15-.72.8.07.58-.51,1.53-.45,3.63-3.63,3.42-1.62,1.6.01,3.24,1.26,1.26-.45.93.41,1.88-.13.93.54,1.32.1.85.64,2.15.26.77-.22,1.37-1.68.99-.41,2.41-.2.48-.43,3.46.38.49-.62,2.02-1.15.79-.18,1.6.26h0l.14-1.21-.39-2.79.52-3.87-.19-3.58.8-3.73-.2-6.45-1.57-3.71-5.79-9.14-1.63-1.75-1.87-1.01-1.01.06-.83.31-1.15,1.04-1.86,2.58-1.06.31-1.95,1.13H386.9l-3.6-1.66-1.57-.24-.56.21-1.74,1.88-1.7,3.91-.64,3.24-.9.65-5.82-.26-1.9-.35-1.11-1.12L367,396.6l-.35-.7-.58-.72-2.97-1.92-1.68.96-1.49,1.29-1.12,2.19-.12.84,1.13,5.49-.07.65-.71.85-.61.34-2.13-.08-2.77-.83-1.46.21-1.63,1.06-2.55,2.67-1.84.46-.57.41-1.46-.28-2.59-1.11-4.3-3.07-1.06-.23-.83.18-1.21,1.04-1.21,3-.83,1.13-.74.45-1.2.04-6.2-3.05-1.03-.28-1.66-.07-1.32.35-1.34,1.21.07,2.14.67.58,1.57-.61,1.03.06.22.32-.19,1.36-1.43,1.5-1.15,1.78-.38,1.48-.12,5.21.77,1.82,1.25.92.32.81-.48.89-8.37,2.48-1.06.55-2.6.06-2.4-.36-.53.29-.9.63-1.29,2.63-1.45,6.12-.16-.66-1.23-1.59-.58-1.49-1.41-.77-1.65.05-1.06-.45-1.56.41-.77,1.52-1.41,1.16-2.93.54-2.38,1.26-2.4.64-.58-.28-1.46.22-.36-.19-.96-1.73-1.23-1.06-1.42-.14-.95.29-1.16,1.38-1.56,4.38-.45.43-1.42.59-1.54-.42-1.41.45L266,447.24l-1.13.15-.53-.3-.43-.77-.93-.27-1.81.37-4.14-.51-1.27.27-.72-.15-1.79-1.4h0l-.3.05Z"
                  onMouseEnter={() => handleMouseEnter1('Guelmim-Es Semara')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Guelmim-Es Semara' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
                <path id="MA-16" d="M79.98,635.66l3.09.48,5.16,2.09,1.2.79,2.25,3.25,1.19.67,1.21.27,4.85-.79,8.02-2.04,8.17-.45,10.02,2.31,2.9,1.18,1.75.42,6.7-1.83,2.93-1.35,5.36-1.91,6.65-.6,11.24,2.21,8.22,2.82,3.35.01,8.93-1.91h6.3l2.02.49,2.34-.51h0l.15,41.23-28.87,2.76-3.44,2.41-4.05,4.76-3.36,5.34-1.51,3.64-2.01,8.54-.28,2.25,5.47,57.08-74.43-.52-74.4.54-.78.15-2.41,9-1.4,2.6-.34,2.43-.67,2.31-.01,3.36.56,2.65.22.1-.23.11L.88,789.72l-.51.01L0,788.96l1.03-1.63-.68-1.5,1.2-3.17-.03-3.18.79-3.35-.25-.91.88-4.33-.17-1.48L4.68,760l-.13-2,.43-2.11-.31-2.35,1.19-1.67-.01-.38-.55-.15.24-2.21,2.22-2.92.26-.87-.14-.87.96-1.9,2.47-7.09,1.26-.58.18-.42-.24-.62.26-.63,1.96-1.53.64-1.06.71-.59,1.09.07.63,1.02,1.08-.1,2.3-.8,1.99-1.35-.02-1.02.68-.53.68-1.23.29-2.8.49-.89-.03-.77.48-.89,1.57-1.02,1.01-1.24.18-1.91.47-.98-.04-3.09.27-1.33L31.05,708l-.08-.59-.54-.15.59-2.14.58.36,2.25-.9,1.57-1.52.99-1.63.2-1.6-.24-1.03-.54-.83-.74-.49-.7.13-.4.43.42-1.23.38-.83.97-.64,1.51-1.91.38-.8-.06-.98,2.11-3.21-.25-.74,2.18-1.98,1.08-1.5,1.11-2.47-.9-1.46,1.31-.74.72-1.19.59-.35,1.17-2.59.6-.21.44-.54.54-1.17,1.21-1.48.79-1.72,1.31-1.08.45-1.26.77-.52-.13-.37-1.08.81.39-1.89.98-1.53-.39-1.09.83-2.35-.6.31-.7.71-.62.15.11.98-.54,1.02-.12-.31-.02-.23-.14-.39-.58.4-.81,1.71-.93.6-.22.03-.08-.36-.54.39-1.65,2.34-1.11,4.06-1.25,1.08-.09.1-.82,1.24-.08.55-.63-.18-.25-.73.81-1.26.96-.88.11-1.05,1.25-1.26-.07-.54.8-1.98,2.41-2.89,1.29-.99.09-.41,2.13-1.46,3.31-1.7,2.61-1.86.61-.88-.28-.43.41-.77,1.47-1.02.54-1.07.65-.4,3.26-3.58,3.24-2.53,3.33-4.67,2.94-3.08,1.63-.93,3.88-1.55.59-.53Z"
                  onMouseEnter={() => handleMouseEnter1('Oued ed Dahab-Lagouira')}
                  onMouseLeave={handleMouseLeave1}
                  fill={selectedRegion === 'Oued ed Dahab-Lagouira' ? '#AC76D4' : '#6d3d90'}
                  stroke="#fff" strokeWidth="2.2" />
              </g>
            </svg>

          </div>
        </div>

          <div className="flex items-center justify-around w-full max-w-full md:mt-8 md:mb-0 md:py-0 gap-6 flex-col md:flex-row px-14 mb-16">
            <div className="text-center">
              <h3 className="text-2xl md:text-xl font-semibold text-purple-700">4</h3>
              <p className="text-[#6D3D90] text-4sm md:text-xl">hôtels & resorts</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-xl font-semibold text-purple-700">180 000<sup>+</sup></h3>
              <p className="text-[#6D3D90] text-4sm md:text-xl"><br/>clients/an</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-xl font-semibold text-purple-700">10<sup>+</sup></h3>
              <p className="text-[#6D3D90] text-4sm md:text-xl">hôtels en développement</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-xl font-semibold text-purple-700">2</h3>
              <p className="text-[#6D3D90] text-4sm md:text-xl"> nouvelles marques : hôtels urbains haut de gamme & boutique riads</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-xl font-semibold text-purple-700">1</h3>
              <p className="text-[#6D3D90] text-4sm md:text-xl">Valeria Hotels & Resorts, leader de l’All-Inclusive au Maroc</p>
            </div>
          </div>
        </div>


      <div
        className="hero h-screen md:h-[70vh] mb-8"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/Groupedemasques3.png)`,
        }}>
        <div className="hero-overlay bg-opacity-90 bg-[#0A1D5A] "></div>
        <div className='text-white items-start w-full'>
          <div className='items-start w-64 md:w-1/4'>
            <h1 className="mb-5 text-5xl font-600 text-end">Nos marques</h1>
            <div className="border-b border-2 border-white w-full mb-10"></div>
          </div>
          <div className="items-center justify-around w-full  flex flex-col md:flex-row p-14 ">

            
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/img/v-l-1.png`}
              className="w-full md:w-[25%] h-auto mb-16 md:mb-0"
            />
            <img
              alt=""
              src={`${process.env.PUBLIC_URL}/img/v-l-2.png`}
              className="w-full md:w-[25%] h-auto mb-4 md:mb-0"
            />
          </div>
        </div>
      </div>


      {/* 
      <div className="md:m-36 m-6">
        <div
          className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex justify-center items-center"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/Groupedemasques4.png)`, // Adjust to your image path
          }}
        >
         
          <div className="absolute inset-0 bg-[#6D3D90] opacity-80"></div>
          <div className="absolute inset-2 border border-2"></div>

          <div className="relative text-center px-6">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-16">
              Finding the Right Fit
            </h1>
            <div className='md:px-60'>
              <p className="text-white text-base sm:text-lg md:text-xl mb-2 md:mb-4">
                Whether conversion or new build, managed or franchised, residential or all-inclusive,
                let us help bring your vision to life.
              </p>
            </div>

            <button className="relative inline-flex items-center text-white border border-white md:py-4 px-4 py-2 sm:px-6 font-700 uppercase hover:bg-white hover:text-purple-900  transition duration-300">
              <span className="absolute left-[-42px] w-14 h-[2px] bg-white transition-all duration-300 group-hover:w-12"></span>
              LEARN MORE
            </button>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-4 text-white ">
            <p className="text-xs sm:text-sm">LA MAMOUNIA - Marrakesh</p>
          </div>
        </div>
      </div> 
      */}

      <div className="divider m-14 py-8"></div>

      <div className="rounded-none card lg:card-side px-8 md:px-36 mb-[-25px] md:mb-[-30px]">
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/img/Groupe de masques 6.png`}
            alt="Album"
            className='w-full h-full'
            />

        </figure>
        <div className="absolute top-[330px] md:top-[270px] left-12 md:left-40 text-white">
          {/* <p className="text-xs sm:text-sm">LA SULTANA - Marrakech</p> */}
        </div>
        <div className="card-body bg-opacity-100 bg-[#6D3D90] px-8 md:px-36 py-16"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/Groupedemasques5.png)`,
          }}
        >
          <div className="bg-opacity-90 bg-[#6D3D90] "></div>

          <h2 className="card-title font-300 text-white mb-6 text-6sm md:text-4xl text-start">
          Investour Hospitality, l’hôtellerie réinventée entre tradition et innovation.
          </h2>
          {/* <div className="card-actions justify-center md:justify-start  px-4 md:px-2">
            <button className="relative inline-flex items-center text-white border border-white md:py-4 px-4 py-2 sm:px-6 font-700 uppercase hover:bg-white hover:text-purple-900  transition duration-300">
              <span className="absolute left-[-42px] w-14 h-[2px] bg-white transition-all duration-300 group-hover:w-12"></span>
              LEARN MORE
            </button>
          </div> */}
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
}

export default Home;
