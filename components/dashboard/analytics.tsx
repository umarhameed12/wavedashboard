"use client";
import React, { useEffect, useState } from "react";
import Button from "./button";
import Image from "next/image";
import ArrowWhite from "@/assets/analytics/arrow-white.svg";
import Blue from "@/assets/analytics/light-blue.svg";
import Orange from "@/assets/analytics/orange.svg";
import Yellow from "@/assets/analytics/yellow.svg";
import DarkBlue from "@/assets/analytics/dark-blue.svg";
import Cyan from "@/assets/analytics/cyan.svg";
import Analytic from "./analytic";
import Link from "next/link";
import axios from "axios";
import Spinner from "../spinner";
import QuestionMark from "@/assets/dashboard/question-circle.svg";
import QuestionMarkWhite from "@/assets/dashboard/question-circle-white.svg";
import { useTheme } from "next-themes";

export default function Analytics() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const getAnalyticsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/analytics");
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAnalyticsData();
  }, []);
  return (
    <div className="w-full dark:bg-dark bg-white  rounded-xl p-8">
      {loading && (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <>
          <div className="flex sm:flex-row xs:flex-col sm:items-center xs:items-start sm:space-y-0 xs:space-y-4 justify-between">
            <div className="flex  justify-between  w-full items-center sm:justify-start gap-4">
              <div>
                <p className="text-xl font-medium capitalize">total balance</p>
                <p className="text-2xl font-semibold">${data?.totalBalance}</p>
              </div>
              <div>
                <p className="text-xl font-medium capitalize flex items-center gap-2">
                  <span>fiat</span>
                  {theme === "dark" ? (
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99999 18.4587C4.05999 18.4587 0.0416565 14.4403 0.0416565 9.50032C0.0416565 4.56032 4.05999 0.541992 8.99999 0.541992C13.94 0.541992 17.9583 4.56032 17.9583 9.50032C17.9583 14.4403 13.94 18.4587 8.99999 18.4587ZM8.99999 1.79199C4.74916 1.79199 1.29166 5.24949 1.29166 9.50032C1.29166 13.7512 4.74916 17.2087 8.99999 17.2087C13.2508 17.2087 16.7083 13.7512 16.7083 9.50032C16.7083 5.24949 13.2508 1.79199 8.99999 1.79199ZM9.59244 10.637C9.61244 10.577 9.72584 10.3495 10.3358 9.9412C11.3192 9.28203 11.7592 8.34028 11.5767 7.28861C11.3917 6.22611 10.5258 5.35368 9.47077 5.16785C8.69994 5.03118 7.91913 5.2386 7.32579 5.73527C6.72663 6.23777 6.38341 6.97523 6.38341 7.7594C6.38341 8.1044 6.66341 8.3844 7.00841 8.3844C7.35341 8.3844 7.63341 8.1044 7.63341 7.7594C7.63341 7.34607 7.81422 6.95708 8.12922 6.69291C8.44255 6.43041 8.84245 6.32291 9.25328 6.39791C9.79162 6.49291 10.2508 6.95703 10.3458 7.50203C10.3816 7.70787 10.4909 8.33281 9.64004 8.90198C8.95088 9.36448 8.55919 9.78865 8.40835 10.2386C8.29835 10.5661 8.47494 10.9203 8.80244 11.0303C8.86827 11.0528 8.93497 11.0628 9.0008 11.0628C9.2608 11.0628 9.5041 10.8978 9.59244 10.637ZM9.85 13.2503C9.85 12.7903 9.4775 12.417 9.01667 12.417H9.00833C8.54833 12.417 8.17907 12.7903 8.17907 13.2503C8.17907 13.7103 8.55667 14.0837 9.01667 14.0837C9.47667 14.0837 9.85 13.7103 9.85 13.2503Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99999 18.4587C4.05999 18.4587 0.0416565 14.4403 0.0416565 9.50032C0.0416565 4.56032 4.05999 0.541992 8.99999 0.541992C13.94 0.541992 17.9583 4.56032 17.9583 9.50032C17.9583 14.4403 13.94 18.4587 8.99999 18.4587ZM8.99999 1.79199C4.74916 1.79199 1.29166 5.24949 1.29166 9.50032C1.29166 13.7512 4.74916 17.2087 8.99999 17.2087C13.2508 17.2087 16.7083 13.7512 16.7083 9.50032C16.7083 5.24949 13.2508 1.79199 8.99999 1.79199ZM9.59244 10.637C9.61244 10.577 9.72584 10.3495 10.3358 9.9412C11.3192 9.28203 11.7592 8.34028 11.5767 7.28861C11.3917 6.22611 10.5258 5.35368 9.47077 5.16785C8.69994 5.03118 7.91913 5.2386 7.32579 5.73527C6.72663 6.23777 6.38341 6.97523 6.38341 7.7594C6.38341 8.1044 6.66341 8.3844 7.00841 8.3844C7.35341 8.3844 7.63341 8.1044 7.63341 7.7594C7.63341 7.34607 7.81422 6.95708 8.12922 6.69291C8.44255 6.43041 8.84245 6.32291 9.25328 6.39791C9.79162 6.49291 10.2508 6.95703 10.3458 7.50203C10.3816 7.70787 10.4909 8.33281 9.64004 8.90198C8.95088 9.36448 8.55919 9.78865 8.40835 10.2386C8.29835 10.5661 8.47494 10.9203 8.80244 11.0303C8.86827 11.0528 8.93497 11.0628 9.0008 11.0628C9.2608 11.0628 9.5041 10.8978 9.59244 10.637ZM9.85 13.2503C9.85 12.7903 9.4775 12.417 9.01667 12.417H9.00833C8.54833 12.417 8.17907 12.7903 8.17907 13.2503C8.17907 13.7103 8.55667 14.0837 9.01667 14.0837C9.47667 14.0837 9.85 13.7103 9.85 13.2503Z"
                        fill="#091731"
                      />
                    </svg>
                  )}
                </p>
                <p className="text-2xl font-semibold">${data?.fiat}</p>
              </div>
            </div>
            <div className="w-full sm:w-[20%]">
              <Link href={"/dashboard/analytics/products"}>
                <Button
                  bg="bg-200"
                  color="text-white"
                  text="view analytics"
                  image={<Image src={ArrowWhite} alt={"icon"} />}
                />
              </Link>
            </div>
          </div>
          <div className="w-full gap-8 flex sm:flex-row xs:flex-col mt-8">
            <Analytic
              border="border-borderBlue"
              image={<Image src={Blue} alt={"sphere"} className="w-full" />}
              text="sales"
              value={
                <div className="flex  gap-2 items-center">
                  <p className="text-lg font-semibold">{data?.sales}</p>
                  {/* <p className="text-red">-4%</p> */}
                </div>
              }
              showIncremental
            />
            <Analytic
              border="border-borderOrange"
              image={<Image src={Orange} alt={"sphere"} />}
              text="total profit"
              value={
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-semibold">${data?.totalProfit}</p>
                </div>
              }
            />
            <Analytic
              border="border-borderMalt"
              image={<Image src={Yellow} alt={"sphere"} />}
              text="new customers"
              value={
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-semibold">{data?.newCustomers}</p>
                  {/* <p className="text-green">+7</p> */}
                </div>
              }
              showIncremental
            />
            <Analytic
              border="border-borderDarkBlue"
              image={<Image src={DarkBlue} alt={"sphere"} />}
              text="income"
              value={
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-semibold">${data?.income}</p>
                </div>
              }
            />
            <Analytic
              border="border-borderCyan"
              image={<Image src={Cyan} alt={"sphere"} />}
              text="expenses"
              value={
                <div className="flex gap-2 items-center">
                  <p className="text-lg font-semibold">${data?.expenses}</p>
                </div>
              }
            />
          </div>
        </>
      )}
    </div>
  );
}
