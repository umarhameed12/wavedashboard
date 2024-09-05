"use client";
import React, { useState } from "react";
import Button from "../buttons/button";
import Person from "@/assets/individual/person.svg";
import Star from "@/assets/icons/star-color.svg";
import angleRight from "@/assets/icons/angle-right-blue.svg";
import WaveLogo from "@/assets/logo/wave-logo.svg";
import Search from "@/assets/icons/search.svg";
import user from "@/assets/magicoon/user.svg";
import userDark from "@/assets/magicoon/user-dark.svg";
import messageCheck from "@/assets/magicoon/message-check-alt.svg";
import messageCheckDark from "@/assets/magicoon/message-check-alt-dark.svg";
import error from "@/assets/cards/error.svg";
import warning from "@/assets/cards/warning.svg";
import success from "@/assets/cards/success.svg";
import dialog from "@/assets/cards/dailog.svg";
import copyText from "@/assets/cards/copy-text.png";

import Image from "next/image";
import Label from "../forms/label";
import { useTheme } from "next-themes";
import CopyableText from "./CopyableText";
import Card from "./card";
import {
  c1,
  c2,
  c3,
  c4,
  c1Code,
  c2Code,
  c3Code,
  c4Code,
  cardShopping1,
  cardShopping1Code,
  cardShopping2,
  cardShopping2Code,
  card1,
  card1Code,
  card2,
  card2Code,
  card3,
  card3Code,
  card4,
  card4Code,
  errorCard,
  errorCode,
  warningCard,
  warningCode,
  successCard,
  successCode,
  dialogCard,
  dialogCode,
} from "./card-data";
import Link from "next/link";

export default function AllCards() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setcopied] = useState("#copied");
  const handleCopy = () => {
    navigator.clipboard.writeText(copied);
    alert("Copied");
  };

  return (
    <div className="m-4">
      <div className="bg-white dark:bg-dark rounded-lg p-4">
        <div className="flex lg:flex-row xs:flex-col justify-center items-center gap-4">
          <button className="bg-200  text-white py-4 rounded-lg lg:w-1/12 sm:w-1/5 xs:w-full">
            All
          </button>
          {/* <Link href={"#shopping"}> */}
          <button
            className="bg-100 dark:bg-button text-200  py-4 rounded-lg lg:w-1/12 sm:w-1/5 xs:w-full"
            id="Shopping"
          >
            Shopping
          </button>
          {/* </Link> */}
          {/* <Link href={"/dashboard/cards/#simple-card"}> */}
          <button className="bg-100 dark:bg-button text-200  py-4 rounded-lg lg:w-1/12 sm:w-1/5 xs:w-full">
            Simple Card
          </button>
          {/* </Link>
          <Link href={"#gallery"}> */}
          <button className="bg-100 dark:bg-button text-200  py-4 rounded-lg lg:w-1/12 sm:w-1/5 xs:w-full">
            Gallery
          </button>
          {/* </Link> */}
        </div>
      </div>
      {/* <Link href={"#shopping"}> */}
      <div className="grid lg:grid-cols-4  sm:grid-cols-2 xs:grid-cols-1 gap-10">
        <Card
          cardData={c1}
          code={c1Code}
          width=""
          height="h-[400px]"
          flex="flex-col"
        />
        <Card
          cardData={c2}
          code={c2Code}
          width=""
          height="h-[400px]"
          flex="flex-col"
        />
        <Card
          cardData={c3}
          code={c3Code}
          width=""
          height="h-[400px]"
          flex="flex-col"
        />
        <Card
          cardData={c4}
          code={c4Code}
          width=""
          height="h-[400px]"
          flex="flex-col"
        />
      </div>
      {/* </Link> */}
      {/* <Link href={"#shopping"}> */}
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-8" id="Shopping">
        <Card
          cardData={cardShopping1}
          code={cardShopping1Code}
          width="w-full"
          height=""
          flex=""
        />
        <Card
          cardData={cardShopping2}
          code={cardShopping2Code}
          width="w-full"
          height=""
          flex=""
        />
      </div>
      {/* </Link> */}
      {/* <Link href={"#gallery"}> */}
      <div
        className="grid lg:grid-cols-4  sm:grid-cols-2 xs:grid-cols-1 gap-8"
        id="gallery"
      >
        <Card
          cardData={card1}
          code={card1Code}
          width=""
          height="h-[400px]"
          flex="flex-col"
        />
        <Card
          cardData={card2}
          code={card2Code}
          width=""
          height="h-[400px]"
          flex="flex-col"
        />{" "}
        <Card
          cardData={card3}
          code={card3Code}
          width=""
          height="h-[400px]"
          flex="flex-col"
        />
        <Card
          cardData={card4}
          code={card4Code}
          width=""
          height=""
          flex="flex-col"
        />
      </div>
      {/* </Link> */}
      {/* <Link href={"#simple-card"}> */}
      <div
        className="grid lg:grid-cols-4  sm:grid-cols-2 xs:grid-cols-1 gap-4"
        id="simple-card"
      >
        <Card
          cardData={errorCard}
          code={errorCode}
          width=""
          height=""
          flex="flex-col"
        />
        <Card
          cardData={warningCard}
          code={warningCode}
          width=""
          height=""
          flex="flex-col"
        />
        <Card
          cardData={successCard}
          code={successCode}
          width=""
          height=""
          flex="flex-col"
        />
        <Card
          cardData={dialogCard}
          code={dialogCode}
          width=""
          height=""
          flex="flex-flex-col"
        />
      </div>
      {/* </Link> */}
    </div>
  );
}
