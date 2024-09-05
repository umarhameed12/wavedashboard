"use client";
import Image from "next/image";
import React, { useState } from "react";
import copyDark from "@/assets/cards/copy-dark.svg";
import copyLight from "@/assets/cards/copy-light.svg";
import { useTheme } from "next-themes";

interface CopyableText {
  text: string;
  width: string;
  height: string;
}

export default function CopyableText({ text, width, height }: CopyableText) {
  const { theme } = useTheme();
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("text copied");
  };
  return (
    <>
      <div
        className={`bg-white dark:bg-dark rounded-lg  ${height}  ${width} flex flex-col gap-10 p-2 scroll-m-4 overflow-x-hidden relative`}
      >
        <button
          className="absolute rounded-lg p-1  right-0"
          onClick={handleCopy}
        >
          <Image
            src={theme === "dark" ? copyDark : copyLight}
            alt="Copy Text"
            className="w-10"
          />
        </button>
        <p className="mt-14" id="copied">
          {text}
        </p>
      </div>
    </>
  );
}
