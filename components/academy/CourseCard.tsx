"use client";
import React from "react";
import Time from "@/assets/academy/time.svg";
import Image from "next/image";
interface CourseType {
  //+
  title: string; //+
  description: string; //+
  category: string; //+
  duration: string; //+
  completionStatus: string; //+
}

const CourseCard: React.FC<{ course: CourseType }> = ({ course }) => {
  //+

  return (
    <div className=" bg-slate-100 dark:bg-dark border  dark:border-gray-800 h-[384px] border-gray-200 rounded-lg shadow-md flex flex-col overflow-hidden">
      {/* Badge */}
      <div className="flex flex-col flex-auto">
        <div className="px-4 py-2">
          <span className="inline-block bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full uppercase tracking-wide">
            {course.category}
          </span>
        </div>
        {/* Content */}
        <div className=" p-5 ">
          <h3 className="text-lg font-semibold dark:text-white text-gray-800">
            {course.title}
          </h3>
          <p className="text-sm dark:text-white text-gray-600 mt-1">
            {course.description}
          </p>
        </div>
        {/* Details */}
        <div className="items-center  text-sm dark:text-white text-gray-500 mt-3 p-4">
          <span className="flex pb-3 items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              width="20"
              height="20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>{course.duration}</span>
          </span>
          <span className="flex  items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                stroke="currentcolor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{course.completionStatus}</span>
          </span>
        </div>
      </div>
      <span className="border border-sky-400 "></span>
      {/* Action Button */}
      <div className="px-4 flex  justify-end items-end py-2 ">
        <button className=" text-center bg-blue-500  text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Continue →
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
