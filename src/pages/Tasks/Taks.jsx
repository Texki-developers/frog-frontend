import React from "react";
import TasksCard from "../../components/tasksCard/TasksCard";
import icon from "../../assets/images/ape.jpg";
import CoinsModal from "../../components/CoinsModal/CoinsModal";
import { useState } from "react";

export default function Taks() {
  const [isOpen, setOpen] = useState(false);
  const [redeemCode, setRedeemCode] = useState();
  const [loading, setLoading] = useState(true);

  const handleClosing = () => {
    setOpen(false);
  };

  const secretCodeHandler = () => {
    setOpen(true);
  };
  return (
    <div className="flex flex-col p-[1rem] items-center gap-[2rem] pb-[5rem]">
      <CoinsModal
        isOpen={isOpen}
        points={redeemCode}
        isLoading={loading}
        onClose={handleClosing}
      />
      <h3 className="text-[1.8rem] font-[600] text-center">Tasks</h3>
      <div className="flex flex-col items-start text-left w-[100%] gap-[0.5rem]">
        <h4 className="text-[1.3rem] font-[600] text-left">Special Tasks</h4>
        <TasksCard
          icon={icon}
          title="Redeem Secret Code"
          description="Get 500+ Apes"
          clickHandler={secretCodeHandler}
        />
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
