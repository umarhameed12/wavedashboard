"use client";
import Link from "next/link";
import Image from "next/image";

import dots from "@/assets/task/dots.svg";
import ChatLight from "@/assets/task/chat.svg";
import ChatDark from "@/assets/task/chat-dark.svg";

import attachLight from "@/assets/task/attachment.svg";
import attachDark from "@/assets/task/attactment-dark.svg";
import Plus from "@/assets/task/Plus.svg";
import P1 from "@/assets/team/p1.svg";
import P2 from "@/assets/team/p2.svg";
import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { useDrag } from "react-dnd";

interface TaskCard {
  id: string;
  status: string;
  type: string;
  color: string;
  title: string;
  para: string;
  moveTodo: (id: string, status: string) => void;
}

export default function TaskCard({
  type,
  color,
  title,
  para,
  id,
  status,
}: TaskCard) {
  const { theme } = useTheme();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TODO_ITEM",
    item: { id, status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  console.log(isDragging);
  return (
    <div className="" ref={drag}>
      <div className="bg-white dark:bg-dark p-4 rounded-t-lg ">
        <div className="flex bg-white dark:bg-dark items-center justify-between  ">
          <p className={`${color} px-8 py-2 text-black rounded-full`}>{type}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </div>
        <div className="p-4 space-y-4">
          <span>{title}</span>
          <p>{para}</p>
        </div>
      </div>
      <div className="rounded-b-lg bg-white dark:bg-dark mt-2 p-4 flex justify-between items-center my-4">
        <div className="relative flex w-full">
          <Image src={P1} alt="" className="w-10" />
          <Image src={P2} alt="" className="w-10 absolute z-10 ml-8" />
          <Image src={P2} alt="" className="w-10 absolute z-10 ml-14" />
        </div>
        <div className="flex gap-8 ">
          <Link href={""} className="flex gap-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-800 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
            6
          </Link>
          <Link href={""} className="flex gap-2 justify-center items-center">
            <Image src={theme == "dark" ? attachLight : attachDark} alt="" />1{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
