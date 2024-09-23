"use client";
import Image from "next/image";
import React, { useState } from "react";
import Inbox from "@/assets/icons/inbox.svg";
import Star from "@/assets/icons/star.svg";
import Envelope from "@/assets/icons/envelope-check.svg";
import Drafts from "@/assets/icons/darft.svg";
import Important from "@/assets/icons/important.svg";
import Trash from "@/assets/icons/trash.svg";
import InboxModal from "../inbox-modal/inbox-modal";
import Cross from "@/assets/icons/cross.svg";
import Preson from "@/assets/emails/person.svg";
import Button from "@/components/buttons/button";

export default function InboxCard() {
  const [showModal, setShowModal] = useState(false);
  const handleToggle = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-lg w-full p-4 space-y-4 dark:bg-dark">
        <button
          className="text-white w-full rounded-lg bg-200  p-2 flex items-center justify-center"
          onClick={handleToggle}
        >
          Compose
        </button>
        <div className="space-y-4 ">
          {/* <div className="flex items-center  gap-2 "> */}
          <div className="flex items-center gap-2 ">
            <Image src={Inbox} alt="" />
            <p>Inbox</p>
            <p className="ml-auto ">(1784)</p>
          </div>
          <div className="flex items-center gap-2 ">
            <Image src={Star} alt="Star icon" />
            <p>Starred</p>
            <span className="ml-auto ">(0)</span>
          </div>
          <div className="flex items-center gap-2 ">
            <svg
              className="w-6 h-6 text-[#626262]  "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>

            <p>Sent Emails</p>
            <span className="ml-auto ">(54)</span>
          </div>
          <div className="flex items-center gap-2 ">
            <Image src={Drafts} alt="Darfts icon" />
            <p>Darfts</p>
            <span className="ml-auto ">(2)</span>
          </div>
          <div className="flex items-center gap-2 ">
            <Image src={Important} alt="Important icon" />
            <p className="">Important</p>
            <span className="ml-auto ">(0)</span>
          </div>
          <div className="flex items-center gap-2 ">
            <Image src={Trash} alt="Star icon" />
            <p>Trash</p>
            <span className="ml-auto ">(38)</span>
          </div>
        </div>
      </div>
      {showModal ? (
        <div className="z-[999] fixed top-0 left-0 right-0 w-full h-full bottom-0 flex justify-center items-center  p-4 overflow-x-hidden  bg-black bg-opacity-50  inset-0">
          <div className="relative md:w-1/2 xs:w-full ">
            <div className="relative bg-white rounded-lg shadow dark:bg-dark">
              <div className="w-full h-4/5 p-4 my-auto  ">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg">Sara Smith</h1>
                  <button onClick={() => setShowModal(false)}>
                    <Image src={Cross} alt="Cross button" />
                  </button>
                </div>
                <hr className="my-4" />
                <form action="" className="space-y-4">
                  <input
                    type="text"
                    placeholder="To"
                    className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
                  />
                  <div className="flex gap-4 w-full flex-wrap">
                    <div className="flex items-center bg-slate-100 dark:bg-dark rounded-full p-2 gap-2 ">
                      <Image src={Preson} alt="preson image" className="w-6" />
                      <p className="text-sm">aleee@gmail.com</p>
                    </div>
                    <div className="flex items-center bg-slate-100 dark:bg-dark rounded-full p-2 gap-2">
                      <Image src={Preson} alt="preson image" className="w-6" />
                      <p className="text-sm">asdfas@gmail.com</p>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
                  />
                  <textarea
                    name=""
                    id=""
                    placeholder="Message...."
                    className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200  "
                  />
                </form>
                <hr className="my-4" />
                <div className="flex gap-4">
                  <button className="text-red bg-rose-200 dark:bg-rose-300 w-full rounded-lg  p-2 flex items-center justify-center">
                    Delete
                  </button>
                  <Button text="Send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
