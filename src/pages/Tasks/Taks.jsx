import React from "react";
import TasksCard from "../../components/tasksCard/TasksCard";
import icon from "../../assets/images/ape.jpg";

export default function Taks() {
  return (
    <div className="flex flex-col p-[1rem] items-center gap-[2rem] pb-[5rem]">
      <h3 className="text-[1.8rem] font-[600] text-center">Tasks</h3>
      <div className="flex flex-col items-start text-left w-[100%] gap-[0.5rem]">
        <h4 className="text-[1.3rem] font-[600] text-left">Special Tasks</h4>
        <TasksCard icon={icon} title="Task title" description="Get 500+ Apes" />
      </div>

      <div className="flex flex-col items-start text-left w-[100%] gap-[0.5rem]">
        <h4 className="text-[1.3rem] font-[600] text-left">Other Tasks</h4>
        <TasksCard icon={icon} title="Task title" description="Get 500+ Apes" />
        <TasksCard icon={icon} title="Task title" description="Get 500+ Apes" />
        <TasksCard icon={icon} title="Task title" description="Get 500+ Apes" />
      </div>
    </div>
  );
}
