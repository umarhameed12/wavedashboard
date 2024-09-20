"use client";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import { SidebarProvider, useSidebar } from "../context/sidebar-context";
const DashboardLayoutContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isCollapsed } = useSidebar();
  return (
    <div className="w-full lg:min-h-screen flex">
      <div
        className={` ${
          isCollapsed ? "" : "fixed top-0 bottom-0 left-0 z-10"
        }`}
      >
        <Sidebar />
      </div>
      <div className={`bg-100 dark:bg-dark200  ${isCollapsed ? "lg:w-[83%]" : "w-full"}`}>
        <Header />
        <div
          className={`overflow-y-scroll no-scrollbar max-h-screen ${
            isCollapsed ? "" : "lg:pl-20"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
}
