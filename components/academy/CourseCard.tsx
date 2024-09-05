import React from "react";

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
    <div className=" bg-slate-100 border  h-[384px]  border-gray-200 rounded-lg shadow-md overflow-hidden">
      {/* Badge */}
      <div className="px-4 py-2">
        <span className="inline-block bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full uppercase tracking-wide">
          {course.category}
        </span>
      </div>

      {/* Content */}

      <div className=" p-5">
        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{course.description}</p>
        </div>
        {/* Details */}
        <div className="items-center  text-sm text-gray-500 mt-3 p-4">
          <span className="flex pb-3 items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c1.38 0 2.5 1.12 2.5 2.5S13.38 13 12 13s-2.5-1.12-2.5-2.5S10.62 8 12 8zm0 0c1.38 0 2.5 1.12 2.5 2.5S13.38 13 12 13s-2.5-1.12-2.5-2.5S10.62 8 12 8zm0 6.5v1m0 4v1m-6 0h12m-6-1v-1m-4.5-5.5h9m-.5 5.5h-8m0-3.5v-1m4.5 3v-2m-2.5 0h5m-5.5 2v-2m-.5 5.5h1.5"
              />
            </svg>
            <span>{course.duration}</span>
          </span>

          <span className="flex  items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l1-2h12l1 2m-1 3v5a2 2 0 01-2 2h-8a2 2 0 01-2-2v-5m-2-3v1m0-4v1m14-1v1m0-4v1m0 4l1-2"
              />
            </svg>
            <span>{course.completionStatus}</span>
          </span>
        </div>
      

      {/* Action Button */}
      <div className="px-4 flex  justify-end py-2 border-t">
        <button className=" text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Continue →
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
