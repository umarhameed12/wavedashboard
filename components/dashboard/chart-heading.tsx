"use client";
import Image from "next/image";
import React, { useState } from "react";
import More from "@/assets/standard/more.svg";
import DaysFilter from "./DaysFilter";
import { useTheme } from "next-themes";
import DotDark from "@/assets/dashboard/dotDark.svg";
import DotLight from "@/assets/dashboard/dotLight.svg";
import Download from "@/assets/icons/download.svg";
import DownDark from "@/assets/dashboard/drop-down.svg";

export default function ChartHeading({ heading }: { heading: string }) {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else setIsOpen(false);
  };
  return (
    <div className="w-full flex  md:flex-row xs:flex-col md:justify-between md:items-center relative  mb-8">
      <p className="text-xl font-medium capitalize">{heading}</p>
      <div className="flex md:flex-row xs:flex-col gap-3">
        <button className="bg-button text-200 rounded-md py-2 px-4 w-full flex justify-center items-center gap-1 text-sm font-normal ">
          Monthly <Image src={DownDark} alt="download" />
        </button>
        <button className="bg-200 text-white rounded-md py-2 px-4 w-full flex justify-center items-center gap-1 text-sm font-normal">
          Download <Image src={Download} alt="download" />
        </button>

        <button onClick={toggleHandler} className="hidden ">
          <Image
            src={theme == "dark" ? DotDark : DotLight}
            alt="dot icon"
            className="w-14"
          />
        </button>
        {isOpen ? <DaysFilter /> : null}
      </div>
    </div>
  );
}
