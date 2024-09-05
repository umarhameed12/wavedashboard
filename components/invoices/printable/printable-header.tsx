import Image from "next/image";
import React, { ReactNode } from "react";
import Edit from "@/assets/icons/editBlue.svg";
import PrintableLogo from "@/assets/invoices/invoicelogo.svg";
interface PrintableHeader {
  icon: ReactNode;
  title: string;
  name: string;
  edit: ReactNode;
  invoiceNumber: string;
  number: string;
  invoiceDate: string;
  date: string;
}
export default function PrintableHeader({
  icon,
  title,
  name,
  edit,
  invoiceNumber,
  invoiceDate,
  number,
  date,
}: PrintableHeader) {
  return (
    <>
      <div className="flex md:flex-row xs:flex-col md:justify-between md:items-center md:gap-y-0 xs:gap-y-4">
        <div className="flex items-center gap-2">
          {icon}
          <div className="space-y-2">
            <p className="text-200 text-m">{title}</p>
            <div className="flex gap-2">
              <h1 className="font-bold text-2xl">{name}</h1>
              <button>{edit}</button>
            </div>
          </div>
        </div>
        <div className="flex md:justify-start xs:justify-between items-center space-x-4">
          <div className="space-y-4">
            <span className="text-200 capitalize">{invoiceNumber}</span>
            <p>{number}</p>
          </div>
          <div className="space-y-4">
            <span className="text-200 capitalize">{invoiceDate}</span>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
