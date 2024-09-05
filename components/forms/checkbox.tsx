import React from "react";

export default function Checkbox() {
  return (
    <label>
      <div className="flex items-center space-x-2 py-3 select-none">
        <input type="checkbox" />
        <p className="text-base capitalize">
          i agree to the{" "}
          <span className="text-200 underline cursor-pointer">terms of service</span> and{" "}
          <span className="text-200 underline cursor-pointer">privacy policy</span>
        </p>
      </div>
    </label>
  );
}
