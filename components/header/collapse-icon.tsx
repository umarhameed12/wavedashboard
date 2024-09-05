"use client";
import Right from "@/assets/header/chevron-right.svg";
import RightDark from "@/assets/header/chevron-right-dark.svg";
import LeftDark from "@/assets/header/chevron-left-dark.svg";
import LeftLight from "@/assets/header/chevron-left-light.svg";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { createContext, useState } from "react";
// const Context = createContext(false);
interface CollapseIcon {
  isOpen: boolean;
}
export default function CollapseIcon({ isOpen }: CollapseIcon) {
  // const [toggle, setToggle] = useState(isOpen);
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className="cursor-pointer absolute w-8 h-8 rounded-full border border-200 dark:border-darkborder flex items-center justify-center top-[0.6rem] -right-4 z-50 bg-white dark:bg-dark">
      {/* <Context.Provider value={toggle}> */}
      {isOpen ? (
        <Image
          src={theme == "dark" ? LeftLight : LeftDark}
          alt={"chevronright"}
          className="-ml-1"
        />
      ) : (
        <Image
          src={
            theme == "dark" ? RightDark : theme == "system" ? RightDark : Right
          }
          alt={"chevronright"}
          className="-ml-1"
        />
      )}
    </div>
  );
}
