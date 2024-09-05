import InboxCard from "@/components/emails/inbox/inbox-card";
import InboxDatatable from "@/components/emails/inbox/inbox-datatable";
import InboxHeader from "@/components/emails/inbox/inbox-header";
import React from "react";

export default function Inbox() {
  return (
    <div className="flex lg:flex-row xs:flex-col m-4 gap-8">
      <div className="mb-2 lg:hidden xs:block">
        <InboxCard />
      </div>
      <div className="lg:w-3/4 xs:w-full xs: bg-white rounded-lg p-4 dark:bg-dark ">
        <InboxHeader />
        <div>
          <InboxDatatable />
        </div>
      </div>
      <div className="lg:w-1/5 xs:w-full lg:block xs:hidden  ">
        <InboxCard />
      </div>
    </div>
  );
}
