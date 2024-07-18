import React from "react";
import { SiTicktick } from "react-icons/si";
import "./checkingVaildation.css";
import { useState } from "react";
import { useLayoutEffect } from "react";

export default function CheckingValidation({
  title
}) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setTimeout(() => {
      setWidth(100);
    }, 500);
  }, []);
  return (
    <div className="flex flex-col gap-[0.5rem] w-[100%]">
      <div className="flex justify-between gap-[1rem] items-center w-[100%]">
        <p className="text-basic">{title}</p>
        <SiTicktick
          className={`text-[1.1rem] ${
            width === 0 ? "text-grey-300" : "text-primary-300"
          }`}
          style={{ transition: "all 2s ease" }}
        />
      </div>
      <div className="w-[100%] h-[0.6rem] rounded-[50px] bg-grey-50">
        <div
          style={{ width: `${width}%`, transition: "all 2s ease" }}
          className={`bg-primary-300 h-[100%] rounded-[50px]`}
        ></div>
      </div>
    </div>
  );
}
