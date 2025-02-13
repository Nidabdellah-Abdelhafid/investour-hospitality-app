import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";

function Work() {
  return (
    <div className="m-0 p-0">
      <div className='m-14 pt-2 md:m-10'>

      </div>
      <div className='mb-2 ml-10'>
        <div className="breadcrumbs text-sm md:px-36">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>How we work together</a>
          </li>
        </ul>
      </div>
      </div>
      <section className="content-section md:mx-14 p-10">
        <div className="container mx-auto text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Coming Soon
          </h2>
          <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-14 w-1h-14 shrink-0">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="text-xl">Coming Soon .......</span>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
        <div className="flex w-full flex-col gap-4 mt-10">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        </div>
      </section>

      <ScrollToTopButton />
    </div>
  );
}

export default Work;
