import Image from "next/image";
import DashboardIcon from "@/assets/sidebar-icons/dashboard.svg";
import Analytics from "@/assets/sidebar-icons/analytics.svg";
import Profile from "@/assets/sidebar-icons/profile.svg";
import Teams from "@/assets/sidebar-icons/teams.svg";
import Task from "@/assets/sidebar-icons/task.svg";
import Customers from "@/assets/sidebar-icons/customers.svg";
import Products from "@/assets/sidebar-icons/products.svg";
import Orders from "@/assets/sidebar-icons/orders.svg";
import Invoices from "@/assets/sidebar-icons/invoices.svg";
import Emails from "@/assets/sidebar-icons/emails.svg";
import Chats from "@/assets/sidebar-icons/chats.svg";
import Auth from "@/assets/sidebar-icons/auth.svg";
import HelpCenter from "@/assets/sidebar-icons/helpcenter.svg";
import Maintenance from "@/assets/sidebar-icons/maintenance.svg";
import Error from "@/assets/sidebar-icons/error.svg";
import Calendar from "@/assets/sidebar-icons/calendar.svg";
import Icons from "@/assets/sidebar-icons/icon.svg";
import Cards from "@/assets/sidebar-icons/cards.svg";
import Gallery from "@/assets/sidebar-icons/gallery.svg";
import Charts from "@/assets/sidebar-icons/charts.svg";
import Accordion from "@/assets/sidebar-icons/accordion-down.svg";

export const managementItems = [
  {
    icon: <Image src={DashboardIcon} alt={"dashboard"} />,
    link: "/dashboard",
    text: "dashboard",
    accordion: "",
    dropdown: false,
  },
  {
    icon: <Image src={Analytics} alt={"analytics"} />,
    link: "/dashboard/analytics/products",
    text: "analytics",
    accordion: <Image src={Accordion} alt={"Accordion"} />,
    dropdown: true,
  },
  {
    icon: <Image src={Profile} alt={"profile"} />,
    link: "/dashboard/profile",
    text: "profile",
    accordion: <Image src={Accordion} alt={"Accordion"} />,
    dropdown: true,
  },
  {
    icon: <Image src={Teams} alt={"teams"} />,
    link: "/dashboard/teams",
    text: "teams",
    accordion: "",
    dropdown: false,
  },
  {
    icon: <Image src={Task} alt={"task"} />,
    link: "/dashboard/tasks",
    text: "tasks",
    accordion: "",
    dropdown: false,
  },
  {
    icon: <Image src={Customers} alt={"customers"} />,
    link: "/dashboard/customers",
    text: "customers",
    accordion: "",
    dropdown: false,
  },
  {
    icon: <Image src={Products} alt={"products"} />,
    link: "/dashboard/products",
    text: "products",
    accordion: "",
    dropdown: false,
  },
  {
    icon: <Image src={Orders} alt={"orders"} />,
    link: "/dashboard/orders",
    text: "orders",
    accordion: "",
    dropdown: false,
  },
  {
    icon: <Image src={Invoices} alt={"invoices"} />,
    link: "/dashboard/invoices",
    text: "invoices",
    accordion: <Image src={Accordion} alt={"Accordion"} />,
    dropdown: true,
  },
  {
    icon: <Image src={Emails} alt={"emails"} />,
    link: "/dashboard/emails",
    text: "Emails",
    accordion: "",
    dropdown: false,
  },
  {
    icon: <Image src={Chats} alt={"chats"} />,
    link: "/dashboard/chats",
    text: "Chats",
    accordion: "",
    dropdown: false,
  },
  /* {
    icon: <Image src={Auth} alt={"Auth"} />,
    link: "/dashboard/auht",
    text: "Authentication",
    accordion: <Image src={Accordion} alt={"Accordion"} />,
    dropdown: true,
  },
  {
    icon: <Image src={HelpCenter} alt={"Help Center"} />,

    link: "/dashboard/helpcenter",
    text: "Help Center",
    accordion: <Image src={Accordion} alt={"Accordion"} />,
    dropdown: true,
  },
  {
    icon: <Image src={Maintenance} alt={"Maintenance"} />,
    link: "/dashboard/maintenance",
    text: "Maintenance",
    accordion: "",
    dropdown: "false",
  },
  {
    icon: <Image src={Error} alt={"Error"} />,
    link: "/dashboard/error",
    text: "Error",
    accordion: <Image src={Accordion} alt={"Accordion"} />,
    dropdown: true,
  },
  {
    icon: <Image src={Calendar} alt={"Calendar"} />,
    link: "/dashboard/calendar",
    text: "Calendar",
    accordion: "",
    dropdown: "false",
  },
  {
    icon: <Image src={Icons} alt={"Icons"} />,
    link: "/dashboard/icons/magicoon",
    text: "Icons",
    accordion: "",
    dropdown: "false",
  },
  {
    icon: <Image src={Cards} alt={"Cards"} />,
    link: "/dashboard/cards",
    text: "Cards",
    accordion: "",
    dropdown: "false",
  },
  {
    icon: <Image src={Gallery} alt={"Gallery"} />,
    link: "/dashboard/gallery",
    text: "Gallery",
    accordion: "",
    dropdown: "false",
  },
  {
    icon: <Image src={Charts} alt={"Charts"} />,
    link: "/dashboard/charts",
    text: "Charts",
    accordion: "",
    dropdown: "false",
  }, */
];