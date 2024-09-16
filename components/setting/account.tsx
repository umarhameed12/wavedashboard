import { Button } from "@material-tailwind/react";
import { User } from "lucide-react";
import React from "react";

const Account = () => {
  return (
    <div className="space-y-5 lg:w-3/4 w-full">
      <h2 className="text-xl font-extrabold">Account</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-normal dark:text-[#E0E0E0]">Profile</h3>
          <p className="text-sm text-red-500">
            Following information is publicly displayed, be careful!
          </p>
        </div>
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 dark:text-[#E0E0E0]">Name *</span>
            <div className="mt-1 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue="Brian Hughes"
              />
            </div>
          </label>
          <label className="block">
            <span className="text-gray-700  dark:text-[#E0E0E0]">
              Username *
            </span>
            <input
              type="text"
              className="block w-full px-4 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              defaultValue="brianh"
            />
          </label>
          <div className="grid grid-cols-2 gap-4 w-full">
            <label className="block">
              <span className="text-gray-700 dark:text-[#E0E0E0]">Title</span>
              <input
                type="text"
                className="block px-4 w-full shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue="Senior Frontend Developer"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-[#E0E0E0]">Company</span>
              <input
                type="text"
                className="block w-full px-4 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue="XYZ Software"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-gray-700 dark:text-[#E0E0E0]">Notes</span>
            <textarea
              className="block w-full px-4 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows={3}
              defaultValue="Hey! This is Brian; husband, father and gamer. I'm mostly passionate about bleeding edge tech and chocolate! 🍫"
            />
          </label>
        </div>
        <div className="mt-10 space-y-4">
          <div>
            <p>Personal Information</p>
            <p className="text-sm text-[#5F6368] dark:text-[#E0E0E0]">
              Communication details in case we want to connect with you. These
              will be kept private.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <label className="block">
              <span className="text-gray-700 dark:text-[#E0E0E0]">Email</span>
              <input
                type="email"
                className="block px-4 w-full shadow-sm py-2 border dark:bg-[#1E1E1E] dark:text-[#E0E0E0] border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue="hughes.brian@mail.com"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-[#E0E0E0]">
                Phone Number
              </span>
              <input
                type="text"
                className="block w-full dark:bg-[#1E1E1E] dark:text-[#E0E0E0] px-4 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue="121-490-33-12"
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <label className="block">
              <span className="text-gray-700 dark:text-[#E0E0E0]">Country</span>
              <input
                type="text"
                className="block px-4 w-full shadow-sm py-2 border dark:bg-[#1E1E1E] dark:text-[#E0E0E0]  border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue="United States"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-[#E0E0E0]">
                Language
              </span>
              <input
                type="text"
                className="block w-full px-4 shadow-sm py-2 border dark:bg-[#1E1E1E] dark:text-[#E0E0E0] border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                defaultValue="English"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button className="text-[#000000] dark:text-white border border-[#000000]">
            Cancel
          </Button>
          <Button className="text-white bg-[#00A4EF] hover:bg-[#0078D7]">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Account;
