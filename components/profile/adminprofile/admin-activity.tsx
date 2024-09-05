import React from "react";
interface AdminActivity {
  date: string;
  time: string;
  status: string;
  text: string;
}
export default function AdminActivity({
  date,
  time,
  status,
  text,
}: AdminActivity) {
  return (
    <>
      <div className="absolute h-full sm:my-20 xs:my-28 mx-14 z-0">
        <div className=" w-1 border-l-8 border-dotted border-blue-400 h-5/6 "></div>
      </div>
      <h1>Activity</h1>
      <div className="relative my-10 z-10">
        <div className="space-y-4">
          <h2 className="text-center font-bold sm:text-xl xs:text-sm text-200 xs:relative sm:static xs:left-8">
            {date}
          </h2>
          <div className="flex gap-8 items-center ">
            <p className=" bg-dark200  rounded-full  text-white sm:px-6 sm:py-3 xs:px-6 xs:py-2 sm:text-base xs:text-xs sm:static xs:relative xs:left-4   ">
              {time}
            </p>
            <div className="space-y-2">
              <h4 className="capitalize">{status}</h4>
              <p className="xs:text-xs sm:text-base">{text} </p>
            </div>
          </div>
          <div className="flex gap-8 items-center ">
            <p className=" bg-dark200  rounded-full  text-white sm:px-6 sm:py-3 xs:px-6 xs:py-2 sm:text-base xs:text-xs sm:static xs:relative xs:left-4   ">
              {time}
            </p>
            <div className="space-y-2">
              <h4 className="capitalize">{status}</h4>
              <p className="xs:text-xs sm:text-base">{text} </p>
            </div>
          </div>
          <div className="flex gap-8 items-center ">
            <p className=" bg-dark200  rounded-full  text-white sm:px-6 sm:py-3 xs:px-6 xs:py-2 sm:text-base xs:text-xs sm:static xs:relative xs:left-4   ">
              {time}
            </p>
            <div className="space-y-2">
              <h4 className="capitalize">{status}</h4>
              <p className="xs:text-xs sm:text-base">{text} </p>
            </div>
          </div>
          <div className="flex gap-8 items-center ">
            <p className=" bg-dark200  rounded-full  text-white sm:px-6 sm:py-3 xs:px-6 xs:py-2 sm:text-base xs:text-xs sm:static xs:relative xs:left-4   ">
              {time}
            </p>
            <div className="space-y-2">
              <h4 className="capitalize">{status}</h4>
              <p className="xs:text-xs sm:text-base">{text} </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-10 z-10">
        <div className="space-y-4">
          <h2 className="text-center font-bold sm:text-xl xs:text-sm text-200 xs:relative sm:static xs:left-8">
            {date}
          </h2>
          <div className="flex gap-8 items-center ">
            <p className=" bg-dark200  rounded-full  text-white sm:px-6 sm:py-3 xs:px-6 xs:py-2 sm:text-base xs:text-xs sm:static xs:relative xs:left-4   ">
              {time}
            </p>
            <div className="space-y-2">
              <h4 className="capitalize">{status}</h4>
              <p className="xs:text-xs sm:text-base">{text} </p>
            </div>
          </div>
          <div className="flex gap-8 items-center ">
            <p className=" bg-dark200  rounded-full  text-white sm:px-6 sm:py-3 xs:px-6 xs:py-2 sm:text-base xs:text-xs sm:static xs:relative xs:left-4   ">
              {time}
            </p>
            <div className="space-y-2">
              <h4 className="capitalize">{status}</h4>
              <p className="xs:text-xs sm:text-base">{text} </p>
            </div>
          </div>
          <div className="flex gap-8 items-center ">
            <p className=" bg-dark200  rounded-full  text-white sm:px-6 sm:py-3 xs:px-6 xs:py-2 sm:text-base xs:text-xs sm:static xs:relative xs:left-4   ">
              {time}
            </p>
            <div className="space-y-2">
              <h4 className="capitalize">{status}</h4>
              <p className="xs:text-xs sm:text-base">{text} </p>
            </div>
          </div>
          <div className="flex gap-8 items-center ">
            <p className=" bg-dark200  rounded-full  text-white sm:px-6 sm:py-3 xs:px-6 xs:py-2 sm:text-base xs:text-xs sm:static xs:relative xs:left-4   ">
              {time}
            </p>
            <div className="space-y-2">
              <h4 className="capitalize">{status}</h4>
              <p className="xs:text-xs sm:text-base">{text} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
