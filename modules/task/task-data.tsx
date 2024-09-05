import Image from "next/image";

import dots from "@/assets/task/dots.svg";
import ChatLight from "@/assets/task/chat.svg";
import ChatDark from "@/assets/task/chat-dark.svg";

import attachLight from "@/assets/task/attachment.svg";
import attachDark from "@/assets/task/attactment-dark.svg";

import P1 from "@/assets/team/p1.svg";
import P2 from "@/assets/team/p2.svg";
import { title } from "process";

export const taskHeaderData = [
  {
    title: "In Progress",
    icon: "progress",
    color: "200",
  },
  {
    title: "On Hold 8",
    icon: "progress",
    color: "red",
  },
  {
    title: "In Review",
    icon: "progress",
    color: "yellow-600",
  },
  {
    title: "Approved 8",
    icon: "progress",
    color: "green",
  },
];

export const cardsData = [
  {
    type: "meeting",
    color: "orange-100",
    title: "",
    para: "planning meeting for the next phase",
    personImage: [
      <Image src={P1} alt="" className="w-10" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 -ml-3" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 ml-6" />,
    ],
  },
  {
    type: "UX Design",
    color: "blue-200",
    title: "IOS App - 95 Screens",
    para: "all the details are attached. it’ll be dope!              ",
    personImage: [
      <Image src={P1} alt="" className="w-10" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 -ml-3" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 ml-6" />,
    ],
  },
  {
    type: "UX Design",
    color: "blue-200",
    title: "IOS App - 95 Screens",
    para: "all the details are attached. it’ll be dope!              ",
    personImage: [
      <Image src={P1} alt="" className="w-10" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 -ml-3" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 ml-6" />,
    ],
  },
  {
    type: "UX Design",
    color: "blue-200",
    title: "IOS App - 95 Screens",
    para: "all the details are attached. it’ll be dope!              ",
    personImage: [
      <Image src={P1} alt="" className="w-10" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 -ml-3" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 ml-6" />,
    ],
  },
  {
    type: "Wireframes",
    color: "purple-300",
    title: "privacy policy page and terms & conditions",
    para: "all the details are attached. it’ll be dope!              ",
    personImage: [
      <Image src={P1} alt="" className="w-10" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 -ml-3" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 ml-6" />,
    ],
  },
  {
    type: "UX Design",
    color: "blue-200",
    title: "IOS App - 95 Screens",
    para: "all the details are attached. it’ll be dope!              ",
    personImage: [
      <Image src={P1} alt="" className="w-10" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 -ml-3" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 ml-6" />,
    ],
  },
  {
    type: "Wireframes",
    color: "yellow-300",
    title: "presentation for dribbble",
    para: "all the details are attached. it’ll be dope!              ",
    personImage: [
      <Image src={P1} alt="" className="w-10" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 -ml-3" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 ml-6" />,
    ],
  },
  {
    type: "UX Design",
    color: "blue-200",
    title: "IOS App - 95 Screens",
    para: "all the details are attached. it’ll be dope!              ",
    personImage: [
      <Image src={P1} alt="" className="w-10" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 -ml-3" />,
      <Image src={P2} alt="" className="w-10 absolute z-10 ml-6" />,
    ],
  },
];
