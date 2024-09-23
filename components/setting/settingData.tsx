"use client";
import React, { useState } from "react";
import { User, Lock, CreditCard, Bell, Users } from "lucide-react";
import Link from "next/link";
import Account from "./account";
import Security from "./security";
import Plan from "./plan";
import Notifications from "./notifications";
import Team from "./team";
import { Drawer, IconButton, Menu } from "@mui/material";
import { Button } from "@material-tailwind/react";
import { Close } from "@mui/icons-material";

const SettingData = () => {
  const [activeTab, setActiveTab] = useState("Account");

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        return <Account />;
      case "Security":
        return <Security />;
      case "Plan & Billing":
        return <Plan />;
      case "Notifications":
        return <Notifications />;
      case "Team":
        return <Team />;
      default:
        return <div>Content for {activeTab}</div>;
    }
  };

  const DrawerList = (
    <nav className="relative">
      <div className="p-8">
        <h1 className="text-2xl font-extrabold">Settings</h1>
      </div>
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
      <IconButton
        onClick={handleDrawerClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: "black",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Close />
      </IconButton>
    </nav>
  );

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-dark">
      <div className="w-[25%] bg-white shadow-md dark:bg-dark200 lg:block hidden">
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
        <Drawer open={open} onClose={handleDrawerClose}>
          {DrawerList}
        </Drawer>
      </div>
      <div className="flex-1 p-4 sm:p-8">
        <div className="text-sm breadcrumbs">
          <ul className="flex gap-2 items-center">
            <div className="lg:hidden">
              <Button
                onClick={toggleDrawer(true)}
                className="bg-transparent shadow-none border p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </div>
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
