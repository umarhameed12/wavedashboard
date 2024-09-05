import React from "react";
import { maintenance } from "../error/error-data";

export default function Maintenance() {
  return (
    <div className="bg-white dark:bg-dark p-6 m-4 rounded-lg flex h-[85vh] flex-col justify-center items-center text-center space-y-8">
      {maintenance.map((item) => (
        <>
          {item.icon}

          <h1 className="md:text-3xl xs:text-lg font-semibold">{item.title}</h1>
          <p className="md:text-base xs:text-xs capitalize">{item.para}</p>
        </>
      ))}
    </div>
  );
}
