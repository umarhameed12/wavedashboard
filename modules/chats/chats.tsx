import ChatsInbox from "@/components/chats/chats-inbox";
import Chatting from "@/components/chats/chatting";
import React from "react";
import { chatsData } from "./chats-data";
import InboxHeader from "./inbox-header";

export default function Chats() {
  return (
    <div className="m-4 ">
      <div className="w-full flex justify-between gap-8">
        <div className="lg:w-2/5 xs:w-full bg-white dark:bg-dark rounded-lg p-4">
          <InboxHeader />
          <div className=" divide-y">
            <h1 className="text-xl font-bold">Recents</h1>
            {chatsData.map((items) => (
              <ChatsInbox
                image={items.image}
                name={items.name}
                text={items.text}
                time={items.time}
                notication={items.notification}
              />
            ))}
          </div>
        </div>
        <div className="w-3/5 lg:block xs:hidden dark:bg-dark rounded-lg">
          <Chatting />
        </div>
      </div>
    </div>
  );
}
