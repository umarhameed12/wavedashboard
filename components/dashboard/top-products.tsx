"use client";
import React, { useEffect, useState } from "react";
import Button from "./button";
import Image from "next/image";
import Heading from "./heading";
import Product from "./product";
import Shoes from "@/assets/top-products/shoes.svg";
import Watch from "@/assets/top-products/watch.svg";
import Iphone from "@/assets/top-products/iphone.svg";
import AngleRight from "@/assets/top-products/angle-right.svg";
import Link from "next/link";
import axios from "axios";
import Spinner from "../spinner";

export default function TopProducts() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const getProductsData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/products");
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className="w-full flex flex-col gap-4 dark:bg-dark bg-white  rounded-xl sm:p-8 xs:p-4">
      <Heading heading="top selling product" />
      {loading && (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <>
          <div className="flex flex-col gap-3">
            {data.slice(0, 3).map((item: any, index: number) => (
              <Product
                key={index}
                name={item.productname}
                price={item.price}
                image={
                  <Image src={Shoes} alt={"Shoes"} className="rounded-md" />
                }
              />
            ))}
          </div>
        </>
      )}
      <Link href={"/dashboard/products"}>
        <Button
          text="all products"
          image={<Image src={AngleRight} alt={"icon"} />}
        />
      </Link>
    </div>
  );
}
