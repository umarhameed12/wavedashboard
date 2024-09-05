import Image from "next/image";
import Link from "next/link";
import React from "react";
import dots from "@/assets/task/dots.svg";
import Plus from "@/assets/task/Plus.svg";
import TaskCard from "./task-card";
import { useDrop } from "react-dnd";
interface TaskHeader {
  todos: Todo[];
  status: string;
  moveTodo: (id: string, status: string) => void;
}
interface Todo {
  id: string;
  status: string;
  type: string;
  color: string;
  title: string;
  para: string;
}
export default function TaskHeader({ status, todos, moveTodo }: TaskHeader) {
  let bg = "bg-200";
  if (status == "On Hold") {
    bg = "bg-red";
  } else if (status == "In Review") {
    bg = "bg-yellow-400";
  } else if (status == "Approved") {
    bg = "bg-green";
  }
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TODO_ITEM",
    drop: (item: { id: string; status: string }) => {
      if (item.status !== status) {
        moveTodo(item.id, status);
        addItemToSection(item.id, status);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToSection = (id: any, status: any) => {
    console.log(id, status);
  };
  return (
    <div ref={drop}>
      <button className="flex items-center gap-2 w-full text-white bg-dark p-4 rounded-lg mb-8">
        <span className={`${bg} w-2 h-2 rounded-full`}></span> {status}
        <Link href={""} className="ml-auto">
          <Image src={dots} alt="" />
        </Link>
      </button>
      <div>
        <Link
          href={""}
          className="bg-200  rounded-lg p-2 flex justify-center items-center"
        >
          <Image src={Plus} alt="Plus Icon" />
        </Link>
      </div>
      <div className={`my-4 `}>
        {/* <div className="bg-white dark:bg-dark p-4 rounded-t-lg"> */}
        {todos
          .filter((todo) => todo.status === status)
          .map((todo) => (
            <TaskCard
              key={todo.id}
              id={todo.id}
              status={status}
              type={todo.type}
              color={todo.color}
              title={todo.title}
              para={todo.para}
              moveTodo={moveTodo}
            />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
}
