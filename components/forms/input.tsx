import React, { ReactNode } from "react";

interface InputProps {
  name?: string;
  leftElement?: ReactNode;
  placeHolder: string;
  rightElement?: ReactNode;
  value?: string;
  onChange?: (e: any) => void;
}

export default function Input({
  name,
  leftElement,
  placeHolder,
  rightElement,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="w-full bg-100 dark:bg-dark200  px-4 py-3 flex items-center rounded-lg space-x-3">
      {leftElement && leftElement}
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className="outline-none w-full focus:outline-none bg-transparent"
        placeholder={placeHolder}
      />
      {rightElement && rightElement}
    </div>
  );
}
