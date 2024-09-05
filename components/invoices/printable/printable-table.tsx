import React from "react";
interface PrintableTabe {
  no: string;
  desc: string;
  quantity: string;
  price: string;
}
export default function PrintableTable() {
  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs  uppercase bg-100 dark:bg-dark hover:bg-100 dark:hover:bg-dark200  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              description
            </th>
            <th scope="col" className="px-6 py-3">
              quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white  dark:bg-dark hover:bg-100 dark:hover:bg-dark200 ">
            <th scope="row" className="px-6 py-4 font-medium   ">
              1
            </th>
            <td className="px-6 py-4">Design Work</td>
            <td className="px-6 py-4">$4343.00</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white  dark:bg-dark  hover:bg-100 dark:hover:bg-dark200 ">
            <th scope="row" className="px-6 py-4 font-medium   ">
              2
            </th>
            <td className="px-6 py-4">Design Work</td>
            <td className="px-6 py-4">$4343.00</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white  dark:bg-dark hover:bg-100 dark:hover:bg-dark200  ">
            <th scope="row" className="px-6 py-4 font-medium   ">
              3
            </th>
            <td className="px-6 py-4">Design Work</td>
            <td className="px-6 py-4">$4343.00</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
