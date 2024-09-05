import Label from "@/components/forms/label";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search.svg";

export default function CustomerDetails() {
  return (
    <div>
      <form action="" className="flex md:flex-row xs:flex-col w-full gap-8">
        <div className="md:w-2/5  space-y-3">
          <h3 className="font-semibold lg:text-2xl xs:text-xl">
            Customer Details
          </h3>
          <Label label="Customer" />
          <input
            type="text"
            placeholder="Search Customer"
            className="bg-slate-100 py-3 px-4 outline-none w-full rounded-lg border-none dark:bg-dark200 "
          />
          <Label label="Phone No." />
          <input
            type="text"
            placeholder="Enter Phone No."
            className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 "
          />
          <Label label="Email" />
          <input
            type="text"
            placeholder="Enter your Email"
            className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 "
          />
          <Label label="Address" />
          <input
            type="text"
            placeholder="Enter Address"
            className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 "
          />
        </div>
        <div className="md:w-3/5 space-y-3 ">
          <h1 className="font-semibold lg:text-2xl md:text-base">
            Order Details
          </h1>
          <div className="gap-8 flex flex-col lg:flex-row lg:items-center w-full">
            <div className="space-y-4 w-full lg:w-1/2">
              <Label label="Date" />

              <input
                type="date"
                placeholder="DD/MM/YY"
                className="bg-slate-100 py-3 px-4 outline-none w-full rounded-lg border-none dark:bg-dark200"
              />
            </div>
            <div className="space-y-3 w-full lg:w-1/2">
              <Label label="Time" />
              <input
                type="time"
                placeholder="10:00 PM"
                className="bg-slate-100 py-3 px-4 outline-none w-full rounded-lg border-none dark:bg-dark200"
              />
            </div>
          </div>
          <div className="space-y-3">
            <Label label="Payment Method" />
            <div className="flex md:flex-row xs:flex-col md:items-center md:justify-start xs:items-start  space-x-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="w-4 h-4 rounded-full dark:bg-dark200 "
                />
                <Label label="Paypal" />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="w-4 h-4 rounded-full dark:bg-dark200 "
                />
                <Label label="Apple Pay" />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="w-4 h-4 rounded-full dark:bg-dark200 "
                />
                <Label label="Credit/Debit Card" />
              </div>
            </div>
          </div>
          <Label label="Comment" />
          <textarea
            name=""
            placeholder="Enter Comment"
            className="bg-slate-100 outline-none py-3 px-4 w-full h-36 rounded-lg dark:bg-dark200 "
          />
        </div>
      </form>
    </div>
  );
}
