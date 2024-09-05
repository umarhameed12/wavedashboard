import Error404 from "@/assets/error/error404.svg";

import Error500 from "@/assets/error/error500.svg";
import Maintenance from "@/assets/error/maintenance.svg";

import Image from "next/image";

export const error404 = [
  {
    icon: <Image src={Error404} alt="Error ICON" />,
    title: "Ooops... page not found!",
    para: "The page you requested could not be found.            ",
  },
];
export const error500 = [
  {
    icon: <Image src={Error500} alt="Error ICON" />,
    title: "Ooops... server error!",
    para: "the server encountered an unexpected condition",
  },
];
export const maintenance = [
  {
    icon: <Image src={Maintenance} alt="Error ICON" className="md:w-1/3 xs:w-full" />,
    title: "We are under scheduled maintenance.",
    para: "Sorry for the inconvenience, we will be back shortly!           ",
  },
];
