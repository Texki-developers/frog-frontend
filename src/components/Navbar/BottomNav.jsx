import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { navData } from "./navbar.data";

export default function BottomNav() {
  return (
    <div className="flex w-[100%] justify-between gap-[1rem] fixed bottom-0 left-0 bg-white p-[1rem]">
      {navData.map((item, index) => (
        <div className="flex flex-col items-center">
          {item.icon}
          <p className="text-[0.8rem]">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
