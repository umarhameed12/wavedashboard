import React, { ReactNode } from "react";

interface TotalCards {
  icon: ReactNode;
  text: string;
  amount: string;
  percentage: string;
  upicon: ReactNode;
}
export default function TotalCards({
  icon,
  text,
  amount,
  percentage,
  upicon,
}: TotalCards) {
  return (
    <div className="space-y-2">
      <div className="flex gap-4 items-center">
        <div className="bg-200 p-1 rounded-lg">{icon}</div>
        <p className="font-semibold text-md">{text}</p>
      </div>
      <p className="text-2xl font-semibold">{amount}</p>
      <div className="flex gap-2">
        <p className="text-green"> {percentage}</p>
        {upicon}
      </div>
    </div>
  );
}
