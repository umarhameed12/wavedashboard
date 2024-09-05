import InvoiceDatatable from "@/components/invoices/invoice-datatable";
import InvoiceHeader from "@/components/invoices/invoice-header";
import React from "react";

export default function Invoice() {
  return (
    <div className="bg-white rounded-lg m-4 p-4 items-center  dark:bg-dark">
      <InvoiceHeader />
      <div>
        <InvoiceDatatable />
      </div>
    </div>
  );
}
