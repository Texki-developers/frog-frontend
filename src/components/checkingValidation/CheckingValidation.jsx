import React from "react";
import { SiTicktick } from "react-icons/si";

export default function CheckingValidation({ progress, title, isProgressing }) {
  return (
    <div className="flex flex-col gap-[0.5rem] w-[100%]">
      <div className="flex justify-between gap-[1rem] items-center w-[100%]">
        <p className="text-basic">{title}</p>
        <SiTicktick className={`text-[1.1rem] ${isProgressing? 'text-grey-300' : 'text-primary-300'}`} />
      </div>
      <div className="w-[100%] h-[0.6rem] rounded-[50px] bg-grey-50">
        <div
          className={`${isProgressing? 'w-[10%]' : 'w-[${progress}%]'} bg-primary-300 h-[100%] rounded-[50px]`}
        ></div>
      </div>
    </div>
  );
}
