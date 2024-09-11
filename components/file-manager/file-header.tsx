import React from "react";
import Button from "../buttons/button";

const FileHeader = () => {
  return (
    <div className="py-5 sm:py-[3.2rem] w-full flex space-y-8 sm:space-y-0 items-center justify-between ">
      <div className="flex flex-col space-y-3 sm:space-y-0">
        <nav className="block" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-3">
            <li>
              <a href="#" className="text-base hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="">/</span>
            </li>
            <li aria-current="page">
              <span className="whitespace-nowrap text-base ">File Manager</span>
            </li>
          </ol>
        </nav>
        <span className="flex items-end text-xl md:text-4xl font-extrabold tracking-tight leading-none">
          {" "}
          File Manager
        </span>
        <p className="text-base text-gray-400 font-medium mx-2">
          3 folders, 13 files
        </p>
      </div>
      <div className="flex p-5 items-center">
        {/* <Button  text="+ upload" /> */}
        <button
          className=" w-full whitespace-nowrap  rounded-lg bg-200 text-white sm:px-7  p-2 flex items-center justify-center cursor-pointer"
          type="submit"
        >
         
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          
          Upload file
        </button>
      </div>
    </div>
  );
};

export default FileHeader;
