import Label from "@/components/forms/label";
import React from "react";

export default function ProductsForm() {
  return (
    <div>
      <form action="" className="space-y-3">
        <div className="flex  md:flex-row xs:flex-col items-start gap-8 w-full">
          <div className="space-y-3 md:w-1/2 xs:w-full ">
            <Label label="Product Name" />
            <input
              type="text"
              placeholder="Enter Product Name"
              className="bg-slate-100 outline-none  py-3 px-4 w-full rounded-lg dark:bg-dark200 "
            />
            <Label label="Product Code" />
            <input
              type="text"
              placeholder="Enter Product Code"
              className="bg-slate-100 outline-none py-3 px-4 w-full  rounded-lg  dark:bg-dark200 "
            />
            <Label label="Manufacturer" />
            <input
              type="text"
              placeholder="Enter manufacturer"
              className="bg-slate-100 outline-none py-3 px-4 w-full  rounded-lg  dark:bg-dark200 "
            />
            <Label label="Price" />
            <input
              type="text"
              placeholder="Enter price"
              className="bg-slate-100 outline-none py-3 px-4 w-full  rounded-lg  dark:bg-dark200 "
            />
          </div>
          <div className="space-y-3 md:w-1/2 xs:w-full">
            <Label label="Product SKU" />
            <input
              type="text"
              placeholder="Enter Product SKU"
              className="bg-slate-100 outline-none py-3 px-4 w-full  rounded-lg dark:bg-dark200  "
            />
            <Label label="Category" />
            <input
              type="text"
              placeholder="Select Category"
              className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
            />
            <Label label="Quantity" />
            <input
              type="text"
              placeholder="Enter Quantity"
              className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
            />
            <Label label="Tax" />
            <input
              type="text"
              placeholder="Enter Tax"
              className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
            />
          </div>
        </div>
        <Label label="Bio" />
        <textarea
          name=""
          id=""
          placeholder="Enter Bio"
          className="bg-slate-100 w-full rounded-lg p-4 h-28 dark:bg-dark200 "
        />
      </form>
    </div>
  );
}
