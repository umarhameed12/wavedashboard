import Forgetpass from "@/modules/forgetpass/forgetpass";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-100 dark:bg-dark200">
      <Forgetpass />
    </div>
  );
}
