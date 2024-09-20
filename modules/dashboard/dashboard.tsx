"use client";
import React, { useEffect, useState } from "react";
import TopProducts from "@/components/dashboard/top-products";
import TopCustomers from "@/components/dashboard/top-customers";
import Analytics from "@/components/dashboard/analytics";
import DashboardDatatable from "@/components/dashboard/dashboard-datatable";
import Image from "next/image";
import Map from "@/assets/dashboard/map.svg";
import AngleRight from "@/assets/top-products/angle-right.svg";
import DatatableHeader from "@/components/dashboard/datatableHeader";
import Heading from "@/components/dashboard/heading";
import Link from "next/link";
import Button from "@/components/dashboard/button";
import ChartHeading from "@/components/dashboard/chart-heading";
import SalesReportGraph from "@/components/dashboard/sales-report-graph";
import ActiveCustomersChart from "@/components/dashboard/active-customers-chart";
import PopularCategoriesChart from "@/components/dashboard/popular-categories-chart";
import { useSidebar } from "@/app/context/sidebar-context";

export default function Dashboard() {
  const [hasData, setHasData] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasData(true);
    }
  }, []);

  const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
  ];

  const { isCollapsed } = useSidebar();
  return (
    <>
      {hasData && (
        <div className="m-4">
          <div className="gap-4 flex lg:flex-row xs:flex-col justify-between  text-black dark:text-white w-full">
            <div className="lg:w-3/4 xs:w-full">
              <Analytics />
              <div className=" bg-white dark:bg-dark rounded-lg p-8 mt-4">
                <ChartHeading heading="Sale Report" />
                <SalesReportGraph />
              </div>
            </div>
            <div className="lg:w-1/4 xs:w-full flex lg:flex-col sm:flex-row xs:flex-col gap-4">
              <TopProducts />
              <TopCustomers />
            </div>
          </div>
          <div className="flex xl:flex-row xs:flex-col  gap-4 h-auto w-full">
            <div className="  bg-white dark:bg-dark rounded-lg mt-8 xl:w-2/5 sm:w-full p-8 ">
              <Heading heading="Popular Categories" />
              <PopularCategoriesChart />
            </div>
            <div
              className={`bg-white dark:bg-dark rounded-lg sm:p-8 xs:p-4 mt-8 ${
                isCollapsed ? "xl:w-[59%]" : "xl:w-2/3 xs:w-full"
              }`}
            >
              <ChartHeading heading="Active Customers" />
              <ActiveCustomersChart />
            </div>
          </div>
          <div className=" gap-4 flex lg:flex-row xs:flex-col justify-between  text-black dark:text-white w-full">
            <div className="bg-white dark:bg-dark rounded-lg sm:p-8 xs:p-4 mt-8 lg:w-4/5 xs:w-full">
              <DatatableHeader />
              <DashboardDatatable />
            </div>
            <div className="bg-white dark:bg-dark p-4 space-y-4 items-center rounded-lg mt-8 lg:w-1/3 xs:w-full">
              <div className="flex justify-between items-center ">
                <Heading heading="Order Stats" />
              </div>
              <Image src={Map} alt="map image" className="w-full" />
              <div>
                <Link href={"/dashboard"} className="mt-8">
                  <Button
                    text="all customers"
                    image={<Image src={AngleRight} alt={"icon"} />}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
