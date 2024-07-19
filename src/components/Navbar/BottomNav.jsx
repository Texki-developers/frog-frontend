import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { navData } from "./navbar.data";
import { useNavigate } from "react-router";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="flex w-[100%] justify-between gap-[1rem] fixed bottom-0 left-0 bg-black p-[1rem] text-white">
      {navData.map((item, index) => (
        <div
          className="flex flex-col items-center"
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <p className="text-[0.8rem]">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
