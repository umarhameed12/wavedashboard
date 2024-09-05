"use client";
import React, { useEffect, useState } from "react";
import Button from "./button";
import Image from "next/image";
import Customer from "./customer";
import Heading from "./heading";
import AngleRight from "@/assets/top-products/angle-right.svg";
import CustomerImage from "@/assets/top-products/customer.svg";
import Link from "next/link";
import axios from "axios";
import Spinner from "../spinner";

export default function TopCustomers() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const getCustomersData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/customers");
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCustomersData();
  }, []);
  return (
    <div className="w-full flex flex-col gap-4 dark:bg-dark bg-white  rounded-xl sm:p-8 xs:p-4">
      <Heading heading="top customers" />
      {loading && (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {!loading && (
        <>
          <div className="flex flex-col gap-3">
            {data.slice(0, 3).map((item: any, index: number) => (
              <Customer
                key={index}
                name={item.name}
                email={item.email}
                image={
                  <Image
                    src={CustomerImage}
                    alt={"Shoes"}
                    className="rounded-md"
                  />
                }
              />
            ))}
          </div>
        </>
      )}
      <Link href={"/dashboard/customers"}>
        <Button
          text="all customers"
          image={<Image src={AngleRight} alt={"icon"} />}
        />
      </Link>
    </div>
  );
}
