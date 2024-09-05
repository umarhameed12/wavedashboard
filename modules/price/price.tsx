"use client";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Price = () => {
  const [priceTab, setPriceTab] = useState("Plans");
  const dataBasic = [
    "Access to all basic features",
    "Basic reporting and analytics",
    "Up to 10 individual users",
    "20GB individual data each user",
    "Basic chat and email support",
  ];
  const dataBusiness = [
    "200+ integrations",
    "Advanced reporting and analytics",
    "Up to 20 individual users",
    "40GB individual data each user",
    "Priority chat and email support",
  ];
  const dataEnterprise = [
    "Advanced custom fields",
    "Audit log and data history",
    "Unlimited individual users",
    "Unlimited individual users",
    "Personalised+priotity service",
  ];
  return (
    <div className="m-4">
      <div className="bg-white text-black dark:text-white dark:bg-dark p-4 rounded space-y-2">
        <h1 className="font-bold text-2xl capitalize">
          Our nominal pricing plans
        </h1>
        <div className="flex items-center gap-4">
          <p
            onClick={() => setPriceTab("Plans")}
            className={`${
              priceTab === "Plans" ? "border-logoText" : "border-primary"
            } border-b text-200 capitalize cursor-pointer `}
          >
            plans
          </p>
          <p
            onClick={() => setPriceTab("Campare Packages")}
            className={`${
              priceTab === "Campare Packages"
                ? "border-logoText"
                : "border-primary"
            } border-b text-200 capitalize cursor-pointer`}
          >
            Campare Packages
          </p>
        </div>
      </div>
      {priceTab === "Plans" ? (
        <div className=" my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <PriceCard price="10" plan="basic" data={dataBasic} />
          <PriceCard price="20" plan="Business " btn data={dataBusiness} />
          <PriceCard price="40" plan="Enterprise " btn data={dataEnterprise} />
        </div>
      ) : (
        <>
          <div className="relative overflow-x-auto my-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-dark dark:text-gray-400">
                <tr
                  className="py-4
                "
                >
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6   my-2  py-4  space-y-2">
                    <div className="bg-white dark:bg-[#192434] p-4 w-60 rounded-md shadow-lg">
                      <p className="text-base font-semibold text-black dark:text-white  ">
                        Basic Plan
                      </p>
                      <h2 className="text-xl font-bold  text-black dark:text-white">
                        $10{" "}
                        <span
                          className="text-sm font-normal
                       normal-case"
                        >
                          /month
                        </span>
                      </h2>
                    </div>
                  </th>
                  <th scope="col" className="px-6   my-2  py-4  space-y-2">
                    <div className=" bg-white dark:bg-[#192434] p-4 w-60 rounded-md shadow-lg">
                      <p className="text-base font-semibold text-black dark:text-white  ">
                        Business Plan
                      </p>
                      <h2 className="text-xl font-bold  text-black dark:text-white">
                        $20{" "}
                        <span
                          className="text-sm font-normal
                       normal-case"
                        >
                          /month
                        </span>
                      </h2>
                    </div>
                  </th>
                  <th scope="col" className="px-6   my-2  py-4  space-y-2">
                    <div className="bg-white dark:bg-[#192434] p-4 w-60 rounded-md  shadow-lg">
                      <p className="text-base font-semibold text-black dark:text-white  ">
                        Enterprice Plan
                      </p>
                      <h2 className="text-xl font-bold  text-black dark:text-white">
                        $40{" "}
                        <span
                          className="text-sm font-normal
                       normal-case"
                        >
                          /month
                        </span>
                      </h2>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Site Speed optimization
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    LiveChat Integratio
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Newsletter Integration
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    CMS Training
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Sticky Navigation Bar
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    CRM Integration
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Multi-Language Functionality
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Complex Search
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Google Map Stylization
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-dark dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    3rd Party Membership Portal
                  </th>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 rounded-full bg-red text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="px-6 py-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white rounded-full bg-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Price;

const PriceCard = ({
  price,
  plan,
  data,
  btn,
}: {
  price: string;
  plan: string;
  data: string[];
  btn?: boolean;
}) => {
  return (
    <div className="bg-white text-black dark:text-white dark:bg-dark p-4 rounded space-y-8">
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="font-bold text-4xl">
          ${price} <span className="font-medium text-base">/month</span>
        </p>
        <p className="text-xl font-bold">Basic Plan</p>
        <p className="text-sm font-normal text-gray-400 ">Billed {plan}</p>
      </div>
      <ul className="space-y-4">
        {data.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 bg-100 rounded-full p-1 text-green"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            {item}
          </li>
        ))}
      </ul>
      <Button
        className={`${
          btn ? "bg-200" : "bg-200/10"
        } border rounded text-black dark:text-white border-logoText w-full normal-case text-xl font-bold`}
      >
        Get Started
      </Button>
    </div>
  );
};
