"use client"
import React, { useState } from "react";
import Label from "../forms/label";
import CourseCard from "./CourseCard";

const AcademyCards = () => {

    const [isToggled, setIsToggled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleToggle = () => {
        setIsToggled(!isToggled);
      };
      const handleCategoryChange = (e:any) => {
        setSelectedCategory(e.target.value);
        console.log(handleCategoryChange) // Update selected category
      };

      const handleSearchChange = (e: any) => {
        setSearchKeyword(e.target.value.toLowerCase());
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
          description: 'Beginner course for Typescript and its basics web',
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
    let filteredCourses = courses
    .filter((course) =>
      selectedCategory
        ? course.category.toLowerCase() === selectedCategory.toLowerCase()
        : true
    )
    .filter((course) =>
      course.title.toLowerCase().includes(searchKeyword) ||
      course.description.toLowerCase().includes(searchKeyword)
    );
    // if (isToggled) {
    //   filteredCourses = filteredCourses.filter(
    //     (course) => !course.completionStatus.toLowerCase().includes('completed')
    //   );
    // }                             

  return (
    <div className="mx-auto sm:py-8 px-4">
  <div className="sm:flex items-center justify-between mb-5 p-5 gap-5">
    {/* Select Dropdown */}
    <div className=" sm:w-32 ">
     
      <Label label="Category"/>
      <select
        className="block w-full p-5  border outline-none dark:border-gray-800 dark:bg-dark dark:text-white  bg-slate-50 border-gray-300 rounded-md  px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
        name="category"
        id="category"
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        <option value="web">Web</option>
        <option value="firebase">Firebase</option>
        <option value="cloud">Cloud</option>
        <option value="android">Android</option>
      </select>
    </div>

    {/* Input Field */}
    <div className="flex-1 ">
      
      <Label label=" Search for a course"/>
      <input
      onChange={handleSearchChange}
        type="text"
        id="keyword"
        placeholder="Enter a keyword..."
        className="block sm:w-64 w-full dark:border-gray-800 dark:bg-dark dark:text-white  border border-gray-300   outline-none bg-slate-50 rounded-md px-4 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    {/* Toggle Button with Label */}
    <div className="flex items-center p-4">
      <div className="relative gap-4 sm:right-2/4 sm:top-3 left-10 inline-flex items-center cursor-pointer">
      <input
              type="checkbox"
              id="toggle-switch"
              className="sr-only"
              checked={isToggled}
              onChange={handleToggle}
            />
            <div
              className={`w-10 h-5 flex items-center rounded-full transition-colors duration-300 ${
                isToggled ? 'bg-sky-500' : 'bg-gray-300 '
              }`}
              onClick={handleToggle}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  isToggled ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
        </div>
      <Label label=" Hide completed" />
      
      </div>
    </div>
  </div>
  {/* cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <p className="text-center  text-gray-500 col-span-full">
            Course is not available right now.
          </p>
        )}
    </div>
</div>

  );
};

export default AcademyCards;
