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
import { useSidebar } from "@/app/context/sidebar-context";

export default function Sidebar() {
  const { theme } = useTheme();
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);
  const [hasData, setHasData] = useState(false);  

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsOpen(!isCollapsed);
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
          onMouseEnter={() => !isCollapsed && setIsOpen(true)}
          onMouseLeave={() => !isCollapsed && setIsOpen(false)}
          className={`${
            isOpen || isCollapsed ? "w-[17rem]" : "w-[5rem]"
          } bg-primary dark:bg-dark text-white p-4 sticky top-0 lg:block xs:hidden transition-all duration-300`}
        >
          <div
            onClick={toggleCollapse}
            className="cursor-pointer absolute w-8 h-8 rounded-full border border-200 dark:border-darkborder flex items-center justify-center top-6 -right-4 z-10 bg-white dark:bg-dark"
          >
            {isCollapsed ? (
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
              isCollapsed === false
                ? "justify-center px-2"
                : "justify-start  px-10"
            }"w-full flex jus items-center py-2 mb-5 relative"`}
          >
            <FullLogo isOpen={isCollapsed || isOpen} />
          </div>
          <div className="space-y-3">
            {/* <h1
              className={`${
                isOpen ? "" : "hidden"
              } uppercase text-white text-xs font-semibold`}
            >
              Management
            </h1> */}
            <div className="max-h-[95vh] overflow-y-scroll no-scrollbar ">
              <SidebarItem isOpen={isCollapsed || isOpen} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
