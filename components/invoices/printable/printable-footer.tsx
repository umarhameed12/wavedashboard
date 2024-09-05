import React, { ReactNode } from "react";
interface PrintableFooter {
  title: string;
  desc: string;
  printIcon: ReactNode;
  print: string;
  send: string;
}
export default function PrintableFooter({
  title,
  desc,
  printIcon,
  print,
  send,
}: PrintableFooter) {
  return (
    <div className="flex sm:flex-row xs:flex-col sm:justify-between sm:gap-y-0 xs:gap-y-4 sm:items-center w-full ">
      <div className="w-2/4 space-y-3">
        <h1 className="font-medium text-base">{title}:</h1>
        <p>{desc}</p>
      </div>

      <div className="space-x-4 flex md:w-1/3 xs:w-full">
        <button className="flex justify-center gap-4 bg-blue-50 text-blue-600 rounded-lg dark:bg-button px-3 py-4 w-full">
          {print} {printIcon}
        </button>
        <button className="bg-200 text-white  rounded-lg px-3 py-4 w-full">
          {send}
        </button>
      </div>
    </div>
  );
}
