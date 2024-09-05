import ContactDetails from "@/components/helpcenter/contact/contact-details";
import ContactForm from "@/components/helpcenter/contact/contact-form";
import React from "react";

export default function Contact() {
  return (
    <div className="flex lg:flex-row xs:flex-col items-center justify-center m-4">
      <div className="flex lg:flex-row xs:flex-col  p-4 lg:p-10 justify-center  gap-12 bg-white dark:bg-dark rounded-lg w-full">
        <div className="lg:w-1/2 w-full ">
          <ContactDetails />
        </div>
        <div className="lg:w-1/2 xs:w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
