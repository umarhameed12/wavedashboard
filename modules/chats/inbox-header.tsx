"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "@/assets/icons/search.svg";
import SearchLight from "@/assets/icons/search-light.svg";
import { useTheme } from "next-themes";

export default function InboxHeader() {
  const { theme } = useTheme();

  return (
    <>
      <div className="bg-neutral-100 flex gap-2 p-3 w-full rounded-lg  dark:bg-dark200">
        <Image
          src={theme == "dark" ? SearchLight : Search}
          alt={"Search Icon"}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Email"
          className="border-none bg-transparent outline-none text-black"
        />
      </div>
      {/* </div> */}
      <div className="flex lg:justify-between xs:justify-center items-center gap-16 py-8 ">
        <Link
          href={""}
          className="bg-200 p-2  text-white text-center rounded-lg w-full font-semibold"
        >
          Chats
        </Link>
        <Link href={""} className="w-full  text-200 font-semibold">
          Contacts
        </Link>
      </div>
    </>
  );
}
