import React from "react";
import frog from "../../assets/images/frog.png";

export default function InvitePage() {
  return (
    <div className="text-2xl p-[1rem] flex flex-col min-h-[100vh] text-center justify-between items-center pb-[5rem]">
      <h3 className="text-[1.7rem] leading-[40px] font-[600]">
        Invite Friends <br /> and get more FROGS
      </h3>
      <img src={frog} className="w-[10rem]" />
      <div className="w-[100%]">
        <p className="text-[0.7rem] text-grey-300 text-center">Tap on the button to invite your friends</p>
        <button className="btn-common btn-solid w-[100%]">Invite Friends</button>
      </div>
    </div>
  );
}
