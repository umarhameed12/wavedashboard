import React, { ReactNode, useState } from "react";
import Button from "../buttons/button";
import CopyableText from "./CopyableText";
interface Card {
  cardData: ReactNode;
  code: string;
  height: string;
  width: string;
  flex: string;
}

export default function Card({ cardData, code, height, width, flex }: Card) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4   ">
      <div className="text-center">
        <button
          className="bg-white dark:bg-dark  mx-4 p-2 rounded-t-lg"
          onClick={() => setIsOpen(false)}
        >
          Preview
        </button>
        <button onClick={() => setIsOpen(true)}>code</button>
      </div>
      {isOpen ? (
        <CopyableText text={code} height={height} width={width} />
      ) : (
        <div
          className={`bg-white dark:bg-dark rounded-lg ${height}  ${width} flex ${flex} gap-10`}
        >
          {cardData}
        </div>
      )}
    </div>
  );
}
