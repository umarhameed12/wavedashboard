"use client";
import React from "react";
import Search from "@/assets/icons/search.svg";
import SearchDark from "@/assets/icons/search-dark.svg";

import Plus from "@/assets/icons/plus.svg";
import Download from "@/assets/icons/download.svg";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function ProductHeader() {
  const { theme } = useTheme();
  return (
    <div className="flex md:flex-row xs:flex-col  md:justify-between md:items-center  space-y-2 mb-4 ">
      <h1 className="font-medium text-xl dark:text-white">Product List</h1>
      <div className="flex md:flex-row xs:flex-col  gap-3 font-medium">
        <div className="bg-100 dark:bg-dark200 flex gap-2 py-2 px-3 rounded-lg">
          <Image
            src={theme === "dark" ? SearchDark : Search}
            alt={"Search Icon"}
          />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Product"
            className="border-none bg-transparent outline-none w-full dark:text-white "
          />
        </div>
        <Link href={"/dashboard/products/addproducts"}>
          <button className="bg-button text-blue-600 flex gap-2 p-3 w-full justify-center items-center rounded-lg">
            Add Product <Image src={Plus} alt="plus icon" />
          </button>
        </Link>

        <button className="bg-200 text-white flex gap-2 justify-center items-center py-2 px-3 rounded-lg ">
          Download <Image src={Download} alt="Download icon" />
        </button>
      </div>
    </div>
  );
}
