import Image from "next/image";
import React from "react";
import CustomerImage from "@/assets/customers/c1.svg";
import Edit from "@/assets/icons/edit.svg";
import deleteIcon from "@/assets/icons/delete.svg";

export const columns = [
  {
    name: "All",
  },
  {
    name: "CUSTOMER",
  },
  {
    name: "EMAIL",
  },
  {
    name: "LOCATION",
  },
  {
    name: "PHONE",
  },
  {
    name: "ACTION",
  },
];
export const data = [
  {
    id: Math.random().toString(10),
    // image: <Image src={CustomerImage} alt={" Customer Image"} />,
    name: "hamza shahzad",
    email: "hamzashahzad@wave.com",
    location: "West Virginia, USA",
    phone: "+1 324 567 8901",
    // edit: <Image src={Edit} alt={" Customer Image"} />,
    // delete: <Image src={deleteIcon} alt={" Customer Image"} />,
  },
  {
    id: Math.random().toString(10),
    // image: <Image src={CustomerImage} alt={" Customer Image"} />,
    name: "hamza shahzad",
    email: "hamzashahzad@wave.com",
    location: "West Virginia, USA",
    phone: "+1 324 567 8901",
    // edit: <Image src={Edit} alt={" Customer Image"} />,
    // delete: <Image src={deleteIcon} alt={" Customer Image"} />,
  },
  {
    id: Math.random().toString(10),
    // image: <Image src={CustomerImage} alt={" Customer Image"} />,
    title: "hamza shahzad",
    email: "hamzashahzad@wave.com",
    location: "West Virginia, USA",
    phone: "+1 324 567 8901",
    // edit: <Image src={Edit} alt={" Customer Image"} />,
    // delete: <Image src={deleteIcon} alt={" Customer Image"} />,
  },
  {
    id: Math.random().toString(10),
    // image: <Image src={CustomerImage} alt={" Customer Image"} />,
    name: "hamza shahzad",
    email: "hamzashahzad@wave.com",
    location: "West Virginia, USA",
    phone: "+1 324 567 8901",
    // edit: <Image src={Edit} alt={" Customer Image"} />,
    // delete: <Image src={deleteIcon} alt={" Customer Image"} />,
  },
];
