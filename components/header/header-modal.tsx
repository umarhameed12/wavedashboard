import React from "react";
import Down from "@/assets/header/chevron-down.svg";
import Profile from "@/assets/header/profile.svg";
import Langauge from "@/assets/header/language.svg";
import Settings from "@/assets/header/settings.svg";
import Notifications from "@/assets/header/notifications.svg";
import Image from "next/image";
import HeaderSearch from "../forms/header-search";
import DarkMode from "./dark-mode";
import ProfileOption from "./profile-option";

export default function HeaderModal() {
  return (
    <div className="absolute bg-primary p-4 dark:bg-dark text-black right-14 rounded-lg h-auto w-36 flex justify-center items-center z-10">
      <div className="lg:flex items-center flex-col w-8/12 space-y-4 xs:flex xs:justify-center">
        {/* <HeaderSearch /> */}
        {/* <div className="w-full"> */}
        <DarkMode />
        {/* </div> */}
        <Image src={Notifications} alt={"notifications"} />
        <Image src={Settings} alt={"settings"} />
        <Image src={Langauge} alt={"language"} />
        <p className="text-base font-semibold">En</p>
        <Image src={Down} alt={"chevrondown"} />
        <Image src={Profile} alt={"profile"} />
        <Image src={Down} alt={"chevrondown"} />
        <ProfileOption />
      </div>
    </div>
  );
}
