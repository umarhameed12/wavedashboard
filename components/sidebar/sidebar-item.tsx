import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
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
import Accordion from "@/assets/sidebar-icons/accordion-down.svg";
import Icons from "@/assets/sidebar-icons/icon.svg";
import Cards from "@/assets/sidebar-icons/cards.svg";
import Gallery from "@/assets/sidebar-icons/gallery.svg";
import Charts from "@/assets/sidebar-icons/charts.svg";
import { usePathname } from "next/navigation";
import Academy from "@/assets/academy/icon.svg";
interface SidebarItemProps {
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ isOpen }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleProfile, setToggleProfile] = useState<boolean>(false);
  const [toggleInvoice, setToggleInvoice] = useState<boolean>(false);
  const [toggleAuth, setToggleAuth] = useState<boolean>(false);
  const [toggleError, setToggleError] = useState<boolean>(false);
  const [toggleHelp, setToggleHelp] = useState<boolean>(false);
  const [toggleIcon, setToggleIcon] = useState<boolean>(false);

  const pathname = usePathname();
  const segments = pathname.split("/");
  const lastSegment = segments.pop() || segments.pop();
  const [active, setActive] = useState(lastSegment || "dashboard");
  useEffect(() => {
    switch (pathname) {
      case "/dashboard":
        setActive("dashboard");
        break;
      case "/dashboard/analytics/products":
        setActive("productss");
        break;
      case "/dashboard/profile/adminprofile":
        setActive("adminprofile");
        break;
      case "/dashboard/profile/customerprofile":
        setActive("customerprofile");
        break;
      case "/dashboard/finance":
        setActive("finance");
        break;
      case "/dashboard/teams":
        setActive("teams");
        break;
      case "/dashboard/tasks":
        setActive("task");
        break;
      case "/dashboard/notifications":
        setActive("notifications");
        break;
      case "/dashboard/price":
        setActive("price");
        break;
      case "/dashboard/customers":
        setActive("customers");
        break;
      case "/dashboard/customers/addcustomer":
        setActive("customers");
        break;
      case "/dashboard/products":
        setActive("products");
        break;
      case "/dashboard/products/addproducts":
        setActive("products");
        break;
      case "/dashboard/orders":
        setActive("orders");
        break;
      case "/dashboard/orders/neworder":
        setActive("orders");
        break;
      case "/dashboard/invoices":
        setActive("invoices");
        break;
      case "/dashboard/invoices/printable":
        setActive("printable");
        break;
      case "/dashboard/emails":
        setActive("emails");
        break;
      case "/dashboard/chats":
        setActive("chats");
        break;
      case "/dashboard/academy":
        setActive("academy");
        break;
      case "/dashboard/file-manager":
        setActive("file-manager");
        break;
      case "/dashboard/auth":
        setActive("auth");
        break;
      case "/dashboard/helpcenter/contact":
        setActive("contact");
        break;
      case "/dashboard/helpcenter/faq":
        setActive("faq");
        break;
      case "/dashboard/maintenance":
        setActive("maintenance");
        break;
      case "/dashboard/error/404":
        setActive("404");
        break;
      case "/dashboard/error/500":
        setActive("500");
        break;
      case "/dashboard/calendar":
        setActive("calendar");
        break;
      case "/dashboard/coming-soon":
        setActive("coming-soon");
        break;
      case "/dashboard/icons/magicoon":
        setActive("magicoon");
        break;
      case "/dashboard/cards":
        setActive("Cards");
        break;
      case "/dashboard/contacts":
        setActive("contacts");
        break;

      default:
        setActive("dashboard");
        break;
    }
  }, [pathname]);

  const toggleHandler = () => setToggle((prev) => !prev);
  const toggleProfileHandler = () => setToggleProfile((prev) => !prev);
  const toggleInvoiceHandler = () => setToggleInvoice((prev) => !prev);
  const toggleAuthHandler = () => setToggleAuth((prev) => !prev);
  const toggleErrorHandler = () => setToggleError((prev) => !prev);
  const toggleHelpCenterHandler = () => setToggleHelp((prev) => !prev);
  const toggleIconHandler = () => setToggleIcon((prev) => !prev);

  return (
    <div className=" z-50">
      <h1 className="text-base font-medium uppercase my-2 text-white">
        Management
      </h1>
      {/* Dashboard */}
      <div
        className={`${
          isOpen === false
            ? active === "dashboard" || pathname === "/dashboard"
              ? "bg-200 "
              : ""
            : active === "dashboard" || pathname === "/dashboard"
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer p-3  mb-2 text-white   rounded-xl hover:bg-200`}
        onClick={() => {
          setActive("dashboard"),
            setToggle(false),
            setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <Link
          href={"/dashboard"}
          className={
            isOpen === false
              ? "flex justify-center items-center hover:bg-200 rounded-lg"
              : `flex items-center justify-between gap-2`
          }
        >
          <Image src={DashboardIcon} alt={"dashboard"} />
          {isOpen ? (
            <>
              <div>
                <p className="text-base capitalize">Dashboard</p>
              </div>
              <div className="ml-auto"></div>
            </>
          ) : null}
        </Link>
      </div>
      {/* Analytics */}
      <div
        className={`${
          // isOpen === true ||
          toggle == true || pathname === "/dashboard/analytics/products"
            ? "bg-200"
            : ""
        }  gap-4 cursor-pointer   text-white p-3   rounded-xl hover:bg-200`}
        onClick={() => {
          // setToggle(false),
          setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <div
          className={
            isOpen === false
              ? "flex justify-center items-center hover:bg-200 rounded-lg"
              : `flex items-center justify-between gap-2 ${
                  toggle === true ? "bg-200 rounded-lg" : "bg-transparent"
                }`
          }
        >
          <Image src={Analytics} alt={"dashboard"} onClick={toggleHandler} />
          {isOpen ? (
            <>
              <div onClick={toggleHandler} className=" w-[70%]">
                <p className="text-base capitalize">analytics</p>
              </div>
              <div className="ml-auto" onClick={toggleHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`${
                    toggle === true ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </>
          ) : null}
        </div>
        {toggle && isOpen ? (
          <Link
            href={"/dashboard/analytics/products"}
            className={` ${
              active === "productss" ||
              pathname === "/dashboard/analytics/products"
                ? "bg-blue-300"
                : ""
            } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
            onClick={() => setActive("productss")}
          >
            Product
          </Link>
        ) : null}
      </div>
      {/* Profile */}
      <div
        className={`${
          // isOpen === false || toggleProfile == false ? "" : "bg-200 "
          toggleProfile == true ||
          pathname === "/dashboard/profile/adminprofile" ||
          pathname === "/dashboard/profile/customerprofile"
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer   text-white p-3  mt-3  rounded-xl hover:bg-200`}
        onClick={() => {
          // toggleProfileHandler(),
          setToggle(false),
            // setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <div
          className={
            isOpen === false
              ? "flex justify-center items-center hover:bg-200 rounded-lg"
              : `flex items-center justify-between gap-2 ${
                  toggleProfile === true
                    ? // ||
                      // pathname === "/dashboard/profile/customerprofile" ||
                      // pathname === "/dashboard/profile/adminprofile"
                      "bg-200 rounded-lg"
                    : "bg-transparent"
                }`
          }
        >
          <Image
            src={Profile}
            alt={"dashboard"}
            onClick={toggleProfileHandler}
          />
          {isOpen ? (
            <>
              <div onClick={toggleProfileHandler} className=" w-[70%]">
                <p className="text-base capitalize">Profile</p>
              </div>
              <div className="ml-auto" onClick={toggleProfileHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`${
                    toggleProfile === true ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </>
          ) : null}
        </div>
        {toggleProfile && isOpen ? (
          <>
            <Link
              href={"/dashboard/profile/adminprofile"}
              className={` ${
                active === "admin profile" ||
                pathname === "/dashboard/profile/adminprofile" ||
                pathname.includes("adminprofile")
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("admin profile")}
            >
              Admin Profile
            </Link>
            <Link
              href={"/dashboard/profile/customerprofile"}
              className={` ${
                active === "customer profile" ||
                pathname === "/dashboard/profile/customerprofile" ||
                pathname.includes("customerprofile")
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("customer profile")}
            >
              Customer Profile
            </Link>
          </>
        ) : null}
      </div>
      {/* finance */}
      <Link href={"/dashboard/finance"}>
        <div
          className={`${
            isOpen === false
              ? active === "finance" ||
                pathname === "/dashboard/finance" ||
                pathname.includes("finance")
                ? "bg-200"
                : ""
              : active === "finance" ||
                pathname === "/dashboard/finance" ||
                pathname.includes("finance")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("finance"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center  hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>

            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Finance</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* teams */}
      <Link href={"/dashboard/teams"}>
        <div
          className={`${
            isOpen === false
              ? active === "teams" ||
                pathname === "/dashboard/teams" ||
                pathname.includes("teams")
                ? "bg-200"
                : ""
              : active === "teams" ||
                pathname === "/dashboard/teams" ||
                pathname.includes("teams")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("teams"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center  hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Teams} alt={"Teams"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Teams</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* Task */}
      <Link href={"/dashboard/tasks"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "task" ||
                pathname === "/dashboard/tasks" ||
                pathname.includes("tasks")
                ? "bg-200"
                : ""
              : active === "task" ||
                pathname === "/dashboard/tasks" ||
                pathname.includes("tasks")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("task"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Task} alt={"Task"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Task</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* notifications */}
      <Link href={"/dashboard/notifications"}>
        <div
          className={`${
            isOpen === false
              ? active === "notifications" ||
                pathname === "/dashboard/notifications" ||
                pathname.includes("notifications")
                ? "bg-200"
                : ""
              : active === "notifications" ||
                pathname === "/dashboard/notifications" ||
                pathname.includes("notifications")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("notifications"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center  hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>

            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Notifications</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* Pricing */}
      <Link href={"/dashboard/price"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "price" ||
                pathname === "/dashboard/price" ||
                pathname.includes("price")
                ? "bg-200"
                : ""
              : active === "price" ||
                pathname === "/dashboard/price" ||
                pathname.includes("price")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("price"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Pricing</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* Customers */}
      <Link href={"/dashboard/customers"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "customers" ||
                pathname === "/dashboard/customers" ||
                pathname.includes("customers")
                ? "bg-200"
                : ""
              : active === "customers" ||
                pathname === "/dashboard/customers" ||
                pathname.includes("customers")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("customers"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Customers} alt={"Customers"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Customers</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* Products */}
      <Link href={"/dashboard/products"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "products" || pathname === "/dashboard/products"
                ? "bg-200"
                : ""
              : active === "products" || pathname === "/dashboard/products"
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("products"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Products} alt={"Products"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Products</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* Orders */}
      <Link href={"/dashboard/orders"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "orders" ||
                pathname === "/dashboard/orders" ||
                pathname.includes("orders")
                ? "bg-200"
                : ""
              : active === "orders" ||
                pathname === "/dashboard/orders" ||
                pathname.includes("orders")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("orders"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Orders} alt={"Orders"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Orders</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>

      {/* Invoices */}
      <div
        className={`${
          // isOpen === false || toggleInvoice == false ? "" : "bg-200"
          toggleInvoice == true ||
          pathname === "/dashboard/invoices/printable" ||
          pathname === "/dashboard/invoices"
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer   text-white p-3 mt-3  rounded-xl hover:bg-200`}
        onClick={() => {
          // toggleInvoiceHandler(),
          setToggle(false),
            setToggleProfile(false),
            // setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <div
          className={
            isOpen === false
              ? "flex justify-center items-center hover:bg-200 rounded-lg"
              : `flex items-center justify-between gap-2 ${
                  toggleInvoice === true
                    ? "bg-200 rounded-lg"
                    : "bg-transparent"
                }`
          }
        >
          <Image
            src={Invoices}
            alt={"Invoices"}
            onClick={toggleInvoiceHandler}
          />
          {isOpen ? (
            <>
              <div onClick={toggleInvoiceHandler} className=" w-[70%]">
                <p className="text-base capitalize">Invoices</p>
              </div>
              <div className="ml-auto" onClick={toggleInvoiceHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`${
                    toggleInvoice === true ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </>
          ) : null}
        </div>
        {toggleInvoice && isOpen ? (
          <>
            <Link
              href={"/dashboard/invoices"}
              className={` ${
                active === "invoices" || pathname === "/dashboard/invoices"
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("invoices")}
            >
              Invoice
            </Link>
            <Link
              href={"/dashboard/invoices/printable"}
              className={` ${
                active === "invoices printable" ||
                pathname === "/dashboard/invoices/printable" ||
                pathname.includes("printable")
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("invoices printable")}
            >
              Printable
            </Link>
          </>
        ) : null}
      </div>
      {/* Emails */}
      <Link href={"/dashboard/emails"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "emails" ||
                pathname === "/dashboard/emails" ||
                pathname.includes("emails")
                ? "bg-200"
                : ""
              : active === "emails" ||
                pathname === "/dashboard/emails" ||
                pathname.includes("emails")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("emails"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Emails} alt={"Emails"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Emails</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* Chats */}
      <Link href={"/dashboard/chats"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "chats" ||
                pathname === "/dashboard/chats" ||
                pathname.includes("chats")
                ? "bg-200"
                : ""
              : active === "chats" ||
                pathname === "/dashboard/chats" ||
                pathname.includes("chats")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("chats"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Chats} alt={"Chats"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Chats</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>

      {/* Academy */}

      <Link href={"/dashboard/academy"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "academy" ||
                pathname === "/dashboard/academy" ||
                pathname.includes("academy")
                ? "bg-200"
                : ""
              : active === "academy" ||
                pathname === "/dashboard/academy" ||
                pathname.includes("academy")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("academy"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            {/* <Image src={Academy} alt={"academy"} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
              width="20"
              height="20"
            >
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>

            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Academy</p>
                </div>
                <div className="ml-auto "></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>

      {/*file-manager */}

      <Link href={"/dashboard/file-manager"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "file-manager" ||
                pathname === "/dashboard/file-manager" ||
                pathname.includes("file-manager")
                ? "bg-200"
                : ""
              : active === "file-manager" ||
                pathname === "/dashboard/file-manager" ||
                pathname.includes("file-manager")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("file-manager"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            {/* <Image src={Academy} alt={"academy"} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 "
              width={20}
              height={20}
            >
              <path
                fillRule="evenodd"
                d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                clipRule="evenodd"
              />
            </svg>

            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">File Manager</p>
                </div>
                <div className="ml-auto "></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      <Link href={"/dashboard/contacts"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "contacts" ||
                pathname === "/dashboard/contacts" ||
                pathname.includes("contacts")
                ? "bg-200"
                : ""
              : active === "contacts" ||
                pathname === "/dashboard/contacts" ||
                pathname.includes("contacts")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("contacts"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>

            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Contacts</p>
                </div>
                <div className="ml-auto "></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>

      <h1 className="text-base font-medium uppercase my-2 text-white">pages</h1>

      {/* Auth */}
      <div
        className={`${
          isOpen === false || toggleAuth == false ? "" : "bg-200"
        } gap-4 cursor-pointer   text-white p-3  rounded-xl hover:bg-200`}
        onClick={() => {
          // toggleAuthHandler(),
          setToggle(false),
            setToggleProfile(false),
            setToggleInvoice(false),
            // setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <div
          className={
            isOpen === false
              ? "flex justify-center items-center hover:bg-200 rounded-lg"
              : `flex items-center justify-between gap-2 ${
                  toggleAuth === true ? "bg-200 rounded-lg" : "bg-transparent"
                }`
          }
        >
          <Image src={Auth} alt={"Auth"} onClick={toggleAuthHandler} />
          {isOpen ? (
            <>
              <div onClick={toggleAuthHandler} className=" w-[70%]">
                <p className="text-base capitalize">Auth</p>
              </div>
              <div className="ml-auto" onClick={toggleAuthHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`${
                    toggleAuth === true ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </>
          ) : null}
        </div>
        {toggleAuth && isOpen ? (
          <>
            <Link
              href={"/"}
              className={` ${
                active === "signin" ? "bg-blue-300" : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("signin")}
            >
              Signin
            </Link>
            <Link
              href={"/"}
              className={` ${
                active === "signup" ? "bg-blue-300" : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("signup")}
            >
              Signup
            </Link>
          </>
        ) : null}
      </div>
      {/* Help Center */}
      <div
        className={`${
          // isOpen === false || toggleHelp == false ? "" : "bg-200"
          toggleHelp == true ||
          pathname === "/dashboard/helpcenter/contact" ||
          pathname === "/dashboard/helpcenter/faq"
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer   text-white p-3 mt-3  rounded-xl hover:bg-200`}
        onClick={() => {
          // toggleHelpCenterHandler(),
          setToggle(false),
            setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            // setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <div
          className={
            isOpen === false
              ? "flex justify-center items-center hover:bg-200 rounded-lg"
              : `flex items-center justify-between gap-2 ${
                  toggleHelp === true ? "bg-200 rounded-lg" : "bg-transparent"
                }`
          }
        >
          <Image
            src={HelpCenter}
            alt={"Help Center"}
            onClick={toggleHelpCenterHandler}
          />
          {isOpen ? (
            <>
              <div onClick={toggleHelpCenterHandler} className=" w-[70%]">
                <p className="text-base capitalize">Help Center</p>
              </div>
              <div className="ml-auto" onClick={toggleHelpCenterHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`${
                    toggleHelp === true ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </>
          ) : null}
        </div>
        {toggleHelp && isOpen ? (
          <>
            <Link
              href={"/dashboard/helpcenter/contact"}
              className={` ${
                active === "contact" ||
                pathname === "/dashboard/helpcenter/contact" ||
                pathname.includes("contact")
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("contact")}
            >
              Contact
            </Link>
            <Link
              href={"/dashboard/helpcenter/faq"}
              className={` ${
                active === "faq" ||
                pathname === "/dashboard/helpcenter/faq" ||
                pathname.includes("faq")
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("faq")}
            >
              FAQ
            </Link>
          </>
        ) : null}
      </div>
      {/* Maintenance */}
      <Link href={"/dashboard/maintenance"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "maintenance" ||
                pathname === "/dashboard/maintenance" ||
                pathname.includes("maintenance")
                ? "bg-200"
                : ""
              : active === "maintenance" ||
                pathname === "/dashboard/maintenance" ||
                pathname.includes("maintenance")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("maintenance"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Maintenance} alt={"Maintenance"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Maintenance</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* Error */}
      <div
        className={`${
          // isOpen === false || toggleError == false ? "" : "bg-200"
          toggleError == true ||
          pathname === "/dashboard/error/404" ||
          pathname === "/dashboard/error/500"
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer   text-white p-3 mt-3 rounded-xl hover:bg-200`}
        onClick={() => {
          // toggleErrorHandler(),
          setToggle(false),
            setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            // setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <div
          className={
            isOpen === false
              ? "flex justify-center items-center hover:bg-200 rounded-lg"
              : `flex items-center justify-between gap-2 ${
                  toggleError === true ? "bg-200 rounded-lg" : "bg-transparent"
                }`
          }
        >
          <Image src={Error} alt={"Error"} onClick={toggleErrorHandler} />
          {isOpen ? (
            <>
              <div onClick={toggleErrorHandler} className=" w-[70%]">
                <p className="text-base capitalize">Error</p>
              </div>
              <div className="ml-auto" onClick={toggleErrorHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`${
                    toggleError === true ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </>
          ) : null}
        </div>
        {toggleError && isOpen ? (
          <>
            <Link
              href={"/dashboard/error/404"}
              className={` ${
                active === "404" ||
                pathname === "/dashboard/error/404" ||
                pathname.includes("404")
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("404")}
            >
              404
            </Link>
            <Link
              href={"/dashboard/error/500"}
              className={` ${
                active === "500" ||
                pathname === "/dashboard/error/500" ||
                pathname.includes("500")
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("500")}
            >
              500
            </Link>
          </>
        ) : null}
      </div>
      {/* comming soon */}
      <Link href={"/dashboard/coming-soon"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "coming-soon" ||
                pathname === "/dashboard/coming-soon" ||
                pathname.includes("coming-soon")
                ? "bg-200"
                : ""
              : active === "coming-soon" ||
                pathname === "/dashboard/coming-soon" ||
                pathname.includes("coming-soon")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("coming-soon"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Coming Soon</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      {/* Calendar */}
      <Link href={"/dashboard/calendar"} className="w-full">
        <div
          className={`${
            isOpen === false
              ? active === "calendar" ||
                pathname === "/dashboard/calendar" ||
                pathname.includes("calendar")
                ? "bg-200"
                : ""
              : active === "calendar" ||
                pathname === "/dashboard/calendar" ||
                pathname.includes("calendar")
              ? "bg-200"
              : ""
          } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
          onClick={() => {
            setActive("calendar"),
              setToggle(false),
              setToggleProfile(false),
              setToggleInvoice(false),
              setToggleAuth(false),
              setToggleError(false),
              setToggleHelp(false),
              setToggleIcon(false);
          }}
        >
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Calendar} alt={"Calendar"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Calendar</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </Link>
      <h1 className="text-base font-medium   uppercase my-2 text-white">
        compoenents
      </h1>

      {/* Icons */}

      <div
        className={`${
          // isOpen === false || toggleIcon == false ? "" : "bg-200"
          toggleIcon == true || pathname === "/dashboard/icons/magicoon"
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer   text-white p-3  rounded-xl hover:bg-200 `}
        onClick={() => {
          // toggleIconHandler(),
          setToggle(false),
            setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false);
        }}
      >
        <div
          className={
            isOpen === false
              ? "flex justify-center items-center hover:bg-200 rounded-lg"
              : `flex items-center justify-between gap-2 ${
                  toggleIcon === true ? "bg-200 rounded-lg" : "bg-transparent"
                }`
          }
        >
          <Image src={Icons} alt={"Error"} onClick={toggleIconHandler} />
          {isOpen ? (
            <>
              <div onClick={toggleIconHandler} className=" w-[70%]">
                <p className="text-base capitalize">Icons</p>
              </div>
              <div className="ml-auto" onClick={toggleIconHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={`${
                    toggleIcon === true ? "rotate-180" : ""
                  } h-5 w-5 transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </>
          ) : null}
        </div>
        {toggleIcon && isOpen ? (
          <>
            <Link
              href={"/dashboard/icons/magicoon"}
              className={` ${
                active === "magicoon" ||
                pathname === "/dashboard/icons/magicoon" ||
                pathname.includes("magicoon")
                  ? "bg-blue-300"
                  : ""
              } rounded-b-lg  hover:rounded-md mt-1 p-2 block  hover:bg-blue-300`}
              onClick={() => setActive("magicoon")}
            >
              magicoon
            </Link>
          </>
        ) : null}
      </div>
      {/* Cards */}

      <div
        className={`${
          isOpen === false
            ? active === "Cards" ||
              pathname === "/dashboard/cards" ||
              pathname.includes("cards")
              ? "bg-200"
              : ""
            : active === "Cards" ||
              pathname === "/dashboard/cards" ||
              pathname.includes("cards")
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
        onClick={() => {
          setActive("Cards"),
            setToggle(false),
            setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <Link href={"/dashboard/cards"} className="w-full">
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Cards} alt={"Cards"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Cards</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </Link>
      </div>
      {/* Gallery */}

      <div
        className={`${
          isOpen === false
            ? active === "Gallery" ||
              pathname === "/dashboard/gallery" ||
              pathname.includes("gallery")
              ? "bg-200"
              : ""
            : active === "Gallery" ||
              pathname === "/dashboard/gallery" ||
              pathname.includes("gallery")
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
        onClick={() => {
          setActive("Gallery"),
            setToggle(false),
            setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <div className="w-full">
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Gallery} alt={"Cards"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">Gallery</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      {/* Charts */}

      <div
        className={`${
          isOpen === false
            ? active === "charts" ||
              pathname === "/dashboard/charts" ||
              pathname.includes("charts")
              ? "bg-200"
              : ""
            : active === "charts" ||
              pathname === "/dashboard/charts" ||
              pathname.includes("charts")
            ? "bg-200"
            : ""
        } gap-4 cursor-pointer  p-3 mt-2 text-white   rounded-xl hover:bg-200`}
        onClick={() => {
          setActive("charts"),
            setToggle(false),
            setToggleProfile(false),
            setToggleInvoice(false),
            setToggleAuth(false),
            setToggleError(false),
            setToggleHelp(false),
            setToggleIcon(false);
        }}
      >
        <div className="w-full cursor-pointer">
          <div
            className={
              isOpen === false
                ? "flex justify-center items-center hover:bg-200 rounded-lg"
                : `flex items-center justify-between gap-2`
            }
          >
            <Image src={Charts} alt={"Cards"} />
            {isOpen ? (
              <>
                <div>
                  <p className="text-base capitalize">charts</p>
                </div>
                <div className="ml-auto"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
