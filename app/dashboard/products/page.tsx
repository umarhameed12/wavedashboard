import dynamic from "next/dynamic";
// import Products from "@/modules/products/products";
const Products = dynamic(() => import("@/modules/products/products"), {
  ssr: false,
});

export default function page() {
  return <Products />;
}
