import React from "react";
import Label from "../forms/label";
import Input from "../forms/input";
import Envelope from "@/assets/icons/envelope.svg";
import Button from "../buttons/button";
import Image from "next/image";

export default function ForgetpassForm() {
  return (
    <div className="w-full space-y-2">
      <Label label="Email" />
      <Input
        leftElement={<Image src={Envelope} alt={"envelop"} />}
        placeHolder="Enter Your Email"
      />
      <Button text="Reset Password" />
    </div>
  );
}
