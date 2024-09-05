import Error from "@/components/error/error";
import { error404 } from "@/modules/error/error-data";

export default function page() {
  return (
    <>
      {error404.map((item) => (
        <Error icon={item.icon} title={item.title} para={item.para} />
      ))}
    </>
  );
}
