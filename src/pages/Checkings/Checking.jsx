import React from "react";
import CheckingValidation from "../../components/checkingValidation/CheckingValidation";
import { useNavigate } from "react-router";

export default function Checking() {
  const navigation = useNavigate()
  return (
    <div className="text-2xl p-[1rem] flex flex-col min-h-[100vh]">
      <div className="flex flex-col items-center text-center gap-[3rem] justify-center flex-1">
        <h3 className="text-[2rem] leading-[40px] font-[600]">
          Checking <br /> Your Account
        </h3>
        <div className="flex flex-col w-[100%] gap-[1rem]">
          <CheckingValidation
            title="Account Age Verified"
            isProgressing
            progress="100"
          />
          <CheckingValidation
            title="Account Age Verified"
            isProgressing
            progress="100"
          />
          <CheckingValidation
            title="Account Age Verified"
            isProgressing
            progress="100"
          />
          <CheckingValidation
            title="Account Age Verified"
            isProgressing
            progress="100"
          />
        </div>
      </div>
      <button onClick={()=> navigation('/rising-star')}  className="btn-common btn-solid">Continue</button>
    </div>
  );
}
