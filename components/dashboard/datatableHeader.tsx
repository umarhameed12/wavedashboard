import Link from "next/link";
import React from "react";

export default function DatatableHeader() {
  return (
    <div className="flex sm:flex-row xs:flex-col sm:justify-between sm:items-center xs:space-y-2  sm:my-4 xs:my-2">
      <h2 className="text-xl font-medium">Manage Orders</h2>
      <Link
        href={"/dashboard/orders"}
        className="bg-200 text-white rounded-lg p-3 w-full sm:w-[20%] text-sm font-normal text-center whitespace-wrap"
      >
        All Orders
      </Link>
      {/* <button >
       
      </button> */}
    </div>
  );
}
