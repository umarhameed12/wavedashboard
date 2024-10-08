"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

interface NotesHead {
  toggleDrawer: () => void;
}

const NotesHead = ({ toggleDrawer }: NotesHead) => {
  return (
    <div>
      <div className="flex sm:items-center sm:justify-between sm:flex-row flex-col">
        <div>
          <div className="flex gap-2 text-blue-600 text-sm font-medium">
            <Link href="/dashboard">Home</Link>
            <p>/</p>
            <Link href="/dashboard/notes">Notes</Link>
          </div>
          <p className="text-2xl font-extrabold">Notes</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <Button
              onClick={toggleDrawer}
              className="bg-transparent shadow-none border dark:border-[#4f4f4f] border-[#000000] border-opacity-25 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </div>
          <Button className="border border-[#000000] dark:border-[#4f4f4f] border-opacity-25 p-2 hover:shadow-none shadow-none bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-[#000000] dark:text-white opacity-25"
            >
              <path
                fillRule="evenodd"
                d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <div className="flex items-center w-fit bg-gray-100 dark:bg-[#1e1e1e] rounded-xl p-2 border dark:border-[#4f4f4f] border-[#000000] border-opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Notes"
              className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesHead;
