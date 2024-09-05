import React from "react";
import UploadImage from "./uploadimage";
import CustomerForm from "./CustomerForm";

export default function AddCustomer() {
  return (
    <div className="lg:flex gap-8 justify-between bg-white m-4 p-4 dark:bg-dark">
      <div className=" lg:w-2/5 md:w-full ">
        <UploadImage />
      </div>
      <div className=" lg:w-4/5 md:w-full">
        <CustomerForm />
      </div>
    </div>
  );
}
