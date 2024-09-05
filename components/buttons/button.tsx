import React from "react";
import Spinner from "../spinner";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  loading?: boolean;
}

export default function Button({ text, onClick, loading }: ButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      onClick={onClick}
      className={`w-full rounded-lg bg-200 text-white  p-2 flex items-center justify-center cursor-pointer`}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
}
