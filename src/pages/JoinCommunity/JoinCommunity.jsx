import React from "react";
import frog from "../../assets/images/frog.png";
import { CiCalendarDate } from "react-icons/ci";

export default function JoinCommunity() {
  return (
    <div className="flex flex-col p-[1rem] items-center gap-[2rem] pb-[5rem]">
      <div className="w-[100%] bg-pink-50 p-[5px] uppercase text-basic text-[0.8rem] font-[500] text-center rounded-[6px]">
        🐸 Get more frogs soon with nomis
      </div>
      <div>
        <img src={frog} className="w-[10rem]" />
        <h2 className="text-[1.8rem] font-[600]">1000 Frogs</h2>
      </div>
      <div
        className="w-[100%] rounded-[20px] flex flex-col items-center justify-center p-[1rem] gap-[0.5rem]"
        style={{
          background:
            "linear-gradient(180deg, rgba(232,232,232,1) 0%, rgba(214,214,214,0.1012998949579832) 47%)",
        }}
      >
        <p className="text-basic uppercase">🐸 Frogs Community</p>
        <p className="text-[0.7rem] text-grey-300 text-center">
          Home for Telegram OGs
        </p>
        <button onClick={()=>window.open('https://t.me/dogs_community')} className="text-white bg-black btn-common">
          Join for +100 Frogs
        </button>
      </div>
      <h3 className="text-[1.1rem]">Your Rewards</h3>
      <div className="flex justify-between items-center w-[100%] gap-[1rem]">
        <div className="p-[1rem] bg-grey-50 rounded-[50%]">
          <CiCalendarDate className="text-[1.2rem]" />
        </div>
        <p className="text-basic flex-1">Account Age</p>
        <p className="text-basic">+850 Frogs</p>
      </div>
    </div>
  );
}
