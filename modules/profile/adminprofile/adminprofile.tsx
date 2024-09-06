import AdminActivity from "@/components/profile/adminprofile/admin-activity";
import {
  adminData,
  activityData,
} from "@/components/profile/adminprofile/admin-data";
import AdminProfileDetails from "@/components/profile/adminprofile/admin-profile-details";
import React from "react";

export default function AdminProfile() {
  return (
    <div className="m-4 h-auto">
      <div className="flex gap-4 lg:flex-row xs:flex-col">
        <div className="space-y-4 lg:w-[35%] xs:w-full ">
          <div className="bg-white dark:bg-dark rounded-lg p-4">
            {adminData.map((item, index) => (
              <AdminProfileDetails
                person={item.person}
                name={item.name}
                title={item.title}
                editIcon={item.editIcon}
                edit={item.edit}
                messageIcon={item.messageIcon}
                message={item.message}
                emailTitle={item.emailTitle}
                email={item.email}
                birthdayTitle={item.birthdayTitle}
                birthday={item.birthday}
                phoneTitle={item.phoneTitle}
                phone={item.phone}
                countryTitle={item.countryTitle}
                country={item.country}
                stateTitle={item.stateTitle}
                state={item.state}
                addressTitle={item.addressTitle}
                address={item.address}
              />
            ))}
          </div>
        </div>
        <div className="bg-white dark:bg-dark rounded-lg p-4 lg:w-[65%] xs:w-full relative ">
          {activityData.map((item, index) => (
            <div key={index}>
              <AdminActivity
                date={item.date}
                time={item.time}
                status={item.status}
                text={item.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
