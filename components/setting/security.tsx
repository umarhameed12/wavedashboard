import { Button } from "@material-tailwind/react";
import { Switch } from "@mui/material";
import { Key } from "lucide-react";
import React from "react";

const Security = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="space-y-5 w-full">
      <h2 className="text-xl font-extrabold">Security</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-normal">Change your password</h3>
          <p className="text-sm text-red-500">
            You can only change your password twice within 24 hours!
          </p>
        </div>
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700 dark:text-[#E0E0E0]">
              Current password
            </span>
            <div className="mt-1 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 dark:bg-[#1E1E1E] dark:text-[#E0E0E0] shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-[#E0E0E0]">
              New password
            </span>
            <div className="mt-1 relative rounded-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 shadow-sm dark:bg-[#1E1E1E] dark:text-[#E0E0E0] py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </label>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-normal">Security preferences</h3>
            <p className="text-sm text-red-500 dark:text-[#E0E0E0]">
              Keep your account more secure with following preferences.
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <p className="text-base">Enable 2-step authentication</p>
              <Switch {...label} />
            </div>
            <p className="text-xs dark:text-[#E0E0E0]">
              Protects you against password theft by requesting an
              authentication code via SMS on every login.
            </p>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <p className="text-base">
                Ask to change password on every 6 months
              </p>
              <Switch {...label} />
            </div>
            <p className="text-xs dark:text-[#E0E0E0]">
              A simple but an effective way to be protected against data leaks
              and password theft.
            </p>
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

export default Security;
