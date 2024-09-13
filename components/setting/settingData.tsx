"use client";
import React, { useState } from "react";
import {
  User,
  Lock,
  CreditCard,
  Bell,
  Users,
  Key,
  Map,
  Hash,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { Switch } from "@mui/material";

const SettingData = () => {
  const [activeTab, setActiveTab] = useState("Account");
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const tabs = [
    {
      name: "Account",
      icon: User,
      description: "Manage your public profile and private information",
    },
    {
      name: "Security",
      icon: Lock,
      description: "Manage your password and 2-step verification preferences",
    },
    {
      name: "Plan & Billing",
      icon: CreditCard,
      description:
        "Manage your subscription plan, payment method and billing information",
    },
    {
      name: "Notifications",
      icon: Bell,
      description: "Manage when you'll be notified on which channels",
    },
    {
      name: "Team",
      icon: Users,
      description: "Manage your existing team and change roles/permissions",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Account":
        return (
          <div className="space-y-5">
            <h2 className="text-xl font-extrabold">Account</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-normal dark:text-[#E0E0E0]">
                  Profile
                </h3>
                <p className="text-sm text-red-500">
                  Following information is publicly displayed, be careful!
                </p>
              </div>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700 dark:text-[#E0E0E0]">
                    Name *
                  </span>
                  <div className="mt-1 relative rounded-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-3/4 pl-10 pr-3 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                    className="block w-3/4 px-4 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    defaultValue="brianh"
                  />
                </label>
                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <label className="block">
                    <span className="text-gray-700 dark:text-[#E0E0E0]">
                      Title
                    </span>
                    <input
                      type="text"
                      className="block px-4 w-full shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="Senior Frontend Developer"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700 dark:text-[#E0E0E0]">
                      Company
                    </span>
                    <input
                      type="text"
                      className="block w-full px-4 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      defaultValue="XYZ Software"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-gray-700 dark:text-[#E0E0E0]">
                    Notes
                  </span>
                  <textarea
                    className="block w-3/4 px-4 shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-[#1E1E1E] dark:text-[#E0E0E0] placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    rows={3}
                    defaultValue="Hey! This is Brian; husband, father and gamer. I'm mostly passionate about bleeding edge tech and chocolate! 🍫"
                  />
                </label>
              </div>
              <div className="mt-10 space-y-4">
                <div>
                  <p>Personal Information</p>
                  <p className="text-sm text-[#5F6368] dark:text-[#E0E0E0]">
                    Communication details in case we want to connect with you.
                    These will be kept private.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <label className="block">
                    <span className="text-gray-700 dark:text-[#E0E0E0]">
                      Email
                    </span>
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
                <div className="grid grid-cols-2 gap-4 w-3/4">
                  <label className="block">
                    <span className="text-gray-700 dark:text-[#E0E0E0]">
                      Country
                    </span>
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
              <div className="flex justify-end w-3/4 gap-4">
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
      case "Security":
        return (
          <div className="space-y-5">
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
                      className="block w-3/4 pl-10 pr-3 dark:bg-[#1E1E1E] dark:text-[#E0E0E0] shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                      className="block w-3/4 pl-10 pr-3 shadow-sm dark:bg-[#1E1E1E] dark:text-[#E0E0E0] py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                <div className="w-3/4">
                  <div className="flex items-center justify-between">
                    <p className="text-base">Enable 2-step authentication</p>
                    <Switch {...label} />
                  </div>
                  <p className="text-xs dark:text-[#E0E0E0]">
                    Protects you against password theft by requesting an
                    authentication code via SMS on every login.
                  </p>
                </div>
                <div className="w-3/4">
                  <div className="flex items-center justify-between">
                    <p className="text-base">
                      Ask to change password on every 6 months
                    </p>
                    <Switch {...label} />
                  </div>
                  <p className="text-xs dark:text-[#E0E0E0]">
                    A simple but an effective way to be protected against data
                    leaks and password theft.
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-3/4 gap-4">
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
      case "Plan & Billing":
        return (
          <div className="space-y-5">
            <h2 className="text-xl font-extrabold">Plan & Billing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-normal">Change your plan</h3>
                <p className="text-sm text-red-500">
                  Upgrade or downgrade your current plan.
                </p>
              </div>
              <div className="flex p-3 items-center gap-2 bg-[#E5F6FD] dark:bg-[#071318] w-3/4 rounded-xl">
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
                  Changing the plan will take effect immediately. You will be
                  charged for the rest of the current month.
                </p>
              </div>
              <div className="w-3/4 grid grid-cols-3 gap-4">
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
                    Update your billing information. Make sure to set your
                    location correctly as it could affect your tax rates.
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
                      className="block w-3/4 pl-10 pr-3 dark:bg-[#1E1E1E] dark:text-[#E0E0E0] shadow-sm py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </label>
                <div className="flex w-3/4 gap-3">
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
                <div className="flex w-3/4 gap-3">
                  <label className="block w-full">
                    <span className="text-gray-700 dark:text-[#E0E0E0]">
                      Country
                    </span>
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
              <div className="flex justify-end w-3/4 gap-4">
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
      case "Notifications":
        return (
          <div className="space-y-5">
            <h2 className="text-xl font-extrabold">Notifications</h2>
            <div className="space-y-4">
              <div>
                <p className="text-base">Alerts</p>
              </div>
              <div className="w-3/4 space-y-3">
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
                <div className="w-3/4 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">
                      Someone comments on one of my items
                    </p>
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
                    <p className="text-sm">
                      Someone replies to my job posting
                    </p>
                    <Switch {...label} />
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-3/4 gap-4">
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
      default:
        return <div>Content for {activeTab}</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-dark">
      <div className="w-64 bg-white shadow-md dark:bg-dark200">
        <hr />
        <div className="p-8">
          <h1 className="text-2xl font-extrabold">Settings</h1>
        </div>
        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex w-full px-6 py-3 text-left ${
                activeTab === tab.name
                  ? "bg-blue-100 text-blue-600 dark:bg-[#0A74DA1A]"
                  : "hover:bg-gray-100 dark:hover:bg-[#FFFFFF0D]"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              <div>
                <div className="font-medium">{tab.name}</div>
                <div className="text-xs text-gray-500">{tab.description}</div>
              </div>
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-8">
        <div className="text-sm breadcrumbs">
          <ul className="flex gap-2 items-center">
            <li className="flex gap-2 items-center text-200">
              <Link href="/dashboard">Home</Link>
              <p>/</p>
            </li>
            <li className="flex gap-2 items-center text-200">
              <Link href="/dashboard/setting">Settings</Link>
              <p>/</p>
            </li>
            <li className="text-200">{activeTab}</li>
          </ul>
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SettingData;
