import React from "react";


const AcademyHero = () => {
  return (
    <div className="  ">
    <div className="text-center relative bg-[#00418a] h-[40vh] p-4 flex flex-col justify-center">
      {/* <!-- Breadcrumbs --> */}
      <nav className=" block  text-white" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <a href="#" className="text-white hover:underline">Home</a>
          </li>
          <li>
            <span className="text-white ">/</span>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">Academy</a>
          </li>
          <li>
            <span className="text-white">/</span>
          </li>
          <li aria-current="page">
            <span className="text-white">Courses</span>
          </li>
        </ol>
      </nav>
   
      <svg
        className="absolute left-10 inset-0 pointer-events-none"
        viewBox="0 0 960 540"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="opacity-5"
          fill="none"
          stroke="currentColor"
          stroke-width="100"
        >
          <circle r="234" cx="196" cy="23"></circle>
          <circle r="234" cx="790" cy="491"></circle>
        </g>
      </svg>
  
      <div className="flex flex-col items-center text-center z-10">
        <h1 className="m-2 p-3 md:text-5xl text-2xl font-bold text-white">
          What do you want to learn today?
        </h1>
        <p className="mb-5 text-white md:text-xl ">
          Our courses will step you through the process of building small
          applications, <br></br> or adding new features to existing applications.
        </p>
      </div>
    </div>
  </div>
  
  
  );
};

export default AcademyHero;
