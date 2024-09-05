import ProductDatatable from "@/components/products/product-datatable";
import ProductHeader from "@/components/products/product-head";

export default function Products() {
  return (
    <div className="bg-white rounded-lg m-4 p-4 items-center text-black dark:bg-dark">
      <ProductHeader />
      <div>
        <ProductDatatable />
      </div>
    </div>
  );
}
