"use client";
import React, { useContext, useState } from "react";
import FullLogo from "../logo/full-logo";
import SidebarItem from "./sidebar-item";
import { managementItems } from "./sidebar-data";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { MdClose } from "react-icons/md";
import IconLogo from "../logo/icon-logo";
export default function SidebarModel({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <Drawer
      open={isOpen}
      onClose={setIsOpen}
      overlayProps={{
        className: "bg-black bg-opacity-50 dark:bg-opacity-50 min-h-screen  ",
      }}
      className="p-4 bg-primary dark:bg-dark z-[9999999999999999999999999999999999999999999999999] "
      style={{ zIndex: "9999" }}
    >
      <div className="justify-start  px-10 w-full flex items-center py-2 mb-5 relative">
        <div
          className="flex justify-between items-center w-full"
          onClick={setIsOpen}
        >
          {/* <IconLogo /> */}
          <FullLogo isOpen={isOpen} />

          {/* <IconButton onClick={setIsOpen} className="absolute top-0 right-0">
            <MdClose size={30} color={"#4584FF"} />
          </IconButton> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={setIsOpen}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-800 rounded-full bg-[#5a6373] px-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="max-h-screen overflow-y-scroll">
        <SidebarItem isOpen={isOpen} />
      </div>
    </Drawer>
  );
}
