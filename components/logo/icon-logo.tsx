import WaveLogo from "@/assets/logo/wave-logo.svg";
import Image from "next/image";
import React from "react";

export default function IconLogo() {
  return (
    <Image src={WaveLogo} alt={"wave logo"} className="h-logo w-logo" />
  );
}
