import TextToggle from "@/components/text-toggle/text-toggle";
import { payment, support } from "./faq-data";

export default function Faq() {
  return (
    <div className="m-4 space-y-3">
      <div>
        <h1 className="text-2xl  font-semibold">Support</h1>
        {support.map((item) => (
          <TextToggle title={item.title} para={item.para} />
        ))}
        {/* <FaqSupport /> */}
      </div>
      <div>
        {/* <FaqPayments /> */}
        <h1 className="sm:text-2xl xs:text-xs sm:font-semibold xs:font-medium">
          Payments
        </h1>
        {payment.map((item) => (
          <TextToggle title={item.title} para={item.para} />
        ))}
        {/* <TextToggle /> */}
      </div>
    </div>
  );
}
