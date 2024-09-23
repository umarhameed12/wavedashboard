"use client";
import TaskCard from "@/components/task/task-card";
import TaskHeader from "@/components/task/task-header";
import React, { useState } from "react";
import { cardsData, taskHeaderData } from "./task-data";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { task } from "./task-data";

export default function Task() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      status: "In Progress",
      type: "meeting",
      color: "bg-orange-100",
      title: "",
      para: "planning meeting for the next phase",
    },
    {
      id: "2",
      status: "In Progress",
      type: "Wireframes",
      color: "bg-purple-300",
      title: "privacy policy page and terms & conditions",
      para: "all the details are attached. it’ll be dope!",
    },
    {
      id: "3",
      status: "On Hold",
      type: "UX Design",
      color: "bg-blue-200",
      title: "IOS App - 95 Screens",
      para: "all the details are attached. it’ll be dope!",
    },
    {
      id: "4",
      status: "On Hold",
      type: "UX Design",
      color: "bg-blue-200",
      title: "IOS App - 95 Screens",
      para: "all the details are attached. it’ll be dope!",
    },
    {
      id: "5",
      status: "In Review",
      type: "UX Design",
      color: "bg-blue-200",
      title: "IOS App - 95 Screens",
      para: "all the details are attached. it’ll be dope!",
    },
    {
      id: "6",
      status: "In Review",
      type: "Wireframes",
      color: "bg-yellow-200",
      title: "IOS App - 95 Screens",
      para: "all the details are attached. it’ll be dope!",
    },
    {
      id: "7",
      status: "Approved",
      type: "UX Design",
      color: "bg-blue-200",
      title: "IOS App - 95 Screens",
      para: "all the details are attached. it’ll be dope!",
    },
    {
      id: "8",
      status: "Approved",
      type: "UX Design",
      color: "bg-blue-200",
      title: "IOS App - 95 Screens",
      para: "all the details are attached. it’ll be dope!",
    },
  ]);

  const moveTodo = (id: string, newStatus: string) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: newStatus };
        }
        return todo;
      });
      return updatedTodos; // Return the updated array
    });
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="m-4">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4 my-4">
          {/* <TaskHeader todos={todos} status="In Progress" moveTodo={moveTodo} /> */}
          <TaskHeader todos={todos} status="In Progress" moveTodo={moveTodo} />
          <TaskHeader todos={todos} status="On Hold" moveTodo={moveTodo} />
          <TaskHeader todos={todos} status="In Review" moveTodo={moveTodo} />
          <TaskHeader todos={todos} status="Approved" moveTodo={moveTodo} />
        </div>
      </div>
    </DndProvider>
  );
}
