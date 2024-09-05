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

export default function Analytics() {
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
                <p className="text-xl font-medium capitalize">fiat</p>
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
