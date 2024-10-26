import React from 'react'
import ScrollToTopButton from './ScrollToTopButton'

function Advantage() {
  return (
    <div className='m-14 py-8'>

      <div className="breadcrumbs text-sm px-6 md:px-36">
        <ul>
          <li><a>Home</a></li>
          <li><a >How we work Avontage</a></li>
        </ul>
      </div>

      <section className="content-section">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-full mb-8 lg:mb-0 lg:pr-12 px-6 md:px-12 lg:px-16 xl:px-32 py-8 lg:py-16">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 lg:mb-10 text-start" style={{ color: '#281A2A' }}>
              The Power Of<br/>
              Investour Hospitality
            </h1>
            <div className="flex my-2">
              <div className="w-1 h-[100px] lg:h-24" style={{ backgroundColor: '#281A2A' }}></div>
              <p className="text-base md:text-lg lg:text-lg mb-6 font-medium text-start ml-6 lg:ml-10 my-2 mx-2 lg:mx-4" style={{ color: '#281A2A' }}>
                Investour Hospitality succeeds when you do. Our team looks forward to working with you to understand your hotel development goals, offer our hospitality expertise and support your business objectives to achieve long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>


      <ScrollToTopButton />
    </div>
  )
}

export default Advantage