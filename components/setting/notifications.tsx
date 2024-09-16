import { Button } from "@material-tailwind/react";
import { Switch } from "@mui/material";
import React from "react";

const Notifications = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="space-y-5 lg:w-3/4 w-full">
      <h2 className="text-xl font-extrabold">Notifications</h2>
      <div className="space-y-4">
        <div>
          <p className="text-base">Alerts</p>
        </div>
        <div className="w-full space-y-3">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-base">Communication</p>
              <Switch {...label} />
            </div>
            <p className="text-sm">
              Get news, announcements, and product updates.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-base">Security</p>
              <Switch {...label} />
            </div>
            <p className="text-sm">
              Get important notifications about your account security.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-base">Meetups</p>
              <Switch {...label} />
            </div>
            <p className="text-sm">
              Get an email when a Meetup is posted close to my location.
            </p>
          </div>
        </div>
        <div className="pt-10">
          <p className="text-base">Account Activity</p>
          <p className="text-sm font-semibold py-5">Email me when</p>
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm">Someone comments on one of my items</p>
              <Switch {...label} />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Someone mentions me</p>
              <Switch {...label} />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Someone follows me</p>
              <Switch {...label} />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">Someone replies to my job posting</p>
              <Switch {...label} />
            </div>
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

export default Notifications;
