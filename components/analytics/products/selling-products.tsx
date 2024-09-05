"use client";
import React from "react";
import Image from "next/image";
import ProductsDatatable from "./products-datatable";
import Search from "@/assets/icons/search.svg";
import SearchDark from "@/assets/icons/search-dark.svg";
import { useTheme } from "next-themes";

export default function SellingProducts() {
  const { theme } = useTheme();

  return (
    <div className="space-y-10">
      <div className="flex capitalize justify-between md:items-center xs:space-y-3 md:flex-row xs:flex-col">
        <h1 className="font-semibold text-2xl">top selling Products</h1>
        <div className="bg-neutral-100 flex gap-2 p-3  rounded-lg dark:bg-dark200">
          <Image
            src={theme === "dark" ? SearchDark : Search}
            alt={"Search Icon"}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Products"
            className="border-none w-full bg-transparent outline-none "
          />
        </div>
      </div>
      <div className="mt-10">
        <ProductsDatatable />
      </div>
    </div>
  );
}
