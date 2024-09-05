import React from "react";
import { TeamsData } from "./teamsData";
import TeamCards from "./TeamItem";

export default function Teams() {
  return (
    <div className="grid  m-4 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ">
      {TeamsData.map((item, index) => (
        // <div className="w-1/5 ">
        <TeamCards
          key={index}
          icon={item.icon}
          name={item.name}
          role={item.role}
        />
        // </div>
      ))}
    </div>
  );
}
