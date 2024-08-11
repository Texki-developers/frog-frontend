import React from "react";

export default function CountdownTimer({ days, hours, mins, seconds }) {
  return (
    <div className="flex flex-col gap-[0.5rem] p-[0.5rem] px-[1rem] rounded-[8px] bg-primary-400 text-white">
      <p className="text-[1rem]">Timer Title</p>
      <div className="flex gap-[0.5rem]">
        <div className="flex flex-col items-center">
          <p className="p-[0.5rem] bg-slate-200 rounded-[5px] w-[3rem] h-[3em] flex items-center justify-center text-[1.2rem] font-[600] text-black">
            {(days < 10 ? `0${days}` : days) || 0}
          </p>
          <p>Days</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="p-[0.5rem] bg-slate-200 rounded-[5px] w-[3rem] h-[3em] flex items-center justify-center text-[1.2rem] font-[600] text-black">
            {(hours < 10 ? `0${hours}` : hours) || 0}
          </p>
          <p>Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="p-[0.5rem] bg-slate-200 rounded-[5px] w-[3rem] h-[3em] flex items-center justify-center text-[1.2rem] font-[600] text-black">
            {(mins < 10 ? `0${mins}` : mins) || 0}
          </p>
          <p>Mins</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="p-[0.5rem] bg-slate-200 rounded-[5px] w-[3rem] h-[3em] flex items-center justify-center text-[1.2rem] font-[600] text-black">
            {seconds < 10 ? `0${seconds}` : seconds || 0}
          </p>
          <p>Sec</p>
        </div>
      </div>
    </div>
  );
}
