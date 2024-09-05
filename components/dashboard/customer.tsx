import React from "react";

interface Customer {
  name: string;
  email: string;
  image: React.ReactNode;
}

export default function Customer({ name, email, image }: Customer) {
  return (
    <div className="flex gap-4">
      {image}
      <div>
        <p className="text-base capitalize">{name}</p>
        <p className="text-sm text-productPrice">{email}</p>
      </div>
    </div>
  );
}
