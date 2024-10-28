import React, { useState } from 'react'
import ScrollToTopButton from './ScrollToTopButton'

function Developement
  () {
  const [activeTab, setActiveTab] = useState('contractType');

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



      <section className="content-section md:mt-10">
        <div className="flex flex-col md:flex-row items-start w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-3xl md:text-6xl font-600 mb-8">
              Solutions For Every
              Owner,  Everywhere
            </h2>
          </div>

          {/* Image Section */}
          <div className="md:w-full">
            {/* Tab Buttons */}
            <div className="flex text-white text-sm font-semibold">
              <button
                className={`w-1/2 py-4 text-center ${activeTab === 'contractType' ? 'bg-[#0A1D5A]' : 'bg-[#374D93]'}`}
                onClick={() => setActiveTab('contractType')}
              >
                <div className='md:text-xl'>CONTRACT TYPE</div>
                <div className="text-xs mt-1">Franchise Operations, Managed by Investor</div>
              </button>
              <button
                className={`w-1/2 py-4 text-center ${activeTab === 'market' ? 'bg-[#0A1D5A]' : 'bg-[#374D93]'}`}
                onClick={() => setActiveTab('market')}
              >
                <div className='md:text-xl'>MARKET</div>
                <div className="text-xs mt-1">Urban, Suburban & Resort</div>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 bg-[#ECF1F5] mt-4">
              {activeTab === 'contractType' && (
                <div>
                  <h2 className="text-center font-semibold uppercase mb-4">Contract Type</h2>
                  <div className="grid grid-cols-5 gap-4">


                    <div key={0} className="card  flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 20.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">new build</h2>
                      </div>
                    </div>
                    <div key={1} className="card flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 21.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">DUAI-BRANDED</h2>
                      </div>
                    </div>
                    <div key={2} className="card flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 22.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">modular
                          development</h2>
                      </div>
                    </div>
                    <div key={3} className="card  flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 23.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">Mixed use</h2>
                      </div>
                    </div>
                    <div key={4} className="card flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 24.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">ALL-inclusive</h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'market' && (
                <div>
                  <h2 className="text-center font-semibold uppercase mb-4">Market</h2>
                  <div className="grid grid-cols-5 gap-4">


                    <div key={5} className="card  flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 20.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">new build</h2>
                      </div>
                    </div>
                    <div key={6} className="card flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 21.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">DUAI-BRANDED</h2>
                      </div>
                    </div>
                    <div key={7} className="card flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 22.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">modular
                          development</h2>
                      </div>
                    </div>
                    <div key={8} className="card  flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 23.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">Mixed use</h2>
                      </div>
                    </div>
                    <div key={9} className="card flex flex-col items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/Groupe de masques 24.png`}
                        alt="new build"
                        className="w-full" />
                      <div className="items-center">
                        <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">ALL-inclusive</h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      <div className="divider mt-16"></div>

      <section className="content-section mt-8">
        <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-6 lg:py-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-600 mb-4 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
            Hotel Development
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-xl font-500 mb-4">Managed by Investour</h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              Investour Hospitality (IxH) - Investour Hospitality hotel management division - operates over 2,100 hotels globally, making us one of the most experienced hotel management companies in the world.
            </p>
            <p className="text-gray-700 text-xl leading-relaxed mt-4">
              IxH provides turnkey management services and has more than 65 years of operational expertise to maximize financial performance. With a deep bench of talent, we ensure the highest standards are delivered at every touchpoint for a superior brand experience. The IxH approach makes it easy to quickly and seamlessly plug into our systems and sales channels, drive revenue, and gain efficiencies, all while focusing on ownership’s goals.</p>

            <div className="flex justify-start px-12 py-5 mt-6">
              <button className="relative inline-flex items-center px-8 py-4 border-2 border-gray-800  font-600 uppercase hover:bg-[#6D3D90] hover:text-white transition duration-300">
                <span className="absolute left-[-42px] w-14 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-12"></span>
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-full md:text-left">
            <h2 className="text-[#281A2A] text-xl font-500 mb-4">Franchise Operations</h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              Our franchise teams work with leading management companies and owners to provide comprehensive training, tools, and resources to help ensure each hotel’s success. In addition to access to Marriott’s diverse brand offerings and strong global base of loyal guests, franchise partners can take advantage of our powerful global sales and marketing systems and our cutting-edge resources and programs designed to consistently drive strong results.</p>
            <div className="flex justify-start px-12 py-5 mt-6">
              <button className="relative inline-flex items-center px-10 py-4 border-2 border-gray-800  font-600 uppercase hover:bg-[#6D3D90] hover:text-white transition duration-300">
                <span className="absolute left-[-42px] w-14 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-12"></span>
                new to franchising?
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="divider mt-16"></div>
      <section className="content-section md:items-center md:justify-center md:mr-14">
        <div className="flex flex-col lg:flex-row md:items-center md:justify-center">
          <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-600 mb-6 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
              Hotel Development
            </h1>
            <div className="flex my-2">
              <p className="text-base md:text-2lg lg:text-lg mb-6 font-500 text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
                Investour Hospitality properties are compelling additions to any market. We offer owner-friendly and flexible building options based on your project, budget, and location, including prototypical new build hotels, adaptive re-use projects, or the conversion of an existing hotel. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section mt-16">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-5xl font-semibold mb-8">Conversions</h2>
            <p className="text-gray-700 text-2xl leading-relaxed">
              Transform your property with our innovative brands, targeted for today’s savvy travelers. Marriott streamlines the conversion process, giving properties a fresh new identity and appeal in the shortest time possible. Experience the benefits of plugging into our powerful global infrastructure to drive bookings and operational efficiencies on Day 1. No other conversion opportunity delivers the strength of Marriott Bonvoy and its active and growing membership base.</p>
          </div>

          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 25.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="content-section mt-16">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 26.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:ml-16">
            <h2 className="text-[#281A2A] text-5xl font-semibold mb-8">Adaptive Reuse</h2>
            <p className="text-gray-700 text-2xl leading-relaxed">
              Revitalize a building with noteworthy architecture and site superiority. Adaptive re-use preserves the rich integrity of a structure while infusing it with a bold new identity. For many developers, adaptive re-use offers the best of all worlds: reinvigorating prime urban and resort locations with hotels that stand out with one-of-a-kind appeal.</p>
          </div>
        </div>
      </section>

      <section className="content-section mt-16">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-5xl font-semibold mb-8">New Builds</h2>
            <p className="text-gray-700 text-2xl leading-relaxed">
              Create a property that is uniquely yours from the ground up. Marriott offers both prototypical and custom opportunities depending on brand and market, built to achieve your goals with the unique expertise of Marriott’s award-winning Global Design team.</p>


          </div>

          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 27.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="content-section mt-16">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 28.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:ml-16">
            <h2 className="text-[#281A2A] text-5xl font-semibold mb-8">Mixed Use
              / Residential
              Development</h2>
            <p className="text-gray-700 text-2xl leading-relaxed">
              Marriott is an industry leader in branding and operating mixed-use residential projects. Our residential team has the experience and strategic knowledge to help developers successfully market and operate branded residential products across the globe. Learn more about Marriott branded residences and explore the depth and breadth of Marriott’s residential portfolio.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section mt-16">
        <div className="flex flex-col md:flex-row items-center w-full md:px-36">
          {/* Text Section */}
          <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
            <h2 className="text-[#281A2A] text-5xl font-semibold mb-8">All-Inclusive</h2>
            <p className="text-gray-700 text-2xl leading-relaxed">
              Marriott is shaking up All-Inclusive! We’re bringing our trusted brands, loyal guests, and operational expertise to the All-Inclusive segment. Offering natural platforms to create relevant experiences for today’s discerning all-inclusive guest, Marriott’s eight distinct branding options for families and adults provide unparalleled guest experience across a diverse range of options. Learn more about our brand offerings.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-full ">
            <img
              src={`${process.env.PUBLIC_URL}/img/Groupe de masques 29.png`}// Replace with the actual image URL
              alt="Loyalty Program Room"
              className="md:h-auto w-full"
            />
          </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  )
}

export default Developement
