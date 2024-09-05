import React from "react";
import NewOrderHeader from "./new-order-header";
import NewOrderTable from "./new-order-table";

export default function OrderItems() {
  return (
    <div className="space-y-4 ">
      <NewOrderHeader />
      <NewOrderTable />
      <div className="flex justify-center items-center gap-8 font-medium md:flex-row xs:flex-col  ">
        <button className="text-red bg-[#281C22] dark:bg-[#281C22] w-full flex-1  px-3 py-4 rounded-lg font-medium ">
          Cancel
        </button>
        <button className="bg-200 text-white flex-1 px-3 py-4 w-full rounded-lg font-medium">
          Add Product
        </button>
      </div>
    </div>
  );
}
