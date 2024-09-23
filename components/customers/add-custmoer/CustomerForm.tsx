import React from "react";
import Label from "../../forms/label";

export default function CustomerForm() {
  return (
    <div>
      <form action="" className="space-y-4">
        <div className="flex lg:flex-row xs:flex-col xs:gap-10  w-full">
          <div className=" space-y-4 lg:mt-0 xs:mt-4 lg:w-1/2">
            <Label label="Full Name" />
            <input
              type="text"
              placeholder="Your Full Name"
              className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 "
            />
            <Label label="Email" />
            <input
              type="email"
              placeholder="Email"
              className="bg-slate-100 outline-none py-3 px-4  w-full rounded-lg  dark:bg-dark200 "
            />
            <Label label="Birthday" />
            <input
              type="text"
              placeholder="DD/MM/YY"
              className="bg-slate-100 outline-none py-3 px-4 w-full  rounded-lg  dark:bg-dark200 "
            />
            <Label label="Birthday" />
            <input
              type="text"
              placeholder="Enter Your Address"
              className="bg-slate-100 outline-none py-3 px-4 w-full  rounded-lg  dark:bg-dark200 "
            />
          </div>
          <div className="space-y-4 lg:w-1/2">
            <Label label="Gender" />

            <div className=" flex justify-start items-center space-x-2">
              <input
                type="radio"
                id="Male"
                name="gender"
                value="Male"
                className="h-4 rounded-full w-8 dark:bg-dark200 "
              />
              <Label label="Male" />
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                className="w-8 h-4 rounded-full dark:bg-dark200 "
              />
              <Label label="Female" />
              <input
                type="radio"
                id="Other"
                name="gender"
                value="Other"
                className="w-8 h-4 rounded-full dark:bg-dark200 "
              />
              <Label label="Other" />
            </div>
            <Label label="Company Name" />
            <input
              type="text"
              placeholder="Enter Company Name"
              className="bg-slate-100 outline-none py-3 px-4  w-full rounded-lg dark:bg-dark200  "
            />
            <Label label="Phone No." />
            <input
              type="text"
              placeholder="Enter Phone No."
              className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
            />
            <Label label="State/Region" />
            <input
              type="text"
              placeholder="Enter State/Region"
              className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
            />
            <Label label="Zip Code" />
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
            />
          </div>
        </div>
        <Label label="Bio" />
        <textarea
          name=""
          id=""
          placeholder="Enter Bio"
          className="w-full bg-slate-100 rounded-lg p-4 h-28 dark:bg-dark200  outline-none"
        />
        <Label label="Notification Type" />
        <div className=" flex justify-start items-center space-x-2">
          <input
            type="checkbox"
            className="w-8 h-4 rounded-full dark:bg-dark200 "
          />
          <Label label="Email" />
          <input
            type="checkbox"
            className="w-8  h-4 rounded-full dark:bg-dark200 "
          />
          <Label label="SMS" />
          <input
            type="checkbox"
            className="w-8  h-4 rounded-full dark:bg-dark200 "
          />
          <Label label="Phone" />
        </div>
        <div className="flex lg:flex-row justify-center items-center gap-4  font-medium mt-4 xs:flex-col">
          <button className="text-red bg-[#FECDD3] flex-1 px-3 py-4 rounded-lg font-medium w-full ">
            Cancel
          </button>
          <button className="bg-200 text-white flex-1 px-3 py-4 rounded-lg font-medium w-full">
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
}
