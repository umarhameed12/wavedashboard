import Button from "../buttons/button";
import Person from "@/assets/individual/person.svg";
import Star from "@/assets/icons/star-color.svg";
import angleRight from "@/assets/icons/angle-right-blue.svg";
import WaveLogo from "@/assets/logo/wave-logo.svg";
import Search from "@/assets/icons/search.svg";
import user from "@/assets/magicoon/user.svg";
import userDark from "@/assets/magicoon/user-dark.svg";
import messageCheck from "@/assets/magicoon/message-check-alt.svg";
import messageCheckDark from "@/assets/magicoon/message-check-alt-dark.svg";
import error from "@/assets/cards/error.svg";
import warning from "@/assets/cards/warning.svg";
import success from "@/assets/cards/success.svg";
import dialog from "@/assets/cards/dailog.svg";
import copyText from "@/assets/cards/copy-text.png";

import Image from "next/image";
import { useTheme } from "next-themes";
import Label from "../forms/label";

export const c1 = (
  <>
    <div className=" rounded-l p-4 h-3/5"></div>
    <div className="bg-white dark:bg-button p-4   space-y-4 h-2/5">
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Button text={"Button"} />
    </div>
  </>
);
export const c1Code = `
    <div className=" rounded-l p-4 h-3/5"></div>
    <div className="bg-white dark:bg-button p-4   space-y-4 h-2/5">
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Button text={"Button"} />
    </div>
    `;
export const c2 = (
  <>
    <div className=" rounded-l p-4  h-2/5"></div>
    <div className="bg-white dark:bg-button p-4  h-3/5  space-y-4 ">
      <h3>profile</h3>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div className="flex gap-8 items-center">
        <Image src={Person} alt="person" className="w-1/5" />
        <div className="space-y-4">
          <p className="capitalize font-semibold">galen lewis</p>
          <span>4 hours ago</span>
        </div>
      </div>
    </div>
  </>
);
export const c2Code = `   <div className=" rounded-l p-4  h-2/5"></div>
    <div className="bg-white dark:bg-button p-4  h-3/5  space-y-4 ">
      <h3>profile</h3>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div className="flex gap-8 items-center">
        <Image src={Person} alt="person" className="w-1/5" />
        <div className="space-y-4">
          <p className="capitalize font-semibold">galen lewis</p>
          <span>4 hours ago</span>
        </div>
      </div>
    </div>`;
export const c3 = (
  <>
    <div className=" rounded-l p-4 h-2/3"></div>
    <div className="bg-white dark:bg-button p-4   space-y-4 h-2/5">
      <h2>Puzzles Coffee Shop</h2>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
        </div>
        512+ Reviews
      </div>
      <p className="line-clamp-2">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </>
);
export const c3Code = `
    <div className=" rounded-l p-4 h-2/3"></div>
    <div className="bg-white dark:bg-button p-4   space-y-4 h-2/5">
      <h2>Puzzles Coffee Shop</h2>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
        </div>
        512+ Reviews
      </div>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    `;
export const c4 = (
  <>
    <div className=" rounded-l p-4 h-3/5"></div>
    <div className="bg-white dark:bg-button p-4   space-y-4 h-2/5">
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div className="flex justify-between items-center">
        <u className="text-200">See More</u>
        <Image src={angleRight} alt="angle right" />
      </div>
    </div>
  </>
);
export const c4Code = `


    <div className=" rounded-l p-4 h-3/5"></div>
    <div className="bg-white dark:bg-button p-4   space-y-4 h-2/5">
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div className="flex justify-between items-center">
        <u className="text-200">See More</u>
        <Image src={angleRight} alt="angle right" />
      </div>
    </div>
    `;

// shoping card
export const cardShopping1 = (
  <>
    <div className=" rounded-l p-4 w-3/5"></div>
    <div className="bg-white dark:bg-button p-8  w-2/5  space-y-4">
      <Image src={WaveLogo} alt="" />
      <h2>Puzzles Coffee Shop</h2>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Button text={"Button"} />
    </div>
  </>
);
export const cardShopping1Code = `
    <div className=" rounded-l p-4 w-3/5"></div>
    <div className="bg-white dark:bg-button p-8  w-2/5  space-y-4">
      <Image src={WaveLogo} alt="" />
      <h2>Puzzles Coffee Shop</h2>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <Button text={"Button"} />
    </div>
    `;
export const cardShopping2 = (
  <>
    <div className=" rounded-l p-4 w-1/2"></div>

    <div className="bg-white dark:bg-button p-4  w-1/2  space-y-4">
      <Label label="Fullname" />
      <div className="bg-neutral-100 flex gap-2 p-3  rounded-lg dark:bg-dark200">
        {/* <Image src={theme === "dark" ? userDark : user} alt="leaf" /> */}
        <Image src={user} alt="leaf" />

        <input
          type="text"
          name=""
          id=""
          placeholder="Your Fullname "
          className="border-none w-full bg-transparent outline-none text-black"
        />
      </div>
      <Label label="Email" />
      <div className="bg-neutral-100 flex gap-2 p-3  rounded-lg dark:bg-dark200">
        {/* <Image
                  src={theme === "dark" ? messageCheckDark : messageCheck}
                  alt="leaf"
                /> */}
        <Image src={messageCheck} alt="leaf" />

        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Your Email"
          className="border-none w-full bg-transparent outline-none text-black"
        />
      </div>
      <Button text="Submit" />
    </div>
  </>
);
export const cardShopping2Code = `
<div className=" rounded-l p-4 w-1/2"></div>

<div className="bg-white dark:bg-button p-4  w-1/2  space-y-4">
  <Label label="Fullname" />
  <div className="bg-neutral-100 flex gap-2 p-3  rounded-lg dark:bg-dark200">
    {/* <Image src={theme === "dark" ? userDark : user} alt="leaf" /> */}
    <Image src={user} alt="leaf" />

    <input
      type="text"
      name=""
      id=""
      placeholder="Your Fullname "
      className="border-none w-full bg-transparent outline-none text-black"
    />
  </div>
  <Label label="Email" />
  <div className="bg-neutral-100 flex gap-2 p-3  rounded-lg dark:bg-dark200">
    {/* <Image
              src={theme === "dark" ? messageCheckDark : messageCheck}
              alt="leaf"
            /> */}
    <Image src={messageCheck} alt="leaf" />

    <input
      type="text"
      name=""
      id=""
      placeholder="Enter Your Email"
      className="border-none w-full bg-transparent outline-none text-black"
    />
  </div>
  <Button text="Submit" />
</div>`;

