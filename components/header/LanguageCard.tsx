import Image from "next/image";
import React, { useState, useEffect } from "react";
import Langauge from "@/assets/header/language.svg";
import Down from "@/assets/header/chevron-down.svg";
import DownDark from "@/assets/header/down-dark.svg";

import { useTheme } from "next-themes";

export default function LanguageCard() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    if (isOpen == false) setIsOpen(true);
    else setIsOpen(false);
  };

  return (
    <>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={toggleHandler}
      >
        <Image
          src={Langauge}
          alt={"language"}
          className="bg-100 dark:bg-dark200 rounded-full w-10  p-2 cursor-pointer border-gray-300 border-solid border-[1px]"
        />

        <p className="text-base font-semibold cursor-pointer">En</p>

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
        <div className="absolute right-20 z-30 mt-40 w-36 origin-top-right bg-white dark:bg-dark200 rounded-md  ">
          <div className="flex items-center justify-between  hover:bg-gray-300 dark:hover:bg-dark p-2">
            <Image src={Langauge} alt={"language"} />
            <p>EN</p>
          </div>
          <div className="flex items-center justify-between hover:bg-gray-300 dark:hover:bg-dark p-2">
            <Image src={Langauge} alt={"language"} />
            <p>UR</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
