import React, { useEffect, useState } from 'react'
import ScrollToTopButton from './ScrollToTopButton'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Developement
  () {
  const [activeTab, setActiveTab] = useState('contractType');

  useEffect(() => {
    AOS.init({
      duration: 2000, // Set the animation duration in milliseconds
      once: false,    // Set to false to allow animations on each scroll
      mirror: true,   // Enable animations on scroll up as well
    });
    AOS.refresh(); // Refresh AOS to detect elements on load
  }, []);

  return (
    <div>
      <div className='m-14 pt-2 md:m-10'></div>
      <div className='mb-2 ml-10'>
        <div className="breadcrumbs text-sm md:px-36">
          <ul>
            <li><a>Home</a></li>
            <li><a className='text-[12px]'>Investour Hospitality Development</a></li>
          </ul>
        </div>
      </div>
      <div className='md:mx-4 mx-8'>
        <section className="content-section md:items-center md:justify-center md:mr-14">
          <div className="flex flex-col lg:flex-row md:items-center md:justify-center">
            <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
                Hotel Development
              </h1>
              <div className="flex my-2">
                <div className="w-1 h-[210px] lg:h-20" style={{ backgroundColor: '#281A2A' }}></div>
                <p className="text-base md:text-lg lg:text-lg mb-6 font-medium text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
                  Investour Hospitality offers both managed and franchised business models, as well as diverse property types to help owners achieve their goals in a variety of markets. Discover how Marriott’s resources can help your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section md:mt-10">
          <div className="flex flex-col md:flex-row items-start w-full md:px-36">
            <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
              <h2 className="text-[#281A2A] text-3xl md:text-6xl font-semibold mb-8">
                Solutions For Every Owner, Everywhere
              </h2>
            </div>

            <div className="md:w-full">
              <div className="flex flex-col md:flex-row text-white text-sm font-semibold">
                <button
                  className={`w-full md:w-1/2 py-4 text-center ${activeTab === 'contractType' ? 'bg-[#0A1D5A]' : 'bg-[#374D93]'}`}
                  onClick={() => setActiveTab('contractType')}
                >
                  <div className='md:text-xl'>CONTRACT TYPE</div>
                  <div className="text-xs mt-1">Franchise Operations, Managed by Investor</div>
                </button>
                <button
                  className={`w-full md:w-1/2 py-4 text-center ${activeTab === 'market' ? 'bg-[#0A1D5A]' : 'bg-[#374D93]'}`}
                  onClick={() => setActiveTab('market')}
                >
                  <div className='md:text-xl'>MARKET</div>
                  <div className="text-xs mt-1">Urban, Suburban & Resort</div>
                </button>
              </div>

              <div className="p-4 bg-[#ECF1F5] mt-4">
                {activeTab === 'contractType' && (
                  <div>
                    <h2 className="text-center font-semibold uppercase mb-4">Contract Type</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {['Groupe de masques 20.png', 'Groupe de masques 21.png', 'Groupe de masques 22.png', 'Groupe de masques 23.png', 'Groupe de masques 24.png'].map((src, index) => (
                        <div key={index} className="card flex flex-col items-center">
                          <img
                            src={`${process.env.PUBLIC_URL}/img/${src}`}
                            alt="new build"
                            className="w-full"
                          />
                          <div className="items-center">
                            <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">New Build</h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'market' && (
                  <div>
                    <h2 className="text-center font-semibold uppercase mb-4">Market</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {['Groupe de masques 20.png', 'Groupe de masques 21.png', 'Groupe de masques 22.png', 'Groupe de masques 23.png', 'Groupe de masques 24.png'].map((src, index) => (
                        <div key={index} className="card flex flex-col items-center">
                          <img
                            src={`${process.env.PUBLIC_URL}/img/${src}`}
                            alt="new build"
                            className="w-full"
                          />
                          <div className="items-center">
                            <h2 className="text-[10px] md:text-sm mt-2 text-center justify-center uppercase">New Build</h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="divider mt-16 md:mx-14 mx-6"></div>

        <section className="content-section mt-8">
          <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-6 lg:py-6">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 lg:mb-10 text-center md:text-start" style={{ color: '#281A2A' }}>
              Hotel Development
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-start w-full md:px-36">
            <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
              <h2 className="text-[#281A2A] text-xl font-medium mb-4">Managed by Investour</h2>
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                Investour Hospitality (IxH) - Investour Hospitality hotel management division - operates over 2,100 hotels globally, making us one of the most experienced hotel management companies in the world.
              </p>
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed mt-4">
                IxH provides turnkey management services and has more than 65 years of operational expertise to maximize financial performance. With a deep bench of talent, we ensure the highest standards are delivered at every touchpoint for a superior brand experience.
              </p>
              <div className="flex justify-center md:justify-start px-12 py-5 mt-6">
                <button className="relative inline-flex items-center px-8 py-4 border-2 border-gray-800 font-semibold uppercase hover:bg-[#6D3D90] hover:text-white transition duration-300">
                  <span className="absolute left-[-42px] w-14 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-12"></span>
                  Learn More
                </button>
              </div>
            </div>

            <div className="md:w-full md:text-left">
              <h2 className="text-[#281A2A] text-xl font-medium mb-4">Franchise Operations</h2>
              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                Our franchise teams work with leading management companies and owners to provide comprehensive training, tools, and resources to help ensure each hotel’s success. In addition to access to Marriott’s diverse brand offerings and strong global base of loyal guests, franchise partners can take advantage of our powerful global sales and marketing systems and cutting-edge resources.
              </p>
              <div className="flex justify-center md:justify-start px-12 py-5 mt-6">
                <button className="relative inline-flex items-center px-10 py-4 border-2 border-gray-800 font-semibold uppercase hover:bg-[#6D3D90] hover:text-white transition duration-300">
                  <span className="absolute left-[-42px] w-14 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-12"></span>
                  New to Franchising?
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="divider mt-16 md:mx-14 mx-6"></div>
        <section className="content-section md:items-center md:justify-center md:mr-14">
          <div className="flex flex-col lg:flex-row md:items-center md:justify-center">
            <div className="lg:w-full lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-10 text-center md:text-start" style={{ color: '#281A2A' }}>
                Hotel Development
              </h1>
              <div className="flex my-2">
                <p className="text-base md:text-lg lg:text-lg mb-6 font-medium text-center md:text-start lg:ml-10 my-2 lg:mx-4" style={{ color: '#281A2A' }}>
                  Investour Hospitality properties are compelling additions to any market. We offer owner-friendly and flexible building options based on your project, budget, and location, including prototypical new build hotels, adaptive re-use projects, or the conversion of an existing hotel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section mt-16" data-aos="fade-left">
          <div className="flex flex-col md:flex-row items-center w-full md:px-36">
            <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
              <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">Conversions</h2>
              <p className="text-gray-700 text-sm md:text-2xl leading-relaxed">
                Transform your property with our innovative brands, targeted for today’s savvy travelers. Marriott streamlines the conversion process, giving properties a fresh new identity and appeal in the shortest time possible. Experience the benefits of plugging into our powerful global infrastructure to drive bookings and operational efficiencies on Day 1. No other conversion opportunity delivers the strength of Marriott Bonvoy and its active and growing membership base.
              </p>
            </div>

            <div className="md:w-full">
              <img
                src={`${process.env.PUBLIC_URL}/img/Groupe de masques 25.png`} // Replace with the actual image URL
                alt="Loyalty Program Room"
                className="md:h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="content-section mt-16" data-aos="fade-right">
          <div className="flex flex-col md:flex-row items-center w-full md:px-36">
            <div className="md:w-full md:mb-0 mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/img/Groupe de masques 26.png`} // Replace with the actual image URL
                alt="Loyalty Program Room"
                className="md:h-auto w-full"
              />
            </div>

            <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:ml-16">
              <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">Adaptive Reuse</h2>
              <p className="text-gray-700 text-sm md:text-2xl leading-relaxed">
                Revitalize a building with noteworthy architecture and site superiority. Adaptive re-use preserves the rich integrity of a structure while infusing it with a bold new identity. For many developers, adaptive re-use offers the best of all worlds: reinvigorating prime urban and resort locations with hotels that stand out with one-of-a-kind appeal.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section mt-16" data-aos="fade-left">
          <div className="flex flex-col md:flex-row items-center w-full md:px-36">
            <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
              <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">New Builds</h2>
              <p className="text-gray-700 text-sm md:text-2xl leading-relaxed">
                Create a property that is uniquely yours from the ground up. Marriott offers both prototypical and custom opportunities depending on brand and market, built to achieve your goals with the unique expertise of Marriott’s award-winning Global Design team.
              </p>
            </div>

            <div className="md:w-full">
              <img
                src={`${process.env.PUBLIC_URL}/img/Groupe de masques 27.png`} // Replace with the actual image URL
                alt="Loyalty Program Room"
                className="md:h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="content-section mt-16" data-aos="fade-right">
          <div className="flex flex-col md:flex-row items-center w-full md:px-36">
            <div className="md:w-full md:mb-0 mb-4">
              <img
                src={`${process.env.PUBLIC_URL}/img/Groupe de masques 28.png`} // Replace with the actual image URL
                alt="Loyalty Program Room"
                className="md:h-auto w-full"
              />
            </div>

            <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:ml-16">
              <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">Mixed Use / Residential Development</h2>
              <p className="text-gray-700 text-sm md:text-2xl leading-relaxed">
                Marriott is an industry leader in branding and operating mixed-use residential projects. Our residential team has the experience and strategic knowledge to help developers successfully market and operate branded residential products across the globe. Learn more about Marriott branded residences and explore the depth and breadth of Marriott’s residential portfolio.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section mt-16" data-aos="fade-left">
          <div className="flex flex-col md:flex-row items-center w-full md:px-36">
            <div className="md:w-full text-center md:text-left mb-8 md:mb-0 md:mr-16">
              <h2 className="text-[#281A2A] text-3xl md:text-5xl font-semibold mb-8">All-Inclusive</h2>
              <p className="text-gray-700 text-sm md:text-2xl leading-relaxed">
                Marriott is shaking up All-Inclusive! We’re bringing our trusted brands, loyal guests, and operational expertise to the All-Inclusive segment. Offering natural platforms to create relevant experiences for today’s discerning all-inclusive guest, Marriott’s eight distinct branding options for families and adults provide unparalleled guest experience across a diverse range of options. Learn more about our brand offerings.
              </p>
            </div>

            <div className="md:w-full">
              <img
                src={`${process.env.PUBLIC_URL}/img/Groupe de masques 29.png`} // Replace with the actual image URL
                alt="Loyalty Program Room"
                className="md:h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="content-section mb-8 mt-16 md:mt-36 items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center w-full px-16 md:px-36">
            <div className="md:w-full items-center justify-center">
              <h2 className="text-[#281A2A] text-[12px] md:text-4xl font-light md:font-medium mb-4">Build Your Vision With Our 30+ Recognized And Trusted Brands</h2>
              <div className="flex justify-center py-5 mt-6">
                <button className="relative inline-flex items-center px-16 py-4 border-2 border-gray-800 font-semibold uppercase hover:bg-[#6D3D90] hover:text-white transition duration-300">
                  <span className="absolute left-[-42px] w-14 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-12"></span>
                  Let’s Get Started 
                </button>
              </div>
            </div>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
    </div>
  )
}

export default Developement