export const card1 = (
  <>
    <div className="bg-white dark:bg-button p-8   space-y-4 h-full">
      <h2 className="font-semibold text-xl">Puzzles Coffee Shop</h2>
      <p className="line-clamp">
        Some quick example text to build on the card title and make up the bulk
        of the card's content. Some quick example text to build on the card
        title and make up the bulk of the card's content. Some quick example
        text to build on the card title and make up the bulk of the card's
        content....
      </p>
      <div className="flex justify-between items-center ">
        <u className="text-200">See More</u>
        <Image src={angleRight} alt="angle right" />
      </div>
    </div>
  </>
);
export const card1Code = `
    <div className="bg-white dark:bg-button p-8   space-y-4 h-full">
      <h2 className="font-semibold text-xl">Puzzles Coffee Shop</h2>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content. Some quick example text to build on the card
        title and make up the bulk of the card's content. Some quick example
        text to build on the card title and make up the bulk of the card's
        content. Some quick example text to build on the card title and make
        up...
      </p>
      <div className="flex justify-between items-center ">
        <u className="text-200">See More</u>
        <Image src={angleRight} alt="angle right" />
      </div>
    </div> `;
export const card2 = (
  <>
    <div className="bg-white dark:bg-button p-8 space-y-4 h-3/5">
      <h2 className="font-semibold text-xl">Puzzles Coffee Shop</h2>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div className="flex justify-between items-center ">
        <u className="text-200">See More</u>
        <Image src={angleRight} alt="angle right" />
      </div>
    </div>
    <div className=" rounded-l p-4 h-2/5"></div>
  </>
);
export const card2Code = `
      <div className="bg-white dark:bg-button p-8 space-y-4 h-3/5">
              <h2 className="font-semibold text-xl">Puzzles Coffee Shop</h2>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="flex justify-between items-center ">
                <u className="text-200">See More</u>
                <Image src={angleRight} alt="angle right" />
              </div>
            </div>
            <div className=" rounded-l p-4 h-2/5"></div`;
export const card3 = (
  <>
    <div className=" rounded-l p-4 h-5/6"></div>

    <div className="bg-white dark:bg-button p-4   space-y-4 rounded-b-lg">
      <h2 className="font-semibold text-xl">Puzzles Coffee Shop</h2>
    </div>
  </>
);
export const card3Code = `
     <div className=" rounded-l p-4 h-5/6"></div>

            <div className="bg-white dark:bg-button p-4   space-y-4 rounded-b-lg">
              <h2 className="font-semibold text-xl">Puzzles Coffee Shop</h2>
            </div>`;
export const card4 = (
  <div className="flex flex-col justify-center items-center p-4 space-y-3">
    <Image src={WaveLogo} alt="wave logo" />
    <h2 className="font-semibold text-xl">Branding & Product Design</h2>
    <p className="text-center">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
);
export const card4Code = `
     <Image src={WaveLogo} alt="wave logo" />
            <h2 className="font-semibold text-xl">Branding & Product Design</h2>
            <p className="text-center">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            `;

export const errorCard = (
  <div className="flex flex-col justify-center items-center space-y-3 p-4">
    <Image src={error} alt="wave logo" />
    <h2 className="font-semibold text-xl text-red">Error</h2>
    <p className="text-center">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
);
export const errorCode = ` <Image src={error} alt="wave logo" />
<h2 className="font-semibold text-xl text-red">Error</h2>
<p className="text-center">
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</p>
`;
export const warningCard = (
  <div className="flex flex-col justify-center items-center space-y-3 p-4">
    <Image src={warning} alt="wave logo" />
    <h2 className="font-semibold text-xl text-yellow-400">Warning</h2>
    <p className="text-center">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
);
export const warningCode = `  <Image src={warning} alt="wave logo" />
<h2 className="font-semibold text-xl text-yellow-400">Warning</h2>
<p className="text-center">
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</p>
`;
export const successCard = (
  <div className="flex flex-col justify-center items-center space-y-3 p-4">
    <Image src={success} alt="wave logo" />
    <h2 className="font-semibold text-xl text-green">Success</h2>
    <p className="text-center">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
);
export const successCode = `  <Image src={success} alt="wave logo" />
<h2 className="font-semibold text-xl text-green">Success</h2>
<p className="text-center">
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</p>
`;
export const dialogCard = (
  <div className="flex flex-col justify-center items-center space-y-3 p-4">
    <Image src={dialog} alt="wave logo" />
    <h2 className="font-semibold text-xl text-200">Dialog</h2>
    <p className="text-center">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
);
export const dialogCode = `<Image src={dialog} alt="wave logo" />
<h2 className="font-semibold text-xl text-200">Dialog</h2>
<p className="text-center">
  Some quick example text to build on the card title and make up the
  bulk of the card's content.
</p>
`;
