"use client";

import { X } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
interface FileInfo {
  name: string;
  type: string;
  createdBy?: string;
  createdAt?: string;
  modifiedAt?: string;
  size?: string;
}

const files: FileInfo[] = [
  { name: "Contract #123", type: "pdf" },
  { name: "Estimated budget", type: "xls" },
  { name: "DMCA notice #42", type: "doc" },
  { name: "Invoices", type: "pdf" },
  { name: "Crash logs", type: "txt" },
  { name: "System logs", type: "txt" },
  { name: "Personal projects", type: "doc" },
  { name: "Biometric portrait", type: "png" },
  { name: "Scanned image 201", type: "jpg" },
  { name: "Scanned image 202", type: "jpg" },
  { name: "Prices", type: "doc" },
  { name: "Shopping list", type: "doc" },
];
const FileCards = () => {
  const [selectedFile, setSelectedFile] = useState<FileInfo | null>(null);
//   const closeDrawer = () => setSelectedFile(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the smooth transition when a file is selected
  useEffect(() => {
    if (selectedFile) {
      setIsVisible(true); // Show the drawerv
    }
  }, [selectedFile]);

  const closeDrawer = () => {
    setIsVisible(false); // Hide the drawer with a smooth transition
    setTimeout(() => {
      setSelectedFile(null); // Reset after the transition ends
    }, 300); // Matches transition duration
  };

  return (
    <div className="relative">
    <div className="bg-[#efefef] dark:bg-dark200 dark:border-gray-800 border-2 rounded-lg shadow-md p-6 flex flex-col xl:flex-row">
      <div className="flex-grow">      
        <h2 className=" dark:text-white text-xl font-bold mb-4">Files</h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-${selectedFile ? "2" : "3"} md:grid-cols-3 xl:grid-cols-${selectedFile ? "3" : "5"} p-3 gap-4`}
        >
          {files.map((file, index) => (
            <div
              key={index}
              className="border sm:w-[160px] w-full bg-[#FAF9F9] dark:bg-dark dark:border-gray-800  m-3 p-10 shadow rounded-xl cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedFile(file)}
            >
              <div className="text-3xl mb-2 text-center">
                {file.type === "pdf" && "📄"}
                {file.type === "xls" && "📊"}
                {file.type === "doc" && "📝"}
                {file.type === "txt" && "📑"}
                {(file.type === "jpg" || file.type === "png") && "🖼️"}
              </div>
              <div className=" dark:text-white text-xs text-center truncate">{file.name}</div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Drawer for selected file */}
      {selectedFile && (
        <div
          className={`fixed xl:relative xl:w-1/3 xl:ml-6 w-[320px] max-sm:w-full h-full dark:bg-dark  bg-[#FAF9F9] shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
          style={{ top: '0', right: '0', zIndex: 10 }}
        >
          <div className="p-4 dark:text-white">
            <div className="flex justify-end cursor-pointer items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                width={20}
                height={20}
                onClick={closeDrawer}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center rounded-md dark:bg-dark200 h-32 bg-[#efefef] mb-4">
              <div className="text-4xl text-gray-400">
                {selectedFile.type === "txt" && "📄"}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-5">{selectedFile.name}</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <h4 className="dark:text-white font-semibold space-y-8 mb-5 p-3 text-gray-800">
                Information
              </h4>
              <p className="text-black  space-y-8 mb-5 dark:border-y-darkborder border-t-2 p-3">
                <span className="text-gray-700 dark:text-white">Created By</span> {selectedFile.createdBy}
              </p>
              <p className="space-y-8 mb-5 border-t-2 dark:border-y-darkborder p-3">
                <span className="text-gray-700 dark:text-white">Created At</span> {selectedFile.createdAt}
              </p>
              <p className="space-y-8 mb-5 border-t-2 p-3 dark:border-y-darkborder">
                <span className="text-gray-700 dark:text-white">Modified At</span> {selectedFile.modifiedAt}
              </p>
              <p className="space-y-8 mb-5 border-t-2 border-b-2 p-3 dark:border-y-darkborder dark:border-x-darkborder">
                <span className="text-gray-700 dark:text-white">Size</span> {selectedFile.size}
              </p>
            </div>
          </div>
          <div className="px-4 py-3 dark:text-white dark:bg-dark bg-gray-50 flex justify-center gap-4">
            <button className="rounded-lg bg-200 text-white sm:px-7 p-2 flex items-center justify-center cursor-pointer">
              Download
            </button>
            <button className="rounded-lg bg-100 text-black sm:px-7 p-2 flex items-center justify-center cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
  
  );
};

export default FileCards;
