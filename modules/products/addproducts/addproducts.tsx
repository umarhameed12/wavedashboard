import ProductImage from "@/components/products/addproduts/productImage";
import ProductsForm from "@/components/products/addproduts/productsForm";
import React from "react";

export default function AddProducts() {
  return (
    <div className=" flex flex-col gap-8 rounded-lg bg-white m-4 p-4 dark:bg-dark ">
      <h1 className="font-semibold xs:text-xl md:text-4xl ">New Products</h1>

      <div>
        <ProductsForm />
      </div>
      <div>
        <ProductImage />
      </div>
      <div className="flex justify-center items-center gap-8 font-medium md:flex-row xs:flex-col">
        <button className="text-red bg-rose-200 dark:bg-rose-300  flex-1 w-full px-3 py-4 rounded-lg font-medium ">
          Cancel
        </button>
        <button className="bg-200 text-white flex-1 px-3 py-4 rounded-lg w-full font-medium">
          Add Customer
        </button>
      </div>
    </div>
  );
}
