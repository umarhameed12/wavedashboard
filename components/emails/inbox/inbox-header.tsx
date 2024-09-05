"use client";
import React from "react";
import Search from "@/assets/icons/search.svg";
import SearchDark from "@/assets/icons/search-dark.svg";
import Plus from "@/assets/icons/plus.svg";
import Download from "@/assets/icons/inbox-download.svg";
import InboxCircle from "@/assets/icons/inbox-circle.svg";
import Delete from "@/assets/icons/delete-red.svg";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function InboxHeader() {
  const { theme } = useTheme();
  return (
    <div className="flex md:flex-row flex-col md:justify-between  md:items-center my-4 px-4  space-y-4 flex-wrap">
      <div className="flex  gap-3 lg:gap-16 lg:mt-4 font-medium items-center xs:justify-between space-x-4 flex-wrap">
        <h1 className="font-medium text-xl">Invoices List</h1>
        <div className="flex gap-3 md:gap-10 lg:hidden">
          <Link href={""}>
            <button>
              <Image src={Delete} alt="Delete Icon" />
            </button>
          </Link>
          <Link href={""}>
            <Image src={InboxCircle} alt="Delete Icon" />
          </Link>
          <Link href={""}>
            <Image src={Download} alt="Delete Icon" />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden gap-3 md:gap-6 lg:flex">
          <Link href={""}>
            <button>
              <Image src={Delete} alt="Delete Icon" />
            </button>
          </Link>
          <Link href={""}>
            <Image src={InboxCircle} alt="Delete Icon" />
          </Link>
          <Link href={""}>
            <Image src={Download} alt="Delete Icon" />
          </Link>
        </div>
        <div className="bg-100 flex gap-2 p-3  rounded-lg dark:bg-dark200">
          <Image
            src={theme === "dark" ? SearchDark : Search}
            alt={"Search Icon"}
          />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Email"
            className="border-none w-full bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
}
