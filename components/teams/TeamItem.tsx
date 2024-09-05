import React, { ReactNode } from "react";
import Email from "@/assets/team/email.svg";
import Call from "@/assets/team/call.svg";
import Image from "next/image";

interface TeamItems {
  icon: ReactNode;
  name: string;
  role: string;
}
export default function TeamCards({ icon, name, role }: TeamItems) {
  return (
    <div className="flex flex-col rounded-lg justify-center gap-2 items-center px-8 py-8  flex-grow-0 flex-shrink-0  bg-white dark:bg-dark  dark:text-white ">
      {icon}
      <h1 className="text-xl mt-8 font-medium text-center capitalize">
        {name}
      </h1>
      <span className="bg-100 rounded-full py-2  text-base font-normal  text-center px-4 mb-4  dark:bg-dark200 ">
        {role}
      </span>
      <button className=" bg-200 px-3 py-2 text-white gap-3  font-medium flex rounded-lg w-full items-center justify-center">
        Email <Image src={Email} alt={"Email icon"} />
      </button>
      <button className=" bg-blue-50 px-3 py-2 text-blue-600 font-medium gap-3  rounded-lg w-full mt-0 flex items-center justify-center dark:bg-button dark:text-blue-600">
        Call
        <Image src={Call} alt={"Call icon"} />
      </button>
    </div>
  );
}
