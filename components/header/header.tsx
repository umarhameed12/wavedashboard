"use client";

import React, { useState, useEffect } from "react";
import HeaderSearch from "../forms/header-search";
import DarkMode from "./dark-mode";
import { LuSettings2 } from "react-icons/lu";
import { VscCloseAll } from "react-icons/vsc";
import SidebarModel from "../sidebar/sidebar-model";
import { HiMenuAlt2 } from "react-icons/hi";
import HeaderModal from "./header-modal";
import { useTheme } from "next-themes";
import LanguageCard from "./LanguageCard";
import ProfileSettings from "../dashboard/ProfileSettings";
import { Drawer } from "@material-tailwind/react";
import SidebarItem from "../sidebar/sidebar-item";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { theme } = useTheme();
  const { isCollapsed } = useSidebar();

  return (
    <>
      <div
        className={`w-full hidden lg:flex items-center bg-white dark:bg-dark  px-4 py-4 md:justify-between ${
          isCollapsed ? "pl-0" : "lg:pl-24"
        }`}
      >
        <p className="ml-4 hidden lg:block">Dashboard</p>

        <div className="lg:flex items-center w-8/12 space-x-4 xs:hidden xs:justify-around relative inline-block">
          <HeaderSearch />
          <DarkMode />

          {/* <Image
          src={
            theme === "system"
              ? NotificationsDark
              : theme === "dark"
              ? NotificationsDark
              : Notifications
          }
          alt={"notifications"}
          className="bg-100 dark:bg-dark200 rounded-full w-10  p-2  border-gray-300 border-solid border-[1px]"
        /> */}
          <svg
            className=" text-gray-800 dark:text-white rounded-full w-16 p-1 h-[2.4rem] border  border-gray-300 bg-100 dark:bg-dark200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" text-gray-800 dark:text-white rounded-full w-16 p-1 h-[2.4rem] border  border-gray-300 bg-100 dark:bg-dark200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <LanguageCard />
          <ProfileSettings />
        </div>

        <div className="lg:hidden flex items-center gap-2 w-full  ">
          <ProfileSettings />

          {/* {toggle ? (
          <div>
            <VscCloseAll
              size={30}
              color={"#4584FF"}
              onClick={() => setToggle(false)}
            />
            <HeaderModal />
          </div>
        ) : (
          <LuSettings2
            size={30}
            color={"#4584FF"}
            onClick={() => setToggle(true)}
          />
        )} */}
        </div>
      </div>
      <div className="w-full flex items-center justify-between bg-white dark:bg-dark  px-4 py-4 lg:hidden  z-30 sticky top-0  left-0 right-0 mb-8">
        <div className="flex items-center gap-2">
          <div className="block bg-white dark:bg-dark py-4 z-10 ">
            {isOpen === false && (
              // <HiMenuAlt2
              //   size={30}
              //   color={"#4584FF"}
              //
              // />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={() => setIsOpen(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
            {/* <div className="w-1/2 z-[9999999999999999999999999999999999999"> */}
            <SidebarModel isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
            {/* </div> */}

            {/* <SidebarMobile isOpen={isOpen} setIsOpen={() => setIsOpen(false)} /> */}
          </div>
          <p className="hidden xss:block lg:hidden">dashboard</p>
        </div>
        <div className="flex items-center gap-2">
          <DarkModeMobile />
          <ProfileSettings />
        </div>
      </div>
    </>
    // <div className="w-full flex items-center bg-white dark:bg-dark  px-4 py-4 md:justify-between sticky z-30 top-0">
  );
}

const SidebarMobile = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  return (
    <React.Fragment>
      <Drawer
        open={isOpen}
        onClose={setIsOpen}
        overlayProps={{
          className: "bg-black bg-opacity-50 dark:bg-opacity-50",
        }}
        className="p-4 bg-primary dark:bg-dark z-[9999999999999999999999999999999999999999999999999]"
      >
        <div className="max-h-screen overflow-y-scroll">
          <SidebarItem isOpen={isOpen} />
        </div>
      </Drawer>
    </React.Fragment>
  );
};

import Image from "next/image";
import Moon from "@/assets/header/moon.svg";
import Sun from "@/assets/header/sun.svg";
import { useSidebar } from "@/app/context/sidebar-context";

function DarkModeMobile() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="flex gap-2 border border-darkborder rounded-full py-1 px-3">
      <div className="bg-transparent dark:bg-dark p-1 rounded-full">
        <Image
          src={Moon}
          alt={"moon"}
          className="h-6 w-6 cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
        />
      </div>
      <div className="bg-white dark:bg-transparent p-1 rounded-full">
        <Image
          src={Sun}
          alt={"sun"}
          className="h-6 w-6 cursor-pointer"
          onClick={() => {
            setTheme("light");
          }}
        />
      </div>
    </div>
  );
}
