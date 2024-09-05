import editIcon from "@/assets/individual/edit.svg";
import messageIcon from "@/assets/individual/message.svg";
import Person from "@/assets/individual/person.svg";

import { useTheme } from "next-themes";
import Image from "next/image";
// const { theme } = useTheme();

export const adminData = [
  {
    person: (
      <Image src={Person} alt="edit Icon" className="sm:w-1/3 xs:w-1/2" />
    ),
    name: "sara smith GC",
    title: "Chairman",
    editIcon: <Image src={editIcon} alt="edit Icon" />,
    edit: "edit profile",
    messageIcon: <Image src={messageIcon} alt="message Icon" />,
    message: "message",
    // emailIcon: <Image src={theme == "dark" ? email : emailLight} alt="email" />,
    emailTitle: "email",
    email: "sarasmith@wave.com",
    // birthdayIcon:
    //   <Image src={theme == "dark" ? birthday : birthdayLight} alt="birthday" />,
    birthdayTitle: "birthday",
    birthday: "18 aug 1990",
    // phoneIcon: <Image src={theme == "dark" ? phone : phoneLight} alt="" />,
    phoneTitle: "phone",
    phone: "+1 345 678 9012",
    // countryIcon:
    //   <Image src={theme == "dark" ? country : countryLight} alt="" />,
    countryTitle: "country",
    country: "USA",
    // stateIcon: <Image src={theme == "dark" ? state : stateLight} alt="" />,
    stateTitle: "state",
    state: "west Virginia",
    // addressIcon:
    //   <Image src={theme == "dark" ? address : addresseLight} alt="" />,
    addressTitle: "address",
    address: "baker street no.6",
  },
];

export const activityData = [
  {
    date: "18 august, 2023",
    time: "12:00 PM",
    status: "signout",
    text: "Sara smith signed out of the system",
  },
];
