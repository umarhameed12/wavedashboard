"use client";
import React, { ReactNode } from "react";
import leaf from "@/assets/magicoon/leaf.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { lightFormat } from "date-fns";

interface IconCard {
  light: string;
  dark: string;
}
export default function IconCard({ dark, light }: IconCard) {
  const { theme } = useTheme();
  return (
    <div className="bg-white dark:bg-dark200 shadow-lg rounded-lg p-4 flex justify-center ">
      <Image src={theme === "dark" ? dark : light} alt="leaf" />
    </div>
  );
}
