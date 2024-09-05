"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

export default function InvoiceDatatable() {
  const { theme } = useTheme();
  theme === "dark" ? "bg-dark" : "bg-white";

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios.get("/api/invoice").then((res) => {
      setData(res.data.data);
    });
  };

  const columns = [
    {
      name: "ID",
      selector: (row: any) => row.id,
    },

    {
      name: "Description",
      selector: (row: any) => row.description,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
    },
    {
      name: "Total",
      selector: (row: any) => row.total,
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
          highlightOnHover
          pointerOnHover
          className=" dark:bg-dark"
        />
      </>
    );
  }
}
