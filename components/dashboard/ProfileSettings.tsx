import React, { useState } from "react";
import Profile from "@/assets/header/profile.svg";
import Down from "@/assets/header/chevron-down.svg";
import DownDark from "@/assets/header/down-dark.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { deleteCookie } from "cookies-next";

export default function ProfileSettings() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    if (isOpen == false) setIsOpen(true);
    else setIsOpen(false);
  };
  const handleLogout = () => {
    deleteCookie("accessToken");
  };
  return (
    <>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={toggleHandler}
      >
        <Image src={Profile} alt={"profile"} className="cursor-pointer" />
        <svg
          className="w-16 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m8 10 4 4 4-4"
          />
        </svg>
      </div>
      {isOpen ? (
        <div className="shadow-lg absolute right-8 z-30 mt-80 w-44 origin-top-right bg-white dark:bg-dark200 rounded-md space-y-3 divide-y ring-1 ring-black ring-opacity-5">
          <div className="py-1 space-y-2">
            <Link
              href={""}
              className="block hover:bg-100 dark:hover:bg-dark px-2 py-1 "
            >
              Profile
            </Link>
            <Link
              href={""}
              className="block hover:bg-100 dark:hover:bg-dark px-2 py-1 "
            >
              Account Settings
            </Link>
            <Link
              href={""}
              className="block hover:bg-100 dark:hover:bg-dark px-2 py-1 "
            >
              Manage Accounts
            </Link>
          </div>
          <div className="py-1 block dark:hover:bg-dark space-y-2">
            <Link
              href={""}
              className="block hover:bg-100 dark:hover:bg-dark px-2 py-1 "
            >
              Notifications
            </Link>
            <Link
              href={""}
              className="block hover:bg-100 dark:hover:bg-dark px-2 py-1 "
            >
              Settings
            </Link>
          </div>
          <Link href={"/"}>
            <div
              onClick={handleLogout}
              className="py-1 block hover:bg-100 dark:hover:bg-dark px-2 cursor-pointer"
            >
              Sign Out
            </div>
          </Link>
        </div>
      ) : null}
    </>
  );
}
