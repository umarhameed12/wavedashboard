import React from "react";

interface SidebarHeading {
  text: string;
}

export default function SidebarHeading({ text }: SidebarHeading) {
  return <p className="text-xs font-semibold uppercase">{text}</p>;
}
