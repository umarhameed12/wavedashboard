import React from "react";
import { error500 } from "../error-data";
import Error from "@/components/error/error";

export default function Error500() {
  return (
    <>
      {error500.map((item, index) => (
        <Error
          icon={item.icon}
          title={item.title}
          para={item.para}
          key={index}
        />
      ))}
    </>
  );
}
