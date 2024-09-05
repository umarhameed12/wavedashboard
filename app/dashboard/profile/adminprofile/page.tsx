import dynamic from "next/dynamic";
import React from "react";
const AdminProfile = dynamic(
  () => import("@/modules/profile/adminprofile/adminprofile"),
  {
    ssr: false,
  }
);
export default function page() {
  return <AdminProfile />;
}
