"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

export default function OrderList() {
  const { theme } = useTheme();
  theme === "dark" ? "rgb(22,28,35)" : "rgb(255,255,255)";

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios.get("/api/orders").then((res) => {
      setData(res.data.data);
    });
  };

  const columns = [
    {
      name: "ID",
      selector: (row: any) => row.idNumber,
    },
    {
      name: "DATE",
      selector: (row: any) => row.date,
    },
    {
      name: "CUSTOMER",
      selector: (row: any) => row.customer,
    },
    {
      name: "TOTAL",
      selector: (row: any) => row.total,
    },
    {
      name: "STATUS",
      selector: (row: any) => row.status,
    },
    {
      name: "ACTION",
      selector: (row: any) => row.action,
      cell: (row: any) => (
        <div className="flex  items-center gap-1 ">
          <div className="bg-200 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
              />
            </svg>
          </div>
          <div className="bg-red/10 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
      ),
    },
  ];

  if (data.length === 0) {
    return (
      <>
        <div className="h-auto w-full flex justify-center mt-20 ">
          <div
            className="w-10 h-10 rounded-full animate-spin
                    border-4 border-solid border-logoText border-t-transparent"
          ></div>
        </div>
        <p className="w-full h-full flex justify-center items-center text-xl font-semibold my-20 dark:text-white ">
          No data Present
        </p>
      </>
    );
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          pagination
          theme={theme}
          className=" dark:bg-dark"
          progressComponent={
            <div className="h-screen w-full flex justify-center mt-20 ">
              <div
                className="w-10 h-10 rounded-full animate-spin
                            border-4 border-solid border-dashboard-primary border-t-transparent"
              ></div>
            </div>
          }
        />
      </>
    );
  }
}
