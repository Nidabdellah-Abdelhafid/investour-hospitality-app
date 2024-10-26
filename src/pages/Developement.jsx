import React from 'react'
import ScrollToTopButton from './ScrollToTopButton'

function Developement
() {
  return (
    <div className='m-14'>
        
        <div className="breadcrumbs text-sm m-14 p-5">
  <ul>
    <li><a>Home</a></li>
    <li><a>Investour Hospitality Development</a></li>
  </ul>
</div>
        
<section className="content-section p-10">
        <div className="container mx-auto text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Developing the Future Together</h2>
          <p className="text-lg leading-relaxed mb-6">
            Investour Hospitality succeeds when you do. Our team looks forward to working with you to understand your hotel development goals, offer our hospitality expertise and support your business objectives to achieve long-term success.
          </p>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Hotel Development"
            className="w-full lg:w-1/2 object-cover rounded-lg"
          />
        </div>
      </section>


      <ScrollToTopButton />
    </div>
  )
}

export default Developement
