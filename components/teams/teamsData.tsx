import Image from "next/image";
import React from "react";
import Person1 from "@/assets/team/p1.svg";
import Person2 from "@/assets/team/p2.svg";
import Person3 from "@/assets/team/p3.svg";
import Person4 from "@/assets/team/p4.svg";
import Person5 from "@/assets/team/p5.svg";
import Person6 from "@/assets/team/p6.svg";
import Person7 from "@/assets/team/p7.svg";
import Person8 from "@/assets/team/p8.svg";

export const TeamsData = [
  {
    icon: <Image src={Person1} alt={"Person1"} />,
    name: "sara smith GC",
    role: "Chairman",
  },
  {
    icon: <Image src={Person2} alt={"Person1"} />,
    name: "Betsy Gardner",
    role: "Data Entry Clerk",
  },
  {
    icon: <Image src={Person3} alt={"Person1"} />,
    name: "sara smith GC",
    role: "Chairman",
  },
  {
    icon: <Image src={Person4} alt={"Person1"} />,
    name: "Bushra Fischer",
    role: "Office Assistant",
  },
  {
    icon: <Image src={Person5} alt={"Person1"} />,
    name: "Bushra Fischer",
    role: "Office Assistant",
  },
  {
    icon: <Image src={Person6} alt={"Person1"} />,
    name: "Bushra Fischer",
    role: "Office Assistant",
  },
  {
    icon: <Image src={Person7} alt={"Person1"} />,
    name: "Bushra Fischer",
    role: "Office Assistant",
  },
  {
    icon: <Image src={Person8} alt={"Person1"} />,
    name: "Bushra Fischer",
    role: "Office Assistant",
  },
];
