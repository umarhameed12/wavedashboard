import React from "react";

interface Analytic {
  border: string;
  image: React.ReactNode;
  text: string;
  value: React.ReactNode;
  showIncremental?: boolean;
}

export default function Analytic({
  border,
  image,
  text,
  value,
  showIncremental,
}: Analytic) {
  return (
    <div className={`sm:w-1/5 xs:w-full border-t-4 ${border} pt-4`}>
      <div className="flex items-start sm:flex-row xs:flex-col gap-2">
        {/* {image} */}
        <div className="flex sm:flex-col xs:flex-row justify-between sm:items-start xs:items-center w-full">
          <p className="capitalize -mt-[9px] text-sm font-normal">{text}</p>
          <p className="text-base font-semibold flex items-center gap-2">
            {value}
            {showIncremental && (
              <>
                <p className="text-green">+7%</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 bg-green text-white dark:text-black p-0.5 rounded-full cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
