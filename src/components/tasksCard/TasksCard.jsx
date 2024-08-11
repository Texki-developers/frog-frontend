import React from "react";

export default function TasksCard({ title, description, icon }) {
  return (
    <div className="flex items-center gap-[0.5rem] bg-slate-50 p-[5px] rounded-[8px] w-[100%]">
      <div>
        <img
          src={icon}
          className="aspect-square w-[3rem] object-cover rounded-full"
          alt=""
        />
      </div>
      <div className="flex-1 justify-between flex items-center">
        <div className="flex flex-col gap-[0.3rem]">
          <h6 className="text-[1.1rem] font-[600] text-left">{title}</h6>
          <p className="text-[0.9rem]">{description}</p>
        </div>
        <button className="bg-primary-300 text-white text-[0.9rem] px-[1rem] py-[0.3rem] rounded-[4px]">
          Claim
        </button>
      </div>
    </div>
  );
}
