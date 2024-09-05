import Image from "next/image";
import React from "react";
import Preson from "@/assets/emails/person.svg";

import Dropdown from "@/assets/icons/dropdown.svg";
import Star from "@/assets/icons/star-transparent.svg";
import Reply from "@/assets/icons/reply.svg";
import File from "@/assets/icons/file.svg";
import Link from "next/link";

export default function EmailReceived() {
  return (
    <div>
      <div className="flex lg:flex-row xs:flex-col items-center gap-2 my-4 ">
        <Image src={Preson} alt="Sender Image" />

        <div className="space-y-3">
          <div className="flex gap-2 items-center lg:flex-row xs:flex-col ">
            <h1 className="text-xl font-bold">sara smith GC</h1>
            <span className="text-sm font-medium pl-2 text-blue-500">
              {"<sarasmith@wavellc.com>"}
            </span>
          </div>

          <div className="flex ">
            <p>To me</p>
            <Image src={Dropdown} alt="" />
          </div>
        </div>
        <div className="lg:ml-auto flex  items-center px-2 space-y-3 gap-4 ">
          <div className="mt-4">
            <Image src={Star} alt="" />
            <p>Star</p>
          </div>
          <div>
            <Image src={Reply} alt="" />
            <p>Reply</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 lg:mb-44 xs:mb-20">
        <h1 className="font-semibold lg:text-xl xs:text-base capitalize">
          top stories this week
        </h1>
        <p className="text-justify">
          <span className="block">Dear Sara,</span> tempus sit aliquam enim
          aenean massa a risus. Arcu cras facilisis molestie etiam quam. Purus
          tellus iaculis ac eget cursus. Purus adipiscing id sagittis cursus
          vulputate mauris ante nec neque. Nec eleifend gravida vel nulla.
          Fermentum tempus ornare lorem mi sollicitudin eget. Enim at sapien
          eget sed semper aliquet. Quis vitae etiam arcu urna ipsum at elementum
          feugiat. Suspendisse at lacus tempus nisl urna vitae ullamcorper diam
          proin. Neque augue pulvinar auctor quis nunc viverra netus ac. Proin
          nisl vitae lorem arcu laoreet. Donec sit diam lectus ultrices.
          <span className="block my-4">Regards</span>
        </p>
      </div>
      <div className="space-y-4 ">
        <h2 className="font-semibold text-lg">
          Attachments <span>(2)</span>
        </h2>
        <div className="flex lg:flex-row xs:flex-col gap-4 lg:items-center">
          <div className="flex gap-2 items-center">
            <Image src={File} alt="" />
            <div className="space-y-4">
              <p className="text-base">Inquiry.pdf</p>
              <span className="pr-2">5.7 MB</span>
              <span>PDF</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={File} alt="" />
            <div className="space-y-4">
              <p>imge.jpg</p>
              <span>5.7 MB</span>
              <span>JPG</span>
            </div>
          </div>
          <Link href="" className="lg:ml-auto text-blue-600">
            <u>Download All</u>
          </Link>
        </div>
      </div>
    </div>
  );
}
