"use client";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import Cross from "@/assets/icons/cross.svg";
import Preson from "@/assets/emails/person.svg";
import Button from "@/components/buttons/button";
interface InboxModal {
  showModal: boolean;
}
export default function InboxModal({ showModal }: InboxModal) {
  const falseModal = () => {
    showModal = false;
    console.log("showModal Value", showModal);
  };
  console.log("showModal Value", showModal);

  return (
    // <div className="fixed top-0 left-0 right-0 w-full h-full bottom-0 flex justify-center items-center  p-4 overflow-x-hidden">
    //   <div className="relative w-1/5  max-h-full bg-black bg-opacity-50  inset-0">
    //     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
    //       <div className="w-full h-4/5 p-4 my-auto  ">
    //         {/* <div className="w-1/3 bg-white dark:bg-dark rounded-lg p-4"> */}
    //         <div className="flex justify-between items-center">
    //           <h1 className="font-semibold text-lg">Sara Smith</h1>
    //           <button onClick={handleToggle}>
    //             <Image src={Cross} alt="Cross button" />
    //           </button>
    //         </div>
    //         <hr className="my-4" />
    //         <form action="" className="space-y-4">
    //           <input
    //             type="text"
    //             placeholder="To"
    //             className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 dark:outline-200 "
    //           />
    //           <div className="flex gap-4 w-full flex-wrap">
    //             <div className="flex items-center bg-slate-100 dark:bg-dark rounded-full p-2 gap-2 ">
    //               <Image src={Preson} alt="preson image" className="w-6" />
    //               <p className="text-sm">aleee@gmail.com</p>
    //             </div>
    //             <div className="flex items-center bg-slate-100 dark:bg-dark rounded-full p-2 gap-2">
    //               <Image src={Preson} alt="preson image" className="w-6" />
    //               <p className="text-sm">asdfas@gmail.com</p>
    //             </div>
    //           </div>
    //           <input
    //             type="text"
    //             placeholder="Subject"
    //             className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 dark:outline-200 "
    //           />
    //           <textarea
    //             name=""
    //             id=""
    //             placeholder="Message...."
    //             className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 dark:outline-200 "
    //           />
    //         </form>
    //         <hr className="my-4" />
    //         <div className="flex gap-4">
    //           <button className="text-red bg-rose-200 dark:bg-rose-300 w-full rounded-lg  p-2 flex items-center justify-center">
    //             Delete
    //           </button>
    //           <Button text="Send" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>

    // dkjaklfjasdklf
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 right-0 w-full h-full bottom-0 flex justify-center items-center  p-4 overflow-x-hidden  bg-black bg-opacity-50  inset-0">
          <div className="relative w-1/3 ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="w-full h-4/5 p-4 my-auto  ">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-lg">Sara Smith</h1>
                  <button onClick={falseModal}>
                    <Image src={Cross} alt="Cross button" />
                  </button>
                </div>
                <hr className="my-4" />
                <form action="" className="space-y-4">
                  <input
                    type="text"
                    placeholder="To"
                    className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 dark:outline-200 "
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
                    className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 dark:outline-200 "
                  />
                  <textarea
                    name=""
                    id=""
                    placeholder="Message...."
                    className="bg-slate-100 outline-none py-3 px-4 w-full rounded-lg dark:bg-dark200 dark:outline-200 "
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
