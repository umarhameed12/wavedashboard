"use client";
import React from "react";
import { useTheme } from "next-themes";
import Search from "@/assets/icons/search.svg";
import SearchDark from "@/assets/icons/search-dark.svg";
import Image from "next/image";

export default function IconHeader() {
  const { theme } = useTheme();

  return (
    <div className="flex sm:flex-row xs:flex-col justify-between sm:items-center space-y-3">
      <h2>Icons(56)</h2>
      <div className="bg-neutral-100 flex gap-2 p-3 md:w-1/4 xs:w-full rounded-lg dark:bg-dark200">
        <Image
          src={theme === "dark" ? SearchDark : Search}
          alt={"Search Icon"}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Icons"
          className="border-none w-full bg-transparent outline-none "
        />
      </div>
    </div>
  );
}
