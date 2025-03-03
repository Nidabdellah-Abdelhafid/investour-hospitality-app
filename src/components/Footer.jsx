import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (

      <footer className="bg-[#3e005f] text-white py-10 footer-fm">
      <div className="max-w-full mx-auto px-6 lg:px-12">
        {/* Top Navigation Links */}
        <nav className="flex flex-col md:flex-row justify-center md:justify-between items-center text-sm font-light py-4 px-12">
          <ul className="flex flex-wrap justify-center md:justify-start gap-40">
            <li><Link to="/" onClick={scrollToTop()} className="hover:underline">Accueil</Link></li>
            <li><Link to="/advantage" onClick={scrollToTop()} className="hover:underline">L’Avantage Investour Hospitality</Link></li>
            <li><Link to="/work" onClick={scrollToTop()} className="hover:underline">Investour Hospitality</Link></li>
            <li><Link to="/brandsVHR" onClick={scrollToTop()} className="hover:underline">Valeria Hotels & Resorts</Link></li>
            <li><Link to="/brands" onClick={scrollToTop()} className="hover:underline">Valeria Collection</Link></li>
          </ul>
        </nav>

        {/* Separator */}
        <div className="border-t border-purple-800 my-4"></div>
        

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 px-12">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className='font-700'>Copyright © 2025 Investour Hospitality, Inc. All Rights Reserved</p>
            <p className='mt-3 font-700'>Powered by Investour</p>
          </div>

          {/* Social Media + Logo */}
          <div className="flex items-center gap-10 mt-6 md:mt-0">
            <FaLinkedin size={26} className="text-white hover:text-gray-300 cursor-pointer" />
            <span className="font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="151.246" height="53.98" viewBox="0 0 151.246 53.98">
            <g id="Investour_Hospitality" data-name="Investour Hospitality" transform="translate(-89.53 -158.65)">
                <g id="Calque_1" transform="translate(89.53 158.65)">
                <path id="Tracé_1" data-name="Tracé 1" d="M187.86,180.012h3.459v2.3A5.425,5.425,0,0,1,196,179.7c3.4,0,5.331,2.24,5.331,5.727v9.555H197.9v-8.505c0-2.353-1.162-3.656-3.2-3.656s-3.374,1.362-3.374,3.715v8.449H187.86v-14.97Z" transform="translate(-166.536 -175.135)" fill="#fff"/>
                <path id="Tracé_2" data-name="Tracé 2" d="M259.9,181.14h3.687l4.025,11,4.055-11h3.6l-6.124,15.083h-3.09Z" transform="translate(-222.953 -176.263)" fill="#fff"/>
                <path id="Tracé_3" data-name="Tracé 3" d="M336.52,187.553V187.5c0-4.309,3.034-7.8,7.315-7.8,4.762,0,7.174,3.743,7.174,8.052,0,.312-.028.625-.056.965h-11a4.14,4.14,0,0,0,4.309,3.8,5.444,5.444,0,0,0,4.055-1.787l2.013,1.787a7.616,7.616,0,0,1-6.124,2.806,7.485,7.485,0,0,1-7.684-7.768Zm11.086-1.1c-.228-2.184-1.531-3.94-3.8-3.94-2.127,0-3.572,1.587-3.884,3.94Z" transform="translate(-282.957 -175.135)" fill="#fff"/>
                <path id="Tracé_4" data-name="Tracé 4" d="M413.66,193.246l1.531-2.325a8.473,8.473,0,0,0,4.905,1.843c1.475,0,2.325-.625,2.325-1.616v-.056c0-1.134-1.587-1.559-3.346-2.1-2.184-.6-4.678-1.531-4.678-4.365v-.056c0-2.863,2.353-4.593,5.331-4.593a10.311,10.311,0,0,1,5.5,1.7l-1.362,2.438a8.7,8.7,0,0,0-4.225-1.418c-1.334,0-2.1.653-2.1,1.475v.056c0,1.078,1.616,1.587,3.374,2.127,2.156.681,4.65,1.672,4.65,4.365v.056c0,3.147-2.438,4.706-5.556,4.706A10.333,10.333,0,0,1,413.66,193.246Z" transform="translate(-343.368 -175.354)" fill="#fff"/>
                <path id="Tracé_5" data-name="Tracé 5" d="M479.89,177.122v-7.881h-1.9v-2.949h1.9V162.18h3.431v4.112h4.025v2.949h-4.025v7.343a1.634,1.634,0,0,0,1.843,1.872,4.683,4.683,0,0,0,2.125-.51v2.806a5.938,5.938,0,0,1-3.09.766c-2.524,0-4.309-1.106-4.309-4.394Z" transform="translate(-393.747 -161.414)" fill="#fff"/>
                <path id="Tracé_6" data-name="Tracé 6" d="M531.47,187.591v-.056a7.984,7.984,0,0,1,15.963-.056v.056a7.844,7.844,0,0,1-8.024,7.8,7.706,7.706,0,0,1-7.937-7.74Zm12.533,0v-.056a4.628,4.628,0,0,0-4.593-4.821,4.528,4.528,0,0,0-4.509,4.762v.056a4.631,4.631,0,0,0,4.565,4.791A4.476,4.476,0,0,0,544,187.589Z" transform="translate(-435.629 -175.143)" fill="#fff"/>
                <path id="Tracé_7" data-name="Tracé 7" d="M620.39,190.659v-9.527h3.431v8.505c0,2.353,1.162,3.628,3.2,3.628s3.374-1.334,3.374-3.687V181.13h3.459V196.1H630.4v-2.325a5.4,5.4,0,0,1-4.678,2.637c-3.4,0-5.331-2.24-5.331-5.756Z" transform="translate(-505.265 -176.255)" fill="#fff"/>
                <path id="Tracé_8" data-name="Tracé 8" d="M702.1,180.1h3.459v3.374a5.273,5.273,0,0,1,5.3-3.656v3.628h-.2c-3.034,0-5.1,1.956-5.1,5.925v5.7H702.1Z" transform="translate(-569.255 -175.222)" fill="#fff"/>
                <path id="Tracé_9" data-name="Tracé 9" d="M105.977,158.65V178.5h0v29.511h-3.487v-8.362h-9.47v8.362H89.53V188.161h3.487v8.25h9.47V178.5h0V158.65Z" transform="translate(-89.53 -158.65)" fill="#fff"/>
                <path id="Tracé_10" data-name="Tracé 10" d="M183.28,323.661V323.6a7.984,7.984,0,0,1,15.963-.056v.056a7.844,7.844,0,0,1-8.024,7.8,7.706,7.706,0,0,1-7.937-7.74Zm12.53,0V323.6a4.628,4.628,0,0,0-4.593-4.821,4.528,4.528,0,0,0-4.509,4.762v.056a4.631,4.631,0,0,0,4.565,4.791,4.476,4.476,0,0,0,4.537-4.734Z" transform="translate(-162.949 -281.704)" fill="#fff"/>
                <path id="Tracé_11" data-name="Tracé 11" d="M267.35,329.326,268.881,327a8.473,8.473,0,0,0,4.905,1.843c1.475,0,2.325-.625,2.325-1.616v-.056c0-1.134-1.587-1.559-3.346-2.1-2.184-.6-4.678-1.531-4.678-4.366v-.056c0-2.863,2.353-4.593,5.331-4.593a10.311,10.311,0,0,1,5.5,1.7l-1.362,2.438a8.7,8.7,0,0,0-4.225-1.418c-1.334,0-2.1.653-2.1,1.475v.056c0,1.078,1.616,1.587,3.374,2.127,2.156.681,4.65,1.672,4.65,4.365v.056c0,3.147-2.438,4.706-5.556,4.706a10.333,10.333,0,0,1-6.35-2.24Z" transform="translate(-228.787 -281.923)" fill="#fff"/>
                <path id="Tracé_12" data-name="Tracé 12" d="M338.35,316.092h3.459v2.494a5.955,5.955,0,0,1,5.1-2.806c3.515,0,6.946,2.778,6.946,7.768v.056c0,4.99-3.4,7.768-6.946,7.768a6.108,6.108,0,0,1-5.1-2.637V335.6H338.35V316.09Zm12.021,7.512v-.056c0-2.891-1.984-4.791-4.281-4.791a4.53,4.53,0,0,0-4.365,4.791v.056a4.5,4.5,0,0,0,4.365,4.791C348.443,328.4,350.371,326.552,350.371,323.6Z" transform="translate(-284.39 -281.704)" fill="#fff"/>
                <path id="Tracé_13" data-name="Tracé 13" d="M426.48,291.59h3.687v3.259H426.48Zm.113,5.558h3.459v14.97h-3.459Z" transform="translate(-353.408 -262.76)" fill="#fff"/>
                <path id="Tracé_14" data-name="Tracé 14" d="M460.02,313.2v-7.881h-1.9v-2.949h1.9V298.26h3.431v4.112h4.025v2.949h-4.025v7.343a1.634,1.634,0,0,0,1.843,1.872,4.683,4.683,0,0,0,2.125-.51v2.806a5.938,5.938,0,0,1-3.09.766c-2.524,0-4.309-1.106-4.309-4.394Z" transform="translate(-378.186 -267.984)" fill="#fff"/>
                <path id="Tracé_15" data-name="Tracé 15" d="M512.632,327.166v-.056c0-3.259,2.553-4.819,6.209-4.819a12.358,12.358,0,0,1,4.025.625v-.369c0-2.156-1.3-3.259-3.715-3.259a10.333,10.333,0,0,0-4.281.935l-.935-2.693a13.4,13.4,0,0,1,5.671-1.219,6.637,6.637,0,0,1,4.962,1.672,6.255,6.255,0,0,1,1.616,4.621v8.874h-3.346v-1.872a6.088,6.088,0,0,1-4.877,2.184c-2.806,0-5.331-1.587-5.331-4.621Zm10.292-1.076v-1.021a9.5,9.5,0,0,0-3.4-.6c-2.24,0-3.515.906-3.515,2.494v.056c0,1.446,1.247,2.268,2.921,2.268,2.268,0,4-1.275,4-3.2Z" transform="translate(-420.875 -282.119)" fill="#fff"/>
                <path id="Tracé_16" data-name="Tracé 16" d="M594.88,290.81h3.459v20.7H594.88Z" transform="translate(-485.288 -262.149)" fill="#fff"/>
                <path id="Tracé_17" data-name="Tracé 17" d="M631.76,291.59h3.687v3.259H631.76Zm.113,5.558h3.459v14.97h-3.459Z" transform="translate(-514.17 -262.76)" fill="#fff"/>
                <path id="Tracé_18" data-name="Tracé 18" d="M665.3,313.2v-7.881h-1.9v-2.949h1.9V298.26h3.431v4.112h4.025v2.949H668.73v7.343a1.634,1.634,0,0,0,1.843,1.872,4.683,4.683,0,0,0,2.125-.51v2.806a5.938,5.938,0,0,1-3.09.766c-2.524,0-4.309-1.106-4.309-4.394Z" transform="translate(-538.948 -267.984)" fill="#fff"/>
                <path id="Tracé_19" data-name="Tracé 19" d="M727.893,317.22h3.572l-5.953,15.367c-1.219,3.09-2.524,4.225-4.934,4.225a6.737,6.737,0,0,1-3.544-.935l1.162-2.524a4.31,4.31,0,0,0,2.013.566c.993,0,1.559-.425,2.127-1.7l-6.237-15h3.687l4.2,11.114L727.9,317.22Z" transform="translate(-580.219 -282.832)" fill="#fff"/>
                </g>
            </g>
            </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>


  );
}

export default Footer;
