"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

export default function ProductDatatable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios.get("/api/products").then((res) => {
      setData(res.data.data);
    });
  };
  const { theme } = useTheme();
  theme === "dark" ? "rgb(22,28,35)" : "rgb(255,255,255)";

  const columns = [
    {
      name: "PRODUCT NAME",
      selector: (row: any) => row.productname,
    },
    {
      name: "CATEGORY",
      selector: (row: any) => row.category,
    },
    {
      name: "PRICE",
      selector: (row: any) => row.price,
    },
    {
      name: "QUANTITY",
      selector: (row: any) => row.quantity,
    },
    {
      name: "INVENTORY",
      selector: (row: any) => row.inventory,
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
          paginationIconNext
          paginationIconPrevious
          paginationResetDefaultPage
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
