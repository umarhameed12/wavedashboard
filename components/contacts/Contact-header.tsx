import { Card } from "@mui/material";
import React from "react";

const ContactHeader = () => {
  return (
    <div className="w-full bg-slate-100 border-t-2 p-8 space-y-3">
      <div>
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
                <span className="whitespace-nowrap text-base ">Contacts</span>
              </li>
            </ol>
          </nav>
          <span className="flex items-end text-xl md:text-4xl font-extrabold tracking-tight leading-none">
            {" "}
            Contacts
          </span>
          <p className="text-base text-gray-400 font-medium mx-2">
            80 contacts
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" w-5 h-5 absolute left-3 top-2 text-[#0000008A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
       
        <input
          className="block  w-full dark:border-gray-800 dark:bg-dark dark:text-white  border border-gray-300   outline-none bg-slate-50 rounded-md px-10 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
          type="text"
          placeholder="Search contacts"
        />

        <button className="   rounded-lg bg-blue-500 text-white sm:px-7  p-2 flex items-center justify-center cursor-pointer">
          Add
        </button>
      </div>
    </div>
  );
};

export default ContactHeader;
