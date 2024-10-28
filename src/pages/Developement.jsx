import React from 'react'
import ScrollToTopButton from './ScrollToTopButton'

function Developement
  () {
  const contractTypes = [
    { label: 'NEW BUILD', imgSrc: 'path_to_image_1.jpg' },
    { label: 'DUAL-BRANDED', imgSrc: 'path_to_image_2.jpg' },
    { label: 'MODULAR DEVELOPMENT', imgSrc: 'path_to_image_3.jpg' },
    { label: 'MIXED USE', imgSrc: 'path_to_image_4.jpg' },
    { label: 'ALL INCLUSIVE', imgSrc: 'path_to_image_5.jpg' },
  ];

  return (
    <div className='m-14 py-8'>

      <div className="breadcrumbs text-sm px-6 md:px-36">
        <ul>
          <li><a>Home</a></li>
          <li><a >Investour Hospitality Development</a></li>
        </ul>
      </div>

      <section className="content-section md:items-center md:justify-center md:mr-14">
        <div className="flex flex-col lg:flex-row md:items-center md:justify-center">
          <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-600 mb-6 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
              Hotel Development
            </h1>
            <div className="flex my-2">
              <div className="w-1 h-[210px] lg:h-20" style={{ backgroundColor: '#281A2A' }}></div>
              <p className="text-base md:text-2lg lg:text-lg mb-6 font-500 text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
                Investour Hospitality offers both managed and franchised business models, as well as diverse property types to help owners achieve their goals in a variety of markets. Discover how Marriott’s resources can help your business.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="content-section mt-16">
        <div className="flex flex-col md:flex-row items-start w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-6xl md:text-5xl font-600 mb-8">
              Solutions For Every
              Owner,  Everywhere
            </h2>
          </div>

          {/* Image Section */}
          <div className="md:w-full ">
            <div role="tablist" className="tabs ">
              <input type="radio" name="my_tabs_1" role="tab" className="tab " aria-label="CONTRACT TYPE" defaultChecked />
              <div role="tabpanel" className="tab-content px-2 py-4 bg-[#ECF1F5]">
                <div className="flex justify-center mb-4">
                  <div className="font-600 uppercase">CONTRACT TYPE</div>
                </div>
                <div className="grid grid-cols-5 gap-4">


                  <div key={0} className="card  flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 20.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">new build</h2>
                    </div>
                  </div>
                  <div key={1} className="card flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 21.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">DUAI-BRANDED</h2>
                    </div>
                  </div>
                  <div key={2} className="card flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 22.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">modular
                      development</h2>
                    </div>
                  </div>
                  <div key={3} className="card  flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 23.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">Mixed use</h2>
                    </div>
                  </div>
                  <div key={4} className="card flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 24.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">ALL-inclusive</h2>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab "
                aria-label="MARKET"
              />
              <div role="tabpanel" className="tab-content px-2 py-4 bg-[#ECF1F5]">
              <div className="flex justify-center mb-4">
                  <div className="font-600 uppercase">MARKET</div>
                </div>
                <div className="grid grid-cols-5 gap-4">


                  <div key={5} className="card  flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 20.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">new build</h2>
                    </div>
                  </div>
                  <div key={6} className="card flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 21.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">DUAI-BRANDED</h2>
                    </div>
                  </div>
                  <div key={7} className="card flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 22.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">modular
                      development</h2>
                    </div>
                  </div>
                  <div key={8} className="card  flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 23.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">Mixed use</h2>
                    </div>
                  </div>
                  <div key={9} className="card flex flex-col items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/Groupe de masques 24.png`}
                      alt="new build"
                      className="w-full" />
                    <div className="items-center">
                      <h2 className=" text-center justify-center uppercase">ALL-inclusive</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ScrollToTopButton />
    </div>
  )
}

export default Developement
