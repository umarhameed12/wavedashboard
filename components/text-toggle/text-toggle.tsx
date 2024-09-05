"use client";
import React, { useState } from "react";
import ParaOpen from "@/assets/icons/para-open.svg";
import ParaOpenDark from "@/assets/icons/para-open-dark.svg";

import ParaClose from "@/assets/icons/para-close.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
interface TextToggle {
  title: string;
  para: string;
}

export default function TextToggle({ title, para }: TextToggle) {
  const [toggle, setToggle] = useState(false);
  const { theme } = useTheme();
  const toggleHandler = () => {
    if (toggle === false) setToggle(true);
    else setToggle(false);
    console.log("clciked");
  };

  return (
    <div
      className="p-3 my-4 bg-white dark:bg-dark rounded-lg cursor-pointer"
      onClick={toggleHandler}
    >
      <div className="mb-4 flex justify-between items-center ">
        <h2
          className={`${
            toggle && "text-blue-500"
          }  sm:text-lg xs:text-xs font-medium"`}
        >
          {title}
        </h2>

        {toggle ? (
          <button>
            <Image
              src={ParaClose}
              alt="Para close Image"
              className="text-red "
            />
          </button>
        ) : (
          <button>
            <Image
              src={
                theme == "dark"
                  ? ParaOpen
                  : theme == "system"
                  ? ParaOpen
                  : ParaOpenDark
              }
              alt="Para Open image"
              className="text-red to-red"
            />
          </button>
        )}
      </div>
      {toggle ? (
        <p className="text-justify sm:text-base xs:text-xs">{para}</p>
      ) : null}
    </div>
  );
}
