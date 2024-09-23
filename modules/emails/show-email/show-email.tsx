import InboxCard from "@/components/emails/inbox/inbox-card";
import EmailReceived from "@/components/emails/show-email/email-received";
import React from "react";

export default function ShowEmail() {
  return (
    <div className="flex lg:flex-row xs:flex-col m-4 gap-4">
      <div className="mb-2 lg:hidden xs:block">
        <InboxCard />
      </div>
      <div className=" lg:w-3/4 xs:w-full xs: bg-white rounded-lg p-4 dark:bg-dark">
        <EmailReceived />
      </div>
      <div className="lg:w-1/4 xs:w-full lg:block xs:hidden">
        <InboxCard />
      </div>
    </div>
  );
}
