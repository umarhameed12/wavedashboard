// import Invoice from "@/modules/invoices/invoice";
import dynamic from "next/dynamic";
import React from "react";
const Invoice = dynamic(() => import("@/modules/invoices/invoice"), {
  ssr: false,
});

export default function page() {
  return <Invoice />;
}
