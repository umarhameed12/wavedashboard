import React from "react";
import Label from "../forms/label";
import Input from "../forms/input";
import Envelope from "@/assets/icons/envelope.svg";
import Unlock from "@/assets/icons/unlock.svg";
import Eye from "@/assets/icons/eye.svg";
import Image from "next/image";
import Button from "../buttons/button";
import Link from "next/link";
import Checkbox from "../forms/checkbox";

export default function SignupForm() {
  return (
    <div className="w-full space-y-2">
      <Label label="Email" />
      <Input
        leftElement={<Image src={Envelope} alt={"envelop"} />}
        placeHolder="Enter Your Email"
      />
      <Label label="Password" />
      <Input
        leftElement={<Image src={Unlock} alt={"unlock"} />}
        placeHolder="Enter Your Password"
        rightElement={<Image src={Eye} alt={"eye"} className="cursor-pointer" />}
      />
      <Checkbox />
      <Button text="Create Account" />
      <p className="w-full text-center capitalize text-base">
        Already have an account?{" "}
        <Link href="/">
          <span className="text-200 cursor-pointer">Sign In</span>
        </Link>
      </p>
    </div>
  );
}
