import { expenses, profit } from "@/components/analytics/products/product-data";
import SellingProducts from "@/components/analytics/products/selling-products";
import TotalCards from "@/components/analytics/products/total-cards";
import ChartHeading from "@/components/dashboard/chart-heading";
import PopularCategoriesChart from "@/components/dashboard/popular-categories-chart";
import SalesReportGraph from "@/components/dashboard/sales-report-graph";
import React from "react";

export default function Products() {
  return (
    <div className="m-4">
      <div className="flex lg:flex-row xs:flex-col gap-4 w-full">
        <div className="lg:w-2/3 xs:w-full bg-white dark:bg-dark p-4 rounded-lg">
          <SellingProducts />
        </div>
        <div className="lg:w-1/3 xs:w-full">
          <div className="flex gap-2 sm:flex-row xl:flex-row lg:flex-col xs:flex-col">
            <div className="bg-white dark:bg-dark p-4 rounded-lg w-full">
              {profit.map((item, index) => (
                <TotalCards
                  icon={item.icon}
                  text={item.text}
                  amount={item.amount}
                  percentage={item.percentage}
                  upicon={item.upicon}
                  // key={index}
                />
              ))}
            </div>
            <div className="bg-white dark:bg-dark p-4 rounded-lg w-full">
              {expenses.map((item, index) => (
                <TotalCards
                  icon={item.icon}
                  text={item.text}
                  amount={item.amount}
                  percentage={item.percentage}
                  upicon={item.upicon}
                />
              ))}
            </div>
          </div>
          <div className="flex lg:flex-row xs:flex-col  gap-4 h-fit w-full">
            <div className="h-fit bg-white dark:bg-dark rounded-lg mt-4 lg:w-full xs:w-full p-3">
              <p className="font-bold text-base p-4">Popular Categories</p>
              <PopularCategoriesChart />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white dark:bg-dark rounded-lg sm:p-8 xs:p-4 mt-12 w-full">
        <ChartHeading heading="Sale Report" />
        <SalesReportGraph />
      </div>
    </div>
  );
}
