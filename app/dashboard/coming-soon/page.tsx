"use client";
import Input from "@/components/forms/input";
import IconLogo from "@/components/logo/icon-logo";
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
const page = () => {
  const [email, setEmail] = useState("");
  const time = new Date();
  time.setSeconds(time.getSeconds() + 110000000);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn("onExpire"),
  });
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white dark:bg-dark m-4 w-full lg:w-2/5 p-4 rounded-md space-y-4">
        <IconLogo />
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Almost there!
          </h1>
          <p>
            Do you want to be notified when we are ready? Register below so we
            can notify you about the launch!
          </p>
        </div>
        <div>
          <div className="text-xl md:text-2xl lg:text-6xl gap-4 flex items-center justify-center  font-semibold">
            <div>
              <p>{days}</p>
              <span className="text-base font-medium text-center">days</span>
            </div>
            <div>
              <p>{hours}</p>
              <span className="text-base font-medium">Hours</span>
            </div>
            <div>
              <p>{minutes}</p>
              <span className="text-base font-medium">minutes</span>
            </div>
            <div>
              <p>{seconds}</p>
              <span className="text-base font-medium">seconds</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-8">
          <input
            type="text"
            placeholder="Email Address"
            className=" w-[70%] focus:outline-none bg-100 dark:bg-dark200  px-4 py-3 flex items-center rounded-lg space-x-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="rounded-full text-white p-2 bg-200"
            disabled={!email}
          >
            Notify me when you lunch
          </button>
        </div>
        <p className="text-sm font-normal">
          This isn't a newsletter subscription. We will send one email to you
          when we launch and then you will be removed from the list.
        </p>
      </div>
    </div>
  );
};

export default page;
