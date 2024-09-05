import React, { useState } from "react";

interface Button {
  text: string;
  bg?: string;
  color?: string;
  image: React.ReactNode;
}

export default function Button({ text, bg, color, image }: Button) {
  return (
    <div
      className={`flex items-center text-sm justify-center gap-2 w-full rounded-lg ${
        bg ? bg : "bg-button"
      }  py-2 cursor-pointer`}
    >
      <p className={`capitalize ${color ? color : "text-200"}`}>{text}</p>

      {image}
    </div>
  );
}
