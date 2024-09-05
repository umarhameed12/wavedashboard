import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-100 dark:bg-dark200 lg:min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="max-h-[90vh]  overflow-y-scroll no-scrollbar ">
          {children}
        </div>
      </div>
    </div>
  );
}
