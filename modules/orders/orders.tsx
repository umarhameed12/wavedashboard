import OrderHead from "@/components/orders/order-head";
import OrderList from "@/components/orders/orders-list";
import React from "react";

export default function Orders() {
  return (
    <div className="bg-white rounded-lg m-4 p-4 items-center text-black dark:bg-dark">
      <OrderHead />
      <div>
        <OrderList />
      </div>
    </div>
  );
}
