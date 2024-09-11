import React, { ReactNode } from "react";
interface CardProps {
  icon: ReactNode;
  title: string;
  para: string;
  background?: string;
  color?: string;
  background1?: string;
}
const NotificationsCard = ({
  icon,
  title,
  para,
  background,
  color,
  background1
}: CardProps) => {
  return (
    <div
      className={`relative my-4 p-8 rounded-xl flex items-center gap-4 ${
        background ? background : "bg-white dark:bg-dark"
      } ${color ? color : "text-black dark:text-white"}`}
    >
      <div className={`rounded-full p-3 ${background1 ? background1 : "bg-[#DBDBDB]"}`}>{icon}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 absolute top-0 right-4 m-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>

      <div className="space-y-1">
        <h1 className="text-base font-medium">{title}</h1>
        <p className="text-sm font-medium line-clamp-1">{para}</p>
        <p
          className={`text-xs font-normal  ${
            color ? color : "text-gray-500 dark:text-white"
          }`}
        >
          about 2 years ago
        </p>
      </div>
    </div>
  );
};

export default NotificationsCard;
