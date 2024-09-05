import Error from "@/components/error/error";
import React from "react";
import { error404 } from "../error-data";

export default function Error404() {
  return (
    <>
      {error404.map((item, index) => (
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
