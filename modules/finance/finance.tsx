"use client";
import Analytics from "@/components/dashboard/analytics";
import SalesReportGraph from "@/components/dashboard/sales-report-graph";
import FinanceBudget from "@/components/finance/finance-budget/finance-budget";
import FinanceGraph from "@/components/finance/finance-graph/finance-graph";
import FinanceTable from "@/components/finance/finance-table/finance-table";
import { Button } from "@material-tailwind/react";
import React from "react";

const Finance = () => {
  return (
    <div className="container m-auto py-4 rounded-md space-y-4 max-w-[1120px] w-full px-5 sm:px-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center">
        <div className="space-y-2">
          <h1 className="text-xl font-bold">Finance dashboard</h1>
          <p className="text-sm font-medium">
            Keep track of your financial status
          </p>
        </div>
        <div className="flex  items-center gap-4 flex-wrap">
          <Button className="flex items-center gap-2 bg-[#0A74DA] py-[10px] px-[12px]">
            <svg
              className="w-5 h-5 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-1 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm2-5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm4 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="font-medium text-sm">Reports</p>
          </Button>
          <Button className="flex items-center gap-2 bg-[#0A74DA] py-[10px] px-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <p className="font-medium text-sm">Settings</p>
          </Button>
          <Button className="flex items-center gap-2 bg-200 py-[10px] px-[12px]">
            <svg
              className="w-5 h-5  text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="font-medium text-sm text-white">Export</p>
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
        <div className="bg-white dark:bg-dark  p-4 rounded-xl space-y-4 w-full relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-medium capitalize">
                Previous Statement
              </p>
              <p className="text-sm font-normal text-green dark:text-green/40">
                Paid on February 6.2022
              </p>
            </div>
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
          <div className="flex items-center flex-wrap space-y-2 md:space-y-0 gap-4">
            <div className="space-y-1">
              <p className="text-xs font-normal capitalize">Card Limit</p>
              <p className="text-xl font-medium">$34,500.00</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-normal capitalize">Spent</p>
              <p className="text-xl font-medium">$27,221.21</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-normal capitalize">Minimum</p>
              <p className="text-xl font-medium">$7,331.94</p>
            </div>
          </div>
          <div className="absolute top-14 right-[8px] -m-8 check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 w-24 text-green opacity-25 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white dark:bg-dark  p-4 rounded-md space-y-4 w-full overflow-hidden relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base font-medium capitalize">
                Current Statement
              </p>
              <p className="text-sm font-normal text-red dark:text-red/40">
                Must be paid before March 6, 2022
              </p>
            </div>
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
          <div className="flex items-center flex-wrap space-y-2 md:space-y-0 gap-3">
            <div className="space-y-1">
              <p className="text-xs font-normal capitalize">Card Limit</p>
              <p className="text-xl font-medium">$34,500.00</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-normal capitalize">Spent</p>
              <p className="text-xl font-medium">$27,221.21</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-normal capitalize">Minimum</p>
              <p className="text-xl font-medium">$7,331.94</p>
            </div>
          </div>
          <div className="absolute top-14 right-[8px] -m-8 check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 w-24 text-red opacity-25"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-dark   rounded-md space-y-4 w-full">
        <div className="flex items-center p-4 flex-wrap space-y-2 md:space-y-0 justify-between">
          <div className="space-y-1">
            <p className="text-lg font-medium tracking-tight leading-6 truncate">
              Account Balance
            </p>
            <p className="text-sm font-normal">
              Monthly balance growth and avg. monthly income
            </p>
          </div>
          <p className="bg-100 dark:bg-dark200 p-2 rounded-full">12 months</p>
        </div>
        <div className="flex gap-10 px-4">
          <div>
            <p className="text-xl md:text-3xl font-semibold">38.33%</p>
            <p className="font-medium text-sm leading-none text-[#5F6368]">
              Average Monthly Growth
            </p>
          </div>
          <div>
            <p className="text-xl md:text-3xl font-semibold">$45,332.00</p>
            <p className="font-medium text-sm leading-none text-[#5F6368]">
              Average Month Income
            </p>
          </div>
        </div>
        <div className=" lg:max-w-[80vw]">
          <FinanceGraph />
        </div>
      </div>
      <div className="bg-white dark:bg-dark  p-4 rounded-xl space-y-4 w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-medium capitalize">
              Recent transactions
            </p>
            <p className="text-sm font-normal">1 pending, 4 completed</p>
          </div>
        </div>
        <div>
          <FinanceTable />
        </div>
      </div>
      <div className="bg-white dark:bg-dark  p-6 rounded-xl space-y-4 w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium tracking-tight leading-6 truncate">
              Budget
            </p>
            <p className="text-sm font-medium text-[#5F6368]">
              Monthly budget summary
            </p>
          </div>
          <Button className="shadow-none hover:bg-gray-300 dark:hover:bg-[#5F6368] w-fit px-2">
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
          </Button>
        </div>
        <div>
          <p className="text-sm ">
            Last month; you had <strong>223</strong> expense transactions,{" "}
            <strong>12</strong> savings entries and <strong>4</strong> bills.
          </p>
        </div>
        <div>
          <FinanceBudget />
        </div>
      </div>
    </div>
  );
};

export default Finance;
