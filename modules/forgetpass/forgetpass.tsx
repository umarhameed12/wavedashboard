import ForgetpassForm from "@/components/forgetpass/forgetpass-form";
import IconLogo from "@/components/logo/icon-logo";
import Image from "next/image";
import React from "react";

export default function Forgetpass() {
  return (
    <div className="border border-200 dark:border-darkborder bg-white dark:bg-dark rounded-lg w-login flex flex-col items-center justify-center gap-5 p-8">
      <TopSection />
      <ForgetpassForm />
    </div>
  );
}

const TopSection = () => {
  return (
    <>
      <IconLogo />
      <p className="text-heading capitalize font-semibold text-primary dark:text-white">
        reset password
      </p>
      <p className="text-base capitalize font-normal text-primary dark:text-white">
        you can reset your password here
      </p>
    </>
  );
};
