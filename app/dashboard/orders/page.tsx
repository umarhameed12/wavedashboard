import dynamic from "next/dynamic";

const Orders = dynamic(() => import("@/modules/orders/orders"), {
  ssr: false,
});

export default function page() {
  return <Orders />;
}
