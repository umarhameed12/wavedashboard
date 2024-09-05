"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";

export default function ProductsDatatable() {
  const { theme } = useTheme();
  theme === "dark" ? "rgb(22,28,35)" : "rgb(255,255,255)";
  const [data, setData] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      getProductsData();
    }
  }, []);
  const getProductsData = async () => {
    const response = await axios.get("/api/products");
    console.log("response:", response.data);
    setData(response.data.data);
  };
  const columns = [
    {
      name: "Id",
      selector: (row: any) => row.idNumber,
    },
    {
      name: "Category",
      selector: (row: any) => row.category,
    },
    {
      name: "Price",
      selector: (row: any) => row.price,
    },
    {
      name: "Product Name",
      selector: (row: any) => row.productname,
    },
    {
      name: "Quantity",
      selector: (row: any) => row.quantity,
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
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        pagination
        theme={theme}
      />
    );
  }
}
