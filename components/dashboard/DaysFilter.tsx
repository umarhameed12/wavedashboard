import React from "react";

export default function DaysFilter() {
  return (
    <ul className="absolute bg-white rounded-md dark:bg-dark200   right-0 top-8 shadow-lg border">
      <li className="hover:bg-gray-300 dark:hover:bg-dark  cursor-pointer px-6 py-2 ">
        Today
      </li>
      <li className="hover:bg-gray-300 dark:hover:bg-dark cursor-pointer px-6 py-2 ">
        1 Day Ago
      </li>
      <li className="hover:bg-gray-300 dark:hover:bg-dark  cursor-pointer px-6 py-2 ">
        2 Days Ago
      </li>
      <li className="hover:bg-gray-300 dark:hover:bg-dark  cursor-pointer px-6 py-2 ">
        Last Week
      </li>
    </ul>
  );
}
