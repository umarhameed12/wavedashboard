"use client";
import { useTheme } from "next-themes";
import React, { ReactNode } from "react";
import Image from "next/image";
import emailDark from "@/assets/individual/email.svg";
import emailLight from "@/assets/individual/email-ligth.svg";
import birthdayDark from "@/assets/individual/birthday.svg";
import birthdayLight from "@/assets/individual/birthday-light.svg";
import phoneDark from "@/assets/individual/phone.svg";
import phoneLight from "@/assets/individual/phone-light.svg";
import countryDark from "@/assets/individual/country.svg";
import countryLight from "@/assets/individual/country-light.svg";
import stateDark from "@/assets/individual/state.svg";
import stateLight from "@/assets/individual/state-light.svg";
import addressDark from "@/assets/individual/address.svg";
import addresseLight from "@/assets/individual/address.-light.svg";
interface AdminProfileDetails {
  person: ReactNode;
  name: string;
  title: string;
  editIcon: ReactNode;
  edit: string;
  messageIcon: ReactNode;
  message: string;
  //   emailIcon: ReactNode;
  emailTitle: string;
  email: string;
  //   birthdayIcon: ReactNode;
  birthdayTitle: string;
  birthday: string;
  //   phoneIcon: ReactNode;
  phoneTitle: string;
  phone: string;
  //   countryIcon: ReactNode;
  countryTitle: string;
  country: string;
  //   stateIcon: ReactNode;
  stateTitle: string;
  state: string;
  //   addressIcon: ReactNode;
  addressTitle: string;
  address: string;
}
export default function AdminProfileDetails({
  person,
  name,
  title,
  editIcon,
  edit,
  messageIcon,
  message,
  emailTitle,
  email,
  birthdayTitle,
  birthday,
  phoneTitle,
  phone,
  countryTitle,
  country,
  stateTitle,
  state,
  addressTitle,
  address,
}: AdminProfileDetails) {
  const { theme } = useTheme();

  return (
    <div className="space-y-4">
      <div className="flex sm:flex-row xs:flex-col items-center sm:gap-8 xs:gap-4">
        {person}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold capitalize">{name}</h2>
          <p className="rounded-full bg-100 dark:bg-title p-2 text-center">
            {title}
          </p>
        </div>
      </div>
      <div className="flex gap-2 sm:flex-row xs:flex-col">
        <button className="flex items-center rounded-lg px-4 py-2 w-full bg-button justify-center gap-2 ">
          {editIcon}
          <p className="text-200 text-sm capitalize">{edit}</p>
        </button>
        <button className="flex items-center  bg-200 text-white rounded-lg px-4 py-2 w-full justify-center gap-2 ">
          {messageIcon}
          <p className="capitalize">{message}</p>
        </button>
      </div>
      <div className="py-4 ">
        <hr />
      </div>
      <div className="flex sm:flex-row xs:flex-col sm:justify-between sm:items-center flex-wrap gap-2">
        <div className="flex gap-2   sm:justify-start xs:justify-between">
          <Image src={theme == "dark" ? emailLight : emailDark} alt="email" />
          <p className="capitalize ">{emailTitle}</p>
        </div>
        <p>{email}</p>
      </div>
      <div className="flex sm:flex-row xs:flex-col sm:justify-between sm:items-center ">
        <div className="flex gap-2   sm:justify-start xs:justify-between">
          <Image
            src={theme == "dark" ? birthdayLight : birthdayDark}
            alt="email"
          />
          <p className="capitalize">{birthdayTitle}</p>
        </div>
        {birthday}
      </div>
      <div className="flex sm:flex-row xs:flex-col sm:justify-between sm:items-center ">
        <div className="flex gap-2   sm:justify-start xs:justify-between">
          <Image src={theme == "dark" ? phoneLight : phoneDark} alt="email" />
          <p className="capitalize">{phoneTitle}</p>
        </div>
        {phone}
      </div>
      <div className="flex sm:flex-row xs:flex-col sm:justify-between sm:items-center ">
        <div className="flex gap-2   sm:justify-start xs:justify-between">
          <Image
            src={theme == "dark" ? countryLight : countryDark}
            alt="email"
          />
          <p className="capitalize">{countryTitle}</p>
        </div>
        {country}
      </div>
      <div className="flex sm:flex-row xs:flex-col sm:justify-between sm:items-center ">
        <div className="flex gap-2   sm:justify-start xs:justify-between">
          <Image src={theme == "dark" ? stateLight : stateDark} alt="email" />
          <p className="capitalize">{stateTitle}</p>
        </div>
        {state}
      </div>
      <div className="flex sm:flex-row xs:flex-col sm:justify-between sm:items-center ">
        <div className="flex gap-2   sm:justify-start xs:justify-between">
          <Image
            src={theme == "dark" ? addresseLight : addressDark}
            alt="email"
          />
          <p className="capitalize">{addressTitle}</p>
        </div>
        {address}
      </div>
      <div className="py-4 ">
        <hr />
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-bases">About Me</h2>
        <p>
          Sagittis morbi vitae dictum massa eget massa. Senectus lectus diam
          congue vel diam. Id sit vulputate non sed vel. Facilisi ultricies nisl
          vulputate amet quis in cras placerat.
        </p>
      </div>
    </div>
  );
}
