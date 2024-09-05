import Button from "@/components/buttons/button";
import Label from "@/components/forms/label";
import React from "react";

export default function ContactForm() {
  return (
    <form action="" className="space-y-2 w-full text-white rounded-lg">
      <Label label="First Name" />
      <input
        type="text"
        placeholder="Your First Name"
        className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
      />
      <Label label="Last Name" />
      <input
        type="text"
        placeholder="Your Last Name"
        className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
      />
      <Label label="Email" />
      <input
        type="text"
        placeholder="Enter Your Email"
        className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
      />
      <Label label="Message" />
      <textarea
        name=""
        id=""
        placeholder="Enter Your Message"
        className="bg-slate-100 outline-none py-3 px-4 w-full h-44 rounded-lg dark:bg-dark200  "
      />
      <Button text="Submit" />
    </form>
  );
}
