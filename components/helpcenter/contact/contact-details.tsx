import Image from "next/image";
import Call from "@/assets/icons/call.svg";
import Message from "@/assets/icons/message-blue.svg";
import Location from "@/assets/icons/location-blue.svg";
import Circle from "@/assets/icons/circle-contact.svg";
import CircleDot from "@/assets/icons/circle-dot.svg";

export default function ContactDetails() {
  return (
    <>
      <div className=" flex flex-col bg-dark dark:bg-dark200 h-full w-full text-white rounded-lg overflow-hidden">
        <div className="p-6 ">
          <div className="flex">
            <Image src={CircleDot} alt="Image" className="ml-auto" />
          </div>
          <h1 className="sm:text-5xl xs:text-2xl  font-semibold mb-8">
            Need help?
          </h1>
          <div className="space-y-8">
            <div className="flex gap-3">
              <Image src={Call} alt="Call Icon" className="sm:w-8 xs:w-6" />
              <p className="sm:text-2xl xs:text-lg">+1 875621988</p>
            </div>
            <div className="flex gap-2">
              <Image src={Message} alt="Call Icon" className="sm:w-8 xs:w-6" />
              <p className="sm:text-2xl xs:text-lg">youremail@email.com</p>
            </div>
            <div className="flex gap-2">
              <Image src={Location} alt="Call Icon" className="sm:w-8 xs:w-6" />
              <p className="sm:text-2xl xs:text-lg">
                880 Mulberry Lane, FL Florida
              </p>
            </div>
          </div>
        </div>
        <div className="mt-auto ">
          <Image src={Circle} alt="circle" />
        </div>
      </div>
    </>
  );
}
