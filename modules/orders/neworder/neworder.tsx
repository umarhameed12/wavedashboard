import CustomerDetails from "@/components/orders/neworder/customerdetails";
import OrderItems from "@/components/orders/neworder/orderitems";
import React from "react";

export default function NewOrder() {
  return (
    <div>
      <div className="bg-white rounded-lg m-4 p-4 dark:bg-dark">
        <CustomerDetails />
      </div>
      <div className="bg-white rounded-lg m-4 p-4 dark:bg-dark">
        <OrderItems />
      </div>
    </div>
  );
}
