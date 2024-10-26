import React, { useState, useEffect } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-white text-black py-1 md:p-2 md:py-4 shadow-lg hover:bg-white-600 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUpLong size={20}/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
