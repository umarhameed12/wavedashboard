"use client";
import React, { useState } from "react";
import Search from "@/assets/icons/search.svg";
import SearchDark from "@/assets/icons/search-dark.svg";
import Plus from "@/assets/icons/plus.svg";
import Download from "@/assets/icons/download.svg";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import Button from "../buttons/button";

export default function InvoiceHeader() {
  const { theme } = useTheme();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex lg:flex-row xs:flex-col  lg:justify-between lg:items-center space-y-3 my-4  ">
        <h1 className="font-medium text-xl">Invoices List</h1>
        <div className="flex md:flex-row xs:flex-col   gap-3 font-medium">
          <div className="bg-100 dark:bg-dark200 flex gap-2 p-3 rounded-lg">
            <Image
              src={theme === "dark" ? SearchDark : Search}
              alt={"Search Icon"}
            />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Invoices"
              className="border-none bg-transparent outline-none"
            />
          </div>
          <button className="bg-button text-200 flex justify-center items-center gap-2 px-4 py-2 rounded-lg">
            <Link href={"/dashboard/invoices/printable"}>Add Invoice</Link>
            <Image src={Plus} alt="plus icon" />
          </button>
          <button className="bg-200 text-white flex justify-center items-center gap-2 p-3 rounded-lg ">
            Download <Image src={Download} alt="Download icon" />
          </button>
        </div>
      </div>
    </>
  );
}
