"use client";
import axios from "axios";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";

interface DashboardDatatable {
  theme: string;
}

createTheme("dark", {
  background: {
    default: "transparent",
  },
});

export default function DashboardDatatable() {
  const [data, setData] = useState([]);
  const { theme } = useTheme();
  const columns = [
    {
      name: "Id",
      selector: (row: any) => row.idNumber,
    },
    {
      name: "Date",
      selector: (row: any) => row.date,
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
  const getOrdersData = async () => {
    const response = await axios.get("/api/orders");
    setData(response.data.data);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      getOrdersData();
    }
  }, []);
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        pagination
        theme={theme}
      />
    </>
  );
}
