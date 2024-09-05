"use client";
import React, { ReactNode } from "react";

import P1 from "@/assets/team/p1.svg";

import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
interface ChatsInbox {
  image: any;
  name: String;
  text: String;
  time: String;
  notication: ReactNode;
}
export default function ChatsInbox({
  image,
  name,
  text,
  time,
  notication,
}: ChatsInbox) {
  const { theme } = useTheme();

  return (
    <div className="space-y-4">
      <div className="flex sm:flex-row xs:flex-col gap-4 p-2  w-full sm:items-center hover:bg-blue-200 dark:hover:bg-dark200 delay-150">
        <Image src={image} className="w-14" alt="" />
        <div className="space-y-2">
          <h2 className="text-xl font-medium">{name}</h2>
          <p className="text-base text-gray-400">{text}</p>
        </div>
        <div className="sm:ml-auto  space-y-2 sm:text-right text-gray-400">
          <p>{time}</p>
          {notication}
        </div>
      </div>
    </div>
  );
}
