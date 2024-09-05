import Image from "next/image";
import Edit from "@/assets/icons/editBlue.svg";
import Print from "@/assets/icons/print.svg";

import PrintableLogo from "@/assets/invoices/invoicelogo.svg";
export const headerData = [
  {
    icon: <Image src={PrintableLogo} alt="" />,
    title: "Sending invoice as",
    name: "Wave LLC",
    edit: <Image src={Edit} alt="" />,
    invoiceNumber: "invoice number",
    number: "INV-59627",
    invoiceDate: "Invoice Date",
    date: "01 Jun 2020 17:56 AM",
  },
];
export const invoiceFrom = [
  {
    invoiceFrom: "Invoice From",
    name: "Wave LLC",
    address: "4183 Forest avenue",
    city: "new york city",
    code: "10011",
    country: "USA",
    email: "chriswood@wave.com",
  },
];
export const invoiceTo = [
  {
    invoiceTO: "Invoice From",
    name: "Blueberry LLC",
    address: "344 roy alley",
    city: "denver",
    code: "80202",
    country: "USA",
    email: "chriswood@wave.com",
  },
];

export const tableColumn = [
  {
    No: "No",
    Desc: "description",
    Quantity: "quantity",
    Price: "price",
  },
];
export const tableData = [
  {
    No: "1",
    Desc: "Design Work",
    Quantity: "4",
    Price: "$4343.00",
  },
  {
    No: "2",
    Desc: "website development",
    Quantity: "2",
    Price: "$4343.00",
  },
  {
    No: "3",
    Desc: "consultation",
    Quantity: "1",
    Price: "$43.00",
  },
];
export const footerData = [
  {
    title: "Note",
    desc: "please send all items at the same time to the shipping address. Thanks in advance",
    printIcon: <Image src={Print} alt="" />,
    print: "Print",
    send: "Send",
  },
];
