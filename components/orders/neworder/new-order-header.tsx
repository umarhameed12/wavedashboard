import React from "react";
import Search from "@/assets/icons/search.svg";
import Plus from "@/assets/icons/plus.svg";
import Download from "@/assets/icons/download.svg";
import Image from "next/image";

export default function NewOrderHeader() {
  return (
    <div className="flex justify-between items-center my-4 px-2 ">
      <h1>Order items</h1>
      <div className="md:flex xs:hidden gap-3 font-medium">
        <div className="bg-neutral-100 dark:bg-[#0D1116] flex gap-2 p-3 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            name=""
            id=""
            placeholder="Search Items"
            className="border-none bg-transparent outline-none text-black"
          />
        </div>

        <button className="bg-200 text-white flex items-center gap-2 p-3 rounded-lg ">
          Import CSV <Image src={Download} alt="Download icon" />
        </button>
      </div>
    </div>
  );
}
