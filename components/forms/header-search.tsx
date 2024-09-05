import React from "react";
import SearchIcon from "@/assets/header/search.svg";
import Image from "next/image";

export default function HeaderSearch() {
  return (
    <div className="w-full bg-100 dark:bg-dark200 border border-200 dark:border-darkborder flex items-stretch rounded-lg space-x-3">
      <input
        type="search"
        className="outline-none w-full focus:outline-none bg-transparent py-2 ml-2"
        placeholder="Search..."
      />
      <div className="flex items-center justify-center bg-200 w-1/6 rounded-r-lg cursor-pointer">
        <Image src={SearchIcon} alt={"search"} />
      </div>
    </div>
  );
}
