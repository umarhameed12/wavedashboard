"use client";
import React, { useState, useEffect } from "react";
import FullLogo from "../logo/full-logo";
import SidebarItem from "./sidebar-item";
import Image from "next/image";
import Right from "@/assets/header/chevron-right.svg";
import RightDark from "@/assets/header/chevron-right-dark.svg";
import LeftDark from "@/assets/header/chevron-left-dark.svg";
import LeftLight from "@/assets/header/chevron-left-light.svg";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  const [hasData, setHasData] = useState(false);
  const isOpenHandler = () => {
    if (isOpen === true) return setIsOpen(false);
    else setIsOpen(true);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasData(true);
    }
  }, []);
  return (
    <>
      {hasData && (
        <div
          className={`${
            isOpen ? "w-[18rem]" : "w-[5rem]"
          } bg-primary dark:bg-dark text-white p-4 sticky top-0 lg:block xs:hidden transition-all duration-150`}
        >
          <div
            onClick={isOpenHandler}
            className="cursor-pointer absolute w-8 h-8 rounded-full border border-200 dark:border-darkborder flex items-center justify-center top-6 -right-4 z-10 bg-white dark:bg-dark"
          >
            {isOpen ? (
              <Image
                src={
                  theme == "dark"
                    ? RightDark
                    : theme == "system"
                    ? RightDark
                    : Right
                }
                alt={"chevronright"}
                className=""
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Image
                src={theme == "dark" ? LeftLight : LeftDark}
                alt={"chevronright"}
                className=""
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
          <div
            className={`${
              isOpen === false ? "justify-center px-2" : "justify-start  px-10"
            }"w-full flex jus items-center py-2 mb-5 relative"`}
          >
            <FullLogo isOpen={isOpen} />
          </div>
          <div className="space-y-3">
            {/* <h1
              className={`${
                isOpen ? "" : "hidden"
              } uppercase text-white text-xs font-semibold`}
            >
              Management
            </h1> */}
            <div className="max-h-[83vh] overflow-y-scroll no-scrollbar ">
              <SidebarItem isOpen={isOpen} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
