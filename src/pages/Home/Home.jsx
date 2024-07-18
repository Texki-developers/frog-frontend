import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
const navigate = useNavigate()

  useEffect(() => {
    console.log({ data: window?.Telegram?.WebApp?.initDataUnsafe?.user?.id },"user data");
    console.log({ data: window?.Telegram?.WebApp?.initDataUnsafe });
    console.log({ data2: window?.Telegram?.WebApp });
    console.log({ data2: window?.Telegram });
  }, []);
  console.log({ location });
  return (
    <div className="text-2xl p-[1rem] flex flex-col min-h-svh">
      <div className="flex flex-col items-center text-center gap-[1rem] justify-center flex-1">
        <h3 className="font-[600]">👋 Hey!</h3>
        <p className="text-basic text-grey-400 ">
          You've been in Telegram for a while, it's time to get rewarded
        </p>
      </div>
      <button onClick={()=>{navigate('/checking')}} className="btn-common btn-solid">Wow, Let's go</button>
    </div>
  );
}
