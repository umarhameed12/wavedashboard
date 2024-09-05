import React from "react";
import IconLogo from "./icon-logo";

interface FullLogo {
  isOpen: boolean;
}
export default function FullLogo({ isOpen }: FullLogo) {
  return (
    <div className="flex w-full items-center justify-center space-x-2">
      {isOpen ? (
        <>
          <IconLogo />
          <p className="text-logoText text-2xl font-bold">Wave</p>
        </>
      ) : (
        <IconLogo />
      )}
    </div>
  );
}
