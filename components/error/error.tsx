import Link from "next/link";
import React, { ReactNode } from "react";
interface Error {
  icon: ReactNode;
  title: string;
  para: string;
}
export default function Error({ icon, title, para }: Error) {
  return (
    <div className="bg-white dark:bg-dark m-4 p-6 rounded-lg h-[85vh] flex flex-col justify-center items-center text-center space-y-8">
      {/* <Image src={Error404} alt="Error ICON" />
       */}
      {icon}
      <h1 className="md:text-4xl xs:text-2xl font-semibold capitalize">
        {title}
      </h1>
      <p className="md:text-base xs:text-xs capitalize">{para}</p>
      <Link
        href={"/dashboard"}
        className="bg-blue-200 dark:bg-dark200 text-200 capitalize md:w-1/4 xs:w-full p-4 rounded-lg"
      >
        back To home
      </Link>
    </div>
  );
}
