import { Button } from "@material-tailwind/react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Plus, Trash, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import MaleOne from "@/assets/settings/male-01.jpg";
import MaleTwo from "@/assets/settings/male-03.jpg";
import FemaleOne from "@/assets/settings/female-02.jpg";
import FemaleTwo from "@/assets/settings/female-03.jpg";
import MaleThree from "@/assets/settings/male-07.jpg";
import MaleFour from "@/assets/settings/male-08.jpg";
import FemaleThree from "@/assets/settings/female-07.jpg";

const Team = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const users = [
    {
      id: 1,
      name: "Dejesus Michael",
      email: "dejesusmichael@mail.org",
      image: MaleOne,
    },
    {
      id: 2,
      name: "Mclaughlin Steele",
      email: "mclaughlinsteele@mail.me",
      image: MaleTwo,
    },
    {
      id: 3,
      name: "Laverne Dodson",
      email: "lavernedodson@mail.ca",
      image: FemaleOne,
    },
    {
      id: 4,
      name: "Trudy Berg",
      email: "trudyberg@mail.us",
      image: FemaleTwo,
    },
    {
      id: 5,
      name: "Lamb Underwood",
      email: "lambunderwood@mail.me",
      image: MaleThree,
    },
    {
      id: 6,
      name: "Mcleod Wagner",
      email: "mcleodwagner@mail.biz",
      image: MaleFour,
    },
    {
      id: 7,
      name: "Shannon Kennedy",
      email: "shannonkennedy@mail.ca",
      image: FemaleThree,
    },
  ];
  return (
    <div className="space-y-5 w-full">
      <h2 className="text-xl font-extrabold">Team </h2>
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-700 dark:text-[#E0E0E0]">
            Add team member
          </span>
          <div className="mt-1 w-full relative rounded-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Enter email"
              className="block w-full pl-10 pr-3 shadow-sm dark:bg-[#1E1E1E] dark:text-[#E0E0E0] py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <Button className="shadow-none bg-transparent rounded-full border border-gray-500 p-1 hover:bg-[#000000] hover:bg-opacity-5">
                <Plus className="h-3 w-3 text-gray-500" />
              </Button>
            </div>
          </div>
        </label>
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between w-full flex-wrap gap-3"
          >
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={user.image}
                  alt={`${user.name}-avatar`}
                  className="object-cover w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <p className="text-base">{user.name}</p>
                <p className="text-sm text-[#5F6368]">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <FormControl sx={{ m: 0, minWidth: 80 }} size="small">
                  <Select value={age} onChange={handleChange} className="text-black dark:text-white">
                    <MenuItem value={10}>Read</MenuItem>
                    <MenuItem value={20}>Write</MenuItem>
                    <MenuItem value={30}>Admin</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <Button className="bg-transparent shadow-none hover:bg-[#000000] hover:bg-opacity-5 p-2">
                  <Trash className="text-[#00000080] dark:text-white text-opacity-5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end w-full gap-4">
          <Button className="text-[#000000] dark:text-[#E0E0E0] border border-[#000000]">
            Cancel
          </Button>
          <Button className="text-white bg-[#00A4EF] hover:bg-[#0078D7]">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Team;
