import Image from "next/image";
import React from "react";
import Search from "@/assets/icons/search.svg";
import SearchDark from "@/assets/icons/search-dark.svg";
import Download from "@/assets/icons/download.svg";
import { useTheme } from "next-themes";

export default function IndividualHeader() {
  const { theme } = useTheme();

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="flex justify-between ">
          <p className="font-bold text-base border-blue-400 border-b-4 w-full text-center">
            Invoice
          </p>
          <p className="font-bold text-base w-full text-center">Activity</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-neutral-100 flex gap-2 p-3 w-full rounded-lg dark:bg-dark200">
            <Image
              src={theme === "dark" ? SearchDark : Search}
              alt={"Search Icon"}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Invoices"
              className="border-none w-full bg-transparent outline-none "
            />
          </div>
          <button className="bg-200 text-white flex gap-2 p-3 rounded-lg w-full justify-center ">
            Download <Image src={Download} alt="Download icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
