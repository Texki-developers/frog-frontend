import React from "react";

export default function Home() {
  return (
    <div className="text-2xl p-[1rem] flex flex-col min-h-[100vh]">
      <div className="flex flex-col items-center text-center gap-[1rem] justify-center flex-1">
        <h3 className="font-[600]">👋 Hey!</h3>
        <p className="text-basic text-grey-400">
          You've been in Telegram for a while, it's time to get rewarded
        </p>
      </div>
      <button className="btn-common btn-solid">Wow, Let's go</button>
    </div>
  );
}
