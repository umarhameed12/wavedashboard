import React from "react";

interface Label {
  label: string;
}

export default function Label({ label }: Label) {
  return <p className="text-base text-primary dark:text-white font-medium">{label}</p>;
}
