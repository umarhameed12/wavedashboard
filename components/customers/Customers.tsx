import React from "react";

import CustomerHead from "./customerHead";
import CustomerTable from "./customerTable";

export default function Customers() {
  return (
    <div className="bg-white rounded-lg m-4 p-4 items-center text-black dark:bg-dark">
      <CustomerHead />
      {/* {columns.map((item) => (
        <CustomerTable columns={item.name} />
      ))} */}
      <div>
        <CustomerTable />
      </div>
    </div>
  );
}
