import React, { ReactNode } from "react";
interface CardProps {
  icon: ReactNode;
  title: string;
  para: string;
}
const NotificationsCard = ({ icon, title, para }: CardProps) => {
  return (
    <div className=" relative my-4 bg-white dark:bg-dark p-4 rounded-md flex items-center gap-4">
      {icon}

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
        <p className="text-xs font-normal text-gray-500 dark:text-white">
          about 2 years ago
        </p>
      </div>
    </div>
  );
};

export default NotificationsCard;
