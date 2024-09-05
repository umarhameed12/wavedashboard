import Image from "next/image";
import Profit from "@/assets/products/profit.svg";
import Expenses from "@/assets/products/expenses.svg";
import Upicon from "@/assets/products/upicon.svg";

export const profit = [
  {
    icon: <Image src={Profit} alt="Profit" />,
    text: "Total Profit",
    amount: "$62,343.02",
    percentage: "+7%",
    upicon: <Image src={Upicon} alt="Upicon" />,
  },
];
export const expenses = [
  {
    icon: <Image src={Expenses} alt=" Expenses" />,
    text: "Total Expenses",
    amount: "$62,343.02",
    percentage: "+7%",
    upicon: <Image src={Upicon} alt="Upicon" />,
  },
];
