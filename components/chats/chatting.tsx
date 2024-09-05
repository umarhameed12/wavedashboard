import React from "react";
import P1 from "@/assets/team/p1.svg";
import Cross from "@/assets/icons/cross.svg";
import Attachment from "@/assets/chats/attachment.svg";
import Smile from "@/assets/chats/smile.svg";
import Send from "@/assets/chats/send.svg";

import Image from "next/image";
import Link from "next/link";

export default function Chatting() {
  return (
    <div className="bg-white dark:bg-dark rounded-lg p-4">
      <div className="flex items-center gap-3">
        <Image src={P1} alt="Person image" className="w-14" />
        <div className="">
          <h2 className="text-base font-semibold">Peter Smith</h2>
          <div className="flex items-center gap-x-2">
            <span className="bg-green w-2 h-2 rounded-full "></span>
            <p className="text-sm text-green">Active Now</p>
          </div>
        </div>
        <Image src={Cross} alt="Cross Icon" className="ml-auto" />
      </div>
      <hr className="my-4" />
      <div className="flex flex-col">
        <p className="text-center text-gray-400 ">Today</p>
        <div className="mr-auto">
          <p className="bg-dark200 p-3 rounded-tl-lg text-white">Hello!</p>
          <span className="text-sm text-gray-400">10:24 PM</span>
        </div>
        <div className="ml-auto">
          <p className=" bg-blue-50 dark:bg-button rounded-tr-lg p-3">
            Hi, How are you? What about our next meeting?
          </p>
          <span className="text-sm text-gray-400">10:24 PM</span>
        </div>
        <div className="mr-auto">
          <p className="bg-dark200 p-3 rounded-tl-lg text-white">
            Yeah everything is fine
          </p>
          <span className="text-sm text-gray-400">10:24 PM</span>
        </div>
        <div className="mr-auto">
          <p className="bg-dark200 p-3 rounded-tl-lg text-white">
            & Next meeting tomorrow 10.00AM
          </p>
          <span className="text-sm text-gray-400">10:24 PM</span>
        </div>
        <div className="ml-auto">
          <p className=" bg-blue-50 rounded-tr-lg dark:bg-button p-3">
            Wow that's great
          </p>
          <span className="text-sm text-gray-400">10:24 PM</span>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex  items-center w-full gap-8 ">
        <div className="flex  items-center gap-4 w-3/5 bg-100 p-4 rounded-lg">
          <input
            type="text"
            placeholder="Type Message....."
            className="outline-none bg-transparent dark:text-black w-full"
          />
          <div className="ml-auto gap-4 flex">
            <Link href={""}>
              <Image src={Attachment} alt="Send Icon" />
            </Link>
            <Link href={""}>
              <Image src={Smile} alt="Send Icon" />
            </Link>
          </div>
        </div>
        <button
          type="button"
          className="bg-200 text-white rounded-lg w-2/5 flex justify-center p-4 gap-3"
        >
          Send <Image src={Send} alt="Send Icon" />
        </button>
      </div>
    </div>
  );
}
