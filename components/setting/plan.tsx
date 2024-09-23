import { Button } from "@material-tailwind/react";
import { CreditCard, Hash, Lock, Map, User } from "lucide-react";
import React from "react";

const Plan = () => {
  return (
    <div className="space-y-5 w-full">
      <h2 className="text-xl font-extrabold">Plan & Billing</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-normal">Change your plan</h3>
          <p className="text-sm text-red-500">
            Upgrade or downgrade your current plan.
          </p>
        </div>
        <div className="flex p-3 items-center gap-2 bg-[#E5F6FD] dark:bg-[#071318] w-full rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 dark:text-[#29B6F6]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
          <p className="text-sm dark:text-[#B8E7FB]">
            Changing the plan will take effect immediately. You will be charged
            for the rest of the current month.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-dark200 py-4 px-8 space-y-2 rounded-xl shadow-lg">
            <p className="font-semibold">BASIC</p>
            <p className="text-sm">Starter plan for individuals.</p>
            <p>$9.00/ month</p>
          </div>
          <div className="bg-white dark:bg-dark200 py-4 px-8 space-y-2 rounded-xl shadow-lg">
            <p className="font-semibold">Team</p>
            <p className="text-sm">Collaborate up to 10 people.</p>
            <p>$29.00 / month</p>
          </div>
          <div className="bg-white dark:bg-dark200 py-4 px-8 space-y-2 rounded-xl shadow-lg">
            <p className="font-semibold">Enterprise</p>
            <p className="text-sm">For bigger businesses.</p>
            <p>$99.00 / month</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-normal">Payment Details</h3>
            <p className="text-sm">
              Update your billing information. Make sure to set your location
              correctly as it could affect your tax rates.
            </p>
          </div>
          <label className="block">
            <span className="text-gray-700 dark:text-[#E0E0E0]">
              Card holder
            </span>
            <div className="mt-1 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 dark:bg-[#1E1E1E] dark:text-[#E0E0E0] shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </label>
          <div className="flex w-full sm:flex-row flex-col gap-3">
            <label className="block w-full">
              <span className="text-gray-700 dark:text-[#E0E0E0]">
                Card number
              </span>
              <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 shadow-sm dark:bg-[#1E1E1E] dark:text-[#E0E0E0] py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </label>
            <label className="block w-full">
              <span className="text-gray-700 dark:text-[#E0E0E0]">
                Expiration date
              </span>
              <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  className="block w-full pl-10 pr-3 shadow-sm dark:bg-[#1E1E1E] dark:text-[#E0E0E0] py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </label>
            <label className="block w-full">
              <span className="text-gray-700 dark:text-[#E0E0E0]">
                CVC / CVC2
              </span>
              <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 shadow-sm dark:bg-[#1E1E1E] dark:text-[#E0E0E0] py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </label>
          </div>
          <div className="flex w-full sm:flex-row flex-col gap-3">
            <label className="block w-full">
              <span className="text-gray-700 dark:text-[#E0E0E0]">Country</span>
              <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Map className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="date"
                  className="block w-full pl-10 pr-3 shadow-sm dark:bg-[#1E1E1E] dark:text-[#E0E0E0] py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </label>
            <label className="block w-full">
              <span className="text-gray-700 dark:text-[#E0E0E0]">
                Zip / Postal code
              </span>
              <div className="mt-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Hash className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 shadow-sm dark:bg-[#1E1E1E] dark:text-[#E0E0E0] py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button className="text-[#000000] dark:text-[#E0E0E0] border border-[#000000]">
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

export default Plan;
