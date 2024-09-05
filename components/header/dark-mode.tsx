"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Moon from "@/assets/header/moon.svg";
import Sun from "@/assets/header/sun.svg";

export default function DarkMode() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="lg:flex-row flex xs:flex-col xs:w-1/2  bg-100 dark:bg-dark200 items-center rounded-full justify-between lg:w-40 border border-100 dark:border-darkborder px-2 py-1">
      <div className="bg-transparent dark:bg-white p-1 rounded-full">
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
