"use client";
import Image from "next/image";
import React, { useState } from "react";
import More from "@/assets/standard/more.svg";
import DaysFilter from "./DaysFilter";
import { useTheme } from "next-themes";
import DotDark from "@/assets/dashboard/dotDark.svg";
import DotLight from "@/assets/dashboard/dotLight.svg";

export default function Heading({ heading }: { heading: string }) {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    if (isOpen == false) {
      setIsOpen(true);
    } else setIsOpen(false);
  };
  return (
    <div className="w-full flex justify-between relative z-20 whitespace-nowrap">
      <p className="text-base font-medium capitalize sm:whitespace-nowrap xs:whitespace-break-spaces">
        {heading}
      </p>
      <button onClick={toggleHandler} className="">
        <Image src={theme == "dark" ? DotDark : DotLight} alt="dot icon" />
      </button>
      {isOpen ? <DaysFilter /> : null}
    </div>
  );
}
