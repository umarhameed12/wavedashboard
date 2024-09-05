"use client";

import { profileData } from "@/components/profile/individual/individual-data";
import IndividualDatatable from "@/components/profile/individual/individual-datatable";
import IndividualHeader from "@/components/profile/individual/individual-header";
import IndividualProfile from "@/components/profile/individual/individual-profile";
import React from "react";

export default function Individual() {
  return (
    <div className="m-4 h-auto">
      <div className="flex gap-4 lg:flex-row xs:flex-col">
        <div className="space-y-4 lg:w-[35%] xs:w-full ">
          <div className="bg-white dark:bg-dark rounded-lg p-4">
            {profileData.map((item, index) => (
              <IndividualProfile
                key={index}
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
        <div className="bg-white dark:bg-dark rounded-lg p-4 lg:w-[65%] xs:w-full">
          <div>
            <IndividualHeader />
          </div>
          <div className="my-4">
            <IndividualDatatable />
          </div>
        </div>
      </div>
    </div>
  );
}
