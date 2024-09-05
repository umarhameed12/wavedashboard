"use client";
import React from "react";
import DataTable from "react-data-table-component";
import Financecolumns from "../finance-columns/finance-columns";
import { FinanceData } from "../finance-data/finance-data";
import { useTheme } from "next-themes";

const FinanceTable = () => {
  const { theme } = useTheme();
  theme === "dark" ? "rgb(22,28,35)" : "rgb(255,255,255)";
  return (
    <div>
      <DataTable
        columns={Financecolumns}
        data={FinanceData}
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
    </div>
  );
};

export default FinanceTable;
