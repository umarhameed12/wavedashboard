import React from "react";

interface Product {
  name: string;
  price: number;
  image: React.ReactNode;
}

export default function Product({ name, price, image }: Product) {
  return (
    <div className="flex gap-4">
      {image}
      <div>
        <p className="text-base font-medium capitalize">{name}</p>
        <p className="text-sm text-productPrice">{price}</p>
      </div>
    </div>
  );
}
