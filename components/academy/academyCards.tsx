"use client"
import React, { useState } from "react";
import Label from "../forms/label";
import CourseCard from "./CourseCard";

const AcademyCards = () => {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
      };
      const courses =[
          {
          category: 'Web',
          title: 'Basics of Angular',
          description: 'Introductory course for Angular and framework basics',
          duration: '30 minutes',
          completionStatus: 'Completed twice',
          },
          {
          category: 'Web',
          title: 'Basics of TypeScript',
          description: 'Beginner course for Typescript and its basics',
          duration: '60 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Web',
          title: 'Build a PWA Using Workbox',
          description: 'Step by step guide for building a PWA using Workbox',
          duration: '120 minutes',
          completionStatus: 'Never completed',
          },
          {
          category: 'Web',
          title: 'Customize Network Topology with Subnetworks',
          description: 'Dive deep into Network Topology with Subnetworks',
          duration: '45 minutes',
          completionStatus: 'Never completed',
          },
          {
          category: 'Firebase',
          title: 'Build an App for the Google Assistant with Firebase',
          description: 'Dive deep into Google Assistant apps using Firebase',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Firebase',
          title: 'Build an App for the Google Assistant with Firebase',
          description: 'Dive deep into Google Assistant apps using Firebase',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Firebase',
          title: 'Build an App for the Google Assistant with Firebase',
          description: 'Dive deep into Google Assistant apps using Firebase',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Firebase',
          title: 'Build an App for the Google Assistant with Firebase',
          description: 'Dive deep into Google Assistant apps using Firebase',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Cloud',
          title: 'Manage Your Pivotal Cloud Foundry Apps Using Apigee Edge',
          description: 'Introductory course for Pivotal Cloud Foundry App',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Cloud',
          title: 'Manage Your Pivotal Cloud Foundry Apps Using Apigee Edge',
          description: 'Introductory course for Pivotal Cloud Foundry App',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Cloud',
          title: 'Manage Your Pivotal Cloud Foundry Apps Using Apigee Edge',
          description: 'Introductory course for Pivotal Cloud Foundry App',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Cloud',
          title: 'Manage Your Pivotal Cloud Foundry Apps Using Apigee Edge',
          description: 'Introductory course for Pivotal Cloud Foundry App',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Android',
          title: 'Android N: Quick Settings',
          description: 'Step by step guide for Android N: Quick Settings',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Android',
          title: 'Android N: Quick Settings',
          description: 'Step by step guide for Android N: Quick Settings',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          {
          category: 'Android',
          title: 'Android N: Quick Settings',
          description: 'Step by step guide for Android N: Quick Settings',
          duration: '30 minutes',
          completionStatus: 'Completed 3 times',
          },
          
    ]
  return (
    <div className="mx-auto sm:py-8 px-4 ">
  <div className="sm:flex items-center justify-between p-5 gap-5">
    {/* Select Dropdown */}
    <div className=" sm:w-32">
      <label htmlFor="category" className="block text-sm  text-gray-500 mb-1">
        Category
      </label>
      <select
        className="block w-full p-5  border outline-none  bg-slate-50 border-gray-300 rounded-md  px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
        name="category"
        id="category"
      >
        <option value="">All</option>
        <option value="web">Web</option>
        <option value="firebase">Firebase</option>
        <option value="cloud">Cloud</option>
        <option value="android">Android</option>
      </select>
    </div>

    {/* Input Field */}
    <div className="flex-1">
      <label htmlFor="keyword" className="block text-sm text-gray-500 mb-1">
        Search for a course
      </label>
      <input
        type="text"
        id="keyword"
        placeholder="Enter a keyword..."
        className="block sm:w-64 w-full  border border-gray-300  outline-none bg-slate-50 rounded-md px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    {/* Toggle Button with Label */}
    <div className="flex items-center p-4">
      <div className="relative  sm:right-2/4 sm:top-3 left-10 inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="toggle-switch"
          className="sr-only"
          checked={isToggled}
          onChange={handleToggle}
        />
        <div
          className={`w-10 h-5 flex items-center rounded-full transition-colors duration-300 ${isToggled ? 'bg-sky-500' : 'bg-gray-300'}`}
          onClick={handleToggle}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? 'translate-x-5' : 'translate-x-1'}`}
          />
        </div>
      <label htmlFor="toggle-switch" className="ml-2 p-2 text-sm text-gray-700">
        Hide completed
      </label>
      </div>
    </div>
  </div>
  {/* cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
</div>

  );
};

export default AcademyCards;
