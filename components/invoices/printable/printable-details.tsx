import React from "react";

export default function PrintableDetails() {
  return (
    <div className="flex md:flex-row xs:flex-col md:gap-y-0 xs:gap-y-8 md:justify-between w-2/3">
      <div className="space-y-4 ">
        <h1 className="text-200 font-medium text-base">Invoice From</h1>
        <ul className="space-y-2 text-base ">
          <li>Wave LLC</li>
          <li>4183 Forest avenue</li>
          <li>new york city</li>
          <li>10011</li>
          <li>USA</li>
          <li>chriswood@wave.com</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h1 className="text-200 font-medium text-base">Invoice To</h1>
        <ul className="space-y-2 text-base">
          <li>Blueberry LLC</li>
          <li>344 roy alley</li>
          <li>denver</li>
          <li>80202</li>
          <li>USA</li>
          <li>chriswood@wave.com</li>
        </ul>
      </div>
    </div>
  );
}
