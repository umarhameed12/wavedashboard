import Facebook from "@/assets/socials/facebook.svg";
import Google from "@/assets/socials/google.svg";
import Twitter from "@/assets/socials/twitter.svg";
import SocialButton from "@/components/login/social-button";
import IconLogo from "@/components/logo/icon-logo";
import SignupForm from "@/components/signup/singup-form";
import Image from "next/image";
import React from "react";

export default function Signup() {
  return (
    <div className="border border-200 dark:border-darkborder bg-white dark:bg-dark rounded-lg w-login h-login flex flex-col items-center justify-center gap-5 p-8">
      <TopSection />
      <SignupForm />
    </div>
  );
}
const TopSection = () => {
  return (
    <>
      <IconLogo />
      <p className="text-heading capitalize font-semibold text-primary dark:text-white">
        Getting Started
      </p>
      <p className="text-base capitalize font-normal text-primary dark:text-white">
        choose your social media to create account
      </p>
      <SocialButtonSection />
      <p className="text-base capitalize font-normal text-primary dark:text-white">
        or register with email
      </p>
    </>
  );
};

const SocialButtonSection = () => {
  return (
    <div className="w-full flex space-x-3 items-center justify-center">
      <SocialButton icon={<Image src={Facebook} alt={"Facebook"} />} />
      <SocialButton icon={<Image src={Google} alt={"Google"} />} />
      <SocialButton icon={<Image src={Twitter} alt={"Twitter"} />} />
    </div>
  );
};
