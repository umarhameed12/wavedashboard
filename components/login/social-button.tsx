import React, { ReactNode } from "react";

interface SocialButton {
  icon: ReactNode;
}

export default function SocialButton({ icon }: SocialButton) {
  return (
    <div className="w-1/3 flex items-center justify-center  rounded-lg bg-100 dark:bg-dark200 px-8 py-2 cursor-pointer">
      {icon}
    </div>
  );
}
